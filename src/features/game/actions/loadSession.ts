import { wallet } from "lib/blockchain/wallet";
import { CONFIG } from "lib/config";
import { ERRORS } from "lib/errors";
import { sanitizeHTTPResponse } from "lib/network";
import { makeGame } from "../lib/transforms";
import { GameState } from "../types/game";
import { Announcements } from "../types/conversations";
import {
  getReferrerId,
  getSignupMethod,
} from "features/auth/actions/createAccount";
import { Moderation } from "../lib/gameMachine";

type Request = {
  token: string;
  transactionId: string;
  wallet: string;
};

type Response = {
  farmId: string;
  farmAddress?: string;
  game: GameState;
  isBlacklisted?: boolean;
  deviceTrackerId: string;
  announcements: Announcements;
  transaction?: {
    type: "withdraw_bumpkin";
    expiresAt: number;
  };
  verified: boolean;
  promoCode?: string;
  moderation: Moderation;
  sessionId: string;
  analyticsId: string;
};

const API_URL = CONFIG.API_URL;

export async function loadSession(request: Request): Promise<Response> {
  const promoCode = getPromoCode();
  const referrerId = getReferrerId();
  const signUpMethod = getSignupMethod();

  const response = await window.fetch(`${API_URL}/session`, {
    method: "POST",
    //mode: "no-cors",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${request.token}`,
      accept: "application/json",
      "X-Transaction-ID": request.transactionId,
    },
    body: JSON.stringify({
      clientVersion: CONFIG.CLIENT_VERSION as string,
      wallet: request.wallet,
      promoCode,
      referrerId,
      signUpMethod,
    }),
  });

  if (response.status === 503) {
    throw new Error(ERRORS.MAINTENANCE);
  }

  if (response.status === 429) {
    throw new Error(ERRORS.TOO_MANY_REQUESTS);
  }

  if (response.status === 401) {
    throw new Error(ERRORS.SESSION_EXPIRED);
  }

  if (response.status >= 400) {
    throw new Error(ERRORS.SESSION_SERVER_ERROR);
  }

  const {
    farm,
    isBlacklisted,
    deviceTrackerId,
    announcements,
    transaction,
    verified,
    moderation,
    promoCode: promo,
    farmId,
    sessionId,
    farmAddress,
    analyticsId,
  } = await sanitizeHTTPResponse<{
    farm: any;
    startedAt: string;
    isBlacklisted: boolean;
    deviceTrackerId: string;
    status?: "COOL_DOWN";
    announcements: Announcements;
    transaction: { type: "withdraw_bumpkin"; expiresAt: number };
    verified: boolean;
    moderation: Moderation;
    promoCode?: string;
    sessionId: string;
    farmId: string;
    analyticsId: string;
    farmAddress?: string;
  }>(response);

  saveSession(farm.id);

  return {
    farmAddress,
    sessionId,
    farmId,
    game: makeGame(farm),
    isBlacklisted,
    deviceTrackerId,
    announcements,
    transaction,
    verified,
    moderation,
    promoCode: promo,
    analyticsId,
  };
}

const host = window.location.host.replace(/^www\./, "");
const LOCAL_STORAGE_KEY = `sb_wiz.xtc.t.${host}-${window.location.pathname}`;

// Farm ID -> ISO Date
type FarmSessions = Record<number, { account: string }>;

export function getSessionId(): string {
  const item = localStorage.getItem(LOCAL_STORAGE_KEY);

  let id = "";
  if (item) {
    const sessions = JSON.parse(item) as FarmSessions;
    id = Object.values(sessions).join(":");
  }

  return id;
}

export function saveSession(farmId: number) {
  let sessions: FarmSessions = {};

  const item = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (item) {
    sessions = JSON.parse(item) as FarmSessions;
  }

  const farmSession = {
    farmId,
    loggedInAt: Date.now(),
    account: wallet.myAccount,
  };

  const cacheKey = Buffer.from(JSON.stringify(farmSession)).toString("base64");

  const newSessions = {
    ...sessions,
    [farmId]: cacheKey,
  };

  return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSessions));
}

const PROMO_LS_KEY = `sb_wiz.promo-key.v.${host}`;

export function savePromoCode(id: string) {
  localStorage.setItem(PROMO_LS_KEY, id);
}

export function getPromoCode() {
  const item = localStorage.getItem(PROMO_LS_KEY);

  if (!item) {
    return undefined;
  }

  return item;
}

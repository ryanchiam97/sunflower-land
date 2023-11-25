export type GeneralTerms =
  | "2x.sale"
  | "achievements"
  | "add.liquidity"
  | "alrClaim"
  | "alrClaim"
  | "auctions"
  | "back"
  | "bait"
  | "basket"
  | "beta"
  | "bounty"
  | "build"
  | "buy"
  | "cancel"
  | "card.cash"
  | "chest"
  | "chores"
  | "claim"
  | "claimSkill"
  | "claimSkill"
  | "clear"
  | "close"
  | "craft"
  | "crafting"
  | "comingSoon"
  | "completed"
  | "congrats"
  | "connected"
  | "connecting"
  | "continue"
  | "cook"
  | "coupons"
  | "crops"
  | "date"
  | "delivery"
  | "deliveries"
  | "details"
  | "easter.eggs"
  | "equip"
  | "error"
  | "exotics"
  | "explore"
  | "farm"
  | "featured"
  | "feed.bumpkin"
  | "fertilisers"
  | "fish"
  | "fish.caught"
  | "foods"
  | "for"
  | "forbidden"
  | "fruit"
  | "fruits"
  | "gotIt"
  | "grant.wish"
  | "guide"
  | "hungry?"
  | "info"
  | "item"
  | "lastUpdated"
  | "letsGo"
  | "list"
  | "loading"
  | "lvl"
  | "maintenance"
  | "make.wish"
  | "making.wish"
  | "mint"
  | "minting"
  | "minted"
  | "music"
  | "next"
  | "nextSkillPtLvl"
  | "no.mail"
  | "noThanks"
  | "ocean.fishing"
  | "ok"
  | "open.gift"
  | "pass.required"
  | "placing.bid"
  | "print"
  | "providing.liquidity"
  | "purchasing"
  | "rank"
  | "readMore"
  | "refresh"
  | "refreshing"
  | "reqSkillPts"
  | "reqSkillPts"
  | "reqSkills"
  | "resources"
  | "retry"
  | "reward.discovered"
  | "save"
  | "saving"
  | "seeds"
  | "sell.all"
  | "sell.one"
  | "sell.ten"
  | "sell"
  | "shopping"
  | "skillPts"
  | "skills"
  | "skip.order"
  | "sound"
  | "success"
  | "support.team"
  | "swapping"
  | "syncing"
  | "task"
  | "tools"
  | "total"
  | "total.price"
  | "trades"
  | "trading"
  | "trash.collection"
  | "travel"
  | "tryAgain"
  | "uhOh"
  | "unlocking"
  | "unlock.land"
  | "verify"
  | "version"
  | "viewAll"
  | "visit.friend"
  | "wallet"
  | "welcome"
  | "wishing.well"
  | "withdraw"
  | "you.are.here";

export type GameTerms =
  | "dailyLim"
  | "gobSwarm"
  | "potions"
  | "bumpkinLvl"
  | "sflDiscord"
  | "auction.winner"
  | "farm.banned"
  | "proof.of.humanity"
  | "no.sfl"
  | "granting.wish"
  | "new.delivery.in";

export type ConfirmationTerms = "confirmation.sellCrops";

export type WelcomeTerms =
  | "welcome.otherWallets"
  | "welcome.needHelp"
  | "welcome.createAccount"
  | "welcome.creatingAccount"
  | "welcome.login"
  | "welcome.signingIn"
  | "welcome.signInMessage"
  | "welcome.email"
  | "welcome.takeover";

export type RulesTerms =
  | "rules"
  | "rules.accounts"
  | "rules.noBots"
  | "rules.game"
  | "rules.termsOfService";

export type SeasonTerms =
  | "season.goodLuck"
  | "season.discount"
  | "season.banner"
  | "season.wearableAirdrop"
  | "season.bonusTickets"
  | "season.boostXP"
  | "season.exclusiveOffer"
  | "season.includes"
  | "season.limitedOffer"
  | "season.accessTo"
  | "season.buyNow"
  | "season.ctk";

export type Intro =
  | "intro.one"
  | "intro.two"
  | "intro.three"
  | "intro.four"
  | "intro.five";

export type ShopItems =
  | "shopItems.one"
  | "shopItems.two"
  | "shopItems.three"
  | "betty.intro"
  | "betty.buySeeds"
  | "betty.sellCrops";

export type AchievementsDialog =
  | "breadWinner.description"
  | "breadWinner.one"
  | "breadWinner.two"
  | "breadWinner.three"
  | "sunSeeker.description"
  | "cabbageKing.description"
  | "jackOLantern.description"
  | "coolFlower.description"
  | "farmHand.description"
  | "beetrootBeast.description"
  | "myLifeIsPotato.description"
  | "rapidRadish.description"
  | "twentyTwentyVision.description"
  | "stapleCrop.description"
  | "sunflowerSuperstar.description"
  | "bumpkinBillionaire.description"
  | "patientParsnips.description"
  | "cropChampion.description"
  | "busyBumpkin.description"
  | "busyBumpkin.one"
  | "busyBumpkin.two"
  | "kissTheCook.description"
  | "bakersDozen.description"
  | "brilliantBumpkin.description"
  | "chefDeCuisine.description"
  | "scarecrowMaestro.description"
  | "scarecrowMaestro.one"
  | "scarecrowMaestro.two"
  | "bigSpender.description"
  | "museum.description"
  | "highRoller.description"
  | "timbeerrr.description"
  | "craftmanship.description"
  | "driller.description"
  | "ironEyes.description"
  | "elDorado.description"
  | "timeToChop.description"
  | "canary.description"
  | "somethingShiny.description"
  | "bumpkinChainsawAmateur.description"
  | "goldFever.description"
  | "explorer.description"
  | "explorer.one"
  | "expansion.description"
  | "wellOfProsperity.description"
  | "wellOfProsperity.one"
  | "wellOfProsperity.two"
  | "contractor.description"
  | "fruitAficionado.description"
  | "fruitAficionado.one"
  | "fruitAficionado.two"
  | "orangeSqueeze.description"
  | "appleOfMyEye.description"
  | "blueChip.description"
  | "fruitPlatter.description"
  | "crowdFavourite.description"
  | "deliveryDynamo.description"
  | "deliveryDynamo.one"
  | "deliveryDynamo.two"
  | "seasonedFarmer.description"
  | "seasonedFarmer.one"
  | "seasonedFarmer.two"
  | "seasonedFarmer.three"
  | "treasureHunter.description"
  | "treasureHunter.one"
  | "treasureHunter.two"
  | "eggcellentCollection.description"
  | "eggcellentCollection.one"
  | "eggcellentCollection.two";

export type GuideTerms =
  | "guide.intro"
  | "gathering.description.one"
  | "gathering.description.two"
  | "gathering.description.three"
  | "crops.description.one"
  | "crops.description.two"
  | "crops.description.three"
  | "building.description.one"
  | "building.description.two"
  | "cooking.description.one"
  | "cooking.description.two"
  | "cooking.description.three"
  | "cooking.description.one"
  | "cooking.description.two"
  | "cooking.description.three"
  | "cooking.description.four"
  | "cooking.description.five"
  | "animals.description.one"
  | "animals.description.two"
  | "animals.description.three"
  | "crafting.description.one"
  | "crafting.description.two"
  | "crafting.description.three"
  | "crafting.description.four"
  | "deliveries.description.one"
  | "deliveries.description.two"
  | "scavenger.description.one"
  | "scavenger.description.two"
  | "fruit.description.one"
  | "fruit.description.two"
  | "fruit.description.three"
  | "seasons.description.one"
  | "seasons.description.two";

export type Conversations =
  | "hank-intro.headline"
  | "hank-intro.one"
  | "hank-intro.two"
  | "hank-intro.three"
  | "hank-crafting.headline"
  | "hank-crafting.one"
  | "hank-crafting.two"
  | "betty-intro.headline"
  | "betty-intro.one"
  | "betty-intro.two"
  | "betty-intro.three"
  | "betty.market-intro.one"
  | "betty.market-intro.two"
  | "betty.market-intro.three"
  | "betty.market-intro.four"
  | "bruce-intro.headline"
  | "bruce-intro.one"
  | "bruce-intro.two"
  | "bruce-intro.three"
  | "blacksmith-intro.headline"
  | "blacksmith-intro.one"
  | "pete.first-expansion.one"
  | "pete.first-expansion.two"
  | "pete.first-expansion.three"
  | "pete.blacksmith.one"
  | "pete.blacksmith.two"
  | "pete.blacksmith.three"
  | "pete.levelthree.one"
  | "pete.levelthree.two"
  | "pete.levelthree.three"
  | "pete.levelthree.four"
  | "pete.help.one"
  | "pete.help.two";

export type HenHouseTerms =
  | "henHouse.chickens"
  | "henHouse.text.one"
  | "henHouse.text.two"
  | "henHouse.text.three"
  | "henHouse.text.four"
  | "henHouse.text.five"
  | "henHouse.text.six";

export type RewardTerms =
  | "reward.title"
  | "reward.streak"
  | "reward.comeBackLater"
  | "reward.nextBonus"
  | "reward.unlock"
  | "reward.open"
  | "reward.lvlRequirement"
  | "reward.revealing"
  | "reward.streakBonus"
  | "reward.found";

export type ErrorTerms =
  | "error.congestion.one"
  | "error.congestion.two"
  | "error.forbidden.goblinVillage"
  | "error.multipleDevices.one"
  | "error.multipleDevices.two"
  | "error.multipleWallets.one"
  | "error.multipleWallets.two"
  | "error.toManyRequest.one"
  | "error.toManyRequest.two"
  | "error.blocked.betaTestersOnly"
  | "error.wentWrong"
  | "error.polygonRPC"
  | "error.connection.one"
  | "error.connection.two"
  | "error.connection.three"
  | "error.connection.four"
  | "error.diagnostic.info"
  | "error.Web3NotFound"
  | "error.noBumpkin"
  | "error.clock.not.synced";

export type WarningTerms =
  | "warning.noAxe"
  | "warning.chat.maxCharacters"
  | "warning.chat.noSpecialCharacters"
  | "warning.level.required"
  | "warning.hoarding.message"
  | "warning.hoarding.one"
  | "warning.hoarding.two";

export type TransactionTerms =
  | "transaction.blockBucksFarm"
  | "transaction.blockchain.one"
  | "transaction.blockchain.two"
  | "transaction.congrats"
  | "transaction.creditCard"
  | "transaction.donate"
  | "transaction.donating"
  | "transaction.doNotRefresh"
  | "transaction.estimated.fee"
  | "transaction.excludeFees"
  | "transaction.id"
  | "transaction.matic"
  | "transaction.maticAmount"
  | "transaction.message"
  | "transaction.minblockbucks"
  | "transaction.mintFarm.one"
  | "transaction.mintFarm.two"
  | "transaction.network"
  | "transaction.openSea"
  | "transaction.pay"
  | "transaction.payCash"
  | "transaction.payMatic"
  | "transaction.progChain"
  | "transaction.progress"
  | "transaction.rejected"
  | "transaction.success"
  | "transaction.t&c.one"
  | "transaction.t&c.two"
  | "transaction.thankYou"
  | "transaction.transacting.one"
  | "transaction.transacting.two"
  | "transaction.transacting.three"
  | "transaction.withdraw.one"
  | "transaction.withdraw.two"
  | "transaction.withdraw.three"
  | "transaction.withdraw.four"
  | "transaction.withdraw.five"
  | "transaction.withdraw.six"
  | "transaction.withdraw.polygon";

export type Onboarding =
  | "onboarding.welcome"
  | "onboarding.step.one"
  | "onboarding.step.two"
  | "onboarding.step.three"
  | "onboarding.intro.one"
  | "onboarding.intro.two"
  | "onboarding.cheer"
  | "onboarding.form.one"
  | "onboarding.form.two"
  | "onboarding.duplicateUser.one"
  | "onboarding.duplicateUser.two"
  | "onboarding.starterPack"
  | "onboarding.wallet.titleOne"
  | "onboarding.wallet.one"
  | "onboarding.wallet.two"
  | "onboarding.wallet.haveWallet"
  | "onboarding.wallet.createButton"
  | "onboarding.wallet.titleTwo"
  | "onboarding.wallet.three"
  | "onboarding.wallet.four"
  | "onboarding.wallet.acceptButton"
  | "onboarding.wallet.acceptLoading"
  | "onboarding.wallet.titleThree"
  | "onboarding.wallet.five"
  | "onboarding.wallet.six"
  | "onboarding.wallet.final";

export type Questions = "questions.obtain.MATIC" | "questions.lowCash";

export type Statements =
  | "statements.adventure"
  | "statements.auctioneer.one"
  | "statements.auctioneer.two"
  | "statements.beta.one"
  | "statements.beta.two"
  | "statements.better.luck"
  | "statements.blacklist.one"
  | "statements.blacklist.two"
  | "statements.clickBottle"
  | "statements.clock.one"
  | "statements.clock.two"
  | "statements.conversation.one"
  | "statements.cooldown"
  | "statements.docs"
  | "statements.dontRefresh"
  | "statements.feed.bumpkin.one"
  | "statements.feed.bumpkin.two"
  | "statements.guide.one"
  | "statements.guide.two"
  | "statements.jigger.one"
  | "statements.jigger.two"
  | "statements.jigger.three"
  | "statements.jigger.four"
  | "statements.jigger.five"
  | "statements.jigger.six"
  | "statements.jigger.seven"
  | "statements.lvlUp"
  | "statements.maintenance"
  | "statements.make.a.wish"
  | "statements.minted"
  | "statements.minting"
  | "statements.mutant.chicken"
  | "statements.new.wish"
  | "statements.news"
  | "statements.no.reward"
  | "statements.ohNo"
  | "statements.openGuide"
  | "statements.patience"
  | "statements.potionRule.one"
  | "statements.potionRule.two"
  | "statements.potionRule.three"
  | "statements.potionRule.four"
  | "statements.potionRule.five"
  | "statements.potionRule.six"
  | "statements.potionRule.seven"
  | "statements.sfl.rewards.received"
  | "statements.sflLim.one"
  | "statements.sflLim.two"
  | "statements.sniped"
  | "statements.switchNetwork"
  | "statements.sync"
  | "statements.tapCont"
  | "statements.thankYou"
  | "statements.tutorial.one"
  | "statements.tutorial.two"
  | "statements.tutorial.three"
  | "statements.visit.firePit"
  | "statements.wish.granted.time"
  | "statements.wish.granted"
  | "statements.wish.made"
  | "statements.wish.ready.in"
  | "statements.wish.thanks"
  | "statements.wish.time"
  | "statements.wish.warning.one"
  | "statements.wish.warning.two"
  | "statements.wishing-well.info.one"
  | "statements.wishing-well.info.two"
  | "statements.wishing-well.info.three"
  | "statements.wishing-well.not.providing.liquidity"
  | "statements.wishing.well.amount"
  | "statements.wishing.well.luck"
  | "statements.wrongChain.one"
  | "statements.empty.chest";

export type BumpkinTrade =
  | "bumpkinTrade.askPrice"
  | "bumpkinTrade.purchased"
  | "bumpkinTrade.plaza"
  | "bumpkinTrade.lvl"
  | "bumpkinTrade.noTradeLs"
  | "bumpkinTrade.sell"
  | "bumpkinTrade.list";

export type BumpkinPartRequirements =
  | "part.hair"
  | "part.body"
  | "part.shoes"
  | "part.shirt"
  | "part.pants"
  | "part.background";

export type RetreatTerms =
  | "retreatTerms.introTravel.one"
  | "retreatTerms.introTravel.two"
  | "retreatTerms.introTravel.three"
  | "retreatTerms.introTravel.four"
  | "retreatTerms.resale.title"
  | "retreatTerms.resale.one"
  | "retreatTerms.resale.two"
  | "retreatTerms.resale.three";

export type GameDescriptions =
  // Mutant Chickens
  | "description.speed.chicken.one"
  | "description.speed.chicken.two"
  | "description.fat.chicken.one"
  | "description.fat.chicken.two"
  | "description.rich.chicken.one"
  | "description.rich.chicken.two"
  | "description.ayam.cemani"
  | "description.el.pollo.veloz.one"
  | "description.el.pollo.veloz.two"
  | "description.banana.chicken"

  // Crops
  | "description.sunflower"
  | "description.potato"
  | "description.pumpkin"
  | "description.carrot"
  | "description.cabbage"
  | "description.beetroot"
  | "description.cauliflower"
  | "description.parsnip"
  | "description.eggplant"
  | "description.corn"
  | "description.radish"
  | "description.wheat"
  | "description.kale"

  // Fruit
  | "description.blueberry"
  | "description.orange"
  | "description.apple"
  | "description.banana"

  // Exotic Crops
  | "description.white.carrot"
  | "description.warty.goblin.pumpkin"
  | "description.adirondack.potato"
  | "description.purple.cauliflower"
  | "description.chiogga"
  | "description.golden.helios"
  | "description.black.magic"

  // Food
  // Fire Pit
  | "description.pumpkin.soup"
  | "description.mashed.potato"
  | "description.bumpkin.broth"
  | "description.boiled.eggs"
  | "description.kale.stew"
  | "description.mushroom.soup"
  | "description.reindeer.carrot"
  | "description.kale.omelette"
  | "description.cabbers.mash"
  | "description.popcorn"
  | "description.gumbo"
  // Kitchen
  | "description.roast.veggies"
  | "description.bumpkin.salad"
  | "description.goblins.treat"
  | "description.cauliflower.burger"
  | "description.club.sandwich"
  | "description.mushroom.jacket.potatoes"
  | "description.sunflower.crunch"
  | "description.bumpkin.roast"
  | "description.goblin.brunch"
  | "description.fruit.salad"
  | "description.bumpkin.ganoush"
  | "description.chowder"
  | "description.pancakes"
  // Bakery
  | "description.apple.pie"
  | "description.kale.mushroom.pie"
  | "description.cornbread"
  | "description.sunflower.cake"
  | "description.potato.cake"
  | "description.pumpkin.cake"
  | "description.carrot.cake"
  | "description.cabbage.cake"
  | "description.beetroot.cake"
  | "description.cauliflower.cake"
  | "description.parsnip.cake"
  | "description.radish.cake"
  | "description.wheat.cake"
  | "description.eggplant.cake"
  | "description.orange.cake"
  | "description.pirate.cake"
  // Deli
  | "description.blueberry.jam"
  | "description.fermented.carrots"
  | "description.sauerkraut"
  | "description.fancy.fries"
  | "description.fermented.fish"
  // Smoothie Shack
  | "description.apple.juice"
  | "description.orange.juice"
  | "description.purple.smoothie"
  | "description.power.smoothie"
  | "description.bumpkin.detox"
  | "description.banana.blast"
  // Unused foods
  | "description.roasted.cauliflower"
  | "description.radish.pie"

  // Tools
  | "description.axe"
  | "description.pickaxe"
  | "description.stone.pickaxe"
  | "description.iron.pickaxe"
  | "description.hammer"
  | "description.rod"
  | "description.rusty.shovel"
  | "description.shovel"
  | "description.sand.shovel"
  | "description.sand.drill"

  // Quest Items
  | "description.goblin.key"
  | "description.sunflower.key"
  | "description.ancient.goblin.sword"
  | "description.ancient.human.warhammer"

  // Decorations
  | "description.wicker.man"
  | "description.golden bonsai"
  | "description.victoria.sisters"
  | "description.christmas.bear"
  | "description.war.skull"
  | "description.war.tombstone"
  | "description.undead.rooster"
  | "description.observatory"

  // Banners
  | "description.goblin.war.banner"
  | "description.human.war.banner"

  // Coupons
  | "description.block.buck"
  | "description.beta.pass"
  | "description.war.bond"

  // Fish
  | "description.anchovy.one"
  | "description.anchovy.two"
  | "description.butterflyfish.one"
  | "description.butterflyfish.two"
  | "description.blowfish.one"
  | "description.blowfish.two"
  | "description.clownfish.one"
  | "description.clownfish.two"
  | "description.seabass.one"
  | "description.seabass.two"
  | "description.seahorse.one"
  | "description.seahorse.two"
  | "description.horsemackerel.one"
  | "description.horsemackerel.two"
  | "description.squid.one"
  | "description.squid.two"
  | "description.redsnapper.one"
  | "description.redsnapper.two"
  | "description.morayeel.one"
  | "description.morayeel.two"
  | "description.oliveflounder.one"
  | "description.oliveflounder.two"
  | "description.napoleanfish.one"
  | "description.napoleanfish.two"
  | "description.surgeonfish.one"
  | "description.surgeonfish.two"
  | "description.zebraturkeyfish.one"
  | "description.zebraturkeyfish.two"
  | "description.ray.one"
  | "description.ray.two"
  | "description.hammerheadshark.one"
  | "description.hammerheadshark.two"
  | "description.tuna.one"
  | "description.tuna.two"
  | "description.mahimahi.one"
  | "description.mahimahi.two"
  | "description.bluemarlin.one"
  | "description.bluemarlin.two"
  | "description.oarfish.one"
  | "description.oarfish.two"
  | "description.footballfish.one"
  | "description.footballfish.two"
  | "description.sunfish.one"
  | "description.sunfish.two"
  | "description.coelacanth.one"
  | "description.coelacanth.two"
  | "description.whaleshark.one"
  | "description.whaleshark.two"
  | "description.barredknifejaw.one"
  | "description.barredknifejaw.two"
  | "description.sawshark.one"
  | "description.sawshark.two"
  | "description.whiteshark.one"
  | "description.whiteshark.two"

  // Marine Marvels
  | "description.twilight.anglerfish"
  | "description.starlight.tuna"
  | "description.radiant.ray"
  | "description.phantom.barracuda"
  | "description.gilded.swordfish"
  | "description.kraken.tentacle"
  | "description.kraken.head"

  // Buildings
  | "description.water.well"
  | "description.kitchen"
  | "description.compost.bin"
  | "description.hen.house"
  | "description.bakery"
  | "description.turbo.composter"
  | "description.deli"
  | "description.smoothie.shack"
  | "description.warehouse"
  | "description.toolshed"
  | "description.premium.composter"
  | "description.town.center"
  | "description.market"
  | "description.fire.pit"
  | "description.workbench"
  | "description.tent"

  // Bumpkin Skills
  // Crops
  | "description.green.thumb"
  | "description.cultivator"
  | "description.master.farmer"
  | "description.golden.flowers"
  | "description.happy.crop"
  // Trees
  | "description.lumberjack"
  | "description.tree.hugger"
  | "description.tough.tree"
  | "description.money.tree"
  // Rocks
  | "description.digger"
  | "description.coal.face"
  | "description.seeker"
  | "description.gold.rush"
  // Cooking
  | "description.rush.hour"
  | "description.kitchen.hand"
  | "description.michelin.stars"
  | "description.curer"
  // Animals
  | "description.stable.hand"
  | "description.free.range"
  | "description.horse.whisperer"
  | "description.buckaroo";

export type FishingQuests =
  | "quest.basic.fish"
  | "quest.advanced.fish"
  | "quest.all.fish"
  | "quest.300.fish"
  | "quest.1500.fish"
  | "quest.marine.marvel";

export type IslandName =
  | "island.home"
  | "island.pumpkin.plaza"
  | "island.beach"
  | "island.woodlands"
  | "island.helios"
  | "island.goblin.retreat";

export type LevelUpMessages =
  | "levelUp.2"
  | "levelUp.3"
  | "levelUp.4"
  | "levelUp.5"
  | "levelUp.6"
  | "levelUp.7"
  | "levelUp.8"
  | "levelUp.9"
  | "levelUp.10"
  | "levelUp.11"
  | "levelUp.12"
  | "levelUp.13"
  | "levelUp.14"
  | "levelUp.15"
  | "levelUp.16"
  | "levelUp.17"
  | "levelUp.18"
  | "levelUp.19"
  | "levelUp.20"
  | "levelUp.21"
  | "levelUp.22"
  | "levelUp.23"
  | "levelUp.24"
  | "levelUp.25"
  | "levelUp.26"
  | "levelUp.27"
  | "levelUp.28"
  | "levelUp.29"
  | "levelUp.30"
  | "levelUp.31"
  | "levelUp.32"
  | "levelUp.33"
  | "levelUp.34"
  | "levelUp.35"
  | "levelUp.36"
  | "levelUp.37"
  | "levelUp.38"
  | "levelUp.39"
  | "levelUp.40"
  | "levelUp.41"
  | "levelUp.42"
  | "levelUp.43"
  | "levelUp.44"
  | "levelUp.45"
  | "levelUp.46"
  | "levelUp.47"
  | "levelUp.48"
  | "levelUp.49"
  | "levelUp.50"
  | "levelUp.51"
  | "levelUp.52"
  | "levelUp.53"
  | "levelUp.54"
  | "levelUp.55"
  | "levelUp.56"
  | "levelUp.57"
  | "levelUp.58"
  | "levelUp.59"
  | "levelUp.60";

export type TranslationKeys =
  | AchievementsDialog
  | BumpkinPartRequirements
  | BumpkinTrade
  | ConfirmationTerms
  | Conversations
  | ErrorTerms
  | FishingQuests
  | GameDescriptions
  | GameTerms
  | GeneralTerms
  | GuideTerms
  | HenHouseTerms
  | Intro
  | IslandName
  | LevelUpMessages
  | Onboarding
  | Questions
  | RetreatTerms
  | RewardTerms
  | RulesTerms
  | SeasonTerms
  | ShopItems
  | Statements
  | TransactionTerms
  | WarningTerms
  | WelcomeTerms;

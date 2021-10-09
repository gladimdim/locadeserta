'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9eb636bc09960818f82c0a1522f8a96d",
"assets/assets/sounds/achievement.mp3": "d7f10308b4247953295dfb398552556f",
"assets/assets/sounds/building_upgrade.mp3": "2c12f9f49efa3510570c85a0494383f5",
"assets/assets/sounds/cart_bought.mp3": "1f52ed1183e8b528eb1a95316652d8c5",
"assets/assets/sounds/done.mp3": "65d523a9b579bec58d710f0380b862de",
"assets/assets/sounds/fanfare.mp3": "6b27e196cab64ef7f6230dc5785a9a45",
"assets/assets/sounds/global_market.mp3": "7a3a2bdc7fc42ccce47e9f592d59f10f",
"assets/assets/sounds/local_market.mp3": "d94921a2005c4bae96f311c1fcf21fbd",
"assets/assets/sounds/marching_cossacks.mp3": "168a4646b5afe07611f4f51fc87ade8a",
"assets/assets/sounds/money.mp3": "01657b2ecee878c59306215eec2e92bf",
"assets/assets/sounds/paper_moved.mp3": "fcd7e4b18857c15f56de5a238a6030e5",
"assets/assets/sounds/write_on_paper.mp3": "90e8646eb71afaa48facd0ec7b60cb24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/google_fonts/Neucha-Regular.ttf": "8e7a91accfee66949d8f243573b80839",
"assets/google_fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/google_fonts/TenorSans-Regular.ttf": "4dbbdcd595dcd961a2cab5bd9d026c80",
"assets/google_fonts/Vollkorn-Bold.ttf": "bbcde547c5e8bbaac2643fc77d8f3d46",
"assets/google_fonts/Vollkorn-Regular.ttf": "9f55320c1243ba395eebca1d9af717dc",
"assets/images/appstore.png": "ec78f215e5c85dd470870890009bd815",
"assets/images/boplan_map_huge.jpg": "fefbe113f18a83d3633dc5f8796add26",
"assets/images/chumaki_app_icon.png": "bc217f168d0b9ff579a192712dafae2c",
"assets/images/cities/avatars/berdychiv.png": "d086e2da91a752ca02d2a9d53c933065",
"assets/images/cities/avatars/bilatserkva.png": "6dc1eda1b4f6a9853611312712662d65",
"assets/images/cities/avatars/cherkasy.png": "8d5624242d7b4c3c129c81f935453dce",
"assets/images/cities/avatars/chernigiv.png": "c5506089430cc90bcfa067c97038cc7a",
"assets/images/cities/avatars/chigirin.png": "3a1272cb3662493da6ec4fddaa2e6626",
"assets/images/cities/avatars/gaivoron.png": "ceb3af1b2c5618076062ac009cae1e34",
"assets/images/cities/avatars/govtva.png": "2d8086f7aa30446ba3a45caf6c6af065",
"assets/images/cities/avatars/kaniv.png": "181b9cf4308ce53a524dc62f5a8d29bd",
"assets/images/cities/avatars/korsun.png": "3ee9f63166423b5eb137ddb9ca86f357",
"assets/images/cities/avatars/kursk.png": "9c88ec4d55a4a8cca4660da901210541",
"assets/images/cities/avatars/kyiv.png": "7adb548c3015e2bb0d568528fce9cb91",
"assets/images/cities/avatars/ladyzhin.png": "d3511e7eb7b8abe83425f7785a1411e7",
"assets/images/cities/avatars/lviv.png": "31206f4a11f6b7d0186b5934e383eb2d",
"assets/images/cities/avatars/medzhibizh.png": "c6cc93a593dab58e83049e0804e7e7db",
"assets/images/cities/avatars/myrgorod.png": "58e7c018536f5d35264459200d2a0b0e",
"assets/images/cities/avatars/nizhin.png": "c57340b08ab40a670999eb76fba53893",
"assets/images/cities/avatars/ochakiv.png": "2efe1fa88b64cd2d117b005a281a771d",
"assets/images/cities/avatars/ohtirka.png": "259b2bb56e0269509cfffb17744a3829",
"assets/images/cities/avatars/ostrog.png": "50638cac4a47ecc8fe478a8af939df99",
"assets/images/cities/avatars/pereyaslav.png": "d9cfa612fc7337c11d8b364a4d32f242",
"assets/images/cities/avatars/pryluky.png": "3127ecb038f80400f597cd04462d7b92",
"assets/images/cities/avatars/pyryatin.png": "e8d869f9bc8180ef18ab7baa404f0a3a",
"assets/images/cities/avatars/rylsk.png": "3a32a8536d710fc8996bd22a9d96030a",
"assets/images/cities/avatars/sich.png": "5e118264ecdf37c35468c99071c7eddd",
"assets/images/cities/avatars/stavise.png": "498ba92c8f6950ec99c224fc8033d913",
"assets/images/cities/avatars/temryuk.png": "d2dd360bb00028d7b129522ee23f9988",
"assets/images/cities/avatars/ternopil.png": "33e552511fdd662ecfd368d1ce42ee57",
"assets/images/cities/avatars/uman.png": "7f9792bd8513d2a9717051f0aaabe729",
"assets/images/cities/avatars/vinnitsa.png": "b0b19c3a2fcc946d9ad7e680fe4aa0d2",
"assets/images/cities/avatars/zhytomir.png": "f1de5f90b90d580c6cdd1246f7f44c02",
"assets/images/cities/church.png": "bdbaa763390a38aa8af4431afcd3842c",
"assets/images/cities/sich.png": "4b0eba609809bd10adb78c00b1d36e73",
"assets/images/events/buy_cannons.png": "67c2d8eea2211ef4b2b726f97d52b07c",
"assets/images/events/vesterfeld/ancient_church.png": "072030d4599d6baec8b54aabd665bfcc",
"assets/images/events/vesterfeld/archers.png": "b2ab6b6e829c66de7f3d4b8e270e18a1",
"assets/images/events/vesterfeld/archers_2.png": "2ea623ca34cffc54a36efa3ab77a3121",
"assets/images/events/vesterfeld/army_on_march.png": "ea24b17f9667dd7024341c8f963ae3e0",
"assets/images/events/vesterfeld/big_city_2.png": "220be2e3dc0a9c13c19faabc40818ae0",
"assets/images/events/vesterfeld/big_town.png": "c540861470cd183c41671a7e09bad011",
"assets/images/events/vesterfeld/cannons_shooting.png": "d051c5235c9e46ca548b747276443215",
"assets/images/events/vesterfeld/cavalery.png": "a717ee51e4e9e023ef0196390005bb22",
"assets/images/events/vesterfeld/city_and_hills.png": "b68ceba781f9f45b871301152e66c0b0",
"assets/images/events/vesterfeld/cooking.png": "7c1f9e68520f7c5ad5a885c3877ca8b6",
"assets/images/events/vesterfeld/cossacks_crowd.png": "3d404dee50fe8e77cdd9d5aea80469bc",
"assets/images/events/vesterfeld/cossacks_crowd2.png": "b6e3974985e5d45d36019a26746917db",
"assets/images/events/vesterfeld/cossacks_in_field.png": "3b918d131f5031593d132afd966fcae5",
"assets/images/events/vesterfeld/cossacks_rest.png": "a64dbd8e97a5d0cb30e731a29f213a0f",
"assets/images/events/vesterfeld/cossack_and_bum.png": "fc1cf86a33a750d7d5cd8a132f3017fd",
"assets/images/events/vesterfeld/cossack_and_sheep.png": "64d2d6fd8fad71c40c0df3fb05154738",
"assets/images/events/vesterfeld/crazy_man.png": "fe12bef3e25d1c6b83c91f1bd1a176fb",
"assets/images/events/vesterfeld/crippled_man.png": "44bb84103f61d3d2d10f2b23fc7c3e69",
"assets/images/events/vesterfeld/elite_cossacks.png": "4ea3b7fdbef9afc933c593fd7be48866",
"assets/images/events/vesterfeld/elite_cossacks_2.png": "e79bd4613909f569fbdca4202f1c9155",
"assets/images/events/vesterfeld/field_fortress.png": "e701d696d839c496e5efc3ddce2388f3",
"assets/images/events/vesterfeld/field_with_horses.png": "c2f5174806dcd795547e657c5ad5a40b",
"assets/images/events/vesterfeld/fortress.png": "1a3328acbcf5cf18b76d042fa875fe3f",
"assets/images/events/vesterfeld/fortress_outer.png": "43fbe2fd9238f16810fcf963d904ebe8",
"assets/images/events/vesterfeld/fortress_town.png": "4e03fc87fd868a666e5d51c90b9cb685",
"assets/images/events/vesterfeld/group_of_soldiers.png": "04da6da7e21d5cb7e905f134c0b05ddd",
"assets/images/events/vesterfeld/man_and_church.png": "f0624ae0cd9b6c568e8077471fc7ca40",
"assets/images/events/vesterfeld/men_and_boy.png": "d0b16749ddb0dd1b713ee743d23efca9",
"assets/images/events/vesterfeld/otaman.png": "1aeeda0ff681929e561bef97b9b9f554",
"assets/images/events/vesterfeld/pohid.png": "121f01ba5749c435b59028844b5c51d2",
"assets/images/events/vesterfeld/poor_boy.png": "8274f6efbd6c3d58a8ca76f7d7adc2a5",
"assets/images/events/vesterfeld/poor_boy_2.png": "2089c060812130818a4a1d501520fc5a",
"assets/images/events/vesterfeld/river_battle.png": "87bc9ed381762462b2752ae2b69fe850",
"assets/images/events/vesterfeld/river_battle_2.png": "e4d3cbacd0e1bca9703273ead8067be4",
"assets/images/events/vesterfeld/river_battle_3.png": "e727e780123491b3c7fd5d1178d87800",
"assets/images/events/vesterfeld/ruined_tower.png": "241f6b1ee3bd0fe8470027505b76bf84",
"assets/images/events/vesterfeld/ruins.png": "ddd3d703cae50cd60e0619924af99c34",
"assets/images/events/vesterfeld/ruins_2.png": "7983123f12444dbbca39ff4d8541a1e0",
"assets/images/events/vesterfeld/ruins_3.png": "d5a130679d4652bb955bb36f2edc6f82",
"assets/images/events/vesterfeld/soldiers_looking.png": "27f25c16ca38d9623c347bb7fae37e1b",
"assets/images/events/vesterfeld/tower_ruin.png": "5d72f5189473b7e0b364a77efb70e064",
"assets/images/events/vesterfeld/tower_ruin_2.png": "4d1fdbae7d02a25b1d1ebb0d75111c48",
"assets/images/events/vesterfeld/town.png": "fca37da93ad9938d5e3c2604bb98a508",
"assets/images/events/vesterfeld/wagon_camp.png": "f602de45f87cbad5af579b86701fc7d8",
"assets/images/events/vesterfeld/wandering_man.png": "1138c7ffb145eb037c308abcc3fe30f4",
"assets/images/events/vesterfeld/wandering_men.png": "ec7e0c08da95266118d6fea8ee372ede",
"assets/images/help/en/achievements.png": "d60f2f07efab44b48eac5c07db1e0c03",
"assets/images/help/en/event.png": "56970bae379916181d3a161b3d5155e8",
"assets/images/help/en/global_market.png": "93ea03caba7a9d22c5de77c56bbe1dd3",
"assets/images/help/en/leader.png": "1a5543c4d1ce12667786c9da4e25edd6",
"assets/images/help/en/manufacturing.png": "46014e43ae31aced5dfa7e9f329a4089",
"assets/images/help/en/map.png": "2ce00be0a2d51d847d6cd6a759e7e47b",
"assets/images/help/en/market.png": "1a16935d4669aa6f5d1feae5b48525ca",
"assets/images/help/en/town.png": "e5f1dbd09a8964b189a8171860217b84",
"assets/images/help/en/wagon.png": "baeb16dbb7f6ff43c8971bfd57cee541",
"assets/images/help/uk/achievements.png": "300cda37136e0d4da347edb017a99d2b",
"assets/images/help/uk/event.png": "df84124c3df2e616f41b2276b29e9719",
"assets/images/help/uk/global_market.png": "494f86866b9dc1aa7fd7512728aff6ed",
"assets/images/help/uk/leader.png": "dfad8d1bad46a9e65bec9c5eb4d7960c",
"assets/images/help/uk/manufacturing.png": "cfddb73033522f93f46bb1a0513b9911",
"assets/images/help/uk/map.png": "d8236ff6778e578b93b889cb0b8db337",
"assets/images/help/uk/market.png": "c482090988f3e22642abd0b78372eac9",
"assets/images/help/uk/town.png": "049032491a3a6c2f327859b5c16bf666",
"assets/images/help/uk/wagon.png": "2f5054ae7afabfc54fbd88e672af1673",
"assets/images/icons/build/build.png": "3825fa2e92008c812d62cebf418ec511",
"assets/images/icons/cloths/cloths.png": "375c0c3a52c9ce8aa3e35b32135bcf06",
"assets/images/icons/flags/ukrainian_flag.png": "ee037d6755efb31cae2af4a1115be3b3",
"assets/images/icons/flags/usa_flag.png": "51f66dc1e6e0e662d2ec5dd2333cbd9d",
"assets/images/icons/food/food.png": "39e7cabdbf8165a80b162933a3f2615c",
"assets/images/icons/lock/lock.png": "124c98bd184e56b55d0f9094f303bfa8",
"assets/images/icons/lock/lock2.png": "ffdbdb81ae2074ea80a43b67e02524f4",
"assets/images/icons/lock/opened_lock.png": "62fdce5d14923ed3e547e4b6369c2e9b",
"assets/images/icons/luxury/luxury.png": "45f71eaf8eca04af989db8513e47ed95",
"assets/images/icons/manufacturing/manufacturing.png": "8222ec074d19367d5431e953b4cefb28",
"assets/images/icons/market/market.png": "2bbc29ad13b6c46eeb1dbb1824b1a896",
"assets/images/icons/market/market2.png": "6c15095a6e6aba293a23507368daf622",
"assets/images/icons/military/military.png": "ce898d9eaa98e27a3342f2a8bae07422",
"assets/images/icons/money/money.png": "016c3862d48b6befdf04a6597474ef3e",
"assets/images/icons/money/money_2d.png": "dc669ec6a4485182b03c1f11f2f1324a",
"assets/images/icons/paths/paths.png": "3d0cd6dbea173a69da7d8b7b95b3e10e",
"assets/images/icons/resources/resources.png": "04d3bb69a9ce60fff961178dac42be8e",
"assets/images/icons/unknown/unknown.png": "062cc96a0befafe571015edb89720f0d",
"assets/images/icons/upgrade/upgrade.png": "f999d11509efc804ff9f6d7a6877e901",
"assets/images/icons/wagon/wagon_2d.png": "b8153806322282c60b9e54876f3b44bf",
"assets/images/leaders/leader0.png": "b9d55b71f8cc5bfdac5e6d89bf75154c",
"assets/images/leaders/leader1.png": "d8b8526bcb5b381deb58da55df0da822",
"assets/images/leaders/leader10.png": "ee00142268eb93e9419ffc3f3897e876",
"assets/images/leaders/leader2.png": "410dcbc0dfbfed9a7dce1374fcbc3ade",
"assets/images/leaders/leader3.png": "d7a0d52fc354001a732640692de22577",
"assets/images/leaders/leader4.png": "89711033ceaa25330fa42c7435f31de8",
"assets/images/leaders/leader5.png": "88cd523a9025255b0febbb3c9c9a7cc6",
"assets/images/leaders/leader6.png": "79dd60f10c54b269b11d617817f262ab",
"assets/images/leaders/leader7.png": "110c11b11ade7ee75551bb76e734629a",
"assets/images/leaders/leader8.png": "872979f125988b72a89112ddab1e273e",
"assets/images/leaders/leader9.png": "a7bea4fc800f16fdcf7940f10bd85af4",
"assets/images/manufacturings/amber_mine/amber_mine_1.png": "f7dd79a0af6585c11463298ce3c70628",
"assets/images/manufacturings/amber_mine/amber_mine_2.png": "095e8e3ad2d363f38f416cd526346a2a",
"assets/images/manufacturings/amber_mine/amber_mine_3.png": "56d02a614c4ac2ad38595e23ce0a3083",
"assets/images/manufacturings/bakery/bakery_1.png": "6a848e3541dc4bc4bbc50fbab9b99ceb",
"assets/images/manufacturings/bakery/bakery_2.png": "843e8e6c32ff5ff8fc4ffd28833f769e",
"assets/images/manufacturings/bakery/bakery_3.png": "01421bd5b01ab35420343b769238bd61",
"assets/images/manufacturings/boat_maker/boat_maker_1.png": "79a3d1f8ed5a4bf0bc91a12881fb1e34",
"assets/images/manufacturings/boat_maker/boat_maker_2.png": "e3c90cc64751952269d6c28156b1b453",
"assets/images/manufacturings/boat_maker/boat_maker_3.png": "b44897af5d9acd1b2ae27e4c2bd608ea",
"assets/images/manufacturings/cannon_foundry/cannon_foundry_1.png": "544ab329b13fdcd9da4213b2e72bfde0",
"assets/images/manufacturings/cannon_foundry/cannon_foundry_2.png": "6e10506118e07b443411e39a3829583e",
"assets/images/manufacturings/cannon_foundry/cannon_foundry_3.png": "b25b2779d6939e51043cd173b1016e6e",
"assets/images/manufacturings/cart_maker/cart_maker_1.png": "044d3adf79c593fa7e5a18429a327eb7",
"assets/images/manufacturings/cart_maker/cart_maker_2.png": "e15813d302c3aa8aec1da3805e4cf0de",
"assets/images/manufacturings/cart_maker/cart_maker_3.png": "9aea9ec525cf0134783e39c94ed61d4e",
"assets/images/manufacturings/charcoal_maker/charcoal_maker_1.png": "43f39310b7e9902c4faf22d272f80552",
"assets/images/manufacturings/charcoal_maker/charcoal_maker_2.png": "869fa93247ac669cd868906790185664",
"assets/images/manufacturings/charcoal_maker/charcoal_maker_3.png": "42bbe8889f21719d592163c1da5b36e2",
"assets/images/manufacturings/church/church_1.png": "ee4da1d4a86d933713b628119076bf5e",
"assets/images/manufacturings/church/church_2.png": "a150410544ead89bae2fff1cc7bbe9a2",
"assets/images/manufacturings/church/church_3.png": "9f5cb9036e21c6f27ca7ed3bb576ccd6",
"assets/images/manufacturings/clouds_1.png": "4f4fa4f029b76129573c9d9f22ed3200",
"assets/images/manufacturings/clouds_2.png": "919e68307802db1f92634931bb11c3c6",
"assets/images/manufacturings/clouds_3.png": "8dd207a4e326e1112332f470692c987a",
"assets/images/manufacturings/distillery/distillery_1.png": "232e5abae06dad639436b6886e294a96",
"assets/images/manufacturings/distillery/distillery_2.png": "9d82d184b3b34372bf8aee1a0410977c",
"assets/images/manufacturings/distillery/distillery_3.png": "d6dda3fd31276447be0f42ea36b8f660",
"assets/images/manufacturings/empty_ground.png": "0a90619614f1f5bf958f15471133d3f3",
"assets/images/manufacturings/field/field_1.png": "67cf126a04c8060104cb8f32b3096b69",
"assets/images/manufacturings/field/field_2.png": "6e2c5ba780ebdad1ca5fc6dcbc1fcf6e",
"assets/images/manufacturings/field/field_3.png": "d8a5ebf907f33634668bdbc9f3882657",
"assets/images/manufacturings/forest/forest_1.png": "3506eec86bce99d894617b2df2b53cb4",
"assets/images/manufacturings/forest/forest_2.png": "afa22247e71bfaa422759d6fc01f2039",
"assets/images/manufacturings/forest/forest_3.png": "d12ada7594dbd366b5cb852eab5076b9",
"assets/images/manufacturings/forest/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/manufacturings/honey_maker/honey_maker_1.png": "3831de3453efcc147f19232664555651",
"assets/images/manufacturings/honey_maker/honey_maker_2.png": "fca68059f4af94f316cc54119294dbad",
"assets/images/manufacturings/honey_maker/honey_maker_3.png": "e8b5d61a45765542b6cc90a729954d88",
"assets/images/manufacturings/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/manufacturings/iron_mine/iron_mine_1.png": "9c0522f50221a696b8cea01842b7a847",
"assets/images/manufacturings/iron_mine/iron_mine_2.png": "2c7e2d1133d3437a2389c49f9f92a2c8",
"assets/images/manufacturings/iron_mine/iron_mine_3.png": "6c2d1f1fde1c967a1eaeb61229cce140",
"assets/images/manufacturings/landscape_forest.png": "3509d44a62cefbf682dd83b273ec2b31",
"assets/images/manufacturings/landscape_sands.png": "3708eaf5d3718acfcf0ca1ef3e2bfbe1",
"assets/images/manufacturings/landscape_sea.png": "2ad3866d4605bf5fa39c52ce249dac0d",
"assets/images/manufacturings/liman/liman_1.png": "53300ab438df8f96718e64ec0661fa6b",
"assets/images/manufacturings/liman/liman_2.png": "d1897d7a74c50bfe0f47d22e5901f7d7",
"assets/images/manufacturings/liman/liman_3.png": "ddf13c1f33e85c270e7a991a8ddf6321",
"assets/images/manufacturings/marketplace/marketplace_1.png": "de0d501ebab3fd2f16246f382996a3f8",
"assets/images/manufacturings/marketplace/marketplace_2.png": "4c7529006d4d0fa189b891c8c6b0ef2a",
"assets/images/manufacturings/marketplace/marketplace_3.png": "224702d680f35ef7324c8e148cdfb23d",
"assets/images/manufacturings/mill/mill_1.png": "8d2ade451d86d548dd306a482b37d2fe",
"assets/images/manufacturings/mill/mill_2.png": "02b131406d0eef130365895df2c8389f",
"assets/images/manufacturings/mill/mill_3.png": "1fca3c631ab12337eef5cc894f99606e",
"assets/images/manufacturings/pasture/pasture_1.png": "1af6bfae39df75e5e03e24b43da8f827",
"assets/images/manufacturings/pasture/pasture_2.png": "2df4606064960be0c92a172c8cc0d1a3",
"assets/images/manufacturings/pasture/pasture_3.png": "387cc74e1896d79b7b3aba8c26066599",
"assets/images/manufacturings/powder_cellar/powder_cellar_1.png": "04f39c3c8e750597671b5ccc2646991c",
"assets/images/manufacturings/powder_cellar/powder_cellar_2.png": "a5fa849200c69a318da29013f5181f08",
"assets/images/manufacturings/powder_cellar/powder_cellar_3.png": "5d2b21e7bd57142c6e2357f899f465e9",
"assets/images/manufacturings/quarry/quarry_1.png": "1fef59746a77647e8cf77bb629338090",
"assets/images/manufacturings/quarry/quarry_2.png": "6a4ac5ccafe297a51b78b57230093f38",
"assets/images/manufacturings/quarry/quarry_3.png": "151d98ed654a920e0392cd84d5141047",
"assets/images/manufacturings/river/river_1.png": "c81b76e07214efd9be31a9af9eca0be0",
"assets/images/manufacturings/river/river_2.png": "6988e8bd68d6534abfdf2d1b0f952733",
"assets/images/manufacturings/river/river_3.png": "2219f7dfd26f66b7c52dc3a325ba88ef",
"assets/images/manufacturings/sawmill/sawmill_1.png": "ff3ec3ceb431e9fc099abffb5ee150bf",
"assets/images/manufacturings/sawmill/sawmill_2.png": "051381de47d7cf7cff556c3e2499b792",
"assets/images/manufacturings/sawmill/sawmill_3.png": "05618d739089b2b5a50d449732053368",
"assets/images/manufacturings/shooting_range/shooting_range_1.png": "e3a45c78b2dd73bb50e2f979ca37a5dc",
"assets/images/manufacturings/shooting_range/shooting_range_2.png": "3fabc1e3a55882e3d60500b641318dbf",
"assets/images/manufacturings/shooting_range/shooting_range_3.png": "7fa26f2420ae5c4b5728981d6530ab3b",
"assets/images/manufacturings/sich.png": "baef928b091bfa5dc3baacef072c777a",
"assets/images/manufacturings/silk_market/silk_market_1.png": "de0d501ebab3fd2f16246f382996a3f8",
"assets/images/manufacturings/silk_market/silk_market_2.png": "4c7529006d4d0fa189b891c8c6b0ef2a",
"assets/images/manufacturings/silk_market/silk_market_3.png": "224702d680f35ef7324c8e148cdfb23d",
"assets/images/manufacturings/smeltery/smeltery_1.png": "902695ccb453abb6436b3481a225224b",
"assets/images/manufacturings/smeltery/smeltery_2.png": "6108bd6c0c4470c38a8b85770af2e1fc",
"assets/images/manufacturings/smeltery/smeltery_3.png": "e1e89a3adff24006423c29dba9382f03",
"assets/images/manufacturings/smith/smith_1.png": "f363995ca23d3ae0f229fb826c6f81ec",
"assets/images/manufacturings/smith/smith_2.png": "92dca08dc90a781c770e39b5dc42c53a",
"assets/images/manufacturings/smith/smith_3.png": "fdd292f41333c9aec6ffe6c6c89e1352",
"assets/images/manufacturings/stables/stables_1.png": "409b04e218ecddfc5350c7be179d0afe",
"assets/images/manufacturings/stables/stables_2.png": "881be08adbfc08774fedcefbf23b988a",
"assets/images/manufacturings/stables/stables_3.png": "83e4e64dbf4936e92e410816bd3ca194",
"assets/images/manufacturings/sun.png": "aa3e81acae3ba4bbfa81887303a00dea",
"assets/images/manufacturings/tobacco_maker/tobacco_maker_1.png": "450674c8a009979538f7324e9da66c9c",
"assets/images/manufacturings/tobacco_maker/tobacco_maker_2.png": "a949cac91b9016e25be7b62f9b84c5a2",
"assets/images/manufacturings/tobacco_maker/tobacco_maker_3.png": "388481770891852ab3953defa9844d76",
"assets/images/manufacturings/trappers_house/trappers_house_1.png": "7e66ebd2097e706f3cededcb56cc7cc7",
"assets/images/manufacturings/trappers_house/trappers_house_2.png": "a3fc7fab6a96d2c1fe15eb758d6beb38",
"assets/images/manufacturings/trappers_house/trappers_house_3.png": "47c08d2e0e842afec5b976b740b42490",
"assets/images/manufacturings/wax_maker/wax_maker_1.png": "ff75779403fae52bdd4b953a16916a1d",
"assets/images/manufacturings/wax_maker/wax_maker_2.png": "37ce13b0351627d33ce910a8683967d2",
"assets/images/manufacturings/wax_maker/wax_maker_3.png": "dcd0fb03b3605103179156f004d9c7a4",
"assets/images/manufacturings/weavery/weavery_1.png": "a47d093a047fd7d7c295828a4fc4bf56",
"assets/images/manufacturings/weavery/weavery_2.png": "2a093bb047770a727eaa68165b5a01f9",
"assets/images/manufacturings/weavery/weavery_3.png": "400404f1e239711f7891b33f05124822",
"assets/images/other/locadeserta_hex.png": "dd5d15ac5e2328e6fa96a69f0755b2c9",
"assets/images/other/loca_deserta.png": "ec66d640f3bfe5f425af0ba1c8c90526",
"assets/images/other/sloboda.png": "0076fd4c2ce677ab062b91652ace54df",
"assets/images/playstore.png": "f4d63fae81e23408ab947ca1d0fbd107",
"assets/images/resources/amber/amber.png": "cc433a749aa93b3f5270493803343ef2",
"assets/images/resources/bread/bread.png": "1a4d7a5d7db7755ff9b5f804d17cb18f",
"assets/images/resources/bread/bread_0.png": "1a4d7a5d7db7755ff9b5f804d17cb18f",
"assets/images/resources/bread/bread_1.png": "5b1c2c13bf068a587160625a27ef6a8c",
"assets/images/resources/bread/bread_2.png": "b1cb251703151fa85e97ba334709a182",
"assets/images/resources/bread/bread_3.png": "2f9c08d4477ed4587add205993482da1",
"assets/images/resources/bread/bread_64.png": "1e1461523c70c6164a65111fb604a04a",
"assets/images/resources/cannon/cannon.png": "04d73ea1779a3a81f5859c8803994090",
"assets/images/resources/cannon/cannon_0.png": "04d73ea1779a3a81f5859c8803994090",
"assets/images/resources/cannon/cannon_1.png": "6f5581d86f8aea468fe1d9a4810f1d77",
"assets/images/resources/cannon/cannon_128.png": "8df030360b7d318d6892620301fef31f",
"assets/images/resources/cannon/cannon_2.png": "2e8bac2b84962cf039edaa1c7b0e2fef",
"assets/images/resources/cannon/cannon_3.png": "67c2d8eea2211ef4b2b726f97d52b07c",
"assets/images/resources/charcoal/charcoal.png": "f643b7689d8fd62537a0c1fbc116cb0d",
"assets/images/resources/charcoal/charcoal_0.png": "f643b7689d8fd62537a0c1fbc116cb0d",
"assets/images/resources/charcoal/charcoal_1.png": "815272cbc58ea2069783de0d6e5e5ce9",
"assets/images/resources/charcoal/charcoal_2.png": "49023266a8f6b65ab8496ef54b662457",
"assets/images/resources/charcoal/charcoal_3.png": "bf1d126536dc344982db04e469ef362d",
"assets/images/resources/charcoal/charcoal_64.png": "8f2b8615ba72a0c7201b519b848c46b7",
"assets/images/resources/cloth/cloth.png": "08e7b58960f665ccc47ba4a00a06af4b",
"assets/images/resources/firearm/firearm.png": "3523ef00821416d601ec861647fd6a8e",
"assets/images/resources/firearm/firearm_0.png": "3523ef00821416d601ec861647fd6a8e",
"assets/images/resources/firearm/firearm_1.png": "eb50fc26903f214529f94d303b16fde3",
"assets/images/resources/firearm/firearm_2.png": "fc0a1d073088db7d6cfcbf524904171e",
"assets/images/resources/firearm/firearm_3.png": "469b95c97f69d99e2202ea39921900d3",
"assets/images/resources/firearm/firearm_64.png": "fb1d8f0924ae937103fbae33b2010227",
"assets/images/resources/fish/fish.png": "d28056520405141757d9658cb99be567",
"assets/images/resources/fish/fish_0.png": "d28056520405141757d9658cb99be567",
"assets/images/resources/fish/fish_1.png": "cdf2c17f9772b829c891a81b75935179",
"assets/images/resources/fish/fish_2.png": "2547c9cf24161767cab24222b77b09a8",
"assets/images/resources/fish/fish_3.png": "1f10b5a9463882bce6740e0131ddcbdd",
"assets/images/resources/fish/fish_64.png": "ff207342532a937b0c9d54d21db96165",
"assets/images/resources/fur/fur.png": "d6db6627fc387efde6171b1dc0a2346c",
"assets/images/resources/fur/fur_64.png": "fd27a7c2ea9a7f8ba28dbdf32e039357",
"assets/images/resources/gorilka/gorilka.png": "e6d096b276b95202f154847848c3c361",
"assets/images/resources/grains/grains.png": "59a60bb198cf077ada16fbe5356f6be0",
"assets/images/resources/grains/grains_0.png": "410c1a67b5b3e756141cd89507dc4053",
"assets/images/resources/grains/grains_1.png": "8ca1e70241b84b6818f15a865674b4b3",
"assets/images/resources/grains/grains_2.png": "7b26e695e8afe83e3e6620f8cb03b02b",
"assets/images/resources/grains/grains_64.png": "1778287ff454ef140b0675b293940504",
"assets/images/resources/honey/honey.png": "efab421c54869764be81590f1e316bb7",
"assets/images/resources/horse/horse.png": "2ebaa601a2b1c0f7dfb9f7775951e169",
"assets/images/resources/horse/horse_0.png": "2ebaa601a2b1c0f7dfb9f7775951e169",
"assets/images/resources/horse/horse_1.png": "50fd1cd08ec06ef9a8ce7711a1612df1",
"assets/images/resources/horse/horse_2.png": "31b3205ae34e80d7edc31ba511ba5c71",
"assets/images/resources/horse/horse_3.png": "c8a9766dc8235c2329e09cbe6aec94ba",
"assets/images/resources/horse/horse_64.png": "b5258f46b324b6a8b0a5acf06f57a7db",
"assets/images/resources/ironore/ironore.png": "359e3fe341b555413ffef6979fb0b7ba",
"assets/images/resources/ironore/ironore_0.png": "34626feb85cd1febaf400f7f0adefdcf",
"assets/images/resources/ironore/ironore_1.png": "0aab94f1f932ca948ba46269dbada003",
"assets/images/resources/ironore/ironore_2.png": "d57fbd6606fb94207c59f7f2006e22f4",
"assets/images/resources/ironore/ironore_3.png": "34626feb85cd1febaf400f7f0adefdcf",
"assets/images/resources/ironore/ironore_64.png": "7b2cd83978c073d38ae096d88fb1ac2f",
"assets/images/resources/metalparts/metalparts.png": "b65462169c95d43b85804fc2c91b42e8",
"assets/images/resources/metalparts/metalparts_0.png": "b65462169c95d43b85804fc2c91b42e8",
"assets/images/resources/metalparts/metalparts_1.png": "40864dab7568e15f04ac184d240299f0",
"assets/images/resources/metalparts/metalparts_2.png": "89ce57720cd903120f409db482b00194",
"assets/images/resources/metalparts/metalparts_3.png": "0bcde0518f655a36ee0543d24f5bc2d0",
"assets/images/resources/metalparts/metalparts_64.png": "3e9aa2966572e8a80f5afd4caf79f99f",
"assets/images/resources/money/money.png": "435f14f87b73919df587248ca7d96131",
"assets/images/resources/money/money_0.png": "435f14f87b73919df587248ca7d96131",
"assets/images/resources/money/money_1.png": "e70139111f4b2d742bc033f3bd478517",
"assets/images/resources/money/money_2.png": "a5823370e78915a8df55f5e4f69346ce",
"assets/images/resources/money/money_3.png": "46e8999944828ba4e0d6c3f8d4a489a2",
"assets/images/resources/money/money_64.png": "5a2ff4afeb3900e0e4d52e2dcf720192",
"assets/images/resources/planks/planks.png": "3b739dcd54146070bdf86ffd2f9a41c9",
"assets/images/resources/planks/planks_1.png": "d03dd30e02b3214ff7189203d99f8f5b",
"assets/images/resources/planks/planks_2.png": "07d4f5fec068e05def00d81ba00ffeda",
"assets/images/resources/planks/planks_3.png": "f903ce51586f92b324d761ca530aec0b",
"assets/images/resources/planks/planks_64.png": "61339aaa0d06f4bcd1767d076a61e1f5",
"assets/images/resources/powder/powder.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_0.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_1.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_2.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_3.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_64.png": "9da6bdd2bb01d22492f7e41bc64e6523",
"assets/images/resources/salt/salt.png": "839f8288d8159ea40ec903a26227a5f2",
"assets/images/resources/silk/silk.png": "0313da8d39d7a712c0f6d361c99c1e59",
"assets/images/resources/stone/stone.png": "e44482fb82895c9fdfc4bcaddd3cbd04",
"assets/images/resources/stone/stone_0.png": "e44482fb82895c9fdfc4bcaddd3cbd04",
"assets/images/resources/stone/stone_1.png": "bc9c95ce8db4d8dd3e0ef9c6e8d5c191",
"assets/images/resources/stone/stone_2.png": "8f0f18c9695d89c558bcf1bbbe9925f2",
"assets/images/resources/stone/stone_3.png": "3860d81e1850985565a3ac5b5fd14c30",
"assets/images/resources/stone/stone_64.png": "cd66fb6c415052a31ecd567f007f9a3b",
"assets/images/resources/tobacco/tobacco.png": "d3fa5f3703c251488bcfed5ecb4333bb",
"assets/images/resources/wax/wax.png": "0ae9dc6d02dee2bd134e73867e84d1cb",
"assets/images/resources/wood/wood.png": "7ef19197b45be9e520e9c552cafb6e82",
"assets/images/resources/wood/wood_0.png": "7ef19197b45be9e520e9c552cafb6e82",
"assets/images/resources/wood/wood_1.png": "503fc8c1d54c509b808ddb1d6d1cad3b",
"assets/images/resources/wood/wood_2.png": "19461efaac0f12c134412955b88dd05f",
"assets/images/resources/wood/wood_3.png": "84b15565fa09849c7dd3348251fe212c",
"assets/images/resources/wood/wood_64.png": "1faa872fe05e0af47dbe7a14d2c01f76",
"assets/images/resources/wool/wool.png": "cc865e4cbb52e5db01fc99b191ecc919",
"assets/images/twitter_icon.png": "072692aaa9a15b0ae5014a2572857ea1",
"assets/images/ui/bandura.png": "f0209a127058da5c8f75b373e57500ac",
"assets/images/ui/bandura_back.png": "c554df03d94e845f7323485db8ea1e25",
"assets/images/ui/glory.png": "a839c28e98aca2270488af111611b67a",
"assets/images/ui/papyrus_1.png": "72918115d27ef72ae262b5bef1350efa",
"assets/images/ui/papyrus_2.png": "81cfc40022d3f665c7d36c43a2906859",
"assets/images/ui/papyrus_3.png": "71065cb99183b2ce1da9fab3d650d8d6",
"assets/images/ui/persons_on_a_map.png": "abd12e43f7c856c493cf3bb5a678c92f",
"assets/images/wagon/cart.png": "b4e55858ae935c7935fda44786c4e63d",
"assets/images/wagon/wagon.png": "3fe8946e555d9bfad3a5a69b9462e023",
"assets/images/wagon/wheel.png": "210af9fb50404fdcb7713321c6f0f9a4",
"assets/NOTICES": "b3555eee1658a75b310b7fffb55053ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/android-icon-144x144.png": "a7d8411766dca09a9a01e8dfe169a4fb",
"icons/android-icon-192x192.png": "1102d2804546189e6eff241531a281fd",
"icons/android-icon-36x36.png": "1d0da75c4cdf3f5a3a714817798bfa1a",
"icons/android-icon-48x48.png": "6640cab8e6a35deb0401d40da2a02470",
"icons/android-icon-72x72.png": "4210fffd77dd229262596e66cca81e0d",
"icons/android-icon-96x96.png": "3695e136082e9c64f9cb0c1dd445801c",
"icons/apple-icon-114x114.png": "9030fa3464e48d07571d8b99108e0204",
"icons/apple-icon-120x120.png": "b020dd13b614c58f6aa301f1631b3c13",
"icons/apple-icon-144x144.png": "a7d8411766dca09a9a01e8dfe169a4fb",
"icons/apple-icon-152x152.png": "d936706fb19bd6da903577773c8497a2",
"icons/apple-icon-180x180.png": "5e111021972e06badffad7d008ff6e2e",
"icons/apple-icon-57x57.png": "de29d8799b7ff1c678835f84744273ce",
"icons/apple-icon-60x60.png": "415881511a0c4302b3079dcb5c25d85e",
"icons/apple-icon-72x72.png": "4210fffd77dd229262596e66cca81e0d",
"icons/apple-icon-76x76.png": "644842df9b1111e537799688b4eb9631",
"icons/apple-icon-precomposed.png": "9afa1b8e201943c0d54558ef316ca6c3",
"icons/apple-icon.png": "9afa1b8e201943c0d54558ef316ca6c3",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "ae8c5bb9166698c9e11a3d8f0b8a8a6b",
"icons/favicon-32x32.png": "0b01b18a532ccfe82e49623d09dfcb23",
"icons/favicon-96x96.png": "3695e136082e9c64f9cb0c1dd445801c",
"icons/favicon.ico": "1997eb5871d40de14bc9c48e62f9c45e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "a7d8411766dca09a9a01e8dfe169a4fb",
"icons/ms-icon-150x150.png": "482b8c3ce35df477099290761ba371c1",
"icons/ms-icon-310x310.png": "7b1ae2fea73a683d8b7faddcb3f7cb5c",
"icons/ms-icon-70x70.png": "ad01819acec24c8360ff5a1ffbbea0e7",
"index.html": "be024306445ecc69ad6a78a86b0c4b57",
"/": "be024306445ecc69ad6a78a86b0c4b57",
"main.dart.js": "e7da696e759b781755fd8305f4589216",
"manifest.json": "12e36868a42d101d1d10bec767d15862",
"version.json": "c5f001effb3013beaa44bf6fe015e182"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

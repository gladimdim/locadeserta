'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c68392429d27a25d6156d29db899c6cd",
"assets/assets/city_names.json": "abfc1152f5a2afa6f9d727244c902168",
"assets/assets/sounds/building_remove.mp3": "4be7e8125b9ccfacc854f3095ff4eeff",
"assets/assets/sounds/building_upgrade.mp3": "2c12f9f49efa3510570c85a0494383f5",
"assets/assets/sounds/event_add.mp3": "0bf025b38b381eb092c1bbc2917ddb1a",
"assets/assets/sounds/event_choicable_add.mp3": "6881bf070ba8c5a7555e84e890d06a80",
"assets/assets/sounds/event_choicable_complete.mp3": "af822329b6519b80e7aad7a5a13e85e9",
"assets/assets/sounds/event_complete.mp3": "65d523a9b579bec58d710f0380b862de",
"assets/assets/sounds/event_if_add.mp3": "90e8646eb71afaa48facd0ec7b60cb24",
"assets/assets/sounds/new_year.mp3": "05592ee0fadfa1ac9ba3c4e3c104bb75",
"assets/assets/sounds/task_complete.mp3": "fcd7e4b18857c15f56de5a238a6030e5",
"assets/FontManifest.json": "ce7e5ed330de171fd19dfb6a7f56fc8f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/PressStart2P-Regular.ttf": "2c404fd06cd67770807d242b2d2e5a16",
"assets/fonts/Raleway/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"assets/fonts/Raleway/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803",
"assets/fonts/Raleway/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/fonts/Roboto/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"assets/fonts/Roboto/Roboto-Regular.ttf": "18d44f79b3979ec168862093208c6d7d",
"assets/images/background/boat/0.jpg": "b91caf977636d28c1510c4680731328b",
"assets/images/background/boat/1.jpg": "9ab57d00a3307ef85124ab9de27bd972",
"assets/images/background/boat/10.jpg": "a053a177add6ef1a767d07c81621b433",
"assets/images/background/boat/11.jpg": "052e313d76d6db7dfdb3407fbc4706c8",
"assets/images/background/boat/12.jpg": "53e30695086c7599c00862cdfcf6ee68",
"assets/images/background/boat/13.jpg": "903e2d36cdf78c5b66529545f83b16b9",
"assets/images/background/boat/14.jpg": "9243b9d0461888783bdda6cab1cba577",
"assets/images/background/boat/15.jpg": "d3eef9c807dffdd4655460806cd451b2",
"assets/images/background/boat/16.jpg": "feceb28ef032a37335b236f4f0292d8b",
"assets/images/background/boat/17.jpg": "0adf6863563cbae7c3bd73bc901b0657",
"assets/images/background/boat/18.jpg": "2abcb2a51ab1cf6756be4dceab7b33b9",
"assets/images/background/boat/2.jpg": "bae07c018fe6920df4a49506023311d1",
"assets/images/background/boat/3.jpg": "a6af760dbfea99e9cf344b8836d4f8ff",
"assets/images/background/boat/4.jpg": "7f4b38bf051e2ceb2df2c8e6dd630b93",
"assets/images/background/boat/5.jpg": "dcd1bb15b7b9946b122c0626c3af627e",
"assets/images/background/boat/6.jpg": "e76943b9152a0d13360470fb24eccf35",
"assets/images/background/boat/7.jpg": "bf02382e35a6979470887a9dd6acd08c",
"assets/images/background/boat/8.jpg": "3cfcf627e1aac9d5e3f8c891fbd4093c",
"assets/images/background/boat/9.jpg": "61edb813659fa77af8478e0c29d9b38f",
"assets/images/background/boat/c_0.jpg": "85faca8b6a94d01e86a8e8ce033c81ff",
"assets/images/background/boat/c_1.jpg": "74744c03071858ef7c28d38670cf7e3b",
"assets/images/background/boat/c_10.jpg": "6adc959271e2937ddc1781e75a972333",
"assets/images/background/boat/c_11.jpg": "9a157cfbc24a4ef9a1c4c164c14992e2",
"assets/images/background/boat/c_12.jpg": "80c34cc8d329e44b814e03a6ceb4eff7",
"assets/images/background/boat/c_13.jpg": "3a913baaf29047d69b32baddcb0d44ba",
"assets/images/background/boat/c_14.jpg": "2715bc1b44d62d702c25c4a6767076f3",
"assets/images/background/boat/c_15.jpg": "8cdf13e11896643040c98ac196631662",
"assets/images/background/boat/c_16.jpg": "d74371dbaaa866550e3ea830eb19f7ea",
"assets/images/background/boat/c_17.jpg": "fae868461ae8020f84420796e7bbe0f1",
"assets/images/background/boat/c_18.jpg": "5e5f836009b29169ee3c763f8ed5352a",
"assets/images/background/boat/c_2.jpg": "232701aa642074bd90b55a94545b6056",
"assets/images/background/boat/c_3.jpg": "9a9f2fac597609fe80232f9488639a08",
"assets/images/background/boat/c_4.jpg": "2126510dde115dbf450b4263e3b2577c",
"assets/images/background/boat/c_5.jpg": "a229d34cc6c235f1ee861e0b9d14eeea",
"assets/images/background/boat/c_6.jpg": "0fe143447fd964197e342d38d6519438",
"assets/images/background/boat/c_7.jpg": "71026f2ac36f9b80046b379ef9230507",
"assets/images/background/boat/c_8.jpg": "a8805172c4d35a83fc87689132593963",
"assets/images/background/boat/c_9.jpg": "e6e30490b74919bc4039e90bf38674f2",
"assets/images/background/bulrush/0.jpg": "411f1f7379a3d25c0345dfa11afc287a",
"assets/images/background/bulrush/1.jpg": "f484f3f058cd278707b2cd554aa0588e",
"assets/images/background/bulrush/10.jpg": "0d083150deb961dedefc2f0a8f20193c",
"assets/images/background/bulrush/11.jpg": "c2affdd3bbabb7048c3e17982a13659a",
"assets/images/background/bulrush/2.jpg": "30cd366d7e706fca22585f6b3a3c20d1",
"assets/images/background/bulrush/3.jpg": "592f5b9680b14ecc04a001e3074b9d4b",
"assets/images/background/bulrush/4.jpg": "2d74198fe8cc8c34b4e97f749cc6d5f4",
"assets/images/background/bulrush/5.jpg": "98af9ddae386f4e5051cbaadf7114073",
"assets/images/background/bulrush/6.jpg": "8ec5df034e238ed68953e7c11757d5d1",
"assets/images/background/bulrush/7.jpg": "6bf354f59f704562d269d9d16d05cfe4",
"assets/images/background/bulrush/8.jpg": "070b71c6e89b66fabb45d10e3183e29f",
"assets/images/background/bulrush/9.jpg": "b2574ea16ca2dfee6801b218f25a155e",
"assets/images/background/bulrush/c_0.jpg": "485b331ed303161b76188ff987959949",
"assets/images/background/bulrush/c_1.jpg": "602bf12f2476ac3e0d287bd4dd930373",
"assets/images/background/bulrush/c_10.jpg": "a9b9edc00798e8cb643dffc762365c1b",
"assets/images/background/bulrush/c_11.jpg": "d84f27ede25630c4196cbcbb254bb266",
"assets/images/background/bulrush/c_2.jpg": "615b21c51d6cdc9acbbe6fd68fc5248f",
"assets/images/background/bulrush/c_3.jpg": "aa8a357afe49b6f827ec2dc7ff20dbae",
"assets/images/background/bulrush/c_4.jpg": "33b3e804cb5414304c5c29dc3147ada5",
"assets/images/background/bulrush/c_5.jpg": "4c47bdf0d8bb1edc9eef7004aa9ab5bb",
"assets/images/background/bulrush/c_6.jpg": "d07b9fe755c4dfb69fbbf691ea796e68",
"assets/images/background/bulrush/c_7.jpg": "bff2fe926233dd61e50bfd42314f8a55",
"assets/images/background/bulrush/c_8.jpg": "59f71ec14ee802a756b2119364c26dfd",
"assets/images/background/bulrush/c_9.jpg": "b85655b1bd2d945b400bcd1ccecc51a6",
"assets/images/background/camp/0.jpg": "d295c901f34a1b4747d2e6cb6dcfe045",
"assets/images/background/camp/1.jpg": "c30308256da3dfc62f28d119099f7168",
"assets/images/background/camp/10.jpg": "a6cc374f2d10999e8b13183e728aaed6",
"assets/images/background/camp/11.jpg": "f32d387946857fc8c68af777e348cc63",
"assets/images/background/camp/12.jpg": "0d45226c6b9382b72be35978ab38e17a",
"assets/images/background/camp/13.jpg": "999a9381c803577c7ae990b018b8a9e3",
"assets/images/background/camp/14.jpg": "efe2824c12d36b83704891548adf8041",
"assets/images/background/camp/2.jpg": "b0ecfa08bfc850264fc7373f700c5d91",
"assets/images/background/camp/3.jpg": "cef27cfbae01ba14f15ad7645d00d88c",
"assets/images/background/camp/4.jpg": "78741b06f4b909e929a221b205699853",
"assets/images/background/camp/5.jpg": "8ca4d30dbc7e3221c3d0257e7546ef9b",
"assets/images/background/camp/6.jpg": "ccea705523535f3635443d6120aa8d9c",
"assets/images/background/camp/7.jpg": "3ac78a201122172771a81b28c1ee19d4",
"assets/images/background/camp/8.jpg": "beb71e22a35dbf5c2e236af7fa11e820",
"assets/images/background/camp/9.jpg": "6293bbbb7671bcfb86ecaecbf3096277",
"assets/images/background/camp/c_0.jpg": "1d2b2d756f85909f342cabbb1903729a",
"assets/images/background/camp/c_1.jpg": "710bf81cb65384c19b9c46cf52199b1a",
"assets/images/background/camp/c_10.jpg": "28432fb54d787746e530192f0a096b55",
"assets/images/background/camp/c_11.jpg": "80e2505500c46d9dd8ff5fe9dc780b71",
"assets/images/background/camp/c_12.jpg": "47fd559a9db1ab95a4b578d3bbdde7f1",
"assets/images/background/camp/c_13.jpg": "f70b8b2ccc1cc605eaefdf89f8b4e166",
"assets/images/background/camp/c_14.jpg": "a7531aaddcaf4bebe0aea600df8b7f4f",
"assets/images/background/camp/c_2.jpg": "896f144baa813bb83f4f03276de40549",
"assets/images/background/camp/c_3.jpg": "9bda2a99a4565a0232d05bc0ea318a73",
"assets/images/background/camp/c_4.jpg": "d0c4daf544de48add2d8055c554f5e04",
"assets/images/background/camp/c_5.jpg": "74ef5ed18d7aeb1b87a08b1a0119c556",
"assets/images/background/camp/c_6.jpg": "46827ccb7378193ed05fa85ef62bc5f7",
"assets/images/background/camp/c_7.jpg": "450ee7b6d881d1dee20ebc3c5b8a8322",
"assets/images/background/camp/c_8.jpg": "9d5616cf77006b95c79b8884b47f475f",
"assets/images/background/camp/c_9.jpg": "b45b2e844b694cc40701f48dd43bb9f5",
"assets/images/background/cossack_0.jpg": "1a11633dad6bd62846bc34e51af99f67",
"assets/images/background/c_cossack_0.jpg": "0b0868a9d66c93442aed3243dc05e6fe",
"assets/images/background/forest/0.jpg": "f135fa6186977668460e2938a1099f44",
"assets/images/background/forest/1.jpg": "374744be98afdd61044ff4e384f5768d",
"assets/images/background/forest/2.jpg": "153a08153131dae87cf1b6eacf72305e",
"assets/images/background/forest/3.jpg": "bc40a678660d077704e5051e8447d3ea",
"assets/images/background/forest/4.jpg": "7e5c0e0a80756e87afecc053244aa5b6",
"assets/images/background/forest/5.jpg": "1e5c26e41bcc91b21d9cc584bd075961",
"assets/images/background/forest/6.jpg": "ee2ca2f2b342602f255678afe7640899",
"assets/images/background/forest/7.jpg": "a125419308959e48f2cdc41e883a033b",
"assets/images/background/forest/8.jpg": "1ca0a0ef34809c46c461e4f0fc360622",
"assets/images/background/forest/9.jpg": "f8108092828c74824cef7d2c08a911f1",
"assets/images/background/forest/c_0.jpg": "1905a2eaac1d2f42f6621bd07c9046c3",
"assets/images/background/forest/c_1.jpg": "0e36a127d0ab826bdadeac2fb1a1f57b",
"assets/images/background/forest/c_2.jpg": "c10bda1043ce016c45b5764fc2ca8a95",
"assets/images/background/forest/c_3.jpg": "4db84b586b58c96c97374525b626c283",
"assets/images/background/forest/c_4.jpg": "45552da4efe37113aba53140d71a6312",
"assets/images/background/forest/c_5.jpg": "0670b75bd0379bfe4de00b05c78a344f",
"assets/images/background/forest/c_6.jpg": "45d940a70fe06a59871cd627cd8ba4d9",
"assets/images/background/forest/c_7.jpg": "d7dd30b33d9579560242ecb86de4a4d7",
"assets/images/background/forest/c_8.jpg": "3f7d2a10494fc53df83e525c441300c6",
"assets/images/background/forest/c_9.jpg": "f16beedd173c5d43c37819d9e61f9c01",
"assets/images/background/landing/0.jpg": "a81890a12ace1f58005336f50279ce8b",
"assets/images/background/landing/1.jpg": "fda49185c25a829a9b9d4032a3f77c35",
"assets/images/background/landing/2.jpg": "593ed8da74a1535f3a30975b40354428",
"assets/images/background/landing/3.jpg": "aaa2b867d3898dd532dae7be9414fef9",
"assets/images/background/landing/4.jpg": "8679a83a4cbebf227a53107c8e72a860",
"assets/images/background/landing/5.jpg": "35c578cf439b94ea06de1d29ad655ac5",
"assets/images/background/landing/6.jpg": "eef04c081f38bc01bb375ad5b278b7a7",
"assets/images/background/landing/7.jpg": "6b7c695b64523d871add2a6f736fc612",
"assets/images/background/landing/c_0.jpg": "400b8355b88254517ec37733da1dc554",
"assets/images/background/landing/c_1.jpg": "5a2f0d1ad907f4f7a17dd9fcae60f9dc",
"assets/images/background/landing/c_2.jpg": "dfa26ecde4540f9971abcb98e03a93b2",
"assets/images/background/landing/c_3.jpg": "7ff3ad9169c6eed7e34a60f428771003",
"assets/images/background/landing/c_4.jpg": "4bc5006b9c25de8e1307db2045be598e",
"assets/images/background/landing/c_5.jpg": "3a30dff864f014e5b77722421e59c3b1",
"assets/images/background/landing/c_6.jpg": "48167f5d9435666ca4939ceb8bf51f23",
"assets/images/background/landing/c_7.jpg": "582c6ca7853ec0f40849e8213b912c50",
"assets/images/background/map/boplan_map.jpg": "2b3a7d7394431a9bcd708c530bcbd8c6",
"assets/images/background/map/forest_tile_0.png": "90ac86ade1b138bc22a2de07d071014a",
"assets/images/background/map/forest_tile_1.png": "98b40c0c08e7180d6e1fe01ca014414f",
"assets/images/background/map/forest_tile_2.png": "29993c13f896a6fc6b37f4f48deb6ab7",
"assets/images/background/map/forest_tile_3.png": "4ae315a19118a9e9991ebd8dd00525e1",
"assets/images/background/map/grass_tile.png": "abc8b720aba8968e7987fd39d47b6e88",
"assets/images/background/map/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/background/map/lake_tile_1.png": "5347895c5d4507e6d47c0875259b36c5",
"assets/images/background/map/lake_tile_2.png": "43229fcec3668745c5c4c5fd3e8ebcef",
"assets/images/background/map/river_angle_1.png": "36d7bbcd8f007ad1c43f96c983bed9f6",
"assets/images/background/map/river_angle_2.png": "fe8a73d35028c82f04d8e7c98e0b06eb",
"assets/images/background/map/river_tile_1.png": "813ddf62451600d1ade7161b405bd88a",
"assets/images/background/map/river_tile_2.png": "26acecf86f4c45d943349c4e4f55fbc5",
"assets/images/background/parallax/church_1.png": "bf2eb348680290d630a7bc866f55993a",
"assets/images/background/parallax/church_2.png": "b91b7ab5f49bf08f5dad476f8f80a9ec",
"assets/images/background/parallax/church_3.png": "281d3c1a8166e9b2dacc04683e191489",
"assets/images/background/parallax/clouds_1.png": "5c7b48d38e33f6933d5107ec1bc02e84",
"assets/images/background/parallax/clouds_2.png": "a3285eb92c19b5afaf2d2b705dc6ce3f",
"assets/images/background/parallax/clouds_3.png": "7922ca0a8c680716fc0256a85b707004",
"assets/images/background/parallax/empty_ground.png": "54050bdc506651c1a3cd6a52f7ed2fb0",
"assets/images/background/parallax/field_1.png": "7fc5a276eab88d1e7f9b11ceac4ab4b6",
"assets/images/background/parallax/field_2.png": "8e25bd09072b427cf6c15e783b976ccb",
"assets/images/background/parallax/field_3.png": "81ed0387a829385b4f5f6122ef9896fa",
"assets/images/background/parallax/forest_1.png": "1b61d165e438039766d2d8e30d869181",
"assets/images/background/parallax/forest_2.png": "edb87da1fa4487aa57ebf62ef3fa52d7",
"assets/images/background/parallax/forest_3.png": "29337a54a1bf7e95fcba926a658f84b7",
"assets/images/background/parallax/goxel_background.png": "4d25341b3d9edcdcf9803d60f5582519",
"assets/images/background/parallax/house_1.png": "9b76438edd805cbc8c7433a216a57bbd",
"assets/images/background/parallax/house_2.png": "6732039c56e0a0aa31b6bb04e0a093ca",
"assets/images/background/parallax/house_3.png": "2bc8803040cb5a1922c49718de990f91",
"assets/images/background/parallax/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/background/parallax/iron_mine_1.png": "0a04e01bbf84c0eecf7c9d20a7f21344",
"assets/images/background/parallax/iron_mine_2.png": "7d6ad532bb14e2f005d7368c9b3954a5",
"assets/images/background/parallax/iron_mine_3.png": "d96bd6298cfc4cce59e27aa6f52b0113",
"assets/images/background/parallax/landscape_forest.png": "7721dc1e6ebe8ac56f4ffd622fab4ce2",
"assets/images/background/parallax/landscape_sands.png": "ca4408220a31f9c6066067b6751c205b",
"assets/images/background/parallax/landscape_sea.png": "9c2c8eb2b71cdb5eafa202e375de15fc",
"assets/images/background/parallax/mill_1.png": "9ffcf37dc3643facb362d0842c99215f",
"assets/images/background/parallax/mill_2.png": "1d0e86db10c54edda76a6162940d4e1b",
"assets/images/background/parallax/mill_3.png": "6156443e63cb347f15fa4cc77d5e5cfd",
"assets/images/background/parallax/powder_cellar.png": "17e252293a45fae37d122e4e5d39cc53",
"assets/images/background/parallax/powder_cellar_1.png": "b01792fbcf6816f3993930fb485f620a",
"assets/images/background/parallax/powder_cellar_2.png": "eea505c0d1af2f7087baabd874448218",
"assets/images/background/parallax/powder_cellar_3.png": "84e1ca07e9dd705aeacbb284fce8b3f1",
"assets/images/background/parallax/quarry_1.png": "18dfd080f09c3828fc38d193e8b44df5",
"assets/images/background/parallax/quarry_2.png": "860ed5dddd3fac9b8ffa86e805c6a1de",
"assets/images/background/parallax/quarry_3.png": "7f40dc48d74645ba054bddf450f1a47a",
"assets/images/background/parallax/river_1.png": "32a58da54071d8202e6140e7163b0d65",
"assets/images/background/parallax/river_2.png": "dc6eb2d08ca2ba8c44c39a353299185f",
"assets/images/background/parallax/river_3.png": "5a1de9dab6e36f984f2ffc35eb492f96",
"assets/images/background/parallax/shooting_range_1.png": "cc3db8cee7877c9140d162707141da6f",
"assets/images/background/parallax/shooting_range_2.png": "8808d3166e4489ed154e39c2e535d994",
"assets/images/background/parallax/shooting_range_3.png": "136046407ed65c13cf475c5b73384789",
"assets/images/background/parallax/sich.png": "4b320513d9bf369b46ee53a420d44c91",
"assets/images/background/parallax/smith_1.png": "34f4180e082aa483ae36038ab4df8159",
"assets/images/background/parallax/smith_2.png": "89b6b200174eb4129169cb07b890717a",
"assets/images/background/parallax/smith_3.png": "08312662c4eb63692307e03cd7388eea",
"assets/images/background/parallax/stable_1.png": "efa953bef8234916a1b073983e056c37",
"assets/images/background/parallax/stable_2.png": "d2fd220f9745823577da3ba5338da85b",
"assets/images/background/parallax/stable_3.png": "cddbb8d48cf328c48dc3903395d31588",
"assets/images/background/parallax/steppe.jpg": "0bb9ab4bb286f316355785d0364eecfb",
"assets/images/background/parallax/steppe_2.jpg": "abf58404e0e2bb4d2a5e2e0d71600eb3",
"assets/images/background/parallax/sun.png": "c54bec8d3531b72ecb608cb9f835c7f7",
"assets/images/background/parallax/sun_background.png": "3e0fe349bd82ae658b76eb12c42f1b6d",
"assets/images/background/parallax/tower.png": "f14caaab1015480f98466db6aec1f211",
"assets/images/background/parallax/tower_1.png": "fec2b43656730eae2b4cda5304e1fa6d",
"assets/images/background/parallax/tower_2.png": "710c1712d1b536fec13a74e1d912c39c",
"assets/images/background/parallax/tower_3.png": "0dbec1d8604dd72e8b23ccd81b538269",
"assets/images/background/parallax/trappershouse_1.png": "9e236c2adc19221dd9d9e8163216bdb4",
"assets/images/background/parallax/trappershouse_2.png": "755fd520b6cfe5ec3948259172951675",
"assets/images/background/parallax/trappershouse_3.png": "5f69d3da8c353b8d2b324b475ab06b7a",
"assets/images/background/parallax/wall_1.png": "4336f7fcefe73ee82d9c9117d851aacb",
"assets/images/background/parallax/wall_2.png": "2ddce9d3f729e67815752973d846c03b",
"assets/images/background/parallax/wall_3.png": "3c4934e97fdbdc70de79633c369c7a73",
"assets/images/background/parallax/watch_tower_1.png": "ef559e8271bd2ce76d3dea88618816da",
"assets/images/background/parallax/watch_tower_2.png": "7b5cee9c5fba63fa13456b5183cb7bdb",
"assets/images/background/parallax/watch_tower_3.png": "db90cff662d9eb97cf74dc064c2eecde",
"assets/images/background/river/0.jpg": "a3345d42fab01efa74a8b8a14f361219",
"assets/images/background/river/1.jpg": "e49b1d2d0b61c1e2e690b531ca502b51",
"assets/images/background/river/10.jpg": "28eb0031fc4e5be5859aa4b1f1540e08",
"assets/images/background/river/11.jpg": "8a4bcc5b589f7d50feab3d57682f70ad",
"assets/images/background/river/12.jpg": "04b3054f0f35f0350ca381cba931db79",
"assets/images/background/river/13.jpg": "3cdc1757554903c8c3b7609d10fa112b",
"assets/images/background/river/14.jpg": "f6b5e603299e1d696b382a51e188da46",
"assets/images/background/river/15.jpg": "3d8873fdef03f87d5cc60017ae50076f",
"assets/images/background/river/16.jpg": "7f7dd6a00197798862bd4cbf0265d38c",
"assets/images/background/river/17.jpg": "506ea7c67b6b6a964a840242d3d2909e",
"assets/images/background/river/18.jpg": "083f8290148170a195b288a48a9b976a",
"assets/images/background/river/19.jpg": "bfb42a239667984051b320fb4b273981",
"assets/images/background/river/2.jpg": "fc3b0962b4189f9d07abaefe597d3301",
"assets/images/background/river/20.jpg": "f1757632b402df90e684c8bedba3342c",
"assets/images/background/river/21.jpg": "f7eb753319190c990b258a04f20ef9e3",
"assets/images/background/river/3.jpg": "d4ca2765b02361c9b6ec5dc057b83d5a",
"assets/images/background/river/4.jpg": "6d51abe5aee7458a9680b508e80d4f58",
"assets/images/background/river/5.jpg": "3f028871610f29676074e3907edd2845",
"assets/images/background/river/6.jpg": "ed75c0053cfca0b9907087a7a3a2cd59",
"assets/images/background/river/7.jpg": "a3bcfc1d4d8197b38f614fbe81a524bd",
"assets/images/background/river/8.jpg": "c7a8618f4f9f12d67c1d6be7a229c93d",
"assets/images/background/river/9.jpg": "66f4f451d47975e57faafc8e175f7b6e",
"assets/images/background/river/c_0.jpg": "1830b3755acaa416e7b9b76148e9000a",
"assets/images/background/river/c_1.jpg": "ea38492998c74118efda24ab097ddbe8",
"assets/images/background/river/c_10.jpg": "b580eaa080565ee13783aa49588c1ed6",
"assets/images/background/river/c_11.jpg": "66890553716734577e06f1711387d63b",
"assets/images/background/river/c_12.jpg": "28569fbc31e637895cef5e004e441eda",
"assets/images/background/river/c_13.jpg": "0e61671db0d5402a97012a3727640b32",
"assets/images/background/river/c_14.jpg": "8a4cf654788221443ab647f0311f46b2",
"assets/images/background/river/c_15.jpg": "8add9e35eae12fb590e52ba65c95db4f",
"assets/images/background/river/c_16.jpg": "a0caa585f3e5e9ff57a0632d5d68e925",
"assets/images/background/river/c_17.jpg": "694965f5dff370973a4d425e58cd7473",
"assets/images/background/river/c_18.jpg": "087efd2ed6d01cb463f3af856af66a5a",
"assets/images/background/river/c_19.jpg": "b8f67a291a1a7617e05d63f79b3d33d6",
"assets/images/background/river/c_2.jpg": "bf72e93ad77cc4833fab5bbe6947eeb2",
"assets/images/background/river/c_20.jpg": "34362373d73a8643dd5d7a0074fa599f",
"assets/images/background/river/c_21.jpg": "13ca0f466ba42d47624a4f9ace08311d",
"assets/images/background/river/c_3.jpg": "6a5c5a8f9359c88832017e8fbcf6a092",
"assets/images/background/river/c_4.jpg": "24d8a33330462c04baa6a6d554e44b6e",
"assets/images/background/river/c_5.jpg": "f42da3641ff27fff2456bc3f73ab286e",
"assets/images/background/river/c_6.jpg": "02916db4b2ac0056f74fbcd736f4714c",
"assets/images/background/river/c_7.jpg": "2049bd69f30732c7997212873c5ff848",
"assets/images/background/river/c_8.jpg": "1b06791cae414bbe49b8185c8f88abed",
"assets/images/background/river/c_9.jpg": "e05ab7c17f67c842a210cdf00d3553fa",
"assets/images/city_buildings/church.png": "269852b9f4f516966d0cf9040c859e04",
"assets/images/city_buildings/church_64.png": "8678f1345ddbfdfc218133d473947b8e",
"assets/images/city_buildings/citizen.png": "3d9b4be46bd2b09b98954c3a5b510862",
"assets/images/city_buildings/citizen_64.png": "1509a1ea0bca710c4f6fd4aefabed05e",
"assets/images/city_buildings/house.png": "9a5dcebe9e363e0c2b04dcd7863fef07",
"assets/images/city_buildings/house_64.png": "5b4f1607e25120c4f340ed846a23f90c",
"assets/images/city_buildings/shooting_range.png": "de498cc93f25f665bfd3c58be3149e99",
"assets/images/city_buildings/shooting_range_64.png": "5695a4bae209606af621e7bb880a3359",
"assets/images/city_buildings/sich.png": "3a857816ea56499556915d8d7468c5b6",
"assets/images/city_buildings/sich_0.png": "3a857816ea56499556915d8d7468c5b6",
"assets/images/city_buildings/sich_1.png": "a42f3f9c8949fe069fcc8a0b43b428de",
"assets/images/city_buildings/sich_2.png": "a02bf666c8bf3d87941f68628eb570a8",
"assets/images/city_buildings/sich_3.png": "e9fb1515a91633e1af81b12a20951298",
"assets/images/city_buildings/sich_64.png": "d51dc3901da0578e89c21063320d33eb",
"assets/images/city_buildings/tower.png": "ab04c9cac8bfc2bc259472b1536b1b50",
"assets/images/city_buildings/tower_64.png": "034561f8056e597ecbbd0535f551d1dd",
"assets/images/city_buildings/wall.png": "cb111e89932af2fb250ed54b5e4cdd75",
"assets/images/city_buildings/wall_64.png": "bc064cd82fd899f1098840f2bd0c80fb",
"assets/images/city_buildings/watch_tower.png": "bb08f2eeb8a9dcd45b2cacfa25300255",
"assets/images/city_buildings/watch_tower_64.png": "8700ee9b1dcdccbd7c3f732e35091a5a",
"assets/images/city_props/citizen.png": "3d9b4be46bd2b09b98954c3a5b510862",
"assets/images/city_props/citizen_64.png": "1509a1ea0bca710c4f6fd4aefabed05e",
"assets/images/city_props/defense.png": "a3b6501459334b54c53299976d7ef726",
"assets/images/city_props/defense_64.png": "eb65f047169b04e8daf528f7eb235c21",
"assets/images/city_props/faith.png": "5e0577daa944e57e5167b35340d487fa",
"assets/images/city_props/faith_64.png": "7e52fde47b59da0144bf94c70e5f24ce",
"assets/images/city_props/glory.png": "561b0672bb5faab4951e10d79c5fd239",
"assets/images/city_props/glory_64.png": "252cbbafff4f931c813bff51f1801ea3",
"assets/images/events/camp/camp.png": "f4d7227d891da1ec81fd140aa9faa950",
"assets/images/events/camp/camp_0.png": "f4d7227d891da1ec81fd140aa9faa950",
"assets/images/events/camp/camp_1.png": "ddc2324c8528800ca4581b85fb662f2f",
"assets/images/events/camp/camp_2.png": "131cb1cb9f5fdd4d67826c0c306e3a95",
"assets/images/events/camp/camp_3.png": "5376be6beb2c815afae4f77170228b8b",
"assets/images/events/camp/camp_icon_128.png": "0fbc8d19f886bebbd9c8032818a4b827",
"assets/images/events/failed_event/failed_event.png": "03df4798a4dc98cc818b0343afd862a2",
"assets/images/events/failed_event/failed_event_0.png": "648ede59a9ccf4b19d2f6d03fa6f088e",
"assets/images/events/failed_event/failed_event_1.png": "648a62396ae4b0220d6bdfb22d59240c",
"assets/images/events/failed_event/failed_event_128.png": "7cb8545dc1260963431cf41b3c65de07",
"assets/images/events/failed_event/failed_event_2.png": "27beb67f84d995e2d399b534e2262309",
"assets/images/events/failed_event/failed_event_3.png": "76aff286cc0ce0cc1dc9bbebc556881e",
"assets/images/events/failed_event/failed_event_64.png": "20d7c9f25a88bd98de2566164051b764",
"assets/images/events/horse/horse.png": "ec226f5f04706982d0b7c0bd2ed0161a",
"assets/images/events/horse/horse_0.png": "ec226f5f04706982d0b7c0bd2ed0161a",
"assets/images/events/horse/horse_1.png": "9d2ad063294c2a66b63a860a4025960f",
"assets/images/events/horse/horse_2.png": "80c3a7a80c0c2f4ea936796c1795b90c",
"assets/images/events/horse/horse_3.png": "6d45d7de4e340ec4bcb9d85b79faa63f",
"assets/images/events/horse/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/events/hunting/hunting_icon_128.png": "a21a0b515d1f59c62a79da47b6cadbc9",
"assets/images/events/merchant_visit/merchant_visit.png": "955a91c14dac00f9e5e386f0ba3e947b",
"assets/images/events/merchant_visit/merchant_visit_0.png": "77d73708715c7df901f0b5bad84dd7e3",
"assets/images/events/merchant_visit/merchant_visit_1.png": "2800ddcfab8c76f268c874f1fbe4ba8b",
"assets/images/events/merchant_visit/merchant_visit_128.png": "103d5da749435289bec506b1c2a831ce",
"assets/images/events/merchant_visit/merchant_visit_2.png": "535487dc0fe6aac9175721596ce53aae",
"assets/images/events/merchant_visit/merchant_visit_3.png": "3378e3c55b4ef928c62e0487d0947fb1",
"assets/images/events/merchant_visit/merchant_visit_64.png": "961c055623a47ce7b23fcd744edd49d3",
"assets/images/events/successful_event/successful_event.png": "74bf7c22a9046dd570e24b75692bd649",
"assets/images/events/successful_event/successful_event_0.png": "74bf7c22a9046dd570e24b75692bd649",
"assets/images/events/successful_event/successful_event_1.png": "4af4c6a07d4fe9d3cb49670763469c05",
"assets/images/events/successful_event/successful_event_2.png": "3c2ab24dcb25338386f6cc0e96dc7376",
"assets/images/events/successful_event/successful_event_3.png": "8af6521acefa825af2b6dde796771d63",
"assets/images/events/successful_event.png": "f91b638f3109de119d8af5b31cc72fa1",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe.png": "f3101fe78f32f463dd53a5745189bad8",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_0.png": "f3101fe78f32f463dd53a5745189bad8",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_1.png": "cddca270d222c7bfb7a6d625531a9854",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_128.png": "dbde99a0813b1db1015ec9c79ed4f520",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_2.png": "4efde9be93124c0dda73f993b7766022",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_3.png": "5012d0130f86147badfd87fbe6d3e702",
"assets/images/events/treasure/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/events/treasure/treasure.png": "6b903751d377952dc668f5982ea9b1e3",
"assets/images/events/treasure/treasure_0.png": "6b903751d377952dc668f5982ea9b1e3",
"assets/images/events/treasure/treasure_1.png": "e5446c1dd8d7e17e74dd81d30ed5d00e",
"assets/images/events/treasure/treasure_2.png": "bcdced0624e6e5faf2974bf5e4a516ad",
"assets/images/events/treasure/treasure_3.png": "3aa256707a9554cee7ae74995231628b",
"assets/images/events/treasure/treasure_icon_128.png": "fb3a8ea53a3ee4b8b48793357741161e",
"assets/images/resources/cossack.png": "5a4298182c7eababe1b95d2cf3f17af9",
"assets/images/resources/cossack_64.png": "08be1ab1c16f0898c5558e719fd2db69",
"assets/images/resources/firearm.png": "90d29fd801ba296b8843585167232cbf",
"assets/images/resources/firearm_64.png": "60b2f0c847e6af33fd494f36c2832ed9",
"assets/images/resources/fish.png": "02d00a26f5a9beaa0261f2358caa1e9d",
"assets/images/resources/fish_64.png": "50df5ce69f8875f00a9330668c86dd7e",
"assets/images/resources/food.png": "4e20614f9e9bb07b78546f3f23de5b8f",
"assets/images/resources/food_64.png": "2da83275541a93aed6d554fdb55ae4b8",
"assets/images/resources/fur.png": "f72a39afc139d3d439889e7d7b018deb",
"assets/images/resources/fur_64.png": "d1ff36b160d0000e0538edae4be1310a",
"assets/images/resources/horse.png": "c3dc878fd08e2095dc708c274d3c44e2",
"assets/images/resources/horse_64.png": "7c2e454ca2fec08e32953db4e18e9a09",
"assets/images/resources/iron_ore.png": "1c9d6f30d35eb1b8632144b629f95285",
"assets/images/resources/iron_ore_64.png": "d59003a391f0598b08b29c360512ad8f",
"assets/images/resources/money.png": "0b4aca26fa88ab3fa9cf0f5b213214d6",
"assets/images/resources/money_64.png": "d8e729942b8b7c8ae70b48e5640422b1",
"assets/images/resources/powder.png": "e9596b809227a6567f21d09a0358fd22",
"assets/images/resources/powder_64.png": "251cfadc70a5fe14ceff815a502a17df",
"assets/images/resources/stone.png": "6fa9cf8a4a2001272cb5ec12bf5a1f18",
"assets/images/resources/stone_64.png": "86825e5bb98aa10e41a735f30969d19c",
"assets/images/resources/wood.png": "bf320f06448ffa6cdc4de53f071010fa",
"assets/images/resources/wood_64.png": "647a47152153b6e09f3098c9a262dc5f",
"assets/images/resource_buildings/field.png": "cbb2d29dd9ba1edb844d8d02249eb678",
"assets/images/resource_buildings/field_64.png": "02078c021498c44a8969ae2183249d42",
"assets/images/resource_buildings/forest.png": "1685e1c293ed502daddca73894cd35f2",
"assets/images/resource_buildings/forest_64.png": "9c2fa1139d9ee485a79db411140bdd4b",
"assets/images/resource_buildings/iron_mine.png": "54cfea12407a18285e6ba75b8a80e1c0",
"assets/images/resource_buildings/iron_mine_64.png": "388d333664ce8e4b9df75b6b6048154d",
"assets/images/resource_buildings/mill.png": "b5dc4c1a43bcb775817be088b24f1e90",
"assets/images/resource_buildings/mill_64.png": "34c42a5be2702ebe14f7bdec4a488bc5",
"assets/images/resource_buildings/powder_cellar.png": "f58dfb56a763725f41c29633b68ccda4",
"assets/images/resource_buildings/powder_cellar_64.png": "0d61470bfc46645b99080e8086ad7fce",
"assets/images/resource_buildings/quarry.png": "94ead41ef2ffaf3ae6f942195beacf9f",
"assets/images/resource_buildings/quarry_64.png": "978af2c86e2bed91bb561874d9b7ceda",
"assets/images/resource_buildings/river.png": "37ea20282d89575c7ab65add432c0e9a",
"assets/images/resource_buildings/river_64.png": "05e79cb64e18c41933e706ad39fb69da",
"assets/images/resource_buildings/smith.png": "4cfd9e80451747900cca0245fc089514",
"assets/images/resource_buildings/smith_64.png": "bbccde643bbe713d0e3de4a459c7e3b5",
"assets/images/resource_buildings/stable.png": "43b93a7a6770acea5bb9f1294df404ec",
"assets/images/resource_buildings/stable_64.png": "f39cfaaa7b88c899fab752ebd3a3bfe0",
"assets/images/resource_buildings/trappershouse.png": "56adaf1b7751b57c7f7c78d427605b31",
"assets/images/resource_buildings/trappershouse_64.png": "fae2016f031019b84c5287a4e70ed345",
"assets/images/ui/arrow_right.png": "fd27b0b4e8ac342d73d84e08ed7f4ac8",
"assets/NOTICES": "e1dc5429031bc3a0810786fa250c248f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicons/android-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/android-icon-192x192.png": "d2aff134aba64b4d5e2491e69e5ec2fc",
"favicons/android-icon-36x36.png": "9c3d34849a162cb271c64a0efea0a124",
"favicons/android-icon-48x48.png": "8de66058eee640ac3474b09079699af8",
"favicons/android-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"favicons/android-icon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"favicons/apple-icon-114x114.png": "6ff76a9adfefe203b660de2fc1acf013",
"favicons/apple-icon-120x120.png": "e82d6cdb3558fb0818e7f04b60a6e813",
"favicons/apple-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/apple-icon-152x152.png": "dd763526d828e9210cc179f0437354b0",
"favicons/apple-icon-180x180.png": "06189f63c5127c39efd45c64fc449231",
"favicons/apple-icon-57x57.png": "54b44956eccbe39e52d587f9b4051944",
"favicons/apple-icon-60x60.png": "29835392eecaae6e3457f22f68774578",
"favicons/apple-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"favicons/apple-icon-76x76.png": "71a484b015c606ff9b3d2dbe9e17b4c0",
"favicons/apple-icon-precomposed.png": "55402c7624190362d4120113fbe4a45f",
"favicons/apple-icon.png": "55402c7624190362d4120113fbe4a45f",
"favicons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"favicons/favicon-16x16.png": "b05c3672ea88732496afc8c77b850f79",
"favicons/favicon-32x32.png": "83e952207a9e7e2f7e0f5071a1190d89",
"favicons/favicon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"favicons/favicon.ico": "f3c0fcc3b2f940b7901ab0bc68a81d89",
"favicons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"favicons/ms-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/ms-icon-150x150.png": "0bc1819b639ca908d3af6fd4671b5d01",
"favicons/ms-icon-310x310.png": "37046d23226b46ae172f53a5e86dcfd5",
"favicons/ms-icon-70x70.png": "9df62e0f9601818c9ff4e008233f6eb4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2bda3d471e94c5c1f221d54a0cbb9295",
"/": "2bda3d471e94c5c1f221d54a0cbb9295",
"main.dart.js": "149bb9c279357d2443e4a9092c80a3bb",
"manifest.json": "4a1ced060193f4539b0cebff0f8dae1a",
"version.json": "c642afdbdd8b5190e4049953d95bb893"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "53940514ee914f8e3b89a05842c3bc18",
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
"assets/images/background/parallax/cannon_foundry/cannon_foundry_1.png": "306d4ef799f7a1351da01714047d7de6",
"assets/images/background/parallax/cannon_foundry/cannon_foundry_2.png": "ab4b052dc7a1fcd3791dfff08f6e0957",
"assets/images/background/parallax/cannon_foundry/cannon_foundry_3.png": "fdc1a5b08ed8409f029601a20b428733",
"assets/images/background/parallax/charcoal_maker/charcoal_maker_1.png": "19dec071affb1038b1ac7216ea4ddb90",
"assets/images/background/parallax/charcoal_maker/charcoal_maker_2.png": "62c31aa2f89d6b686b0085815b019781",
"assets/images/background/parallax/charcoal_maker/charcoal_maker_3.png": "4d14e67a1b3307d17a4be8017757b0ae",
"assets/images/background/parallax/church/church_1.png": "928972cd516f285ddf180cc0b0b17a1f",
"assets/images/background/parallax/church/church_2.png": "8dd5e75f31dba96d8600ac4e0dc7db46",
"assets/images/background/parallax/church/church_3.png": "7cb930f8551825ffddf3d8bc91ed94c6",
"assets/images/background/parallax/clouds_1.png": "55f2992c956be453e0eebe7de06e397a",
"assets/images/background/parallax/clouds_2.png": "26704b87d421e908e27a2fa471a705a0",
"assets/images/background/parallax/clouds_3.png": "1e774c783d104307651ac3da8988b12e",
"assets/images/background/parallax/empty_ground.png": "95698c8c9d93fdc5cfbe8b1e2823fa35",
"assets/images/background/parallax/field/field_1.png": "c679efbdb9cf5de2494c09fbcae85f61",
"assets/images/background/parallax/field/field_2.png": "0bdb527cff561f51bd954181311d98e1",
"assets/images/background/parallax/field/field_3.png": "6ef672e7b44c13e9b8cf2cbd7ef16632",
"assets/images/background/parallax/forest/forest_1.png": "bfe931bde9396379b893e74a604a5747",
"assets/images/background/parallax/forest/forest_2.png": "c7f29bff18f6c91934f2f8040687c0da",
"assets/images/background/parallax/forest/forest_3.png": "f2865f94624b9571b00199b3e8883e54",
"assets/images/background/parallax/forest/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/background/parallax/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/background/parallax/iron_mine/iron_mine_1.png": "2a165fdbda34cc081e8f1cf07f88d018",
"assets/images/background/parallax/iron_mine/iron_mine_2.png": "1e8453b28f2f6f7a413236d3413f4a41",
"assets/images/background/parallax/iron_mine/iron_mine_3.png": "216f9aeeb67840a063c49f9e597895c1",
"assets/images/background/parallax/kurin/kurin_1.png": "1277ab7bc9a01ddd9995893998687ced",
"assets/images/background/parallax/kurin/kurin_2.png": "45ab54869ae23d58eae92ccf25c996c5",
"assets/images/background/parallax/kurin/kurin_3.png": "acb02692e94f7ecb26e4e42f0989234b",
"assets/images/background/parallax/landscape_forest.png": "3509d44a62cefbf682dd83b273ec2b31",
"assets/images/background/parallax/landscape_sands.png": "3708eaf5d3718acfcf0ca1ef3e2bfbe1",
"assets/images/background/parallax/landscape_sea.png": "2ad3866d4605bf5fa39c52ce249dac0d",
"assets/images/background/parallax/marketplace/marketplace_1.png": "32ab6fc0140c3e55be5f1f7e666e9593",
"assets/images/background/parallax/marketplace/marketplace_2.png": "4548d90c4c2bd30ce61c2c5d0090c4b0",
"assets/images/background/parallax/marketplace/marketplace_3.png": "6be47fff7d5a9e60f2f08c13deecd548",
"assets/images/background/parallax/mill/mill_1.png": "02202dcc6332d34d6a01aa2dd2be44c0",
"assets/images/background/parallax/mill/mill_2.png": "17559be614285e38e4884ea06352b867",
"assets/images/background/parallax/mill/mill_3.png": "269f034187c27ca121d0abae2dec66b5",
"assets/images/background/parallax/powder_cellar/powder_cellar_1.png": "ea4853e773342d63f9b15e17e4245808",
"assets/images/background/parallax/powder_cellar/powder_cellar_2.png": "d24265fc4b77d6e23cbeb68d07315c94",
"assets/images/background/parallax/powder_cellar/powder_cellar_3.png": "f9706cd52e88e656f66609ca1e8e60ec",
"assets/images/background/parallax/quarry/quarry_1.png": "6011609bad2270a28368ebe37d530606",
"assets/images/background/parallax/quarry/quarry_2.png": "9379a6060b71c90b09adc963b3d552f1",
"assets/images/background/parallax/quarry/quarry_3.png": "2af75946f39396902a536dce63332460",
"assets/images/background/parallax/river/river_1.png": "044a0540f1208a2a2842fa4764519ea4",
"assets/images/background/parallax/river/river_2.png": "17c5c30d388659452453aaf3d0d09db0",
"assets/images/background/parallax/river/river_3.png": "2928cea51899410a172f07882996c8b4",
"assets/images/background/parallax/sawmill/sawmill_1.png": "a60d2b1b178365abea51c64a5a383ea9",
"assets/images/background/parallax/sawmill/sawmill_2.png": "d6412a2652b0fbcfe74051223d8d6a64",
"assets/images/background/parallax/sawmill/sawmill_3.png": "b0b6aa198829d93976d01627a5bf32a4",
"assets/images/background/parallax/shooting_range/shooting_range_1.png": "b0daecdcdc6b79f112a4f481321b9c8a",
"assets/images/background/parallax/shooting_range/shooting_range_2.png": "4d364c299caabb844f610767814c64ac",
"assets/images/background/parallax/shooting_range/shooting_range_3.png": "adc1c8bf669bd76edb65fcd2b3462d8b",
"assets/images/background/parallax/sich.png": "4b320513d9bf369b46ee53a420d44c91",
"assets/images/background/parallax/smeltery/smeltery_1.png": "c38561dbc2c1915de8d4c7204aad1b55",
"assets/images/background/parallax/smeltery/smeltery_2.png": "94d29a76e75f8a75c9d974f605ed0176",
"assets/images/background/parallax/smeltery/smeltery_3.png": "62fed723c87fe06a5932dbbd26de12cc",
"assets/images/background/parallax/smeltery/smeltery_64.png": "ccd342219cc649e9a9ae76f258fbde4f",
"assets/images/background/parallax/smith/smith_1.png": "9e40add821cb7c1e0d670d0d8db949f4",
"assets/images/background/parallax/smith/smith_2.png": "1b38006b10c7cef0269849519cf0ac2b",
"assets/images/background/parallax/smith/smith_3.png": "a669d6dd20adb82f0cadaddb5a9ec079",
"assets/images/background/parallax/stables/stables_1.png": "5d108c4052eaf9ce6eef0264acf6ca67",
"assets/images/background/parallax/stables/stables_2.png": "b3f5db225669f24490c7574748170268",
"assets/images/background/parallax/stables/stables_3.png": "659af86b0e1129c8ef6474318316011e",
"assets/images/background/parallax/sun.png": "c54bec8d3531b72ecb608cb9f835c7f7",
"assets/images/background/parallax/tower/tower_1.png": "c7a1bac6d4998989872b3903f9d9a27a",
"assets/images/background/parallax/tower/tower_2.png": "5faa0121eb23fd3236b6140b4d1290e2",
"assets/images/background/parallax/tower/tower_3.png": "47b78290a516f26df2ee5e5b5e1c7ddd",
"assets/images/background/parallax/trappers_house/trappers_house_1.png": "ac3c8caa5ad0d65be79a4d64918da581",
"assets/images/background/parallax/trappers_house/trappers_house_2.png": "4d1a3b440e95e9a18c4e70f18664e6b0",
"assets/images/background/parallax/trappers_house/trappers_house_3.png": "ef5fecee322d4a0271bd6b56192011e5",
"assets/images/background/parallax/wall/wall_1.png": "2878d1afaf9d2daadc8942a79a533286",
"assets/images/background/parallax/wall/wall_2.png": "8ae2b9a81af1bf4827b83fbb960b89f7",
"assets/images/background/parallax/wall/wall_3.png": "543774104483bf35507b0d4bc30bc599",
"assets/images/background/parallax/watch_tower/watch_tower_1.png": "1f2049a76a429e1f4fc10df06c5bfd81",
"assets/images/background/parallax/watch_tower/watch_tower_2.png": "2999f96caaba7be0e6577828d3e0248c",
"assets/images/background/parallax/watch_tower/watch_tower_3.png": "d1f488911339e3975b52109d4e8bdd6c",
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
"assets/images/city_buildings/church/church.png": "ef4752eb22bf4ec29625e8b381a737db",
"assets/images/city_buildings/church/church_0.png": "ef4752eb22bf4ec29625e8b381a737db",
"assets/images/city_buildings/church/church_1.png": "6554072b995d551b5e6ce3b58426169a",
"assets/images/city_buildings/church/church_2.png": "a54c5cf5f705b640266e7acf37674e79",
"assets/images/city_buildings/church/church_3.png": "3c9be462390642ddf511126ca0d2c641",
"assets/images/city_buildings/church/church_64.png": "8678f1345ddbfdfc218133d473947b8e",
"assets/images/city_buildings/citizen.png": "3d9b4be46bd2b09b98954c3a5b510862",
"assets/images/city_buildings/citizen_64.png": "1509a1ea0bca710c4f6fd4aefabed05e",
"assets/images/city_buildings/defense_wall/defense_wall.png": "3481303c85041df0b84c528ea9f819f8",
"assets/images/city_buildings/defense_wall/defense_wall_0.png": "3481303c85041df0b84c528ea9f819f8",
"assets/images/city_buildings/defense_wall/defense_wall_1.png": "49fd2e116976c79bad9bea56f45ef2ca",
"assets/images/city_buildings/defense_wall/defense_wall_2.png": "7316e4f612883c060a24cd55ecca4ba2",
"assets/images/city_buildings/defense_wall/defense_wall_3.png": "ddd94cabd3aa931165ac7d6b267c29d0",
"assets/images/city_buildings/defense_wall/defense_wall_64.png": "3e7c7af2ee8e3d0b7d51bfc399771c2f",
"assets/images/city_buildings/kurin/kurin.png": "4dae9b4e7dc9238e010ca3c917cf4745",
"assets/images/city_buildings/kurin/kurin_0.png": "4dae9b4e7dc9238e010ca3c917cf4745",
"assets/images/city_buildings/kurin/kurin_1.png": "fc26e3abe4e9538fb916f9cb229c4569",
"assets/images/city_buildings/kurin/kurin_2.png": "ad77905d7c6fd2cbbd39c1bc49486f9b",
"assets/images/city_buildings/kurin/kurin_3.png": "e7f02192c18970862528f73e8f21c291",
"assets/images/city_buildings/kurin/kurin_64.png": "5b4f1607e25120c4f340ed846a23f90c",
"assets/images/city_buildings/sich.png": "3a857816ea56499556915d8d7468c5b6",
"assets/images/city_buildings/sich_0.png": "3a857816ea56499556915d8d7468c5b6",
"assets/images/city_buildings/sich_1.png": "a42f3f9c8949fe069fcc8a0b43b428de",
"assets/images/city_buildings/sich_2.png": "a02bf666c8bf3d87941f68628eb570a8",
"assets/images/city_buildings/sich_3.png": "e9fb1515a91633e1af81b12a20951298",
"assets/images/city_buildings/sich_64.png": "d51dc3901da0578e89c21063320d33eb",
"assets/images/city_buildings/tower/tower.png": "b97d1a8376d66fde9bde069068c02b12",
"assets/images/city_buildings/tower/tower_0.png": "b97d1a8376d66fde9bde069068c02b12",
"assets/images/city_buildings/tower/tower_1.png": "23febe5e75647009023eb36f9d8c9453",
"assets/images/city_buildings/tower/tower_2.png": "0d0cccac0e6486bbed428739e534c4c3",
"assets/images/city_buildings/tower/tower_3.png": "5efe556d45dc255f9a2e9331adfadec5",
"assets/images/city_buildings/tower/tower_64.png": "034561f8056e597ecbbd0535f551d1dd",
"assets/images/city_buildings/watch_tower/watch_tower.png": "816bb15b38c6a4c47f00d74905ec30b0",
"assets/images/city_buildings/watch_tower/watch_tower_0.png": "816bb15b38c6a4c47f00d74905ec30b0",
"assets/images/city_buildings/watch_tower/watch_tower_1.png": "141c454129a0ff2b892838810f7b8c19",
"assets/images/city_buildings/watch_tower/watch_tower_2.png": "c8a96bd46ef0970a2e1fdd0b547b72c4",
"assets/images/city_buildings/watch_tower/watch_tower_3.png": "b881a64967e8916401d3675da5b9c8cf",
"assets/images/city_buildings/watch_tower/watch_tower_64.png": "8700ee9b1dcdccbd7c3f732e35091a5a",
"assets/images/city_props/citizen/citizen.png": "d44248f52614a43c30139a0b2f9a58c2",
"assets/images/city_props/citizen/citizen_0.png": "d44248f52614a43c30139a0b2f9a58c2",
"assets/images/city_props/citizen/citizen_1.png": "4e7cf865852cb35042144b65a51bc35f",
"assets/images/city_props/citizen/citizen_2.png": "372faa39bc4367222f1cd65f7125ba08",
"assets/images/city_props/citizen/citizen_3.png": "d8a6c53b036be04055f06da07b105eb2",
"assets/images/city_props/citizen/citizen_64.png": "baaa149785110a7c931cac935aee7161",
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
"assets/images/resources/cannon/cannon.png": "a36fe1f20d38d4e37bb2975505d88b5d",
"assets/images/resources/cannon/cannon_0.png": "a36fe1f20d38d4e37bb2975505d88b5d",
"assets/images/resources/cannon/cannon_1.png": "57d4d425d37d3e5900a9290835d3c2b7",
"assets/images/resources/cannon/cannon_128.png": "4e3101de740cf3fc6590214ddba55a76",
"assets/images/resources/cannon/cannon_2.png": "44f3b80db5df43f1ca6d592c6dbf7616",
"assets/images/resources/cannon/cannon_3.png": "77fb17bee09160e54178cf5f835f8bd1",
"assets/images/resources/charcoal/charcoal.png": "ede3d8483c1d0c074fb07e4c54671c68",
"assets/images/resources/charcoal/charcoal_0.png": "ede3d8483c1d0c074fb07e4c54671c68",
"assets/images/resources/charcoal/charcoal_1.png": "e6570d1b8a47d8ddd86d6862c98878f9",
"assets/images/resources/charcoal/charcoal_2.png": "e5bb4acb46916e07cadb9f50efaba4f1",
"assets/images/resources/charcoal/charcoal_3.png": "0419bfa859b559b4d29b19a74c5ef0c7",
"assets/images/resources/charcoal/charcoal_64.png": "2e871997fd2204f90a665faabf0905d6",
"assets/images/resources/cossack/cossack.png": "419f2acb705feed7dfc63848ca41e7eb",
"assets/images/resources/cossack/cossack_0.png": "419f2acb705feed7dfc63848ca41e7eb",
"assets/images/resources/cossack/cossack_1.png": "8bed24498630c194dd98d5a56f50ce70",
"assets/images/resources/cossack/cossack_2.png": "33e8df2b98fab63e0b55092acf37e53f",
"assets/images/resources/cossack/cossack_3.png": "bcca34910a968e68f252a57c6c419412",
"assets/images/resources/cossack/cossack_64.png": "d8b1cfc8d33f8296f271e46c011468c2",
"assets/images/resources/firearm/firearm.png": "e94c8a8f10f5e264c003bfa7fefe9344",
"assets/images/resources/firearm/firearm_0.png": "e94c8a8f10f5e264c003bfa7fefe9344",
"assets/images/resources/firearm/firearm_1.png": "70ca2790cb41d18616cb9172c45c073c",
"assets/images/resources/firearm/firearm_2.png": "f3b269926f01d261e8b20dc4e2342d93",
"assets/images/resources/firearm/firearm_3.png": "5e6c3743ac7632c14b5dd8917f4f8496",
"assets/images/resources/firearm/firearm_64.png": "60b2f0c847e6af33fd494f36c2832ed9",
"assets/images/resources/fish/fish.png": "f31fafff216a59ea8d71b0b33e165c0f",
"assets/images/resources/fish/fish_0.png": "f31fafff216a59ea8d71b0b33e165c0f",
"assets/images/resources/fish/fish_1.png": "069d369c90ba15dd01ea3823caaf835a",
"assets/images/resources/fish/fish_2.png": "087e173bae773603c0db7a682153abe0",
"assets/images/resources/fish/fish_3.png": "9cddb447d135d2ce6bd5f87d1b1fdbd8",
"assets/images/resources/fish/fish_64.png": "0bcd0c687aeb770fdc792243201a2657",
"assets/images/resources/food/food.png": "10710cea1081e501f8d3f1ab2e185f00",
"assets/images/resources/food/food_0.png": "10710cea1081e501f8d3f1ab2e185f00",
"assets/images/resources/food/food_1.png": "8a7f72b46501d7b1746372397df1b95b",
"assets/images/resources/food/food_2.png": "e7fbb9cb5aab86843b3421cff1129080",
"assets/images/resources/food/food_3.png": "1a9a1bb66568d28d2e433ce7b83c7c6c",
"assets/images/resources/food/food_64.png": "2da83275541a93aed6d554fdb55ae4b8",
"assets/images/resources/fur/fur.png": "f72a39afc139d3d439889e7d7b018deb",
"assets/images/resources/fur/fur_0.png": "f72a39afc139d3d439889e7d7b018deb",
"assets/images/resources/fur/fur_1.png": "f72a39afc139d3d439889e7d7b018deb",
"assets/images/resources/fur/fur_2.png": "f72a39afc139d3d439889e7d7b018deb",
"assets/images/resources/fur/fur_3.png": "f72a39afc139d3d439889e7d7b018deb",
"assets/images/resources/fur/fur_64.png": "d1ff36b160d0000e0538edae4be1310a",
"assets/images/resources/grains/grains.png": "ab363ac44435557d6f90e4681caa4c2c",
"assets/images/resources/grains/grains_1.png": "924dbc3ce63b8a858cbe123b0f353578",
"assets/images/resources/grains/grains_2.png": "31f511db7bce38aea3e56b59941c4566",
"assets/images/resources/grains/grains_3.png": "6def7bcf518eca1637e7fa93cda92001",
"assets/images/resources/grains/grains_64.png": "d79e78e6b34412b897877faa6d8670ca",
"assets/images/resources/horse/horse.png": "5583451834f024c7beaecf25893d8b11",
"assets/images/resources/horse/horse_0.png": "5583451834f024c7beaecf25893d8b11",
"assets/images/resources/horse/horse_1.png": "f7829c82680a0a633b7944dd703fbf0c",
"assets/images/resources/horse/horse_2.png": "f4f60885ab2842533b5317546a971a4d",
"assets/images/resources/horse/horse_3.png": "b23365e81f0f713918b660b76e8a619c",
"assets/images/resources/horse/horse_64.png": "24d5a5777c2ad569e97b4044e567ac63",
"assets/images/resources/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/resources/iron_ore/iron_ore.png": "306c64708372fb22c759d2cfb404582b",
"assets/images/resources/iron_ore/iron_ore_0.png": "306c64708372fb22c759d2cfb404582b",
"assets/images/resources/iron_ore/iron_ore_1.png": "ecd6897f82daaad3dcd604b5543c5af8",
"assets/images/resources/iron_ore/iron_ore_2.png": "ae6707ad41ef788ed9b1ef0606a2f67d",
"assets/images/resources/iron_ore/iron_ore_3.png": "65130d34efa28b399a2e2a40589e39e2",
"assets/images/resources/iron_ore/iron_ore_64.png": "d59003a391f0598b08b29c360512ad8f",
"assets/images/resources/metal_parts/metal_parts.png": "b0ec49200b0caf1a1acd4de1c5625613",
"assets/images/resources/metal_parts/metal_parts_0.png": "b0ec49200b0caf1a1acd4de1c5625613",
"assets/images/resources/metal_parts/metal_parts_1.png": "6ffa3c6a4819d4b9734ef5da2d5d053e",
"assets/images/resources/metal_parts/metal_parts_2.png": "c9e2aa2b32ae50bae19c788e9273bc75",
"assets/images/resources/metal_parts/metal_parts_3.png": "e48565bf826f08755aba578d3c374784",
"assets/images/resources/metal_parts/metal_parts_64.png": "6a16ad749b6401500d320c45627979a2",
"assets/images/resources/money/money.png": "24a5828f29f398c0f1a75b3e747abb8a",
"assets/images/resources/money/money_0.png": "24a5828f29f398c0f1a75b3e747abb8a",
"assets/images/resources/money/money_1.png": "23b0fe4c746b3a678045e6fb3004b946",
"assets/images/resources/money/money_2.png": "baf07f23a1a9805748f74a6ac022cc61",
"assets/images/resources/money/money_3.png": "12dd3979436f8d6fad04d2897d5068c4",
"assets/images/resources/money/money_64.png": "d8e729942b8b7c8ae70b48e5640422b1",
"assets/images/resources/planks/planks.png": "a2d86411933e97c94f508d5846a32982",
"assets/images/resources/planks/planks_64.png": "dc469825b54a4385a064702e9e74db5d",
"assets/images/resources/powder/powder.png": "ca37d23f2d5033c29c3573ea85c9b876",
"assets/images/resources/powder/powder_0.png": "ca37d23f2d5033c29c3573ea85c9b876",
"assets/images/resources/powder/powder_1.png": "ca37d23f2d5033c29c3573ea85c9b876",
"assets/images/resources/powder/powder_2.png": "ca37d23f2d5033c29c3573ea85c9b876",
"assets/images/resources/powder/powder_3.png": "ca37d23f2d5033c29c3573ea85c9b876",
"assets/images/resources/powder/powder_64.png": "61a792be7d53d68713013bdcfb8bf729",
"assets/images/resources/stone/stone.png": "2b57abe985e391e021a8e48851545bdd",
"assets/images/resources/stone/stone_0.png": "2b57abe985e391e021a8e48851545bdd",
"assets/images/resources/stone/stone_1.png": "cfb5b38961423b8beaad68c28a7cbd5b",
"assets/images/resources/stone/stone_2.png": "68e619bdd75e6a51de34a8be6a668d93",
"assets/images/resources/stone/stone_3.png": "c934a00da5347dbea84426af00ff5393",
"assets/images/resources/stone/stone_64.png": "f7b69dae61014ad4ffab38d9f5dff1ee",
"assets/images/resources/wood/wood.png": "41b7fc61feb9d337069f28944e870957",
"assets/images/resources/wood/wood_0.png": "41b7fc61feb9d337069f28944e870957",
"assets/images/resources/wood/wood_1.png": "b6b9274f260f8b8ec23be47b80f42a01",
"assets/images/resources/wood/wood_2.png": "f963b36fdfd5b09f270cae8ee64a87dd",
"assets/images/resources/wood/wood_3.png": "4769fe3b7d2b88fee1642d3ff8883ca4",
"assets/images/resources/wood/wood_64.png": "dbe8d559a304d9371aa4de482f57034a",
"assets/images/resource_buildings/cannon_foundry/cannon_foundry.png": "0c39b2b4c7d17eecb786210b6b93e87c",
"assets/images/resource_buildings/cannon_foundry/cannon_foundry_0.png": "0c39b2b4c7d17eecb786210b6b93e87c",
"assets/images/resource_buildings/cannon_foundry/cannon_foundry_1.png": "1d7c41c6af1a7afd24c673ce993a3be6",
"assets/images/resource_buildings/cannon_foundry/cannon_foundry_2.png": "4dfe934115cc260613d496b5aef0b5ef",
"assets/images/resource_buildings/cannon_foundry/cannon_foundry_3.png": "42de4e3419daec1c6d47550bfd9c2b7e",
"assets/images/resource_buildings/cannon_foundry/cannon_foundry_64.png": "a7d12c30137a95a02d11ed8e1ba20660",
"assets/images/resource_buildings/charcoal_maker/1/charcoal_maker.png": "badd33e4c260d424ee2b1558ff026782",
"assets/images/resource_buildings/charcoal_maker/1/charcoal_maker_0.png": "badd33e4c260d424ee2b1558ff026782",
"assets/images/resource_buildings/charcoal_maker/1/charcoal_maker_1.png": "c3272a57afec636b28a28ce44358467e",
"assets/images/resource_buildings/charcoal_maker/1/charcoal_maker_2.png": "e40b7a0d58905181b0709f7c4dc7481a",
"assets/images/resource_buildings/charcoal_maker/1/charcoal_maker_3.png": "d3e01abedd6e3b023b122cf8b0db6fce",
"assets/images/resource_buildings/charcoal_maker/2/charcoal_maker.png": "8352bf6be3af493b59eefff7fc00ee92",
"assets/images/resource_buildings/charcoal_maker/2/charcoal_maker_0.png": "8352bf6be3af493b59eefff7fc00ee92",
"assets/images/resource_buildings/charcoal_maker/2/charcoal_maker_1.png": "974daa062e81505d2d1e9cc18a2f1ee0",
"assets/images/resource_buildings/charcoal_maker/2/charcoal_maker_2.png": "53a2fe2bf901ace362c428cb132a4030",
"assets/images/resource_buildings/charcoal_maker/2/charcoal_maker_3.png": "2438643032c5526f6c99884c5679d666",
"assets/images/resource_buildings/charcoal_maker/3/charcoal_maker.png": "2e44699d8f3590a0fcf8d1902215e0f9",
"assets/images/resource_buildings/charcoal_maker/3/charcoal_maker_0.png": "2e44699d8f3590a0fcf8d1902215e0f9",
"assets/images/resource_buildings/charcoal_maker/3/charcoal_maker_1.png": "27bce047bc1afd8cfec018a7d3808c0e",
"assets/images/resource_buildings/charcoal_maker/3/charcoal_maker_2.png": "dcbe6bec265ffa1ec9adeb2336d2b9b2",
"assets/images/resource_buildings/charcoal_maker/3/charcoal_maker_3.png": "0e87a428ccd7b531d39b386c996cdaf0",
"assets/images/resource_buildings/field/field.png": "28138b3c855df88bf07fd70de1bd55da",
"assets/images/resource_buildings/field/field_0.png": "28138b3c855df88bf07fd70de1bd55da",
"assets/images/resource_buildings/field/field_1.png": "2bc6308f6f40ca2b5f3f2905a9655259",
"assets/images/resource_buildings/field/field_2.png": "f0acd2460675812fee9fa9e9eb7fc07d",
"assets/images/resource_buildings/field/field_3.png": "f4d9363849e9d2af710fcb177e35e0e6",
"assets/images/resource_buildings/field/field_64.png": "6f3936cb4f4cc6cf390b012abb819205",
"assets/images/resource_buildings/forest/forest.png": "e557f2f57ab8f92ff0a55ba7a8e67a6e",
"assets/images/resource_buildings/forest/forest_0.png": "e557f2f57ab8f92ff0a55ba7a8e67a6e",
"assets/images/resource_buildings/forest/forest_1.png": "321f057a6e9abdf1c75314b011e4b2a3",
"assets/images/resource_buildings/forest/forest_2.png": "209463551d710721ae65b044fbb716eb",
"assets/images/resource_buildings/forest/forest_3.png": "65bd45559d1f5f0680b3d024e827ced7",
"assets/images/resource_buildings/forest/forest_64.png": "9c2fa1139d9ee485a79db411140bdd4b",
"assets/images/resource_buildings/imgui.ini": "225ba9004e939001679ded34841a0d7a",
"assets/images/resource_buildings/iron_mine/iron_mine.png": "cd6eb06a860e52a53c8f49c0e8ae1b74",
"assets/images/resource_buildings/iron_mine/iron_mine_0.png": "cd6eb06a860e52a53c8f49c0e8ae1b74",
"assets/images/resource_buildings/iron_mine/iron_mine_1.png": "59f18f11f9c6a9e9413e7e1651e59d4c",
"assets/images/resource_buildings/iron_mine/iron_mine_2.png": "16e6dd975a74d3678dda246be7e3d93d",
"assets/images/resource_buildings/iron_mine/iron_mine_3.png": "5050f16aaf0c1d69e4311ee4a8d943a4",
"assets/images/resource_buildings/iron_mine/iron_mine_64.png": "388d333664ce8e4b9df75b6b6048154d",
"assets/images/resource_buildings/marketplace/marketplace.png": "9dc66fcf9559bb2b3fac4abb32c4e688",
"assets/images/resource_buildings/marketplace/marketplace_0.png": "9dc66fcf9559bb2b3fac4abb32c4e688",
"assets/images/resource_buildings/marketplace/marketplace_1.png": "bfcdaff17f74005668a1c91b87b1abad",
"assets/images/resource_buildings/marketplace/marketplace_2.png": "656f0cac4b8f2bff1ca56c543f84404e",
"assets/images/resource_buildings/marketplace/marketplace_3.png": "d99084967b950612c6f65f8bcd1b5861",
"assets/images/resource_buildings/marketplace/marketplace_64.png": "168e329a7557067d4d6479c752a255e4",
"assets/images/resource_buildings/mill/mill.png": "cc3a30b6554dfb879dc68af6c41754c6",
"assets/images/resource_buildings/mill/mill_0.png": "cc3a30b6554dfb879dc68af6c41754c6",
"assets/images/resource_buildings/mill/mill_1.png": "de20d48e4ad6780e8fdde9c389a1cc0a",
"assets/images/resource_buildings/mill/mill_2.png": "5b88a047f45d038548593f38a8467fe3",
"assets/images/resource_buildings/mill/mill_3.png": "e517b685b5a385b4c17c7cff6b43fb36",
"assets/images/resource_buildings/mill/mill_64.png": "34c42a5be2702ebe14f7bdec4a488bc5",
"assets/images/resource_buildings/powder_cellar/powder_cellar.png": "1de3aa9371ddd1ffae468fadc0de05e5",
"assets/images/resource_buildings/powder_cellar/powder_cellar_0.png": "1de3aa9371ddd1ffae468fadc0de05e5",
"assets/images/resource_buildings/powder_cellar/powder_cellar_1.png": "e655eb6bc42b486a1311f5ce2db83734",
"assets/images/resource_buildings/powder_cellar/powder_cellar_2.png": "733d0588847676877c832cfad0840bca",
"assets/images/resource_buildings/powder_cellar/powder_cellar_3.png": "f13056518165f9fc2b5062040dfbfc7f",
"assets/images/resource_buildings/powder_cellar/powder_cellar_64.png": "0d61470bfc46645b99080e8086ad7fce",
"assets/images/resource_buildings/quarry/quarry.png": "d6488762458a04bd39688b8a2ca6f12b",
"assets/images/resource_buildings/quarry/quarry_0.png": "d6488762458a04bd39688b8a2ca6f12b",
"assets/images/resource_buildings/quarry/quarry_1.png": "5db077f92e0877f3e3078419d80ed118",
"assets/images/resource_buildings/quarry/quarry_2.png": "1df4ff55f6f68676e20c46fcf41c7191",
"assets/images/resource_buildings/quarry/quarry_3.png": "2d138f36219c5a2e5605c362618de3f5",
"assets/images/resource_buildings/quarry/quarry_64.png": "978af2c86e2bed91bb561874d9b7ceda",
"assets/images/resource_buildings/river/river.png": "d656edb9bece3c77b42d058744fbd676",
"assets/images/resource_buildings/river/river_0.png": "d656edb9bece3c77b42d058744fbd676",
"assets/images/resource_buildings/river/river_1.png": "a99017a3b75a9eb2c3badaa958b1bf3e",
"assets/images/resource_buildings/river/river_2.png": "7526d5b00f81570a9e796ee7601fcaea",
"assets/images/resource_buildings/river/river_3.png": "773bdb5aa9aebe80ebf83227f39a5666",
"assets/images/resource_buildings/river/river_64.png": "05e79cb64e18c41933e706ad39fb69da",
"assets/images/resource_buildings/sawmill/1/sawmill.png": "e90158bd8cc03682ab34d1a28d586300",
"assets/images/resource_buildings/sawmill/1/sawmill_0.png": "e90158bd8cc03682ab34d1a28d586300",
"assets/images/resource_buildings/sawmill/1/sawmill_1.png": "7acd143277d0669fb2e7f97684f6707b",
"assets/images/resource_buildings/sawmill/1/sawmill_2.png": "b85b306754eac7fc01873da5d61da0ce",
"assets/images/resource_buildings/sawmill/1/sawmill_3.png": "d7d8b4b79086b0af5973b08836db4e6b",
"assets/images/resource_buildings/sawmill/2/sawmill.png": "ee574e7c4eee1aace115a6f841700e67",
"assets/images/resource_buildings/sawmill/2/sawmill_0.png": "ee574e7c4eee1aace115a6f841700e67",
"assets/images/resource_buildings/sawmill/2/sawmill_1.png": "c73e2e984796b22c0cf537b14269537f",
"assets/images/resource_buildings/sawmill/2/sawmill_2.png": "445724abe696f3feccfa4f642e5dcac5",
"assets/images/resource_buildings/sawmill/2/sawmill_3.png": "c5208b21fb74dc485d29ea86b2be08bb",
"assets/images/resource_buildings/sawmill/3/sawmill.png": "3cd173c8f17f1c17f7904c5ce4dee2aa",
"assets/images/resource_buildings/sawmill/3/sawmill_0.png": "3cd173c8f17f1c17f7904c5ce4dee2aa",
"assets/images/resource_buildings/sawmill/3/sawmill_1.png": "971d6afaf87c1dac68f87f6d9bf95bf8",
"assets/images/resource_buildings/sawmill/3/sawmill_2.png": "c7d93057c92689125f26da1df935c83e",
"assets/images/resource_buildings/sawmill/3/sawmill_3.png": "8f36bef46170c686be143babdd6fa7b8",
"assets/images/resource_buildings/shooting_range/shooting_range.png": "d196075c06f262a6df15d79e736b8401",
"assets/images/resource_buildings/shooting_range/shooting_range_0.png": "d196075c06f262a6df15d79e736b8401",
"assets/images/resource_buildings/shooting_range/shooting_range_1.png": "26fa11bc2592c6e5bf6d5cef531a3e48",
"assets/images/resource_buildings/shooting_range/shooting_range_2.png": "afbe50affb48f3a2affed14b95f63154",
"assets/images/resource_buildings/shooting_range/shooting_range_3.png": "3b9633dd88fdc1b2131ad9768326b037",
"assets/images/resource_buildings/shooting_range/shooting_range_64.png": "5695a4bae209606af621e7bb880a3359",
"assets/images/resource_buildings/smeltery/1/smeltery.png": "e0410cf4ae6141b3799d9f1813f9fdf6",
"assets/images/resource_buildings/smeltery/1/smeltery_0.png": "e0410cf4ae6141b3799d9f1813f9fdf6",
"assets/images/resource_buildings/smeltery/1/smeltery_1.png": "74b42b49635478d12f78b3b8cd75dd9c",
"assets/images/resource_buildings/smeltery/1/smeltery_2.png": "b59a9b5ffc22fad7f1897889237418d1",
"assets/images/resource_buildings/smeltery/1/smeltery_3.png": "5cdbd94b6317e520f97f2b2f6502638a",
"assets/images/resource_buildings/smeltery/2/smeltery.png": "333115f5e93299a7fa773e0a12b3bf88",
"assets/images/resource_buildings/smeltery/2/smeltery_0.png": "333115f5e93299a7fa773e0a12b3bf88",
"assets/images/resource_buildings/smeltery/2/smeltery_1.png": "f51b06c54acfc5b7b13c2f38fe241754",
"assets/images/resource_buildings/smeltery/2/smeltery_2.png": "fbfd3a6ad33e085b53bf5867fbf61d10",
"assets/images/resource_buildings/smeltery/2/smeltery_3.png": "033f14178fbb5ad21c0ed5a17f8e99c8",
"assets/images/resource_buildings/smeltery/3/smeltery.png": "60064e5ea3d9f236106b58281b6d66eb",
"assets/images/resource_buildings/smeltery/3/smeltery_0.png": "60064e5ea3d9f236106b58281b6d66eb",
"assets/images/resource_buildings/smeltery/3/smeltery_1.png": "06c6644a9ed1ca764f3543dcd5c63135",
"assets/images/resource_buildings/smeltery/3/smeltery_2.png": "d495d3ebe3e9cbe456d0214acef3697a",
"assets/images/resource_buildings/smeltery/3/smeltery_3.png": "3935a3509d1f815be48138357fabb062",
"assets/images/resource_buildings/smith/smith.png": "cfd2c929a3abac6de50557a619f66a00",
"assets/images/resource_buildings/smith/smith_0.png": "cfd2c929a3abac6de50557a619f66a00",
"assets/images/resource_buildings/smith/smith_1.png": "597b544a69af66bfc799229ba6fb1444",
"assets/images/resource_buildings/smith/smith_2.png": "239626cef48df627ad1961956698df43",
"assets/images/resource_buildings/smith/smith_3.png": "cc57e4447202a919a002338f9ba90c50",
"assets/images/resource_buildings/smith/smith_64.png": "bbccde643bbe713d0e3de4a459c7e3b5",
"assets/images/resource_buildings/stables/stables.png": "6925500db327809cb9f0ae95993d3a9f",
"assets/images/resource_buildings/stables/stables_0.png": "6925500db327809cb9f0ae95993d3a9f",
"assets/images/resource_buildings/stables/stables_1.png": "c2d59523f150e9a399eecb4148c10163",
"assets/images/resource_buildings/stables/stables_2.png": "c8112a087b8a66b44dab4774fd1c861f",
"assets/images/resource_buildings/stables/stables_3.png": "dd138c80c54da4b085686e77ca81c367",
"assets/images/resource_buildings/stables/stables_64.png": "f39cfaaa7b88c899fab752ebd3a3bfe0",
"assets/images/resource_buildings/trappers_house/trappershouse_64.png": "fae2016f031019b84c5287a4e70ed345",
"assets/images/resource_buildings/trappers_house/trappers_house.png": "3e9aec043f7fd013bb1642e15e68028c",
"assets/images/resource_buildings/trappers_house/trappers_house_0.png": "3e9aec043f7fd013bb1642e15e68028c",
"assets/images/resource_buildings/trappers_house/trappers_house_1.png": "ee6c0e1fcaa4f4a7a6cbe720b212907f",
"assets/images/resource_buildings/trappers_house/trappers_house_2.png": "03768f3ee9f78ab8e6aca6854d028ab8",
"assets/images/resource_buildings/trappers_house/trappers_house_3.png": "dd65a18af5200b1fd6c11d6b01a4a894",
"assets/images/ui/arrow_right.png": "fd27b0b4e8ac342d73d84e08ed7f4ac8",
"assets/NOTICES": "b7784daf0a80a46bf65ae0438e1a1970",
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
"main.dart.js": "799799cdd8edf5784417f4987d81a42d",
"manifest.json": "4a1ced060193f4539b0cebff0f8dae1a",
"version.json": "5f79c88f11582739c4c154346dbe6e01"
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

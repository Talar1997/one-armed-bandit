var allCases = [
    ["LombardCase", "Skrzynia operacji lombard" , "https://i.imgur.com/YKqqZJt.png"],
    ["JunkyardCase", "Skrzynia złomiarza", "https://i.imgur.com/QzPCR8Y.png"],
    ["JubilerCase", "Skrzynia Jubilera", "https://i.imgur.com/JGBOthU.png"],
    ["MoneyCase", "Skrzynia z pieniędzmi", "https://i.imgur.com/6PvxaCp.png"],
    ["WorkshopCase", "Skrzynia op. warsztat", "https://i.imgur.com/CQgu1IM.png"],
    ["PremiumCase", "Skrzynia Premium", "https://i.imgur.com/rdPuR2i.png"],
];

//Nazwa, typ, miniaturka, zdjecie
var LombardCase = [
    ["✪ Bandito ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/568.jpg", "https://i.imgur.com/fwMNHX6.png"],
    ["Bullet", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/541.jpg", "https://i.imgur.com/oHx73bO.png"],
    ["Comet", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/480.jpg", "https://i.imgur.com/Wo0ICbx.png"],
    ["Sultan", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/560.jpg", "https://i.imgur.com/8m9n7ex.png"],
    ["Jester", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/559.jpg", "https://i.imgur.com/MbWwCfE.png"],
    ["Flash", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/565.jpg", "https://i.imgur.com/3qXA5Zs.png"],
    ["Feltzer", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/533.jpg", "https://i.imgur.com/aKfc4i1.png"],
    ["Windsor", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/555.jpg", "https://i.imgur.com/H05wu2i.png"],
    ["Blista", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/496.jpg", "https://i.imgur.com/mbJ0DEg.png"],
    ["Tampa", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/549.jpg", "https://i.imgur.com/NNOiDIc.png"],
    ["Oceanic", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/467.jpg", "https://i.imgur.com/123fcqH.png"],
    ["Clover", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/542.jpg", "https://i.imgur.com/ga2c3fl.png"],
    ["Greenwood", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/492.jpg", "https://i.imgur.com/cnOXDef.png"],
    ["Regina", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/479.jpg", "https://i.imgur.com/BTXjesq.png"],
    ["Moonbean", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/418.jpg", "https://i.imgur.com/iNP7ADY.png"],
    ["Hermes", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/474.jpg", "https://i.imgur.com/buwtM6v.png"],
];

//brakuje obrazków
var MoneyCase = [
    ["✪ $50.000 ✪", "legendary", "https://i.imgur.com/W2sjZzC.png", ""],
    ["$35.500", "mythical", "https://i.imgur.com/q5OGU9T.png", ""],
    ["$32.000", "mythical", "https://i.imgur.com/sKSUz6R.png", ""],
    ["$25.500", "unreal", "https://i.imgur.com/H1wbZH8.png", ""],
    ["$24.000", "unreal", "https://i.imgur.com/XObJ3He.png", ""],
    ["$23.500", "unreal", "https://i.imgur.com/LIdxOhM.png", ""],
    ["$15.000", "rare", "https://i.imgur.com/pMtOv6B.png", ""],
    ["$14.500", "rare", "https://i.imgur.com/APgdI4N.png", ""],
    ["$13.000", "rare", "https://i.imgur.com/SPrHofu.png", ""],
    ["$12.500", "rare", "https://i.imgur.com/3PPcxO8.png", ""],
    ["$6.000", "common", "https://i.imgur.com/v1L3CfZ.png", ""],
    ["$5.500", "common", "https://i.imgur.com/eoJ79Zq.png", ""],
    ["$5.000", "common", "https://i.imgur.com/TciHicN.png", ""],
    ["$4.500", "common", "https://i.imgur.com/9hEzbRe.png", ""],
    ["$4.000", "common", "https://i.imgur.com/Jqce2pC.png", ""],
    ["$3.500", "common", "https://i.imgur.com/23Nd0Xh.png", ""],
    ["$3.000", "common", "https://i.imgur.com/otrHSaW.png", ""],
    ["$2.500", "common", "https://i.imgur.com/h7yqzeI.png", ""],
    ["$2.000", "common", "https://i.imgur.com/4P6exjN.png", ""],
];


//Brakuje powiekszonych obrazkow
var JunkyardCase = [
    ["✪ Hot-Knife ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/434.jpg", "https://i.gyazo.com/b08628870a1c0a5e80cc885f0a6b52bb.png"],
    ["Hustler", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/545.jpg", "https://i.gyazo.com/372612f14d585b1a7c538d25d6ba1e1a.png"],
    ["Buffalo", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/402.jpg", "https://i.gyazo.com/d4bfcd38ce1fd80e03671f6121b8f992.png"],
    ["Patriot", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/470.jpg", "https://i.gyazo.com/b51f460afe9953b3d81efdc01163637f.png"],
    ["Mesa", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/500.jpg", "https://i.gyazo.com/63619e581e5650d8935f645ca57abc85.png"],
    ["BF-Injection", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/424.jpg", "https://i.gyazo.com/0e749319ee28bc794ef2b5713b793d28.png"],
    ["Broadway", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/575.jpg", "https://i.gyazo.com/12287bb51158ec53fd46b12b37f27e58.png"],
    ["Admiral", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/445.jpg", "https://i.gyazo.com/e88d2a27b20884bb0cc823632c2a9fad.png"],
    ["Phoenix", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/603.jpg", "https://i.gyazo.com/55adfc45561f3647319188d3a3292ea2.png"],
    ["Sabre", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/475.jpg", "https://i.gyazo.com/f4becf977c61b2174ed09e381ec50b43.png"],
    ["Sadler", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/543.jpg", "https://i.gyazo.com/8aef3a2c61a1ca254d722c1fc34547f5.png"],
    ["Intruder", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/546.jpg", "https://i.gyazo.com/cad6fa55c9cf8ad86d597d780488defa.png"],
    ["Stafford", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/580.jpg", "https://i.gyazo.com/d09788fb3aede42dd50961eb7373ce60.png"],
    ["Perrenial", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/404.jpg", "https://i.gyazo.com/1b7a89c384dd4cb2cd6a073764a4b9e4.png"],
    ["Solair", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/458.jpg", "https://i.gyazo.com/01c5dafedba4078b271451910914fc5d.png"],
    ["Camper", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/483.jpg", "https://i.gyazo.com/e1cd32f2f242714517a5f0c116b7d112.png"],

];

//Brakuje powiekszonych obrazków
var PremiumCase = [
    ["✪ Paintjob ✪", "legendary", "https://i.imgur.com/FOzpPJC.png", ""],
    ["50.000 cP", "mythical", "https://i.imgur.com/SMHefzM.png", ""],
    ["Grupa rodziny", "mythical", "https://i.imgur.com/qj2Mkje.png", ""],
    ["Konto premium 90 dni", "unreal", "https://i.imgur.com/SMHefzM.png", ""],
    ["Konto premium 60 dni", "unreal", "https://i.imgur.com/SMHefzM.png", ""],
    ["30.000 cP", "unreal", "https://i.imgur.com/zV6iO8r.png", ""],
    ["Konto premium 30 dni", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["12.000 cP", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["Konto premium 21 dni", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["11.000 cP", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["5.000 cP", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["4.500 cP", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["4.000 cP", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["Własna rejestracja", "common", "https://i.imgur.com/gnPyMkf.png", ""],
    ["Blokada postaci", "common", "https://i.imgur.com/qz9rrRm.png", ""],
    ["Konto premium 3 dni", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["Konto premium 1 dni", "common", "https://i.imgur.com/4aYezGj.png", ""],
];


var JubilerCase = [
    ["✪ Maverick ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/487.jpg", "https://i.gyazo.com/134bd8ad00a66816d0a3381ef09514f6.png"],
    ["NRG-500", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/522.jpg", "https://i.gyazo.com/7ca780de672846a9b84a6765c349bc6c.png"],
    ["Super GT", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/506.jpg", "https://i.gyazo.com/dac7d2e4cfaf9882e08e9ff1a7be2129.png"],
    ["Washinton", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/421.jpg", "https://i.gyazo.com/bf4d30ad77ad75cf34438cd28d3d65dd.png"],
    ["Stretch", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/409.jpg", "https://i.gyazo.com/d72518e2ebe6d8cc6c3212e2a260323d.png"],
    ["Slamvan", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/535.jpg", "https://i.gyazo.com/03d185fcd2ef9187d9fc08cc1435969c.png"],
    ["Sentinel", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/516.jpg", "https://i.gyazo.com/d58a224107df3fde6f45d04c087fa9e7.png"],
    ["Premier", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/426.jpg", "https://i.gyazo.com/7df36a9559fd4309c28ba5245df4a984.png"],
    ["Stratum", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/561.jpg", "https://i.gyazo.com/2d95be63549497fd932baf19456e1cdd.png"],
    ["Dinghy", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/473.jpg", "https://i.gyazo.com/df76324486167ff6a90bf222493d28a1.png"],
    ["Journey", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/508.jpg", "https://i.gyazo.com/533611b37c02b52004962be4b9f1ecf1.png"],
    ["Bobcat", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/422.jpg", "https://i.gyazo.com/e7f464aabb92f955f484f760c2fd6a64.png"],
    ["Picador", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/600.jpg", "https://i.gyazo.com/300d1d9cdb41db989b0642dfeb4f9b0f.png"],
    ["Walton", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/478.jpg", "https://i.gyazo.com/a9c73adffde0b77183aaa63d485dbe79.png"],
    ["Previon", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/436.jpg", "https://i.gyazo.com/a74f3f93974672c85b680f55c55818d4.png"],
    ["Glendale", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/466.jpg", "https://i.gyazo.com/de13b7380d7a1215277ae62549616961.png"],
    ["Fortune", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/526.jpg", "https://i.gyazo.com/e0a7ae9651e193b97d8dc236f9dc9ab1.png"],
    ["Emperor", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/585.jpg", "https://i.gyazo.com/d9e66813807e2f69beb3147b92c28688.png"],
];

var WorkshopCase = [
    ["✪ Sandking ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/495.jpg", "https://i.gyazo.com/6ecf8ea5b408356fad9c9ae4218992cd.png"],
    ["Cheetah", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/415.jpg", "https://i.gyazo.com/c0e60e5953baa8a8ac53dc3eb29f43d2.png"],
    ["Turismo", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/451.jpg", "https://i.gyazo.com/81d76e85413fdfe2d68d7ffb4c08f66e.png"],
    ["Squallo", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/452.jpg", "https://i.gyazo.com/9d1e20d1213c5d9fbb975a31bff95d61.png"],
    ["Alpha", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/602.jpg", "https://i.gyazo.com/8c41f1c261acd29b80152b6c412ad118.png"],
    ["Huntley", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/579.jpg", "https://i.gyazo.com/6f8cec74f873c32fb3f6bd51fec82ac7.png"],
    ["BF-Injection", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/424.jpg", "https://i.gyazo.com/0e749319ee28bc794ef2b5713b793d28.png"],
    ["Stratum", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/561.jpg", "https://i.gyazo.com/67d34af1ca363ccc78517ac30c05e39d.png"],
    ["Club", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/589.jpg", "https://i.gyazo.com/627f73f66f506f56f7d50ec0a9537312.png"],
    ["Picador", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/600.jpg", "https://i.gyazo.com/300d1d9cdb41db989b0642dfeb4f9b0f.png"],
    ["Hermes", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/474.jpg", "https://i.imgur.com/buwtM6v.png"],
    ["Regina", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/479.jpg", "https://i.imgur.com/BTXjesq.png"],
    ["Sunrise", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/550.jpg", "https://i.gyazo.com/16618b6b13dbca55fac8124679620292.png"],
    ["Manana", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/410.jpg", "https://i.gyazo.com/f5358793f52d1f47cd9eaf9674624c1a.png"],
    ["Rumpo", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/440.jpg", "https://i.gyazo.com/c63377d238f6f01443a9ff995f59f4ad.png"],
    ["Walton", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/478.jpg", "https://i.gyazo.com/a9c73adffde0b77183aaa63d485dbe79.png"],
];

var BankCase = [
    ["✪✪", "", "", ""],
];

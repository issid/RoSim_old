/*Index**********

* Basic Settings
	Declarations

* Setting up Settings
prestart()		: Link presence to top
start(n)		: Basic setting processing
streset()		: Status Reset
transreset()		: Advance Class Prompt Window
advreset()		: Advance Class Switch
supportreset()		: Support Status Reset
eqreset()		: Equipment Reset
bardanreset()		: Bard~Dancer Reset

* Basic Status-Related Functions
basestatuscalc(m, n, c)	: Basic status change processing
readbonus()		: Status bonus reading
blvcalc()		: BaseLv and status point calculation
statuscalc()		: Additional status calculation and display

* Supportive status-related functions
etcstatuslisting()	: Self supportive skill listing
etcstatuscalc(l, m, n)	: Additional supportive skill proccessing
etcstatuscheck(l)	: Management of competition assistance status check
rss()			: Competiting support status check
kls()			: Supportive status result deletion

*****************/


// * Basic settings
layername = new Array('HeadULayer', 'HeadMLayer', 'HeadLLayer', 'ArmorLayer', 'RightHandLayer', 'LeftHandLayer', 'RobeLayer', 'ShoesLayer', 'Accessory1Layer', 'Accessory2Layer', 'ArrowLayer');
selectname = new Array('HeadUSelect', 'HeadMSelect', 'HeadLSelect', 'ArmorSelect', 'RightHandSelect', 'LeftHandSelect', 'RobeSelect', 'ShoesSelect', 'Accessory1Select', 'Accessory2Select', 'ArrowSelect');
mname = new Array('Str', 'Agi', 'Vit', 'Int', 'Dex', 'Luk');
jobname = new Array();
jobname['female'] = new Array(	'Novice', 'Swordman', 'Magician', 'Archer', 'Acolyte', 'Merchant', 'Thief','Taekwon Girl', 'Ninja', 'Gunslinger', '', '', '', '',
				'Knight', 'Wizard', 'Hunter', 'Priest', 'Blacksmith', 'Assassin', 'Taekwon Master', 'Ninja', 'Gunslinger', '', '', '', '',
				'Crusader', 'Sage', 'Dancer', 'Monk', 'Alchemist', 'Rogue', 'Soul Linker', 'Ninja', 'Gunslinger', '', '', '', '',
				'Lord Knight', 'High Wizard', 'Sniper', 'High Priest', 'Mastersmith', 'Assassin Cross', 'Taekwon', 'Ninja', 'Gunslinger', '', '', '', '',
				'Paladin', 'Scholar', 'Gypsy', 'Champion', 'Biochemist', 'Stalker', 'Taekwon', 'Ninja', 'Gunslinger', '', '', '', '', 'Super Novice', '','Monster Skills', '','');
				
jobname['male'] = new Array(	'Novice', 'Swordman', 'Magician', 'Archer', 'Acolyte', 'Merchant', 'Thief','Taekwon Boy', 'Ninja', 'Gunslinger', '', '', '', '',
				'Knight', 'Wizard', 'Hunter', 'Priest', 'Blacksmith', 'Assassin', 'Taekwon Master', 'Ninja', 'Gunslinger', '', '', '', '',
				'Crusader', 'Sage', 'Bard', 'Monk', 'Alchemist', 'Rogue', 'Soul Linker', 'Ninja', 'Gunslinger', '', '', '', '',
				'Lord Knight', 'High Wizard', 'Sniper', 'High Priest', 'Mastersmith', 'Assassin Cross', 'Taekwon', 'Ninja', 'Gunslinger', '', '', '', '',
				'Paladin', 'Scholar', 'Minstrel', 'Champion', 'Biochemist', 'Stalker', 'Taekwon', 'Ninja', 'Gunslinger', '', '', '', '', 'Super Novice', '','Monster Skills', '','');
propname = new Array('Neutral', 'Water', 'Earth', 'Fire', 'Wind', 'Poison', 'Holy', 'Shadow', 'Ghost', 'Undead', 'Formless', 'Undead', 'Brute', 'Plant', 'Insect', 'Fish',  'Demon', 'Demi-Human', 'Angel', 'Dragon', 'Small', 'Medium', 'Large');
stname = new Array('Bleed', 'Coma', 'Poison', 'Curse', 'Stun', 'Blind', 'Confusion', 'Sleep', 'Silence', 'Freeze', 'Stone Curse');
classname = new Array('Normal', 'Boss', 'Guardian', 'Any', 'Poring', 'Goblin', 'Orc', 'Kobold', 'Crustation', 'Ant', 'Golem', 'Fish', 'Angel');
ename = new Array('HeadU', 'HeadM', 'HeadL', 'Armor', 'RightHand', 'LeftHand', 'Robe', 'Shoes', 'Accessory1', 'Accessory2');
equiplabel = new Array('Head Gear', 'Head Gear', 'Head Gear', 'Armor', 'Weapon', 'Shield', 'Robe', 'Shoes', 'Accessory', 'Accessory');
itemdesc = new Array();
combodesc = new Array();
nstps = new Array(6);
eq = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1750);
plus = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
slot = new Array(10);
for (i = 0; i <= 9; i++) slot[i] = new Array(10, 10, 10, 10);
bonusdata = new Array(400);
condbonusdata = false;
asbonusdata = new Array(130);
slotnum = new Array(42, 40, 44, 43, 45, 39, 39, 39, 39, 39, 39, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41);
cardsname = new Array('', 'Double', 'Triple', 'Quadruple');
starsname = new Array('Very Strong ', 'Very Very Strong ', 'Very Very Very Strong ');
propstonename = new Array('Fire ', 'Ice ', 'Wind ', 'Earth ');
sexname = new Array('male', 'female');
eqpsex = new Array('Both', 'Male', 'Female');
pluslv = new Array(0, 2, 3, 5, 7);
plusbonus = new Array(0, 3, 5, 8, 14);
wealvdex = new Array(1,1,1.2,1.4,1.6);
colormanage = new Array('', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8');
colorname = new Array('Original', 'Yellow', 'Violet', 'Orange', 'Green', 'Blue', 'White', 'Black', 'Scarlet');
cookname = new Array('Chr', 'Equip');
loadedcookie = '';

hpkeisuu = new Array(0, 70, 30, 50, 40, 40, 50, 70, 56, 60, 0, 0, 0, 0, 150, 55, 85, 75, 90, 110, 90, 0, 0, 0, 0, 0, 0, 110, 75, 75, 90, 90, 85, 75, 0, 0, 0, 0, 0, 0, 150, 55, 85, 75, 90, 110, 0, 0, 0, 0, 0, 0, 0, 110, 75, 75, 90, 90, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
hpkeisuu2 = new Array(5, 5, 5, 5, 5, 5, 5, 5, 7.5, 7, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 6.5, 0, 0, 0, 0, 0, 0, 7, 5, 3, 6.5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 7, 5, 3, 6.5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0);
spkeisuu = new Array(1, 2, 6, 2, 5, 3, 2, 2, 4.5, 3.29, 0, 0, 0, 0, 3, 9, 4, 8, 4, 4, 4.7, 0, 0, 0, 0, 0, 0, 4.7, 7, 6, 4.7, 4, 5, 9, 0, 0, 0, 0, 0, 0, 3, 9, 4, 8, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4.7, 7, 6, 4.7, 4, 5, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1);
wbonus = new Array(0, 800, 200, 600, 400, 800, 400, 0, 0, 0, 0, 0, 0, 0, 800, 400, 700, 600, 1000, 400, 0, 0, 0, 0, 0, 0, 0, 800, 400, 700, 600, 1000, 400, 0, 0, 0, 0, 0, 0, 0, 800, 400, 700, 600, 1000, 400, 0, 0, 0, 0, 0, 0, 0, 800, 400, 700, 600, 1000, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
// vv Huge props to Doddler for this.vv
GunslingerHP = new Array(0,40,47,54,61,69,77,85,94,103,202,212,222,232,243,254,265,277,289,301,316,331,346,364,382,400,420,440,460,490,520,550,580, 610,650,680,710,740,770,800,830,865,890,925,955,990,1025,1050,1080,1110,1145,1180,1215,1275,1335,1395,1455,1515,1575,1635,1695,1760,1820,1885,1950,2015,2080,2145,2210,2275,2340,2410,2480,2550,2620,2690,2760,2830,2900,2970,3040,3115,3190,3265,3340,3415,3490,3565,3640,3715,3790,3870,3950,4030,4110,4190,4270,4350,4430,4510);
// Will try it my own way though...

landprop = new Array(0, 10, 14, 17, 19, 20);
agpc = new Array(0, 5, 10, 14, 18, 21, 24, 26, 28, 29, 30);
hpi = 519;
keypressed = 0;

// support[i+75] - 128
//Last: 174
//Current: 175
supportst = new Array();
supportst[0] = new Array(10,1,10,10,10,5,3,1,1,1,10,1,1,1,1,1,1,5,5,5,1,1,1,1,10,10,10,10,10,10,10,5,5,1,5,1,1,1,1,5);
supportst[1] = new Array(1,1,1,1,1,1,1,1,1,1,1,10,10,10,5,1,1,1,1,1,1,1,1,1,1,1);
supportself = new Array();
supportself[0]=new Array('Concentration Potion','Awakening Potion','Berserk Potion','Auto-Berserk','Energy Coat','Crazy Uproar','Endure','Improve Concentration','Hide','Two-Hand Quicken','Riding Pecopeco','Adrenoline Rush','Power Thrust','Maximise Power','Cloaking','Riding Pecopeco','Guard','Reflect Shield','Defending Aura','Spear Quicken','Autocast','Summon Spirit Sphere','Fury','Mental Strength','Endure', 
	'Improve Concentration','Hide','Guardian Angel Fury','Angel Mental Strength','Aura Blade','Parry','Spear Dynamo','Relax','Frenzy','Mystical Amplification','Falcon Eyes','Wind Walker', 'Assumptio','Basilica','Maximum Power-Thrust','Enchant Deadly Poison', 'Battle Chant', 'Blinding Mist', 'Fiber Lock', 'Marionette Control', 'Full Chemical Protection', 'Counter Instinct','Ankle Strike', 'Wrist Strike', 'Knee Strike', 
	'Shoulder Strike','Waist Strike','Neck Strike','Poison Bottle','Cursed Water','Sprint','Kihop','Tumbling','Peaceful Break','Happy Break','Mild Wind','Taekwon Mission','Solar Protection','Lunar Protection','Stellar Protection','Solar Blessing','Lunar Blessing','Stellar Blessing','Solar Wrath','Lunar Wrath','Lunar Wrath','S,L,S Team-Up','S,L,S Courier','S,L,S Union','Alchemist Spirit',
	'Beserk Potion Pitcher','Adv Adrenaline Rush','Monk Spirit','Priest Spirit','Sage Spirit','Crusader Spirit','One-Hand Quicken','Assassin Spirit','Rogue Spirit','1st Transcendent Spirit','Hunter Spirit', 'Gatling Fever','Coin Flip','Increase Accuracy','Last Stand','Gunslinger\'s Panic','Flip Tatami','Cicada Skin Shed','Watery Evasion','Ninja Aura','Mirror Image','Sight Blaster','Sonic Acceleration','Spiritual Bestowment','Stealth',
	'Undying Novice');
supportself[1]=new Array(0,0,0,0,0,0,7,83,204,526,529,698,700,701,724,1046,1049,1052,1057,1058,1088,1163,1171,1172,2606,2622,
	2657,-1,-1,1561,1562,1563,1564,1568,1603,1641,-1,-1,-1,1725,1765,-1,-1,-1,-1,-1,2282,-1,-1,-1,-1,
	-1,-1,-1,-1,241,255,252,253,254,256,257,764,766,768,769,770,771,772,773,774,-776,777,778,-1281,
	-1,-1,-1283,-1284,-1287,-1289,-1290,-1293,-1294,-1296,-1292,326,334,335,340,341,286,290,-1,301,303,-1,-1,-1,2281,
	-1);
supportst[2] = new Array(1,1,1,1,1,1,1,10,1,10,1,1,5,1,1,1,10,10,5,10,7,5,5,1,1,10);
supportst[3] = new Array(10,1,1,1,5,10,5,1,1,10,10,10,1,1,5,5,1,1,1,1,1,5,1,1,1,1);
supportst[4] = new Array(1,1,1,1,1,1,11,1,1,1,7,1,1,1,1,1,1,1,1,1,1,3,1,1,1);
supportst[5] = new Array(1,1,1,1,1,1,1,1,1,1,1,10,10,1,1,1,1,5,10,5,10,1,1,5,5);
supportst[6] = new Array(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
support = new Array(); // Just an on/off array of support skills on player
isupport = new Array(); // Item buff support array
supportonoff = new Array('<font color="#AAAAAA">Off</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>','<font color="#4682B4">On</font>');
mildwind = new Array('<font color="#AAAAAA">Off</font>','<font color="#4682B4">Earth</font>','<font color="#4682B4">Wind</font>','<font color="#4682B4">Water</font>','<font color="#4682B4">Fire</font>','<font color="#4682B4">Ghost</font>','<font color="#4682B4">Shadow</font>','<font color="#4682B4">Holy</font>')
supoff = '<font color="#AAAAAA">Off</font>';
onoff = new Array('<font color="#AAAAAA">Off</font>','<font color="#4682B4">On</font>');
yesno = new Array('No', 'Yes');

autospell = new Array('','<br>Napalm Beat','<br>Cold Bold','<br>Fire Bolt','<br>Lighting Bolt','<br>Soul Strike','<br>Fire Ball','<br>Frost Diver');
autospellas = new Array(0,2,4,7,10,3,8,5);
autospellps = new Array(0,43,46,49,52,45,50,47);
autospelllv = new Array(0,1,4,4,4,5,5,5,6,6,7);
autospellslv = new Array();
autospellslv[1] = new Array(0,3,3,3,3,3,3,3,3,3,3);
autospellslv[2] = new Array(0,0,1,2,3,3,3,3,3,3,3);
autospellslv[3] = new Array(0,0,1,2,3,3,3,3,3,3,3);
autospellslv[4] = new Array(0,0,1,2,3,3,3,3,3,3,3);
autospellslv[5] = new Array(0,0,0,0,0,1,2,3,3,3,3);
autospellslv[6] = new Array(0,0,0,0,0,0,0,0,1,2,2);
autospellslv[7] = new Array(0,0,0,0,0,0,0,0,0,0,1);

i0 = 0;
browserspc = 0;
mousepressed = 0;

// * Equipment place
eqp = new Array(38);
eqp[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
eqp[1] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
eqp[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
eqp[3] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
eqp[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
eqp[5] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
eqp[6] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
eqp[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
eqp[8] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
eqp[9] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
eqp[10] = new Array(1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
eqp[11] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[13] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[15] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[17] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[18] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[19] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[20] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[21] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[22] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[23] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[24] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[25] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
eqp[26] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[27] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[28] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
eqp[29] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
eqp[30] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
eqp[31] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[32] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[33] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[34] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[35] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[36] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
eqp[37] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
eqp[38] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
eqp[47] = new Array(1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);

// * Base ASPD
// 0: Unarmed, 1:One-handed Sword, 2: Two-Handed Sword, 3: Dagger, 4: Katar, 5: One-Handed Axe,
// 6: Two-Handed Axe, 7: One-Handed Spear, 8: Two-Handed Spear, 9: Mace, 10: Book,
// 11: Staff, 12: Two-Handed Staff, 13: Bow, 14: Arrow[?], 15: Claw, 16: Instrument, 17: Whip
// 18: Shuriken, 19: Kunai, 20: Huuma, 21: Pistol, 22: Rifle, 23: Shotgun, 24: GrenadeL, 25: GatlingG
baspd = new Array(33);
baspd[0] = new Array(150, 130, 0, 135, 0, 120, 0, 0, 0, 130, 0, 135, 0, 0, 0, 0, 0, 0);
baspd[1] = new Array(160, 145, 140, 150, 0, 130, 125, 135, 130, 135, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[2] = new Array(150, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 130, 130, 0, 0, 0, 0, 0);
baspd[3] = new Array(160, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 0, 0, 0, 0);
baspd[4] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 140, 0, 0, 0, 0, 0, 0);
baspd[5] = new Array(160, 130, 0, 140, 0, 130, 125, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[6] = new Array(160, 135, 0, 150, 0, 120, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0);
baspd[7] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[8] = new Array(160, 0, 135, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 125);
baspd[9] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 125, 50, 50, 130);
baspd[14] = new Array(160, 150, 145, 150, 0, 130, 130, 140, 140, 135, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[15] = new Array(150, 0, 0, 142.5, 0, 0, 0, 0, 0, 0, 0, 137.5, 137.5, 0, 0, 0, 0, 0);
baspd[16] = new Array(160, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0);
baspd[17] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 140, 140, 140, 0, 0, 0, 0, 0, 0);
baspd[18] = new Array(160, 135, 0, 140, 0, 135, 135, 0, 0, 132.5, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[19] = new Array(160, 135, 0, 150, 150, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[20] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 145, 0, 0, 0, 0, 0, 0, 0);
baspd[27] = new Array(160, 150, 145, 150, 0, 130, 130, 140, 140, 135, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[28] = new Array(155, 0, 0, 147.5, 0, 0, 0, 0, 0, 0, 145, 137.5, 137.5, 0, 0, 0, 0, 0);
baspd[29] = new Array(160, 0, 0, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 142.5, 142.5);
baspd[30] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 142.5, 0, 142.5, 0, 0, 0, 152.5, 0, 0);
baspd[31] = new Array(160, 142.5, 0, 145, 0, 132.5, 130, 0, 0, 135, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[32] = new Array(160, 145, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 0, 0);
baspd[33] = new Array(155, 0, 0, 147.5, 0, 0, 0, 0, 0, 0, 145, 137.5, 137.5, 0, 0, 0, 0, 0);
baspd[40] = new Array(160, 150, 145, 150, 0, 130, 130, 140, 140, 135, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[41] = new Array(150, 0, 0, 142.5, 0, 0, 0, 0, 0, 0, 0, 137.5, 137.5, 0, 0, 0, 0, 0);
baspd[42] = new Array(160, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0);
baspd[43] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 140, 140, 140, 0, 0, 0, 0, 0, 0);
baspd[44] = new Array(160, 135, 0, 140, 0, 135, 135, 0, 0, 132.5, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[45] = new Array(160, 135, 0, 150, 150, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[53] = new Array(160, 150, 145, 150, 0, 130, 130, 140, 140, 135, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[54] = new Array(155, 0, 0, 147.5, 0, 0, 0, 0, 0, 0, 145, 137.5, 137.5, 0, 0, 0, 0, 0);
baspd[55] = new Array(160, 0, 0, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 142.5, 142.5);
baspd[56] = new Array(160, 0, 0, 0, 0, 0, 0, 0, 0, 142.5, 0, 142.5, 0, 0, 0, 152.5, 0, 0);
baspd[57] = new Array(160, 142.5, 0, 145, 0, 132.5, 130, 0, 0, 135, 0, 0, 0, 0, 0, 0, 0, 0);
baspd[58] = new Array(160, 145, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 0, 0);
baspd[66] = new Array(150, 130, 0, 135, 0, 120, 0, 0, 0, 130, 0, 135, 0, 0, 0, 0, 0, 0);

skbaricon = new Array('noreset', 'reset', 'no', 'on', 'off', 'on1st', 'on1st');

barlessen=1;
danlessen=1;
barmar=0;
danmar=0;
barstr=1;
baragi=1;
barvit=1;
barint=1;
bardex=1;
barluk=1;
danstr=1;
danagi=1;
danvit=1;
danint=1;
dandex=1;
danluk=1;

cartweight=8000;


// Stat and autolevel settings
blv=1;
nullskill=0;	// Used to determine if you used up skills [0 means you used it all]
autoblv=1;
autojlv=1;
sstp=48;	//starting stat points

// Advanced Class Settings
AdvOn=0;	// Adv classes on/off
sstpAdv=100;	//starting stat points - Adv

firstload=1;
dbw=0;
rbdebug=0;
scdebug=0;
bbdebug=0;
itdebug=0;

// Document Settings
document.onkeypress = onPress;
document.onkeyup = unPress;
overDesc=0;
CursX=0;
CursY=0;
var isNav = (navigator.appName.indexOf("Netscape") !=-1);
function handlerMM(e) {
	CursX = (isNav) ? e.pageX : event.clientX + document.body.scrollLeft;
	CursY = (isNav) ? e.pageY : event.clientY + document.body.scrollTop;
}

if (isNav) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = handlerMM;


function showPopupInfo() {
	arg = showPopupInfo.arguments;
	overDesc=1;
	text='';
	if (arg[0]!=6 && arg[0]!=7) text = '<strong>';
	if (arg[0]==5 && arg[1] >= 1 && arg[1] <= 6 && AdvOn) text += 'High ';
	if (!arg[0]) text += itemdesc[arg[1]][0]+'</strong><br>'+itemdesc[arg[1]][1];
	else if (arg[0]==1) text += itemdesc[arg[1]][0]+'</strong><br>'+itemdesc[arg[1]][1];
	else if (arg[0]==2) text += 'In Game Def</strong><br>• '+(def-Math.round(bonusdata[35] * 7 /10) + bonusdata[35]);
	else if (arg[0]==3) text += itemdata[arg[1]][0]+'</strong>';
	else if (arg[0]==4) text += colorname[arg[1]]+'</strong>';
	else if (arg[0]==5 && arg[1] >= 0) text += jobname[sexname[sex]][arg[1]]+'</strong>';
	else if (arg[0]==5 && arg[1] < 0) text += 'Switch to Transcendant Mode';
	else if (arg[0]==6) text += 'Required Skill: '+jobname[sexname[sex]][Math.ceil(skilldata[arg[1]][arg[2]]/40)+arg[3]].substring(0,3)+'. '+skilldata[skilldata[arg[1]][arg[2]]][0]+' Lv.'+skilldata[arg[1]][arg[2]+5];
	else if (arg[0]==7) text += 'Lv.'+skilldata[arg[1]][arg[2]+5]+'->'+jobname[sexname[sex]][Math.ceil(arg[1]/40)+arg[3]].substring(0,3)+'. '+skilldata[arg[1]][0];
	
	text = "<div style='white-space:nowrap; background-color:#ECECEC; padding:5px; overflow:visible; border-style:solid; border-width:1px; font-size:8pt;'>" + text + "</div>";
	document.getElementById("PopDescLayer").innerHTML=text;
	document.getElementById("PopDescLayer").style.left=CursX+8;
	document.getElementById("PopDescLayer").style.top=CursY+8;
}

function SetOver() {overDesc=0;}

function HidePopUp() { if(overDesc==0) document.getElementById("PopDescLayer").style.top="-1000"; }

// * Setting up Settings
function prestart() {
	MM_showHideLayers('Loading','','hide','LoadingAlpha','','hide');
	HomeLink.innerHTML = '<img src="img2/mistress_banner4.gif" width="200" height="40" title="Original" border="0"><br>';
	if (navigator.userAgent.indexOf("MSIE") == -1) browserspc = 1;
	streset();
	mobsort(0);
	chrsvdataview();
	eqsvdataview();
	if (location.search) loadchrpswd(location.search.substr(1));
	else if (location.hash) loadchrpswd(location.hash.substr(1));
	else start(0);
	bbtshow();
}

function start(n) {
	// Equipment reset	0:Does it, 1: Doesn't Do it
	bardanreset();
	temp = '';
	if (AdvOn && job <=6) ChrJob.innerHTML = 'High ' + jobname[sexname[sex]][job];
	else ChrJob.innerHTML = jobname[sexname[sex]][job];
	
	if (AdvOn) sstp = sstpAdv;

	ChrJobLv.innerHTML = jlv;
	ChrSex.innerHTML = sexname[sex];
	
	if (AdvOn && job == 0) temp = 'High_';
	JobGraphic.innerHTML = '<img src="img2/' + sexname[sex] + '/' + temp+jobname[sexname[sex]][job] + '.gif">';
	ChrFace.innerHTML = '<img src="img2/' + sexname[sex] + '/' + face + colormanage[hair] + '.gif" border="0">';
	if (!n) eqreset();
	subbtlayerhide();
	if (!n) {
		singleaslisting();
		skview();
		supportreset();
		readbonus(0);
		equip();
		showslot();
		showplus();
		statuscalc(0);
	}
	etcstatuslisting();

}

function streset() {
	jlv = 1;
	skillon[0] = 1;
	for (i = 1; i <= 2800; i++) { 	skillon[i] = 0;
					skilllv[i-1] = 0;
					skill1st[i-1] = 0; }

	resetbonus(1);
	sex = 0;
	face = 2;
	plus = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	hair = 0;
	job = 0;
	aspd = 0;
	relist = 0;
	bstatus = new Array(1, 1, 1, 1, 1, 1);
	t = 0;
	st = 0;

	eqreset();
}

function transreset(){
	tmp = '*Transcend Switch*<br>Your character will reset (Novice Lv.1) and turn Transcendance ['+onoff[(AdvOn+1)%2]+'].<br><br><font color="#CD5C5C">Warning - Will Overwrite Data.</font><br>.<a href="#" onClick="advreset();return false">Transcend ['+onoff[(AdvOn+1)%2]+']</a><br>.<a href="#" onClick="joblisting();return false">Cancel</a>';
	JobSelect.innerHTML = tmp;
}
function advreset() {
	tmp = sex;
	tmp2 = face;
	tmp3 = hair;
	streset();
	blv = 1;
	AdvOn=(AdvOn+1)%2;
	sex = tmp;
	face = tmp2;
	hair = tmp3;
	start(0);
}
function supportreset() {
	for (i=0; i<=180; i++) support[i] = 0;
	for (i=0; i<=39; i++) document.getElementById('ChrSupportLvView'+i).innerHTML = supoff;
	for (i=50; i<=65; i++) document.getElementById('ChrSupportLvView'+i).innerHTML = supoff;
	for (i=111; i<=113; i++) document.getElementById('ChrSupportLvView'+i).innerHTML = supoff;
	for (i=116; i<=120; i++) document.getElementById('ChrSupportLvView'+i).innerHTML = supoff;
	for (i=122; i<=127; i++) document.getElementById('ChrSupportLvView'+i).innerHTML = supoff;
	document.getElementById('ChrSupportLvView151').innerHTML = supoff;
	document.getElementById('ChrSupportLvView168').innerHTML = supoff;
	document.getElementById('ChrSupportLvView173').innerHTML = supoff;
	for (i=0; i<=77; i++) {isupport[i] = 0; document.getElementById('ItmSupportLvView'+i).innerHTML = supoff; }
}
function eqreset() {
	for (i = 0; i <= 10; i++) { itemwear[eq[i]][0] = 0; itemwear[eq[i]][1] = 0;}
	eq = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1750);
	if (slot[0][0]) for (i = 0; i <= 9; i++) for (l = 0; l <= 3; l++) { itemwear[slot[i][l]][0] = 0; itemwear[slot[i][l]][1] = 0;}
	for (i = 0; i <= 9; i++) slot[i] = new Array(10, 10, 10, 10);
	plus = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	if (job == 8) { eq[10] = 3001; itemwear[eq[10]][0] = 1;}
	else if (job == 9) { eq[10] = 3801; itemwear[eq[10]][0] = 1;}
	else if (job == 19) { eq[10] = 3106; itemwear[eq[10]][0] = 1;}
}
function opencart() {
	MM_showHideLayers('OpenCartLayer','','show');
	document.getElementById("icartWeight").value = cartweight;
}
function cartcalc() {
	cartweight = eval(document.getElementById("icartWeight").value);
	if (cartweight < 0) alert('Only values at and above 0 are allowed.');
	else {
		readbonus(0);
		statuscalc(0);
		MM_showHideLayers('OpenCartLayer','','hide');
	}
}
function bardanreset() {
	for (i = 0; i <= 7; i++){
		skilldata[i+1121][0] = bardanname[sex][i];	
	}
	
	if (AdvOn) for (i=1; i<=70; i++) jobbonus[55][i] = bardanbonus[sex+2][i];
	else for (i=1; i<=50; i++) jobbonus[29][i] = bardanbonus[sex][i];
	astabledata[62][0] = 'skill' + sexname[sex] + '/1122.gif';
	astabledata[62][1] = skilldata[1122][0];
	astabledata[75][0] = 'skill' + sexname[sex] + '/1124.gif';
	astabledata[75][1] = skilldata[1124][0];
	i=0;
	if (AdvOn) i=26;
	if (sex) {
		astabledata[75][6] = 'Stun';
		jobaslist[29+i] = new Array(6,12,13,14,62,75,87);
	}
	else {
		astabledata[75][6] = 'Freeze';
		jobaslist[29+i] = new Array(7,12,13,14,62,63,75,87);
	}
}
function openbardan(){
	MM_showHideLayers('BarDanStLayer','','show');
	document.frm.barlessen.value = barlessen;
	document.frm.danlessen.value = danlessen;
	document.frm.barstr.value = barstr;
	document.frm.baragi.value = baragi;
	document.frm.barvit.value = barvit;
	document.frm.barint.value = barint;
	document.frm.bardex.value = bardex;
	document.frm.barluk.value = barluk;
	document.frm.danstr.value = danstr;
	document.frm.danagi.value = danagi;
	document.frm.danvit.value = danvit;
	document.frm.danint.value = danint;
	document.frm.dandex.value = dandex;
	document.frm.danluk.value = danluk;
}
function bardanstcalc() {
	MM_showHideLayers('BarDanStLayer','','hide');
	barlessen = eval(document.frm.barlessen.value);
	danlessen = eval(document.frm.danlessen.value);
	barstr = eval(document.frm.barstr.value);
	baragi = eval(document.frm.baragi.value);
	barvit = eval(document.frm.barvit.value);
	barint = eval(document.frm.barint.value);
	bardex = eval(document.frm.bardex.value);
	barluk = eval(document.frm.barluk.value);
	danstr = eval(document.frm.danstr.value);
	danagi = eval(document.frm.danagi.value);
	danvit = eval(document.frm.danvit.value);
	danint = eval(document.frm.danint.value);
	dandex = eval(document.frm.dandex.value);
	danluk = eval(document.frm.danluk.value);
	if (document.frm.barmar.checked && !document.frm.danmar.checked) barmar = 1;
	else if (document.frm.danmar.checked && !document.frm.barmar.checked) danmar = 1;
	if (document.frm.danmar.checked && document.frm.barmar.checked) alert('Please only select only one desired class for Marionette Control.');
	else {
		readbonus(0);
		statuscalc(0);
	}
}

function resetDebug() {
	DebugText.innerHTML = '';
}

// * Basic Status-Related Functions
// n = which stat
function basestatuscalc(m, n){
	clearTimeout(i0);
	if (n == 1) {
		if (blv != 99 || Math.ceil((bstatus[m]) / 10) + 1 <= sstp) {
			bstatus[m]++;
			if (keypressed==96) bstatus[m] += 9;
			if (bstatus[m] >= 100) bstatus[m] = 99;
		}
	}
	else if (!n) {
		bstatus[m]--;
		if (keypressed==96) bstatus[m] -= 9;
		if (bstatus[m] <= 0) bstatus[m] = 1;
	}
	else {
		t = 0;
		return;
	}
	readbonus(0);
	statuscalc(0);
	if (!t) i0 = setTimeout("basestatuscalc('" + m + "', " + n + ")", 500);
	else if (t >= 1 && t <= 10) i0 = setTimeout("basestatuscalc('" + m + "', " + n + ")", 100);
	else if (t > 10) i0 = setTimeout("basestatuscalc('" + m + "', " + n + ")", 20);
	t++;
	return;
}
function resetbonus(m) {
	for (i = 0; i <= 345; i++) bonusdata[i] = 0;
	/*Clean Up*/
	if (m) for (i = 318; i <= 333; i++) {
		bonusdata[i] = new Array();
		bonusdata[i][0] = 0;
	}
	bonusdata[312] = new Array();
	bonusdata[312][0] = 0;
	for (i = 0; i <= 150; i++) asbonusdata[i] = 0;
	tempguard = 0;
	LeftHand=0;
}
function condbonus() {
	tmpcond = 0;
	for (i=1; i<=bonusdata[318][0]; i++) if (monsterdata[mnum][23] == Math.abs(bonusdata[318][i])%1000) tmpcond++;
	for (i=1; i<=bonusdata[319][0]; i++) if (monsterdata[mnum][19] == Math.abs(bonusdata[319][i])%100) tmpcond++;
	for (i=1; i<=bonusdata[320][0]; i++) if (monsterdata[mnum][23] == Math.abs(bonusdata[320][i])%1000) tmpcond++;
	for (i=1; i<=bonusdata[321][0]; i++) if (monsterdata[mnum][19] == Math.abs(bonusdata[321][i])%100) tmpcond++;
	for (i=1; i<=bonusdata[312][0]; i++) if (monsterdata[mnum][23] == Math.abs(bonusdata[312][i])%1000) tmpcond++;
	for (i=1; i<=bonusdata[325][0]; i++) if (monsterdata[mnum][19] == Math.abs(bonusdata[325][i])%100) tmpcond++;
	
	for (i=1; i<=bonusdata[327][0]*3; i+=3) if (monsterdata[mnum][23] == bonusdata[327][i]) tmpcond++;
	for (i=1; i<=bonusdata[328][0]*3; i+=3) if (monsterdata[mnum][19] == bonusdata[328][i] || bonusdata[328][i] == 2) tmpcond++;
	for (i=1; i<=bonusdata[329][0]*3; i+=3) if (monsterdata[mnum][20] == bonusdata[329][i]) tmpcond++;
	if (monsterdata[mnum][20] == 9 && skilllv[1099]) tmpcond++;
	if(monsterdata[mnum][19] == 1 && bonusdata[75]) tmpcond++;
	if (tmpcond >= 1) { condbonusdata = true; readbonus(0); statuscalc(1); return true;}
	else return false;	
}

function readbonus(n) {
	if (!n) resetbonus(1);
	
	// Combo Checks
	/*Clean Up*/
	// Redo
	for (x = 1; x <= combosize; x++) {
		z = 0;
		v = 0;
		l = 1;
		for (y = 1; y <= combodata[x][0]*2; y += 2) {
			if (itemwear[combodata[x][y]][0] == 0) z--;
			if (combodata[x][y+1] > 0) v++;
			if (itemwear[combodata[x][y]][0] > 1) l += (itemwear[combodata[x][y]][0]-1) 
		}
		if(rbdebug) DebugText.innerHTML += 'Combo Array [' + x + '] | Remaining [' + Math.abs(z) + '] | Bonus * [' + (l) + ']<br>';
 		if (z == 0) {
			if (v) for (y = 1; y <= combodata[x][0]*2; y += 2) if (combodata[x][y+1] > 0) itemwear[combodata[x][y]][1] = 1;
			
			for (h = 1; h <= l; h++) {
				tmp = false;
				tmp2 = 0;
				tmp3 = 0;
				m = 0;
				for (i = (combodata[x][0]*2)+2; i <= (combodata[x][combodata[x][0]*2+1]*2)+(combodata[x][0]*2); i += 2) {
					if (!combodata[x][i]) tmp = false;
					if (combodata[x][i] > 325 && combodata[x][i] < 334) {
						tmp = true;
						tmp2 = combodata[x][i];
						tmp3 = combodata[x][i+1];
						m = bonusdata[combodata[x][i]][0]*3 + 1;
					}
					else if (tmp) {
						bonusdata[tmp2][0]++;
						bonusdata[tmp2][m] = tmp3;
						bonusdata[tmp2][m+1] = combodata[x][i];
						bonusdata[tmp2][m+2] = combodata[x][i+1];
						m+=3;
					}
					else if (!tmp && ((combodata[x][i] > 317 && combodata[x][i] < 326) || combodata[x][i] == 312)) {
						bonusdata[combodata[x][i]][0]++;
						bonusdata[combodata[x][i]][bonusdata[combodata[x][i]][0]] = combodata[x][i+1];
					}
					else if (!tmp) {
						if (combodata[x][i]==324) asbonusdata[skilldata[combodata[x][i+1]%10000][14]-1] += (combodata[x][i+1]-combodata[x][i+1]%10000)/10000;
						else bonusdata[combodata[x][i]] += combodata[x][i+1];
					}
				}
			}
		}
	}

	// Equip
	for (i = 0; i <= 10; i++) {
		tmp = false;
		tmp2 = 0;
		tmp3 = 0;
		m = 0;
		if (itemwear[eq[i]][1] != 1) {
			for (j = 0; j <= 7; j++) {
				if (!itemdata[eq[i]][j+7]) tmp = false;
				if (itemdata[eq[i]][j+7] > 325 && itemdata[eq[i]][j+7] < 334) {
					tmp = true;
					tmp2 = itemdata[eq[i]][j+7];
					tmp3 = itemdata[eq[i]][j+15];
					m = bonusdata[itemdata[eq[i]][j+7]][0]*3 + 1;
				}
				else if (tmp) {
				//	alert('['+m+'] Location: '+tmp2+' Cond: '+tmp3+'\nBonus['+itemdata[eq[i]][j+7]+'] = '+itemdata[eq[i]][j+15]);
					bonusdata[tmp2][0]++;
					bonusdata[tmp2][m] = tmp3;
					bonusdata[tmp2][m+1] = itemdata[eq[i]][j+7];
					bonusdata[tmp2][m+2] = itemdata[eq[i]][j+15];
					m+=3;
				}
				else if (!tmp && ((itemdata[eq[i]][j+7] > 317 && itemdata[eq[i]][j+7] < 326) || itemdata[eq[i]][j+7] == 312)) {
					bonusdata[itemdata[eq[i]][j+7]][0]++;
					bonusdata[itemdata[eq[i]][j+7]][bonusdata[itemdata[eq[i]][j+7]][0]] = itemdata[eq[i]][j+15];
				}
				else if (!tmp) {
				
					if (i == 5 && (itemdata[eq[5]][j+7] == 1 || itemdata[eq[5]][j+7] == 3)) bonusdata[itemdata[eq[i]][j + 7] + 31] += itemdata[eq[i]][j + 15];
					if (itemdata[eq[i]][j+7]==324) asbonusdata[skilldata[itemdata[eq[i]][j+15]%10000][14]-1] += (itemdata[eq[i]][j+15]-itemdata[eq[i]][j+15]%10000)/10000;
					else if (i == 2 && eq[i] == eq[0]) break;
					else bonusdata[itemdata[eq[i]][j + 7]] += itemdata[eq[i]][j + 15];
					if (itemdata[eq[i]][j+7]==13 || itemdata[eq[i]][j+7]==14) bonusdata[itemdata[eq[i]][j+7]-6] += itemdata[eq[i]][j+15];
					if (i==5 && itemdata[eq[i]][j+7]==1) LeftHand = itemdata[eq[i]][j+15];
				}
			}
		}
		if (itemdata[eq[i]][1] == 8 || itemdata[eq[i]][1] == 9 || itemdata[eq[i]][1] == 13 || itemdata[eq[i]][1] == 15 || itemdata[eq[i]][1] == 17 || itemdata[eq[i]][1] == 19 || itemdata[eq[i]][1] == 23 || itemdata[eq[i]][1] == 24 || (itemdata[eq[i]][1] >= 31 && itemdata[eq[i]][1] <= 36)) i++;
		else if (itemdata[eq[i]][1] == 10) i += 2;
		else if (i == 1) if (itemdata[eq[i-1]][1] == 37) i += 1;
	}

	// Job + Skill Bonuses
	for (i = 0; i <= 5; i++) bonusdata[i + 11] += jobbonus[job][jlv][i];
	bonusdata[7] += skilllv[1048]*200;
	bonusdata[15] += skilllv[81]+skilllv[2620];
	bonusdata[70] += skilllv[1099]*4;
	if (monsterdata[mnum][20] == 9) bonusdata[5] += skilllv[1099]*2;
	bonusdata[120] += skilllv[1099]*4;
	bonusdata[104] += skilllv[695]*5;
	bonusdata[101] += skilllv[695];
	bonusdata[107] += skilllv[1048]*5;
	if (skilllv[692]) {
		bonusdata[11] += 1;
		bonusdata[17] += 4;
	}
	if (support[175]) for(i=11;i<=16;i++) bonusdata[i] += 10;

	// Improve Conc....
	if (Math.max(support[82],support[100],isupport[70])) {
		bonusdata[12] += Math.floor((bstatus[1] + bonusdata[12]) * (Math.max(support[82],support[100],isupport[70])+2)/100);
		bonusdata[15] += Math.floor((bstatus[4] + bonusdata[15]) * (Math.max(support[82],support[100],isupport[70])+2)/100);
	}

	//Cards
	for (i = 0; i <= 9; i++) {
		for (k = 0; k <= 3; k++) {
			tmp = false;
			tmp2 = 0;
			tmp3 = 0;
			m = 0;
			
			if (itemwear[slot[i][k]][1] != 1) {
				for (j = 0; j <= 7; j++) {
					if (!itemdata[slot[i][k]][j+7]) tmp = false;
					if (itemdata[slot[i][k]][j+7] > 325 && itemdata[slot[i][k]][j+7] < 334) {
						tmp = true;
						tmp2 = itemdata[slot[i][k]][j+7];
						tmp3 = itemdata[slot[i][k]][j+15];
						m = bonusdata[itemdata[slot[i][k]][j+7]][0]*3 + 1;
					}
					else if (tmp) {
						bonusdata[tmp2][0]++;
						bonusdata[tmp2][m] = tmp3;
						bonusdata[tmp2][m+1] = itemdata[slot[i][k]][j+7];
						bonusdata[tmp2][m+2] = itemdata[slot[i][k]][j+15];
						m+=3;
					}
					else if (!tmp && ((itemdata[slot[i][k]][j+7] > 317 && itemdata[slot[i][k]][j+7] < 326)) || itemdata[slot[i][k]][j+7] == 312) {
						bonusdata[itemdata[slot[i][k]][j+7]][0]++;
						bonusdata[itemdata[slot[i][k]][j+7]][bonusdata[itemdata[slot[i][k]][j+7]][0]] = itemdata[slot[i][k]][j+15];
					}
					else if (!tmp) {
						if (i==5) {
							if (itemdata[slot[i][k]][j+7]==31) {
								bonusdata[40] += 5;
								j+=8
							}
							else if (itemdata[slot[i][k]][j+7]==3) {
								bonusdata[34] += itemdata[slot[i][k]][j+15];
								j+=8
							}
							else bonusdata[itemdata[slot[i][k]][j + 7]] += itemdata[slot[i][k]][j + 15];
						}
						else bonusdata[itemdata[slot[i][k]][j + 7]] += itemdata[slot[i][k]][j + 15];						
					}
					if (itemdata[slot[i][k]][j+7] == 324) asbonusdata[skilldata[itemdata[slot[i][k]][j+15]%10000][14]-1] += (itemdata[slot[i][k]][j+15]-itemdata[slot[i][k]][j+15]%10000)/10000;
				}
			}
			if (slotnum[itemdata[eq[i]][1]] != 41) k += 3;
		}
		if (itemdata[eq[i]][1] == 8 || itemdata[eq[i]][1] == 9 || itemdata[eq[i]][1] == 13 || itemdata[eq[i]][1] == 15 || itemdata[eq[i]][1] == 17 || itemdata[eq[i]][1] == 19 || itemdata[eq[i]][1] == 23 || itemdata[eq[i]][1] == 24 || (itemdata[eq[i]][1] >= 31 && itemdata[eq[i]][1] <= 36)) i++;
		else if (itemdata[eq[i]][1] == 10) i += 2;
	}
	
	// Conditional Bonuses
	if (!n) {
		mnum = eval(document.frm.mnum.value);
		for (i=1; i<=bonusdata[318][0]; i++) if (monsterdata[mnum][23] == Math.abs(bonusdata[318][i])%1000) { condbonusdata = true; bonusdata[36] += (bonusdata[318][i]-bonusdata[318][i]%1000)/1000; }
		for (i=1; i<=bonusdata[319][0]; i++) if (monsterdata[mnum][19] == Math.abs(bonusdata[319][i])%100) { condbonusdata = true;  bonusdata[36] += (bonusdata[319][i]-bonusdata[319][i]%100)/100; }
		for (i=1; i<=bonusdata[320][0]; i++) if (monsterdata[mnum][23] == Math.abs(bonusdata[320][i])%1000) { condbonusdata = true;  bonusdata[22] += (bonusdata[320][i]-bonusdata[320][i]%1000)/1000; }
		for (i=1; i<=bonusdata[321][0]; i++) if (monsterdata[mnum][19] == Math.abs(bonusdata[321][i])%100) { condbonusdata = true;  bonusdata[22] += (bonusdata[321][i]-bonusdata[321][i]%100)/100; }
		for (i=1; i<=bonusdata[312][0]; i++) if (monsterdata[mnum][23] == Math.abs(bonusdata[312][i])%1000) { condbonusdata = true;  tempguard += (bonusdata[312][i]-bonusdata[312][i]%1000)/1000; }
		for (i=1; i<=bonusdata[325][0]; i++) if (monsterdata[mnum][19] == Math.abs(bonusdata[325][i])%100) { condbonusdata = true;  tempguard += (bonusdata[325][i]-bonusdata[321][i]%100)/100; }
		
		for (i=1; i<=bonusdata[327][0]*3; i+=3) if (monsterdata[mnum][23] == bonusdata[327][i]) { condbonusdata = true;  bonusdata[bonusdata[327][i+1]] += bonusdata[327][i+2]; }
		for (i=1; i<=bonusdata[328][0]*3; i+=3) if (monsterdata[mnum][19] == bonusdata[328][i] || bonusdata[328][i] == 2) { condbonusdata = true;  bonusdata[bonusdata[328][i+1]] += bonusdata[328][i+2]; }
		for (i=1; i<=bonusdata[329][0]*3; i+=3) if (monsterdata[mnum][20] == bonusdata[329][i]) { condbonusdata = true;  bonusdata[bonusdata[329][i+1]] += bonusdata[329][i+2]; }
	}
	for (i=1; i<=bonusdata[326][0]*3; i+=3) if ((job == bonusdata[326][i]) || ((bonusdata[326][i] > 13 && job > 13) && (job-1)%13+1 == (bonusdata[326][i]-1)%13+1) || ((bonusdata[326][i] <= 13) && (job-1)%13+1 == bonusdata[326][i])) bonusdata[bonusdata[326][i+1]] += bonusdata[326][i+2];
	for (i=1; i<=bonusdata[330][0]*3; i+=3) if (plus[bonusdata[330][i]%10] < (bonusdata[330][i]-bonusdata[330][i]%10)/10) bonusdata[bonusdata[330][i+1]] += bonusdata[330][i+2];
	for (i=1; i<=bonusdata[331][0]*3; i+=3) if (plus[bonusdata[331][i]%10] > (bonusdata[331][i]-bonusdata[331][i]%10)/10) bonusdata[bonusdata[331][i+1]] += bonusdata[331][i+2];
	for (i=1; i<=bonusdata[332][0]*3; i+=3) if (bstatus[bonusdata[332][i]%10] < (bonusdata[332][i]-bonusdata[332][i]%10)/10) bonusdata[bonusdata[332][i+1]] += bonusdata[332][i+2];
	for (i=1; i<=bonusdata[333][0]*3; i+=3) if (bstatus[bonusdata[333][i]%10] > (bonusdata[333][i]-bonusdata[333][i]%10)/10) bonusdata[bonusdata[333][i+1]] += bonusdata[333][i+2];
	if(monsterdata[mnum][19] == 1 && bonusdata[75]) bonusdata[36] += bonusdata[75];
	if (eq[3] == 2358) { 
		if (job%13 == 2 || job%13 == 3 || job%13 == 4) bonusdata[207] += 50;
		else if (job%13 == 1 || job%13 == 5 || job%13 == 6) bonusdata[203] += 50;  
	}
	if (eq[6] == 2520) { 
		if (job%13 == 2 || job%13 == 3 || job%13 == 4) bonusdata[21] += 5;
		else if (job%13 == 1 || job%13 == 5 || job%13 == 6) bonusdata[212] += 5;
		bonusdata[21] += plus[6]*2;
		bonusdata[212] += plus[6]*2;
	}
	if (eq[7] == 2420) { 
		if (job%13 == 2 || job%13 == 3 || job%13 == 4) bonusdata[7] += blv*5;
		else if (job%13 == 1 || job%13 == 5 || job%13 == 6) bonusdata[8] += jlv*2;
	}
	
	// Forging Calculation
	for (i = 0; i <= 9; i++){
		if (slotnum[itemdata[eq[i]][1]] == 41) {
			if (i == 4) bonusdata[29] += pluslv[itemdata[eq[i]][5]] * plus[i];
			else bonusdata[39] += pluslv[itemdata[eq[i]][5]] * plus[i];
		}
		else {bonusdata[35] += plus[i];}
	}
	
	def = bonusdata[2] + Math.round(bonusdata[35] * 7 /10) - support[106] * 5;
	
	// Attack Skill Buffs
	if (support[149]) asbonusdata[71] += blv;
	if (support[153]) asbonusdata[17] += 500;
	if (support[155]) asbonusdata[59] += 100;
	if (support[157]) asbonusdata[54] += 100;
	
	//Support Skills	
	bonusdata[8] += skilllv[1301]*30;
	if (support[2]) bonusdata[12] += support[2]+2;
	if (support[62]) bonusdata[12] -= support[62]+2;
	if (bonusdata[4] != 9) {
		bonusdata[11] += support[4];
		bonusdata[14] += support[4];
		bonusdata[15] += support[4];
	}
	else if (support[4]) {
		bonusdata[11] -= Math.floor((bstatus[0] + bonusdata[11])/2);
		bonusdata[14] -= Math.floor((bstatus[3] + bonusdata[14])/2);
		bonusdata[15] -= Math.floor((bstatus[4] + bonusdata[15])/2);
	}
	if (support[64]) {
		bonusdata[12] -= Math.floor((bstatus[1] + bonusdata[12])*(0.1*support[64]));
		bonusdata[15] -= Math.floor((bstatus[4] + bonusdata[15])*(0.1*support[64]));
	}

	if (support[27]) bonusdata[9] += 5 + support[27]*2 + barlessen + Math.floor(barvit/10);
	if (support[30]) {
		bonusdata[10] += 10 + support[30] + Math.floor(danlessen/2) + Math.floor(danint/10);
		bonusdata[301] += 10 + support[30]*3 + Math.floor(danlessen/2) + Math.floor(danint/10);
	}
	bonusdata[11] += support[80]*4 + support[169];
	bonusdata[14] += Math.round(skilllv[1099]/2) + support[169];
	bonusdata[16] += support[12]*30;
	bonusdata[38] += support[5]*5;
	
	if (support[174]) switch(support[174]) {
		case 3: bonusdata[11] += 4; break;
		case 4: bonusdata[11] += 8; break;
		case 5: bonusdata[11] += 16; break;
		default: bonusdata[11] += support[174]; break;	
	}
	
	for(i=0;i < 6; i++) bonusdata[11+i] += bonusdata[42];

	tmp = 0;
	if (skilllv[202] && job > 9) bonusdata[18] += skilllv[202];
	if (!skilllv[2645])
		bonusdata[18] += skilllv[202]*3 + Math.floor(skilllv[1167]*1.5);
	else
		bonusdata[18] += skilllv[2645]*3 + Math.floor(skilllv[1167]*1.5);
		
	if (support[24]) bonusdata[18] += support[24] + Math.floor(baragi/10) + Math.floor(barlessen/2);
	bonusdata[18] -= support[161]*5;
	bonusdata[18] += support[165]*30;
	bonusdata[19] += Math.max(skilllv[82], skilllv[2621]) + skilllv[694]*2 + skilllv[1242] + support[106]*10 + support[163]*20 - support[165]*30;
	if (support[28]) bonusdata[19] += support[28]*2 + 10 + danlessen + Math.floor(dandex/10);
	if (itemdata[eq[4]][1] == 32) bonusdata[19] += skilllv[321];
	bonusdata[20] = Math.min(bonusdata[20], 30);
	bonusdata[20] += support[13]*20 + support[151]*30 + support[75]*10 + support[76]*15 + support[77]*20 + support[150]*20  + support[128]*20 + support[86]*30 - Math.max(support[98]*25,support[103]*25) + support[108]*30 + support[161]*2 + support[164]*20;
	if (support[25] && itemdata[eq[4]][1] != 24 && itemdata[eq[4]][1] < 32) bonusdata[20] += support[25]+5 + Math.floor(barlessen/2) + Math.floor(baragi/20);
	if (support[84] || support[156]) bonusdata[20] += 20 + support[84] + support[156]*10;
	if (support[94]) bonusdata[20] += support[94] + 20;
	if (support[139]) bonusdata[20] += Math.round((blv+chrdex+chrluk)/10);
	if (jlv >= 50 && skilllv[775]) bonusdata[20] += skilllv[775]*3;
	if (skilllv[1084] && itemdata[eq[4]][1] == 21) bonusdata[20] += 0.5*skilllv[1084];
	
	if (itemdata[eq[4]][1] >= 32 && itemdata[eq[4]][1] <= 36) {
		bonusdata[19] += skilllv[322]*2;
		bonusdata[20] += Math.round(skilllv[322]/2);
	}

	if (eq[4] == 1720 && bonusdata[3] != 6) bonusdata[3] -= 6;
	if (itemdata[eq[4]][1] == 27 || itemdata[eq[4]][1] == 28) bonusdata[3] -= itemdata[eq[10]][16];

	if (support[7] == 1) {
		bonusdata[3] = 6;
		bonusdata[34] = 6;
	}
	if (support[16] == 1) {
		bonusdata[3] = 5;
		bonusdata[34] = 5;
	}
	if (support[20] == 1) {
		bonusdata[3] = 3;
		bonusdata[34] = 3;
	}
	if (support[21] == 1) {
		bonusdata[3] = 1;
		bonusdata[34] = 1;
	}
	if (support[22] == 1) {
		bonusdata[3] = 4;
		bonusdata[34] = 4;
	}
	if (support[23] == 1) {
		bonusdata[3] = 2;
		bonusdata[34] = 2;
	}
	
	if(support[135]) switch (support[135]){
		case 1: bonusdata[3] = 2; break;
		case 2: bonusdata[3] = 4; break;
		case 3: bonusdata[3] = 1; break;
		case 4: bonusdata[3] = 3; break;
		case 5: bonusdata[3] = 8; break;
		case 6: bonusdata[3] = 7; break;
		case 7: bonusdata[3] = 6; break;
	}
	
	if (support[8] == 1) bonusdata[4] = 6;
	if (support[51] == 1) bonusdata[4] = 1;
	if (support[52] == 1) bonusdata[4] = 2;

	if (support[17]) if (bonusdata[4] == 3) bonusdata[17] += support[17] * 10;
	if (support[18]) if (bonusdata[4] == 1) bonusdata[9] += landprop[support[18]]-5;
	if (support[19]) if (bonusdata[4] == 4) bonusdata[18] += support[19] * 3;

	if (support[31]) {
		bonusdata[17] += (support[31]+1)*25;
		def += (support[31]+1)*2;
	}
	if (skilllv[241] && itemdata[eq[4]][1] == 11) bonusdata[17] += skilllv[241] * 10;
	if (itemdata[eq[4]][5] >= 3) bonusdata[1] *= 1 + support[32]*0.5;
	bonusdata[1] += support[162]*3 + support[164]*100;

	bonusdata[305] += Math.min(support[2]+support[148]+support[85]+support[90], 1) - Math.min(support[64],1) - Math.min(support[62], 1) - Math.min(support[93], 1) + support[108] + ((support[111]*2) / 100) - (support[122] * 0.5) - (support[124] * 0.3);
	if (support[174]) bonusdata[305] += Math.min(support[158],1);
	if (support[33] == 1) bonusdata[308] = 1;

	if (support[34]) { 
		for(i=102; i<= 110; i++) bonusdata[i] += 55 + support[34]*5;
		bonusdata[i] += 50;
	}
	if (support[35]) bonusdata[306] = 100;
	if (support[36]) bonusdata[310] = 100;
	if (support[37]) bonusdata[307] = 100;
	if (support[38]) bonusdata[311] = 100;
	if (support[120]) {
		bonusdata[306] = 100;
		bonusdata[307] = 100;
		bonusdata[310] = 100;
		bonusdata[311] = 100;
	}

	bonusdata[33] += support[78]*32;
	if (support[61]) bonusdata[33] += support[61]*3+2;
	bonusdata[37] -= support[78]*60 + support[61]*6;

	bonusdata[36] += support[15]*5+support[87]*5+support[106]*5+support[108]*100+support[110]*2+support[114]*20+-support[126]*25;
	if (skilllv[1761] && itemdata[eq[4]][1] == 15) bonusdata[36] += 10 + skilllv[1761] * 2;
	if (support[115]) bonusdata[36] += 150 + support[115]*50; // Might be its own dmg % [deadly poison]
	if (support[131]) bonusdata[36] += (skilllv[254]*2)*support[131];

	if (support[81] || support[99] || support[108] || isupport[68]) bonusdata[215] = 1;

	bonusdata[216] += agpc[support[91]];
	if (support[105]) bonusdata[216] += 20+support[105]*3;
	if (support[121]) bonusdata[216] += 50;
	if (support[92]) bonusdata[212] += 10+support[92]*3;
	bonusdata[107] += support[39]*5;
	bonusdata[117] += support[39]*5;
	if (support[93]) bonusdata[121] = (10000-(100-bonusdata[121])*(95-support[93]*15))/100;
	bonusdata[121] += support[1]*100 + support[165]*20;
	if (support[166]) bonusdata[121] = 100;

	if (support[29]) bonusdata[22] += 10 + support[29] + Math.floor(danlessen/2) + Math.floor(danluk/10);
	if (support[97]) bonusdata[22] += (75 + support[97] * 25)/10;
	if (support[102]) bonusdata[22] += 50;
	bonusdata[22] += support[110];

	if (support[63]) def = def * (90 - support[63]*2)/100;
	def = Math.round(def * (100-support[50]*25)/100 * (100-(support[51]+support[52])*50)/100);
	if (support[81] || isupport[68])	mdef = bonusdata[6] + Math.round(bonusdata[6] * (support[51] + support[52]) * 0.25) + 10;
	else mdef = bonusdata[6] + Math.round(bonusdata[6] * (support[51] + support[52]) * 0.25);

	if (support[98] == 1 || support[103] == 1) {
		def = 90;
		mdef = 90;
		bonusdata[20] -= 20;
	}

	bonusdata[302] += support[14];

	if (support[54]) bonusdata[16] = -bstatus[5];

	bonusdata[31] += support[96]*3 + support[173]*3;

	bonusdata[28] += support[67] + support[108];
	
	if (support[108]) bonusdata[9] += 200;
	
	bonusdata[10] += skilllv[1683];
	bonusdata[304] += skilllv[1683]*3;
	
	if (support[140]) bonusdata[313] += skilllv[769]*10;
	if (support[141]) bonusdata[313] += skilllv[770]*10;
	if (support[142]) bonusdata[313] += skilllv[771]*10;
	
	if (support[148]) bonusdata[254] += 1;
	
	if (support[172]) asbonusdata[54] += 10;
	
	if (support[110]) {
		bonusdata[11] += 5;
		bonusdata[12] += 5;
		bonusdata[13] += 5;
		bonusdata[14] += 5;
		bonusdata[15] += 5;
		bonusdata[16] += 5;
	}
	
	if (support[116]) {
		bonusdata[11] += 20;
		bonusdata[12] += 20;
		bonusdata[13] += 20;
		bonusdata[14] += 20;
		bonusdata[15] += 20;
		bonusdata[16] += 20;
	}
	if (support[119]) {
		if (barmar) {
			bonusdata[11] += Math.floor(barstr/2);
			bonusdata[12] += Math.floor(baragi/2);
			bonusdata[13] += Math.floor(barvit/2);
			bonusdata[14] += Math.floor(barint/2);
			bonusdata[15] += Math.floor(bardex/2);
			bonusdata[16] += Math.floor(barluk/2);
		}
		if (danmar) {
			bonusdata[11] += Math.floor(danstr/2);
			bonusdata[12] += Math.floor(danagi/2);
			bonusdata[13] += Math.floor(danint/2);
			bonusdata[14] += Math.floor(danint/2);
			bonusdata[15] += Math.floor(dandex/2);
			bonusdata[16] += Math.floor(danluk/2);
		}
	}
	if (support[159] && blv < 70) for (i=0;i<=5;i++) bonusdata[11+i] += Math.min(blv,50);
	if (support[130] && itemdata[eq[4]][1] == 11) bonusdata[11] += 10;
	if (support[163]) {
		bonusdata[12] += 4;
		bonusdata[15] += 4;
	}
	
	def = def * (100+bonusdata[256])/100;
	mdef = mdef * (100+bonusdata[257])/100;
	
	// Status Enhancing Items
	for (i=0;i<=9;i++) bonusdata[11] += isupport[i]*(i+1);
	for (i=0;i<=9;i++) bonusdata[12] += isupport[10+i]*(i+1);
	for (i=0;i<=9;i++) bonusdata[13] += isupport[20+i]*(i+1);
	for (i=0;i<=9;i++) bonusdata[14] += isupport[30+i]*(i+1);
	for (i=0;i<=9;i++) bonusdata[15] += isupport[40+i]*(i+1);
	for (i=0;i<=9;i++) bonusdata[16] += isupport[50+i]*(i+1);
	if (isupport[69]) bonusdata[12] += 7;
	
	bonusdata[5] += isupport[60]*10 + isupport[61]*10 + isupport[64]*20 + isupport[65]*30;
	bonusdata[17] += isupport[60]*10 + isupport[61]*10 + isupport[62]*20 + isupport[63]*30;
	bonusdata[18] += isupport[77]*30;
	bonusdata[19] += isupport[66]*30;
	bonusdata[305] += isupport[67]*1 + isupport[69]*1;
	
	if (isupport[71]) {
		bonusdata[3] = 7;
		bonusdata[34] = 7;
	}
	if (isupport[72]) {
		bonusdata[3] = 1;
		bonusdata[34] = 1;
	}
	if (isupport[73]) {
		bonusdata[3] = 2;
		bonusdata[34] = 2;
	}
	if (isupport[74]) {
		bonusdata[3] = 3;
		bonusdata[34] = 3;
	}
	if (isupport[75]) {
		bonusdata[3] = 4;
		bonusdata[34] = 4;
	}
	if (isupport[76]) {
		bonusdata[3] = 1;
		bonusdata[34] = 1;
	}
	
	// End Caps
	for (i=0;i<=5;i++) if (bonusdata[11+i] > 99) bonusdata[11+i] = 99; else if (bonusdata[11+i] < 0) bonusdata[11+i] = 0;
	if (def < 0) def = 0;
}

function blvcalc(n) {
	nstp = 0;
	sttemp = new Array(6);
	for (i = 0; i <= 5; i++) sttemp[i] = bstatus[i];
	for (i = 0; i <= 5; i++) for (j = 1; j < sttemp[i]; j++) nstp += Math.floor((j - 1) / 10) + 2;

	if (!AdvOn) astp = 48;
	else astp = 100;
	tmp = 2;
	while (nstp > astp) {
		astp += 2 + Math.ceil(tmp / 5);
		tmp++;
	}
	tmp--;

	sstp = astp - nstp;

	if (!autoblv && tmp > blv) {
		autoblv=1;
		AutoBaseLv.innerHTML = onoff[autoblv];
	}
	if (n) {
		if (blv>1 && sstp>Math.ceil(blv/5)+2) autoblv = 0;
		else autoblv = 1;
	}

	if (autoblv || tmp > blv) blv = tmp;
	else astp = astpcalc(blv);
}

function ablvonoff(){
	autoblv++;
	autoblv = autoblv%2;
	if (blv>99) autoblv = 1;
	document.getElementById('AutoBaseLv').innerHTML = onoff[autoblv];
	readbonus(0);
	statuscalc(0);
}
function ajlvonoff(){
	autojlv++;
	autojlv = autojlv%2;
	document.getElementById('AutoJobLv').innerHTML = supportonoff[autojlv];

	if (autojlv) {
		nullskill = 0;
		if (job == 0) jlv = skilllv[0]+1;
		else {
			jlv = 1;
			if (job == 66) sntemp=30;
			if (AdvOn) for (i=(job-27)*40+1; i<=(job-26)*40; i++) jlv += skilllv[i];
			else for (i=(job-1)*40+1; i<=(job*40)+sntemp; i++) jlv += skilllv[i];
			if (job>13 && job<66) for (i=(job-1)%13*40+1; i<=((job-1)%13+1)*40; i++) jlv += skilllv[i] - skill1st[i];
		}
	}
	readbonus(0);
	statuscalc(0);
	document.getElementById('ExtraSkillPoint').innerHTML = nullskill;
}
function astpcalc(m) {
	tmp = 48;
	for (a=2; a<=m; a++) tmp += 2 + Math.ceil(a / 5);
	return tmp;
}
function overblvcalc(n){
	clearTimeout(i0);

	if (n == 1 && blv < 99) {
		blv++;
		autoblv = 0;
	}
	else if (!n) {
		blv--;
		if (blv <= 0 || nstp > astpcalc(blv)) {
			blv++;
			autoblv = 1;
		}
	}
	else {
		t = 0;
		return;
	}
	document.getElementById('AutoBaseLv').innerHTML = onoff[autoblv];
	readbonus(0);
	statuscalc(0);
	if (!t) i0 = setTimeout("overblvcalc(" + n + ")", 500);
	else if (t >= 1 && t <= 10) i0 = setTimeout("overblvcalc(" + n + ")", 100);
	else if (t > 10) i0 = setTimeout("overblvcalc(" + n + ")", 20);
	t++;
	return;
}
function overjlvcalc(n){
	clearTimeout(i0);

	if (n == 1 && ((job == 0 && jlv < 10) || (job < 40 && jlv < 50 && job != 8 && job != 9)|| 
		((job >= 21 || (job >= 8 && job <= 13)) && jlv < 70) ||  (job == 66 && jlv < 99) )) {
		jlv++;
		nullskill++;
		autojlv=0;
	}
	else if (!n) {
		jlv--;
		nullskill--;
		if (jlv <= 0 || nullskill < 0) {
			jlv++;
			nullskill++;
			autojlv=1;
		}
	}
	else {
		t = 0;
		return;
	}
	document.getElementById('AutoJobLv').innerHTML = supportonoff[autojlv];
	readbonus(0);
	statuscalc(0);
	ExtraSkillPoint.innerHTML = nullskill;
	if (!t) i0 = setTimeout("overjlvcalc(" + n + ")", 500);
	else if (t >= 1 && t <= 10) i0 = setTimeout("overjlvcalc(" + n + ")", 100);
	else if (t > 10) i0 = setTimeout("overjlvcalc(" + n + ")", 20);
	t++;
	return;
}

function statuscalc(m) {
/*
	Please Clean!!
*/
	chrstr = bstatus[0] + bonusdata[11];
	chragi = bstatus[1] + bonusdata[12];
	chrvit = bstatus[2] + bonusdata[13];
	chrint = bstatus[3] + bonusdata[14];
	chrdex = bstatus[4] + bonusdata[15];
	chrluk = bstatus[5] + bonusdata[16];

	for (i = 0; i <= 5; i++) nstps[i] = Math.ceil(bstatus[i] / 10) + 1;

	minatk_l = 0;
	maxatk_l = 0;

	minbonusatk = Math.min(Math.max(plusbonus[itemdata[eq[4]][5]] * (plus[4] - 8 + itemdata[eq[4]][5]), 0), 1);
	maxbonusatk = Math.max(plusbonus[itemdata[eq[4]][5]] * (plus[4] - 8 + itemdata[eq[4]][5]), 0);
	
	if(scdebug) DebugText.innerHTML = "<br>Bonus Attack [Right] = "+minbonusatk+" ~ "+maxbonusatk+"<br>";

	if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
		minbonusatk_l = Math.min(Math.max(plusbonus[itemdata[eq[5]][5]] * (plus[5] - 8 + itemdata[eq[5]][5]), 0), 1);
		maxbonusatk_l = Math.max(plusbonus[itemdata[eq[5]][5]] * (plus[5] - 8 + itemdata[eq[5]][5]), 0);
	}
	else {
		minbonusatk_l = 0;
		maxbonusatk_l = 0;
	}
	if(scdebug) DebugText.innerHTML += "Bonus Attack [Left] = "+minbonusatk_l+" ~ "+maxbonusatk_l+"<br>";

	if (itemdata[eq[4]][1] == 24 || (itemdata[eq[4]][1] >= 32 && itemdata[eq[4]][1] <= 36)) {
		baseatk = chrdex + Math.pow(Math.floor(chrdex / 10), 2) + Math.floor(chrstr / 5) + Math.floor(chrluk / 5) + bonusdata[17];
		minatk = baseatk + Math.floor(bonusdata[1] * Math.min(Math.floor(chrdex * wealvdex[itemdata[eq[4]][5]]), bonusdata[1]) / 100) + bonusdata[38];
		maxatk = Math.max(baseatk + bonusdata[1], minatk-bonusdata[38]) + bonusdata[38];
		maxatk += bonusdata[26];
	}
	else if (itemdata[eq[4]][1] == 27 || itemdata[eq[4]][1] == 28) {
		baseatk = chrdex + Math.pow(Math.floor(chrdex / 10), 2) + Math.floor(chrstr / 5) + Math.floor(chrluk / 5) + bonusdata[17];
		minatk = baseatk + Math.min(Math.floor(chrdex * wealvdex[itemdata[eq[4]][5]]), bonusdata[1]) + bonusdata[38];
		maxatk = Math.max(baseatk + bonusdata[1], minatk-bonusdata[38]) + bonusdata[38];
	}
	else {
		baseatk = chrstr + Math.pow(Math.floor(chrstr / 10), 2) + Math.floor(chrdex / 5) + Math.floor(chrluk / 5) + bonusdata[17];
		minatk = baseatk + Math.min(Math.floor(chrdex * wealvdex[itemdata[eq[4]][5]]), bonusdata[1]) + bonusdata[38];
		maxatk = Math.max(baseatk + bonusdata[1], minatk-bonusdata[38]) + bonusdata[38];
		
		if(scdebug) DebugText.innerHTML += "Base Attack = "+baseatk+"<br>Weapon Atk [Right] = "+minatk+" ~ "+maxatk+"<br>";
		if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
			minatk_l = baseatk + Math.min(Math.floor(chrdex * wealvdex[itemdata[eq[5]][5]]), bonusdata[32]) + bonusdata[38];
			maxatk_l = Math.max(baseatk + bonusdata[32], minatk_l-bonusdata[38]) + bonusdata[38];
		}
		else {
			minatk_l = 0;
			maxatk_l = 0;
		}
		if(scdebug) DebugText.innerHTML += "BonusData[1] = "+bonusdata[1]+"<br>";
		if(scdebug) DebugText.innerHTML += "BonusData[32] = "+bonusdata[32]+"<br>";
		if(scdebug) DebugText.innerHTML += "BonusData[38] = "+bonusdata[38]+"<br>";
		if(scdebug) DebugText.innerHTML += "Weapon Atk [Left] = "+minatk_l+" ~ "+maxatk_l+"<br>";
	}

	blvcalc();

	if (support[88] == 1){ minatk = maxatk; minatk_l = maxatk_l; }
	minatk += Math.floor(support[106]*0.05);
	maxatk += Math.floor(support[106]*0.05);
	
	if (support[143]) bonusdata[36] += Math.round((blv+chrluk+chrdex)/(12-skilllv[772]*3));
	if (support[144]) bonusdata[36] += Math.round((blv+chrluk+chrdex)/(12-skilllv[773]*3));
	if (support[145]) bonusdata[36] += Math.round((blv+chrstr+chrluk+chrdex)/(12-skilllv[774]*3));
	

	//VitDef, IntMdef Calc
	if (!bonusdata[28]) {
		minvd = Math.floor((Math.floor(chrvit * 5 / 10) + Math.floor(chrvit * 3 / 10)) * (100+support[3]*5)/100 * (100-support[50]*25)/100 * (100-(support[51]+support[52])*50)/100 * (100+bonusdata[37])/100);
		maxvd = Math.floor((Math.floor(chrvit * 5 / 10) + Math.floor(Math.max(Math.pow(chrvit, 2) / 150, chrvit * 3 / 10))) * (100+support[3]*5)/100 * (100-support[50]*25)/100 * (100-(support[51]+support[52])*50)/100 * (100+bonusdata[37])/100);
	}
	else {
		def = 0;
		minvd = 0;
		maxvd = 0;
	}
	imdef = chrint+Math.floor(chrvit/2);
	if (support[125]) def = Math.floor(def / 2);
	if (support[126]) def -= Math.floor(def * (25/100));
	if (support[137]) def += Math.round((blv+chrdex+chrluk)/10);	

	//Matk Calc
	minmatk = Math.floor((chrint + Math.pow(Math.floor(chrint / 7), 2)) * ((100 + bonusdata[5]) / 100) * (100 + support[109]*5) / 100);
	maxmatk = Math.floor((chrint + Math.pow(Math.floor(chrint / 5), 2)) * ((100 + bonusdata[5]) / 100) * (100 + support[109]*5) / 100);
	

	//HitFleeLuckyCritical Calc
	hit = Math.ceil((blv + chrdex + bonusdata[19]) * ((100 - support[56]*25)/100) * (100 + support[110]*3)/100);
	if (support[117] && (itemdata[eq[4]][1] == 24 || (itemdata[eq[i]][1] >= 31 && itemdata[eq[i]][1] <= 36))) hit = Math.ceil(hit * (75/100));
	if (support[148]) hit = 300;
	flee = Math.ceil((blv + chragi + bonusdata[18]) * ((100 - support[56]*25)/100) * (100 + Math.ceil(support[111]/2))/100);
	if (support[108]) flee = Math.ceil(flee/2);
	if (support[118]) flee = Math.ceil(flee/2);
	if (support[138]) flee += Math.round((blv+chrdex+chrluk)/10);
	lucky = chrluk / 10 + 1 + bonusdata[21];
	critical = (chrluk * 3 / 10 + 1 + bonusdata[22]) * (1 + bonusdata[23] / 100);

	//ASPD Calc
	if ((itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] ==16 || itemdata[eq[5]][1] == 20) && itemdata[eq[4]][1] != 11) {
		brecharge = (400 - baspd[job][itemdata[eq[4]][1] - 11] - baspd[job][itemdata[eq[5]][1] - 11]) * 7;
	}
	else if ((itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] ==16 || itemdata[eq[5]][1] == 20) && itemdata[eq[4]][1] == 11) {
		brecharge = (200 - baspd[job][itemdata[eq[5]][1] - 11]) * 10;
	}
	else {
		brecharge = (200 - baspd[job][itemdata[eq[4]][1] - 11]) * 10;
	}

	brecharge = brecharge - Math.floor(chrdex / 1000 * brecharge) - Math.floor(chragi / 250 * brecharge);

	if (support[85]) brecharge += 500 - skilllv[530] * 100;
	if (support[90]) brecharge += 500 - skilllv[1047] * 100;
	if (support[93]) brecharge += 550 - support[93] * 50;
	
	recharge = Math.ceil(brecharge * (100-bonusdata[20]) / 100);
	
	if (support[123]) aspd = ((2000 - recharge) - Math.ceil((2000 - recharge) * (25/100))) / 10;
	else if (support[124]) aspd = ((2000 - recharge) - Math.ceil((2000 - recharge) * (10/100))) / 10;
	else aspd = (2000 - recharge) / 10;

	if (aspd >= 190) { aspd = 190; recharge = 100;}

	//HPSP Calc
	tmphp = 0;
	tmpsp = 0;
	maxhp = Math.floor(blv * hpkeisuu2[job]) + 35;
	for (i = 2; i <= blv; i++) maxhp += Math.round(hpkeisuu[job] * i / 100);
	if (job == 9) maxhp = GunslingerHP[blv];
	if (job == 66 && blv == 99) maxhp += 2000;
	if (AdvOn) {
		tmphp = Math.round(maxhp * ((100 + chrvit) / 100) * (24.97/100));
		maxhp = Math.floor(Math.floor(maxhp * (100 + chrvit) / 100 + tmphp + bonusdata[7]) * (100 + bonusdata[9]) / 100);
		tmpsp = Math.round((Math.floor(spkeisuu[job] * blv + 10) * (100 + chrint) / 100) * (24.97/100));
		maxsp = Math.floor(Math.floor(Math.floor(spkeisuu[job] * blv + 10) * (100 + chrint) / 100 + tmpsp + bonusdata[8]) * (100 + bonusdata[10]) / 100);
	}
	else {
		maxhp = Math.floor(Math.floor(maxhp * (100 + chrvit) / 100 + bonusdata[7]) * (100 + bonusdata[9]) / 100);
		maxsp = Math.floor(Math.floor(Math.floor(spkeisuu[job] * blv + 10) * (100 + chrint) / 100 + bonusdata[8]) * (100 + bonusdata[10]) / 100);
	}
	if (support[136]) {
		maxhp *= 3;
		maxsp *= 3;
	}	
	
	//Weight Calc
	mweight = Math.round((2000 + wbonus[job] + bstatus[0] * 30 + Math.max(skilllv[161], skilllv[2637]) * 200) * (support[147]*10+100)/100);

	//Cast Time Delay Time Multiplier
	if (support[26]) ctmagn = Math.max((100 - chrdex * 10 / 15)/100 * (100 - bonusdata[24])/100 * (100 - support[6]*15)/100 * (100 - support[26]*3 - barlessen - Math.floor(bardex/10))/100,0);
	else ctmagn = Math.max((100 - chrdex * 10 / 15)/100 * (100 - bonusdata[24])/100 * (100 - support[6]*15)/100,0);
	if (support[26]) dtmagn = (100 - support[26]*3 - barlessen - Math.floor(barint/10))/100;
	else dtmagn = 1;

	//Range
	if (itemdata[eq[4]][1] == 24) bonusdata[27] += 5 + skilllv[82] + skilllv[1242] + skilllv[2621];
	else if (itemdata[eq[4]][1] == 32) bonusdata[27] += 6 + skilllv[321];
	else if (itemdata[eq[4]][1] == 18 || itemdata[eq[4]][1] == 19) bonusdata[27] += 2;
	else if (itemdata[eq[4]][1] >= 33 && itemdata[eq[4]][1] <= 36) bonusdata[27] += 15;
	if (bonusdata[50] && bonusdata[27] > 3) bonusdata[36] += bonusdata[50];

	//HPSP Recovery
	hpr = Math.max(Math.floor(chrvit/5)+Math.floor(maxhp/200),1);
	spr = 1+Math.floor(chrint/6)+Math.floor(maxsp/100);

	hpr = Math.floor(hpr * (100+bonusdata[303])/100)+bonusdata[334];
	spr = Math.floor(spr * (100+bonusdata[304])/100)+bonusdata[335];

	if (chrint >= 120) spr += Math.floor((chrint-120)/2)+4;

	if (support[133]) skhpr = Math.floor((maxhp / 500 + 3) * skilllv[253]);
	else skhpr = Math.floor((maxhp / 500 + 5) * Math.max(skilllv[3],skilllv[2602]) + (maxhp / 500 + 4) * skilllv[1162]);
	if (support[107]) skhpr *=3 ;
	if (support[134]) skspr = Math.floor((maxsp / 500 + 3) * skilllv[254]);
	else skspr = Math.floor(((maxsp / 500 + 3) * Math.max(skilllv[291],Math.max(skilllv[2607],Math.max(skilllv[41], skilllv[641]))) + (maxsp / 500 + 2) * skilllv[1162]) * (100 + skilllv[1683]*3)/100);
		
	if (support[50]) {
		hpr = 0;
		spr = 0;
		skhpr = 0;
		skspr = 0;
	}
	if (support[108]) hpr = -Math.floor(maxhp * (5 / 100));
	if (support[97] && !support[152]) {
		spr = 0;
		skspr = 0;
	}


	// Additional Display
	if (bonusdata[3] <= 9) etcpm ='Physical Attack Element: '+propname[bonusdata[3]]+'<br>';
	else etcpm = '<font color="red">Random</font><br>';
	if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
		if (bonusdata[34] <= 9) etcpm += 'Passive Attack Element: '+propname[bonusdata[34]]+'<br>';
		else etcpm += '<font color="red">Random</font><br>';
	}
	if (bonusdata[4]) etcpm += 'Armor Element: '+propname[bonusdata[4]]+'<br>';
	etcpm += 'Range: ' + (bonusdata[27] + 1) + '<br>';
	etcpm += 'Casting Delay: ' + Math.round(ctmagn*100)/100 + '<br>';
	if (!support[108]) {
		if (support[107]) etcpm += 'HP Recovery Rate: ' + hpr*3 + ' (Every 6 sec)<br>';
		else etcpm += 'HP Recovery Rate: ' + hpr + ' (Every 6 sec)<br>';
	}
	else etcpm += 'HP Loss Rate: ' + hpr + ' (Every 15 sec)<br>';
	etcpm += 'SP Recovery Rate: ' + spr + ' (Every '+(8/(support[11]+1))+'/sec)<br>';
	if (skilllv[3] || skilllv[1162] || skilllv[2602] || support[133]) etcpm += 'Increased HP Recovery Rate: ' + skhpr + '<br>';
	if (skilllv[41] || skilllv[291] || skilllv[641] || skilllv[1162] || skilllv[2607] || support[134]) etcpm += 'Increased SP Recovery Rate: ' + skspr + '<br>';
	if (job == 66 && skilllv[2607]) etcpm += '/doridori Inc SP Recovery Rate: ' + skspr*2 + '<br>';
	eqweight = 0;
	for (i = 0; i <= 9; i++) {
		eqweight += itemdata[eq[i]][2];
		if (itemdata[eq[i]][1] == 8 || itemdata[eq[i]][1] == 9 || itemdata[eq[i]][1] == 13 || itemdata[eq[i]][1] == 15 || itemdata[eq[i]][1] == 17 || itemdata[eq[i]][1] == 19 || itemdata[eq[i]][1] == 23 || itemdata[eq[i]][1] == 24 || (itemdata[eq[i]][1] >= 31 && itemdata[eq[i]][1] <= 36)) i++;
		else if (itemdata[eq[i]][1] == 10) i += 2;
	}
	etcpm += 'Equipment Weight: ' + eqweight + ' (' + Math.floor(eqweight / mweight * 1000) / 10;
	if (itemdata[eq[4]][1] == 24) etcpm += '% Not including arrows)<br>';
	else if (itemdata[eq[i]][1] >= 32 && itemdata[eq[i]][1] <= 36) etcpm += '% Not including bullets)<br>';
	else if (itemdata[eq[i]][1] >= 29 && itemdata[eq[i]][1] <= 30) etcpm += '% Not including daggers)<br>';
	else etcpm += '%)<br>';
	etcpm += 'Up To 50% Weight: ' + (mweight / 2 - eqweight) + '<br>';
	etcpm += 'Up To 90% Weight: ' + (mweight * 9 / 10 - eqweight) + '<br>';
	if (bonusdata[31]) etcpm += 'Defense piercing attack: ' + bonusdata[31] + '<br>';
	if (bonusdata[254]) etcpm += 'Bypass Monster Defense<br>';
	if (bonusdata[313]) etcpm += 'EXP Bonus: ' + bonusdata[313] + '%<br>';
	if (bonusdata[345]) etcpm += 'Splash Damage Attack<br>';
	if (support[152] && skilllv[1175]) etcpm += 'Splash Damage: Raging Thrust<br>';
	for (i = 51; i <= 73; i++) if (bonusdata[i]) etcpm += propname[i - 51] + ' Additional Dmg: ' + bonusdata[i] + '%<br>';
	if (bonusdata[36]) etcpm += 'Overall Damage Bonus: '+bonusdata[36]+'%<br>';
	if (bonusdata[74]) etcpm += 'Flying Additional Dmg: ' + bonusdata[74] + '%<br>';
	if (bonusdata[75]) etcpm += 'Boss Additional Dmg: ' + bonusdata[75] + '%<br>';
	if (bonusdata[314]) etcpm += 'Additional Critical Dmg: ' + bonusdata[314] + '%<br>';
	for (i = 76; i <= 98; i++) if (bonusdata[i]) etcpm += propname[i - 76] + ' Additional Critical: +' + bonusdata[i] + '<br>';
	if (bonusdata[99]) etcpm += 'Flying Additional Critical: +' + bonusdata[99] + '%<br>';
	if (bonusdata[100]) etcpm += 'Boss Additional Critical: +' + bonusdata[100] + '%<br>';
	if (support[132]) etcpm += 'Ranged Attack Dodge Chance: 20%<br>';
	for (i = 101; i <= 120; i++) if (bonusdata[i]) etcpm += propname[i - 101] + ' Damage Resistance: ' + Math.min(bonusdata[i], 100) + '%<br>';
	for (i = 125; i <= 127; i++) if (bonusdata[i]) etcpm += propname[i - 105] + ' Damage Resistance: ' + Math.min(bonusdata[i], 100) + 'Size %<br>';
	if (bonusdata[122]) etcpm += 'Boss Dmg Resistance: ' + Math.min(bonusdata[122], 100) + '%<br>';
	if (bonusdata[121]) etcpm += 'Ranged Dmg Resistance: ' + Math.min(bonusdata[121], 100) + '%<br>';
	if (bonusdata[128]) etcpm += 'All Monsters Dmg Resistance: ' + Math.min(bonusdata[128], 100) + '%<br>';
	if (bonusdata[129]) etcpm += 'All Elements Dmg Resistance: ' + Math.min(bonusdata[129], 100) + '%<br>';
	if (support[79]) etcpm += 'Damage Resistance: ' + (support[79]*30) + '% (SP Consumption '+ Math.floor(maxsp*0.03) + ')<br>';
	for (i = 179; i <= 189; i++) if (bonusdata[i]) etcpm += 'Self ' + stname[i - 179] + ' Chance: ' + Math.min(bonusdata[i], 100) + '%<br>';
	for (i = 149; i <= 159; i++) if (bonusdata[i]) etcpm += stname[i - 149] + ' Additional Attack: ' + Math.min(bonusdata[i], 100) + '%<br>';
	for (i=1; i<=bonusdata[318][0]; i++) { if (monsterdata[mnum][23] == Math.abs(bonusdata[318][i])%1000) etcpm += '<b>'; etcpm += 'Additional Dmg to ' + spcmon[Math.abs(bonusdata[318][i])%1000] + ': ' + (bonusdata[318][i]-bonusdata[318][i]%1000)/1000 + '%<br>'; if(monsterdata[mnum][23] == Math.abs(bonusdata[318][i])%1000) etcpm += '</b>';}
	for (i=1; i<=bonusdata[319][0]; i++) { if (monsterdata[mnum][19] == Math.abs(bonusdata[319][i])%100) etcpm += '<b>'; etcpm += 'Additional Dmg to ' + classname[Math.abs(bonusdata[319][i])%100] + ' Family: ' + (bonusdata[319][i]-bonusdata[319][i]%100)/100 + '%<br>'; if (monsterdata[mnum][19] == Math.abs(bonusdata[319][i])%100) etcpm += '</b>';}
	for (i=1; i<=bonusdata[320][0]; i++) { if (monsterdata[mnum][23] == Math.abs(bonusdata[320][i])%1000) etcpm += '<b>'; etcpm += 'Additional Critical to ' + spcmon[Math.abs(bonusdata[320][i])%1000] + ': +' + (bonusdata[320][i]-bonusdata[320][i]%1000)/1000 + '<br>'; if(monsterdata[mnum][23] == Math.abs(bonusdata[320][i])%1000) etcpm += '</b>';}
	for (i=1; i<=bonusdata[321][0]; i++) { if (monsterdata[mnum][19] == Math.abs(bonusdata[321][i])%100) etcpm += '<b>'; etcpm += 'Additional Critical to ' + classname[Math.abs(bonusdata[321][i])%100] + ' Family: +' + (bonusdata[321][i]-bonusdata[321][i]%100)/100 + '<br>'; if (monsterdata[mnum][19] == Math.abs(bonusdata[321][i])%100) etcpm += '</b>';}
	for (i=1; i<=bonusdata[312][0]; i++) { if (monsterdata[mnum][23] == Math.abs(bonusdata[312][i])%1000) etcpm += '<b>'; etcpm += 'Dmg Resistance Vs. ' + spcmon[Math.abs(bonusdata[312][i])%1000] + ': +' + (bonusdata[312][i]-bonusdata[312][i]%1000)/1000 + '<br>'; if(monsterdata[mnum][23] == Math.abs(bonusdata[312][i])%1000) etcpm += '</b>';}
	for (i=1; i<=bonusdata[325][0]; i++) { if (monsterdata[mnum][19] == Math.abs(bonusdata[325][i])%100) etcpm += '<b>'; etcpm += 'Dmg Resistance Vs. ' + classname[Math.abs(bonusdata[325][i])%100] + ' Family: +' + (bonusdata[325][i]-bonusdata[325][i]%100)/100 + '<br>'; if (monsterdata[mnum][19] == Math.abs(bonusdata[325][i])%100) etcpm += '</b>';}
	for (i=1; i<=bonusdata[327][0]*3; i+=3) { if (monsterdata[mnum][23] == bonusdata[327][i]) etcpm += '<b>'; etcpm += 'Everytime you fight ' + spcmon[bonusdata[327][i]] + ': ' + bonusname[bonusdata[327][i+1]] + ' [' + bonusdata[327][i+2] + ']<br>'; if(monsterdata[mnum][23] == bonusdata[327][i]) etcpm += '</b>';} 
	for (i=1; i<=bonusdata[328][0]*3; i+=3) { if (monsterdata[mnum][19] == bonusdata[328][i] || bonusdata[328][i] == 2) etcpm += '<b>'; etcpm += 'Everytime you fight ' + classname[bonusdata[328][i]] + ' Family: ' +   bonusname[bonusdata[328][i+1]] + ' [' + bonusdata[328][i+2] + ']<br>'; if (monsterdata[mnum][19] == bonusdata[328][i] || bonusdata[328][i] == 2) etcpm += '</b>';}
	for (i=1; i<=bonusdata[329][0]*3; i+=3) { if (monsterdata[mnum][20] == bonusdata[329][i]) etcpm += '<b>'; etcpm += 'Everytime you fight ' + propname[bonusdata[329][i]+9] + ' Monsters: ' + bonusname[bonusdata[329][i+1]] + ' [' + bonusdata[329][i+2] + ']<br>'; if (monsterdata[mnum][20] == bonusdata[329][i]) etcpm += '</b>';}
	for (i = 199; i <= 209; i++) if (bonusdata[i]) etcpm += stname[i - 199] + ' Defense Rate: ' + Math.min(bonusdata[i], 100) + '%<br>';
	if (bonusdata[210]) etcpm += 'Critical Resistance: ' + Math.min(bonusdata[210], 100) + '%<br>';
	if (bonusdata[216]) {
		if (support[121]) etcpm += 'Physical Attack Resistnace: ' + Math.min(bonusdata[216], 100) + '% for 3 attacks ['+support[121]*15+'% Chance]<br>';
		else etcpm += 'Physical Attack Resistnace: ' + Math.min(bonusdata[216], 100) + '%<br>';
	}
	if (bonusdata[211]) etcpm += 'Ranged Resistance: ' + Math.min(bonusdata[211], 100) + '%<br>';
	if (bonusdata[217]) etcpm += 'Magic Resistance: ' + Math.min(bonusdata[217], 100) + '%<br>';
	if (bonusdata[212]) etcpm += 'Physical Reflection: ' + Math.min(bonusdata[212], 100) + '%<br>';
	if (bonusdata[213]) etcpm += 'Magic Reflection: ' + Math.min(bonusdata[213], 100) + '%<br>';
	if (bonusdata[214]) etcpm += 'Cast Uninterruptable<br>';
	if (bonusdata[215]) etcpm += 'Dmg Resistance<br>';
	if (bonusdata[251]) etcpm += 'Ranged Attack: ' + bonusdata[251] + ' Range<br>';
	if (bonusdata[252]) etcpm += 'HP Absorption: ' + bonusdata[252] + '%<br>';
	if (bonusdata[253]) etcpm += 'SP Absorption: ' + bonusdata[253] + '%<br>';
	if (bonusdata[254] && bonusdata[254] != 21) etcpm += propname[bonusdata[254] - 1] + ' Monster Def is Disregarded<br>';
	if (bonusdata[254] == 21) etcpm += 'Attack disregards Def<br>';
	if (bonusdata[255] && bonusdata[255] != 21) etcpm += propname[bonusdata[254] - 1] + ' Low chance of Auto-Kill<br>';
	if (bonusdata[255] == 21) etcpm += 'Low chance of Auto-Kill<br>';
	if (bonusdata[301]) etcpm += 'SP Cost: ' + (100 - bonusdata[301]) + '%<br>';
	if (bonusdata[302]) etcpm += 'Size Reduction Disregarded<br>';
	if (bonusdata[305] > 0) etcpm += 'Movement Speed: ' + bonusdata[305] + ' increase<br>';
	if (bonusdata[305] < 0) etcpm += 'Movement Speed: ' + Math.abs(bonusdata[305]) + ' reduction<br>';
	if (bonusdata[306]) etcpm += 'Weapon Dmg Reduction: ' + Math.min(bonusdata[306], 100) + '%<br>';
	if (bonusdata[307]) etcpm += 'Arrow Dmg Reduction: ' + Math.min(bonusdata[307], 100) + '%<br>';
	if (bonusdata[310]) etcpm += 'Shield Dmg Reduction: ' + Math.min(bonusdata[310], 100) + '%<br>';
	if (bonusdata[311]) etcpm += 'Helm Dmg Reduction: ' + Math.min(bonusdata[311], 100) + '%<br>';
	if (bonusdata[308]) etcpm += 'No gems required<br>';
	if (bonusdata[309]) etcpm += 'Respawn fully recovered<br>';
	if (support[50]) {
		if (support[9]) etcpm += 'HP Decrease/sec: 0<br>';
		else etcpm += 'HP Decrease/sec: '+Math.floor(3+maxhp*0.015)+'<br>';
	}
	if (support[117]) etcpm += 'Long Range Skills: 75% Reduced Hit Rate<br>';
	if (support[117]) etcpm += 'Long Range Attacks: 50% Reduced Damage<br>';
	if (support[10]) etcpm += 'Complete Def Amount: ' + Math.floor(maxhp * (support[10]*2 + 10)/100) + '<br>';
	if (bonusdata[0]) etcpm += '• There is a bug in the item database. Please head over to <a href="http://www.ragnasim.net/forum/">our forums</a> boards and post the error there.<br>';
//	if (bonusdata[]) etcpm += '' + bonusdata[] + '<br>';

	EtcStatus.innerHTML = etcpm;


	if (blv > 99) ChrBaseLv.innerHTML = '-';
	else ChrBaseLv.innerHTML = blv;
	ChrJobLv.innerHTML = jlv;
	ChrMaxHP.innerHTML = maxhp;
	ChrMaxSP.innerHTML = maxsp;
	ChrMaxWeight.innerHTML = mweight;


	stminatk = Math.floor(Math.floor((minatk+minbonusatk) * (100+bonusdata[33]) / 100) * (100-support[54]*25) / 100);
	stmaxatk = Math.floor(Math.floor((maxatk+maxbonusatk) * (100+bonusdata[33]) / 100) * (100-support[54]*25) / 100);
	stminatk_l = Math.floor(Math.floor((minatk_l+minbonusatk_l) * (100+bonusdata[33]) / 100) * (100-support[54]*25) / 100);
	stmaxatk_l = Math.floor(Math.floor((maxatk_l+maxbonusatk_l) * (100+bonusdata[33]) / 100) * (100-support[54]*25) / 100);
	stplus = bonusdata[29];

	if (itemdata[eq[4]][1] == 15) {
		stminatk = Math.floor(stminatk * (101 + Math.max(skilllv[201], skilllv[2644]) * 2)/100);
		stmaxatk = Math.floor(stmaxatk * (101 + Math.max(skilllv[201], skilllv[2644]) * 2)/100);
		stplus = Math.floor(bonusdata[29] * (101 + Math.max(skilllv[201], skilllv[2644]) * 2)/100);
	}
	else if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
		stminatk = (Math.floor(stminatk * (skilllv[721]*10 + 50)/100) + Math.floor(stminatk_l * (skilllv[722]*10 + 30)/100));
		stmaxatk = (Math.floor(stmaxatk * (skilllv[721]*10 + 50)/100) + Math.floor(stmaxatk_l * (skilllv[722]*10 + 30)/100));
		stplus = (Math.floor(bonusdata[29] * (skilllv[721]*10 + 50)/100) + Math.floor(bonusdata[39] * (skilllv[721]*10 + 50)/100));
	}

	ChrAtk.innerHTML = stminatk + '-' + stmaxatk + '+' + stplus;
	ChrDef.innerHTML = def + '+' + minvd + '-' + maxvd;
	RealDef.innerHTML = '<img src="img2/space.gif" border="0" width="53" height="13" onMouseOver="showPopupInfo(2,0);" OnMouseOut="overDesc=0;setTimeout(\'HidePopUp()\', 500);">';
	ChrMatk.innerHTML = minmatk + '-' + maxmatk;
	ChrMdef.innerHTML = mdef + '+' + imdef;
	ChrHit.innerHTML = hit;
	ChrFlee.innerHTML = flee + '+' + lucky;
	ChrCritical.innerHTML = critical;
	ChrAspd.innerHTML = aspd;
	ChrStatusPoint.innerHTML = sstp + '(' + nstp + '/' + astp + ')';

	for (i = 0; i <= 5; i++) {
		if (!bonusdata[i + 11]) document.getElementById('Chr' + mname[i]).innerHTML = bstatus[i];
		else if (bonusdata[i + 11] < 0) document.getElementById('Chr' + mname[i]).innerHTML = bstatus[i] + '' + bonusdata[i + 11];
		else document.getElementById('Chr' + mname[i]).innerHTML = bstatus[i] + '+' + bonusdata[i + 11];
		document.getElementById('Chr' + mname[i] + 'Next').innerHTML = nstps[i];
	}

	if (!m) bbtshow();
}

// * Supportive status-related functions
function etcstatuslisting() {
	tmp3 = '';
	// Concentraion Potion
	tmp = '<table width="196" border="0" cellspacing="1" cellpadding="0" bgcolor="#000000">';
	tmp2 = tmp;
	tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(75,event.button);" onMouseUp="etcstatuscalc(75,-1);" onMouseOut="etcstatuscalc(75,-1);" onClick="return false"><img src="img2/icon/645.gif" width="24" height="24" border="0"></a></td><td width="169">Concentration Potion <span id="ChrSupportLvView75">'+supportonoff[support[75]]+'</span></td></tr>';
	// Awakening Potion
	if (blv>=40 && job!=4 && job!=17 && job!=29 && job!=43 && job!=55) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(76,event.button);" onMouseUp="etcstatuscalc(76,-1);" onMouseOut="etcstatuscalc(76,-1);" onClick="return false"><img src="img2/icon/656.gif" width="24" height="24" border="0"></a></td><td width="169">Awakening Potion <span id="ChrSupportLvView76">'+supportonoff[support[76]]+'</span></td></tr>';
	// Beserk Potion
	if (blv>=85 && (job==1 || job==2 || job==5 || job==7 || job==8 || job ==9 || job==14 || job==15 || job==18 || job==20 || job==27 || job==31 || job==32 || job ==33 || job==40 || job==41 || job==44 || job==53 || job==57 || job==58)) 
		tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(77,event.button);" onMouseUp="etcstatuscalc(77,-1);" onMouseOut="etcstatuscalc(77,-1);" onClick="return false"><img src="img2/icon/657.gif" width="24" height="24" border="0"></a></td><td width="169">Berserk Potion <span id="ChrSupportLvView77">'+supportonoff[support[77]]+'</span></td></tr>';
	// Poison Bottle
	if (job==45) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(128,event.button);" onMouseUp="etcstatuscalc(128,-1);" onMouseOut="etcstatuscalc(128,-1);" onClick="return false"><img src="img2/icon/678.gif" width="24" height="24" border="0"></a></td><td width="169">Poison Bottle <span id="ChrSupportLvView128">'+supportonoff[support[128]]+'</span></td></tr>';

	// Job Quest Skills - Job Specific
	if (jlv>=30 && (job-1)%13+1==1 && job != 66) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(78,event.button);" onMouseUp="etcstatuscalc(78,-1);" onMouseOut="etcstatuscalc(78,-1);" onClick="return false"><img src="img2/skill/sm_autoberserk.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][3]+' <span id="ChrSupportLvView78">'+supportonoff[support[78]]+'</span></td></tr>';
	if (jlv>=35 && (job-1)%13+1==2) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(79,event.button);" onMouseUp="etcstatuscalc(79,-1);" onMouseOut="etcstatuscalc(79,-1);" onClick="return false"><img src="img2/skill/mg_energycoat.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][4]+' <span id="ChrSupportLvView79">'+supportonoff[support[79]]+'</span></td></tr>';
	if (jlv>=15 && (job-1)%13+1==5) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(80,event.button);" onMouseUp="etcstatuscalc(80,-1);" onMouseOut="etcstatuscalc(80,-1);" onClick="return false"><img src="img2/skill/mc_loud.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][5]+' <span id="ChrSupportLvView80">'+supportonoff[support[80]]+'</span></td></tr>';
	if (job==66) {
		tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(102,event.button);" onMouseUp="etcstatuscalc(102,-1);" onMouseOut="etcstatuscalc(102,-1);" onClick="return false"><img src="img2/skillmale/'+supportself[1][22]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][27]+' <span id="ChrSupportLvView102">'+supportonoff[support[102]]+'</span></td></tr>';
		tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(103,event.button);" onMouseUp="etcstatuscalc(103,-1);" onMouseOut="etcstatuscalc(103,-1);" onClick="return false"><img src="img2/skillmale/'+supportself[1][23]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][28]+' <span id="ChrSupportLvView103">'+supportonoff[support[103]]+'</span></td></tr>';	
	}
	
	// Listed Skills
	for (i=6; i<=100; i++) {
		a = Math.max(Math.floor((i+75)/25)-1,0);
		if (a == 0 ) b = (i+75)%50;
		else b = (i+75)%25;
	  if (skilllv[supportself[1][i]]) {
		if (i==61 && blv >= 90 && job == 7)  tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+supportself[1][i]+');" src="img2/skillmale/'+supportself[1][i]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		if (supportst[a][b] != 1 && support[75+i] && i!=20) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+supportself[1][i]+');" src="img2/skillmale/'+supportself[1][i]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+support[75+i]+' '+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (i==20) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(95,event.button);" onMouseUp="etcstatuscalc(95,-1);" onMouseOut="etcstatuscalc(95,-1);" onClick="return false"><img onMouseOver="skviewdesc(0,1088);" src="img2/skillmale/1088.gif" width="24" height="24" border="0"></a></td><td width="169">Auto-spell <span id="ChrSupportLvView95">'+autospell[support[95]]+' '+supportonoff[support[95]]+'</span></td></tr>';
		else if (i==60) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+supportself[1][i]+');" src="img2/skillmale/'+supportself[1][i]+'.gif" width="24" height="24" border="0"></a></td><td width="169">Mild Wind <span id="ChrSupportLvView'+(75+i)+'">'+mildwind[support[135]]+'</span></td></tr>';
		else if (i==55 && skilllv[supportself[1][i]] >= 7) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+supportself[1][i]+');" src="img2/skillmale/'+supportself[1][i]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (skilllv[supportself[1][i]] && i!=61) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+supportself[1][i]+');" src="img2/skillmale/'+supportself[1][i]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
	  }
	  else {
	  	if ((i==71 && (job==30 || job==56 || (job==20 && skilllv[-supportself[1][i]]))) || (i == 74 && (job==31 || job==57)) || (i == 77 && (job==30 || job==56)) || (i == 78 && (job==17 || job==43)) || (i == 79 && (job==28 || job==54))
	  	   || (i == 80 && skilllv[1051]) || (i == 82 && skilllv[725]) || (i == 83 && (job==32 || job==58)) || (i == 85 && skilllv[602]))
			tmp3 += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+(-supportself[1][i])+');" src="img2/skillmale/'+(-supportself[1][i])+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (i==75 && blv >= 85) tmp3 += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,1281);" src="img2/skill/am_berserkpitcher.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (i == 81 && skilllv[526]==10) tmp3 += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,1290);" src="img2/skill/kn_onehand.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (i == 96 && (job==15 || job==41)) tmp3 += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,1288);" src="img2/skill/wz_sight_blaster.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (i == 97 && (job==45 || job==19) && skilllv[725]) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img src="img2/skill/as_sonic_accel.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (i == 100 && job==66 && jlv >= 70) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img src="img2/skill/sn_super.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		if (i == 84 && AdvOn && blv < 70 && (job>=1 && job<=6)) tmp3 += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc('+(75+i)+',event.button);" onMouseUp="etcstatuscalc('+(75+i)+',-1);" onMouseOut="etcstatuscalc('+(75+i)+',-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+(-supportself[1][i])+');" src="img2/skillmale/'+(-supportself[1][i])+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][i]+' <span id="ChrSupportLvView'+(75+i)+'">'+supportonoff[support[75+i]]+'</span></td></tr>';
		else if (i == 84 && AdvOn && (job>=1 && job<=6)) kls(159);
	  }}

	if (!skilllv[204] && (slot[8][0] == 4044 || slot[9][0] == 4044)) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(83,event.button);" onMouseUp="etcstatuscalc(83,-1);" onMouseOut="etcstatuscalc(83,-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+supportself[1][8]+');" src="img2/skillmale/'+supportself[1][8]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][8]+' <span id="ChrSupportLvView'+(83)+'"></span></td></tr>';
	if (!skilllv[724] && slot[6][0] == 4088) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onMouseDown="etcstatuscalc(89,event.button);" onMouseUp="etcstatuscalc(89,-1);" onMouseOut="etcstatuscalc(89,-1);" onClick="return false"><img onMouseOver="skviewdesc(0,'+supportself[1][14]+');" src="img2/skillmale/'+supportself[1][14]+'.gif" width="24" height="24" border="0"></a></td><td width="169">'+supportself[0][14]+' <span id="ChrSupportLvView'+(89)+'"></span></td></tr>';
	// Push Cart
	if ((job-1)%13+1 == 5 && skilllv[164]) tmp += '<tr bgcolor="#FFFFFF"><td width="24"><a href="#" onClick="opencart();"><img src="img2/skillmale/164.gif" height="24" width="24" border="0"></a></td><td width="169"><a href="#" onClick="opencart();">Push Cart Options</a></td></tr>';
	
	tmp += '</table>';
	if (tmp3) tmp2 += tmp3+'</table>';
	else tmp2 = '';
	
	SelfEtcStatus.innerHTML = tmp;
	ClassSpecStatus.innerHTML = tmp2;
}
function etcstatuscalc(l, m) {
	clearTimeout(i0);
	a = Math.max(Math.floor(l/25)-1,0);
	if (a == 0) b = l%50;
	else b = l%25;
	if(m==0 && browserspc) {m++;}
	if (m == 1) {
		if (keypressed==96) support[l] = supportst[a][b];
		else support[l]++;
		support[l] = Math.min(support[l], supportst[a][b]);
		if (((l >= 81 && l < 122) || l > 129) && supportself[1][l-75] > 1 && l != 95 && l!=102 && l!=103 && l!=111 && l!=112 && 
			l!=113 && l!=116 && l!=117 && l!=118 && l!=119 && l!=120 && l!=131 && l!=162)
			 support[l] = Math.min(support[l], skilllv[supportself[1][l-75]]);
	}
	if (m == 2) {
		if (keypressed==96) support[l] = 0;
		else support[l]--;
		support[l] = Math.max(support[l], 0);
	}
	if (m <= 0) {
		t = 0;
		return;
	}
	etcstatuscheck(l);

	if (supportst[a][b] != 1) {
		if (l==95) document.getElementById('ChrSupportLvView' + l).innerHTML = '' + autospell[support[l]] + ' <font color="#4682B4">On</font>';
		else if (l==135) document.getElementById('ChrSupportLvView' + l).innerHTML = '' + mildwind[support[l]];
		else document.getElementById('ChrSupportLvView' + l).innerHTML = '' + support[l] + ' <font color="#4682B4">On</font>';
	}
	else document.getElementById('ChrSupportLvView' + l).innerHTML = '<font color="#4682B4">On</font>';
	if (!support[l]) document.getElementById('ChrSupportLvView' + l).innerHTML = supoff;

	readbonus(0);
	statuscalc(0);
	if (!t) i0 = setTimeout("etcstatuscalc('" + l + "', " + m + ")", 250);
	else if (t) i0 = setTimeout("etcstatuscalc('" + l + "', " + m + ")", 50);
	t++;
	return;
}

function itemstatuscalc(l,m) {
	if(m==0 && browserspc) {m++;}
	if (m == 1) isupport[l] = 1;
	else if (m == 2) isupport[l] = 0;
	else return;
		
	itemstatuscheck(l);
	
	if(isupport[l] == 1) document.getElementById('ItmSupportLvView' + l).innerHTML = '<font color="#4682B4">On</font>';
	else document.getElementById('ItmSupportLvView' + l).innerHTML = supoff;
	
	readbonus(0);
	statuscalc(0);
	return;
}

function itemstatuscheck(l) {
	k=l;
	rss(1,0,1,2,3,4,5,6,7,8,9);
	rss(1,10,11,12,13,14,15,16,17,18,19);
	rss(1,20,21,22,23,24,25,26,27,28,29);
	rss(1,30,31,32,33,34,35,36,37,38,39);
	rss(1,40,41,42,43,44,45,46,47,48,49);
	rss(1,71,72,73,74,75,76);
}

function etcstatuscheck(l) {
	k=l;
	rss(0,0,1,17,18,19);
	rss(0,0,1,17,19,117);
	rss(0,7,16,20,21,22,23,129,135);
	rss(0,24,25,26,27);
	rss(0,28,29,30);
	rss(0,2,62);
	rss(0,15,87);
	rss(0,4,54);
	rss(0,2,64);
	rss(0,64,80);
	rss(0,64,82,84,86,94);
	rss(0,61,78);
	rss(0,8,51,52);
	rss(0,13,25,84,86,94,137,138,139,151,156);
	rss(0,75,76,77,150);
	rss(0,10,112);
	rss(0,50,116);
	rss(0,51,116);
	rss(0,52,116);
	rss(0,53,116);
	rss(0,54,116);
	rss(0,55,116);
	rss(0,56,116);
	rss(0,57,116);
	rss(0,58,116);
	rss(0,140,141,142);
	rss(0,143,144,145);
	rss(0,164,165);
	eqetcscheck();
}
function eqetcscheck() {
	if (itemdata[eq[4]][1] != 16 && itemdata[eq[4]][1] != 17 && itemdata[eq[4]][1] != 20) kls(13,86);
	if (itemdata[eq[4]][1] != 12) kls(156);
	if (itemdata[eq[4]][1] != 13) kls(84,105);
	if (itemdata[eq[4]][1] != 19) kls(94);
	if (itemdata[eq[4]][1] == 24) kls(25,151);
	if (itemdata[eq[4]][1] >= 32 && itemdata[eq[4]][1] <= 36) kls(25);
	if (itemdata[eq[4]][1] == 35) kls(38);
	if (itemdata[eq[4]][1] != 12 && itemdata[eq[4]][1] != 13 && itemdata[eq[4]][1] != 18 && itemdata[eq[4]][1] != 19) kls(104);
	if (bonusdata[4] == 9) support[4] = 0;
	if (bonusdata[4] != 9) kls(63);
	if (itemdata[eq[4]][1] != 11) kls(130);
	if (itemdata[eq[4]][1] != 36) kls(161);
	if (AdvOn && (job>=1 && job<=6) && support[159] && blv > 70) kls(159);
}
function rss() {
	argr=rss.arguments;
	for (i=1; i<argr.length; i++) if (k==argr[i]) for (j=1; j<argr.length; j++) { if (i!=j) kls(argr[0],argr[j]); }
}
function kls() {
	argk=kls.arguments;
	for (l=1; l<argk.length; l++) if ((argk[0] == 0 && support[argk[l]]) || (argk[0] == 1 && isupport[argk[l]])) {
		tmp = '';
		if(argk[0] == 0) {
			support[argk[l]] = 0;
			tmp = 'Chr';
		}
		else {
			isupport[argk[l]] = 0;
			tmp = 'Itm';	
		}
		if(argk) document.getElementById(tmp+'SupportLvView'+argk[l]).innerHTML = supoff;

	}
}
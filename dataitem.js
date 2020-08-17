/* GOD FIX ME
*Database Order
Arrangement Number: Official database number correspondence [not anymore /heh]
0: Name
1:Group (0: Shield, 		 1: Armor,	    	 2: Shoes, 
  	 3: Garment, 		 4: Accessory,		 5: Upper Head, 
	 6: Middle Head,	 7: Lower Head,		 8: Upper Middle Head,
	 9: Middle Lower Head	10: Entire Head		11: Unarmed, 
	12: One-Handed Sword    13: Two-Handed Sword	14: Dagger
	15: Katar		16: One-Handed Axe	17: Two-Handed Axe
	18: One-Handed Spear	19: Two-Handed Spear	20: Club
	21: Book		22: Staff		23: Two-Handed Staff,
	24: Bow			25: Arrow		26: Claw
	27: Instrument		28: Whip		
	
	29: Shuriken		30: Kunai		31: Huuma Shuriken
	32: Pistol		33: Rifle		34: Shotgun
	35: Grenade Launcher	36: Gatling Gun		37: Bullet
	38: Spheres
	
	39: Headgear Card
	40: Armor Card		41: Weapon Card		42: Shield Card
	43: Garment Card	44: Shoes Card		45: Accessory Card
	46: Forging Elements	47: Upper Lower Head	48: HP Recovery
	 
2: Weight
3: Slot
4: Price
5: Weapon Lv
6: Required Lv
7: Effect 1
8: Effect 2
9: Effect 3
10: Effect4
11: Effect 5
12: Effect 6
13: Effect 7
14: Effect 8
15: Level of Effect 1
16: Level of Effect 2
17: Level of Effect 3
18: Level of Effect 4
19: Level of Effect 5
20: Level of Effect 6
21: Level of Effect 7
22: Level of Effect 8
23: Sex (0: Both, 1: Male, 2: Female)
24: Upgradable (0: No, 1: Yes)
25: Number of Attack Skills
25+[2X]: Attack Skil List [ID]
25+[2X+1]: Attack Skill Lv


itemdata[i] = new Array('', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
*/

itemdata = new Array(5120);

// Forge List
mpnum = new Array(1101,1104,1107,1110,1113,1122,1119,1123,1126,1129,1201,1203,1205,1207,1209,1211,1213,1215,1116,1151,1154,1157,1160,1163,1301,1351,1354,1357,1360,1501,1504,1507,1510,1519,1513,1516,1522,1401,1404,1407,1451,1454,1457,1460,1463,1410,1801,1803,1805,1807,1809,1811);

snWeapList = new Array(0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

/*
* Item Wear Array
0: An on/off array to aid combo checks...
1: Replace old Data [combo checks]
*/
itemwear = new Array(6000);

for (i = 0; i <= 6000; i++) { 
	itemdata[i] = new Array('', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	itemwear[i] = new Array(0, 0);
}

//Initial Slots
itemdata[0] = new Array('<font color="#898A8A">Upper Head</font>', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1] = new Array('<font color="#898A8A">Middle Head</font>', 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2] = new Array('<font color="#898A8A">Lower Head</font>', 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3] = new Array('<font color="#898A8A">Body</font>', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4] = new Array('<font color="#898A8A">Right Hand</font>', 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5] = new Array('<font color="#898A8A">Left Hand</font>', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[6] = new Array('<font color="#898A8A">Garment</font>', 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[7] = new Array('<font color="#898A8A">Shoes</font>', 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[8] = new Array('<font color="#898A8A">Accessory</font>', 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[9] = new Array('<font color="#898A8A">Accessory</font>', 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[10] = new Array('<font color="#898A8A">Empty Slot</font>', 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[11] = new Array('<font color="#898A8A">Empty Slot</font>', 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[12] = new Array('<font color="#898A8A">Empty Slot</font>', 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[13] = new Array('<font color="#898A8A">Empty Slot</font>', 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[14] = new Array('<font color="#898A8A">Empty Slot</font>', 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[15] = new Array('<font color="#898A8A">Empty Slot</font>', 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[16] = new Array('<font color="#898A8A">Empty Slot</font>', 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[17] = new Array('Remove Item', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);


// Shield
itemdata[2101] = new Array('Guard', 0, 30, 0, 500, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2102] = new Array('Guard', 0, 30, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2103] = new Array('Buckler', 0, 60, 0, 14000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2104] = new Array('Buckler', 0, 60, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2105] = new Array('Shield', 0, 130, 0, 56000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2106] = new Array('Shield', 0, 130, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2107] = new Array('Mirror Shield', 0, 100, 0, 60000, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2108] = new Array('Mirror Shield', 0, 100, 1, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2109] = new Array('Memory Book', 0, 100, 0, 0, 0, 1, 2, 6, 14, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2110] = new Array('Holy Guard', 0, 140, 0, 0, 0, 68, 2, 6, 13, 0, 0, 0, 0, 0, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2111] = new Array('Sacred Mission', 0, 140, 0, 0, 0, 83, 2, 6, 13, 14, 344, 0, 0, 0, 5, 3, 3, 2, 0, 0, 0, 0, 0, 1, 0);
itemdata[2112] = new Array('Novice Guard', 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2113] = new Array('Angelic Guard', 0, 0, 1, 0, 0, 1, 2, 117, 0, 0, 0, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2114] = new Array('Novice Shield', 0, 100, 1, 0, 0, 40, 2, 129, 101, 0, 0, 0, 0, 0, 3, 20, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2115] = new Array('Stone Buckler', 0, 150, 1, 0, 0, 65, 2, 101, 326, 2, 0, 0, 0, 0, 4, 5, 1, 5, 0, 0, 0, 0, 0, 1, 0);
itemdata[2116] = new Array('Valkyrja\'s Shield', 0, 50, 1, 0, 0, 65, 2, 6, 102, 104, 108, 110, 0, 0, 3, 5, 20, 20, 20, 20, 0, 0, 0, 1, 0);

// Armor
itemdata[2301] = new Array('Cotton Shirt', 1, 10, 0, 10, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2302] = new Array('Cotton Shirt', 1, 10, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2303] = new Array('Jacket', 1, 20, 0, 200, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2304] = new Array('Leather Jacket', 1, 20, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2305] = new Array('Adventure Suit', 1, 30, 0, 1000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2306] = new Array('Adventure Suit', 1, 30, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2307] = new Array('Mantle', 1, 60, 0, 10000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2308] = new Array('Mantle', 1, 60, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2309] = new Array('Coat', 1, 120, 0, 22000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2310] = new Array('Coat', 1, 120, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2311] = new Array('Mink Coat', 1, 230, 1, 0, 0, 30, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2312] = new Array('Padded Armour', 1, 250, 0, 48000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2313] = new Array('Padded Armour', 1, 250, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2314] = new Array('Chain Mail', 1, 330, 0, 65000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2315] = new Array('Chain Mail', 1, 330, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2316] = new Array('Full Plate', 1, 450, 0, 80000, 0, 40, 2, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2317] = new Array('Full Plate', 1, 450, 1, 0, 0, 40, 2, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2318] = new Array('Lord\'s Clothes', 1, 250, 1, 0, 0, 70, 2, 6, 14, 0, 0, 0, 0, 0, 8, 5, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2319] = new Array('Glittering Jacket', 1, 250, 1, 0, 0, 60, 2, 6, 154, 0, 0, 0, 0, 0, 7, 5, 3, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2320] = new Array('Formal Suit', 1, 30, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2321] = new Array('Silk Robe', 1, 40, 0, 8000, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 3, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2322] = new Array('Silk Robe', 1, 40, 1, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 3, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2323] = new Array('Scapulare', 1, 40, 0, 6500, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2324] = new Array('Scapulare', 1, 40, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2325] = new Array('Saint\'s Robe', 1, 60, 0, 54000, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 6, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2326] = new Array('Saint\'s Robe', 1, 60, 1, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 6, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2327] = new Array('Holy Robe', 1, 170, 0, 0, 0, 60, 2, 6, 108, 117, 0, 0, 0, 0, 7, 5, 10, 15, 0, 0, 0, 0, 0, 1, 0);
itemdata[2328] = new Array('Wooden Mail', 1, 100, 0, 5500, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2329] = new Array('Wooden Mail', 1, 100, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2330] = new Array('Tights', 1, 50, 0, 71000, 0, 45, 2, 15, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2331] = new Array('Tights', 1, 50, 1, 0, 0, 45, 2, 15, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2332] = new Array('Silver Robe', 1, 50, 0, 7000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2333] = new Array('Silver Robe', 1, 50, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2334] = new Array('Mage Coat', 1, 60, 0, 0, 0, 50, 2, 6, 14, 0, 0, 0, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2335] = new Array('Thief Clothes', 1, 10, 0, 0, 0, 1, 2, 12, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2336] = new Array('Thief Clothes', 1, 10, 1, 0, 0, 1, 2, 12, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2337] = new Array('Ninja Suit', 1, 0, 0, 0, 0, 1, 2, 6, 12, 0, 0, 0, 0, 0, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2338] = new Array('Wedding Dress', 1, 50, 0, 43000, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2339] = new Array('Pantie', 1, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2340] = new Array('Novice Breastplate', 1, 50, 1, 89000, 0, 10, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2341] = new Array('Legion Plate Armour', 1, 550, 0, 94000, 0, 70, 2, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2342] = new Array('Legion Plate Armour', 1, 550, 1, 0, 0, 70, 2, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2343] = new Array('Robe of Cast', 1, 110, 0, 0, 0, 75, 2, 24, 0, 0, 0, 0, 0, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2344] = new Array('Lucius Fierce Armor of Volcano', 1, 220, 0, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2345] = new Array('Lucius Fierce Armor of Volcano', 1, 220, 1, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2346] = new Array('Saphiens Armor of Ocean', 1, 220, 0, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2347] = new Array('Saphiens Armor of Ocean', 1, 220, 1, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2348] = new Array('Aebecees Raging Typhoon Armor', 1, 220, 0, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2349] = new Array('Aebecees Raging Typhoon Armor', 1, 220, 1, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2350] = new Array('Claytos Cracking Earth Armor', 1, 220, 0, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2351] = new Array('Claytos Cracking Earth Armor', 1, 220, 1, 0, 0, 45, 2, 4, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2352] = new Array('Tattered Novice Ninja Suit', 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2353] = new Array('Blessed Holy Robe', 1, 250, 1, 0, 0, 70, 2, 6, 204, 0, 0, 0, 0, 0, 5, 5, 80, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2354] = new Array('Goibne\'s Armor', 1, 0, 0, 0, 0, 1, 2, 9, 13, 0, 0, 0, 0, 0, 7, 10, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2356] = new Array('Odin\'s Blessing', 1, 250, 1, 0, 0, 65, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2357] = new Array('Angelic Protection', 1, 0, 1, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 4, 20, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2358] = new Array('Valkyrian Armor', 1, 0, 1, 0, 0, 1, 2, 42, 344, 343, 0, 0, 0, 0, 6, 1, 100, 1, 0, 0, 0, 0, 0, 1, 0);

// Shoes
itemdata[2401] = new Array('Sandals', 2, 20, 0, 400, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2402] = new Array('Sandals', 2, 20, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2403] = new Array('Shoes', 2, 40, 0, 3500, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2404] = new Array('Shoes', 2, 40, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2405] = new Array('Boots', 2, 60, 0, 18000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2406] = new Array('Boots', 2, 60, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2407] = new Array('Crystal Pumps', 2, 10, 0, 0, 0, 1, 2, 6, 16, 0, 0, 0, 0, 0, 0, 10, 5, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2408] = new Array('Shackles', 2, 300, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2409] = new Array('High Heels', 2, 60, 0, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2410] = new Array('Sleipnir', 2, 350, 0, 0, 0, 95, 2, 6, 9, 10, 253, 0, 0, 0, 5, 10, 10, 10, 15, 0, 0, 0, 0, 1, 0);
itemdata[2411] = new Array('Greaves', 2, 75, 0, 0, 0, 65, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2412] = new Array('Greaves', 2, 75, 1, 0, 0, 65, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2413] = new Array('Safety Boots', 2, 35, 0, 0, 0, 30, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2414] = new Array('Bunny Slipper', 2, 30, 0, 0, 0, 30, 2, 16, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[2415] = new Array('Novice Slippers', 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2416] = new Array('Angel\'s Reincarnation', 2, 70, 1, 0, 0, 54, 2, 7, 0, 0, 0, 0, 0, 0, 4, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2417] = new Array('Fricco\'s Shoes', 2, 50, 0, 0, 0, 65, 2, 12, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2418] = new Array('Goibne\'s Greaves', 2, 70, 0, 0, 0, 54, 2, 6, 9, 10, 0, 0, 0, 0, 4, 3, 5, 5, 0, 0, 0, 0, 0, 1, 0);
itemdata[2419] = new Array('Novice Shoes', 2, 50, 1, 0, 0, 40, 2, 9, 0, 0, 0, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2420] = new Array('Valkyrian Shoes', 2, 0, 1, 0, 0, 1, 2, 344, 343, 0, 0, 0, 0, 0, 4, 100, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2421] = new Array('Vidar\'s Boots', 2, 65, 0, 0, 0, 65, 2, 9, 10, 0, 0, 0, 0, 0, 4, 9, 9, 0, 0, 0, 0, 0, 0, 1, 0);

// Garment
itemdata[2501] = new Array('Hood', 3, 20, 0, 1000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2502] = new Array('Hood', 3, 20, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2503] = new Array('Muffler', 3, 40, 0, 1000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2504] = new Array('Muffler', 3, 40, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2505] = new Array('Manteau', 3, 60, 0, 32000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2506] = new Array('Manteau', 3, 60, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2507] = new Array('Ancient Cape', 3, 60, 0, 0, 0, 40, 2, 12, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2508] = new Array('Ragamuffin Manteau', 3, 50, 0, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 1, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2509] = new Array('Survivor\'s Manteau', 3, 55, 0, 0, 0, 75, 2, 13, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2510] = new Array('Somber Novice Hood', 3, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2511] = new Array('Eagle Wing', 3, 30, 1, 0, 0, 85, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2512] = new Array('Falcon Muffler', 3, 40, 0, 0, 0, 65, 2, 18, 21, 0, 0, 0, 0, 0, 3, 15, 5, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2513] = new Array('Goibne\'s Spaulders', 3, 70, 0, 0, 0, 54, 2, 6, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2514] = new Array('Morpheus\'s Shawl', 3, 60, 0, 0, 0, 33, 2, 6, 10, 0, 0, 0, 0, 0, 3, 3, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2515] = new Array('Morrigane\'s Manteau', 3, 0, 0, 0, 0, 1, 2, 16, 21, 0, 0, 0, 0, 0, 3, 2, 8, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2516] = new Array('Novice Manteau', 3, 50, 1, 0, 0, 40, 2, 101, 0, 0, 0, 0, 0, 0, 2, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2517] = new Array('Pauldron', 3, 80, 1, 0, 0, 80, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2518] = new Array('Undershirt', 3, 0, 0, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2519] = new Array('Vali\'s Manteau', 3, 60, 0, 0, 0, 65, 2, 101, 0, 0, 0, 0, 0, 0, 4, 15, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2520] = new Array('Valkyrian Manteau', 3, 0, 1, 0, 0, 1, 2, 344, 343, 0, 0, 0, 0, 0, 3, 100, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2521] = new Array('Angelic Cardigan', 3, 0, 1, 0, 0, 1, 2, 303, 0, 0, 0, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2522] = new Array('Heavenly Maiden Robe', 3, 50, 1, 0, 0, 80, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Accessory
itemdata[2601] = new Array('Ring', 4, 10, 0, 0, 0, 20, 2, 11, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2602] = new Array('Earring', 4, 10, 0, 0, 0, 20, 2, 14, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2603] = new Array('Necklace', 4, 10, 0, 0, 0, 20, 2, 13, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2604] = new Array('Glove', 4, 10, 0, 0, 0, 20, 2, 15, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2605] = new Array('Brooch', 4, 10, 0, 0, 0, 20, 2, 12, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2607] = new Array('Clip', 4, 10, 1, 0, 0, 1, 2, 8, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2608] = new Array('Rosary', 4, 10, 0, 15000, 0, 20, 2, 6, 16, 0, 0, 0, 0, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2609] = new Array('Skull Ring', 4, 10, 0, 10000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2610] = new Array('Gold Ring', 4, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2611] = new Array('Silver Ring', 4, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2612] = new Array('Flower Ring', 4, 10, 0, 1500, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2613] = new Array('Diamond Ring', 4, 10, 0, 45000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2614] = new Array('Eye of Dullahan', 4, 10, 0, 0, 0, 50, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2615] = new Array('Safety Ring', 4, 10, 0, 0, 0, 40, 2, 6, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2616] = new Array('Critical Ring', 4, 5, 0, 0, 0, 40, 2, 22, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2617] = new Array('Celebrant\'s Mitten', 4, 10, 0, 0, 0, 35, 2, 14, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2618] = new Array('Matyr\'s Leash', 4, 10, 0, 0, 0, 35, 2, 12, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2619] = new Array('Bow Thimble', 4, 10, 0, 0, 0, 65, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2620] = new Array('Rogues Treasure', 4, 10, 0, 0, 0, 70, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2621] = new Array('Ring', 4, 20, 1, 0, 0, 90, 2, 11, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2622] = new Array('Earring', 4, 20, 1, 0, 0, 90, 2, 14, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2623] = new Array('Necklace', 4, 20, 1, 0, 0, 90, 2, 13, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2624] = new Array('Glove', 4, 20, 1, 0, 0, 90, 2, 15, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2625] = new Array('Brooch', 4, 20, 1, 0, 0, 90, 2, 12, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2626] = new Array('Rosary', 4, 20, 1, 0, 0, 90, 2, 6, 16, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2627] = new Array('Belt', 4, 120, 1, 0, 0, 25, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2628] = new Array('Novice Armlet', 4, 20, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2629] = new Array('Megingjard', 4, 800, 0, 0, 0, 90, 2, 11, 0, 0, 0, 0, 0, 0, 2, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2630] = new Array('Brisingamen', 4, 150, 0, 0, 0, 94, 2, 6, 11, 12, 13, 14, 16, 0, 1, 5, 6, 6, 6, 6, 10, 0, 0, 0, 0);
itemdata[2631] = new Array('Anniversary Ring', 4, 1, 0, 0, 0, 1, 11, 12, 13, 14, 15, 16, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0);
itemdata[2632] = new Array('Kafra Ring', 4, 20, 0, 0, 0, 1, 2, 11, 12, 14, 16, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0);
itemdata[2633] = new Array('Eye of Dullahan', 4, 10, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2634] = new Array('Occult Incense', 4, 10, 0, 0, 0, 1, 12, 14, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2635] = new Array('Rogues Treasure', 4, 10, 0, 0, 0, 70, 312, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2636] = new Array('Sacred Incense', 4, 10, 0, 0, 0, 1, 11, 16, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2637] = new Array('Silver Christmas Ring', 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2638] = new Array('Gold Christmas Ring', 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2639] = new Array('Wedding Ring', 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2640] = new Array('Nile Rose', 4, 0, 1, 0, 0, 1, 7, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2641] = new Array('Armor Charm', 4, 100, 0, 0, 0, 1, 2, 7, 0, 0, 0, 0, 0, 0, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2642] = new Array('Bloodied Shackle Ball', 4, 400, 0, 0, 0, 1, 1, 312, 312, 0, 0, 0, 0, 0, 100, 20214, 20339, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2643] = new Array('Exorcising Ring', 4, 50, 0, 0, 0, 60, 329, 313, 0, 329, 313, 0, 0, 0, 1, 5, 0, 6, 5, 0, 0, 0, 0, 0, 0);
itemdata[2644] = new Array('Goddess of Fortune\'s Cursed Brooch', 4, 10, 0, 0, 0, 40, 22, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2645] = new Array('Laboratory Permit', 4, 10, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2646] = new Array('Morpheus\'s Bracelet', 4, 10, 0, 0, 0, 33, 14, 10, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2647] = new Array('Morpheus\'s Ring', 4, 10, 0, 0, 0, 33, 14, 10, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2648] = new Array('Morrigane\'s Belt', 4, 20, 0, 0, 0, 61, 1, 22, 0, 0, 0, 0, 0, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2649] = new Array('Morrigane\'s Pendant', 4, 20, 0, 0, 0, 61, 11, 22, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2650] = new Array('Renown Archer\'s Gloves', 4, 30, 0, 0, 0, 60, 15, 19, 22, 0, 0, 0, 0, 0, 1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2651] = new Array('Shinobi Sash', 4, 30, 0, 0, 0, 30, 6, 11, 12, 301, 0, 0, 0, 0, 1, 1, 1, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[2652] = new Array('The Sign', 4, 0, 0, 0, 0, 1, 36, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2653] = new Array('Vesper Core 01', 4, 0, 0, 0, 0, 1, 2, 6, 10, 14, 0, 0, 0, 0, 1, 3, 5, 2, 0, 0, 0, 0, 0, 0, 0);
itemdata[2654] = new Array('Vesper Core 02', 4, 0, 0, 0, 0, 1, 1, 2, 6, 11, 0, 0, 0, 0, 10, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0);
itemdata[2655] = new Array('Vesper Core 03', 4, 0, 0, 0, 0, 1, 2, 6, 12, 18, 0, 0, 0, 0, 1, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0);
itemdata[2656] = new Array('Vesper Core 04', 4, 0, 0, 0, 0, 1, 2, 6, 15, 19, 0, 0, 0, 0, 1, 3, 3, 10, 0, 0, 0, 0, 0, 0, 0);

// Upper Head
itemdata[2206] = new Array('Wedding Veil', 5, 10, 0, 23000, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2207] = new Array('Fancy Flower', 5, 10, 0, 0, 0, 1, 2, 114, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2208] = new Array('Ribbon', 5, 10, 0, 800, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2209] = new Array('Ribbon', 5, 10, 1, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2210] = new Array('Hair Band', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2211] = new Array('Bandana', 5, 10, 0, 400, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2213] = new Array('Kitty Band', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2214] = new Array('Bunny Band', 5, 10, 0, 0, 0, 1, 2, 16, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2215] = new Array('Flower band', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2216] = new Array('Biretta', 5, 10, 0, 9000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2217] = new Array('Biretta', 5, 10, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2220] = new Array('Hat', 5, 20, 0, 1000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2221] = new Array('Hat', 5, 20, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2222] = new Array('Turban', 5, 30, 0, 4500, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2223] = new Array('Turban', 5, 30, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2226] = new Array('Cap', 5, 40, 0, 12000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2227] = new Array('Cap', 5, 40, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2228] = new Array('Helm', 5, 60, 0, 44000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2229] = new Array('Helm', 5, 60, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2230] = new Array('Gemmed Sallet', 5, 50, 0, 50000, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2231] = new Array('Gemmed Sallet', 5, 50, 1, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2232] = new Array('Circlet', 5, 30, 0, 7500, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2233] = new Array('Circlet', 5, 30, 1, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2234] = new Array('Tiara', 5, 30, 0, 0, 0, 45, 2, 14, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2235] = new Array('Crown', 5, 40, 0, 0, 0, 45, 2, 14, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2236] = new Array('Santa Hat', 5, 10, 0, 0, 0, 1, 2, 6, 16, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2244] = new Array('Big Ribbon', 5, 20, 0, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2245] = new Array('Sweet Gent', 5, 40, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2246] = new Array('Golden Gear', 5, 90, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2247] = new Array('Romantic Gent', 5, 40, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2248] = new Array('Western Grace', 5, 40, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2249] = new Array('Coronet', 5, 30, 0, 0, 0, 1, 2, 14, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2250] = new Array('Cute Ribbon', 5, 10, 0, 0, 0, 1, 2, 8, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2251] = new Array('Monk Hat', 5, 10, 0, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2252] = new Array('Wizard Hat', 5, 30, 0, 0, 0, 1, 2, 8, 0, 0, 0, 0, 0, 0, 4, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2253] = new Array('Sunflower', 5, 10, 0, 0, 0, 1, 2, 115, 0, 0, 0, 0, 0, 0, 1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2254] = new Array('Angel Wing', 5, 10, 0, 0, 0, 1, 2, 6, 12, 16, 117, 0, 0, 0, 2, 3, 1, 1, 3, 0, 0, 0, 0, 1, 0);
itemdata[2255] = new Array('Evil Wing', 5, 10, 0, 0, 0, 1, 2, 6, 11, 119, 0, 0, 0, 0, 3, 2, 1, 3, 0, 0, 0, 0, 0, 1, 0);
itemdata[2256] = new Array('Majestic Goat', 5, 80, 0, 0, 0, 1, 2, 11, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2257] = new Array('Unicorn Horn', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2258] = new Array('Spiky Band', 5, 100, 0, 0, 0, 50, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2259] = new Array('Mini Propeller', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2261] = new Array('Army Cap', 5, 40, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2271] = new Array('Jack be Dandy', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2272] = new Array('Stop Post', 5, 40, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2273] = new Array('Doctor Band', 5, 10, 0, 0, 0, 1, 2, 14, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2274] = new Array('Ghost Bandana', 5, 10, 0, 0, 0, 1, 2, 12, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2275] = new Array('Red Bandana', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2277] = new Array('Nurse Cap', 5, 10, 0, 0, 0, 1, 2, 14, 16, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2279] = new Array('Bomb Wick', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2280] = new Array('Sakkat', 5, 30, 0, 0, 0, 1, 2, 12, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2282] = new Array('Halo', 5, 10, 0, 0, 0, 1, 2, 107, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2283] = new Array('Ear Muffs', 5, 20, 0, 0, 0, 1, 2, 202, 0, 0, 0, 0, 0, 0, 3, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2284] = new Array('Antlers', 5, 50, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2285] = new Array('Apple of Archer', 5, 20, 0, 0, 0, 30, 2, 15, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2287] = new Array('Pirate Bandana', 5, 10, 0, 0, 0, 1, 2, 11, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2289] = new Array('Poo Poo Hat', 5, 70, 0, 0, 0, 1, 2, 118, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2290] = new Array('Funeral Hat', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2293] = new Array('Pretend Murdered', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2294] = new Array('Stellar', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2298] = new Array('Green Feeler', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2299] = new Array('Orc Helm', 5, 50, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5001] = new Array('Headset', 5, 20, 0, 0, 0, 1, 2, 202, 0, 0, 0, 0, 0, 0, 3, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5002] = new Array('Jewel Crown', 5, 60, 0, 0, 0, 60, 2, 6, 14, 16, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[5003] = new Array('Joker Jester', 5, 10, 0, 0, 0, 1, 2, 6, 16, 0, 0, 0, 0, 0, 1, 5, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5007] = new Array('Grand Circlet', 5, 20, 0, 0, 0, 55, 2, 6, 11, 14, 16, 0, 0, 0, 3, 4, 1, 1, 1, 0, 0, 0, 0, 1, 0);
itemdata[5008] = new Array('Puppy Love', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5009] = new Array('Safety Helm', 5, 50, 0, 0, 0, 1, 2, 6, 344, 0, 0, 0, 0, 0, 3, 3, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5010] = new Array('Indian Fillet', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5011] = new Array('Aerial', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5012] = new Array('PhD Hat', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5013] = new Array('Lord Kaho\'s Horn', 5, 10, 0, 0, 0, 1, 2, 6, 11, 12, 13, 14, 16, 0, 5, 10, 5, 10, 10, 5, 20, 0, 0, 1, 0);
itemdata[5015] = new Array('Egg Shell', 5, 20, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5016] = new Array('Boys Cap', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5017] = new Array('Bone Helm', 5, 80, 0, 0, 0, 70, 2, 108, 0, 0, 0, 0, 0, 0, 7, -15, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5018] = new Array('Feather Bonnet', 5, 30, 0, 0, 0, 1, 2, 12, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5019] = new Array('Corsair', 5, 50, 0, 0, 0, 1, 2, 13, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5020] = new Array('Kafra Band', 5, 50, 0, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5021] = new Array('Grief for Greed', 5, 120, 0, 0, 0, 38, 2, 14, 15, 0, 0, 0, 0, 0, 4, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5023] = new Array('Parcel Hat', 5, 100, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5024] = new Array('Cake Hat', 5, 150, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5025] = new Array('Helm of Angel', 5, 160, 0, 0, 0, 74, 2, 6, 12, 16, 0, 0, 0, 0, 5, 3, 1, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[5026] = new Array('Chef Hat', 5, 30, 0, 0, 0, 50, 2, 15, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5027] = new Array('Mage Hat', 5, 30, 0, 0, 0, 1, 2, 8, 14, 0, 0, 0, 0, 0, 1, 150, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5028] = new Array('Candle', 5, 15, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5029] = new Array('Spore Hat', 5, 90, 0, 0, 0, 20, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5030] = new Array('Panda Hat', 5, 80, 0, 0, 0, 40, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5031] = new Array('Mine Hat', 5, 150, 0, 0, 0, 55, 2, 15, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5032] = new Array('Sunday Hat', 5, 80, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5033] = new Array('Raccoon Hat', 5, 90, 0, 0, 0, 50, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5034] = new Array('Bulb Band', 5, 50, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5035] = new Array('Poring Hat', 5, 70, 0, 0, 0, 38, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5036] = new Array('Cross Hat', 5, 25, 0, 0, 0, 10, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5037] = new Array('Nut Shell', 5, 15, 0, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5038] = new Array('Deviruchi Hat', 5, 80, 0, 0, 0, 64, 2, 11, 14, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5039] = new Array('Rainbow Eggshell', 5, 40, 0, 0, 0, 19, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5041] = new Array('Heart Hairpin', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5042] = new Array('Bao Bao', 5, 15, 0, 0, 0, 14, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5044] = new Array('Demon Wing', 5, 35, 0, 0, 0, 45, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5045] = new Array('Magician Hat', 5, 50, 0, 0, 0, 50, 2, 8, 12, 15, 0, 0, 0, 0, 3, 50, 1, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[5047] = new Array('Fashionable Glasses', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5048] = new Array('Cresent Hairpin', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5049] = new Array('Striped Hairband', 5, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5050] = new Array('Wonder Nutshell', 5, 30, 0, 0, 0, 30, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5052] = new Array('Blue Hairband', 5, 15, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5057] = new Array('Cowboy Hat', 5, 50, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5058] = new Array('Crown of Ancient Queen', 5, 40, 0, 0, 0, 45, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5059] = new Array('Incubus Horn', 5, 80, 0, 0, 0, 70, 2, 12, 6, 0, 0, 0, 0, 0, 4, 1, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5060] = new Array('Sombrero', 5, 35, 0, 0, 0, 1, 2, 12, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5061] = new Array('Succubus Horn', 5, 80, 0, 0, 0, 70, 2, 14, 6, 0, 0, 0, 0, 0, 4, 1, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5062] = new Array('2 Years Anniversary Hat', 5, 30, 0, 0, 0, 1, 2, 11, 12, 13, 14, 15, 16, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0);
itemdata[5063] = new Array('Party Hat', 5, 30, 0, 0, 0, 1, 2, 16, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5064] = new Array('Sea-Otter Hat', 5, 80, 0, 0, 0, 50, 2, 13, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5065] = new Array('Straw Hat', 5, 20, 0, 0, 0, 50, 2, 12, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5066] = new Array('Teddybear Hat', 5, 80, 0, 0, 0, 50, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5067] = new Array('Beanie', 5, 35, 0, 0, 0, 1, 2, 16, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5068] = new Array('Black Cat Ears', 5, 20, 0, 0, 0, 45, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5069] = new Array('Blue Fish', 5, 50, 0, 0, 0, 50, 2, 66, 0, 0, 0, 0, 0, 0, 2, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5071] = new Array('Decorative Mushroom', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5072] = new Array('Model Training Hat', 5, 70, 0, 0, 0, 1, 2, 15, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5074] = new Array('Drooping Cat', 5, 50, 0, 0, 0, 1, 2, 6, 202, 0, 0, 0, 0, 0, 1, 15, 30, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5075] = new Array('Flower Hairpin', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5076] = new Array('Giant Band Aid', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5077] = new Array('Hot-Blooded Headband', 5, 10, 0, 0, 0, 1, 2, 11, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5078] = new Array('Kitsune Mask', 5, 30, 0, 0, 0, 1, 2, 12, 16, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5079] = new Array('Lazy Smokie', 5, 50, 0, 0, 0, 1, 2, 206, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5080] = new Array('Red Ribbon', 5, 20, 0, 0, 0, 45, 2, 6, 0, 0, 0, 0, 0, 0, 1, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5081] = new Array('Smokie Leaf', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5082] = new Array('Tulip Hairpin', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5083] = new Array('X Hairpin', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5084] = new Array('Crown of Mistress', 5, 10, 0, 0, 0, 75, 2, 14, 8, 344, 0, 0, 0, 0, 0, 2, 100, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[5085] = new Array('Fruit of Love', 5, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5094] = new Array('Neko Mimi', 5, 0, 0, 0, 0, 1, 2, 6, 16, 113, 0, 0, 0, 0, 1, 10, 2, 5, 0, 0, 0, 0, 0, 1, 0);
itemdata[5096] = new Array('Angel\'s Kiss', 5, 30, 1, 0, 0, 50, 2, 304, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5099] = new Array('Banana Hat', 5, 0, 0, 0, 0, 1, 2, 323, 0, 0, 0, 0, 0, 0, 1, 30005, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5100] = new Array('Baseball Cap', 5, 20, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5101] = new Array('Bucket hat', 5, 30, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5105] = new Array('Fricca\'s Circlet', 5, 30, 0, 0, 0, 65, 2, 6, 8, 14, 0, 0, 0, 0, 3, 10, 50, 2, 0, 0, 0, 0, 0, 1, 0);
itemdata[5106] = new Array('Galapago Cap', 5, 50, 0, 0, 0, 55, 2, 315, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5107] = new Array('Goibne\'s Helm', 5, 50, 0, 0, 0, 54, 2, 6, 13, 0, 0, 0, 0, 0, 5, 3, 3, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5108] = new Array('Indian Headband', 5, 20, 0, 0, 0, 1, 2, 15, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5109] = new Array('Magni\'s Cap', 5, 100, 0, 0, 0, 65, 2, 11, 326, 2, 0, 0, 0, 0, 5, 2, 1, 5, 0, 0, 0, 0, 0, 1, 0);
itemdata[5110] = new Array('Morpheus\'s Hood', 5, 20, 0, 0, 0, 33, 2, 14, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5111] = new Array('Morrigane\'s Helm', 5, 50, 0, 0, 0, 61, 2, 1, 16, 0, 0, 0, 0, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5112] = new Array('Mystic Rose', 5, 10, 0, 0, 0, 1, 2, 114, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5113] = new Array('Pumpkin-Head', 5, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5114] = new Array('Puppy Headband', 5, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5115] = new Array('Red Bonnet', 5, 40, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5116] = new Array('Renown Detective\'s Cap', 5, 35, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5117] = new Array('Sheep Hat', 5, 15, 0, 0, 0, 50, 2, 212, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5118] = new Array('Ulle\'s Cap', 5, 50, 0, 0, 0, 1, 2, 12, 15, 0, 0, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5119] = new Array('Winter Hat', 5, 50, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5121] = new Array('Super Novice Hat', 5, 40, 1, 0, 0, 40, 2, 42, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Middle Head
itemdata[2201] = new Array('Sunglasses', 6, 10, 0, 5000, 0, 1, 2, 204, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2202] = new Array('Sunglasses', 6, 10, 1, 0, 0, 1, 2, 204, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2203] = new Array('Glasses', 6, 10, 0, 4000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2204] = new Array('Glasses', 6, 10, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2205] = new Array('Diver Goggles', 6, 10, 0, 3500, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2212] = new Array('Eye Patch', 6, 10, 0, 1000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2239] = new Array('Monocle', 6, 10, 0, 10000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2242] = new Array('Purple Glasses', 6, 10, 0, 24000, 0, 1, 2, 204, 0, 0, 0, 0, 0, 0, 1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2243] = new Array('Geek Glasses', 6, 10, 0, 20000, 0, 1, 2, 204, 0, 0, 0, 0, 0, 0, 1, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2260] = new Array('Mini-glasses', 6, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2263] = new Array('Zorro Mask', 6, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2276] = new Array('Angled Glasses', 6, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2286] = new Array('Elven Ears', 6, 10, 0, 0, 0, 70, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2291] = new Array('Masquerade', 6, 10, 0, 0, 0, 1, 2, 68, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2295] = new Array('Blinker', 6, 10, 0, 0, 0, 1, 2, 204, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2296] = new Array('Binoculars', 6, 10, 0, 0, 0, 50, 2, 15, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5006] = new Array('Machoman\'s Glasses', 6, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5014] = new Array('Fin Helm', 6, 30, 0, 0, 0, 65, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5040] = new Array('Blush', 6, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5043] = new Array('Opera Phantom Mask', 6, 20, 0, 0, 0, 20, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5088] = new Array('Angel Wing Ears', 6, 10, 0, 0, 0, 70, 2, 11, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5090] = new Array('Evil Wing Ears', 6, 10, 0, 0, 0, 70, 2, 11, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5092] = new Array('Small Ribbons', 6, 10, 0, 0, 0, 45, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5103] = new Array('Cyclop\'s Eye', 6, 20, 0, 0, 0, 75, 2, 8, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5104] = new Array('Dark Blinder', 6, 10, 0, 0, 0, 1, 2, 204, 203, 0, 0, 0, 0, 0, 0, 100, 2, 0, 0, 0, 0, 0, 0, 0, 0);

// Lower Head
itemdata[2218] = new Array('Flu Mask', 7, 10, 0, 300, 0, 1, 2, 207, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2237] = new Array('Goatee', 7, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2238] = new Array('Moustache (?)', 7, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2240] = new Array('Beard', 7, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2241] = new Array('Grandpa Beard', 7, 10, 0, 5000, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2262] = new Array('Clown Nose', 7, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2265] = new Array('Gangster Mask', 7, 10, 0, 0, 0, 1, 2, 207, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2266] = new Array('Iron Cain', 7, 30, 0, 0, 0, 50, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2267] = new Array('Cigarette', 7, 10, 0, 0, 0, 1, 2, 115, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2268] = new Array('Pipe', 7, 10, 0, 0, 0, 1, 2, 115, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2269] = new Array('Romantic Flower', 7, 10, 0, 0, 0, 1, 2, 114, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2270] = new Array('Romantic Leaf', 7, 10, 0, 0, 0, 1, 2, 114, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5004] = new Array('Oxygen Mask', 7, 20, 0, 0, 0, 1, 2, 201, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5051] = new Array('Cat Bell', 7, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5095] = new Array('Assassin Mask', 7, 10, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5097] = new Array('Angry Snarl', 7, 5, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5098] = new Array('Baby Pacifier', 7, 5, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5102] = new Array('Crunch Toast', 7, 5, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Upper Middle Head
itemdata[2224] = new Array('Goggles', 8, 30, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[2225] = new Array('Goggles', 8, 30, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5022] = new Array('Hat of the Sun God', 8, 240, 0, 0, 0, 1, 2, 11, 14, 0, 0, 0, 0, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5054] = new Array('Coif', 8, 30, 0, 0, 0, 65, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5055] = new Array('Coif', 8, 30, 1, 0, 0, 65, 2, 8, 0, 0, 0, 0, 0, 0, 5, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5056] = new Array('Helmet of Orc Hero', 8, 90, 0, 0, 0, 55, 2, 11, 13, 0, 0, 0, 0, 0, 5, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5070] = new Array('Decorative Golden Bell', 8, 20, 0, 0, 0, 35, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5073] = new Array('Tiger Mask', 8, 40, 0, 0, 0, 50, 2, 11, 7, 344, 0, 0, 0, 0, 2, 3, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[5120] = new Array('Zealotus Mask', 8, 40, 0, 0, 0, 70, 2, 68, 118, 0, 0, 0, 0, 0, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5122] = new Array('Note Headphone', 8, 0, 0, 0, 0, 1, 2, 6, 203, 208, 0, 0, 0, 0, 4, 3, 10, 10, 0, 0, 0, 0, 0, 1, 0);

// Middle Lower Head
itemdata[2278] = new Array('Mr Smile', 9, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2281] = new Array('Opera Mask', 9, 20, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2288] = new Array('Mr Scream', 9, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2292] = new Array('Welding Mask', 9, 30, 0, 0, 0, 50, 2, 104, 0, 0, 0, 0, 0, 0, 2, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[2297] = new Array('Goblin Mask', 9, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5005] = new Array('Gas Mask', 9, 10, 0, 0, 0, 1, 2, 201, 0, 0, 0, 0, 0, 0, 1, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5086] = new Array('Alarm Mask', 9, 10, 0, 0, 0, 1, 2, 204, 0, 0, 0, 0, 0, 0, 2, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5087] = new Array('Goblin Leader Mask', 9, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5089] = new Array('Annoyed Mask', 9, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5091] = new Array('Poker Face', 9, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5093] = new Array('Surprised Mask', 9, 10, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Entire Head
itemdata[2264] = new Array('Munak Hat', 10, 30, 0, 0, 0, 1, 2, 112, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[5046] = new Array('Bongun Hat', 10, 30, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Unarmed

// One-Handed Sword
itemdata[1101] = new Array('Sword', 12, 50, 3, 100, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1102] = new Array('Sword', 12, 50, 4, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1104] = new Array('Falchion', 12, 60, 3, 1500, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1105] = new Array('Falchion', 12, 60, 4, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1107] = new Array('Blade', 12, 70, 3, 2900, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 53, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1108] = new Array('Blade', 12, 70, 4, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 53, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1110] = new Array('Rapier', 12, 50, 2, 10000, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1111] = new Array('Rapier', 12, 50, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1113] = new Array('Scimitar', 12, 50, 2, 17000, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1114] = new Array('Scimitar', 12, 50, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1119] = new Array('Tsurugi', 12, 120, 1, 51000, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1120] = new Array('Tsurugi', 12, 120, 2, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1122] = new Array('Ring Pommel Saber', 12, 90, 2, 24000, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1123] = new Array('Haedonggum', 12, 90, 1, 50000, 3, 27, 1, 14, 0, 0, 0, 0, 0, 0, 120, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1124] = new Array('Orcish Sword', 12, 80, 0, 0, 3, 5, 1, 344, 0, 0, 0, 0, 0, 0, 90, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1125] = new Array('Ring Pommel Saber', 12, 90, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1126] = new Array('Saber', 12, 100, 2, 49000, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1127] = new Array('Saber', 12, 100, 3, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1128] = new Array('Haedonggum', 12, 90, 2, 0, 3, 27, 1, 14, 0, 0, 0, 0, 0, 0, 120, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1129] = new Array('Flamberge', 12, 150, 0, 60000, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1130] = new Array('Nagan', 12, 50, 0, 0, 4, 40, 1, 68, 322, 0, 0, 0, 0, 0, 120, 5, 50201, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1131] = new Array('Ice Falcion', 12, 60, 0, 0, 4, 40, 1, 3, 158, 188, 323, 322, 0, 0, 100, 1, 5, 1, 30046, 30046, 0, 0, 0, 1, 1, 4, 3);
itemdata[1132] = new Array('Edge', 12, 70, 0, 0, 4, 40, 1, 150, 152, 0, 0, 0, 0, 0, 115, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1133] = new Array('Fireblend', 12, 50, 0, 0, 4, 40, 1, 3, 323, 322, 0, 0, 0, 0, 100, 3, 30049, 30049, 0, 0, 0, 0, 0, 1, 1, 7, 3);
itemdata[1134] = new Array('Caesar\'s Sword', 12, 70, 0, 0, 4, 40, 1, 64, 329, 254, 0, 0, 0, 0, 140, 25, 5, 100, 0, 0, 0, 0, 0, 1, 0);
itemdata[1135] = new Array('Cutlus', 12, 90, 0, 0, 4, 40, 1, 11, 2, 322, 0, 0, 0, 0, 150, 2, 0, 50004, 0, 0, 0, 0, 0, 1, 1, 0, 5);
itemdata[1136] = new Array('Solar Sword', 12, 120, 0, 0, 4, 40, 1, 3, 334, 337, 0, 0, 0, 0, 85, 3, 1, -15, 0, 0, 0, 0, 0, 1, 0);
itemdata[1137] = new Array('Excaliber', 12, 120, 0, 0, 4, 40, 1, 3, 16, 15, 0, 0, 0, 0, 150, 6, 10, -1, 0, 0, 0, 0, 0, 1, 0);
itemdata[1138] = new Array('Mysteltainn', 12, 100, 0, 0, 4, 40, 1, 3, 15, 59, 159, 0, 0, 0, 170, 7, 3, 15, 1, 0, 0, 0, 0, 1, 0);
itemdata[1139] = new Array('Tirfing', 12, 100, 0, 0, 4, 40, 1, 3, 336, 0, 0, 0, 0, 0, 200, 7, -35, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1140] = new Array('Byeollungum', 12, 90, 0, 0, 4, 40, 1, 42, 75, 128, 0, 0, 0, 0, 150, 2, 5, -10, 0, 0, 0, 0, 0, 1, 0);
itemdata[1141] = new Array('Immaterial Sword', 12, 90, 0, 0, 4, 40, 1, 3, 344, 334, 341, 0, 0, 0, 140, 8, 100, 1, 30, 0, 0, 0, 0, 1, 0);
itemdata[1142] = new Array('Jeweled Sword', 12, 220, 0, 0, 3, 68, 1, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1143] = new Array('Gaia Sword', 12, 250, 0, 0, 3, 74, 1, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1144] = new Array('Sashimi', 12, 140, 0, 0, 3, 48, 1, 3, 0, 0, 0, 0, 0, 0, 75, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1145] = new Array('Holy Avenger', 12, 135, 0, 0, 3, 75, 1, 3, 0, 0, 0, 0, 0, 0, 125, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1146] = new Array('Murasame', 12, 70, 2, 0, 2, 24, 1, 329, 22, 0, 0, 0, 0, 0, 95, 7, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1147] = new Array('Star Dust Blade', 12, 100, 1, 0, 4, 45, 1, 153, 344, 0, 0, 0, 0, 0, 140, 5, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1148] = new Array('Town Sword', 12, 80, 2, 0, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Two-Handed Sword
itemdata[1116] = new Array('Katana', 13, 100, 3, 2000, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1117] = new Array('Katana', 13, 100, 4, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1151] = new Array('Slayer', 13, 130, 2, 15000, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1152] = new Array('Slayer', 13, 130, 3, 0, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1154] = new Array('Bastard Sword', 13, 160, 2, 22500, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1155] = new Array('Bastard Sword', 13, 160, 3, 0, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1157] = new Array('Two-handed Sword', 13, 220, 1, 60000, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 160, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1158] = new Array('Two-handed Sword', 13, 220, 2, 0, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 160, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1160] = new Array('Broad Sword', 13, 200, 1, 0, 3, 33, 1, 2, 0, 0, 0, 0, 0, 0, 140, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1161] = new Array('Balmung', 13, 100, 0, 0, 4, 48, 1, 14, 16, 0, 0, 0, 0, 0, 250, 20, 20, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1162] = new Array('Broad Sword', 13, 200, 2, 0, 3, 33, 1, 2, 0, 0, 0, 0, 0, 0, 140, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1163] = new Array('Claymore', 13, 250, 0, 74000, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1164] = new Array('Muramasa', 13, 100, 0, 0, 4, 48, 1, 22, 20, 182, 0, 0, 0, 0, 155, 30, 8, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[1165] = new Array('Masamune', 13, 100, 0, 0, 4, 48, 1, 20, 11, 0, 0, 0, 0, 0, 200, 2, -5, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1166] = new Array('Dragon Slayer', 13, 130, 0, 0, 4, 48, 1, 70, 329, 254, 0, 0, 0, 0, 150, 15, 9, 100, 0, 0, 0, 0, 0, 1, 0);
itemdata[1167] = new Array('Schweizersabel', 13, 160, 0, 0, 4, 48, 1, 3, 2, 323, 322, 0, 0, 0, 160, 4, 1, 30052, 30052, 0, 0, 0, 0, 1, 1, 11, 3);
itemdata[1168] = new Array('Zweihander', 13, 220, 0, 0, 4, 48, 1, 344, 0, 0, 0, 0, 0, 0, 200, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1169] = new Array('Executioner', 13, 220, 0, 0, 4, 48, 1, 3, 68, 118, 329, 254, 0, 0, 155, 7, 20, -10, 7, 100, 0, 0, 0, 1, 0);
itemdata[1170] = new Array('Katzbalger', 13, 200, 0, 0, 4, 48, 1, 2, 13, 7, 0, 0, 0, 0, 175, 10, 5, 5, 0, 0, 0, 0, 0, 1, 0);

// Dagger
itemdata[1201] = new Array('Knife', 14, 40, 3, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1202] = new Array('Knife', 14, 40, 4, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1203] = new Array('Cutter', 14, 50, 3, 1250, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1204] = new Array('Cutter', 14, 50, 4, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1205] = new Array('Main Gauche', 14, 60, 3, 2400, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1206] = new Array('Main Gauche', 14, 60, 4, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1207] = new Array('Dirk', 14, 50, 2, 8500, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1208] = new Array('Dirk', 14, 50, 3, 0, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1209] = new Array('Dagger', 14, 50, 2, 14000, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1210] = new Array('Dagger', 14, 50, 3, 0, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1211] = new Array('Stiletto', 14, 70, 2, 19500, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 87, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1212] = new Array('Stiletto', 14, 70, 3, 0, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 87, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1213] = new Array('Gladius', 14, 70, 2, 43000, 3, 24, 1, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1214] = new Array('Gladius', 14, 70, 3, 0, 3, 24, 1, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1215] = new Array('Damascus', 14, 80, 1, 49000, 3, 24, 1, 344, 0, 0, 0, 0, 0, 0, 118, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1216] = new Array('Damascus', 14, 80, 2, 0, 3, 24, 1, 344, 0, 0, 0, 0, 0, 0, 118, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1217] = new Array('Fortune Sword', 14, 50, 0, 0, 3, 24, 1, 16, 21, 0, 0, 0, 0, 0, 90, 5, 20, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1218] = new Array('Swordbreaker', 14, 100, 0, 0, 4, 36, 1, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1219] = new Array('Mailbreaker', 14, 100, 0, 0, 4, 36, 1, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1220] = new Array('Weeder Knife', 14, 40, 0, 0, 4, 36, 1, 64, 114, 329, 254, 0, 0, 0, 80, 15, 15, 5, 100, 0, 0, 0, 0, 1, 0);
itemdata[1221] = new Array('Combat Knife', 14, 40, 0, 0, 4, 36, 1, 68, 329, 254, 0, 117, 0, 0, 80, 10, 7, 100, 0, -10, 0, 0, 0, 1, 0);
itemdata[1222] = new Array('Kitchen Knife', 14, 50, 0, 0, 4, 36, 1, 68, 22, 329, 315, 0, 0, 0, 75, 3, 30, 2, 17, 0, 0, 0, 0, 1, 0);
itemdata[1223] = new Array('Ice Pick', 14, 60, 0, 0, 4, 36, 1, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1224] = new Array('Bazerald', 14, 50, 0, 0, 4, 36, 1, 3, 5, 14, 0, 0, 0, 0, 70, 3, 10, 5, 0, 0, 0, 0, 0, 1, 0);
itemdata[1225] = new Array('Assassin Dagger', 14, 60, 0, 0, 4, 36, 1, 9, 10, 0, 0, 0, 0, 0, 140, 20, 15, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1226] = new Array('Exorciser', 14, 70, 0, 0, 4, 36, 1, 3, 117, 118, 329, 254, 0, 0, 90, 6, 5, -10, 6, 100, 0, 0, 0, 0, 1, 0, NaN);
itemdata[1227] = new Array('Moonlight Dagger', 14, 70, 0, 0, 4, 36, 1, 10, 335, 0, 0, 0, 0, 0, 50, 10, 3, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1228] = new Array('Azoth', 14, 70, 0, 0, 4, 36, 1, 338, 0, 0, 0, 0, 0, 0, 110, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1229] = new Array('Sucsamad', 14, 80, 0, 0, 4, 36, 1, 344, 53, 55, 0, 0, 0, 0, 140, 100, 10, 10, 0, 0, 0, 0, 0, 1, 0);
itemdata[1230] = new Array('Grimtooth', 14, 80, 0, 0, 4, 36, 1, 18, 21, 256, 257, 0, 0, 0, 180, 10, 5, -50, -50, 0, 0, 0, 0, 1, 0);
itemdata[1231] = new Array('Zeny Knife', 14, 120, 0, 0, 3, 40, 1, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1232] = new Array('Poison Knife', 14, 80, 0, 0, 3, 65, 1, 3, 0, 0, 0, 0, 0, 0, 64, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1233] = new Array('Princess Knife', 14, 40, 0, 0, 4, 1, 1, 42, 0, 0, 0, 0, 0, 0, 84, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1234] = new Array('Cursed Dagger', 14, 40, 0, 0, 4, 85, 1, 152, 0, 0, 0, 0, 0, 0, 55, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1235] = new Array('Dagger of Counter', 14, 55, 0, 0, 3, 55, 1, 22, 0, 0, 0, 0, 0, 0, 75, 90, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1236] = new Array('Novice Main Gauche', 14, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1237] = new Array('Ashura', 14, 60, 3, 0, 1, 12, 1, 5, 0, 0, 0, 0, 0, 0, 50, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1238] = new Array('Cinquedea', 14, 70, 2, 40000, 3, 55, 1, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1239] = new Array('Cowardice Blade', 14, 70, 2, 52000, 3, 55, 1, 2, 0, 0, 0, 0, 0, 0, 80, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1240] = new Array('Dragon Killer', 14, 90, 0, 0, 4, 60, 1, 329, 313, 254, 0, 0, 0, 0, 110, 9, 10, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[1241] = new Array('Fisherman\'s Dagger', 14, 60, 0, 10000, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1242] = new Array('Ginnungagap', 14, 70, 0, 0, 4, 70, 1, 154, 0, 0, 0, 0, 0, 0, 120, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1243] = new Array('Hakujin', 14, 8, 1, 0, 3, 42, 1, 323, 0, 0, 0, 0, 0, 0, 120, 10127, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1244] = new Array('Jitte', 14, 40, 1, 0, 2, 35, 1, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1245] = new Array('Jujube Dagger', 14, 60, 0, 0, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 39, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1246] = new Array('Kamaitachi', 14, 90, 0, 0, 4, 70, 1, 3, 22, 20, 0, 0, 0, 0, 125, 4, 3, 3, 0, 0, 0, 0, 0, 1, 0);
itemdata[1247] = new Array('Khukri', 14, 60, 0, 0, 3, 65, 1, 3, 0, 0, 0, 0, 0, 0, 150, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1248] = new Array('Kindle Dagger', 14, 60, 0, 10000, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 39, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1249] = new Array('Obsidian Dagger', 14, 60, 0, 10000, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 39, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Katar
itemdata[1250] = new Array('Jur', 15, 80, 2, 19500, 2, 18, 1, 23, 0, 0, 0, 0, 0, 0, 125, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1251] = new Array('Jur', 15, 80, 3, 0, 2, 18, 1, 23, 0, 0, 0, 0, 0, 0, 125, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1252] = new Array('Katar', 15, 120, 1, 41000, 3, 33, 1, 15, 23, 0, 0, 0, 0, 0, 148, 1, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1253] = new Array('Katar', 15, 120, 2, 0, 3, 33, 1, 15, 23, 0, 0, 0, 0, 0, 148, 1, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1254] = new Array('Jamadhar', 15, 150, 0, 37500, 3, 33, 1, 23, 0, 0, 0, 0, 0, 0, 165, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1255] = new Array('Jamadhar', 15, 150, 1, 0, 3, 33, 1, 23, 0, 0, 0, 0, 0, 0, 165, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1256] = new Array('Katar of Frozen Icicle', 15, 120, 0, 0, 3, 55, 1, 3, 23, 0, 0, 0, 0, 0, 105, 1, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1257] = new Array('Katar of Quaking', 15, 120, 0, 0, 3, 55, 1, 3, 23, 0, 0, 0, 0, 0, 105, 2, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1258] = new Array('Katar of Raging Blaze', 15, 120, 0, 0, 3, 55, 1, 3, 23, 0, 0, 0, 0, 0, 105, 3, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1259] = new Array('Katar of Piercing Wind', 15, 120, 0, 0, 3, 55, 1, 3, 23, 0, 0, 0, 0, 0, 105, 4, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1260] = new Array('Sharpened Legbone of Ghoul', 15, 170, 0, 0, 3, 65, 1, 3, 23, 0, 0, 0, 0, 0, 150, 9, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1261] = new Array('Infiltrator', 15, 150, 0, 0, 4, 75, 1, 23, 68, 2, 18, 21, 0, 0, 140, 100, 50, 3, 5, 2, 0, 0, 0, 1, 0);
itemdata[1262] = new Array('Bloody Roar', 15, 100, 0, 0, 4, 75, 1, 303, 304, 23, 0, 0, 0, 0, 120, -100, -100, 100, 0, 0, 0, 0, 0, 1, 0);
itemdata[1263] = new Array('Loki\'s Nail', 15, 120, 0, 0, 3, 55, 1, 149, 23, 0, 0, 0, 0, 0, 115, 0.1, 100, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1264] = new Array('Specialty Jur', 15, 80, 4, 0, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 90, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1265] = new Array('Unholy Touch', 15, 125, 0, 0, 4, 70, 1, 3, 152, 23, 0, 0, 0, 0, 95, 7, 1, 100, 0, 0, 0, 0, 0, 1, 0);

// One-Handed Axe
itemdata[1301] = new Array('Axe', 16, 80, 3, 500, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1302] = new Array('Axe', 16, 80, 4, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1304] = new Array('Orcish Axe', 16, 150, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1306] = new Array('War Axe', 16, 420, 1, 0, 3, 76, 1, 15, 16, 0, 0, 0, 0, 0, 145, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0);

// Two-Handed Axe
itemdata[1305] = new Array('Cleaver', 17, 120, 0, 0, 4, 44, 1, 68, 329, 315, 0, 0, 0, 0, 140, 5, 2, 17, 0, 0, 0, 0, 0, 1, 0);
itemdata[1351] = new Array('Battle Axe', 17, 150, 3, 5400, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1352] = new Array('Battle Axe', 17, 150, 4, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1354] = new Array('Hammer', 17, 200, 2, 15500, 2, 16, 1, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1355] = new Array('Hammer', 17, 200, 3, 0, 2, 16, 1, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1357] = new Array('Buster', 17, 220, 1, 34000, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1358] = new Array('Buster', 17, 220, 2, 0, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1360] = new Array('Two-handed Axe', 17, 250, 1, 55000, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 185, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1361] = new Array('Two-handed Axe', 17, 250, 2, 0, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 185, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1363] = new Array('Bloody Axe', 17, 400, 0, 0, 4, 44, 1, 11, 305, 0, 0, 0, 0, 0, 170, 10, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1364] = new Array('Great Axe', 17, 180, 0, 0, 4, 44, 1, 153, 0, 0, 0, 0, 0, 0, 187, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1365] = new Array('Sabbath', 17, 230, 0, 0, 4, 44, 1, 3, 329, 22, 0, 329, 150, 0, 120, 7, 1, 50, 0, 6, 1, 0, 0, 1, 0);
itemdata[1366] = new Array('Light Epsilon', 17, 230, 0, 0, 4, 44, 1, 3, 67, 322, 0, 0, 0, 0, 180, 6, 3, 30127, 0, 0, 0, 0, 0, 1, 1, 16, 3);
itemdata[1367] = new Array('Slaughter', 17, 250, 0, 0, 4, 44, 1, 3, 329, 254, 150, 0, 0, 0, 120, 2, 2, 100, 1, 0, 0, 0, 0, 1, 0);
itemdata[1368] = new Array('Tomahawk', 17, 250, 0, 0, 4, 44, 1, 3, 0, 0, 0, 0, 0, 0, 165, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1369] = new Array('Guillotine', 17, 300, 0, 0, 4, 44, 1, 329, 150, 335, 0, 0, 0, 0, 215, 7, 1, 2, 0, 0, 0, 0, 0, 1, 0);

// One-Handed Spea
itemdata[1401] = new Array('Javelin', 18, 70, 3, 150, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1402] = new Array('Javelin', 18, 70, 4, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1404] = new Array('Spear', 18, 85, 3, 1700, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1405] = new Array('Spear', 18, 85, 4, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1407] = new Array('Pike', 18, 100, 3, 3450, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1408] = new Array('Pike', 18, 100, 4, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1413] = new Array('Gungnir', 18, 50, 0, 0, 4, 4, 1, 148, 19, 0, 0, 0, 0, 0, 120, 25, 30, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1414] = new Array('Gelerdria', 18, 70, 0, 0, 4, 48, 1, 3, 7, 8, 0, 0, 0, 0, 145, 2, 800, -50, 0, 0, 0, 0, 0, 1, 0);
itemdata[1415] = new Array('Brocca', 18, 85, 0, 0, 4, 48, 1, 256, 51, 0, 0, 0, 0, 0, 85, 1, 25, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1416] = new Array('Tjungkulietti', 18, 100, 0, 0, 4, 1, 48, 328, 335, 0, 0, 0, 0, 0, 100, 3, 5, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1417] = new Array('Pole Axe', 18, 380, 1, 0, 3, 71, 1, 11, 14, 15, 0, 0, 0, 0, 160, 1, 2, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[1470] = new Array('Brionac', 18, 300, 0, 0, 4, 48, 1, 3, 322, 322, 323, 0, 0, 0, 190, 6, 50127, 30045, 30045, 0, 0, 0, 0, 1, 2, 17, 5, 4, 3);

// Two-Handed Spear
itemdata[1410] = new Array('Lance', 19, 250, 0, 60000, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 185, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1451] = new Array('Guisarme', 19, 100, 2, 13000, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1452] = new Array('Guisarme', 19, 100, 3, 0, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1454] = new Array('Glaive', 19, 120, 2, 20000, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1455] = new Array('Glaive', 19, 120, 3, 0, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1457] = new Array('Partizan', 19, 200, 1, 27000, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1458] = new Array('Partizan', 19, 200, 2, 0, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1460] = new Array('Trident', 19, 120, 2, 51000, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1461] = new Array('Trident', 19, 120, 3, 0, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1463] = new Array('Halberd', 19, 250, 1, 54000, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 165, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1464] = new Array('Halberd', 19, 250, 2, 0, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 165, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1466] = new Array('Crescent Scythe', 19, 250, 0, 0, 4, 48, 1, 22, 19, 0, 0, 0, 0, 0, 180, 30, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1467] = new Array('Bill Guisarme', 19, 100, 0, 0, 4, 48, 1, 63, 68, 0, 0, 0, 0, 0, 183, 10, 5, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1468] = new Array('Zephyrus', 19, 120, 0, 0, 4, 48, 1, 3, 322, 323, 157, 0, 0, 0, 170, 4, 30053, 30053, 15, 0, 0, 0, 0, 1, 1, 11, 3);
itemdata[1469] = new Array('Longinu\'s Spear', 19, 200, 0, 0, 4, 48, 1, 3, 68, 69, 0, 0, 0, 0, 180, 7, 10, 10, 0, 0, 0, 0, 0, 1, 0);
itemdata[1471] = new Array('Hellfire', 19, 250, 0, 0, 4, 48, 1, 3, 11, 323, 322, 0, 0, 0, 200, 3, 3, 30050, 30050, 0, 0, 0, 0, 1, 1, 8, 3);
itemdata[1474] = new Array('Gae Bolg', 19, 200, 0, 0, 4, 60, 1, 75, 329, 254, 0, 0, 0, 0, 160, 10, 9, 1, 0, 0, 0, 0, 0, 1, 0);

// Club
itemdata[1501] = new Array('Club', 20, 70, 3, 120, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1502] = new Array('Club', 20, 70, 4, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1504] = new Array('Mace', 20, 80, 3, 1600, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1505] = new Array('Mace', 20, 80, 4, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1507] = new Array('Smasher', 20, 100, 2, 9000, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1508] = new Array('Smasher', 20, 100, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1510] = new Array('Flail', 20, 90, 2, 16000, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1511] = new Array('Flail', 20, 90, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1513] = new Array('Morning Star', 20, 150, 1, 41000, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1514] = new Array('Morning Star', 20, 150, 2, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1516] = new Array('Sword Mace', 20, 120, 0, 50000, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1517] = new Array('Sword Mace', 20, 120, 1, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1519] = new Array('Chain', 20, 80, 2, 23000, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1520] = new Array('Chain', 20, 80, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1522] = new Array('Stunner', 20, 200, 0, 60000, 3, 27, 1, 153, 0, 0, 0, 0, 0, 0, 140, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1523] = new Array('Spike', 20, 70, 0, 0, 4, 40, 1, 22, 256, 257, 0, 0, 0, 0, 85, 40, -33.33, -33.33, 0, 0, 0, 0, 0, 1, 0);
itemdata[1524] = new Array('Golden Mace', 20, 80, 1, 0, 4, 40, 1, 344, 62, 0, 0, 0, 0, 0, 110, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1525] = new Array('Long Mace', 20, 80, 0, 0, 4, 40, 1, 27, 121, 0, 0, 0, 0, 0, 135, 3, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1526] = new Array('Slash', 20, 100, 0, 0, 4, 40, 1, 62, 329, 313, 150, 0, 0, 0, 145, 15, 1, 5, 1, 0, 0, 0, 0, 1, 0);
itemdata[1527] = new Array('Quadrille', 20, 90, 0, 0, 4, 40, 1, 53, 62, 68, 0, 0, 0, 0, 165, 10, 10, 10, 0, 0, 0, 0, 0, 1, 0);
itemdata[1528] = new Array('Grand Cross', 20, 150, 0, 0, 4, 44, 1, 3, 323, 329, 335, 0, 0, 0, 140, 6, 30656, 1, 1, 0, 0, 0, 0, 1, 1, 52, 3);
itemdata[1529] = new Array('Iron Driver', 20, 300, 0, 0, 3, 78, 1, 0, 0, 0, 0, 0, 0, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1530] = new Array('Mjollnir', 20, 600, 0, 0, 4, 94, 1, 11, 15, 20, 0, 0, 0, 0, 250, 15, 40, 30, 0, 0, 0, 0, 0, 1, 0);
itemdata[1531] = new Array('Wrench', 20, 250, 0, 0, 3, 55, 1, 151, 153, 154, 158, 0, 0, 0, 115, 5, 5, 5, 5, 0, 0, 0, 0, 1, 0);

// Book
itemdata[1550] = new Array('Book', 21, 60, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1551] = new Array('Bible', 21, 100, 2, 0, 3, 27, 1, 14, 0, 0, 0, 0, 0, 0, 115, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1552] = new Array('Tablet', 21, 80, 1, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 125, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1553] = new Array('Book of Billows', 21, 75, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 90, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1554] = new Array('Book of Mother Earth', 21, 75, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 90, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1555] = new Array('Book of the Blazing Sun', 21, 75, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 90, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1556] = new Array('Book of Gust of Wind', 21, 75, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 90, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1557] = new Array('Book of the Apocalypse', 21, 80, 0, 0, 4, 40, 1, 3, 52, 53, 54, 55, 57, 0, 120, 7, 7, 7, 7, 7, 5, 0, 0, 1, 0);
itemdata[1558] = new Array('Girls Diary', 21, 30, 1, 0, 4, 40, 1, 318, 0, 0, 0, 0, 0, 0, 60, 15030, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1559] = new Array('Hardcover Book', 21, 150, 1, 0, 4, 55, 1, 11, 15, 0, 0, 0, 0, 0, 140, 3, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1560] = new Array('Legacy of Dragon', 21, 70, 0, 0, 4, 70, 1, 14, 8, 329, 335, 0, 0, 0, 130, 3, 3, 9, 10, 0, 0, 0, 0, 1, 0);
itemdata[1561] = new Array('Sage\'s Diary', 21, 110, 2, 0, 3, 60, 1, 333, 5, 20, 0, 333, 5, 0, 100, 500, 15, 5, 0, 703, 5, 0, 0, 1, 0);

// Staff
itemdata[1601] = new Array('Rod', 22, 40, 3, 50, 1, 1, 1, 5, 0, 0, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1602] = new Array('Rod', 22, 40, 4, 0, 1, 1, 1, 5, 0, 0, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1604] = new Array('Wand', 22, 40, 2, 2500, 2, 12, 1, 5, 14, 0, 0, 0, 0, 0, 25, 15, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1605] = new Array('Wand', 22, 40, 3, 0, 2, 12, 1, 5, 14, 0, 0, 0, 0, 0, 25, 15, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1607] = new Array('Staff', 22, 40, 2, 9500, 2, 12, 1, 5, 14, 0, 0, 0, 0, 0, 40, 15, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1608] = new Array('Staff', 22, 40, 3, 0, 2, 12, 1, 5, 14, 0, 0, 0, 0, 0, 40, 15, 2, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1610] = new Array('Arc Wand', 22, 40, 1, 45000, 3, 24, 1, 5, 14, 0, 0, 0, 0, 0, 60, 15, 3, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1611] = new Array('Arc Wand', 22, 40, 2, 0, 3, 24, 1, 5, 14, 0, 0, 0, 0, 0, 60, 15, 3, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1613] = new Array('Mighty Staff', 22, 70, 0, 0, 3, 24, 1, 5, 11, 0, 0, 0, 0, 0, 130, 15, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1614] = new Array('Wand of Occult', 22, 70, 0, 0, 3, 24, 1, 5, 14, 0, 0, 0, 0, 0, 75, 15, 3, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1615] = new Array('Evil Bone Wand', 22, 70, 0, 0, 3, 24, 1, 3, 5, 14, 0, 0, 0, 0, 40, 9, 15, 4, 0, 0, 0, 0, 0, 1, 0);
itemdata[1616] = new Array('Hypnotist\'s Staff', 22, 50, 2, 0, 3, 30, 1, 5, 14, 0, 0, 0, 0, 0, 70, 25, 1, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1617] = new Array('Survivor\'s Rod (Dex)', 22, 100, 1, 0, 3, 24, 1, 5, 15, 7, 0, 0, 0, 0, 50, 15, 3, 400, 0, 0, 0, 0, 0, 1, 0);
itemdata[1618] = new Array('Survivor\'s Rod (Int)', 22, 100, 1, 0, 3, 24, 1, 5, 14, 7, 8, 0, 0, 0, 50, 15, 3, 400, 3, 0, 0, 0, 0, 1, 0);
itemdata[1619] = new Array('Wing Staff', 22, 50, 0, 0, 4, 40, 1, 5, 0, 0, 0, 0, 0, 0, 60, 15, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Two-Handed Staff
itemdata[1472] = new Array('Soul Staff', 23, 140, 0, 0, 3, 73, 1, 5, 12, 14, 0, 0, 0, 0, 25, 15, 2, 5, 0, 0, 0, 0, 0, 1, 0);
itemdata[1473] = new Array('Wizardry Staff', 23, 240, 0, 0, 3, 90, 1, 5, 14, 15, 0, 0, 0, 0, 120, 15, 6, 2, 0, 0, 0, 0, 0, 1, 0);

// Bow
itemdata[1701] = new Array('Bow', 24, 50, 3, 1000, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1702] = new Array('Bow', 24, 50, 4, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1704] = new Array('Composite Bow', 24, 60, 3, 2500, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1705] = new Array('Composite Bow', 24, 60, 4, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1707] = new Array('Great Bow', 24, 100, 2, 10000, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1708] = new Array('Great Bow', 24, 100, 3, 0, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1710] = new Array('Crossbow', 24, 90, 2, 17000, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1711] = new Array('Crossbow', 24, 90, 3, 0, 2, 18, 1, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1713] = new Array('Arbalast', 24, 90, 1, 48000, 3, 33, 1, 15, 0, 0, 0, 0, 0, 0, 90, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1714] = new Array('Gakkung', 24, 100, 1, 42000, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1715] = new Array('Arbalast', 24, 90, 2, 0, 3, 33, 1, 15, 0, 0, 0, 0, 0, 0, 90, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1716] = new Array('Gakkung', 24, 100, 2, 0, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1718] = new Array('Hunter Bow', 24, 50, 0, 64000, 3, 33, 1, 0, 0, 0, 0, 0, 0, 0, 125, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1719] = new Array('Roguemasters Bow', 24, 50, 0, 0, 4, 48, 1, 27, 0, 0, 0, 0, 0, 0, 75, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1720] = new Array('Rudra Bow', 24, 100, 0, 0, 4, 48, 1, 27, 3, 322, 201, 202, 217, 218, 130, 5, 6, 10127, 50, 50, 50, 50, 0, 1, 1, 16, 1);
itemdata[1721] = new Array('Repeating Crossbow', 24, 200, 1, 89000, 3, 65, 1, 27, 0, 0, 0, 0, 0, 0, 95, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1722] = new Array('Ballista', 24, 350, 0, 0, 4, 77, 1, 0, 0, 0, 0, 0, 0, 0, 145, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1723] = new Array('Dragon Wing', 24, 120, 0, 0, 4, 60, 1, 329, 254, 315, 0, 0, 0, 0, 100, 9, 1, 1, 0, 0, 0, 0, 0, 1, 0);
itemdata[1724] = new Array('Luna Blow', 24, 200, 2, 0, 3, 30, 1, 2, 331, 2, 0, 331, 2, 0, 100, 2, 64, 3, 0, 94, 3, 0, 0, 1, 0);
itemdata[1725] = new Array('Minstrel Bow', 24, 170, 1, 0, 4, 70, 1, 14, 304, 0, 0, 0, 0, 0, 120, 2, 10, 0, 0, 0, 0, 0, 0, 1, 0);

// Arrow
itemdata[1750] = new Array('Arrow', 25, 0.1, 0, 1, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1751] = new Array('Silver Arrow', 25, 0.2, 0, 3, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1752] = new Array('Fire Arrow', 25, 0.2, 0, 3, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1753] = new Array('Steel Arrow', 25, 0.2, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1754] = new Array('Crystal Arrow', 25, 0.2, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1755] = new Array('Arrow of Wind', 25, 0.2, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1756] = new Array('Stone Arrow', 25, 0.2, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1757] = new Array('Immaterial Arrow', 25, 0.1, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1758] = new Array('Stun Arrow', 25, 0.3, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1759] = new Array('Freezing Arrow', 25, 0.3, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1760] = new Array('Flash Arrow', 25, 0.3, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1761] = new Array('Cursed Arrow', 25, 0.3, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1762] = new Array('Rusty Arrow', 25, 0.2, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1763] = new Array('Poison Arrow', 25, 0.3, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1764] = new Array('Sharp Arrow', 25, 0.3, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1765] = new Array('Oridecon Arrow', 25, 0.3, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1766] = new Array('Arrow of Counter Evil', 25, 0.3, 0, 500, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 50, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1767] = new Array('Arrow of Shadow', 25, 0.2, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 30, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1768] = new Array('Sleep Arrow', 25, 0.3, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1769] = new Array('Mute Arrow', 25, 0.3, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1770] = new Array('Iron Arrow', 25, 0.1, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Claw
itemdata[1801] = new Array('Waghnak', 26, 40, 3, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1802] = new Array('Waghnak', 26, 40, 4, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1803] = new Array('Knuckle Dusters', 26, 45, 2, 0, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1804] = new Array('Knuckle Dusters', 26, 45, 3, 0, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1805] = new Array('Studded Knuckles', 26, 45, 2, 0, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1806] = new Array('Studded Knuckles', 26, 45, 3, 0, 2, 12, 1, 0, 0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1807] = new Array('Fist', 26, 65, 0, 0, 3, 24, 1, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1808] = new Array('Fist', 26, 65, 1, 0, 3, 24, 1, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1809] = new Array('Claw', 26, 50, 1, 0, 3, 24, 1, 11, 0, 0, 0, 0, 0, 0, 86, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1810] = new Array('Claw', 26, 50, 2, 0, 3, 24, 1, 11, 0, 0, 0, 0, 0, 0, 86, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1811] = new Array('Finger', 26, 50, 1, 0, 3, 24, 1, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1812] = new Array('Finger', 26, 50, 2, 0, 3, 24, 1, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1813] = new Array('Kaiser Knuckle', 26, 45, 0, 0, 4, 36, 1, 52, 53, 54, 55, 60, 0, 0, 110, 10, 10, 10, 10, 5, 0, 0, 0, 1, 0);
itemdata[1814] = new Array('Berserk', 26, 50, 0, 0, 4, 36, 1, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[1815] = new Array('Hatii Claw', 26, 55, 1, 0, 4, 70, 1, 3, 9, 149, 0, 0, 0, 0, 115, 7, -2, 0, 0, 0, 0, 0, 0, 1, 0);

// Instrument
itemdata[1901] = new Array('Violin', 27, 70, 3, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1902] = new Array('Violin', 27, 70, 4, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1903] = new Array('Mandolin', 27, 40, 2, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1904] = new Array('Mandolin', 27, 40, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1905] = new Array('Lute', 27, 50, 2, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1906] = new Array('Lute', 27, 50, 3, 0, 2, 14, 1, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1907] = new Array('Guitar', 27, 90, 0, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1908] = new Array('Guitar', 27, 90, 1, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1909] = new Array('Harp', 27, 90, 1, 0, 3, 27, 1, 14, 0, 0, 0, 0, 0, 0, 114, 2, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1910] = new Array('Harp', 27, 90, 2, 0, 3, 27, 1, 14, 0, 0, 0, 0, 0, 0, 114, 2, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1911] = new Array('Gumoongoh', 27, 130, 1, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 126, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1912] = new Array('Gumoongoh', 27, 130, 2, 0, 3, 27, 1, 0, 0, 0, 0, 0, 0, 0, 126, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1913] = new Array('Electric Guitar', 27, 180, 0, 0, 4, 70, 1, 14, 12, 3, 322, 0, 0, 0, 110, 2, 1, 4, 10565, 0, 0, 0, 2, 1, 1, 32, 1);
itemdata[1914] = new Array('Burning Passiong Guitar', 27, 90, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 110, 3, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1915] = new Array('Gentle Breeze Guitar', 27, 90, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 110, 4, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1916] = new Array('Green Acre Guitar', 27, 90, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 110, 2, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1917] = new Array('Loner\'s Guitar', 27, 90, 0, 0, 3, 27, 1, 3, 0, 0, 0, 0, 0, 0, 110, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0);
itemdata[1918] = new Array('Oriental Lute', 27, 120, 0, 0, 4, 65, 1, 324, 324, 0, 0, 0, 0, 0, 150, 102161, 101122, 0, 0, 0, 0, 0, 2, 1, 0);

// Whip
itemdata[1950] = new Array('Rope', 28, 40, 3, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1951] = new Array('Rope', 28, 40, 4, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1952] = new Array('Line', 28, 30, 2, 0, 2, 16, 1, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1953] = new Array('Line', 28, 30, 3, 0, 2, 16, 1, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1954] = new Array('Wire Whip', 28, 100, 2, 0, 2, 16, 1, 0, 0, 0, 0, 0, 0, 0, 95, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1955] = new Array('Wire Whip', 28, 100, 3, 0, 2, 16, 1, 0, 0, 0, 0, 0, 0, 0, 95, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1956] = new Array('Rante Whip', 28, 90, 0, 0, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1957] = new Array('Rante Whip', 28, 90, 1, 0, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1958] = new Array('Tail Whip', 28, 70, 1, 0, 3, 30, 1, 22, 0, 0, 0, 0, 0, 0, 105, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1959] = new Array('Tail Whip', 28, 70, 2, 0, 3, 30, 1, 22, 0, 0, 0, 0, 0, 0, 105, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1960] = new Array('Whip', 28, 70, 1, 0, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1961] = new Array('Whip', 28, 70, 2, 0, 3, 30, 1, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1962] = new Array('Lariat Whip', 28, 40, 0, 0, 4, 44, 1, 12, 15, 0, 0, 0, 0, 0, 100, 1, 5, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1963] = new Array('Rapture Rose', 28, 30, 0, 0, 4, 44, 1, 3, 151, 0, 0, 0, 0, 0, 115, 5, 50, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1964] = new Array('Chemeti Whip', 28, 70, 0, 0, 4, 44, 1, 22, 18, 21, 0, 0, 0, 0, 135, 5, 10, 2, 0, 0, 0, 0, 1, 1, 0);
itemdata[1965] = new Array('Blade Whip', 28, 120, 0, 0, 4, 30, 1, 149, 0, 0, 0, 0, 0, 0, 140, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1966] = new Array('Gaia Whip', 28, 70, 0, 0, 3, 30, 1, 3, 0, 0, 0, 0, 0, 0, 110, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1967] = new Array('Icicle Whip', 28, 70, 0, 0, 3, 30, 1, 3, 0, 0, 0, 0, 0, 0, 110, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1968] = new Array('Queen\'s Whip', 28, 110, 0, 0, 4, 65, 1, 324, 324, 0, 0, 0, 0, 0, 150, 101122, 102161, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1969] = new Array('Red Flame Whip', 28, 70, 0, 0, 3, 30, 1, 3, 0, 0, 0, 0, 0, 0, 110, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0);
itemdata[1970] = new Array('Skipping Rope', 28, 40, 0, 0, 3, 30, 1, 22, 0, 0, 0, 0, 0, 0, 120, 20, 0, 0, 0, 0, 0, 0, 1, 1, 0);

// Shuriken
itemdata[3001] = new Array('Shuriken', 29, 0.5, 0, 0, 0, 1, 40, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3002] = new Array('Nimbus Shuriken', 29, 0.5, 0, 0, 0, 20, 40, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3003] = new Array('Flash Shuriken', 29, 0.5, 0, 0, 0, 40, 40, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3004] = new Array('Sharp Leaf Shuriken', 29, 0.5, 0, 0, 0, 60, 40, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3005] = new Array('Thorn Needle Shuriken', 29, 0.5, 0, 0, 0, 80, 40, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Kunai
itemdata[3101] = new Array('Icicle Kunai', 30, 2, 0, 0, 0, 1, 40, 41, 0, 0, 0, 0, 0, 0, 30, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3102] = new Array('Black Earth Kunai', 30, 2, 0, 0, 0, 1, 40, 41, 0, 0, 0, 0, 0, 0, 30, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3103] = new Array('Heat Wave Kunai', 30, 2, 0, 0, 0, 1, 40, 41, 0, 0, 0, 0, 0, 0, 30, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3104] = new Array('High Wind Kunai', 30, 2, 0, 0, 0, 1, 40, 41, 0, 0, 0, 0, 0, 0, 30, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3105] = new Array('Fell Poison Kunai', 30, 2, 0, 0, 0, 1, 40, 41, 0, 0, 0, 0, 0, 0, 30, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3106] = new Array('Venom Knife', 30, 0, 0, 0, 0, 1, 40, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Huuma Shuriken
itemdata[3201] = new Array('Huuma Giant Wheel Shuriken', 31, 250, 4, 0, 4, 42, 1, 149, 0, 0, 0, 0, 0, 0, 50, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3202] = new Array('Huuma Blaze Shuriken', 31, 230, 0, 0, 4, 55, 1, 3, 15, 323, 0, 0, 0, 0, 185, 3, 2, 50050, 0, 0, 0, 0, 0, 1, 1, 8, 5);
itemdata[3203] = new Array('Huuma Wing Shuriken', 31, 300, 0, 0, 4, 65, 1, 3, 12, 15, 0, 0, 0, 0, 150, 4, 1, 2, 0, 0, 0, 0, 0, 1, 0);

// Pistol
itemdata[3301] = new Array('Six Shooter', 32, 40, 2, 0, 1, 10, 1, 19, 0, 0, 0, 0, 0, 0, 30, -10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3302] = new Array('Gold Lux', 32, 50, 0, 0, 3, 12, 1, 19, 323, 0, 0, 0, 0, 0, 20, -10, 10334, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3303] = new Array('Crimson Bolt', 32, 45, 2, 0, 2, 35, 1, 19, 0, 0, 0, 0, 0, 0, 45, -10, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3304] = new Array('Garrison', 32, 55, 2, 0, 2, 55, 1, 19, 0, 0, 0, 0, 0, 0, 70, -10, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Rifle
itemdata[3401] = new Array('Branch', 33, 50, 3, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3402] = new Array('Cyclone', 33, 70, 2, 0, 2, 24, 1, 19, 22, 0, 0, 0, 0, 0, 120, 10, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3403] = new Array('Dusk', 33, 75, 1, 0, 2, 56, 1, 19, 22, 0, 0, 0, 0, 0, 150, 10, 10, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3502] = new Array('Black Rose', 33, 90, 1, 0, 2, 35, 1, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Shotgun
itemdata[3501] = new Array('Rolling Stone', 34, 90, 1, 0, 1, 14, 1, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3503] = new Array('Gate Keeper', 34, 100, 0, 0, 2, 55, 1, 323, 0, 0, 0, 0, 0, 0, 210, 60332, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Grenade Launcher
itemdata[3601] = new Array('Destroyer', 35, 120, 1, 0, 2, 52, 1, 0, 0, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3602] = new Array('Inferno', 35, 125, 1, 0, 2, 65, 1, 0, 0, 0, 0, 0, 0, 0, 280, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);

// Gatling Gun
itemdata[3701] = new Array('Drifter', 36, 230, 1, 0, 2, 55, 1, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
itemdata[3702] = new Array('Butcher', 36, 250, 1, 0, 3, 68, 1, 329, 22, 0, 0, 0, 0, 0, 75, 2, 10, 0, 0, 0, 0, 0, 0, 1, 0);

// Bullet
itemdata[3801] = new Array('Bullet', 37, 0.2, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3802] = new Array('Bloody Shell', 37, 0.2, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3803] = new Array('Silver Bullet', 37, 0.2, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 15, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Spheres
itemdata[3901] = new Array('Flare Sphere', 38, 0.5, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 50, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3902] = new Array('Lightning Sphere', 38, 0.5, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 50, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3903] = new Array('Freezing Sphere', 38, 0.5, 0, 0, 0, 1, 26, 3, 0, 0, 0, 0, 0, 0, 50, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3904] = new Array('Poison Sphere', 38, 0.5, 0, 0, 0, 1, 26, 3, 151, 0, 0, 0, 0, 0, 50, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[3905] = new Array('Blind Sphere', 38, 0.5, 0, 0, 0, 1, 26, 3, 154, 0, 0, 0, 0, 0, 50, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0);

// Headgear Card
itemdata[4010] = new Array('Willow Card', 39, 1, 0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4039] = new Array('Stainer Card', 39, 1, 0, 0, 0, 1, 0, 2, 207, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4041] = new Array('Coco Card', 39, 1, 0, 0, 0, 1, 0, 2, 206, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4046] = new Array('Martin Card', 39, 1, 0, 0, 0, 1, 0, 2, 204, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4052] = new Array('Elder Willow Card', 39, 1, 0, 0, 0, 1, 0, 14, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4087] = new Array('Giearth Card', 39, 1, 0, 0, 0, 1, 0, 103, 205, 0, 0, 0, 0, 0, 0, 15, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4110] = new Array('Ghoul Card', 39, 1, 0, 0, 0, 1, 0, 2, 201, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4112] = new Array('Marduk Card', 39, 1, 0, 0, 0, 1, 0, 207, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4122] = new Array('Deviruchi Card', 39, 1, 0, 0, 0, 1, 0, 11, 204, 0, 0, 0, 0, 0, 0, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4127] = new Array('Nightmare Card', 39, 1, 0, 0, 0, 1, 0, 12, 206, 0, 0, 0, 0, 0, 0, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4132] = new Array('Mistress Card', 39, 1, 0, 0, 0, 1, 0, 301, 308, 0, 0, 0, 0, 0, 0, -25, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4143] = new Array('Orc Hero Card', 39, 1, 0, 0, 0, 1, 0, 13, 203, 210, 0, 0, 0, 0, 0, 3, 100, 100, 0, 0, 0, 0, 0, 0, 0);
itemdata[4148] = new Array('Pharaoh Card', 39, 1, 0, 0, 0, 1, 0, 301, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4157] = new Array('Grand Peco Card', 39, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10654, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4160] = new Array('Dark Illusion Card', 39, 0, 0, 0, 0, 1, 9, 10, 24, 0, 0, 0, 0, 0, -10, -10, 10, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4165] = new Array('Dryad Card', 39, 0, 0, 0, 0, 1, 103, 329, 315, 0, 0, 0, 0, 0, 10, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4170] = new Array('Rideword Card', 39, 0, 0, 0, 0, 1, 14, 326, 6, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4181] = new Array('Myst Case Card', 39, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4195] = new Array('Tower Keeper Card', 39, 0, 0, 0, 0, 1, 14, 24, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4200] = new Array('Arc Angeling Card', 39, 0, 0, 0, 0, 1, 7, 333, 303, 304, 0, 0, 0, 0, 300, 775, 100, 100, 0, 0, 0, 0, 0, 0, 0);
itemdata[4218] = new Array('Gibbet Card', 39, 0, 0, 0, 0, 1, 330, 6, 0, 0, 0, 0, 0, 0, 60, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4225] = new Array('Carat Card', 39, 0, 0, 0, 0, 1, 14, 331, 8, 0, 0, 0, 0, 0, 2, 80, 150, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4230] = new Array('Cramp Card', 39, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4238] = new Array('Permeter Card', 39, 0, 0, 0, 0, 1, 108, 110, 0, 0, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4250] = new Array('Evil Snake Lord Card', 39, 0, 0, 0, 0, 1, 202, 204, 14, 0, 0, 0, 0, 0, 100, 100, 3, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4266] = new Array('Leib Olmai Card', 39, 0, 0, 0, 0, 1, 329, 315, 0, 104, 0, 0, 0, 0, 2, 15, 0, 10, 0, 0, 0, 0, 0, 0, 0);
itemdata[4269] = new Array('Leaf Cat Card', 39, 0, 0, 0, 0, 1, 328, 315, 102, 0, 0, 0, 0, 0, 11, 16, 10, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4277] = new Array('Stalactic Golem Card', 39, 0, 0, 0, 0, 1, 2, 203, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4289] = new Array('Evil Nympth Card', 39, 0, 0, 0, 0, 1, 14, 8, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4291] = new Array('Wootan Shooter Card', 39, 0, 0, 0, 0, 1, 2, 205, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4295] = new Array('Incubus Card', 39, 0, 0, 0, 0, 1, 14, 8, 304, 0, 0, 0, 0, 0, -3, 150, -20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4297] = new Array('Giant Hornet Card', 39, 0, 0, 0, 0, 1, 105, 329, 315, 0, 0, 0, 0, 0, 10, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4326] = new Array('Wootan Fighter Card', 39, 0, 0, 0, 0, 1, 2, 199, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Armor Card
itemdata[4001] = new Array('Poring card', 40, 1, 0, 0, 0, 1, 0, 16, 21, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4003] = new Array('Pupa Card', 40, 1, 0, 0, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4008] = new Array('Picky Card', 40, 1, 0, 0, 0, 1, 0, 11, 17, 0, 0, 0, 0, 0, 0, 1, 10, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4011] = new Array('Picky Card', 40, 1, 0, 0, 0, 1, 0, 7, 13, 0, 0, 0, 0, 0, 0, 100, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4014] = new Array('Roda Frog Card', 40, 1, 0, 0, 0, 1, 0, 7, 8, 0, 0, 0, 0, 0, 0, 400, 50, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4016] = new Array('Thief Bug Card', 40, 1, 0, 0, 0, 1, 0, 12, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4021] = new Array('Rocker Card', 40, 1, 0, 0, 0, 1, 0, 15, 17, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4023] = new Array('Baby Desert Wolf Card', 40, 1, 0, 0, 0, 1, 0, 14, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4031] = new Array('Pecopeco Card', 40, 1, 0, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4042] = new Array('Steel Chonchon Card', 40, 1, 0, 0, 0, 1, 0, 2, 105, 0, 0, 0, 0, 0, 0, 2, 10, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4047] = new Array('Ghostring Card', 40, 1, 0, 0, 0, 1, 0, 4, 303, 0, 0, 0, 0, 0, 0, 8, -25, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4054] = new Array('Angelring Card', 40, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4061] = new Array('Cornutus Card', 40, 1, 0, 0, 0, 1, 0, 2, 344, 0, 0, 0, 0, 0, 0, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4078] = new Array('Savage Card', 40, 1, 0, 0, 0, 1, 0, 13, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4089] = new Array('Swordfish Card', 40, 1, 0, 0, 0, 1, 0, 2, 4, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4098] = new Array('Dokkebi Card', 40, 1, 0, 0, 0, 1, 0, 2, 4, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4099] = new Array('Pasana Card', 40, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4101] = new Array('Sandman Card', 40, 1, 0, 0, 0, 1, 0, 2, 4, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4105] = new Array('Marc Card', 40, 1, 0, 0, 0, 1, 0, 102, 208, 0, 0, 0, 0, 0, 0, 5, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4114] = new Array('Argiope Card', 40, 1, 0, 0, 0, 1, 0, 2, 4, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4119] = new Array('Bathory Card', 40, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4135] = new Array('Orc Lord Card', 40, 1, 0, 0, 0, 1, 0, 212, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4141] = new Array('Evil Druid Card', 40, 1, 0, 0, 0, 1, 0, 2, 4, 14, 0, 0, 0, 0, 0, 1, 9, 1, 0, 0, 0, 0, 0, 0, 0);
itemdata[4155] = new Array('Goat Card', 40, 0, 0, 0, 0, 1, 330, 6, 2, 0, 0, 0, 0, 0, 63, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4163] = new Array('Demon Fungus Card', 40, 0, 0, 0, 0, 1, 156, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4167] = new Array('Disguise Card', 40, 0, 0, 0, 0, 1, 157, 333, 157, 0, 0, 0, 0, 0, 10, 772, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4172] = new Array('Loli Roli Card', 40, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 30127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 16, 3);
itemdata[4174] = new Array('Rybio Card', 40, 0, 0, 0, 0, 1, 153, 333, 153, 0, 0, 0, 0, 0, 10, 774, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4178] = new Array('Majorous Card', 40, 0, 0, 0, 0, 1, 153, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4188] = new Array('Brilight Card', 40, 0, 0, 0, 0, 1, 157, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4189] = new Array('Sasquatch Card', 40, 0, 0, 0, 0, 1, 158, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4191] = new Array('Succubus Card', 40, 0, 0, 0, 0, 1, 13, 7, 303, 0, 0, 0, 0, 0, -3, 1000, -20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4196] = new Array('Baby Leapard Card', 40, 0, 0, 0, 0, 1, 16, 326, 344, 0, 0, 0, 0, 0, 3, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4201] = new Array('Apocalypse Card', 40, 0, 0, 0, 0, 1, 13, 331, 7, 0, 0, 0, 0, 0, 2, 83, 800, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4202] = new Array('Antonio Card', 40, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4219] = new Array('Geographer Card', 40, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 20133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4223] = new Array('Karakasa Card', 40, 0, 0, 0, 0, 1, 155, 333, 155, 0, 0, 0, 0, 0, 10, 770, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4232] = new Array('Chimera Card', 40, 0, 0, 0, 0, 1, 151, 326, 151, 0, 0, 0, 0, 0, 10, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4241] = new Array('Pest Card', 40, 0, 0, 0, 0, 1, 159, 333, 159, 0, 0, 0, 0, 0, 10, 773, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4246] = new Array('Hatii Card', 40, 0, 0, 0, 0, 1, 158, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4257] = new Array('Grizzly Card', 40, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4258] = new Array('Dark Frame Card', 40, 0, 0, 0, 0, 1, 159, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4267] = new Array('Wraith Dead Card', 40, 0, 0, 0, 0, 1, 152, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4276] = new Array('Solider Card', 40, 0, 0, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4283] = new Array('Anolian Card', 40, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4290] = new Array('Wooden Golem Card', 40, 0, 0, 0, 0, 1, 2, 303, 0, 0, 0, 0, 0, 0, 1, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4296] = new Array('Giant Spider Card', 40, 0, 0, 0, 0, 1, 151, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4301] = new Array('Earth Deleter Card', 40, 0, 0, 0, 0, 1, 304, 328, 335, 0, 0, 0, 0, 0, -100, 3, 15, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4305] = new Array('Creamy Fear Card', 40, 0, 0, 0, 0, 1, 155, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4306] = new Array('Clock Card', 40, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 31049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4307] = new Array('Killer Mantis Card', 40, 0, 0, 0, 0, 1, 149, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4308] = new Array('Tao Gunka Card', 40, 0, 0, 0, 0, 1, 9, 2, 6, 0, 0, 0, 0, 0, 100, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4319] = new Array('Nightmare Terror Card', 40, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4320] = new Array('Skel Prisoner Card', 40, 0, 0, 0, 0, 1, 2, 156, 0, 0, 0, 0, 0, 0, 2, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4321] = new Array('Sky Deleter Card', 40, 0, 0, 0, 0, 1, 303, 334, 0, 0, 0, 0, 0, 0, -100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4322] = new Array('Kraben Card', 40, 0, 0, 0, 0, 1, 154, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Weapon Card
itemdata[4002] = new Array('Fabre Card', 41, 1, 0, 0, 0, 1, 0, 7, 13, 0, 0, 0, 0, 0, 0, 100, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4004] = new Array('Drops Card', 41, 1, 0, 0, 0, 1, 0, 15, 19, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4005] = new Array('Santa Poring Card', 41, 1, 0, 0, 0, 1, 0, 58, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4006] = new Array('Lunatic Card', 41, 1, 0, 0, 0, 1, 0, 16, 21, 22, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0);
itemdata[4007] = new Array('Pecopeco Egg Card', 41, 1, 0, 0, 0, 1, 0, 61, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4017] = new Array('Savage Bebe Card', 41, 1, 0, 0, 0, 1, 0, 153, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4018] = new Array('Andre Larva Card', 41, 1, 0, 0, 0, 1, 0, 14, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4019] = new Array('Hornet Card', 41, 1, 0, 0, 0, 1, 0, 11, 17, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4020] = new Array('Familiar Card', 41, 1, 0, 0, 0, 1, 0, 154, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4024] = new Array('Plankton Card', 41, 1, 0, 0, 0, 1, 0, 17, 156, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4025] = new Array('Skeleton Card', 41, 1, 0, 0, 0, 1, 0, 17, 153, 0, 0, 0, 0, 0, 0, 10, 2, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4026] = new Array('Female Thief Bug Card', 41, 1, 0, 0, 0, 1, 0, 12, 18, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4029] = new Array('Wolf Card', 41, 1, 0, 0, 0, 1, 0, 17, 22, 0, 0, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4030] = new Array('Mandagora Card', 41, 1, 0, 0, 0, 1, 0, 55, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4035] = new Array('Hydra Card', 41, 1, 0, 0, 0, 1, 0, 68, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4037] = new Array('Snake Card', 41, 1, 0, 0, 0, 1, 0, 17, 151, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4043] = new Array('Andre Card', 41, 1, 0, 0, 0, 1, 0, 17, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4049] = new Array('Vadon Card', 41, 1, 0, 0, 0, 1, 0, 54, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4055] = new Array('Marina Card', 41, 1, 0, 0, 0, 1, 0, 17, 158, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4057] = new Array('Metaller Card', 41, 1, 0, 0, 0, 1, 0, 17, 157, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4060] = new Array('Goblin Card', 41, 1, 0, 0, 0, 1, 0, 63, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4062] = new Array('Anacondaq Card', 41, 1, 0, 0, 0, 1, 0, 56, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4063] = new Array('Caramel Card', 41, 1, 0, 0, 0, 1, 0, 65, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4065] = new Array('Kaho Card', 41, 1, 0, 0, 0, 1, 0, 53, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4068] = new Array('Scorpion Card', 41, 1, 0, 0, 0, 1, 0, 64, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4069] = new Array('Drainler Card', 41, 1, 0, 0, 0, 1, 0, 52, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4072] = new Array('Golem Card', 41, 1, 0, 0, 0, 1, 0, 17, 344, 0, 0, 0, 0, 0, 0, 5, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4076] = new Array('Magnolia Card', 41, 1, 0, 0, 0, 1, 0, 17, 152, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4080] = new Array('Flora Card', 41, 1, 0, 0, 0, 1, 0, 66, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4082] = new Array('Desert Wolf Card', 41, 1, 0, 0, 0, 1, 0, 17, 71, 0, 0, 0, 0, 0, 0, 5, 15, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4085] = new Array('Orc Skeleton Card', 41, 1, 0, 0, 0, 1, 0, 57, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4086] = new Array('Soldier Skeleton Card', 41, 1, 0, 0, 0, 1, 0, 22, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4092] = new Array('Skeleton Worker Card', 41, 1, 0, 0, 0, 1, 0, 17, 72, 0, 0, 0, 0, 0, 0, 5, 15, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4094] = new Array('Archer Skeleton Card', 41, 1, 0, 0, 0, 1, 0, 50, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4096] = new Array('Zenorc Card', 41, 1, 0, 0, 0, 1, 0, 17, 151, 0, 0, 0, 0, 0, 0, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4104] = new Array('Requiem Card', 41, 1, 0, 0, 0, 1, 0, 155, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4106] = new Array('Mummy Card', 41, 1, 0, 0, 0, 1, 0, 19, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4111] = new Array('Strouf Card', 41, 1, 0, 0, 0, 1, 0, 67, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4115] = new Array('Hunterfly Card', 41, 1, 0, 0, 0, 1, 0, 252, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4117] = new Array('Sidewinder Card', 41, 1, 0, 0, 0, 1, 322, 0, 0, 0, 0, 0, 0, 0, 10201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4118] = new Array('Petite Card', 41, 1, 0, 0, 0, 1, 0, 70, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4121] = new Array('Phreeoni Card', 41, 1, 0, 0, 0, 1, 0, 19, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4125] = new Array('Deviace Card', 41, 1, 0, 0, 0, 1, 0, 63, 64, 65, 68, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0);
itemdata[4126] = new Array('Minorus Card', 41, 1, 0, 0, 0, 1, 0, 17, 73, 0, 0, 0, 0, 0, 0, 5, 15, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4130] = new Array('Scorpion King Card', 41, 1, 0, 0, 0, 1, 0, 60, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4134] = new Array('Dracula Card', 41, 1, 0, 0, 0, 1, 0, 253, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4137] = new Array('Drake Card', 41, 1, 0, 0, 0, 1, 0, 302, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4140] = new Array('Abysmal Knight Card', 41, 1, 0, 0, 0, 1, 0, 75, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4142] = new Array('Doppelganger Card', 41, 1, 0, 0, 0, 1, 0, 20, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4147] = new Array('Baphomet Card', 41, 1, 0, 0, 0, 1, 0, 19, 251, 0, 0, 0, 0, 0, 0, -10, 9, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4153] = new Array('Goblin Leader Card', 41, 0, 0, 0, 0, 1, 319, 0, 0, 0, 0, 0, 0, 0, 3005, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4154] = new Array('Goblin Archer Card', 41, 0, 0, 0, 0, 1, 314, 87, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4158] = new Array('Nereid Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4161] = new Array('Dark Priest Card', 41, 0, 0, 0, 0, 1, 326, 335, 0, 0, 0, 0, 0, 0, 28, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4162] = new Array('The Paper Card', 41, 0, 0, 0, 0, 1, 314, 326, 22, 0, 0, 0, 0, 0, 20, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4164] = new Array('Dullahan Card', 41, 0, 0, 0, 0, 1, 314, 95, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4166] = new Array('Driller Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 9, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4168] = new Array('Diabolic Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4169] = new Array('Lava Golem Card', 41, 0, 0, 0, 0, 1, 319, 0, 0, 0, 0, 0, 0, 0, 3010, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4179] = new Array('Mao Guai Card', 41, 0, 0, 0, 0, 1, 59, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4198] = new Array('Gig Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4204] = new Array('Assaulter Card', 41, 0, 0, 0, 0, 1, 314, 93, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4206] = new Array('Elder Card', 41, 0, 0, 0, 0, 1, 319, 0, 0, 0, 0, 0, 0, 0, 4002, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4209] = new Array('Orc Lady Card', 41, 0, 0, 0, 0, 1, 319, 0, 0, 0, 0, 0, 0, 0, 3006, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4212] = new Array('Samurai Specter Card', 41, 0, 0, 0, 0, 1, 254, 336, 0, 0, 0, 0, 0, 0, 1, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4215] = new Array('Zombie Master Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4221] = new Array('Chepet Card', 41, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 50127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 16, 5);
itemdata[4227] = new Array('Kobold Leader Card', 41, 0, 0, 0, 0, 1, 319, 0, 0, 0, 0, 0, 0, 0, 3007, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4228] = new Array('Kobold Archer Card', 41, 0, 0, 0, 0, 1, 314, 89, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4231] = new Array('Cruiser Card', 41, 0, 0, 0, 0, 1, 314, 88, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4233] = new Array('Turtle General Card', 41, 0, 0, 0, 0, 1, 36, 326, 323, 0, 0, 0, 0, 0, 20, 1, 100006, 0, 0, 0, 0, 0, 0, 0, 1, 1, 10);
itemdata[4235] = new Array('Tri Joint Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4237] = new Array('Panzer Goblin Card', 41, 0, 0, 0, 0, 1, 314, 92, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4242] = new Array('Mobster Card', 41, 0, 0, 0, 0, 1, 314, 326, 22, 0, 0, 0, 0, 0, 15, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4243] = new Array('Stormy Knight Card', 41, 1, 0, 0, 0, 1, 158, 323, 0, 0, 0, 0, 0, 0, 20, 10570, 0, 0, 0, 0, 0, 0, 0, 0, 1, 36, 1);
itemdata[4245] = new Array('Hatii Bebe Card', 41, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 30047, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 3);
itemdata[4254] = new Array('Crab Card', 41, 0, 0, 0, 0, 1, 1, 318, 0, 0, 0, 0, 0, 0, 5, 3021, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4255] = new Array('Goblin Steamrider Card', 41, 0, 0, 0, 0, 1, 314, 86, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4268] = new Array('Rotar Zairo Card', 41, 0, 0, 0, 0, 1, 314, 91, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4272] = new Array('Mutant Dragonoid Card', 41, 0, 0, 0, 0, 1, 1, 323, 0, 0, 0, 0, 0, 0, 15, 30050, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 3);
itemdata[4274] = new Array('Bloody Murderer Card', 41, 0, 0, 0, 0, 1, 314, 90, 0, 0, 0, 0, 0, 0, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4278] = new Array('Stone Shooter Card', 41, 0, 0, 0, 0, 1, 1, 19, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4287] = new Array('Aster Card', 41, 0, 0, 0, 0, 1, 1, 318, 0, 0, 0, 0, 0, 0, 5, 3238, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4294] = new Array('Injustice Card', 41, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10725, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 54, 1);
itemdata[4299] = new Array('Shellfish Card', 41, 0, 0, 0, 0, 1, 1, 318, 0, 0, 0, 0, 0, 0, 5, 3047, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4300] = new Array('Lord of Death Card', 41, 0, 0, 0, 0, 1, 150, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4302] = new Array('Zipper Bear Card', 41, 0, 0, 0, 0, 1, 1, 335, 326, 344, 0, 0, 0, 0, 30, -1, 5, 100, 0, 0, 0, 0, 0, 0, 0);
itemdata[4303] = new Array('Caterpiller Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4309] = new Array('Beetle King Card', 41, 0, 0, 0, 0, 1, 328, 335, 0, 0, 0, 0, 0, 0, 11, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4310] = new Array('False Angel Card', 41, 0, 0, 0, 0, 1, 328, 335, 0, 0, 0, 0, 0, 0, 12, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4311] = new Array('Bloody Knight Card', 41, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10564, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 32, 1);
itemdata[4314] = new Array('Phendark Card', 41, 0, 0, 0, 0, 1, 329, 335, 0, 0, 0, 0, 0, 0, 7, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4315] = new Array('Gryphon Card', 41, 0, 0, 0, 0, 1, 18, 22, 326, 323, 0, 0, 0, 0, 2, 7, 1, 50528, 0, 0, 0, 0, 0, 0, 1, 29, 5);
itemdata[4316] = new Array('Fur Seal Card', 41, 0, 0, 0, 0, 1, 19, 18, 326, 92, 0, 0, 0, 0, 10, 3, 4, 9, 0, 0, 0, 0, 0, 0, 0);

// Shield Card
itemdata[4012] = new Array('Thief Bug Egg Card', 42, 1, 0, 0, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4013] = new Array('Andre Egg Card', 42, 1, 0, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4032] = new Array('Ambernite Card', 42, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4045] = new Array('Horn Card', 42, 1, 0, 0, 0, 1, 0, 121, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4058] = new Array('Thera Frog Card', 42, 1, 0, 0, 0, 1, 0, 118, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4059] = new Array('Soldier Andre Card', 42, 1, 0, 0, 0, 1, 0, 114, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4066] = new Array('Orc Warrior Card', 42, 1, 0, 0, 0, 1, 0, 113, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4067] = new Array('Megalodon Card', 42, 1, 0, 0, 0, 1, 0, 2, 208, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4074] = new Array('Bigfoot Card', 42, 1, 0, 0, 0, 1, 0, 115, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4075] = new Array('Argos Card', 42, 1, 0, 0, 0, 1, 0, 2, 209, 0, 0, 0, 0, 0, 0, 1, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4083] = new Array('Rafflesia Card', 42, 0, 0, 0, 0, 1, 0, 116, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4090] = new Array('Munak Card', 42, 1, 0, 0, 0, 1, 0, 2, 103, 209, 0, 0, 0, 0, 0, 1, 5, 15, 0, 0, 0, 0, 0, 0, 0);
itemdata[4120] = new Array('Sky Petite Card', 42, 0, 0, 0, 0, 1, 0, 120, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4124] = new Array('Medusa Card', 42, 1, 0, 0, 0, 1, 0, 117, 209, 0, 0, 0, 0, 0, 0, 15, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4128] = new Array('Golden Thief Bug Card', 42, 1, 0, 0, 0, 1, 0, 211, 301, 0, 0, 0, 0, 0, 0, 100, -100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4136] = new Array('Khalitzburg Card', 42, 1, 0, 0, 0, 1, 0, 117, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4138] = new Array('Anubis Card', 42, 1, 0, 0, 0, 1, 0, 119, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4146] = new Array('Maya Card', 42, 1, 0, 0, 0, 1, 0, 213, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4182] = new Array('Mysteltainn Card', 42, 0, 0, 0, 0, 1, 125, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4190] = new Array('Enchanted Peach Tree Card', 42, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 16, 1);
itemdata[4194] = new Array('Sting Card', 42, 0, 0, 0, 0, 1, 2, 331, 6, 0, 0, 0, 0, 0, 2, 85, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4199] = new Array('Arclouse Card', 42, 0, 0, 0, 0, 1, 330, 2, 6, 0, 0, 0, 0, 0, 65, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4205] = new Array('Executioner Card', 42, 0, 0, 0, 0, 1, 127, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4208] = new Array('Alice Card', 42, 0, 0, 0, 0, 1, 122, 128, 0, 0, 0, 0, 0, 0, 40, -40, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4217] = new Array('Zealotus Card', 42, 0, 0, 0, 0, 1, 16, 324, 0, 0, 0, 0, 0, 0, 2, 101122, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4236] = new Array('Parasite Card', 42, 0, 0, 0, 0, 1, 2, 111, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4240] = new Array('Penomena Card', 42, 0, 0, 0, 0, 1, 111, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4282] = new Array('Mi Gao Card', 42, 0, 0, 0, 0, 1, 124, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4288] = new Array('Ancient Mummy Card', 42, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 50131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4312] = new Array('High Orc Card', 42, 0, 0, 0, 0, 1, 2, 212, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4317] = new Array('Ogretooth Card', 42, 0, 0, 0, 0, 1, 2, 126, 0, 0, 0, 0, 0, 0, 1, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4318] = new Array('Tamruan Card', 42, 0, 0, 0, 0, 1, 2, 324, 125, 0, 0, 0, 0, 0, 2, 101050, 10, 0, 0, 0, 0, 0, 0, 0, 0);

// Garment Card
itemdata[4015] = new Array('Condor Card', 43, 1, 0, 0, 0, 1, 0, 18, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4056] = new Array('Dustiness Card', 43, 1, 0, 0, 0, 1, 0, 18, 105, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4071] = new Array('Orc Zombie Card', 43, 1, 0, 0, 0, 1, 0, 18, 110, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4081] = new Array('Hode Card', 43, 1, 0, 0, 0, 1, 0, 18, 103, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4088] = new Array('Frilldora Card', 43, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 30724, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4095] = new Array('Marse Card', 43, 1, 0, 0, 0, 1, 0, 18, 102, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4102] = new Array('Whisper Card', 43, 1, 0, 0, 0, 1, 0, 18, 109, 0, 0, 0, 0, 0, 0, 20, -50, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4108] = new Array('Mist Card', 43, 1, 0, 0, 0, 1, 0, 18, 106, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4109] = new Array('Jakk Card', 43, 1, 0, 0, 0, 1, 0, 18, 104, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4113] = new Array('Marionette Card', 43, 1, 0, 0, 0, 1, 0, 18, 109, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4116] = new Array('Isis Card', 43, 1, 0, 0, 0, 1, 0, 18, 108, 0, 0, 0, 0, 0, 0, 5, 30, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4129] = new Array('Baphomet Jr. Card', 43, 1, 0, 0, 0, 1, 0, 12, 22, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4133] = new Array('Raydric Card', 43, 1, 0, 0, 0, 1, 0, 101, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4151] = new Array('Giant Whisper Card', 43, 0, 0, 0, 0, 1, 18, 333, 1, 333, 9, 333, 22, 0, 10, 800, 20, 802, 3, 805, 3, 0, 0, 0, 0);
itemdata[4156] = new Array('Nine Tail Card', 43, 0, 0, 0, 0, 1, 12, 331, 18, 0, 0, 0, 0, 0, 2, 86, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4176] = new Array('Mastering Card', 43, 0, 0, 0, 0, 1, 16, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4185] = new Array('Wanderer Card', 43, 0, 0, 0, 0, 1, 323, 326, 18, 0, 0, 0, 0, 0, 11256, 6, 20, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4186] = new Array('Vocal Card', 43, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4213] = new Array('Eclipse Card', 43, 0, 0, 0, 0, 1, 13, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4222] = new Array('Choco Card', 43, 0, 0, 0, 0, 1, 18, 21, 0, 0, 0, 0, 0, 0, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4224] = new Array('Kapha Card', 43, 0, 0, 0, 0, 1, 330, 6, 0, 0, 0, 0, 0, 0, 66, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4234] = new Array('Toad Card', 43, 0, 0, 0, 0, 1, 21, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4239] = new Array('Punk Card', 43, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4247] = new Array('Harpy Card', 43, 0, 0, 0, 0, 1, 101, 324, 0, 0, 0, 0, 0, 0, 15, 50043, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4249] = new Array('Yao Jun Card', 43, 0, 0, 0, 0, 1, 18, 22, 0, 0, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4259] = new Array('Devilring Card', 43, 0, 0, 0, 0, 1, 101, 129, 0, 0, 0, 0, 0, 0, 50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4261] = new Array('Dragon Tail Card', 43, 0, 0, 0, 0, 1, 12, 18, 324, 65, 0, 0, 0, 0, 1, 10, 50084, 5, 0, 0, 0, 0, 0, 0, 0);
itemdata[4262] = new Array('Dragon Fly Card', 43, 0, 0, 0, 0, 1, 12, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4263] = new Array('Vagabond Wolf Card', 43, 0, 0, 0, 0, 1, 11, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Shoes Card
itemdata[4009] = new Array('Chonchon Card', 44, 1, 0, 0, 0, 1, 0, 12, 18, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4038] = new Array('Zombie Card', 44, 1, 0, 0, 0, 1, 0, 303, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4050] = new Array('Male Thief Bug Card', 44, 1, 0, 0, 0, 1, 0, 12, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4070] = new Array('Eggyra Card', 44, 1, 0, 0, 0, 1, 0, 304, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4097] = new Array('Matyr Card', 44, 1, 0, 0, 0, 1, 0, 9, 12, 0, 0, 0, 0, 0, 0, 10, 1, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4100] = new Array('Sohee Card', 44, 1, 0, 0, 0, 1, 0, 10, 304, 0, 0, 0, 0, 0, 0, 15, 3, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4107] = new Array('Verit Card', 44, 1, 0, 0, 0, 1, 0, 9, 10, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4123] = new Array('Eddga Card', 44, 0, 0, 0, 0, 1, 0, 9, 215, 0, 0, 0, 0, 0, 0, -25, 100, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4131] = new Array('Moonlight Flower Card', 44, 1, 0, 0, 0, 1, 0, 305, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4159] = new Array('Dark Lord Card', 44, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 50564, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 32, 5);
itemdata[4177] = new Array('Megalith Card', 44, 0, 0, 0, 0, 1, 330, 6, 0, 0, 0, 0, 0, 0, 67, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4183] = new Array('Miyabi Doll Card', 44, 0, 0, 0, 0, 1, 10, 324, 0, 0, 0, 0, 0, 0, 10, 50047, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4197] = new Array('Amon Ra Card', 44, 0, 0, 0, 0, 1, 11, 12, 13, 14, 15, 16, 323, 0, 1, 1, 1, 1, 1, 1, 100652, 0, 0, 0, 0);
itemdata[4203] = new Array('Alarm Card', 44, 1, 0, 0, 0, 1, 7, 13, 323, 0, 0, 0, 0, 0, 300, 1, 10042, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4211] = new Array('Wild Rose Card', 44, 0, 0, 0, 0, 1, 12, 326, 21, 0, 0, 0, 0, 0, 1, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4214] = new Array('Explosion Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 120, 0, 0, 0, 0, 9, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4216] = new Array('Zombie Prisoner Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 110, 0, 0, 0, 0, 1, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4226] = new Array('Cat o Ninetail Card', 44, 0, 0, 0, 0, 1, 6, 213, 0, 0, 0, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4252] = new Array('Christmas Cookie Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 119, 0, 0, 0, 0, 8, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4253] = new Array('Gajomart Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 114, 0, 0, 0, 0, 5, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4256] = new Array('Firelock Soldier Card', 44, 0, 0, 0, 0, 1, 11, 331, 9, 10, 0, 0, 0, 0, 2, 87, 10, 10, 0, 0, 0, 0, 0, 0, 0);
itemdata[4264] = new Array('Raggler Card', 44, 0, 0, 0, 0, 1, 11, 13, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4271] = new Array('Merman Card', 44, 0, 0, 0, 0, 1, 303, 304, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4273] = new Array('Mini Demon Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 113, 0, 0, 0, 0, 2, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4286] = new Array('Am Mut Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 118, 0, 0, 0, 0, 7, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4323] = new Array('Freezer Card', 44, 0, 0, 0, 0, 1, 7, 331, 324, 0, 0, 0, 0, 0, 300, 87, 100004, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4327] = new Array('Ancient Worm Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 117, 0, 0, 0, 0, 6, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4328] = new Array('Iron Fist Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 111, 0, 0, 0, 0, 0, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4329] = new Array('Gullinbursti Card', 44, 0, 0, 0, 0, 1, 328, 313, 0, 114, 0, 0, 0, 0, 11, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);
itemdata[4330] = new Array('Skeleton General Card', 44, 0, 0, 0, 0, 1, 329, 313, 0, 115, 0, 0, 0, 0, 4, 10, 0, -20, 0, 0, 0, 0, 0, 0, 0);

// Accessory Card
itemdata[4022] = new Array('Spore Card', 45, 1, 0, 0, 0, 1, 0, 13, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4027] = new Array('Kukre Card', 45, 1, 0, 0, 0, 1, 0, 12, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4028] = new Array('Tarou Card', 45, 1, 0, 0, 0, 1, 0, 11, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4033] = new Array('Poporing Card', 45, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 10206, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4034] = new Array('Wormtail Card', 45, 1, 0, 0, 0, 1, 0, 15, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4036] = new Array('Muka Card', 45, 1, 0, 0, 0, 1, 0, 303, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4040] = new Array('Creamy Card', 45, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 10125, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4044] = new Array('Smokie Card', 45, 1, 0, 0, 0, 1, 0, 0, 322, 0, 0, 0, 0, 0, 0, 0, 10204, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4048] = new Array('Poison Spore Card', 45, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 30205, 0, 0, 0, 0, 0, 0, 0, 0, 1, 20, 3);
itemdata[4051] = new Array('Yoyo Card', 45, 1, 0, 0, 0, 1, 0, 12, 21, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4053] = new Array('Vitata Card', 45, 1, 0, 0, 0, 1, 0, 301, 322, 0, 0, 0, 0, 0, 0, -25, 10127, 0, 0, 0, 0, 0, 0, 0, 1, 16, 1);
itemdata[4064] = new Array('Zerom Card', 45, 1, 0, 0, 0, 1, 0, 15, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4073] = new Array('Pirate Skeleton Card', 45, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 50162, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4077] = new Array('Phen Card', 45, 1, 0, 0, 0, 1, 0, 214, 24, 0, 0, 0, 0, 0, 0, 100, -25, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4079] = new Array('Mantis Card', 45, 1, 0, 0, 0, 1, 0, 11, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4084] = new Array('Marine Sphere Card', 45, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 30006, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3);
itemdata[4091] = new Array('Cobold Card', 45, 1, 0, 0, 0, 1, 0, 11, 22, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4093] = new Array('Obeaune Card', 45, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 10134, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4103] = new Array('Horong Card', 45, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4139] = new Array('Joker Card', 45, 1, 0, 0, 0, 1, 0, 322, 0, 0, 0, 0, 0, 0, 0, 10203, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4144] = new Array('Osirus Card', 45, 1, 0, 0, 0, 1, 0, 309, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4145] = new Array('Berzebub Card', 45, 1, 0, 0, 0, 1, 0, 24, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4149] = new Array('Gargoyle Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4150] = new Array('Galapago Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 316, 0, 0, 0, 0, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0);
itemdata[4152] = new Array('Dumpling Child Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 316, 0, 0, 0, 0, 7, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0);
itemdata[4171] = new Array('Wraith Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4173] = new Array('Lude Card', 45, 0, 0, 0, 0, 1, 326, 323, 326, 323, 0, 0, 0, 0, 0, 10007, 66, 10007, 0, 0, 0, 0, 0, 0, 0);
itemdata[4175] = new Array('Marin Card', 45, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4180] = new Array('Mimic Card', 45, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4184] = new Array('Violi Card', 45, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 11123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 75, 1);
itemdata[4187] = new Array('Bongun Card', 45, 0, 0, 0, 0, 1, 312, 323, 0, 0, 0, 0, 0, 0, -100176, 10004, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1);
itemdata[4192] = new Array('Sageworm Card', 45, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4193] = new Array('Stem Worm Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 0, 0, 0, 0, 0, 2, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4207] = new Array('Alligator Card', 45, 0, 0, 0, 0, 1, 121, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4210] = new Array('Orc Archer Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 0, 0, 0, 0, 0, 7, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4220] = new Array('Greatest General Card', 45, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 51163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4229] = new Array('Quve Card', 45, 0, 0, 0, 0, 1, 326, 323, 326, 323, 0, 0, 0, 0, 0, 10128, 66, 10128, 0, 0, 0, 0, 0, 0, 0);
itemdata[4244] = new Array('Heirozoist Card', 45, 0, 0, 0, 0, 1, 338, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4248] = new Array('Bloody Butterfly Card', 45, 0, 0, 0, 0, 1, 214, 24, 324, 0, 0, 0, 0, 0, 100, -30, 50051, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4251] = new Array('Heater card', 45, 0, 0, 0, 0, 1, 22, 326, 21, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4260] = new Array('Poisonous Toad Card', 45, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 20, 1);
itemdata[4265] = new Array('Raydric Archer Card', 45, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4270] = new Array('Maya Purple Card', 45, 0, 0, 0, 0, 1, 339, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4275] = new Array('Blazer Card', 45, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4279] = new Array('Spring Rabbit Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 316, 0, 0, 0, 0, 2, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0);
itemdata[4280] = new Array('Wild Ginseng Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 316, 0, 0, 0, 0, 5, 18, 0, 18, 0, 0, 0, 0, 0, 0, 0);
itemdata[4281] = new Array('Shinobi Card', 45, 0, 0, 0, 0, 1, 12, 323, 0, 0, 0, 0, 0, 0, 1, 50724, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4284] = new Array('Owl Baron Card', 45, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 10657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4285] = new Array('Owl Duke Card', 45, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 30644, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4292] = new Array('Taoist Hermit Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 0, 0, 0, 0, 0, 5, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4293] = new Array('Wind Ghost Card', 45, 0, 0, 0, 0, 1, 323, 0, 0, 0, 0, 0, 0, 0, 30565, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 32, 3);
itemdata[4298] = new Array('Zhu Po Long Card', 45, 0, 0, 0, 0, 1, 12, 22, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4304] = new Array('Cookie Card', 45, 0, 0, 0, 0, 1, 16, 324, 0, 0, 0, 0, 0, 0, 2, 100135, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4313] = new Array('Sea-Otter Card', 45, 0, 0, 0, 0, 1, 328, 315, 0, 316, 0, 0, 0, 0, 11, 21, 0, 21, 0, 0, 0, 0, 0, 0, 0);
itemdata[4324] = new Array('Tengu Card', 45, 0, 0, 0, 0, 1, 315, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4325] = new Array('Jing Guai Card', 45, 0, 0, 0, 0, 1, 329, 315, 0, 0, 0, 0, 0, 0, 8, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[4331] = new Array('Sleeper Card', 45, 0, 0, 0, 0, 1, 328, 315, 0, 328, 315, 0, 0, 0, 11, 1, 0, 8, 1, 0, 0, 0, 0, 0, 0);

// Forging Elements
itemdata[994] = new Array('Flame Heart', 46, 30, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[995] = new Array('Mystic Frozen', 46, 30, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[996] = new Array('Rough Wind', 46, 30, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[997] = new Array('Great Nature', 46, 30, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[1000] = new Array('Star Crumb', 46, 10, 0, 0, 0, 1, 31, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// Upper Lower Head
itemdata[5053] = new Array('Sphinx Hat', 47, 300, 0, 0, 0, 65, 2, 11, 0, 0, 0, 0, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// HP Recovery
itemdata[501] = new Array('Red Potion', 48, 7, 0, 50, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 45, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[502] = new Array('Orange Potion', 48, 10, 0, 200, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 105, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[503] = new Array('Yellow Potion', 48, 13, 0, 550, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 175, 235, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[504] = new Array('White Potion', 48, 15, 0, 1200, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 325, 405, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//itemdata[505] = new Array('Blue Potion', 48, 15, 0, 5000, 0, 1, 353, 354, 0, 0, 0, 0, 0, 0, 40, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[507] = new Array('Red Herb', 48, 3, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 18, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[508] = new Array('Yellow Herb', 48, 5, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 38, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[509] = new Array('White Herb', 48, 7, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 75, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//itemdata[510] = new Array('Blue Herb', 48, 7, 0, 0, 0, 1, 353, 354, 0, 0, 0, 0, 0, 0, 15, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[512] = new Array('Apple', 48, 2, 0, 15, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 16, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[513] = new Array('Banana', 48, 2, 0, 15, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 17, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//itemdata[514] = new Array('Grape', 48, 2, 0, 0, 0, 1, 353, 354, 0, 0, 0, 0, 0, 0, 10, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[515] = new Array('Carrot', 48, 2, 0, 15, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 18, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[516] = new Array('Sweet Potato', 48, 2, 0, 15, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 15, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[517] = new Array('Meat', 48, 15, 0, 50, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 70, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[518] = new Array('Honey', 48, 10, 0, 0, 0, 1, 351, 352, 353, 354, 0, 0, 0, 0, 70, 100, 20, 40, 0, 0, 0, 0, 0, 0, 0);
itemdata[519] = new Array('Milk', 48, 3, 0, 25, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 27, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[520] = new Array('Hinalle Leaflet', 48, 1, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 175, 235, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[521] = new Array('Aloe Leaflet', 48, 2, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 325, 405, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[522] = new Array('Mastela Fruit', 48, 3, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 400, 600, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[526] = new Array('Royal Jelly', 48, 15, 0, 0, 0, 1, 351, 352, 353, 354, 0, 0, 0, 0, 325, 405, 40, 60, 0, 0, 0, 0, 0, 0, 0);
itemdata[528] = new Array('Monsters Feed', 48, 15, 0, 60, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 72, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[529] = new Array('Candy', 48, 3, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 45, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[530] = new Array('Candy Cane', 48, 4, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 105, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[531] = new Array('Apple Juice', 48, 4, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 25, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[532] = new Array('Banana Juice', 48, 4, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 26, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//itemdata[533] = new Array('Grape Juice', 48, 4, 0, 0, 0, 1, 353, 354, 0, 0, 0, 0, 0, 0, 15, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[534] = new Array('Carrot Juice', 48, 4, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 27, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[535] = new Array('Pumpkin', 48, 2, 0, 15, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[536] = new Array('Ice Cream', 48, 8, 0, 150, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 105, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[537] = new Array('Pet Food', 48, 1, 0, 1000, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 50, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[538] = new Array('Cookie', 48, 3, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 160, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[539] = new Array('Piece of Cake', 48, 10, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 270, 330, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//itemdata[540] = new Array('Chocolate', 48, 5, 0, 2000, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 185, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//itemdata[541] = new Array('Hand Made Chocolate', 48, 5, 0, 3000, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 325, 405, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[542] = new Array('Poult Hail[?]', 48, 1, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 325, 405, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[543] = new Array('Rice Cake[?]', 48, 1, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 325, 405, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[544] = new Array('Reed Blotch[?]', 48, 5, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 25, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[545] = new Array('Condensed Red Potion', 48, 2, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 45, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[546] = new Array('Condensed Yellow Potion', 48, 3, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 175, 235, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[547] = new Array('Condensed White Potion', 48, 5, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 325, 405, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[548] = new Array('Cheese', 48, 5, 0, 0, 0, 1, 353, 354, 0, 0, 0, 0, 0, 0, 10, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[549] = new Array('Yam', 48, 8, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 50, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemdata[550] = new Array('Ho', 48, 1, 0, 0, 0, 1, 351, 352, 0, 0, 0, 0, 0, 0, 10, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0);

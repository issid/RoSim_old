// Attack Skill Data Arrays

astabledata = new Array();
assaved = new Array();
/*
astabledata[] = new Array(,'',,,,,,'','');
0) Picture path:	Character string 
1) Skill name:		Character string
2) Maximum Lv:		Numerical 
3) Damage: 		0 No - 1 Yes 
4) Cast Time: 		0 No -  1 constant  - 2 Lv effect 
5) Delay Time:		0 No -  1 constant -  2 Lv effect 
6) Lv effect label 1: 	Character string 
7) Lv effect label 2: 	Character string
*/

// Swordsman
astabledata[0] = new Array('male/4.gif','Bash',10,1,0,0,'On Hit','Stun');
astabledata[1] = new Array('male/6.gif','Magnum Break',10,1,0,0,'','');

// Mage
astabledata[2] = new Array('male/43.gif','Napalm Beat',10,1,1,1,'','');
astabledata[3] = new Array('male/45.gif','Soul Strike',10,1,1,2,'','');
astabledata[4] = new Array('male/46.gif','Cold Bolt',10,1,2,2,'','');
astabledata[5] = new Array('male/47.gif','Frost Driver',10,1,1,1,'Freeze','Duration');
astabledata[6] = new Array('male/48.gif','Stone Curse',10,0,0,0,'Stoned','');
astabledata[7] = new Array('male/49.gif','Fire Bolt',10,1,2,2,'','');
astabledata[8] = new Array('male/50.gif','Fire Ball',10,1,1,1,'','');
astabledata[9] = new Array('male/51.gif','Fire Wall',10,1,2,0,'','');
astabledata[10] = new Array('male/52.gif','Lightning Bolt',10,1,2,2,'','');
astabledata[11] = new Array('male/53.gif','Thunder Storm',10,1,2,1,'','');

// Archer
astabledata[12] = new Array('male/84.gif','Double Strafe',10,1,0,1,'','');
astabledata[13] = new Array('male/85.gif','Arrow Shower',10,1,0,1,'','');
astabledata[14] = new Array('/ac_chargearrow.gif','Arrow Repel',1,1,2,0,'','');

// Acolyte
astabledata[15] = new Array('male/123.gif','Ruwach',1,1,0,0,'','');
astabledata[16] = new Array('male/127.gif','Heal',10,1,0,1,'Recover','');
astabledata[17] = new Array('/al_holylight.gif','Holy Light',1,1,2,0,'','');

// Merhcant
astabledata[18] = new Array('male/167.gif','Mammonite',10,1,0,0,'','');
astabledata[19] = new Array('/mc_cartrevolution.gif','Cart Revolution',1,1,0,0,'','');

// Thief
astabledata[20] = new Array('male/205.gif','Envenom',10,1,0,0,'Poison','');
astabledata[21] = new Array('/tf_sprinklesand.gif','Sand Attack',1,1,0,0,'Blind','');
astabledata[22] = new Array('/tf_throwstone.gif','Throw Stone',1,1,0,0,'Stun','');

// Knight
astabledata[23] = new Array('male/522.gif','Pierce',10,1,0,0,'On Hit','');
astabledata[24] = new Array('male/523.gif','Brandish Spear',10,1,1,0,'','');
astabledata[25] = new Array('male/524.gif','Spear Stab',10,1,0,0,'','');
astabledata[26] = new Array('male/525.gif','Spear Boomerang',5,1,0,1,'','');
astabledata[27] = new Array('male/527.gif','Counter Attack',1,1,0,0,'On Hit','Crit');
astabledata[28] = new Array('male/528.gif','Bowling Bash',10,1,1,0,'','');
astabledata[133]= new Array('/kt_charge_attack.gif','Charge Attack',5,1,2,0,'Dst','');

// Wizard
astabledata[29] = new Array('male/561.gif','Fire Pillar',10,1,2,0,'','');
astabledata[30] = new Array('male/562.gif','Sight Thrasher',10,1,1,1,'','');
astabledata[31] = new Array('male/564.gif','Meteor Storm',10,1,1,2,'','');
astabledata[32] = new Array('male/565.gif','Jupiter Thunder',10,1,2,0,'','');
astabledata[33] = new Array('male/566.gif','Lord of Vermillion',10,1,2,1,'','');
astabledata[34] = new Array('male/567.gif','Waterball',5,1,2,0,'','');
astabledata[35] = new Array('male/569.gif','Frost Nova',10,1,2,1,'Freeze','Duration');
astabledata[36] = new Array('male/570.gif','Storm Gust',10,1,2,1,'','');
astabledata[37] = new Array('male/571.gif','Earth Spike',5,1,2,1,'','');
astabledata[38] = new Array('male/572.gif','Heavens Drive',5,1,2,1,'','');
astabledata[134]= new Array('male/562.gif','Sight Blaster',1,1,1,0,'','');

// Hunter
astabledata[39] = new Array('male/601.gif','Ankle Snare',5,0,0,0,'Duration','');
astabledata[40] = new Array('male/603.gif','Blast Mine',5,1,0,0,'','');
astabledata[41] = new Array('male/604.gif','Bliz Beat',5,1,1,0,'','');
astabledata[42] = new Array('male/605.gif','Claymore Trap',5,1,0,0,'','');
astabledata[43] = new Array('male/608.gif','Flasher',5,0,0,0,'Blind','');
astabledata[44] = new Array('male/609.gif','Freezing Trap',5,1,0,0,'Freeze','');
astabledata[45] = new Array('male/610.gif','Land Mine',5,1,0,0,'Stun','');
astabledata[46] = new Array('male/613.gif','Sandman',5,0,0,0,'Sleep','');
astabledata[131]= new Array('/ht_power.gif','Beast Strafing',10,1,0,1,'','');
astabledata[135]= new Array('/ht_phantasmic.gif','Phantasmi Arrow',1,1,0,0,'','');

// Priest
astabledata[47] = new Array('male/648.gif','Sanctuary',10,1,1,0,'Recover','');
astabledata[48] = new Array('male/649.gif','Status Recovery',1,0,0,2,'Blind','');
astabledata[49] = new Array('male/651.gif','Resurrection',4,1,2,2,'Auto-Kill','Total');
astabledata[50] = new Array('male/655.gif','Lex Divina',1,0,0,2,'Silenced','');
astabledata[51] = new Array('male/656.gif','Turn Undead',10,1,1,1,'% Chance','Auto-Kill');
astabledata[52] = new Array('male/658.gif','Magnus Exorcismus',10,1,1,1,'','');

// Blacksmith
astabledata[53] = new Array('male/697.gif','Hammer Fall',5,0,0,0,'Stun','');

// Assassin
astabledata[54] = new Array('male/725.gif','Sonic Blow',10,1,0,0,'Stun','');
astabledata[55] = new Array('male/726.gif','Grimtooth',5,1,0,0,'','');
astabledata[56] = new Array('male/728.gif','Poison React',10,1,0,0,'','');
astabledata[57] = new Array('male/730.gif','Venom Splasher<br><font size="1">(lvl Determinds the timer)</font>',10,1,0,0,'','');
astabledata[136]= new Array('/as_venom_knife.gif','Venom Knife',1,1,0,0,'Poison','');

// Crusaider
astabledata[58] = new Array('male/1050.gif','Smite',5,1,0,0,'','');
astabledata[59] = new Array('male/1051.gif','Shield Boomerang',5,1,0,1,'','');
astabledata[60] = new Array('male/1053.gif','Holy Cross',10,1,0,0,'Blind','');
astabledata[61] = new Array('male/1054.gif','Grand Cross',10,1,1,1,'Self Dmg','');

// Bard~Dancer
astabledata[62] = new Array('male/1122.gif','Melody Strike',5,1,1,0,'','');
astabledata[63] = new Array('male/1123.gif','Unchanted Serenade',5,1,0,0,'','');
astabledata[75] = new Array('male/1124.gif','Unbearring Octave',5,0,0,0,'Frozen','');

// Monk
astabledata[64] = new Array('male/1168.gif','Throw Spirit Sphere',5,1,2,1,'','');
astabledata[65] = new Array('male/1169.gif','Occult Impaction',5,1,1,1,'','');
astabledata[66] = new Array('male/1173.gif','Guillotine Fist',5,1,2,2,'','');
astabledata[67] = new Array('male/1174.gif','Raging Quadruple Blow',5,1,0,1,'','');
astabledata[68] = new Array('male/1175.gif','Raging Thrust',5,1,0,1,'','');
astabledata[137]= new Array('/mk_excruciating_palm.gif','Excruciating Palm',1,1,0,1,'Stun','');

// Alchemist
astabledata[69] = new Array('male/1204.gif','Bomb',5,1,1,1,'','');
astabledata[70] = new Array('male/1205.gif','Acid Terror',5,1,1,1,'','');
astabledata[71] = new Array('male/1206.gif','Aid Potion',5,0,0,0,'Recover','');

// Rogue
astabledata[72] = new Array('male/1249.gif','Back Stab',10,1,0,1,'','');
astabledata[73] = new Array('male/1251.gif','Sightless Mind',5,1,0,0,'Blind','Stun');
astabledata[74] = new Array('male/1256.gif','Snatch',5,1,0,1,'','');

// Lord Knight
astabledata[76] = new Array('male/1565.gif','Clashing Spiral',5,1,2,2,'','');
astabledata[77] = new Array('male/1566.gif','Traumatic Blow',5,1,0,1,'Bleed','');
astabledata[78] = new Array('male/1567.gif','Vital Strike',10,1,0,2,'Ailment','');

// High Wizard
astabledata[79] = new Array('male/1602.gif','Stave Clasher',1,1,1,1,'','');
astabledata[80] = new Array('male/1604.gif','Napalm Vulcan',5,1,0,1,'Curse','');

// Sniper
astabledata[81] = new Array('male/1642.gif','Falcon Assault',5,1,2,1,'','');
astabledata[82] = new Array('male/1643.gif','Focused Arrow Strike',5,1,1,1,'Crit','');

// Mastersmith
astabledata[83] = new Array('male/1723.gif','High Speed Cart Ram',10,1,0,0,'Stun','Zenny Cost');

// Assassin Cross
astabledata[84] = new Array('male/1762.gif','Soul Destroyer',10,1,0,2,'','');

// Paladin
astabledata[85] = new Array('male/2081.gif','Gloria Domini',5,1,2,2,'','');
astabledata[86] = new Array('male/2082.gif','Matyrs Reckoning',5,1,0,0,'HP Lost','');
astabledata[132]= new Array('male/2084.gif','Rapid Smiting<br><font size="1" color="red">[Info Needed]</font>',5,1,1,1,'','');

// Minstrel/Dancer
astabledata[87] = new Array('male/2161.gif','Arrow Vulcan',10,1,2,2,'','');

// Champion
astabledata[88] = new Array('male/2201.gif','Raging Palm Strike',5,1,0,1,'','');
astabledata[89] = new Array('male/2202.gif','Glacier Fist',5,1,0,1,'Stun','');
astabledata[90] = new Array('male/2203.gif','Chain Crush Combo',10,1,0,2,'','');

// Biochemist
astabledata[138]= new Array('male/2245.gif','Acid Bomb',10,1,1,0,'','');

// Taekwon
astabledata[91] = new Array('male/243.gif','Tornado Kick',7,1,0,0,'','');
astabledata[92] = new Array('male/245.gif','Heel Drop',7,1,0,0,'Stun','');
astabledata[93] = new Array('male/247.gif','Roundhouse',7,1,0,0,'','');
astabledata[94] = new Array('male/249.gif','Counter Kick',7,1,0,0,'','');
astabledata[95] = new Array('male/251.gif','Flying Kick',7,1,0,0,'','');

// Ninja
astabledata[96] = new Array('male/282.gif','Throw Shuriken',10,1,0,0,'','');
astabledata[97] = new Array('male/283.gif','Throw Kunai',1,1,0,0,'','');
astabledata[98] = new Array('male/284.gif','Throw Huuma Shurkien',5,1,1,1,'','');
astabledata[99] = new Array('male/285.gif','Throw Coins',10,1,0,1,'','');
astabledata[100]= new Array('male/286.gif','Flip Tatami',5,1,0,1,'','');
astabledata[101]= new Array('male/288.gif','Haze Slasher',10,1,0,1,'','');
astabledata[102]= new Array('male/289.gif','Shadow Slash',5,1,0,0,'Critical','');
astabledata[103]= new Array('male/292.gif','Flame Petals',10,1,2,0,'','');
astabledata[104]= new Array('male/293.gif','Blaze Shield',10,1,2,1,'','');
astabledata[105]= new Array('male/294.gif','Exploding Dragon',5,1,1,1,'','');
astabledata[106]= new Array('male/295.gif','Freezing Spear',10,1,2,0,'','');
astabledata[107]= new Array('male/297.gif','Snow Flake Drift',5,1,2,0,'Freeze','')
astabledata[108]= new Array('male/298.gif','Wind Blade',10,1,2,1,'','');;
astabledata[109]= new Array('male/299.gif','Lightning Jolt',5,1,1,0,'','');
astabledata[110]= new Array('male/300.gif','First Wind',5,1,1,0,'','');
astabledata[111]= new Array('male/302.gif','Killing Strike',10,1,0,0,'','');

// Gunslinger
astabledata[112]= new Array('male/324.gif','Trigger Happy Shot',10,1,0,1,'','');
astabledata[113]= new Array('male/325.gif','Desperado',10,1,1,1,'','');
astabledata[114]= new Array('male/327.gif','Tracking',10,1,2,0,'','');
astabledata[115]= new Array('male/328.gif','Wounding Shot',5,1,1,0,'Bleed','');
astabledata[116]= new Array('male/330.gif','Crowd Control Shot',10,1,1,1,'','');
astabledata[117]= new Array('male/331.gif','Full Blast',10,1,0,1,'','');
astabledata[118]= new Array('male/332.gif','Spread Shot',10,1,0,0,'','');
astabledata[119]= new Array('male/333.gif','Gunslinger Mine',10,1,0,0,'','');
astabledata[120]= new Array('male/336.gif','Magic Bullet',1,1,0,0,'','');
astabledata[121]= new Array('male/337.gif','Cracker',1,1,0,0,'Stun','');
astabledata[122]= new Array('male/339.gif','Triple Action',1,1,0,0,'','');
astabledata[123]= new Array('male/342.gif','Bull\'s Eye',1,1,0,0,'Coma','');

// Taekwon Master
astabledata[125]= new Array('male/763.gif','Solar Heat',1,1,0,0,'','');
astabledata[126]= new Array('male/765.gif','Lunar Heat',1,1,0,0,'','');
astabledata[127]= new Array('male/767.gif','Stellar Heat',1,1,0,0,'','');

// Soul Linker
astabledata[128]= new Array('male/1303.gif','Estun',7,1,0,0,'Stun','');
astabledata[129]= new Array('male/1304.gif','Estin',7,1,0,0,'Stun','');
astabledata[130]= new Array('male/1307.gif','Esma',10,1,1,0,'','');

/*
astabledata[]= new Array('','',0,0,0,0,'','');
0) Picture path:	Character string 
1) Skill name:		Character string
2) Maximum Lv:		Numerical 
3) Damage: 		0 No - 1 Yes 
4) Cast Time: 		0 No -  1 constant  - 2 Lv effect 
5) Delay Time:		0 No -  1 constant -  2 Lv effect 
6) Lv effect label 1: 	Character string 
7) Lv effect label 2: 	Character string
*/

asdata = new Array();

/*
asdata[] = new Array(,,,,,,);
0) Type:		0 physical  - 1 magic -  2 in addition 
1) Base Attack 
2) Additional Attack 
3) Base # Hits
4) Addtional Hits per Lv
5) Damage Loss 
6) Attribute
*/

asdata[0] = new Array(0,100,30,1,0,0,10);
asdata[1] = new Array(0,115,5,1,0,0,3);

asdata[2] = new Array(1,70,10,1,0,0,8);
asdata[3] = new Array(1,100,0,0.5,0.5,0,8);
asdata[4] = new Array(1,100,0,0,1,0,1);
asdata[5] = new Array(1,100,10,1,0,0,1);
asdata[6] = new Array(2,0,0,0,0,0,0);
asdata[7] = new Array(1,100,0,0,1,0,3);
asdata[8] = new Array(1,95,5,1,0,0,3);
asdata[9] = new Array(1,50,0,4,1,0,3);
asdata[10] = new Array(1,100,0,0,1,0,4);
asdata[11] = new Array(1,80,0,0,1,0,4);

asdata[12] = new Array(0,90,10,2,0,0,10);
asdata[13] = new Array(0,75,5,1,0,0,10);
asdata[14] = new Array(0,150,0,1,0,0,10);

asdata[15] = new Array(1,100,0,1,0,0,6);
asdata[16] = new Array(2,0,0,0,0,0,0);
asdata[17] = new Array(1,125,0,1,0,0,6);

asdata[18] = new Array(0,100,50,1,0,0,10);
asdata[19] = new Array(0,150,0,1,0,0,10);

asdata[20] = new Array(0,100,0,1,0,0,5);
asdata[21] = new Array(0,130,0,1,0,0,2);
asdata[22] = new Array(2,0,0,0,0,0,0);

asdata[23] = new Array(0,100,10,0,0,0,10);
asdata[24] = new Array(0,100,0,1,0,0,10);
asdata[25] = new Array(0,100,20,1,0,0,10);
asdata[26] = new Array(0,100,50,1,0,0,10);
asdata[27] = new Array(0,100,0,1,0,0,10);
asdata[28] = new Array(0,100,40,1,0,0,10);
asdata[133]= new Array(0,0,100,1,0,0,10);

asdata[29] = new Array(1,20,0,2,1,0,3);
asdata[30] = new Array(1,100,20,1,0,0,3);
asdata[31] = new Array(1,100,0,0.5,0.5,0,3);
asdata[32] = new Array(1,100,0,2,1,0,4);
asdata[33] = new Array(1,80,20,10,0,1,4);
asdata[34] = new Array(1,100,30,0,0,0,1);
asdata[35] = new Array(1,100,10,1,0,0,1);
asdata[36] = new Array(1,100,40,3,0,0,1);
asdata[37] = new Array(1,100,0,0,1,0,2);
asdata[38] = new Array(1,100,0,0,1,0,2);
asdata[134]= new Array(1,100,0,1,0,0,3);

asdata[39] = new Array(2,0,0,0,0,0,0);
asdata[40] = new Array(2,0,0,0,0,0,0);
asdata[41] = new Array(2,0,0,0,1,0,0);
asdata[42] = new Array(2,0,0,0,0,0,0);
asdata[43] = new Array(2,0,0,0,0,0,0);
asdata[44] = new Array(0,100,0,1,0,0,1);
asdata[45] = new Array(2,0,0,0,0,0,0);
asdata[46] = new Array(2,0,0,0,0,0,0);
asdata[131]= new Array(0,90,10,2,0,0,10);
asdata[135]= new Array(0,100,0,1,0,0,10);

asdata[47] = new Array(2,0,0,0,0,0,0);
asdata[48] = new Array(2,0,0,0,0,0,0);
asdata[49] = new Array(2,0,0,0,0,0,0);
asdata[50] = new Array(2,0,0,0,0,0,0);
asdata[51] = new Array(2,0,0,0,0,0,0);
asdata[52] = new Array(1,100,0,0,1,0,6);

asdata[53] = new Array(2,0,0,0,0,0,0);

asdata[54] = new Array(0,400,40,8,0,1,10);
asdata[55] = new Array(0,75,25,1,0,0,10);
asdata[56] = new Array(0,100,30,1,0,0,10);
asdata[57] = new Array(0,200,20,1,0,0,10);
asdata[136] = new Array(0,100,0,1,0,0,10);

asdata[58] = new Array(0,100,40,1,0,0,10);
asdata[59] = new Array(2,0,0,0,0,0,0);
asdata[60] = new Array(0,100,35,2,0,1,6);
asdata[61] = new Array(0,100,40,3,0,0,6);

asdata[62] = new Array(0,125,25,1,0,0,10);
asdata[63] = new Array(2,0,0,0,0,0,0);
asdata[75] = new Array(2,0,0,0,0,0,0);

asdata[64] = new Array(0,100,50,0,1,0,10);
asdata[65] = new Array(2,0,0,0,0,0,0);
asdata[66] = new Array(2,0,0,0,0,0,0);
asdata[67] = new Array(0,150,50,4,0,1,10);
asdata[68] = new Array(0,240,60,1,0,0,10);
asdata[137]= new Array(0,300,0,1,0,0,10);

asdata[69] = new Array(0,100,20,35,5,0,3);
asdata[70] = new Array(0,50,50,1,0,0,0);
asdata[71] = new Array(2,0,0,0,0,0,0);

asdata[72] = new Array(0,300,40,1,0,0,10);
asdata[73] = new Array(0,100,40,1,0,0,10);
asdata[74] = new Array(0,100,30,1,0,0,10);

asdata[76] = new Array(0,100,50,0,0,0,10);
asdata[77] = new Array(0,100,40,1,0,0,10);
asdata[78] = new Array(0,50,10,1,0,0,10);

asdata[79] = new Array(0,100,0,1,0,0,0);
asdata[80] = new Array(1,100,0,0,1,0,8);

asdata[81] = new Array(2,0,0,0,1,0,0);
asdata[82] = new Array(0,100,50,1,0,0,10);

asdata[83] = new Array(0,0,0,1,0,0,10);

asdata[84] = new Array(0,100,0,1,0,0,10);

asdata[85] = new Array(2,0,0,0,0,0,0);
asdata[86] = new Array(2,0,0,5,0,0,0);
asdata[132] = new Array(0,100,30,5,0,0,10);

asdata[87] = new Array(0,200,100,9,0,0,10);

asdata[88] = new Array(0,200,100,1,0,0,10);
asdata[89] = new Array(0,40,100,1,0,0,10);
asdata[90] = new Array(0,400,100,1,0,0,10);

asdata[91] = new Array(0,160,20,1,0,0,10);
asdata[92] = new Array(0,160,20,1,0,0,10);
asdata[93] = new Array(0,190,30,1,0,0,10);
asdata[94] = new Array(0,190,30,1,0,0,10);
asdata[95] = new Array(0,30,10,1,0,1,10);

asdata[96] = new Array(0,100,0,1,0,0,10);
asdata[97] = new Array(0,100,0,3,0,0,10);
asdata[98] = new Array(0,300,150,1,0,0,10);
asdata[99] = new Array(2,0,0,0,0,0,10);
asdata[100]= new Array(0,100,10,1,0,0,10);
asdata[101]= new Array(0,100,10,1,0,0,10);
asdata[102]= new Array(0,0,100,1,0,0,10);
asdata[103]= new Array(1,90,0,0,1,0,3);
asdata[104]= new Array(1,50,0,4.5,0.5,0,3);
asdata[105]= new Array(1,50,150,3,0,0,3);
asdata[106]= new Array(1,70,0,2,1,0,1);
asdata[107]= new Array(1,100,50,1,0,0,1);
asdata[108]= new Array(1,100,0,1,0.5,0,4);
asdata[109]= new Array(1,160,40,1,0,0,4);
asdata[110]= new Array(1,100,100,1,0,0,4);
asdata[111]= new Array(2,0,0,0,0,0,10);

asdata[112] = new Array(0,100,10,5,0,0,10);
asdata[113] = new Array(0,50,50,10,0,0,10);
asdata[114] = new Array(0,200,100,1,0,0,10);
asdata[115] = new Array(0,100,20,1,0,0,10);
asdata[116] = new Array(0,100,50,1,0,0,10);
asdata[117] = new Array(0,300,100,1,0,0,10);
asdata[118] = new Array(0,80,20,1,0,0,10);
asdata[119] = new Array(0,100,0,1,0,0,10);
asdata[120] = new Array(2,100,0,1,0,0,8);
asdata[121] = new Array(0,100,0,1,0,0,10);
asdata[122] = new Array(0,150,0,3,0,0,10);
asdata[123] = new Array(0,500,0,1,0,0,10);

asdata[125] = new Array(0,90,10,1,0,0,10);
asdata[126] = new Array(0,90,10,1,0,0,10);
asdata[127] = new Array(0,90,10,1,0,0,10);

asdata[128] = new Array(1,0,5,1,0,0,10);
asdata[129] = new Array(1,0,5,1,0,0,10);
asdata[130] = new Array(1,0,0,1,0,0,10);

asdata[138] = new Array(2,0,0,0,1,0,0);

/*
asdata[] = new Array(,,,,,,);
0) Type:		0 physical  - 1 magic -  2 in addition 
1) Base Attack 
2) Additional Attack 
3) Base # Hits
4) Addtional Hits per Lv
5) Damage Loss 
6) Attribute
*/


// Cast Time Tables - In Miliseconds [100 = .1 sec | 1000 = 1 sec]
asctdata = new Array();

asctdata[0] = 0;
asctdata[1] = 0;

asctdata[2] = 500;
asctdata[3] = 500;
asctdata[4] = new Array(700,1400,2100,2800,3500,4200,4900,5600,6300,7000);
asctdata[5] = 800;
asctdata[6] = 0;
asctdata[7] = new Array(700,1400,2100,2800,3500,4200,4900,5600,6300,7000);
asctdata[8] = 1600;
asctdata[9] = new Array(2000,1850,1700,1550,1400,1250,1100,950,800,650);
asctdata[10] = new Array(700,1400,2100,2800,3500,4200,4900,5600,6300,7000);
asctdata[11] = new Array(1000,2000,3000,4000,5000,6000,7000,8000,9000,10000);

asctdata[12] = 0.3;
asctdata[13] = 0;
asctdata[14] = new Array(1500,0);

asctdata[15] = 0;
asctdata[16] = 0;
asctdata[17] = new Array(2000,0);

asctdata[18] = 0;
asctdata[19] = 0;

asctdata[20] = 0;
asctdata[21] = 0;
asctdata[22] = 1000;

asctdata[23] = 0;
asctdata[24] = 700;
asctdata[25] = 0;
asctdata[26] = 0;
asctdata[27] = 0;
asctdata[28] = 700;
asctdata[133]= new Array(500,1000,1500,1500,1500);

asctdata[29] = new Array(3000,2700,2400,2100,1800,1500,1200,900,600,300);
asctdata[30] = 700;
asctdata[31] = 15000;
asctdata[32] = new Array(2500,3000,3500,4000,4500,5000,5500,6000,6500,7000);
asctdata[33] = new Array(15000,14500,14000,13500,13000,12500,12000,11500,11000,10500);
asctdata[34] = new Array(1000,2000,3000,4000,5000);
asctdata[35] = new Array(5000,4700,4300,4000,3700,3400,3100,2900,2700,2500);
asctdata[36] = new Array(6000,7000,8000,9000,10000,11000,12000,13000,14000,15000);
asctdata[37] = new Array(1000,2000,3000,4000,5000);
asctdata[38] = new Array(1000,2000,3000,4000,5000);
asctdata[134]= 700;

asctdata[39] = 0;
asctdata[40] = 0;
asctdata[41] = 1000;
asctdata[42] = 0;
asctdata[43] = 0;
asctdata[44] = 0;
asctdata[45] = 0;
asctdata[46] = 0;
asctdata[131]= 0.3;
asctdata[135] = 0;

asctdata[47] = 5000;
asctdata[48] = 0;
asctdata[49] = new Array(6000,4000,2000,0);
asctdata[50] = 0;
asctdata[51] = 1000;
asctdata[52] = 15000;

asctdata[53] = 0;

asctdata[54] = 0;
asctdata[55] = 0;
asctdata[56] = 0;
asctdata[57] = 0;
asctdata[136]= 0;

asctdata[58] = 0;
asctdata[59] = 0;
asctdata[60] = 0;
asctdata[61] = 3000;

asctdata[62] = 1500;
asctdata[63] = 0;
asctdata[75] = 0;

asctdata[64] = new Array(2000,3000,4000,5000,6000);
asctdata[65] = 1000;
asctdata[66] = new Array(4000,3500,3000,2500,2000);
asctdata[67] = 0;
asctdata[68] = 0;
asctdata[137] = 0;

asctdata[69] = 1000;
asctdata[70] = 1000;
asctdata[71] = 0;

asctdata[72] = 0;
asctdata[73] = 0;
asctdata[74] = 0;

asctdata[76] = new Array(300,500,700,900,1000);
asctdata[77] = 0;
asctdata[78] = 0;

asctdata[79] = 300;
asctdata[80] = 0;

asctdata[81] = new Array(1000,2000,3000,4000,5000);
asctdata[82] = 2000;

asctdata[83] = 0;

asctdata[84] = 0;

asctdata[85] = new Array(2000,2500,3000,3500,4000);
asctdata[86] = 0;
asctdata[132]= 1000;

asctdata[87] = new Array(2000,2200,2400,2600,2800,3000,3200,3400,3600,3800);

asctdata[88] = 0;
asctdata[89] = 0;
asctdata[90] = 0;

asctdata[91] = 0;
asctdata[92] = 0;
asctdata[93] = 0;
asctdata[94] = 0;
asctdata[95] = 0;

asctdata[96] = 0;
asctdata[97] = 0;
asctdata[98] = 3000;
asctdata[99] = 0;
asctdata[100]= 0;
asctdata[101]= 0;
asctdata[102]= 0;
asctdata[103]= new Array(700,1400,2100,2800,3500,4200,4900,5600,6300,7000);
asctdata[104]= new Array(6000,5500,5000,4500,4000,3500,3000,2500,2000,1500);
asctdata[105]= 3000;
asctdata[106]= new Array(700,1400,2100,2800,3500,4200,4900,5600,6300,7000);
asctdata[107]= new Array(2000,2500,3000,3500,4000);
asctdata[108]= new Array(1000,2000,2000,3000,3000,4000,4000,5000,5000,6000);
asctdata[109]= 4000;
asctdata[110]= 4000;
asctdata[111]= 0;

asctdata[112] = 0;
asctdata[113] = 1000;
asctdata[114] = new Array(1200,1400,1600,1800,2000,2200,2400,2600,2800,3000);
asctdata[115] = 1500;
asctdata[116] = 1000;
asctdata[117] = 0;
asctdata[118] = 0;
asctdata[119] = 0;
asctdata[120] = 0;
asctdata[121] = 0;
asctdata[122] = 0;
asctdata[123] = 0;

asctdata[125] = 0;
asctdata[126] = 0;
asctdata[127] = 0;

asctdata[128] = 0;
asctdata[129] = 0;
asctdata[130] = 2000;

asctdata[138] = 1000;

// Cast Delay Tables - In Miliseconds [100 = .1 sec | 1000 = 1 sec]
asdtdata = new Array();
asdtdata[0] = 0;
asdtdata[1] = 0;

asdtdata[2] = 1000;
asdtdata[3] = new Array(1200,1200,1600,1600,2000,2000,2400,2400,2800,2500);
asdtdata[4] = new Array(1000,1200,1400,1600,1800,2000,2200,2400,2600,2800);
asdtdata[5] = 1500;
asdtdata[6] = 0;
asdtdata[7] = new Array(1000,1200,1400,1600,1800,2000,2200,2400,2600,2800);
asdtdata[8] = 1600;
asdtdata[9] = 0;
asdtdata[10] = new Array(1000,1200,1400,1600,1800,2000,2200,2400,2600,2800);
asdtdata[11] = 2000;

asdtdata[12] = 300;
asdtdata[13] = 300;
asdtdata[14] = 0;

asdtdata[15] = 0;
asdtdata[16] = 1000;
asdtdata[17] = 0;

asdtdata[18] = 0;
asdtdata[19] = 0;

asdtdata[20] = 0;
asdtdata[21] = 0;
asdtdata[22] = 0;

asdtdata[23] = 0;
asdtdata[24] = 0;
asdtdata[25] = 0;
asdtdata[26] = 1000;
asdtdata[27] = 0;
asdtdata[28] = 0;
asdtdata[133]= 0;

asdtdata[29] = 0;
asdtdata[30] = 2000;
asdtdata[31] = new Array(2000,3000,3000,4000,4000,5000,5000,6000,6000,7000);
asdtdata[32] = 0;
asdtdata[33] = 5000;
asdtdata[34] = 0;
asdtdata[35] = 1000;
asdtdata[36] = 5000;
asdtdata[37] = 1000;
asdtdata[38] = 1000;
asdtdata[134]= 0;

asdtdata[39] = 0;
asdtdata[40] = 0;
asdtdata[41] = 1000;
asdtdata[42] = 0;
asdtdata[43] = 0;
asdtdata[44] = 0;
asdtdata[45] = 0;
asdtdata[46] = 0;
asdtdata[131]= 300;
asdtdata[135]= 0;

asdtdata[47] = 0;
asdtdata[48] = new Array(2000,0);
asdtdata[49] = new Array(0,1000,2000,3000);
asdtdata[50] = new Array(3000,0);
asdtdata[51] = 3000;
asdtdata[52] = 4000;

asdtdata[53] = 0;

asdtdata[54] = 0;
asdtdata[55] = 0;
asdtdata[56] = 0;
asdtdata[57] = 0;
asdtdata[136]= 0;

asdtdata[58] = 0;
asdtdata[59] = 700;
asdtdata[60] = 0;
asdtdata[61] = 1500;

asdtdata[62] = 0;
asdtdata[63] = 0;
asdtdata[75] = 0;

asdtdata[64] = 500;
asdtdata[65] = 500;
asdtdata[66] = new Array(3000,2500,2000,1500,1000);
asdtdata[67] = 300;
asdtdata[68] = 300;
asdtdata[137]= 2000;

asdtdata[69] = 500;
asdtdata[70] = 500;
asdtdata[71] = 0;

asdtdata[72] = 500;
asdtdata[73] = 0;
asdtdata[74] = 1000;

asdtdata[76] = new Array(1200,1400,1600,1800,2000);
asdtdata[77] = 300;
asdtdata[78] = new Array(800,800,800,800,800,1000,1000,1000,1000,1000);

asdtdata[79] = 300;
asdtdata[80] = 1000;

asdtdata[81] = 1200;
asdtdata[82] = 500;

asdtdata[83] = 0;

asdtdata[84] = new Array(2000,2200,2400,2600,2800,3000,3200,3400,3600,3800);

asdtdata[85] = new Array(2000,3000,4000,5000,6000);
asdtdata[86] = 0;
asdtdata[132] = 1000;

asdtdata[87] = new Array(800,800,800,800,800,1000,1000,1000,1000,1000);

asdtdata[88] = 1000;
asdtdata[89] = 1000;
asdtdata[90] = new Array(800,800,800,800,800,1000,1000,1000,1000,1000);

asdtdata[91] = 0;
asdtdata[92] = 0;
asdtdata[93] = 0;
asdtdata[94] = 0;
asdtdata[95] = 0;

asdtdata[96] = 0;
asdtdata[97] = 0;
asdtdata[98] = 1000;
asdtdata[99] = 5000;
asdtdata[100]= 3000;
asdtdata[101]= 1500;
asdtdata[102]= 0;
asdtdata[103]= 0;
asdtdata[104]= 1000;
asdtdata[105]= 3000;
asdtdata[106]= 0;
asdtdata[107]= 0;
asdtdata[108]= 1000;
asdtdata[109]= 0;
asdtdata[110]= 0;
asdtdata[111]= 0;

asdtdata[112] = 500;
asdtdata[113] = 1000;
asdtdata[114] = 0;
asdtdata[115] = 0;
asdtdata[116] = 1000;
asdtdata[117] = new Array(1200,1400,1600,1800,2000,2200,2400,2600,2800,3000);
asdtdata[118] = 0;
asdtdata[119] = 0;
asdtdata[120] = 0;
asdtdata[121] = 0;
asdtdata[122] = 0;
asdtdata[123] = 0;

asdtdata[125] = 0;
asdtdata[126] = 0;
asdtdata[127] = 0;

asdtdata[128] = 0;
asdtdata[129] = 0;
asdtdata[130] = 0;

asdtdata[138] = 0;
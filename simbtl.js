/*Index**********

* Basic Battle-related Setting

* Monster Sort Functions
regionlisting()			:Not Implemented
regionchange(m)			:Not Implemented
mobsort(sortptn)		:Monster Sorting

* Monster Combat Funtions
showmobdata()			:Monster data display
showmoninfo()			:My lil baby ^^
readmob()			:Monster data variable reading
bbtshow()			:Basic battle data display
bbtcalc()			:Basic battle data calculation
zero(n)				:Negative damage correction
actcalc(a,b,c,d,e,f,g,h,i)	:Attack calculation
showallbtdata(n)		:Display all battle data

* Active Skills [AS] Funtions [Job]
astablelisting()		:Creates AS tables according to Job
asrtonoff()			:Auto-Calc Indicator [on/off]
asallcalc()			:Calc all AS skills [Contrainer]

* Active Skills [AS] Funtions [Equip]
eastablelisting()		:Creates AS tables according to Equipment
easrtonoff()			:Auto-Calc Indicator [on/off]
easallcalc()			:Calc all AS skills [Contrainer]

* Active Skill Calculations
ascalc(n, k, m)			:Complete AS skill calc [n:Skill ID, k:Skill Lv, m:Job[0]/Equip[1] ]
pp(a, b, c)			:Misc calc function for ascalc
badst(a, b, c)			:Misc calc function for ascalc

* Monster sub status functions
mobstatuscalc(l, m, n)		:Sub status change processing
mobstatuscheck(l)		:Compete sub status check

* Experience Functions and Sorts
bexpsort()			:Display Base experience in sequential order
jexpsort()			:Display Job experience in sequential order
topsort(a,b,c,d)		:Ranking Sort
expcalc()			:Calculate & Display Exp % gain

*****************/

// * Basic Battle-related Setting
pcong = new Array(4);
for (i = 0; i <= 3; i++) pcong[i] = new Array(10);

pcong[0][0] = new Array(100, 100, 100, 100, 100, 100, 100, 100, 25, 100);
pcong[0][1] = new Array(100, 25,  100, 150, 50,  100, 75,  100, 100, 100);
pcong[0][2] = new Array(100, 100, 100, 50,  150, 100, 75,  100, 100, 100);
pcong[0][3] = new Array(100, 50,  150, 25,  100, 100, 75,  100, 100, 125);
pcong[0][4] = new Array(100, 175, 50,  100, 25,  100, 75,  100, 100, 100);
pcong[0][5] = new Array(100, 100, 125, 125, 125, 0,   75,  50,  100, 0);
pcong[0][6] = new Array(100, 100, 100, 100, 100, 100, 0,   125, 100, 150);
pcong[0][7] = new Array(100, 100, 100, 100, 100, 50,  125, 0,   100, -25);
pcong[0][8] = new Array(25,  100, 100, 100, 100, 100, 75,  75,  125, 100);
pcong[0][9] = new Array(100, 100, 100, 100, 100, 50,  100, 0,   100, 0);
pcong[0][10] = new Array(92.5, 95, 102.5, 95, 95, 80, 77.5, 75, 95, 75);

pcong[1][0] = new Array(100, 100, 100, 100, 100, 100, 100, 100, 25, 100);
pcong[1][1] = new Array(100, 0, 100, 175, 25, 100, 50, 75, 100, 100);
pcong[1][2] = new Array(100, 100, 50, 25, 175, 100, 50, 75, 100, 100);
pcong[1][3] = new Array(100, 25, 175, 0, 100, 100, 50, 75, 100, 150);
pcong[1][4] = new Array(100, 175, 25, 100, 0, 100, 50, 75, 100, 100);
pcong[1][5] = new Array(100, 75, 125, 125, 125, 0, 50, 25, 75, -25);
pcong[1][6] = new Array(100, 100, 100, 100, 100, 100, -25, 150, 100, 175);
pcong[1][7] = new Array(100, 100, 100, 100, 100, 25, 150, -25, 100, -50);
pcong[1][8] = new Array(0, 75, 75, 75, 75, 75, 50, 50, 150, 125);
pcong[1][9] = new Array(100, 75, 75, 75, 75, 25, 125, 0, 100, 0);
pcong[1][10] = new Array(90, 82.5, 92.5, 87.5, 87.5, 72.5, 65, 52.5, 95, 77.5);

pcong[2][0] = new Array(100, 100, 100, 100, 100, 100, 100, 100, 0, 100);
pcong[2][1] = new Array(100, -25, 100, 200, 0, 100, 25, 50, 100, 125);
pcong[2][2] = new Array(100, 100, 0, 0, 200, 100, 25, 50, 100, 75);
pcong[2][3] = new Array(100, 0, 200, -25, 100, 100, 25, 50, 100, 175);
pcong[2][4] = new Array(100, 200, 0, 100, -25, 100, 25, 50, 100, 100);
pcong[2][5] = new Array(100, 50, 100, 100, 100, 0, 25, 0, 50, -50);
pcong[2][6] = new Array(100, 100, 100, 100, 100, 125, -50, 175, 100, 200);
pcong[2][7] = new Array(100, 100, 100, 100, 100, 0, 175, -50, 100, -75);
pcong[2][8] = new Array(0, 50, 50, 50, 50, 50, 25, 25, 175, 150);
pcong[2][9] = new Array(100, 50, 50, 50, 50, 0, 150, 0, 100, 0);
pcong[2][10] = new Array(90, 72.5, 80, 77.5, 77.5, 67.5, 52.5, 47.5, 92.5, 80);

pcong[3][0] = new Array(100, 100, 100, 100, 100, 100, 100, 100, 0, 100);
pcong[3][1] = new Array(100, -50, 100, 200, 0, 75, 0, 25, 100, 150);
pcong[3][2] = new Array(100, 100, -25, 0, 200, 75, 0, 25, 100, 50);
pcong[3][3] = new Array(100, 0, 200, -50, 100, 75, 0, 25, 100, 200);
pcong[3][4] = new Array(100, 200, 0, 100, -50, 75, 0, 25, 100, 100);
pcong[3][5] = new Array(100, 25, 75, 75, 75, 0, 0, -25, 25, -75);
pcong[3][6] = new Array(100, 75, 75, 75, 75, 125, -100, 200, 100, 200);
pcong[3][7] = new Array(100, 75, 75, 75, 75, -25, 200, -100, 100, -100);
pcong[3][8] = new Array(0, 25, 25, 25, 25, 25, 0, 0, 200, 175);
pcong[3][9] = new Array(100, 25, 25, 25, 25, -25, 175, 0, 100, 0);
pcong[3][10] = new Array(80, 57.5, 65, 62.5, 62.5, 50, 37.5, 27.5, 92.5, 80);


scong = new Array(13);

scong[0] = new Array(100, 100, 100);
scong[1] = new Array(75, 100, 75);
scong[2] = new Array(75, 75, 100);
scong[3] = new Array(100, 75, 50);
scong[4] = new Array(75, 100, 75);
scong[5] = new Array(50, 75, 100);
scong[6] = new Array(50, 75, 100);
scong[7] = new Array(75, 75, 100);
scong[8] = new Array(75, 75, 100);
scong[9] = new Array(75, 100, 100);
scong[10] = new Array(100, 100, 50);
scong[11] = new Array(100, 100, 100);
scong[12] = new Array(100, 100, 100);
scong[13] = new Array(100, 100, 75);
scong[14] = new Array(100, 100, 75);
scong[15] = new Array(100, 75, 50);
scong[16] = new Array(75, 100, 75);
scong[17] = new Array(75, 100, 50);
scong[18] = new Array(100, 75, 50);
scong[19] = new Array(100, 75, 50);
scong[20] = new Array(100, 75, 50);
scong[21] = new Array(100, 100, 100);
scong[22] = new Array(100, 100, 100);
scong[23] = new Array(100, 100, 100);
scong[24] = new Array(100, 100, 100);
scong[25] = new Array(100, 100, 100);

clsname = new Array('Normal','Boss','Guardian','-','Unkown');

psvpc = new Array(0, 0);
// Normal attack variation
// 0: Double Attack, 1: Raging Trifecta Blow

addpc = new Array(0, 0, 0, 0);
// Normal follow-up attack
// 0: Blitz Beat, 1: AutoSpell, 2: HP Absorption, 3: SP Absorption

mp = new Array();
for(i=0;i<=monnum;i++)mp[i]=i;

sortname = new Array();
sortname[0]='Name';
sortname[1]='Range';
sortname[2]='Level';
sortname[3]='HP';
sortname[7]='95% Flee';
sortname[8]='100% Hit';
sortname[27]='Quagmired Hit';
sortname[28]='Quagmired Flee';
sortname[29]='Offensive Bless Hit';
sortname[9]='Critical Def';
sortname[12]='Def';
sortname[21]='Mdef';
sortname[10]='Average Atk';
sortname[13]='BaseExp';
sortname[14]='JobExp';
sortname[16]='Aspd';
sortname[17]='Attribute';
sortname[20]='Race';

msupport = new Array();
for (i=0; i<=215; i++) msupport[i] = 0;

/* Job attack skill list - list of skill IDs [asdata.js]
jobaslist[] = new Array(,...);
0) Number of skills
1-[0]) Skill ID numbers found in [asdata.js]
*/
jobaslist = new Array();
jobaslist[0] = new Array(0);
jobaslist[1] = new Array(2,0,1);
jobaslist[2] = new Array(10,2,3,4,5,6,7,8,9,10,11);
jobaslist[3] = new Array(3,12,13,14);
jobaslist[4] = new Array(3,15,16,17);
jobaslist[5] = new Array(2,18,19);
jobaslist[6] = new Array(3,20,21,22);
jobaslist[7] = new Array(5,91,92,93,94,95);
jobaslist[8] = new Array(16,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111);
jobaslist[9] = new Array(12,112,113,114,115,116,117,118,119,120,121,122,123);
jobaslist[14] = new Array(9,0,1,23,24,25,26,27,28,133);
jobaslist[15] = new Array(21,2,3,4,5,6,7,8,9,10,11,29,30,31,32,33,34,35,36,37,38,134);
jobaslist[16] = new Array(13,12,13,14,39,40,41,42,43,44,45,46,131,135);
jobaslist[17] = new Array(9,15,16,17,47,48,49,50,51,52);
jobaslist[18] = new Array(3,18,19,53);
jobaslist[19] = new Array(8,20,21,22,54,55,56,57,136);
jobaslist[20] = new Array(8,91,92,93,94,95,125,126,127);
jobaslist[27] = new Array(7,0,1,16,58,59,60,61);
jobaslist[28] = new Array(12,2,3,4,5,6,7,8,9,10,11,37,38);
jobaslist[29] = new Array(6,12,13,14,62,63,75);
jobaslist[30] = new Array(9,15,16,17,64,65,66,67,68,137);
jobaslist[31] = new Array(5,18,19,69,70,71);
jobaslist[32] = new Array(7,20,21,22,12,72,73,74);
jobaslist[33] = new Array(3,128,129,130);
jobaslist[40] = new Array(12,0,1,23,24,25,26,27,28,76,77,78,133);
jobaslist[41] = new Array(23,2,3,4,5,6,7,8,9,10,11,29,30,31,32,33,34,35,36,37,38,79,80,134);
jobaslist[42] = new Array(15,12,13,14,39,40,41,42,43,44,45,46,81,82,131,135);
jobaslist[43] = new Array(9,15,16,17,47,48,49,50,51,52);
jobaslist[44] = new Array(4,18,19,53,83);
jobaslist[45] = new Array(9,20,21,22,54,55,56,57,84,136);
jobaslist[53] = new Array(10,0,1,16,58,59,60,61,85,86,132);
jobaslist[54] = new Array(12,2,3,4,5,6,7,8,9,10,11,37,38);
jobaslist[55] = new Array(7,12,13,14,62,63,75,87);
jobaslist[56] = new Array(12,15,16,17,64,65,66,67,68,88,89,90,137);
jobaslist[57] = new Array(6,18,19,69,70,71,138);
jobaslist[58] = new Array(7,20,21,22,12,72,73,74);
jobaslist[66] = new Array(16,0,1,2,3,4,5,6,7,8,9,10,11,15,16,18,20);

asrtcng = 0;
easrtcng = 0;
expcng = 0;
sanctuary = new Array(100,200,300,400,500,600,777,777,777,777);

// * Monster Sort Functions
/*Clean Up*/
// Use fast sort. Not bubble
function mobsort(sortptn) {
	MobSort.innerHTML = sortname[sortptn];

	for (i = 0; i <= monnum; i++) {
		for (j = i+1; j <= monnum; j++) {
			if (monsterdata[j][0] < monsterdata[i][0]) {
				tmp = monsterdata[i];
				monsterdata[i] = monsterdata[j];
				monsterdata[j] = tmp;
			}
		}
	}
if (sortptn != 7 && sortptn != 8 && sortptn != 27 && sortptn != 28 && sortptn != 29 && sortptn != 10) {
	for (i = 0; i <= monnum; i++) {
		for (j = 0; j <= monnum - 1; j++) {
			if (monsterdata[j][sortptn] > monsterdata[j+1][sortptn]) {
				tmp = monsterdata[j+1];
				monsterdata[j+1] = monsterdata[j];
				monsterdata[j] = tmp;
			}
		}
	}
}
else if (sortptn == 7 || sortptn == 8) {
	for (i = 0; i <= monnum; i++) {
		for (j = 0; j <= monnum - 1; j++) {
			if (monsterdata[j][sortptn] + monsterdata[j][2] > monsterdata[j+1][sortptn] + monsterdata[j+1][2]) {
				tmp = monsterdata[j+1];
				monsterdata[j+1] = monsterdata[j];
				monsterdata[j] = tmp;
			}
		}
	}
}
else if (sortptn == 10) {
	for (i = 0; i <= monnum; i++) {
		for (j = 0; j <= monnum - 1; j++) {
			if (monsterdata[j][10]*2 + monsterdata[j][11] > monsterdata[j+1][10]*2 + monsterdata[j+1][11]) {
				tmp = monsterdata[j+1];
				monsterdata[j+1] = monsterdata[j];
				monsterdata[j] = tmp;
			}
		}
	}
}
else if (sortptn == 27 || sortptn == 28) {
	for (i = 0; i <= monnum; i++) {
		for (j = 0; j <= monnum - 1; j++) {
			if (monsterdata[j][19] == 0) a = Math.ceil(monsterdata[j][sortptn - 20] / 2 + monsterdata[j][2]);
			else a = monsterdata[j][sortptn - 20] + monsterdata[j][2];
			if (monsterdata[j+1][19] == 0) b = Math.ceil(monsterdata[j+1][sortptn - 20] / 2 + monsterdata[j+1][2]);
			else b = monsterdata[j+1][sortptn - 20] + monsterdata[j+1][2];
			if (a > b) {
				tmp = monsterdata[j+1];
				monsterdata[j+1] = monsterdata[j];
				monsterdata[j] = tmp;
			}
		}
	}
}
else {
	for (i = 0; i <= monnum; i++) {
		for (j = 0; j <= monnum - 1; j++) {
			if (monsterdata[j][19] == 0 && (monsterdata[j][20] == 1 || monsterdata[j][20] == 6)) a = Math.ceil(monsterdata[j][7] / 2 + monsterdata[j][2]);
			else a = monsterdata[j][7] + monsterdata[j][2];
			if (monsterdata[j+1][19] == 0 && (monsterdata[j+1][20] == 1 || monsterdata[j+1][20] == 6)) b = Math.ceil(monsterdata[j+1][7] / 2 + monsterdata[j+1][2]);
			else b = monsterdata[j+1][7] + monsterdata[j+1][2];
			if (a > b) {
				tmp = monsterdata[j+1];
				monsterdata[j+1] = monsterdata[j];
				monsterdata[j] = tmp;
			}
		}
	}
}

if (sortptn == 17) {
	for (i = 0; i <= monnum; i++) {
		for (j = 0; j <= monnum - 1; j++) {
			if (monsterdata[j][sortptn] % 20 > monsterdata[j + 1][sortptn] % 20) {
				tmp = monsterdata[j+1];

				monsterdata[j+1] = monsterdata[j];
				monsterdata[j] = tmp;
			}
		}
	}
}
	n = 0;
	while (monsterdata[n][3] < 30) n++;
	monselect = '<select name="mnum" onChange="showmobdata();bbtshow();" size="8"><option value="' + n + '" selected>' + monsterdata[n][0] + '</option>';
	tmp = new Array();

	for (i=0; i<n+1; i++) tmp[i] = ''
	for (i = n + 1; i <= monnum; i++) if (monsterdata[i][3] >= 30) tmp[i] = '<option value="' + i + '">' + monsterdata[i][0] + '</option>';
	else tmp[i] = '';

	i = 1;
	while (tmp.length>i) {
		for (j=0; j<tmp.length-i; j+=2*i) tmp[j] += tmp[j+i];
		i*=2;
	}

	monselect += tmp[0];

	tmp = '';


	monselect += '</select>';
	MobList.innerHTML = monselect;
	monselect = '';
	showmobdata();

	MM_showHideLayers('MobSortLayer','','hide');
}

// * Monster Combat Funtions
/*Clean Up*/
// W3C Standards
function showmobdata() {
	mnum = eval(document.frm.mnum.value);
	if (monsterdata[mnum][19] == 1) {
		for (i=50; i<=71; i++) if ((i!=63 && i!=65) && msupport[i]) {
			msupport[i] = 0;
			document.getElementById('MobSupportLvView' + i).innerHTML = supoff;
		}
		for (i=123; i<=127; i++) if (msupport[i]) {
			msupport[i] = 0;
			document.getElementById('MobSupportLvView' + i).innerHTML = supoff;
		}
		msupport[117] = 0;
		MobSupportLvView117.innerHTML = supoff;
		msupport[4] = 0;
		MobSupportLvView4.innerHTML = supoff;
	}
	
	readmob();
	showmoninfo();
	if (!condbonus() && condbonusdata) { readbonus(0); statuscalc(1); condbonusdata = false; }

	MobRange.innerHTML = monsterdata[mnum][1];
	MobLv.innerHTML = monsterdata[mnum][2];
	MobHP.innerHTML = monsterdata[mnum][3];
	MobAtk.innerHTML = mobminatk + '-' + mobmaxatk;

	MobAspd.innerHTML = (4000-mobrecharge)/20;
	MobFlee.innerHTML = (mobflee+20);
	MobHit.innerHTML = (mobhit+75);
	MobMatk.innerHTML = mobminmatk + '-' + mobmaxmatk;

	if (mobmaxvd == mobminvd) MobDef.innerHTML = mobdef + '+' + mobmaxvd;
	else MobDef.innerHTML = mobdef + '+' + mobminvd + '-' + mobmaxvd;
	MobMdef.innerHTML = mobmdef + '+' + mobimdef;
	MobLuk.innerHTML = mobluk*2/10;
	MobExp.innerHTML = mobbasexp + '/' + mobjobexp;
	
	if (monsterdata[mnum][19] > 2) MobClass.innerHTML = clsname[0];
	else MobClass.innerHTML = clsname[monsterdata[mnum][19]];
	MobScale.innerHTML = propname[mobscale+20];
	MobProperty.innerHTML = propname[mobprop] + mobproplv;
	MobRace.innerHTML = propname[mobrace+10];
}

/*Clean Up*/
// Just clean it.
function showmoninfo() {
	i = monsterdata[mnum][23];
	
	// Monster Image
	MonImg.innerHTML =  '<img src="img2/monster/' + i + '.gif">';
	
	// Monster Stats
	meh = '<table width="100%" table border="1" bordercolor="#D6D6D6" cellspacing="1"><tr><td class="gray" width="25%">STR</td><td width="25%" align="right">'+monsterdata[mnum][4]+'</td><td class="gray" width="25%">INT</td><td width="25%" align="right">'+monsterdata[mnum][5]+'</td></tr>';
	meh += '<tr><td class="gray">AGI</td><td align="right">'+monsterdata[mnum][8]+'</td><td class="gray">DEX</td><td align="right">'+monsterdata[mnum][7]+'</td></tr>';
	meh += '<tr><td class="gray">VIT</td><td align="right">'+monsterdata[mnum][6]+'</td><td class="gray">LUK</td><td align="right">'+monsterdata[mnum][9]+'</td></tr></table>';
	MonStats.innerHTML = meh;
	
	// Monster Location
	amount = monsterloca[i][0];
	places = '';
	z = 1;
	meh = '<table width="100%" table border="1" bordercolor="#D6D6D6" cellspacing="1"><tr class="gray"><td>Map</td><td>Map Name</td><td>Number on Map</td></tr>';
	while(z < amount*2){
		places += '<tr class="data"><td>';

		where = monsterloca[i][z];
		mobs = monsterloca[i][z+1];
		
		places += locations[where][0];
		places += '</td><td>';
		places += locations[where][1];
		places += '</td><td>';
		places += mobs;
		places += '</td></tr>';
		z += 2
	}
	meh += places;
	meh += '</table>';
	MonLocation.innerHTML = meh;
	
	// Monster Skill
	amount = monsterskill[i][0];
	meh = '<br><ul>';
	skillz = '';
	z = 1;
	while(z < amount*2){
		skillz += '<li>';
		tmp = monsterskill[i][z];
		tmp2 = monsterskill[i][z+1];
	
		skillz += 'Lv ' + tmp2 + ' - ';
		skillz += skilldata[tmp][0];
		skillz += '</li>';
		z += 2
	}
	meh += skillz;
	meh += '</ul>';
	MonSkill.innerHTML = meh;
	
	// Monster AI
	amount = monsterabil[i][0];
	meh = '<br><ul>';
	AI = '';
	z = 1;
	while(z <= amount){
		AI += '<li>';
		tmp = monsterabil[i][z];
		AI += mobAI[tmp];
		AI += '</li>';
		z ++
	}
	meh += AI;
	meh += '</ul>';
	MonAI.innerHTML = meh;
	
	// Monster Drop
	MonDrop.innerHTML = monsterdrop[i];
	
	// Monster Element List - v2
	meh = '<table width="100%" table border="1" bordercolor="#D6D6D6" cellspacing="1">';
	tmp = '';
	tmp = new Array(2);
	tmp[0] = new Array(5);
	tmp[1] = new Array(5);
	tmp2 = '';
	
	for(i=0;i<=4;i++) {
		if (pcong[mobproplv-1][i][mobprop] > 100) tmp2='8FBC8F';
		else if (pcong[mobproplv-1][i][mobprop] < 100) tmp2='BC8F8F';
		else tmp2='';
		tmp[0][i] = '<tr><td class="gray">'+propname[i]+'</td><td><font color="#'+tmp2+'">'+pcong[mobproplv-1][i][mobprop]+'%</font></td>';
	}
	for(i=5;i<=9;i++) {
		if (pcong[mobproplv-1][i][mobprop] > 100) tmp2='8FBC8F';
		else if (pcong[mobproplv-1][i][mobprop] < 100) tmp2='BC8F8F';
		else tmp2='';
		tmp[1][i-5] = '<td class="gray">'+propname[i]+'</td><td><font color="#'+tmp2+'">'+pcong[mobproplv-1][i][mobprop]+'%</font></td></tr>';
	}
	
	for(i=0;i<=4;i++) meh+=tmp[0][i]+tmp[1][i];
	
	meh += '</table>';	
	MonElem.innerHTML = meh;
		
}

function readmob() {
	mobhp = monsterdata[mnum][3];
	mobint = monsterdata[mnum][5];
	mobvit = monsterdata[mnum][6];
	mobdex = monsterdata[mnum][7];
	mobagi = monsterdata[mnum][8];
	mobluk = monsterdata[mnum][9];
	mobminatk = monsterdata[mnum][10];
	mobmaxatk = (monsterdata[mnum][10]+monsterdata[mnum][11]);
	mobdef = monsterdata[mnum][12];
	mobrecharge = monsterdata[mnum][16];
	mobrace = monsterdata[mnum][20];

	if (msupport[2]) mobagi += msupport[2]+2;
	if (msupport[4] && (mobprop == 9 || mobrace == 6)) {
		mobdex -= Math.floor(mobdex/2);
		mobint -= Math.floor(mobint/2);
	}
	if (msupport[64]) {		
		mobagi -= Math.floor(mobagi*(0.1*msupport[64]));
		mobdex -= Math.floor(mobdex*(0.1*msupport[64]));
	}
	if (msupport[62]) mobagi -= msupport[62]+2;
	if (support[168]) {
		switch(support[168]) {
			case 2:
			case 3: mobagi -= 3; break;
			case 4:
			case 5:
			case 6:
			case 7: mobagi -= 5; break;
			case 8:
			case 9:
			case 10: mobagi -= 8; break;
		}
	}

	if (msupport[68]) {
		mobminatk = Math.floor(mobminatk*9/10);
		mobmaxatk = Math.floor(mobmaxatk*9/10);
	}
	if (msupport[214]) {
		mobminatk = Math.floor(mobminatk*(100-25)/100);
		mobmaxatk = Math.floor(mobmaxatk*(100-25)/100);
	}
	if (msupport[69]) mobdef = Math.round(mobdef*85/100);
	if (msupport[70]) mobvit = Math.floor(mobvit*3/5);
	if (msupport[71]) mobint = Math.floor(mobint*3/5);

	mobminvd = mobvit;
	mobmaxvd = mobvit + Math.pow(Math.floor(mobvit/20),2);
	mobflee = monsterdata[mnum][2]+mobagi;
	if (msupport[118]) mobflee = Math.floor(mobflee/2);
	mobhit = monsterdata[mnum][2]+mobdex;
	mobminmatk = Math.pow(Math.floor(mobint/7),2) + mobint;
	mobmaxmatk = Math.pow(Math.floor(mobint/5),2) + mobint;
	mobprop = monsterdata[mnum][17]%20;
	mobproplv = Math.floor(monsterdata[mnum][17]/20);
	mobscale = monsterdata[mnum][18];
	mobmdef = monsterdata[mnum][21];
	mobimdef = mobint + Math.floor(mobvit/2);
	mobbasexp = monsterdata[mnum][13];
	mobjobexp = monsterdata[mnum][14];
	if (mobminvd != mobmaxvd) mobmaxvd--;

	if (msupport[50]) {
		mobdef = Math.round(mobdef*0.75);
		mobminvd = Math.floor(mobminvd*0.75);
		mobmaxvd = Math.floor(mobmaxvd*0.75);
	}
	if (msupport[215]) {
		mobdef = Math.round(mobdef * (1-msupport[215]*0.05));
		mobminvd = Math.round(mobminvd * (1-msupport[215]*0.05));
		mobmaxvd = Math.round(mobmaxvd * (1-msupport[215]*0.05));
	}
	
	if (msupport[51]) {
		mobprop = 1;
		mobproplv = 1;
		mobdef = Math.round(mobdef/2);
		mobmdef = Math.round(mobmdef*1.25);
	}
	if (msupport[52]) {
		mobprop = 2;
		mobproplv = 1;
		mobdef = Math.round(mobdef/2);
		mobmdef = Math.round(mobmdef*1.25);
	}
	if (msupport[54]) {
		mobminatk = Math.floor(mobminatk*0.75);
		mobmaxatk = Math.floor(mobmaxatk*0.75);
		mobluk = 0;
	}
	if (msupport[56]) {
		mobhit = Math.floor(mobhit*0.75);
		mobflee = Math.floor(mobflee*0.75);
	}
	mobminatk += Math.floor(mobminatk*0.02 * msupport[61]);
	mobmaxatk += Math.floor(mobmaxatk*0.02 * msupport[61]);
	mobdef = Math.round(mobdef*((100-6*msupport[61])/100)*((100-50*msupport[125])/100)*((100-25*msupport[125])/100));
	mobminvd -= Math.ceil(mobminvd*0.06 * msupport[61]);
	mobmaxvd -= Math.ceil(mobmaxvd*0.06 * msupport[61]);

	if (msupport[63] && (mobprop == 9 || mobrace == 6)) mobdef = Math.round(mobdef * (90 - msupport[63]*2)/100);

	if (msupport[84] || msupport[86]) mobrecharge -= Math.floor(mobrecharge * 0.3);
	if (msupport[123]) mobrecharge += Math.floor(mobrecharge * 0.25);
	if (msupport[124]) mobrecharge += Math.floor(mobrecharge * 0.1);
	if (msupport[88]) mobminatk = mobmaxatk;


	if (msupport[200]) {
		mobprop = 0;
		mobproplv = msupport[200];
	}
	if (msupport[201]) {
		mobprop = 1;
		mobproplv = msupport[201];
	}
	if (msupport[202]) {
		mobprop = 2;
		mobproplv = msupport[202];
	}
	if (msupport[203]) {
		mobprop = 3;
		mobproplv = msupport[203];
	}
	if (msupport[204]) {
		mobprop = 4;
		mobproplv = msupport[204];
	}
	if (msupport[205]) {
		mobprop = 5;
		mobproplv = msupport[205];
	}
	if (msupport[206]) {
		mobprop = 6;
		mobproplv = msupport[206];
	}
	if (msupport[207]) {
		mobprop = 7;
		mobproplv = msupport[207];
	}
	if (msupport[208]) {
		mobprop = 8;
		mobproplv = msupport[208];
	}
	if (msupport[209]) {
		mobprop = 9;
		mobproplv = msupport[209];
	}

	mobdef *= 1+msupport[211];

	if (msupport[67]) {
		mobdef = 0;
		mobminvd = 0;
		mobmaxvd = 0;
	}
	
	if (msupport[117] && monsterdata[mnum][1] >= 4) {
		mobhit = Math.floor(mobhit * (75/100));
		mobminatk = Math.floor(mobminatk/2);
		mobmaxatk = Math.floor(mobmaxatk/2);
	}
	
	if (msupport[126]) {
		mobminatk -= Math.floor(mobminatk * (25/100));
		mobmaxatk -= Math.floor(mobmaxatk * (25/100));
	}
	if (msupport[212]) {
		mobminatk *= 4;
		mobmaxatk *= 4;
		mobdef /= 2;
	}
	if (msupport[213]) {
		mobdef = 90;
		mobmdef = 90;
	}
}
function bbtshow() {
	mobatkprop = 0;
	bbtcalc();

	// Recovery Item
	minhpri = itemdata[hpi][15];
	maxhpri = itemdata[hpi][16]-1;

	maxhpri=Math.max(minhpri,maxhpri);

	avehpri=0;
	for (i=minhpri; i<=maxhpri; i++) avehpri += Math.floor(Math.floor(i * (100 + chrvit*2 + skilllv[3]*10)/100) * (100 + skilllv[1202]*5)/100);
	avehpri /= maxhpri - minhpri + 1;

	minhpri = Math.floor(Math.floor(minhpri * (100 + chrvit*2 + skilllv[3]*10)/100) * (100 + skilllv[1202]*5)/100);
	maxhpri = Math.floor(Math.floor(maxhpri * (100 + chrvit*2 + skilllv[3]*10)/100) * (100 + skilllv[1202]*5)/100);

	HPRItemEfficacy.innerHTML = minhpri + '-' + maxhpri;
	HPREWeight.innerHTML = Math.round(avehpri/itemdata[hpi][2]*100)/100;
	if (itemdata[hpi][4]) HPREPrice.innerHTML = Math.round(avehpri/Math.floor(itemdata[hpi][4]*0.76)*100)/100;
	else HPREPrice.innerHTML = 'N/A';

	ncsir = -Math.floor(posthpr/avehpri);
	ncsinr = -Math.floor(posthpnr/avehpri);


	// Minus
	if (btaveatk <= 0) {
		minfrq = 'N/A';
		modefrq = 'N/A';
		minterm = 'N/A';
		modeterm = 'N/A';
		posthpnr = 'N/A';
		posthpr = 'N/A';
		ncsir = 'N/A';
		ncsinr = 'N/A';
	}
	else {
		if (minfrq > 10000) minfrq = 'NA';
		if (modefrq > 10000) modefrq = 'NA';
		if (minterm > 10000) minterm = 'NA';
		else minterm = Math.round(minterm * 100)/100;
		if (modeterm > 10000) modeterm = 'NA';
		else modeterm = Math.round(modeterm * 100)/100;
		if (posthpr < -100000) posthpr = 'NA';
		else posthpr = Math.round(posthpr * 100)/100;
		if (posthpnr < -100000) posthpnr = 'NA';
		else posthpnr = Math.round(posthpnr * 100)/100;

		if (posthpr >= 0) ncsir = 'NA';
		else if (ncsir * itemdata[hpi][2] >= (mweight / 2 - eqweight)) ncsir = 'NA';

		if (posthpnr >= 0) NecessaryItemNR.innerHTML = 'NA';
		else if (ncsinr * itemdata[hpi][2] >= (mweight * 9 / 10 - eqweight)) ncsinr = 'NA';
	}

	btallhit = bthit * psvpc[1] + bthit * psvpc[0]*(100-psvpc[1])/100 + btallhit*(100-psvpc[0])*(100-psvpc[1])/10000;
	
	// Misc Display
	if (bonusdata[313]) {
		mobbasexp = Math.floor(monsterdata[mnum][13] * (100 + bonusdata[313]) / 100);
		mobjobexp = Math.floor(monsterdata[mnum][14] * (100 + bonusdata[313]) / 100);
		MobExp.innerHTML = mobbasexp + '/' + mobjobexp;
	}
	else {
		mobbasexp = monsterdata[mnum][13];
		mobjobexp = monsterdata[mnum][14];
		MobExp.innerHTML = mobbasexp + '/' + mobjobexp;		
	}

	// Battle Display
	BattleHit.innerHTML = bthit;
	BattleFlee.innerHTML = btflee;
	BattleCritical.innerHTML = btcritical;
	BattleRecharge.innerHTML = Math.round(recharge/5)/100;
	BattleAllHit.innerHTML = Math.round(btallhit)/100;
	BattleAllFlee.innerHTML = btallflee;
	tmp = '<font color="">';
	if (pcong[mobproplv-1][bonusdata[3]][mobprop] < 100) tmp = '<font color="BC8F8F">';
	else if (pcong[mobproplv-1][bonusdata[3]][mobprop] > 100) tmp = '<font color="8FBC8F">';
	BattleProperty.innerHTML = tmp + pcong[mobproplv-1][bonusdata[3]][mobprop] + '</font>';

	BattlePassiveName.innerHTML = 'Passive';
	BattlePassivePercent.innerHTML = 'Without';
	PassiveName.innerHTML = '';
	DoubleName.innerHTML = '';
	if (psvpc[0]) {
		BattlePassiveName.innerHTML = 'Dbl Atk';
		BattlePassivePercent.innerHTML = psvpc[0] + '%';
		PassiveName.innerHTML = '';
		DoubleName.innerHTML = 'Dbl Atk';
	}	
	if (psvpc[1]) {
		BattlePassiveName.innerHTML = 'Raging Trifecta Blow';
		BattlePassivePercent.innerHTML = psvpc[1] + '%';
		PassiveName.innerHTML = 'Raging Trifecta Blow';
	}
	if (addpc[0]) {
		BattlePassiveName.innerHTML = 'Falcon';
		BattlePassivePercent.innerHTML = Math.round(addpc[0]*btallhit/100)/100 + '%';
		PassiveName.innerHTML = 'Falcon';
	}
	if (addpc[1]) {
		BattlePassiveName.innerHTML = 'Autospell';
		BattlePassivePercent.innerHTML = addpc[1] + '%';
		PassiveName.innerHTML = 'Magic';
	}

	if (bonusdata[252]) {
		HPAbsorptionOn.innerHTML = 'Recover';
		HPAbsorption.innerHTML = Math.floor(btminatk*bonusdata[252]/100) + '-' + Math.floor(btmaxatk*bonusdata[252]/100) +' ('+hpabs+')';
	}
	else {
		HPAbsorptionOn.innerHTML = '';
		HPAbsorption.innerHTML = '';
	}

	if (itemdata[eq[4]][1] == 15) {
		PassiveName.innerHTML = 'Passive';
		NomalLeft.innerHTML = 'Passive';
	}
	else if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
		NomalLeft.innerHTML = 'Left H';
	}
	else {
		NomalLeft.innerHTML = '';
	}

	if (btmaxcriatk != btmincriatk) CriticalAttack.innerHTML = btmincriatk + '-' + btmaxcriatk;
	else CriticalAttack.innerHTML = btmaxcriatk;

	if (btmaxatk != btminatk) NomalAttack.innerHTML = btminatk + '-' + btmaxatk;
	else NomalAttack.innerHTML = btmaxatk;
	
	if (psvpc[0]) {
		tmp1 = btminatk*2+btminatk_l;
		tmp2 = btmaxatk*2+btmaxatk_l;
		if (tmp2 != tmp1) DoubleAttack.innerHTML = tmp1 + '-' + tmp2;
		else DoubleAttack.innerHTML = tmp2;
	}
	else DoubleAttack.innerHTML = '';

	if (maxpsvatk) {
		if (maxpsvatk != minpsvatk) PassiveAttack.innerHTML = minpsvatk + '-' + maxpsvatk;
		else PassiveAttack.innerHTML = maxpsvatk;
	}
	else if (maxaddatk) {
		if (maxaddatk != minaddatk) PassiveAttack.innerHTML = minaddatk + '-' + maxaddatk;
		else PassiveAttack.innerHTML = maxaddatk;
	}
	else if (aveasatk) {
		PassiveAttack.innerHTML = aveasatk;
	}
	else {
		PassiveAttack.innerHTML = '';
	}

	if (btmaxatk_l) {
		if (btmaxatk_l != btminatk_l) NomalAttackLeft.innerHTML = btminatk_l + '-' + btmaxatk_l;
		else NomalAttackLeft.innerHTML = btmaxatk_l;
	}
	else NomalAttackLeft.innerHTML = '';

	AttackExpectation.innerHTML = Math.round(btsecatk * 100)/100;
	MinFrequency.innerHTML = minfrq;
	ModeFrequency.innerHTML = modefrq;
	NomalDamage.innerHTML = mindmg + '-' + maxdmg;
	DamageExpectation.innerHTML = Math.round(secdmg * 100)/100;
	MinTerm.innerHTML = minterm;
	ModeTerm.innerHTML = modeterm;
	BaseEfficiency.innerHTML = Math.min(Math.round(baseeff * 100)/100, mobbasexp);
	JobEfficiency.innerHTML = Math.min(Math.round(jobeff * 100)/100, mobjobexp);

	PostBtHPR.innerHTML = posthpr;
	PostBtHPNR.innerHTML = posthpnr;

	NecessaryItemR.innerHTML = ncsir;
	NecessaryItemNR.innerHTML = ncsinr;
	
	// Character specific
	critical = (chrluk * 3 / 10 + 1 + bonusdata[22] + bonusdata[76+mobprop] + bonusdata[86+mobrace] + bonusdata[96+mobscale]) * (1 + bonusdata[23] / 100);
	ChrCritical.innerHTML = critical;
	
	if (expcng) expcalc();
	if (asrtcng) asallcalc();
	if (easrtcng) easallcalc();
}
function bbtcalc() {

	// Conditional calculation
	bonusdata[30] = skilllv[694]*2 + support[104]*20;
	if ((skilllv[1] || skilllv[1241] || skilllv[2601]) && (itemdata[eq[4]][1] == 12 || itemdata[eq[4]][1] == 14)) bonusdata[30] += (skilllv[1]+skilllv[1241]+skilllv[2601]) * 4;
	if (skilllv[2] && itemdata[eq[4]][1] == 13) bonusdata[30] += skilllv[2] * 4;
	if ((skilllv[122] || skilllv[1042] || skilllv[2624]) && (mobprop == 9 || mobrace == 6)) bonusdata[30] += (skilllv[122]+skilllv[1042]+skilllv[2624]) * 3;
	if ((skilllv[521] || skilllv[1045]) && (itemdata[eq[4]][1] == 18 || itemdata[eq[4]][1] == 19)) {
		if (support[85] || support[90]) bonusdata[30] += (skilllv[521] + skilllv[1045]) * 5;
		else bonusdata[30] += (skilllv[521] + skilllv[1045]) * 4;
	}
	if (skilllv[602] && (mobrace == 2 || mobrace == 4)) bonusdata[30] += skilllv[602] * 4;
	if (support[160] && (mobrace == 2 || mobrace == 4)) bonusdata[30] += chrstr;
	if (skilllv[643] && itemdata[eq[4]][1] == 20) bonusdata[30] += skilllv[643] * 3;
	if (skilllv[723] && itemdata[eq[4]][1] == 15) bonusdata[30] += skilllv[723] * 3;
	if (skilllv[1084] && itemdata[eq[4]][1] == 21) bonusdata[30] += skilllv[1084] * 3;
	if (skilllv[1121] && (itemdata[eq[4]][1] == 27 || itemdata[eq[4]][1] == 28)) bonusdata[30] += skilllv[1121] * 3;
	if (skilllv[1161] && (itemdata[eq[4]][1] == 11 || itemdata[eq[4]][1] == 26)) bonusdata[30] += skilllv[1161] * 3;
	if (skilllv[1201] && (itemdata[eq[4]][1] == 16 || itemdata[eq[4]][1] == 17)) bonusdata[30] += skilllv[1201] * 3;
	if (support[161] && itemdata[eq[4]][1] == 36) bonusdata[30] += 20 + support[161]*10;

	if ((skilllv[121] || skilllv[1041] || skilllv[2623]) && (mobprop == 9 || mobrace == 6)) dp = (skilllv[121]+skilllv[1041]+skilllv[2623]) * 3;
	else dp = 0;

	if (support[85] || support[90]) {
		scong[7][1] = 100;
		scong[8][1] = 100;
	}
	else {
		scong[7][1] = 75;
		scong[8][1] = 75;
	}

	if (bonusdata[302]) {
		scalecong = 100;
		scalecong_l = 100;
	}
	else {
		scalecong = scong[itemdata[eq[4]][1]-11][mobscale];
		if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) scalecong_l = scong[itemdata[eq[5]][1]-11][mobscale];
	}

	if (support[17]) {
		if (bonusdata[3] == 3) radd = 100+landprop[support[17]];
		if (bonusdata[34] == 3) ladd = 100+landprop[support[17]];
	}
	else if (support[18]) {
		if (bonusdata[3] == 1) radd = 100+landprop[support[18]];
		if (bonusdata[34] == 1) ladd = 100+landprop[support[18]];
	}
	else if (support[19]) {
		if (bonusdata[3] == 4) radd = 100+landprop[support[19]];
		if (bonusdata[34] == 4) ladd = 100+landprop[support[19]];
	}
	else {
		radd=100;
		ladd=100;
	}

	// Range defense
	if (monsterdata[mnum][1] >= 4) rangeguard = Math.min(bonusdata[121],100);
	else rangeguard = 0;
	
	// Other defense
	if (monsterdata[mnum][19] == 2) tempguard += Math.min(bonusdata[122],100);
	if (bonusdata[128] && monsterdata[mnum][19] != 2 && monsterdata[mnum][19] != 3) tempguard += bonusdata[128];

	guardpc = Math.min(bonusdata[216],100);

	//Flee Rate
	bthit = Math.max(Math.min((hit + 80 - mobflee) * (100 + skilllv[694]*2)/100, 100), 5);
	btflee = Math.max(Math.min(flee + 20 - mobhit, 95), 5);
	btcritical = Math.max(Math.min(Math.round(critical*10 - mobluk*2 + 1)/10, 100), 0);
	btallhit = btcritical*100 + bthit*(100-btcritical);
	btallflee = Math.round(lucky*100 + btflee*(100-lucky))/100;

	// Combat calculation
	if (itemdata[eq[4]][1]!=24 && itemdata[eq[4]][1]<32) {
		btmincriatk = Math.floor((bonusdata[1] + bonusdata[38]) * scalecong/100) + baseatk + minbonusatk;
		btmaxcriatk = Math.floor((bonusdata[1] + bonusdata[38]) * scalecong/100) + baseatk + maxbonusatk;
	}
	else {
		btmincriatk = Math.floor((bonusdata[1] + bonusdata[26] + bonusdata[38]) * scalecong/100) + baseatk + minbonusatk;
		btmaxcriatk = Math.floor((bonusdata[1] + bonusdata[26] + bonusdata[38]) * scalecong/100) + baseatk + maxbonusatk;
	}
	if(bbdebug) DebugText.innerHTML += "Combat Crit Atk [Right] = "+btmincriatk+" ~ "+btmaxcriatk+"<br>";

	// Min attack variable	
	btbminatk = Math.floor((minatk - baseatk) * scalecong/100) + baseatk;
	if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) btminatk_l = Math.floor((minatk_l - baseatk) * scalecong_l/100) + baseatk;
	else btminatk_l = 0;

	
	// Max attack variable
	if (itemdata[eq[4]][1] == 24 || (itemdata[eq[4]][1] >= 32 && itemdata[eq[4]][1] <= 36)) {
		if (Math.floor((maxatk - baseatk - bonusdata[26]) * scalecong/100) != Math.floor((minatk - baseatk) * scalecong/100)) btbmaxatk = Math.floor((maxatk - baseatk - 2) * scalecong/100) + baseatk;
		else btbmaxatk = Math.floor((maxatk - baseatk -1) * scalecong/100) + baseatk;
		btmaxatk_l = 0;
	}
	else {
		if (maxatk != minatk) btbmaxatk = Math.floor((maxatk - baseatk - 1) * scalecong/100) + baseatk;
		else btbmaxatk = btbminatk;

		if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
			if (maxatk_l != minatk_l) btmaxatk_l = Math.floor((maxatk_l - baseatk - 1) * scalecong_l/100) + baseatk;
			else btmaxatk_l = btminatk_l;
		}
		else btmaxatk_l = 0;
	}

	if(bbdebug) DebugText.innerHTML += "Combat Atk [Right][Before] = "+btbminatk+" ~ "+btbmaxatk+"<br>";
	if(bbdebug) DebugText.innerHTML += "Combat Atk [Left][Before] = "+btminatk_l+" ~ "+btmaxatk_l+"<br>";
	
	// Basic Attack power
	btbminatk += minbonusatk;
	btminatk_l += minbonusatk_l;
	btbmaxatk += maxbonusatk;
	btmaxatk_l += maxbonusatk_l;

	btbbminatk = btbminatk;
	btbbmaxatk = btbmaxatk;
	btbbminatk_l = btminatk_l;
	btbbmaxatk_l = btmaxatk_l;
	
	if(bbdebug) DebugText.innerHTML += "Combat Atk [Right][After] = "+btbbminatk+" ~ "+btbbmaxatk+"<br>";
	if(bbdebug) DebugText.innerHTML += "Combat Atk [Left][After] = "+btminatk_l+" ~ "+btmaxatk_l+"<br>";
	if(bbdebug) DebugText.innerHTML += "Bonus Atk [Right] = "+minbonusatk+" ~ "+maxbonusatk+"<br>";
	if(bbdebug) DebugText.innerHTML += "Bonus Atk [Left] = "+minbonusatk_l+" ~ "+maxbonusatk_l+"<br>";

	// Damage multiplier - [Property, Size, Left Hand Prop]
	addatk = pcong[mobproplv-1][bonusdata[3]][mobprop];
	addatkc = (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale]);
	addatk_l = pcong[mobproplv-1][bonusdata[34]][mobprop];

	// Attack Multiplier calculation
	btbminatk = Math.floor(Math.floor(btbminatk * (100+bonusdata[33]) / 100) * (100+bonusdata[36]) / 100 * (100-support[54]*25) / 100);
	btbmaxatk = Math.floor(Math.floor(btbmaxatk * (100+bonusdata[33]) / 100) * (100+bonusdata[36]) / 100 * (100-support[54]*25) / 100);
	btmincriatk = Math.floor(Math.floor(Math.floor((Math.floor(Math.floor(btmincriatk * (100+bonusdata[33]) / 100) * (100+bonusdata[36]+bonusdata[314]) / 100 * (100-support[54]*25) / 100) + bonusdata[30] + bonusdata[29]) * addatk/100 + bonusdata[31]) * addatkc/1000000) * radd/100);
	btmaxcriatk = Math.floor(Math.floor(Math.floor((Math.floor(Math.floor(btmaxcriatk * (100+bonusdata[33]) / 100) * (100+bonusdata[36]+bonusdata[314]) / 100 * (100-support[54]*25) / 100) + bonusdata[30] + bonusdata[29]) * addatk/100 + bonusdata[31]) * addatkc/1000000) * radd/100);

	if (bonusdata[27] > 3 && support[117]) {
		btbminatk = Math.floor(btbminatk/2);
		btbmaxatk = Math.floor(btbmaxatk/2);
		btmincriatk = Math.floor(btmincriatk/2);
		btmaxcriatk = Math.floor(btmaxcriatk/2);
	}
	if ((msupport[127] || msupport[65]) && monsterdata[mnum][19]!=1) {
		btbminatk *= 2;
		btbmaxatk *= 2;
		btmincriatk *= 2;
		btmaxcriatk *= 2;
	}
	if(bbdebug) DebugText.innerHTML += "Combat Atk [Right][Atk Mutliplier] = "+btbminatk+" ~ "+btbmaxatk+"<br>";
	if(bbdebug) DebugText.innerHTML += "Combat Crit Atk [Right][Atk Mutliplier]  = "+btmincriatk+" ~ "+btmaxcriatk+"<br>";

	// Damage calculation - Reductions [Vit/Def/Buffs]
	if (bonusdata[254]) {
		btminatk = btbminatk - mobmaxvd + bonusdata[29] + bonusdata[30];
		btmaxatk = btbmaxatk - mobminvd + bonusdata[29] + bonusdata[30];
	}
	else if (eq[4] == 1223 || eq[5] == 1223) {
		btmincriatk = btminatk = Math.floor((btbminatk * (mobdef+mobminvd)/100)) + bonusdata[29] + bonusdata[30];
		btmaxcriatk = btmaxatk = Math.floor((btbmaxatk * (mobdef+mobmaxvd)/100)) + bonusdata[29] + bonusdata[30];
		btmincriatk = Math.floor(btmincriatk * addatk/100);
		btmaxcriatk = Math.floor(btmaxcriatk * addatk/100);
	}
	else if (job%13 == 7) {
		btminatk = Math.floor(btbminatk * (1 - mobdef/150)) - mobmaxvd + bonusdata[29] + bonusdata[30];
		btmaxatk = Math.floor(btbmaxatk * (1 - mobdef/150)) - mobminvd + bonusdata[29] + bonusdata[30];	
	}
	else {
		btminatk = Math.floor(btbminatk * (1 - mobdef/100)) - mobmaxvd + bonusdata[29] + bonusdata[30];
		btmaxatk = Math.floor(btbmaxatk * (1 - mobdef/100)) - mobminvd + bonusdata[29] + bonusdata[30];
	}
	if(bbdebug) DebugText.innerHTML += "Combat Atk [Right][Reduction] = "+btminatk+" ~ "+btmaxatk+"<br>";
	if(bbdebug) DebugText.innerHTML += "Combat Crit Atk [Right][Reduction]  = "+btmincriatk+" ~ "+btmaxcriatk+"<br>";
	

	// Assassin follow-up damage
	if (itemdata[eq[4]][1] == 15) {
		btaveatk_l = 0;
		if (support[115]) for (i=btminatk; i<=btmaxatk; i++) btaveatk_l += (Math.floor(Math.floor(Math.floor(Math.floor(Math.max(i, bonusdata[30] +1) * addatk/100 + bonusdata[31]) * addatkc/1000000) * radd/100) * (1 + 2 * Math.max(skilllv[201],skilllv[2644]))/100)) + Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.max(i, bonusdata[30] +1) * pcong[mobproplv-1][5][mobprop]/100 + bonusdata[31]) * addatkc/1000000) * radd/100) * (1 + 2 * Math.max(skilllv[201],skilllv[2644]))/100) * 25/100);
		else for (i=btminatk; i<=btmaxatk; i++) btaveatk_l += Math.floor(Math.floor(Math.floor(Math.floor(Math.max(i, bonusdata[30] +1) * addatk/100 + bonusdata[31]) * addatkc/1000000) * radd/100) * (1 + 2 * Math.max(skilllv[201],skilllv[2644]))/100);
		
		btaveatk_l /= btmaxatk - btminatk + 1;
	}
	else if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
		btminatk_l = Math.floor(btminatk_l * (1 - mobdef/100)) - mobmaxvd + bonusdata[39];
		if (eq[4] == 1223 || eq[5] == 1223){
			btminatk_l = Math.floor(btminatk_l * (mobdef+mobminvd)/100) + bonusdata[39];
			btmaxatk_l = Math.floor(btmaxatk_l * (mobdef+mobmaxvd)/100) + bonusdata[39];
		}
		else {
			btminatk_l = Math.floor(btminatk_l * (1 - mobdef/100)) - mobmaxvd + bonusdata[39];
			btmaxatk_l = Math.floor(btmaxatk_l * (1 - mobdef/100)) - mobminvd + bonusdata[39];
		}
		if(bbdebug) DebugText.innerHTML += "Combat Atk [Left][Reduction] = "+btminatk_l+" ~ "+btmaxatk_l+"<br>";
		btaveatk_l = 0;
		for (i=btminatk_l; i<=btmaxatk_l; i++) btaveatk_l += Math.floor(Math.floor(Math.floor(Math.max(i, 1) * addatk_l/100 + bonusdata[39] + bonusdata[40]) * ladd/100) * (30 + 10 * skilllv[722])/100);
		btaveatk_l /= btmaxatk_l - btminatk_l + 1;
		btmaxatk_l = Math.floor((Math.floor(Math.max(btmaxatk_l, 1) * addatk_l/100) + bonusdata[40]) * ladd/100);
		btminatk_l = Math.floor((Math.floor(Math.max(btminatk_l, 1) * addatk_l/100) + bonusdata[40]) * ladd/100);
		if(bbdebug) DebugText.innerHTML += "Combat Atk [Left][???] = "+btminatk_l+" ~ "+btmaxatk_l+"<br>";
	}

	// Average Calculation
	btaveatk = 0;
	if (support[115]) for (i=btminatk; i<=btmaxatk; i++) btaveatk += Math.floor(Math.floor((Math.floor(Math.max(i, bonusdata[30] +1) * addatk/100) + bonusdata[31]) * addatkc/1000000) * radd/100) + Math.floor(Math.floor(Math.floor((Math.floor(Math.max(i, bonusdata[30] +1) * pcong[mobproplv-1][5][mobprop]/100) + bonusdata[31]) * addatkc/1000000) * radd/100) * 25/10);
	else for (i=btminatk; i<=btmaxatk; i++) btaveatk += Math.floor(Math.floor((Math.floor(Math.max(i, bonusdata[30] +1) * addatk/100) + bonusdata[31]) * addatkc/1000000) * radd/100);
	btaveatk /= btmaxatk - btminatk + 1;
	btmaxatk = Math.floor(Math.floor((Math.floor(Math.max(btmaxatk, 1+bonusdata[30]) * addatk/100) + bonusdata[31]) * addatkc/1000000) * radd/100);
	btminatk = Math.floor(Math.floor((Math.floor(Math.max(btminatk, 1+bonusdata[30]) * addatk/100) + bonusdata[31]) * addatkc/1000000) * radd/100);
	star = Math.floor(Math.floor(bonusdata[31] * addatkc/1000000) * radd/100);
	if(bbdebug) DebugText.innerHTML += "Combat Atk [Right][Bonuses] = "+btminatk+" ~ "+btmaxatk+"<br>Bonuses [Equip Ele] = "+addatk+"%<br>Bonuses [Etc Bonus] = "+addatkc/1000000+"<br>";
	
	if (support[115]) {
		btmaxatk += Math.floor(Math.floor(Math.floor((Math.floor(Math.max(btmaxatk, 1+bonusdata[30]) * (pcong[mobproplv-1][5][mobprop])/100) + bonusdata[31]) * addatkc/1000000) * radd/100) * 25/100);
		btminatk += Math.floor(Math.floor(Math.floor((Math.floor(Math.max(btminatk, 1+bonusdata[30]) * (pcong[mobproplv-1][5][mobprop])/100) + bonusdata[31]) * addatkc/1000000) * radd/100) * 25/100);
	}

	// Assassin follow-up damage loss [passive skills]
	if (itemdata[eq[4]][1] == 15) {
		btmaxatk_l = Math.floor(btmaxatk * (1 + 2 * Math.max(skilllv[201],skilllv[2644]))/100);
		btminatk_l = Math.floor(btminatk * (1 + 2 * Math.max(skilllv[201],skilllv[2644]))/100);
		btavecriatk_l = 0;
	}
	else if (itemdata[eq[5]][1] == 12 || itemdata[eq[5]][1] == 14 || itemdata[eq[5]][1] == 16 || itemdata[eq[5]][1] == 20) {
		btminatk_l = Math.floor(btminatk_l * (30 + skilllv[722] * 10)/100);
		btmaxatk_l = Math.floor(btmaxatk_l * (30 + skilllv[722] * 10)/100);
		btavecriatk_l = btaveatk_l;
		btminatk = Math.floor(btminatk * (50 + skilllv[721] * 10)/100);
		btmaxatk = Math.floor(btmaxatk * (50 + skilllv[721] * 10)/100);
		if(bbdebug) DebugText.innerHTML += "Combat Atk [Right][Passive] = "+btminatk+" ~ "+btmaxatk+"<br>";
		if(bbdebug) DebugText.innerHTML += "Combat Atk [Left][Passive] = "+btminatk_l+" ~ "+btmaxatk_l+"<br>";
		btminatk_l = 0;
		btmaxatk_l = 0;
		star = Math.floor(bonusdata[31] * (50 + skilllv[721] * 10)/100) + Math.floor(bonusdata[40] * (30 + skilllv[722] * 10)/100);
	}
	else {
		btmaxatk_l = 0;
		btminatk_l = 0;
		btaveatk_l = 0;
		btavecriatk_l = 0;
	}
	
	if (support[113] && monsterdata[mnum][19]!=1) {
		btminatk = 0;
		btmaxatk = 0;
		btmincriatk = 0;
		btmaxcriatk = 0;
	}

	// Passive skill activation rate
	tmp = 0;
	for (i=1; i<=bonusdata[322][0]; i++) if (bonusdata[322][i]%10000 == 201) { psvpc[0] = Math.max(Math.max(skilllv[201],skilllv[2644],skilllv[323]) * 5,5); tmp++; }
	if ((itemdata[eq[4]][1] == 14 || itemdata[eq[4]][1] == 32) && tmp==0) psvpc[0] = Math.max(skilllv[201],skilllv[2644],skilllv[323]) * 5;
	else if (tmp == 0) psvpc[0] = 0;
	if (skilllv[1165]) psvpc[1] = 30 - skilllv[1165];
	else psvpc[1] = 0;
	
	if(support[146]) switch(support[146]) {
		case 1: psvpc[1] *= 1.2; break;
		case 2: psvpc[1] *= 1.5; break;
		case 3: psvpc[1] *= 2; break;
	}

	// Follow-up attack activation rate
	if (skilllv[604] && itemdata[eq[4]][1] == 24) addpc[0] = (chrluk * 3 + 10)/10;
	else addpc[0] = 0;
	if (support[95]) addpc[1] = 5 + skilllv[1088]*2;
	else addpc[1] = 0;

	minpsvatk = 0;
	maxpsvatk = 0;
	avepsvatk = 0;
	minaddatk = 0;
	maxaddatk = 0;
	aveaddatk = 0;
	aveasatk = 0;

	// Passive skill attack
	if (psvpc[1]) {
		minpsvatk = actcalc(btbminatk,100,20,skilllv[1165],1,3,0,1,10,0);
		maxpsvatk = actcalc(btbmaxatk,100,20,skilllv[1165],1,3,1,1,10,0);
		avepsvatk = 0;
		for (i=btbminatk; i<=btbmaxatk; i++) avepsvatk += actcalc(i,100,20,skilllv[1165],1,3,1,1,10,0);
		avepsvatk /= btbmaxatk - btbminatk + 1;
		avepsvatk -= (mobmaxvd-mobminvd)/2;
	}
	if (addpc[0]) {
		minaddatk = Math.floor((Math.floor(chrdex/10)+Math.floor(chrint/2)+skilllv[617]*3+40)*2 * pcong[mobproplv-1][0][mobprop]/100) * Math.min(Math.ceil(jlv/10), skilllv[604]);
		maxaddatk = minaddatk;
		if (msupport[127]) {
			minaddatk *= 2;
			maxaddatk *= 2;
		}
		aveaddatk = minaddatk * addpc[0]/100 * btallhit/10000;
	}
	if (addpc[1]) {
		n = autospellas[support[95]];
		if (support[154]) m = Math.max(autospellslv[support[95]][skilllv[1088]],skilllv[autospellps[support[95]]]);
		else m = Math.min(autospellslv[support[95]][skilllv[1088]],skilllv[autospellps[support[95]]]);
		tmp1 = new Array(0,0,0,0,0,0,0,0,0,0,0);
		tmp2 = new Array(0,0,0,0,0,0,0,0,0,0,0);
		for (k=1; k<=m; k++) {
			ash = Math.floor(asdata[n][3]+asdata[n][4]*k);
			tmp1[k] = actcalc(minmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
			tmp2[k] = actcalc(maxmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
			if (msupport[127]) {
				tmp1[k] *= 2;
				tmp2[k] *= 2;
			}
		}
		if (support[154]) aveasatk = (tmp1[skilllv[autospellps[support[95]]]]+tmp2[skilllv[autospellps[support[95]]]])/2;
		else {
			if (m==1) aveasatk = (tmp1[1]+tmp2[1])/2;
			else if (m==2) aveasatk = (tmp1[1]+tmp2[1])/4 + (tmp1[2]+tmp2[2])/4;
			else if (m==3) aveasatk = (tmp1[1]+tmp2[1])/4 + (tmp1[2]+tmp2[2])*7/40 + (tmp1[3]+tmp2[3])*3/40;
			else aveasatk = 0;
		}
		aveaddatk = aveasatk * addpc[1]/100;
		aveasatk = Math.round(aveasatk*100)/100;
		tmp1 = 0;
		tmp2 = 0;
	}
	if (itemdata[eq[4]][1] == 15) {
		minaddatk = Math.floor(btmincriatk * (1 + 2 * Math.max(skilllv[201],skilllv[2644]))/100);
		maxaddatk = Math.floor(btmaxcriatk * (1 + 2 * Math.max(skilllv[201],skilllv[2644]))/100);
		aveaddatk = (minaddatk+maxaddatk)/2 * btcritical/100 * (1-psvpc[0]/100) * (1-psvpc[1]/100);
	}

	// Expected hits per second
	avepsvatk = avepsvatk * psvpc[1]/100 * bthit/100;
	btaveatk = btaveatk * 2 * bthit/100 * psvpc[0]/100 * (1 - psvpc[1]/100) + ((btmincriatk + btmaxcriatk) / 2 + btavecriatk_l) * btcritical/100 * (1 - psvpc[0]/100) * (1 - psvpc[1]/100) + btaveatk * bthit/100 * (1 - btcritical/100) * (1 - psvpc[0]/100) * (1 - psvpc[1]/100) + Math.floor(Math.floor(Math.floor(skilllv[694]*2*addatk/100+star)*addatkc/1000000)*radd/100) * (1 - bthit/100) * (1 - btcritical/100) * (1 - psvpc[0]/100) * (1 - psvpc[1]/100) + aveaddatk + btaveatk_l * bthit/100 * (1 - btcritical/100);
	if (skilllv[1174]) btsecatk = avepsvatk * 1000 / Math.max(1000-4*chragi-2*chrdex+300,300) + btaveatk * 500 / recharge;
	else btsecatk = avepsvatk * 1000 / Math.max(1000-4*chragi-2*chrdex,0) + btaveatk * 500 / recharge;

	btaveatk += avepsvatk;

	maxexp = btmaxatk * 2 * Math.min(bthit/100 * (1 + bthit/100), 1) * Math.min(psvpc[0]/100 * (1 + psvpc[0]/100), 1) + maxpsvatk * Math.min(psvpc[1]/100 * (1 + psvpc[1]/100), 1) * (1 - Math.min(psvpc[0]/100 * (1 + psvpc[0]/100), 1)) * Math.min(bthit/100 * (1 + bthit/100), 1) + ((btmincriatk + btmaxcriatk) / 2 + btavecriatk_l) * Math.min(btcritical/100 * (1 + btcritical/100), 1) * (1 - Math.min(psvpc[0]/100 * (1 + psvpc[0]/100), 1)) * (1 - Math.min(psvpc[1]/100 * (1 + psvpc[1]/100), 1)) + btmaxatk * Math.min(bthit/100 * (1 + bthit/100), 1) * (1 - Math.min(btcritical/100 * (1 + btcritical/100), 1)) * (1 - Math.min(psvpc[0]/100 * (1 + psvpc[0]/100), 1)) * (1 - Math.min(psvpc[1]/100 * (1 + psvpc[1]/100), 1)) + Math.floor(Math.floor(Math.floor(skilllv[694]*2*addatk/100+star)*addatkc/1000000)*radd/100) * (1 - Math.min(bthit/100 * (1 + bthit/100), 1)) * (1 - Math.min(btcritical/100 * (1 + btcritical/100), 1)) * (1 - Math.min(psvpc[0]/100 * (1 + psvpc[0]/100), 1)) * (1 - Math.min(psvpc[1]/100 * (1 + psvpc[1]/100), 1)) + aveaddatk * (1 + addpc[0]/100) * (1 + addpc[1]/100) + btaveatk_l * Math.min(bthit/100 * (1 + bthit/100), 1);

	minfrq = Math.ceil(mobhp/maxexp);

	for (i=1; i<=8; i++) if (Math.ceil(mobhp/btmaxcriatk) <= 16/i && btcritical >= 64/i/i) minfrq = Math.min(minfrq, Math.ceil(mobhp/btmaxcriatk));
	for (i=1; i<=8; i++) if (Math.ceil(mobhp/maxpsvatk) <= 8/i && psvpc[1] >= 32/i/i) minfrq = Math.min(minfrq, Math.ceil(mobhp/maxpsvatk));
	for (i=1; i<=8; i++) if (Math.ceil(mobhp/btmaxatk/2) <= 16/i && psvpc[0] >= 64/i/i) minfrq = Math.min(minfrq, Math.ceil(mobhp/btmaxatk/2));
	for (i=1; i<=8; i++) if (Math.ceil(mobhp/(btmaxatk+maxaddatk))<=16/i && addpc[0] >= 64/i/i) minfrq = Math.min(minfrq, Math.ceil(mobhp/(btmaxatk+maxaddatk)));
	for (i=1; i<=8; i++) if (Math.ceil(mobhp/(btmaxcriatk+maxaddatk))<=16/i && addpc[0] >= 64/i/i && btcritical >= 64/i/i) minfrq = Math.min(minfrq,Math.ceil(mobhp/(btmaxcriatk+maxaddatk)));

	modefrq = Math.ceil(mobhp/btaveatk);

	if (msupport[0]) {
		minfrq += 2+msupport[0];
		modefrq += 2+msupport[0];
	}
	if (support[113]) {
		minfrq = 0;
		modefrq = 0;
		maxexp = 0;
		btaveatk = 0;
	}
	
	//Damage Inflcted
	cutdmg = pcong[0][mobatkprop][bonusdata[4]] * (100 - bonusdata[101+mobatkprop]) * (100 - bonusdata[111+mobrace]) * (100 - bonusdata[125+mobscale]) * (100 - rangeguard) * (100 - tempguard);

	mindmg = actcalc(mobminatk,100,0,0,0,1,3,0,10,0);
	if (msupport[88]) maxdmg = actcalc(mobmaxatk,100,0,0,0,1,4,0,10,0);
	else maxdmg = actcalc(mobmaxatk-1,100,0,0,0,1,4,0,10,0);
	if (support[112]) {
		mindmg = Math.ceil(mindmg/2);
		maxdmg = Math.ceil(maxdmg/2);	
	}
	if (support[127]) {
		mindmg *= 2;
		maxdmg *= 2;
	}
	avedmg = 0;
	for (i=mindmg; i<=maxdmg; i++) avedmg += zero(Math.ceil(i * cutdmg/1000000000000));
	avedmg /= maxdmg - mindmg + 1;
	if (monsterdata[mnum][3] >= 4) avedmg = avedmg * (100-lucky) * (100-btflee) * (100-guardpc) * (100-support[132]*20) / 100000000;
	else avedmg = avedmg * (100-lucky) * (100-btflee) * (100-guardpc) / 1000000;
	secdmg = avedmg * 1000 / mobrecharge;

	mindmg = Math.ceil(Math.max(mindmg, 1) * cutdmg/1000000000000);
	maxdmg = Math.ceil(Math.max(maxdmg, 1) * cutdmg/1000000000000);

	btsecatk += secdmg * bonusdata[212]/100;
	if (support[113] && monsterdata[mnum][19]!=1) {
		mindmg = 0;
		maxdmg = 0;
		avedmg = 0;
		secdmg = 0;
	}

	// Experience value efficiency
	baseeff = mobbasexp * 500 / recharge / modefrq;
	jobeff = mobjobexp * 500 / recharge / modefrq;

	//Fight Length
	minterm = minfrq * recharge/500;
	modeterm = modefrq * recharge/500;

	//HP Gain/Loss
	hpabs = Math.round(((btminatk+btmaxatk)/2*(psvpc[0]/100+(1-btcritical/100)*(1-psvpc[0]/100))*bthit/100+(btmaxcriatk+btmaxcriatk)*btcritical/100*(1-psvpc[0]/100)/200)*bonusdata[252]*(1-Math.pow(0.95,bonusdata[252]/15)) / recharge*500)/100;
	if (monsterdata[mnum][22] != 6) {
		posthpnr = (hpabs - avedmg) * Math.ceil(modeterm / mobrecharge * 1000);
		if (support[27]) posthpnr += support[27]*5 + 30 + barlessen*5 + Math.floor(barvit/4)*2;
		if (support[0]) posthpnr += Math.min(avedmg * (2 + support[0]), -posthpnr);
		if (support[167]) posthpnr += Math.min(avedmg * Math.round(1 + support[167]/2), -posthpnr);
		if (support[170]) posthpnr += Math.min(avedmg * Math.round(1 + support[170]/2), -posthpnr);
		if (support[171]) posthpnr += Math.min(avedmg * (1+support[170]), -posthpnr);
		if (support[10]) posthpnr += Math.min(Math.min(Math.floor(maxhp * (support[10]*2 + 10)/100), (mindmg+maxdmg)/2*(Math.floor(support[10]/2)+5)), -posthpnr);
		posthpnr += -Math.floor(3+maxhp*0.015) * support[50] * modeterm;
	}
	else {
		mindmg = 0;
		maxdmg = 0;
		avedmg = 0;
		secdmg = 0;
		posthpnr = hpabs * Math.ceil(modeterm / mobrecharge * 1000);
	}
	posthpr = ((hpr - (maxhp / 500 + 4) * skilllv[1162])/8 + skhpr/10) * modeterm + posthpnr;
}
function zero(n){
	if (n<0) n=1;
	return n;
}
function actcalc(a,b,c,d,e,f,g,h,i,j) {
// a: Basic attack power, b: Base multiplier, c: PerLv multiplier, d: SkillLv, E: Damage loss, f: Hit value, g: Physical min/Max/Magic, h: Finish, I: Atribute
	if (i == 10) i = bonusdata[3];
	else i = i;
	e = Math.max(e*f,1);

	if ((g<=1 || g >=6) && h<=1) {
		aa = pcong[mobproplv-1][i][mobprop];
		aa2 = (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale]);
	}
	else if (g >=6 && h==4) {
		aa = pcong[mobproplv-1][i][mobprop];
		aa2 = (100 + bonusdata[51+mobprop]) * (100) * (100);
	}
	else if (g==2 || h==3) {
		aa = pcong[mobproplv-1][i][mobprop];
		aa2 = 1000000;
	}
	else if (h==2) {
		aa = pcong[0][i][bonusdata[4]];
		aa2 = 1000000;
	}
	else {
		aa = pcong[0][i][bonusdata[4]];
		aa2 = (100 - bonusdata[101+i]) * (100 - bonusdata[111+mobrace]) * (100 - rangeguard);
	}
	
	if (eq[4] == 1223 || eq[5] == 1223) icepick = 1;
	else icepick = 0;
	
	j = (100+j)/100;
		
	if (g==0 && h==3) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mobdef/100)) - mobmaxvd;
	else if (g==0 && icepick) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * ((mobdef+mobmaxvd)/100)) + bonusdata[29] + bonusdata[30];
	else if (g==0) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mobdef/100)) - mobmaxvd + bonusdata[29] + bonusdata[30];
	else if (g==1 && h==3) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mobdef/100)) - mobminvd;
	else if (g==1 && icepick) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * ((mobdef+mobminvd)/100)) + bonusdata[29] + bonusdata[30];
	else if (g==1) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mobdef/100)) - mobminvd + bonusdata[29] + bonusdata[30];
	else if (g==2) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mobmdef/100)) - mobimdef;
	else if (g==3) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - def/100)) - maxvd - dp;
	else if (g==4) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - def/100)) - minvd - dp;
	else if (g==5) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mdef/100)) - imdef;
	else if (g==6) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j)) + bonusdata[29] + bonusdata[30];
	else if (g==7) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j)) + bonusdata[29] + bonusdata[30];
	else if (g==8) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mobdef/100)) - mobmaxvd + bonusdata[29] + bonusdata[30];
	else if (g==9) tmp = Math.floor(Math.floor(a * (c*d/100+b/100) * j) * (1 - mobdef/100)) - mobminvd + bonusdata[29] + bonusdata[30];

	if (h) {
		if (g<=1 || g>=6) tmp = Math.max(Math.floor(Math.floor((Math.floor(tmp * aa/100) + bonusdata[31]) * aa2/1000000)/e)*f, Math.floor(Math.floor((Math.floor((1 + bonusdata[30]) * aa/100) + bonusdata[31]) * aa2/1000000)/e)*f);
		else tmp = Math.max(Math.floor(Math.floor(tmp * aa/100)/e)*f, Math.floor(Math.floor(aa/100)/e)*f);

		if (support[17] && i == 3) a = 100+landprop[support[17]];
		else if (support[18] && i == 1) a = 100+landprop[support[18]];
		else if (support[19] && i == 4) a = 100+landprop[support[19]];
		else a = 100;
		tmp = Math.floor(tmp * a/100);
	}

	return tmp;
}
function showallbtdata(n) {
	document.frm.mnum.value=n;
	showmobdata();
	bbtshow();
}

// * Monster sub status functions
function mobstatuscalc(l, m) {	
	clearTimeout(i0);

	a = Math.max(Math.floor(l/25)-1,0);
	if (a != 2 && l >= 125) b = (l-75)%50;
	else if (a != 2) b = l%50;
	else b = l%25;
	if (l >= 200 && l <= 211) {
		a = 0;
		b = 0;
	} else if (l == 215) {
		a = 0;
		b = 5;
	} else if (l >= 212) {
		a = 1;
		b = 0;
	} 
	
	if(m==0 && browserspc) {m++;}
	
	if (m == 1) {
		if (keypressed==96) msupport[l] = 10;
		else msupport[l]++;
		if (l>=200 && l<=211) msupport[l] = Math.min(msupport[l], 4);
		else msupport[l] = Math.min(msupport[l], supportst[a][b]);
	}
	if (m == 2) {
		if (keypressed==96) msupport[l] = 0;
		else msupport[l]--;
		msupport[l] = Math.max(msupport[l], 0);
	}
	if (m <= 0) {
		t = 0;
		return;
	}

	mobstatuscheck(l);
	if (supportst[a][b] != 1) document.getElementById('MobSupportLvView' + l).innerHTML = '' + msupport[l] + ' <font color="#BC8F8F">On</font>';
	else document.getElementById('MobSupportLvView' + l).innerHTML = '<font color="#BC8F8F">On</font>';
	if (!msupport[l]) document.getElementById('MobSupportLvView' + l).innerHTML = supoff;

	showmobdata();
	bbtshow();

	if (!t) i0 = setTimeout("mobstatuscalc('" + l + "', " + m + ")", 250);
	else if (t) i0 = setTimeout("mobstatuscalc('" + l + "', " + m + ")", 50);
	t++;
	return;
}
function mobstatuscheck(l) {
	if (l == 84) {
		msupport[86] = 0;
		MobSupportLvView86.innerHTML = supoff;
	}
	if (l == 86) {
		msupport[84] = 0;
		MobSupportLvView84.innerHTML = supoff;
	}
	if (l == 2) {
		msupport[62] = 0;
		MobSupportLvView62.innerHTML = supoff;
		msupport[64] = 0;
		MobSupportLvView64.innerHTML = supoff;
	}
	if (l == 62) {
		msupport[2] = 0;
		MobSupportLvView2.innerHTML = supoff;
	}
	if (l == 64) {
		msupport[2] = 0;
		MobSupportLvView2.innerHTML = supoff;
	}
	if (l >= 51 && l <= 52) {
		for (i=51; i<=52; i++) if (i!=l) {
			msupport[i] = 0;
			document.getElementById('MobSupportLvView' + i).innerHTML = supoff;
		}
	}
	if (l >= 200 && l <= 209) {
		for (i=200; i<=209; i++) if (i!=l) {
			msupport[i] = 0;
			document.getElementById('MobSupportLvView' + i).innerHTML = supoff;
		}
	}

}

// * Active Skills
// * Display Singlular Skills
function singleaslisting() {
	assaved = new Array();
	assaved[0] = 0;
	tmp1 = new Array('','','');
	for (i=1; i<=jobaslist[job][0]; i++) {
		tmp = '';
		tmp += '<table width="148" border="1" cellspacing="1" bordercolor="#D6D6D6" bgcolor="#FFFFFF" cellpadding="0"><tr><td width="24" height="24" bgcolor="#FFFFFF"><img src="img2/skill'+astabledata[jobaslist[job][i]][0]+'" width="24" height="24"></td><td width="121" bgcolor="#FFFFFF">'+astabledata[jobaslist[job][i]][1];
		tmp += '<div align="right"><select id="ASLv'+jobaslist[job][i]+'" onChange="singleasdata('+jobaslist[job][i]+')">';
		tmp += '<option selected value="-1">Off</option>';
		for (n=1; n<=astabledata[jobaslist[job][i]][2]; n++) tmp += '<option value="'+n+'">'+n+'</option>';
		if (astabledata[jobaslist[job][i]][2] != 1) tmp += '<option value="-2">All</option>';
		tmp += '</select></div></td></tr><tr><td colspan="2" class="white"><span id="Single'+jobaslist[job][i]+'"></span></td></tr></table>';
		tmp1[i] = tmp;
	}
	i = 1;
	while (tmp1[1+2*i]) {
		for (j=1; j<tmp1.length-2*i; j+=4*i) tmp1[j] += tmp1[j+2*i];
		i*=2;
	}
	i = 1;
	while (tmp1[2+2*i]) {
		for (j=2; j<tmp1.length-2*i; j+=4*i) tmp1[j] += tmp1[j+2*i];
		i*=2;
	}

	JobActSkillTableL.innerHTML = tmp1[1];
	JobActSkillTableR.innerHTML = tmp1[2];
	tmp = '';
	tmp1 = '';	
}
function singleasdata(m) {
	tmp3 = '';
	ASLv = 0;
	ASLv = eval(document.getElementById('ASLv'+m).value);
	tmp4 = ASLv;
	if (ASLv >= 1 || ASLv == -2) {
		if (ASLv == -2) {
			ASLv = 1;
			z = astabledata[m][2];
		}
		else z = ASLv;
		
		tmp3 += '<table width="100%" border="1" cellspacing="1" bordercolor="#D6D6D6" bgcolor="#FFFFFF" cellpadding="0"><tr><td colspan="2" class="white"><table width="100%" border="0" bordercolor="#D6D6D6"><tr class="index">';
		if (astabledata[m][2] != 1) tmp3 += '<td>Lv</td>';
		if (astabledata[m][3] == 1) tmp3 += '<td>Damage</td>';
		if (astabledata[m][4] == 2) tmp3 += '<td>CT</td>';
		if (astabledata[m][5] == 2) tmp3 += '<td>DT</td>';
		if (astabledata[m][6] != '') tmp3 += '<td>'+astabledata[m][6]+'</td>';
		if (astabledata[m][7] != '') tmp3 += '<td>'+astabledata[m][7]+'</td>';
		tmp3 += '</tr>';
		for (ASLv;ASLv <= z; ASLv++) {	
			tmp3 += '<tr>';
			if (astabledata[m][2] != 1) tmp3 += '<td class="gray">'+ASLv+'</td>';
			if (astabledata[m][3] == 1) tmp3 += '<td class="data"><span id="ChrAct'+m+'-'+ASLv+'DM'+'"></span></td>';
			if (astabledata[m][4] == 2) tmp3 += '<td class="data"><span id="ChrAct'+m+'-'+ASLv+'CT'+'"></span></td>';
			if (astabledata[m][5] == 2) tmp3 += '<td class="data"><span id="ChrAct'+m+'-'+ASLv+'DT'+'"></span></td>';
			if (astabledata[m][6] != '') tmp3 += '<td class="data"><span id="ChrAct'+m+'-'+ASLv+'-1'+'"></span></td>';
			if (astabledata[m][7] != '') tmp3 += '<td class="data"><span id="ChrAct'+m+'-'+ASLv+'-2'+'"></span></td>';
			tmp3 += '</tr>';
		}
		tmp3 += '</table><table border="0"><tr>';
		if (astabledata[m][4] == 1) tmp3 += '<td class="gray">CT</td><td class="data"><span id="ChrAct'+m+'-CT"></span></td>';
		if (astabledata[m][5] == 1) tmp3 += '<td class="gray">DT</td><td class="data"><span id="ChrAct'+m+'-DT"></span></td>';
		tmp3 += '</tr></table></td></tr></table>';	
	
		ASLv = tmp4;
		
		if(assaved[0]!=0) {
			for (i=1; i<=assaved[0]*2-1;i+=2) 
			if (assaved[i] == m){
				if (assaved[i+1] != ASLv) assaved[i+1] = ASLv;
				i=1000;
			}
			else if (assaved[i] != m && i == assaved[0]*2-1)  {
				assaved[0]++;
				assaved[assaved[0]*2-1] = m;
				assaved[assaved[0]*2] = ASLv;
			} 
		}
		else {
			assaved[0]++;
			assaved[assaved[0]*2-1] = m;
			assaved[assaved[0]*2] = ASLv;
		}
		
		document.getElementById('Single'+m).innerHTML = tmp3;	
		aspartcalc(m, ASLv, tmp4);
	}
	else {
		tmp3 = new Array();
		tmp3[0] = assaved[0];
		for (i=1; i<=assaved[0]*2-1;i+=2) {
			if (assaved[i] == m) {
				for (z=i+2; z<=assaved[0]*2-1;z+=2) {
					tmp3[z-2] = assaved[z];
					tmp3[z-1] = assaved[z+1];					
				}
				tmp3[0]--;
				i=1000;
			}
			else {
				tmp3[i] = assaved[i];
				tmp3[i+1] = assaved[i+1];
			}
		 }
		 assaved = tmp3;
		document.getElementById('Single'+m).innerHTML = '';
	}
}
function asrtonoff(){
	asrtcng++;
	asrtcng = asrtcng%2;

	if (asrtcng) {
		ASRealTime.innerHTML = '<font color="#CD5C5C">On</font><br>• When processing becomes heavy, please turn automatic function to OFF.';
		asallcalc();
	}
	else ASRealTime.innerHTML = '<font color="#AAAAAA">Off</font><br><a href="#" onClick="asallcalc();return false">Re-Calculate</a>';
}
function asallcalc() {
	if (assaved[0]) for (j=2; j<=assaved[0]*2; j+=2) {
		if (assaved[j] == -2) for (k=1; k<=astabledata[assaved[j-1]][2]; k++) ascalc(assaved[j-1], k, 0);
		else ascalc(assaved[j-1], assaved[j], 0);
			
		if (astabledata[assaved[j-1]][4]==1) document.getElementById('ChrAct'+assaved[j-1]+'-CT').innerHTML = Math.ceil(asctdata[assaved[j-1]]*ctmagn);
		if (astabledata[assaved[j-1]][5]==1) document.getElementById('ChrAct'+assaved[j-1]+'-DT').innerHTML = Math.ceil(asdtdata[assaved[j-1]]*dtmagn);
		if (assaved[j-1]==67) {
			if (skilllv[1175]) document.getElementById('ChrAct67-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex+300,300);
			else document.getElementById('ChrAct67-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex,0);
		}
		else if (assaved[j-1]==68) {
			if (skilllv[1173]) document.getElementById('ChrAct68-DT').innerHTML = Math.max(700-4*chragi-2*chrdex+300,300);
			else document.getElementById('ChrAct68-DT').innerHTML = Math.max(700-4*chragi-2*chrdex,0);
		}
		else if (assaved[j-1]==88 && support[97]) document.getElementById('ChrAct88-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex,0);
		else if (assaved[j-1]==89) {
			if (skilllv[1175]) document.getElementById('ChrAct89-DT').innerHTML = Math.max(700-4*chragi-2*chrdex+300,300);
			else document.getElementById('ChrAct89-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex,0);
		}
	}
}
function aspartcalc(m, n, o) {
	if (o == -2) for (k=1; k<=astabledata[m][2]; k++) ascalc(m, k, 0);
	else ascalc(m, n, 0);	
		
	if (astabledata[m][4]==1) document.getElementById('ChrAct'+m+'-CT').innerHTML = Math.ceil(asctdata[m]*ctmagn);
	if (astabledata[m][5]==1) document.getElementById('ChrAct'+m+'-DT').innerHTML = Math.ceil(asdtdata[m]*dtmagn);
	if (m==67) {
		if (skilllv[1175]) document.getElementById('ChrAct67-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex+300,300);
		else document.getElementById('ChrAct67-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex,0);
	}
	else if (m==68) {
		if (skilllv[1173]) document.getElementById('ChrAct68-DT').innerHTML = Math.max(700-4*chragi-2*chrdex+300,300);
		else document.getElementById('ChrAct68-DT').innerHTML = Math.max(700-4*chragi-2*chrdex,0);
	}
	else if (m==88 && support[97]) document.getElementById('ChrAct88-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex,0);
	else if (m==89) {
		if (skilllv[1175]) document.getElementById('ChrAct89-DT').innerHTML = Math.max(700-4*chragi-2*chrdex+300,300);
		else document.getElementById('ChrAct89-DT').innerHTML = Math.max(1000-4*chragi-2*chrdex,0);
	}
}
// * Display Equipped Active Skills
function eastablelisting() {
	k= new Array(0,0,0,0,3,3,0,0,0,0);
	tmp = '';
	for (i=0; i<=9; i++) {
		if (eq[i]) {
			if (itemdata[eq[i]][25]) {
			if (eq[i] != eq[i-1])
				for(y=1; y<=itemdata[eq[i]][25]*2; y+=2) {
					//alert(itemdata[eq[i]][25] +', '+itemdata[eq[i]][26]+', '+itemdata[eq[i]][27]);
					tmp += '<table align="center" width="148" border="1" cellspacing="1" bordercolor="#D6D6D6" bgcolor="#FFFFFF" cellpadding="0"><tr><td width="24" bgcolor="#FFFFFF"><img src="img2/skill'+astabledata[itemdata[eq[i]][25+y]][0]+'" width="24"></td><td width="121" bgcolor="#FFFFFF">'+astabledata[itemdata[eq[i]][25+y]][1]+'</td></tr><tr><td colspan="2" class="white"><table width="100%" border="0" bordercolor="#D6D6D6"><tr class="index">';
					if (astabledata[itemdata[eq[i]][25+y]][2] != 1) tmp += '<td>Lv</td>';
					if (astabledata[itemdata[eq[i]][25+y]][3] == 1) tmp += '<td>Damage</td>';
					if (astabledata[itemdata[eq[i]][25+y]][4] == 2) tmp += '<td>CT</td>';
					if (astabledata[itemdata[eq[i]][25+y]][5] == 2) tmp += '<td>DT</td>';
					if (astabledata[itemdata[eq[i]][25+y]][6] != '') tmp += '<td>'+astabledata[itemdata[eq[i]][25+y]][6]+'</td>';
					if (astabledata[itemdata[eq[i]][25+y]][7] != '') tmp += '<td>'+astabledata[itemdata[eq[i]][25+y]][7]+'</td>';
					tmp += '</tr>';
					tmp += '<tr>';
					if (astabledata[itemdata[eq[i]][25+y]][2] != 1) tmp += '<td class="gray">'+itemdata[eq[i]][25+y+1]+'</td>';
					if (astabledata[itemdata[eq[i]][25+y]][3] == 1) tmp += '<td class="data"><span id="EqAct'+itemdata[eq[i]][25+y]+'-'+itemdata[eq[i]][25+y+1]+'DM'+'"></span></td>';
					if (astabledata[itemdata[eq[i]][25+y]][4] == 2) tmp += '<td class="data"><span id="EqAct'+itemdata[eq[i]][25+y]+'-'+itemdata[eq[i]][25+y+1]+'CT'+'"></span></td>';
					if (astabledata[itemdata[eq[i]][25+y]][5] == 2) tmp += '<td class="data"><span id="EqAct'+itemdata[eq[i]][25+y]+'-'+itemdata[eq[i]][25+y+1]+'DT'+'"></span></td>';
					if (astabledata[itemdata[eq[i]][25+y]][6] != '') tmp += '<td class="data"><span id="EqAct'+itemdata[eq[i]][25+y]+'-'+itemdata[eq[i]][25+y+1]+'-1'+'"></span></td>';
					if (astabledata[itemdata[eq[i]][25+y]][7] != '') tmp += '<td class="data"><span id="EqAct'+itemdata[eq[i]][25+y]+'-'+itemdata[eq[i]][25+y+1]+'-2'+'"></span></td>';
					tmp += '</tr>';
					tmp += '</table><table border="0"><tr>';
					if (astabledata[itemdata[eq[i]][25+y]][4] == 1) tmp += '<td class="gray">CT</td><td class="data"><span id="EqAct'+itemdata[eq[i]][25+y]+'-CT"></span></td>';
					if (astabledata[itemdata[eq[i]][25+y]][5] == 1) tmp += '<td class="gray">DT</td><td class="data"><span id="EqAct'+itemdata[eq[i]][25+y]+'-DT"></span></td>';
					tmp += '</tr></table></td></tr></table>';					
				}
			}
			for(l=0; l<=k[i]; l++) {
				if (itemdata[slot[i][l]][25]) {
					for(y=1; y<=(itemdata[slot[i][l]][25]*2); y+=2) {
						tmp += '<table align="center" width="148" border="1" cellspacing="1" bordercolor="#D6D6D6" bgcolor="#FFFFFF" cellpadding="0"><tr><td width="24" bgcolor="#FFFFFF"><img src="img2/skill'+astabledata[itemdata[slot[i][l]][25+y]][0]+'" width="24"></td><td width="121" bgcolor="#FFFFFF">'+astabledata[itemdata[slot[i][l]][25+y]][1]+'</td></tr><tr><td colspan="2" class="white"><table width="100%" border="0" bordercolor="#D6D6D6"><tr class="index">';
						if (astabledata[itemdata[slot[i][l]][25+y]][2] != 1) tmp += '<td>Lv</td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][3] == 1) tmp += '<td>Damage</td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][4] == 2) tmp += '<td>CT</td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][5] == 2) tmp += '<td>DT</td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][6] != '') tmp += '<td>'+astabledata[itemdata[slot[i][l]][25+y]][6]+'</td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][7] != '') tmp += '<td>'+astabledata[itemdata[slot[i][l]][25+y]][7]+'</td>';
						tmp += '</tr>';
						tmp += '<tr>';
						if (astabledata[itemdata[slot[i][l]][25+y]][2] != 1) tmp += '<td class="gray">'+itemdata[slot[i][l]][25+y+1]+'</td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][3] == 1) tmp += '<td class="data"><span id="EqAct'+itemdata[slot[i][l]][25+y]+'-'+itemdata[slot[i][l]][25+y+1]+'DM'+'"></span></td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][4] == 2) tmp += '<td class="data"><span id="EqAct'+itemdata[slot[i][l]][25+y]+'-'+itemdata[slot[i][l]][25+y+1]+'CT'+'"></span></td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][5] == 2) tmp += '<td class="data"><span id="EqAct'+itemdata[slot[i][l]][25+y]+'-'+itemdata[slot[i][l]][25+y+1]+'DT'+'"></span></td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][6] != '') tmp += '<td class="data"><span id="EqAct'+itemdata[slot[i][l]][25+y]+'-'+itemdata[slot[i][l]][25+y+1]+'-1'+'"></span></td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][7] != '') tmp += '<td class="data"><span id="EqAct'+itemdata[slot[i][l]][25+y]+'-'+itemdata[slot[i][l]][25+y+1]+'-2'+'"></span></td>';
						tmp += '</tr>';
						tmp += '</table><table border="0"><tr>';
						if (astabledata[itemdata[slot[i][l]][25+y]][4] == 1) tmp += '<td class="gray">CT</td><td class="data"><span id="EqAct'+itemdata[slot[i][l]][25+y]+'-CT"></span></td>';
						if (astabledata[itemdata[slot[i][l]][25+y]][5] == 1) tmp += '<td class="gray">DT</td><td class="data"><span id="EqAct'+itemdata[slot[i][l]][25+y]+'-DT"></span></td>';
						tmp += '</tr></table></td></tr></table>';
					}
				}	
			}
		}
	}

	EquipActSkillTable.innerHTML = tmp;
	tmp = '';
	tmp1 = '';
}
function easrtonoff(){
	easrtcng++;
	easrtcng = easrtcng%2;

	if (easrtcng) {
		EASRealTime.innerHTML = '<font color="#CD5C5C">On</font><br>• When processing becomes heavy, please turn automatic function to OFF.';
		easallcalc();
	}
	else EASRealTime.innerHTML = '<font color="#AAAAAA">Off</font><br><a href="#" onClick="easallcalc();return false">Re-Calculate</a>';
}
function easallcalc() {
	k= new Array(0,0,0,0,3,3,0,0,0,0);
	for (i=0; i<=9; i++) {
		if (eq[i]) {
			if (itemdata[eq[i]][25]) {
				for (j=1; j<=itemdata[eq[i]][25]*2; j+=2) {
					ascalc(itemdata[eq[i]][25+j], itemdata[eq[i]][25+j+1], 1);
					
					if (astabledata[itemdata[eq[i]][25+j]][4]==1) document.getElementById('EqAct'+itemdata[eq[i]][25+j]+'-CT').innerHTML = Math.ceil(asctdata[itemdata[eq[i]][25+j]]*ctmagn);
					if (astabledata[itemdata[eq[i]][25+j]][5]==1) document.getElementById('EqAct'+itemdata[eq[i]][25+j]+'-DT').innerHTML = Math.ceil(asdtdata[itemdata[eq[i]][25+j]]*dtmagn);
				}
			}
			for(l=0; l<=k[i]; l++) {
				if (itemdata[slot[i][l]][25]) {
					for(z=1; z<=(itemdata[slot[i][l]][25]*2); z+=2) {
						ascalc(itemdata[slot[i][l]][25+z], itemdata[slot[i][l]][25+z+1], 1);
						
						if (astabledata[itemdata[slot[i][l]][25+z]][4]==1) document.getElementById('EqAct'+itemdata[slot[i][l]][25+z]+'-CT').innerHTML = Math.ceil(asctdata[itemdata[slot[i][l]][25+z]]*ctmagn);
						if (astabledata[itemdata[slot[i][l]][25+z]][5]==1) document.getElementById('EqAct'+itemdata[slot[i][l]][25+z]+'-DT').innerHTML = Math.ceil(asdtdata[itemdata[slot[i][l]][25+z]]*dtmagn);
					}
				}
			}
		}
	}
}

function ascalc(n, k, m) {
// n: AS ID, k: AS Lv, m: 0 = ChrAtk, 1 = EquipAtk
	tmp1 = 0;
	tmp2 = 0;
	tmp3 = 0;
	tmp4 = 0;
	tmp5 = 0;
	tmp6 = 0;
	
	if (m) tmp7 = 'EqAct';
	else tmp7 = 'ChrAct';
	
	// Attack Skill Hit
	if (n==0 || n==23) ashit = Math.min(Math.floor(bthit*(1+5*k/100)),100);
	else if (n==27) ashit = Math.max(Math.min((hit + 100 - mobflee), 100), 5);
	else if (n==44 || n==69 || n==70 || n==72) ashit = 100;
	else ashit = bthit;

	if (astabledata[n][6] == 'On Hit' && n == 27) document.getElementById(tmp7+n+'-'+k+'-1').innerHTML = ashit+'%';
	if (astabledata[n][7] == 'Crit' && n == 27) document.getElementById(tmp7+n+'-'+k+'-2').innerHTML = Math.max(Math.min(Math.round(critical*20 - mobluk*2 + 1)/10, 100), 0)+'%';
	if (astabledata[n][6] == 'Crit' && n == 82) document.getElementById(tmp7+n+'-'+k+'-1').innerHTML = Math.max(Math.min(Math.round((critical+20)*10 - mobluk*2 + 1)/10, 100), 0)+'%';

	if (n==27) ascri = Math.max(Math.min(Math.round(critical*20 - mobluk*2 + 1)/10, 100), 0);
	else ascri = 0;
	if (n==23) ash = mobscale+1;
	else ash = Math.floor(asdata[n][3]+asdata[n][4]*k);
	if (n==31) ash *= Math.floor(2+0.5*k);
	if (n==34) ash = Math.pow(Math.floor(k/2+1)*2-1,2);
	if (n==36 && (mobprop == 9 || monsterdata[mnum][19] == 1)) ash += 5;

	if (n==52) ash *= Math.ceil((k+4)/3);

	aba = asdata[n][1]+bonusdata[36];
	
	
	aminatk = btbbminatk;
	amaxatk = btbbmaxatk;
	
	if (n==96 || n==97 || n==136) {
		if (Math.floor(((maxatk+bonusdata[40]) - baseatk - bonusdata[40]) * scalecong/100) != Math.floor((minatk - baseatk) * scalecong/100)) amaxatk = Math.floor(((maxatk+bonusdata[40]) - baseatk - 2) * scalecong/100) + baseatk;
		else amaxatk = Math.floor(((maxatk+bonusdata[40]) - baseatk -1) * scalecong/100) + baseatk;
		aba -= bonusdata[36];
	//	if ((maxatk+bonusdata[40]) != minatk) amaxatk = Math.floor((maxatk+bonusdata[40] - baseatk - 1) * scalecong/100) + baseatk;
	//	else btbmaxatk = btbminatk;
	//	amaxatk += bonusdata[40]
		amaxatk += maxbonusatk;
	}
	else if (n==132) {
		aminatk = baseatk + chrdex + bonusdata[38];
		amaxatk = Math.max(baseatk + bonusdata[1], minatk-bonusdata[38]) + bonusdata[38];
		if ((maxatk) != minatk) amaxatk = Math.floor((maxatk - baseatk - 1) * scalecong/100) + baseatk;
		else btbmaxatk = btbminatk;
		amaxatk += maxbonusatk;
	}
	if (n==137) aba -= bonusdata[36];

	aminatk = Math.floor(Math.floor(aminatk * (100+bonusdata[33]) / 100) * (100-support[54]*25) / 100);
	amaxatk = Math.floor(Math.floor(amaxatk * (100+bonusdata[33]) / 100) * (100-support[54]*25) / 100);

	if (n==24) {
		aminatk = Math.floor(aminatk * (100 + 20*k)/100);
		amaxatk = Math.floor(amaxatk * (100 + 20*k)/100);
		if (k>=4) {
			tmp3 += Math.floor(aminatk/2);
			tmp4 += Math.floor(amaxatk/2);
		}
		if (k>=7) {
			tmp3 += Math.floor(aminatk/4);
			tmp4 += Math.floor(amaxatk/4);
		}
		if (k==10) {
			tmp3 += Math.floor(aminatk/8);
			tmp4 += Math.floor(amaxatk/8);
		}
		aminatk += tmp3;
		amaxatk += tmp4;
		tmp3 = 0;
		tmp4 = 0;
	}
	// If Physical
	if (asdata[n][0]==0) {
		if (n==20) bonusdata[31] += k*15;

		if (n==64) bonusdata[31] += Math.max(k-support[96],0)*3;

		if ((n == 14 || n == 62) && (itemdata[eq[4]][1] == 27 || itemdata[eq[4]][1] == 28)) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,1,itemdata[eq[10]][16],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,1,itemdata[eq[10]][16],asbonusdata[n]);
		}
		else if (n == 57) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,3,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,3,asdata[n][6],asbonusdata[n]);
		}
		else if (n==18) {
			tmp1 = actcalc(btbbminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(btbbmaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,1,asdata[n][6],asbonusdata[n]);
		}
		else if (n==21) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,3,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,3,asdata[n][6],asbonusdata[n]);
		}
		else if (n==70) {
			tmp1 = Math.floor(Math.floor((Math.max(Math.floor(aminatk*(50+50*k)/100)-mobmaxvd+bonusdata[29],1)+bonusdata[30])*pcong[mobproplv-1][0][mobprop]/100+bonusdata[31])*addatkc/1000000);
			tmp2 = Math.floor(Math.floor((Math.max(Math.floor(amaxatk*(50+50*k)/100)-mobminvd+bonusdata[29],1)+bonusdata[30])*pcong[mobproplv-1][0][mobprop]/100+bonusdata[31])*addatkc/1000000);
		}
		else if (n==27) {
			tmp1 = Math.floor(Math.floor((Math.floor((btbminatk+bonusdata[29]+bonusdata[30])*addatk/100)+bonusdata[31])*(addatkc)/1000000)*radd/100);
			tmp2 = Math.floor(Math.floor((Math.floor((btbmaxatk+bonusdata[29]+bonusdata[30])*addatk/100)+bonusdata[31])*(addatkc)/1000000)*radd/100);
		}
		else if (n==76) {			
			strbon = 0;
			for(z=1;z<=(chrstr/10);z++) strbon += 5+(z-1)*10;
			//[(weaponweight*0.8*skillmod)+strbonus+weaponupgrades]*damagemodifiers*5
			tmp2 = (Math.floor((Math.floor(Math.floor(itemdata[eq[4]][2] * 0.8 * (100+k*50)/100)) + strbon + bonusdata[29] + bonusdata[30]) * (bonusdata[36]+100)/100 * addatk/100 *(addatkc)/1000000)*5);
			tmp2 = (Math.floor((Math.floor(Math.floor(itemdata[eq[4]][2] * 0.8 * (100+k*50)/100)) + strbon + bonusdata[29] + bonusdata[30]) * (bonusdata[36]+100)/100 * addatk/100 *(addatkc)/1000000)*5);
		}
		else if (n==79) {
			tmp1 = actcalc(minmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,0,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(maxmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,1,1,asdata[n][6],asbonusdata[n]);
		}
		else if (n==83) { // High Speed Cart Ram
			if (support[114]) tmp3 = 100;
			else if (support[87]) tmp3 = 25;
			else tmp3 = 0;
			tmp1 = actcalc(btbbminatk,0,(Math.max(Math.round(cartweight/(16-k),100),1)+tmp3),1,asdata[n][5],ash,0,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(btbbmaxatk,0,(Math.max(Math.round(cartweight/(16-k),100),1)+tmp3),1,asdata[n][5],ash,1,1,asdata[n][6],asbonusdata[n]);
			tmp3 = 0;
		}
		else if (n==84) { // Soul Destroyer
			// Damage on a "hit"  = [INT*5*SkillLv + Random(500~1000)] + ((ATK*SkillLv) * (100-Enemy DEF) - Enemy VIT) * (Elemental Modifier)
			// Damage on a "miss" = [INT*5*SkillLv + Random(500~1000)]
			z = 1;
			if (skilllv[722] && (eq[5] != 0 || eq[5] != 11)) z = 100/(skilllv[722]*10 + 30);
			tmp1 = Math.floor((Math.floor((chrint*5*k + 500)  + (btbbminatk-Math.floor(btminatk_l*z)) * k * (1 - mobdef/100)) - mobmaxvd) * addatk/100);
			tmp2 = Math.floor((Math.floor((chrint*5*k + 1000) + (btbbmaxatk-Math.floor((LeftHand)/2)) * k * (1 - mobdef/100)) - mobminvd) * addatk/100);
			tmp3 = chrint*5*k + 500;
			tmp4 = chrint*5*k + 1000;
		}
		else if (n==87) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],1,0,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],1,1,1,asdata[n][6],asbonusdata[n]);
		}
		else if (n==96) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,3,asdata[n][6],asbonusdata[n]) + k*4;
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,3,asdata[n][6],asbonusdata[n]) + k*4 + skilllv[281]*3;
	
		}
		else if (n==97) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,6,3,bonusdata[41],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,7,3,bonusdata[41],asbonusdata[n]);
		}
		else if (n==115) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,6,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,7,1,asdata[n][6],asbonusdata[n]);
		}
		else if (n==123){ if (monsterdata[mnum][20] == 2) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,1,asdata[n][6],asbonusdata[n]);
		}}
		else if (n==131){ if (monsterdata[mnum][20] == 2 || monsterdata[mnum][20] == 4) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2]+chrstr,k,asdata[n][5],ash,0,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2]+chrstr,k,asdata[n][5],ash,1,1,asdata[n][6],asbonusdata[n]);	
		}}
		else if (n==136) {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,8,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,9,1,asdata[n][6],asbonusdata[n]);
		}
		else {
			tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,1,asdata[n][6],asbonusdata[n]);
			tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,1,asdata[n][6],asbonusdata[n]);
		}
		
		if (n==19) {
			tmp1 = Math.floor(tmp1*(pcong[mobproplv-1][0][mobprop]/100) * ((100+(cartweight/80))/100));
			tmp2 = Math.floor(tmp2*(pcong[mobproplv-1][0][mobprop]/100) * ((100+(cartweight/80))/100));		
		}
		
		tmp5 = Math.round((btmincriatk+btmaxcriatk) * ascri/2 + (tmp1+tmp2)*ashit/2 * (1-ascri/100) + Math.floor(Math.floor((Math.floor(skilllv[694]*2*addatk/100)+bonusdata[31])*addatkc/1000000)*radd/100)*(100-ashit))/100;
		if (n==27) {
			tmp4 = Math.ceil((recharge+250)/mobrecharge);
			tmp6 = Math.round(tmp5/mobrecharge*100000/tmp4)/100;

			tmp6 = tmp1+' - '+tmp2 + ' ('+ tmp5 +')<br>Sec.'+ tmp6;
			if (tmp4>=2) tmp6 += '<br>Strike Ratio 1/' + tmp4;
			document.getElementById(tmp7+'27-'+k+'DM').innerHTML = tmp6;
			tmp4 = 0;
			tmp6 = 0;
		}
		if (n==61) {
			if (!bonusdata[302]) sscong = scong[itemdata[eq[4]][1]-11][1];
			else sscong = 100;
			tmp1 = Math.floor((minatk - baseatk) * sscong/100) + baseatk;
			if (maxatk != minatk) tmp2 = Math.floor((maxatk - baseatk - 1) * sscong/100) + baseatk;
			else tmp2 = tmp1;

			tmp1 += minbonusatk;
			tmp2 += maxbonusatk;
			tmp1 = tmp1 * (100-def)/100 - maxvd;
			tmp2 = tmp2 * (100-def)/100 - minvd;
			tmp3 = minmatk * (100-mdef)/100 - imdef;
			if (minmatk==maxmatk) tmp4 = maxmatk * (100-mdef)/100 - imdef;
			else tmp4 = (maxmatk-1) * (100-mdef)/100 - imdef;
			tmp1 = Math.floor(tmp1+tmp3);
			tmp2 = Math.floor(tmp2+tmp4);
			tmp1 = Math.floor(Math.floor(tmp1*(50+20*k)/100)*pcong[0][6][bonusdata[4]]/100);
			tmp2 = Math.floor(Math.floor(tmp2*(50+20*k)/100)*pcong[0][6][bonusdata[4]]/100);
			tmp1 = Math.floor(Math.floor(tmp1*pcong[0][0][bonusdata[4]]/100)*(100 - bonusdata[101])/100);
			tmp2 = Math.floor(Math.floor(tmp2*pcong[0][0][bonusdata[4]]/100)*(100 - bonusdata[101])/100);
			tmp1 = zero(tmp1);
			tmp2 = zero(tmp2);
			document.getElementById(tmp7+'61-'+k+'-1').innerHTML = tmp1+' - '+tmp2+' x3<br>('+(tmp1+tmp2)*3/2+')';

			tmp1 = btbbminatk * (100-mobdef)/100 - mobmaxvd;
			tmp2 = btbbmaxatk * (100-mobdef)/100 - mobminvd;
			tmp3 = minmatk * (100-mobmdef)/100 - mobimdef;
			if (minmatk==maxmatk) tmp4 = tmp3;
			else tmp4 = (maxmatk-1) * (100-mobmdef)/100 - mobimdef;
			tmp1 = Math.floor(tmp1+tmp3);
			tmp2 = Math.floor(tmp2+tmp4);
			tmp1 = Math.floor(Math.floor(tmp1*(100+40*k)/100)*pcong[mobproplv-1][6][mobprop]/100);
			tmp2 = Math.floor(Math.floor(tmp2*(100+40*k)/100)*pcong[mobproplv-1][6][mobprop]/100);
			tmp1 = Math.floor(tmp1*pcong[mobproplv-1][6][mobprop]/100);
			tmp2 = Math.floor(tmp2*pcong[mobproplv-1][6][mobprop]/100);
			tmp5 = (tmp1+tmp2)/2;
			document.getElementById(tmp7+'61-'+k+'DM').innerHTML = tmp1 +' - '+ tmp2 + ' x3<br>('+ tmp5*3 +')';

			tmp3 = 0;
			tmp4 = 0;
		}
		if (tmp3) tmp6 = Math.round((tmp3+tmp4)*ashit/2 + skilllv[694]*2*(100-ashit))/100;
		if (n==20) {
			bonusdata[31] -= k*15;
			tmp1 = Math.floor(tmp1*pcong[mobproplv-1][5][mobprop]/100);
			tmp2 = Math.floor(tmp2*pcong[mobproplv-1][5][mobprop]/100);
			tmp5 = Math.floor(tmp5*pcong[mobproplv-1][5][mobprop]/100);
		}
		if (n==64) bonusdata[31] -= Math.max(k-support[96],0)*3;
		if (n==72 && itemdata[eq[4]][1]==24) {
			tmp1 = Math.floor(tmp1/2);
			tmp2 = Math.floor(tmp2/2);
			tmp5 = Math.floor(tmp5/2);
		}
		if (n==102) {
			tmp3 = Math.floor(btmincriatk * ((asdata[n][2]*k)/100));
			tmp4 = Math.floor(btmaxcriatk * ((asdata[n][2]*k)/100));
			tmp6 = (tmp1+tmp4)/2;
		}
		else if (n==132) {
			tmp1 = Math.floor(Math.floor((Math.floor(aminatk * (1 - mobdef/100) - mobmaxvd) + itemdata[eq[5]][2] + plus[5]*4) * ((100+k*30)/100) + 112) * 5 * (bonusdata[36]+100)/100 * addatk/100 *(addatkc)/1000000);
			tmp2 = Math.floor(Math.floor((Math.floor(aminatk * (1 - mobdef/100) - mobminvd) + itemdata[eq[5]][2] + plus[5]*4) * ((100+k*30)/100) + 212) * 5 * (bonusdata[36]+100)/100 * addatk/100 *(addatkc)/1000000);
			tmp5 = (tmp1+tmp2)/2;
		}
	}
		
	// If Magic
	if (asdata[n][0]==1) {
		tmp1 = actcalc(minmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
		tmp2 = actcalc(maxmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
		if (n==29) {
			tmp1 = Math.floor(50+minmatk/5)*pcong[mobproplv-1][3][mobprop]/100 * ash;
			tmp2 = Math.floor(50+maxmatk/5)*pcong[mobproplv-1][3][mobprop]/100 * ash;
		}
		if (n==35) {
			tmp1 = Math.floor(tmp1/3);
			tmp2 = Math.floor(tmp2/3);
		}
		tmp5 = Math.round((tmp1+tmp2)*50)/100;
	}

	if (n==16) {
		document.getElementById(tmp7+'16-'+k+'-1').innerHTML = Math.floor(((4+8*k)*Math.floor((chrint+blv)/8))*(100+skilllv[1683]*2)/100);
		if (mobprop == 9) tmp5 = Math.floor((2+4*k)*Math.floor((chrint+blv)/8)*((100+skilllv[1683]*2)/100)*pcong[mobproplv-1][6][mobprop]/100);
	}
	else if (n==22) tmp5 = Math.floor(50*pcong[mobproplv-1][0][mobprop]/100);
	else if (n==40) tmp5 = Math.floor(Math.floor(k*Math.floor(chrdex/2+50)*(1+chrint/100))*pcong[mobproplv-1][4][mobprop]/100);
	else if (n==41) tmp5 = Math.floor((Math.floor(chrdex/10)+Math.floor(chrint/2)+3*skilllv[617]+40)*2*pcong[mobproplv-1][0][mobprop]/100)*ash;
	else if (n==81) tmp5 = Math.floor((Math.floor((Math.floor(chrdex/10)+Math.floor(chrint/2)+3*skilllv[617]+40)*2*pcong[mobproplv-1][0][mobprop]/100)*ash) * (k*70+150)/100);
	else if (n==42) tmp5 = Math.floor(Math.floor(k*Math.floor(chrdex/2+75)*(1+chrint/100))*pcong[mobproplv-1][3][mobprop]/100);
	else if (n==45) tmp5 = Math.floor(Math.floor(k*(chrdex+75)*(1+chrint/100))*pcong[mobproplv-1][2][mobprop]/100);
	else if (n==47) {
		if (mobprop==9 || mobrace==6) {
			ash = 3+k;
			tmp5 = Math.floor(Math.floor(sanctuary[k-1]/2)*pcong[mobproplv-1][6][mobprop]/100)*ash;
			document.getElementById(tmp7+'47-'+k+'DM').innerHTML = Math.round(tmp5/ash) +' x' + ash + '<br>('+ tmp5 +')';
			document.getElementById(tmp7+'47-'+k+'-1').innerHTML = sanctuary[k-1] +' x'+ (1+3*k) + '<br>(' + sanctuary[k-1]*(1+3*k) + ')';
		}
		else {
			document.getElementById(tmp7+'47-'+k+'DM').innerHTML = ' - ';
			document.getElementById(tmp7+'47-'+k+'-1').innerHTML = sanctuary[k-1] +' x'+ (1+3*k) + ' (' + sanctuary[k-1]*(1+3*k) + ')';
		}
	}
	else if (n==49 || n==51) {
		if (mobprop==9) {
			tmp5 = Math.floor((10*k+blv+chrint)*pcong[mobproplv-1][6][mobprop]/100);
			if (monsterdata[mnum][19]!=1) tmp3 = ((k*20)+blv+chrint+chrluk)/10;
			else tmp3 = 0;
			document.getElementById(tmp7+n+'-'+k+'-1').innerHTML = tmp3 + '%';
			document.getElementById(tmp7+n+'-'+k+'-2').innerHTML = Math.round(mobhp*tmp3 + tmp5*(100-tmp3))/100;
			tmp3 = 0;
		}
		else {
			document.getElementById(tmp7+n+'-'+k+'-1').innerHTML = ' - ';
			document.getElementById(tmp7+n+'-'+k+'-2').innerHTML = ' - ';
		}
	}
	else if (n==52 && mobprop != 9 && mobrace != 6) {
		tmp1 = 0;
		tmp2 = 0;
		tmp5 = 0;
	}
	else if (n==59 && itemdata[eq[5]][1]==0 && itemdata[eq[5]][2]) {
		if (mobprop == 9 || mobrace == 6) tmp3 = skilllv[1042]*3;
		tmp1 = Math.floor(baseatk+itemdata[eq[5]][2]+plus[5]*4);
		tmp2 = Math.floor(Math.max(Math.floor(Math.floor(tmp1 * (100+bonusdata[33]) / 100) * (1-mobdef/100) - mobminvd)+tmp3,1+tmp3) * (1 + bonusdata[51+mobprop]/100) * (1 + bonusdata[61+mobrace]/100) * (1 + bonusdata[71+mobscale]/100) * (1+3*k/10) * pcong[mobproplv-1][0][mobprop]/100 * (100)/100);
		tmp1 = Math.floor(Math.max(Math.floor(Math.floor(tmp1 * (100+bonusdata[33]) / 100) * (1-mobdef/100) - mobmaxvd)+tmp3,1+tmp3) * (1 + bonusdata[51+mobprop]/100) * (1 + bonusdata[61+mobrace]/100) * (1 + bonusdata[71+mobscale]/100) * (1+3*k/10) * pcong[mobproplv-1][0][mobprop]/100 * (100)/100);
		tmp3 = 0;
		tmp5 = Math.round((tmp1+tmp2)*ashit/2)/100;
	}
	else if (n==63) {
		tmp5 = 30+10*k+skilllv[1121]*3;
		ash = 31;
		tmp5 *= ash;
	}
	else if (n==65) {
		tmp1 = Math.floor(((aminatk * (100+75*k)/100) * ((mobdef+mobmaxvd)/100) * (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale])/1000000)*2);
		tmp2 = Math.floor(((amaxatk * (100+75*k)/100) * ((mobdef+mobminvd)/100) * (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale])/1000000)*2);
		tmp5 = (tmp1+tmp2)/2;
	}
	else if (n==66) {
		tmp1 = Math.floor(Math.floor((aminatk * 8 + 250 + 150*k) * (100+bonusdata[36])/100 * pcong[mobproplv-1][0][mobprop]/100) * (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale])/1000000);
		tmp2 = Math.floor(Math.floor((amaxatk * 8 + 250 + 150*k) * (100+bonusdata[36])/100 * pcong[mobproplv-1][0][mobprop]/100) * (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale])/1000000);
		tmp3 = Math.floor(Math.floor(Math.floor(aminatk * Math.floor(8 + (maxsp-1)/10) + 250 + 150*k) * (100+bonusdata[36])/100 * pcong[mobproplv-1][0][mobprop]/100) * (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale])/1000000);
		tmp4 = Math.floor(Math.floor(Math.floor(amaxatk * Math.floor(8 + (maxsp-1)/10) + 250 + 150*k) * (100+bonusdata[36])/100 * pcong[mobproplv-1][0][mobprop]/100) * (100 + bonusdata[51+mobprop]) * (100 + bonusdata[61+mobrace]) * (100 + bonusdata[71+mobscale])/1000000);
		tmp5 = (tmp1+tmp2)/2;
		tmp6 = (tmp3+tmp4)/2;
		if (msupport[127] || msupport[65]) {
			tmp1 *=2;
			tmp2 *=2;
			tmp3 *=2;
			tmp4 *=2;
			tmp5 *=2;
			tmp6 *=2;
		}
		document.getElementById(tmp7+'66-'+k+'DM').innerHTML = tmp1 +' - '+ tmp2 + ' ('+ tmp5 +')<br>' + tmp3 +' - '+ tmp4 + ' ('+ tmp6 +')';
	}
	else if (n==71) {
		if (k!=5) {
			tmp1 = pp(itemdata[500+k][15],chrvit,k);
			tmp2 = pp(itemdata[500+k][16]-1,chrvit,k);
			for (l=itemdata[500+k][15]; l<=itemdata[500+k][16]-1; l++) tmp5 += pp(l,chrvit,k);
			tmp5 = Math.round(tmp5*100 / (itemdata[500+k][16]-itemdata[500+k][15]))/100;
		}
		else {
			tmp1 = pp(40,chrint,k);
			tmp2 = pp(59,chrint,k);
			for (l=40; l<=59; l++) tmp5 += pp(l,chrint,k);
			tmp5 = Math.floor(tmp5 * 5)/100;
		}
		document.getElementById(tmp7+'71-'+k+'-1').innerHTML = tmp1 +' - '+ tmp2 +' ('+tmp5+')';
		tmp1=0;
		tmp2=0;
		tmp5=0;
	}
	else if (n==85) tmp5 = k*300 +500;
	else if (n==86)  {
		if(monsterdata[mnum][19]==1) tmp5 = 0;
		else {
			tmp5 = Math.floor(maxhp * (9/100));
			tmp5 = Math.floor(tmp5 * (90+k*10)/100);
			tmp5 = Math.floor(tmp5 * (100 + bonusdata[61+mobrace])/100 * (100 + bonusdata[71+mobscale])/100);
			tmp5 *= 5;
		}
	}
	else if (n==99) {
		tmp1 = 500*k;
		tmp2 = 1000*k;
		if (monsterdata[mnum][19]==1) {
			tmp1 /= 2;
			tmp2 /= 2;
		}
		tmp5 = Math.round((tmp1+tmp2)*50)/100;
	}
	else if (n==111) {
		tmp1 = Math.floor(Math.floor(Math.floor(maxhp * ((k*8)+chrstr+40)/100) *  (1-mobdef/100) - mobminvd) * (pcong[mobproplv-1][0][mobprop]/100) * (100+bonusdata[36]/100) * (addatkc/1000000));
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = tmp1;
	}
	else if (n==120) {
		tmp1 = actcalc(aminatk,aba,asdata[n][2],k,asdata[n][5],ash,0,1,asdata[n][6],asbonusdata[n]);
		tmp2 = actcalc(amaxatk,aba,asdata[n][2],k,asdata[n][5],ash,1,1,asdata[n][6],asbonusdata[n]);
		tmp1 += actcalc(minmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
		tmp2 += actcalc(maxmatk,asdata[n][1],asdata[n][2],k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
		tmp5 = Math.round((tmp1+tmp2)*50)/100;
	}
	else if (n==130) {
		tmp1 = actcalc(minmatk,asdata[n][1],asdata[n][2]+(40+blv),k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
		tmp2 = actcalc(maxmatk,asdata[n][1],asdata[n][2]+(40+blv),k,asdata[n][5],ash,2,1,asdata[n][6],asbonusdata[n]);
		tmp5 = Math.round((tmp1+tmp2)*50)/100;
	}
	else if (n==138) {
		//Damage = SkillLevel x [ A x (1 - B) x (1 - C) x D x [ 0.7 x INT x INT x VIT / (INT + VIT) ] ]
		tmp1 = k * Math.floor((0.7*chrint*chrint*mobminvd)/(chrint+mobminvd));
		tmp2 = k * Math.floor((0.7*chrint*chrint*mobmaxvd)/(chrint+mobmaxvd)) ;
		tmp5 = Math.round((tmp1+tmp2)*50)/100;
	}
	
	if (n==119) {
		tmp1 += k*50;
		tmp2 += k*50;
	}
	
	if ((msupport[127] || msupport[65]) && n==66) {
		tmp1 *= 2;
		tmp2 *= 2;
		tmp5 *= 2;
	}
	
	if (n==106 && support[168]) {
		tmp1 = Math.floor(tmp1 * 1.2);
		tmp2 = Math.floor(tmp2 * 1.2);
		tmp5 = tmp5 * 1.2;
	}
	
	// Equip/Skill Checks
	if ((itemdata[eq[4]][1] != 24 && (n==12 || n==13 || n==82)) || 
		(itemdata[eq[4]][1] != 18 && itemdata[eq[4]][1] != 19 && (n==23 || n==24 || n==25 || n==26 || n==76)) || 
		(!support[85] && n==24) || 
		(itemdata[eq[4]][1] != 15 && (n==54 || n==55) && !m) || 
		(itemdata[eq[5]][1] != 0 && itemdata[eq[5]][2] && (n==58 || n==59 || n==132)) || 
		(itemdata[eq[4]][1] != 27 && itemdata[eq[4]][1] != 28 && (n==62 || n==87))||
		(!support[97] && n==88) ||
		(itemdata[eq[10]][1] != 29 && (n==96)) || 
		(itemdata[eq[10]][1] != 30 && (n==97)) || 
		(itemdata[eq[4]][1] != 31 && (n==98)) || 
		(itemdata[eq[4]][1] != 32 && (n==112 || n==113)) || 
		(itemdata[eq[4]][1] != 32 && itemdata[eq[4]][1] != 33 && (n==114 || n==115)) ||
		(itemdata[eq[4]][1] != 34 && (n==116 || n==117 || n==118)) ||
		(itemdata[eq[4]][1] != 35 && (n==119)) ||
		((itemdata[eq[4]][1] < 32 || itemdata[eq[4]][1] > 36) && (n==120 || n==121 || n==122 || n==123))) {
		tmp1=0;
		tmp2=0;
		tmp5=0;
	}

	// Display Values
	if (astabledata[n][3] && n!=27 && n!=47 && n!=56 && n!=61 && n!=66 && n!=84 && n!=102 && n!=111) {
		if (tmp5>0) {
			if (ash >= 2) document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = Math.round(tmp1/ash) +' - '+ Math.round(tmp2/ash) + ' x' + ash + ' ('+ tmp5 +')';
			else if (tmp6) document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = tmp1+' - '+tmp2 +'+'+ tmp3+' - '+tmp4+'x('+ tmp5 +'+'+ tmp6 +'x)<br>Cart Weight / 8000';
			else document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = tmp1+' - '+tmp2 + ' ('+ tmp5 +')';
			if (!tmp1) {
				if (ash) document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = Math.round(tmp5/ash)+'x'+ash+' ('+tmp5+')';
				else document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = tmp5;
			}
		}
		else document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = ' - ';
	}
	if (n==76 && k != 5) document.getElementById(tmp7+n+'-'+k+'CT').innerHTML = asctdata[n][k-1];
	else if (astabledata[n][4]==2) document.getElementById(tmp7+n+'-'+k+'CT').innerHTML = Math.ceil(asctdata[n][k-1]*ctmagn);
	
	if (astabledata[n][5]==2) document.getElementById(tmp7+n+'-'+k+'DT').innerHTML = Math.ceil(asdtdata[n][k-1]*dtmagn);
	
	if (n==56) {
		if (mobprop==5) {
			bonusdata[36] += 30*k;
			bbtcalc();
			bonusdata[36] -= 30*k;
	
			if (btmincriatk==btmaxcriatk) {
				if (maxaddatk) document.getElementById(tmp7+'56-'+k+'DM').innerHTML = 'Normal: ' + btminatk + ' - ' + btmaxatk + '+' + btminatk_l + ' - ' + btmaxatk_l + '<br>Cri: ' + btmaxcriatk + '+' + maxaddatk + '<br>(' + Math.round(btaveatk*100)/100 + ')';
				else if (btmaxatk_l) document.getElementById(tmp7+'56-'+k+'DM').innerHTML = 'Normal: ' + btminatk + ' - ' + btmaxatk + '+' + btminatk_l + ' - ' + btmaxatk_l + '<br>Cri: ' + btmaxcriatk + '<br>(' + Math.round(btaveatk*100)/100 + ')';
				else document.getElementById(tmp7+'56-'+k+'DM').innerHTML = 'Normal: ' + btminatk + ' - ' + btmaxatk + '<br>Cri: ' + btmaxcriatk + '<br>(' + Math.round(btaveatk*100)/100 + ')';
			}
			else {
				if (maxaddatk) document.getElementById(tmp7+'56-'+k+'DM').innerHTML = 'Normal:' + btminatk + ' - ' + btmaxatk + '+' + btminatk_l + ' - ' + btmaxatk_l + '<br>Cri: ' + btmincriatk + ' - ' + btmaxcriatk + '+' + minaddatk + ' - ' + maxaddatk + '<br>(' + Math.round(btaveatk*100)/100 + ')';
				else if (btmaxatk_l) document.getElementById(tmp7+'56-'+k+'DM').innerHTML = 'Normal: ' + btminatk + ' - ' + btmaxatk + '+' + btminatk_l + ' - ' + btmaxatk_l + '<br>Cri: ' + btmincriatk + ' - ' + btmaxcriatk + '<br>(' + Math.round(btaveatk*100)/100 + ')';
				else document.getElementById(tmp7+'56-'+k+'DM').innerHTML = 'Normal: ' + btminatk + ' - ' + btmaxatk + '<br>Cri: ' + btmincriatk + ' - ' + btmaxcriatk + '<br>(' + Math.round(btaveatk*100)/100 + ')';
			}
		}
		else document.getElementById(tmp7+'56-'+k+'DM').innerHTML = ' - ';
	}
	
	if (n==84) {
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = tmp1+' - '+tmp2 + ' ('+ tmp5 +')<br>['+tmp3+' - '+tmp4+']';
	}
	
	if (n==102) {
		document.getElementById(tmp7+'102-'+k+'DM').innerHTML = 'N: ' + tmp1 + ' - ' + tmp2 + '<br>C: ' + tmp3 + ' - ' + tmp4 + '<br>(' + tmp5 + ')';
		document.getElementById(tmp7+'102-'+k+'-1').innerHTML = (chrluk * 3 / 10 + 1 + bonusdata[22] + 25 + k*5 + bonusdata[76+mobprop] + bonusdata[86+mobrace] + bonusdata[96+mobscale]) * (1 + bonusdata[23] / 100) + '%';
	}
	
	// Requirement Errors
	if (itemdata[eq[4]][1] != 24 && (n==12 || n==13 || n==82)) document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Bow';
	else if (itemdata[eq[4]][1] != 18 && itemdata[eq[4]][1] != 19 && (n==23 || n==24 || n==25 || n==26 || n==76))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Spear';
	else if (!support[85] && n==24) document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Peco';
	else if (itemdata[eq[4]][1] != 15 && (n==54 || n==55) && !m) document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires Katars';
	else if (itemdata[eq[5]][1] != 0 && itemdata[eq[5]][2] && (n==58 || n==59 || n==132))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Shield';
	else if (itemdata[eq[4]][1] != 27 && itemdata[eq[4]][1] != 28 && (n==62 || n==87))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires an Instrument/Whip';
	else if (!support[97] && n==88)
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires Fury Status';
	else if (itemdata[eq[10]][1] != 29 && (n==96))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Shuriken';
	else if (itemdata[eq[10]][1] != 30 && (n==97))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Kunai';
	else if (itemdata[eq[4]][1] != 31 && (n==98))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Huuma Shurkien';
	else if (itemdata[eq[4]][1] != 32 && (n==112 || n==113))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Pistol';
	else if (itemdata[eq[4]][1] != 32 && itemdata[eq[4]][1] != 33 && (n==114 || n==115))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Pistol/Rifle';
	else if (itemdata[eq[4]][1] != 34 && (n==116 || n==117 || n==118))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Shotgun';
	else if (itemdata[eq[4]][1] != 35 && (n==119))
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Grenade Launcher';
	else if ((itemdata[eq[4]][1] < 32 || itemdata[eq[4]][1] > 36) && (n==120 || n==121 || n==122 || n==123)) 
		document.getElementById(tmp7+n+'-'+k+'DM').innerHTML = 'Requires a Gun';
		

	// Status EFfects
	if (n==0) {
		if (monsterdata[mnum][19]==1 || k<6) tmp1 = 0;
		else tmp1 = badst(k*6-30,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'0-'+k+'-2').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'0-'+k+'-2').innerHTML = ' - ';
	}
	else if (n==5) {
		if (mobprop == 9 || monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*3+35,mobmdef,0);
		if (tmp1) document.getElementById(tmp7+'5-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'5-'+k+'-1').innerHTML = ' - ';

		if (mobprop == 9 || monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = Math.max(Math.round(k*3000*(100-mobmdef)/100),0);
		if (tmp1) document.getElementById(tmp7+'5-'+k+'-2').innerHTML = tmp1 + 'ms';
		else document.getElementById(tmp7+'5-'+k+'-2').innerHTML = ' - ';
	}
	else if (n==6) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*4+20,mobint,0);
		if (tmp1) document.getElementById(tmp7+'6-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'6-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==20) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*4+10,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'20-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'20-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==21) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(20,mobint,0);
		if (tmp1) document.getElementById(tmp7+'21-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'21-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==22) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(10,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'22-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'22-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==35) {
		if (mobprop == 9 || monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*3+35,mobmdef,0);
		if (tmp1) document.getElementById(tmp7+'35-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'35-'+k+'-1').innerHTML = ' - ';

		if (mobprop == 9 || monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = Math.max(Math.ceil(k*3000*(100-mobmdef)/100),0);
		if (tmp1) document.getElementById(tmp7+'35-'+k+'-2').innerHTML = tmp1 + 'ms';
		else document.getElementById(tmp7+'35-'+k+'-2').innerHTML = ' - ';
	}
	else if (n==39) {
		if (monsterdata[mnum][19]==1) tmp1 = Math.max(800*k-mobagi*20, 600+Math.max(blv-20,0)*10);
		else tmp1 = Math.max(4000*k-mobagi*100, 3000+Math.max(blv-20,0)*50);
		document.getElementById(tmp7+'39-'+k+'-1').innerHTML = tmp1 + 'ms';
	}
	else if (n==43) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*5+30,mobint,0);
		if (tmp1) document.getElementById(tmp7+'43-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'43-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==44) {
		if (mobprop == 9 || monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*5+30,mobmdef,0);
		if (tmp1) document.getElementById(tmp7+'44-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'44-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==45) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*5+30,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'45-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'45-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==46) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*5+30,mobint,0);
		if (tmp1) document.getElementById(tmp7+'46-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'46-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==48) {
		if (mobprop != 9 || monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(100,mobint,0);
		if (tmp1) document.getElementById(tmp7+'48-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'48-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==50) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(100,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'50-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'50-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==53) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*10+20,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'53-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'53-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==54) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*2+10,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'54-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'54-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==60) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*3,mobint,0);
		if (tmp1) document.getElementById(tmp7+'60-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'60-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==73) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*3+10,mobint,0);
		if (tmp1) document.getElementById(tmp7+'73-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'73-'+k+'-1').innerHTML = ' - ';

		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*3+10,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'73-'+k+'-2').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'73-'+k+'-2').innerHTML = ' - ';
	}
	else if (n==75) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else if (sex==0) tmp1 = badst(k*5+15,mobmdef,0);
		else tmp1 = badst(k*5+15,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'75-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'75-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==77) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(50,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'77-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'77-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==78) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*5+5,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'78-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'78-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==80) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*5,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'80-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'80-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==83) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*5,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'83-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'83-'+k+'-1').innerHTML = ' - ';
		document.getElementById(tmp7+'83-'+k+'-2').innerHTML = (k*100)+500;
	}
	else if (n==86) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = Math.floor(-(maxhp * (9/100) * 5));
		if (tmp1) document.getElementById(tmp7+'86-'+k+'-1').innerHTML = tmp1;
		else document.getElementById(tmp7+'86-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==89) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(k*10+10,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'89-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'89-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==92) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(50,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'92-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'92-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==107) {
		if (monsterdata[mnum][19]==1 && monsterndata[mnum][17]==1) tmp1 = 0;
		else tmp1 = badst(10+k*10,mobmdef+mobluk,0);
		if (tmp1) document.getElementById(tmp7+'107-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'107-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==115) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(3*k,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'115-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'115-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==121) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else { 
			tmp1 = badst(30,mobvit,0);
			tmp2 = badst(60,mobvit,0);
		}
		if (tmp1) document.getElementById(tmp7+'121-'+k+'-1').innerHTML = tmp1+' ~ '+tmp2+'%';
		else document.getElementById(tmp7+'121-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==123) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = 0.1;
		if (tmp1) document.getElementById(tmp7+'123-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'121-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==128) {
		if (monsterdata[mnum][19]==1 && monsterndata[mnum][18] != 1) tmp1 = 0;
		else tmp1 = badst(50,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'128-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'128-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==129) {
		if (monsterdata[mnum][19]==1 && monsterndata[mnum][18] != 0) tmp1 = 0;
		else tmp1 = badst(50,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'128-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'128-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==133) {
		tmp1 = k*3;
		if(tmp1 == 15) tmp1--;
		document.getElementById(tmp7+'133-'+k+'-1').innerHTML = tmp1;
	}
	else if (n==136) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(skilllv[205]*4+10,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'136-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'136-'+k+'-1').innerHTML = ' - ';
	}
	else if (n==137) {
		if (monsterdata[mnum][19]==1) tmp1 = 0;
		else tmp1 = badst(70,mobvit,0);
		if (tmp1) document.getElementById(tmp7+'137-'+k+'-1').innerHTML = tmp1 + '%';
		else document.getElementById(tmp7+'137-'+k+'-1').innerHTML = ' - ';
	}
}
function pp(a, b, c) {
	a = Math.floor(a * (100+skilllv[1202]*5+Math.max(skilllv[1206],c)*10)/100 * (100+b*2)/100);
	return a;
}
function badst(a, b, c) {
	if (!c) tmp = (a * (100-b)/10) + blv - mobluk - monsterdata[mnum][2];
	else tmp = (a * (100-b)/10) + monsterdata[mnum][2] - chrluk - blv;
	tmp = Math.min(Math.max(Math.floor(tmp)/10,0),100);
	return tmp;
}
// * Experience Functions and Sorts
function expsort(n) {
	bthplimit = eval(document.frm.bthplimit.value);
	ranking = eval(document.frm.ranking.value);
	overweight = document.frm.overweight.checked;
	sorted = new Array();
	exptmp = new Array();
	secdmgtmp = new Array();
	alldmgtmp = new Array();
	for (i=0; i<=ranking-1; i++){
		sorted[i] = 0;
		exptmp[i] = 0;
		secdmgtmp[i] = 0;
		alldmgtmp[i] = 0;
	}

	for (mnum=0; mnum<=monnum; mnum++) {
		if (monsterdata[mnum][3] >= 40) {
			readmob();
			bbtcalc();
			if (n) {
				if (!overweight && posthpr >= bthplimit) topsort(0,mnum,Math.round(jobeff*100),Math.round(posthpr*100));
				if (overweight && posthpnr >= bthplimit) topsort(0,mnum,Math.round(jobeff*100),Math.round(posthpnr*100));
			}
			else {
				if (!overweight && posthpr >= bthplimit) topsort(0,mnum,Math.round(baseeff*100),Math.round(posthpr*100));
				if (overweight && posthpnr >= bthplimit) topsort(0,mnum,Math.round(baseeff*100),Math.round(posthpnr*100));
			}
		}
	}

	tmp1 = '';
	tmp = '<table border="0" cellspacing="1"><tr class="index"><td>Ranking</td><td>Monster</td><td>Exp/sec</td><td>HP Gain/Loss</td></tr>';
	for (i = 0; i<=ranking-1; i++) if (exptmp[i] != 0) {
		tmp += '<tr><td class="gray">Rank '+(i+1)+'</td><td><a href="#" onClick="showallbtdata('+ sorted[i] +'); return false;">' + monsterdata[sorted[i]][0] + '</a></td><td class="data">' + exptmp[i]/100 + '</td><td class="data">' + alldmgtmp[i]/100 + '</td></tr>';
	}
	else {
		tmp1 = '<br>• Those whose efficiency per sec close to 0 were disregarded.';
		break;
	}
	tmp += '</table>• This feature does not recalculate due to modifications.<br>  When it renews, please do it <a href="#" onClick="expsort('+n+'); return false;">again</a> to indicate the new values.' + tmp1;
	ExpSorted.innerHTML = tmp;
	tmp = '';
	tmp1 = '';
	document.frm.mnum.value = sorted[0];
	showmobdata();
	bbtshow();
}
function topsort(a,b,c,d) {
	k = 0;
	for (j=a; j<=ranking-1; j++) if (c > exptmp[j]) {
		expsubtmp=exptmp[j];
		sortsubtmp=sorted[j];
		secsubtmp = secdmgtmp[j];
		allsubtmp = alldmgtmp[j];
		exptmp[j] = c;
		sorted[j] = b;
		alldmgtmp[j] = d;
		k = j+1;
		j+=monnum;
	}
	if (k != 0 && k <= ranking-1) topsort(k, sortsubtmp, expsubtmp, allsubtmp);
}

function expcalconoff(){
	expcng++;
	expcng = expcng%2;

	if (expcng) {
		EXPRealTime.innerHTML = '<font color="#CD5C5C">On</font><br>• Please turn off when not in use';
		expcalc();
	}
	else EXPRealTime.innerHTML = '<font color="#AAAAAA">Off</font>';
}
function expcalc() {
	z=0;
	if (AdvOn) z=4;
	if (blv < 99) {
		mnum = eval(document.frm.mnum.value);
		gain = 0;
		killN = 0;
		
		// Calculate Base EXP %
		gain = mobbasexp / exptables[z][blv];	
		gain = Math.round(gain * 10000)/100;
		if (gain >= 100)
			gain=100;
		BGain.innerHTML = gain + '%';
		
		// Calculate the Number of kills needed to lvl
		killN = Math.round(100 / gain);
		BKillsN.innerHTML = killN;
		
		// Exo per Sec
		BExpSec.innerHTML = Math.min(Math.round(baseeff * 100)/100, mobbasexp);
		
		// Time to level in hrs, min, sec
		sec = 0;
		min = 0;
		hrs = 0;
		BEstTime.innerHTML = '';
		sec = Math.round(exptables[z][blv] / Math.min(Math.round(baseeff * 100)/100, mobbasexp));	
		if (sec>60) {
			min = Math.floor(sec / 60);
				sec -= (min * 60);
		}	
		if (min>60) {
			hrs = Math.floor(min / 60);
		//	while(min >= 60)
				min -= (hrs * 60);	
		}	
		if (hrs > 0)
			BEstTime.innerHTML += hrs + 'hrs ';
		if (min > 0)
			BEstTime.innerHTML += min + 'min ';
		if (sec > 0)
			BEstTime.innerHTML += sec + 'sec';
	}
	else {
		BGain.innerHTML = '<center>-</center>';
		BKillsN.innerHTML = '<center>-</center>';
		BExpSec.innerHTML = '<center>-</center>';
		BEstTime.innerHTML = '<center>-</center>';
	}
	
	// Job EXP Calc
	z=0;
	if (job == 0) { 
		if (!AdvOn) z=1;
		else z=5;
	}
	else if (job <= 7) { 
		if (!AdvOn) z=2; 
		else z=6;
	}
	else if (job >= 8 && job <= 13) z=9;
	else if (job >= 14 && job < 40) z=3;
	else if (job == 66) z=8;
	else z=7;
	
	
	if (jlv == 10 && job == 0) {
		JGain.innerHTML = '<center>-</center>';
		JKillsN.innerHTML = '<center>-</center>';
		JExpSec.innerHTML = '<center>-</center>';
		JEstTime.innerHTML = '<center>-</center>';
	}
	else if ((jlv == 50 && job < 40 && job != 7 && job != 8) || ((job >= 40 || job == 7 || job == 8) && jlv == 70 )){
		JGain.innerHTML = '<center>-</center>';
		JKillsN.innerHTML = '<center>-</center>';
		JExpSec.innerHTML = '<center>-</center>';
		JEstTime.innerHTML = '<center>-</center>';
	}
	else {
		gain = mobjobexp / exptables[z][jlv];
		gain = Math.round(gain * 10000)/100;
		if (gain >= 100)
			gain=100;
		JGain.innerHTML = gain + '%';
		
		// Calculate the Number of kills needed to lvl
		killN = Math.round(100 / gain);
		JKillsN.innerHTML = killN;
		
		// Exo per Sec
		JExpSec.innerHTML = Math.min(Math.round(jobeff * 100)/100, mobjobexp);
		
		// Time to level in hrs, min, sec
		sec = 0;
		min = 0;
		hrs = 0;
		JEstTime.innerHTML = '';
		
		sec = Math.round(exptables[z][jlv] / Math.min(Math.round(jobeff * 100)/100, mobjobexp));
		
		if (sec>60) {
			min = Math.floor(sec / 60);
				sec -= (min * 60);
		}	
		if (min>60) {
			hrs = Math.floor(min / 60);
		//	while(min >= 60)
				min -= (hrs * 60);
		}
		
		if (hrs > 0)
			JEstTime.innerHTML += hrs + 'hrs ';
		if (min > 0)
			JEstTime.innerHTML += min + 'min ';
		if (sec > 0)
			JEstTime.innerHTML += sec + 'sec';
	}
	
	// Base Percentage
	currentbexp = 0;
	currentbper = 0;
	currentjexp = 0;
	currentjper = 0;
	z=0;
	if (AdvOn) z=4;
	for(tmp = 0; tmp < blv; tmp++) currentbexp += exptables[z][tmp];
	
	if (!AdvOn) currentbper = currentbexp / 405234428;
	else currentbper = currentbexp / 1209282555;
	currentbper = Math.round(currentbper * 10000) / 100;
	
	if (!AdvOn) PercBase.innerHTML = currentbper + '%<br>(' + (405234428 - currentbexp) + ' left)';
	else PercBase.innerHTML = currentbper + '%<br>(' + (1209282555 - currentbexp) + ' left)';
	
	// Job Percentage
	if (job == 0) {
		if (!AdvOn) {
			for(tmp = 0; tmp < jlv; tmp++)
				currentjexp += exptables[1][tmp];
			currentjper = currentjexp / 1153;
			currentjper = Math.round(currentjper * 10000) / 100;
			PercJob.innerHTML = currentjper + '%<br>(' + (1153 - currentjexp) + ' left)';
		}
		else {
			for(tmp = 0; tmp < jlv; tmp++)
				currentjexp += exptables[5][tmp];
			currentjper = currentjexp / 1267;
			currentjper = Math.round(currentjper * 10000) / 100;
			PercJob.innerHTML = currentjper + '%<br>(' + (1267 - currentjexp) + ' left)';
		}
	}
	else if (job <= 7 && jlv < 50){
		if (!AdvOn) {
			for(tmp = 0; tmp < jlv; tmp++)
				currentjexp += exptables[2][tmp];
			currentjper = currentjexp / 3753621;
			currentjper = Math.round(currentjper * 10000) / 100;
			PercJob.innerHTML = currentjper + '%<br>(' + (3753621 - currentjexp) + ' left)';
		}
		else {
			for(tmp = 0; tmp < jlv; tmp++)
				currentjexp += exptables[6][tmp];
			currentjper = currentjexp / 9360630;
			currentjper = Math.round(currentjper * 10000) / 100;
			PercJob.innerHTML = currentjper + '%<br>(' + (9360630 - currentjexp) + ' left)';
		}
	}
	else if (job >= 8 && job <= 13 && jlv < 70){
		for(tmp = 0; tmp < jlv; tmp++)
			currentjexp += exptables[6][tmp];
		currentjper = currentjexp / 82332654;
		currentjper = Math.round(currentjper * 10000) / 100;
		PercJob.innerHTML = currentjper + '%<br>(' + (82332654 - currentjexp) + ' left)';
	}
	else if (job >= 14) {
		if (!AdvOn && job !=66 && jlv < 50) {
			for(tmp = 0; tmp < jlv; tmp++)
				currentjexp += exptables[3][tmp];
			currentjper = currentjexp / 16488271;
			currentjper = Math.round(currentjper * 10000) / 100;
			PercJob.innerHTML = currentjper + '%<br>(' + (16488271 - currentjexp) + ' left)';
		}
		else if (AdvOn && job != 66 && jlv < 70) { // This table might not be compatible with super novices...
			for(tmp = 0; tmp < jlv; tmp++)
				currentjexp += exptables[7][tmp];
			currentjper = currentjexp / 1083356553;
			currentjper = Math.round(currentjper * 10000) / 100;
			PercJob.innerHTML = currentjper + '%<br>(' + (1083356553 - currentjexp) + ' left)';
		}
		else if (job == 66 && jlv < 70) {
			for(tmp = 0; tmp < jlv; tmp++)
				currentjexp += exptables[8][tmp];
			currentjper = currentjexp / 25295461;
			currentjper = Math.round(currentjper * 10000) / 100;
			PercJob.innerHTML = currentjper + '%<br>(' + (25295461 - currentjexp) + ' left)';
		}
		else PercJob.innerHTML = '<center>-</center>';
	}
	else PercJob.innerHTML = '<center>-</center>';
}
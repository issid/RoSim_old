/*Index**********
* Cookie-related Fucntions
	Declarations
	
* Data Saving Functions
setChrCookie(n)		: Save Character v2
setEquipCookie(n)	: Save Equipment v2
Chrdatainfo(n,m)	: Save Character slot dialog box
Equipdatainfo(n,m)	: Save Equipment slot dialog box

* Delete Cookie Functions
deleteChrCookie()	: Delete Selected Character Slot
deleteEquipCookie(n)	: Delete Selected Equipment Slot

* Loading Cookies
getChrCookie()		: Load Character Data
getEquipCookie()	: Load Equipment Data
chrsvdataview()		: Load Character View Slots
eqsvdataview()		: Load Equipment View Slots
loadchrpswd(n)		: Load Character Password [v2]
loadeqpswd(n)		: Load Equipment Password [v2]

* Encode/Decypher Functions
encchr()		: Encode Character Code into "Hex"
enceq()			: Encode Character Code into "Hex"
decchr()		: Decypher Character Code into values
deceq()			: Decypher Equipment code into values

* Misc Functions()
CookieAlert(n,m,l)	: Alert message before overwriting
resetpswd()		: Reset Loaded Character Prompt
fillzero(n,m)		: Fill in zeros in binary code
to10(x)			: Decyphers a string into binary 1s
pswderr(n)		: Error Alert Box
pswdshow()		: Character and Equipment Password Display Prompt
ckallcopy()		: v2 Copy All slots and their Equipment into clipboard
*****************/

cookreset = new Array('','');

/* Job Skill Lengths Array ******************
 0: Length of skills attained before the job
 1: Length of skills attained in current job
 ie. - Swordsman = 7 skills
 	Knight = 10 skills
	jobsk[7] = new Array(7, 10);
 Use this for jobs in the future /ok
*****************************/
jobsk = new Array();		jobsk[0] = new Array(0,0);	jobsk[1] = new Array(0,7);	jobsk[2] = new Array(0,13);
jobsk[3] = new Array(0,5);	jobsk[4] = new Array(0,14);	jobsk[5] = new Array(0,7);	jobsk[6] = new Array(0,6);
jobsk[14] = new Array(7,10);	jobsk[15] = new Array(13,14);	jobsk[16] = new Array(5,17);	jobsk[17] = new Array(14,18);
jobsk[18] = new Array(7,21);	jobsk[19] = new Array(6,10);	jobsk[27] = new Array(7,18);	jobsk[28] = new Array(13,21);
jobsk[29] = new Array(5,18);	jobsk[30] = new Array(14,15);	jobsk[31] = new Array(7,16);	jobsk[32] = new Array(6,22);
jobsk[66] = new Array(0,52);	jobsk[67] = new Array(0,0); 	jobsk[40] = new Array (7,18);	jobsk[41] = new Array(13,20);
jobsk[42] = new Array(5,21);	jobsk[43] = new Array(14,22);	jobsk[44] = new Array(7,29);	jobsk[45] = new Array(6,15);
jobsk[53] = new Array(7,22);	jobsk[54] = new Array(13,29);	jobsk[55] = new Array(5,24);	jobsk[56] = new Array(14,19);
jobsk[57] = new Array(7,28);	jobsk[58] = new Array(6,26);	jobsk[7] = new Array(0,17);	jobsk[8] = new Array(0,23);
jobsk[9] = new Array(0,22);	jobsk[20] = new Array(17,18);	jobsk[33] = new Array(17,27);

encode = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_+=.:$';

enchf=new Array();enchf[0] = '1';enchf[1] = '011';enchf[2] = '101';enchf[3] = '111';enchf[4] = '0101';
enchf[5] = '01';enchf[6] = '0111';enchf[7] = '1011';enchf[8] = '1101';enchf[9] = '1111';enchf[10] = '11';

// Encode Points - Binary versions of numbers, 1 - 69
encptn=new Array();encptn[0] = '0001000';encptn[1] = '0001001';encptn[2] = '0001010';encptn[3] = '0001100';
encptn[4] = '0001110';encptn[5] = '0010001';encptn[6] = '0010010';encptn[7] = '0010011';encptn[8] = '0010100';
encptn[9] = '0010110';encptn[10] = '0011000';encptn[11] = '0011001';encptn[12] = '0011010';encptn[13] = '0011100';
encptn[14] = '0011110';encptn[15] = '0100010';encptn[16] = '0100011';encptn[17] = '0100100';encptn[18] = '0100101';
encptn[19] = '0100110';encptn[20] = '0100111';encptn[21] = '0101000';encptn[22] = '0101001';encptn[23] = '0101100';
encptn[24] = '0110001';encptn[25] = '0110010';encptn[26] = '0110011';encptn[27] = '0110100';encptn[28] = '0111000';
encptn[29] = '0111001';encptn[30] = '0111100';encptn[31] = '1000100';encptn[32] = '1000101';encptn[33] = '1000110';
encptn[34] = '1000111';encptn[35] = '1001000';encptn[36] = '1001001';encptn[37] = '1001010';encptn[38] = '1001011';
encptn[39] = '1001100';encptn[40] = '1001101';encptn[41] = '1001110';encptn[42] = '1001111';encptn[43] = '1010001';
encptn[44] = '1010010';encptn[45] = '1010011';encptn[46] = '1011000';encptn[47] = '1011001';encptn[48] = '1100010';
encptn[49] = '1100011';encptn[50] = '1100100';encptn[51] = '1100101';encptn[52] = '1100110';encptn[53] = '1100111';
encptn[54] = '1101000';encptn[55] = '1101001';encptn[56] = '1110001';encptn[57] = '1110010';encptn[58] = '1110011';
encptn[59] = '1111000';encptn[60] = '1111001';encptn[61] = '0000000';encptn[62] = '1000000';encptn[63] = '0100000';
encptn[64] = '1100000';encptn[65] = '0010000';encptn[66] = '0110000';encptn[67] = '1010000';encptn[68] = '1110000';
encptn[69] = '1111111';encptn[70] = '1111110';encptn[71] = '1111101';encptn[72] = '1111011';

//Load Character View Slots
function chrsvdataview() {
	//This is for each "slot" -- Cookies are not in order
	for (c = 0; c <= 9; c++) {
	
		cdata = new Array();			// Empty Data Array used for cookies
		cookieid = 'msim' + c;			// Line that starts each character [+ its number save slot]
		clng = document.cookie.length;		// Cookie Length
		cdata = document.cookie.split('; ');	// Break Cookie into array
		cstr = '';				// String used temporarily
		
		i = 0;
		while (cdata[i]){ //substr, returns chars from (pos, length to grab)
			if (cdata[i].substr(0,6) == cookieid + '='){
				cstr = cdata[i].substr(6,cdata[i].length);//After 'msim[num]=' puts the rest into string
				break;
			}
			i++;
		}
		if (cstr.match(/@/)) {// Data format v2 - default now
			cdata = cstr.split('@');	// It now splits the cstr [end points of @] and sets it to cdata
	
			if (cdata[0]) {	// Fist @ array contains character data.
				decchr(cdata[0]);	// Decypher Char *++*
				if (savedata[0]>=0) a = savedata[0];
				if (savedata[1]>=0) b = savedata[1];
				z = '';
				if (savedata[14] && a <= 6) z = 'High_';
				document.getElementById('CookieIcon' + c).innerHTML = '<a href="#" onClick="Chrdatainfo('+c+','+1+'); return false"><img src="img2/cookie/'+z+jobname[sexname[b]][a]+'_'+sexname[b]+'.gif" border="0"></a>';
			}	// Set appropriate icons. Top is for specific Job, below is if there is no char, and below that the same.
			else document.getElementById('CookieIcon' + c).innerHTML = '<a href="#" onClick="Chrdatainfo('+c+','+0+'); return false"><img src="img2/cookie/nodata.gif" border="0"></a>';
		}
		else document.getElementById('CookieIcon' + c).innerHTML = '<a href="#" onClick="Chrdatainfo('+c+','+0+'); return false"><img src="img2/cookie/nodata.gif" border="0"></a>';
	}
}

// Load Equipment View Slots
function eqsvdataview() {
	// Four slots
	for (c = 0; c <= 3; c++) {
		
		// Declarations and cookie uploading
		cdata = new Array();
		cookieid = loadedcookie;	// If there is already a cookie loaded, give its ID [msim#]
		clng = document.cookie.length;
		cdata = document.cookie.split('; ');
		cstr = '';
		
		i = 0;
		while (cdata[i]){
			if (cdata[i].substr(0,6) == cookieid + '='){
				cstr = cdata[i].substr(6,cdata[i].length);	// Place Saved data into its own string
				break;
			}
			i++;
		}
		if (cstr.match(/@/)) {// Data format v2
			cdata = cstr.split('@');	// Split into arrays of @
	
			if (cdata[c+1]) {
				deceq(cdata[c+1]);	// Go and decypher it
				a = savedata[0][4];	// Grab the item number for left hand
			}
			if (error) document.getElementById('EqCookieIcon' + c).innerHTML = '<a href="#" onClick="Equipdatainfo('+c+','+1+'); return false"><img src="img2/cookie/error.gif" border="0"></a>';
			else if (loadedcookie == '') document.getElementById('EqCookieIcon' + c).innerHTML = '<a href="#" onClick="Equipdatainfo('+c+','+1+'); return false"><img src="img2/cookie/nodata.gif" border="0"></a>';
			else {
				if (cdata[c+1]) document.getElementById('EqCookieIcon' + c).innerHTML = '<a href="#" onClick="Equipdatainfo('+c+','+1+'); return false"><img src="img2/icon/'+a+'.gif" border="0"></a>';
				else document.getElementById('EqCookieIcon' + c).innerHTML = '<a href="#" onClick="Equipdatainfo('+c+','+0+'); return false"><img src="img2/cookie/nodata.gif" border="0"></a>';
			}	// Set Slot to appropriate Icon
	
		}
		else document.getElementById('EqCookieIcon' + c).innerHTML = '<img src="img2/cookie/nodata.gif" border="0">';
	}
}
function Chrdatainfo(n,m) {
// n Saving Number
//m 0: No Data 1: There is Data
	cookieid = 'msim' + n;
	alllayerhide();
	MM_showHideLayers('CookieLayer','','show');
	tmp = '*Character Slot '+(n+1)+' Data*<br>';
	i = n;
	if (m) tmp += '.<a href="#" onClick="CookieAlert(i,0,0); return false">Load</a><br>';
	if (!m) tmp += '.<a href="#" onClick="setChrCookie(); return false">New Save</a><br>';
	else if (loadedcookie == cookieid) tmp += '.<a href="#" onClick="setChrCookie(); return false">Save</a><br>';
	else tmp += '.<a href="#" onClick="CookieAlert(i,1,0); return false">Save</a><br>';
	if (m) tmp += '.<a href="#" onClick="CookieAlert(i,2,0); return false">Delete</a>';
	else tmp += '.<a href="#" onClick="deleteChrCookie(); return false">Cancel</a>';

	CookieInfo.innerHTML = tmp;
}
function Equipdatainfo(n,m) {
// n Saving Number
//m 0: No Data 1: There is Data
	alllayerhide();
	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == loadedcookie + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}

	MM_showHideLayers('CookieLayer','','show');
	tmp = '*Equipment Slot '+(n+1)+'<br>';
	if (m) tmp += '.<a href="#" onClick="getEquipCookie('+n+'); return false">Load</a><br>';
	if (cstr.match(/@/)) tmp += '.<a href="#" onClick="setEquipCookie('+n+'); return false">Overwrite</a><br>';
	if (m) {
		if (n != 0) tmp += '.<a href="#" onClick="deleteEquipCookie('+n+'); return false">Delete</a>';
		else tmp += 'First equip save slot cannot be deleted.';
	}
	CookieInfo.innerHTML = tmp;
}

function CookieAlert(n,m,l) {
	tmp = '*Character Slot '+(n+1)+' Data*<br>';
	if (m == 0) tmp += '<font color="CD5C5C">Warning - Will Overwrite Data.</font><br>.<a href="#" onClick="get'+cookname[l]+'Cookie();'+cookreset[l]+' return false">Load</a><br>';
	if (m == 1) tmp += '<font color="CD5C5C">Warning - Will Overwrite Data.</font><br>.<a href="#" onClick="set'+cookname[l]+'Cookie(); return false">Overwrite</a><br>';
	if (m == 2) tmp += '<font color="CD5C5C">Are you sure?</font><br>.<a href="#" onClick="delete'+cookname[l]+'Cookie(); return false">Delete</a><br>';
	tmp += '.<a href="#" onClick="Chrdatainfo('+n+',1); return false">Cancel</a>';
	CookieInfo.innerHTML = tmp;
}

// Save Cookie
function setChrCookie() {
	//msim0-msim9
	loadedcookie = cookieid;

	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == cookieid + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}

	if (cstr.match(/%00/)) {
		deleteEquipCookie(0);
		deleteEquipCookie(1);
		deleteEquipCookie(2);
		deleteEquipCookie(3);
	}

	cookieid = loadedcookie;
	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == cookieid + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}

	if (cstr.match(/@/)) {
		cdata = cstr.split('@');
		cstr = encchr()+'@'+enceq()+'@'+cdata[2]+'@'+cdata[3]+'@'+cdata[4];
	}
	else cstr = encchr() + '@' + enceq() + '@@@';

	exp = new Date();
	exp.setTime(exp.getTime()+1000*60*60*24*365);
	document.cookie = cookieid + '=' + cstr + '; expires=' + exp.toGMTString();

	chrsvdataview();
	eqsvdataview();
	MM_showHideLayers('CookieLayer','','hide');
}
function setEquipCookie(n) {
	//msim0-msim9
	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == loadedcookie + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}

	if (cstr.match(/@/)) {
		cdata = cstr.split('@');
		cdata[n+1] = enceq();
		cstr = cdata[0]+'@'+cdata[1]+'@'+cdata[2]+'@'+cdata[3]+'@'+cdata[4];

		exp = new Date();
		exp.setTime(exp.getTime()+1000*60*60*24*365);

		document.cookie = loadedcookie + '=' + cstr + '; expires=' + exp.toGMTString();
		eqsvdataview();
		MM_showHideLayers('CookieLayer','','hide');
	}
	else alert('Saved data is invalid.');
}

// Load Cookie
function getChrCookie() {
	loadedcookie = cookieid;
	cdata = new Array();
	streset();

	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == cookieid + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}
	if (cstr.match(/@/)) {// Data format v2
		loadchrpswd(cstr);
		eqsvdataview();
	}
	else alert('Saved data is invalid.');
}
function getEquipCookie(n) {
	cdata = new Array();
	eqreset();

	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == loadedcookie + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}

	if (cstr.match(/%00/)) {
		cookieid = escape(loadedcookie + 'e' + n);
		clng = document.cookie.length;
		cdata = document.cookie.split('; ');
		cstr = '';
		i = 0;
		while (cdata[i]){
			if (cdata[i].substr(0,8) == cookieid + '='){
				cstr = cdata[i].substr(8,cdata[i].length);
				break;
			}
			i++;
		}

		cdata = cstr.split('%00');
		
		z=0;
		if (job > 20 && job < 34) z=6;
		else if (job > 39 && job < 46) z=26;
		else if (job > 52 && job < 59) z=32;
		else if (job == 66) z=66;
		for (i = 0; i <= 10; i++) if (cdata[i]) if (itemeq[eval(unescape(cdata[i]))-1][job-z] == 1) eq[i] = eval(unescape(cdata[i]))-1;
		for (i = 0; i <= 9; i++) if (cdata[i+11]) if (itemeq[eq[i]][job-z] == 1) plus[i] = eval(unescape(cdata[i+11]))-1;
		for (i = 0; i <= 9; i++) if (cdata[i+21]) if (itemeq[eq[i]][job-z] == 1) slot[i][0] = eval(unescape(cdata[i+21]))-1;
		if (cdata[31]) if (itemeq[eq[4]][job-z] == 1) slot[4][1] = eval(unescape(cdata[31]))-1;
		if (cdata[32]) if (itemeq[eq[4]][job-z] == 1) slot[4][2] = eval(unescape(cdata[32]))-1;
		if (cdata[33]) if (itemeq[eq[4]][job-z] == 1) slot[4][3] = eval(unescape(cdata[33]))-1;
		if (cdata[34]) if (itemeq[eq[5]][job-z] == 1) slot[5][1] = eval(unescape(cdata[34]))-1;
		if (cdata[35]) if (itemeq[eq[5]][job-z] == 1) slot[5][2] = eval(unescape(cdata[35]))-1;
		if (cdata[36]) if (itemeq[eq[5]][job-z] == 1) slot[5][3] = eval(unescape(cdata[36]))-1;

		readbonus(0);
		equip();
		showslot();
		showplus();
		statuscalc(0);
		MM_showHideLayers('CookieLayer','','hide');
	}
	else if (cstr.match(/@/)) {
		cdata = cstr.split('@');
		loadeqpswd(cdata[n+1]);
	}
	else alert('Saved data is invalid.');
}
function deleteChrCookie() {

	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == cookieid + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}


	if (cstr.match(/%00/)) {
		m = loadedcookie;
		loadedcookie = cookieid;
		deleteEquipCookie(0);
		deleteEquipCookie(1);
		deleteEquipCookie(2);
		deleteEquipCookie(3);

		exp = new Date();
		exp.setTime(exp.getTime());
		document.cookie = loadedcookie + '=; expires=' + exp.toGMTString();
		if (cookieid == m) loadedcookie = '';
		else loadedcookie = m;
	}
	else if (cstr.match(/@/)) {
		exp = new Date();
		exp.setTime(exp.getTime());
		document.cookie = cookieid + '=; expires=' + exp.toGMTString();

		if (cookieid == loadedcookie) loadedcookie = '';
	}
	MM_showHideLayers('CookieLayer','','hide');
	chrsvdataview();
	eqsvdataview();
}
function deleteEquipCookie(n) {
	cdata = new Array();
	clng = document.cookie.length;
	cdata = document.cookie.split('; ');
	cstr = '';
	i = 0;
	while (cdata[i]){
		if (cdata[i].substr(0,6) == loadedcookie + '='){
			cstr = cdata[i].substr(6,cdata[i].length);
			break;
		}
		i++;
	}
	if (cstr.match(/%00/)) {
		cookieid = escape(loadedcookie + 'e' + n);
		exp = new Date();
		exp.setTime(exp.getTime());
		document.cookie = cookieid + '=; expires=' + exp.toGMTString();
	}
	else if (cstr.match(/@/)) {
		cdata = cstr.split('@');
		cdata[n+1] = '';

		cstr = cdata[0]+'@'+cdata[1]+'@'+cdata[2]+'@'+cdata[3]+'@'+cdata[4];

		exp = new Date();
		exp.setTime(exp.getTime()+1000*60*60*24*365);
		document.cookie = cookieid + '=' + cstr + '; expires=' + exp.toGMTString();
	}
	else alert('Saved data is invalid.');

	MM_showHideLayers('CookieLayer','','hide');
	eqsvdataview();
}


// Password function
// Encode Character
function encchr(){
	tmp2 = '';

	tmp2 += fillzero(job.toString(2),7);
	tmp2 += sex;
	tmp2 += fillzero(face.toString(2),6);
	tmp2 += fillzero(hair.toString(2),5);
	tmp2 += fillzero(blv.toString(2),8);
	tmp2 += fillzero(jlv.toString(2),8);
	tmp2 += AdvOn;
		
	for (i=0; i<=5; i++) tmp2 += fillzero(bstatus[i].toString(2),7);
	
	pass = '';
	for (i=0; i<tmp2.length/6; i++)  pass += encode.substr(to10(tmp2.substr(i*6,6)), 1);
	
	tmp2 = '';
	for (i=1; i<=jobsk[job][0]; i++) tmp2 += enchf[skilllv[(job-1)%13*40+i]] + '00';
	if (AdvOn && job >39) {
		for (i=1; i<=(jobsk[job-26][1]); i++) tmp2 += enchf[skilllv[(job-27)*40+i]] + '00';
		for (i=1; i<=(jobsk[job][1]-jobsk[job-26][1]); i++) tmp2 += enchf[skilllv[(job-1)*40+i]] + '00';
	}
	else for (i=1; i<=jobsk[job][1]; i++) tmp2 += enchf[skilllv[(job-1)*40+i]] + '00';
	for (i=1; i<=jobsk[job][0]; i++) tmp2 += enchf[skill1st[(job-1)%13*40+i]] + '00';
	
	if (job==0) tmp2 += enchf[skilllv[0]] + '00';

	tmp2 = tmp2.substr(0,tmp2.length-2);
	tmp3 = tmp2.length%7;
	if (tmp3) for (i=0; i<7-tmp3; i++) tmp2 += '0';

	for (i=0; i<tmp2.length/7; i++) for (j=0; j<encptn.length; j++) if (tmp2.substr(i*7,7)==encptn[j]) {
		pass += encode.substr(j,1);
		j += encptn.length;
	}
	return pass;
}

// Encodes Equipment
function enceq() {
	tmp2 = '';

	for (i=0; i<=10; i++) {
		switch(i) {
		case 0:
			if (eq[i]!=i) {
				if (eq[i]<2300) tmp3 = (eq[i]-2200).toString(2);
				else tmp3 = (eq[i]-4900).toString(2);
			}
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,8);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML = tmp3 + '-';

			tmp3 = plus[i].toString(2);
			tmp3 = fillzero(tmp3,4);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			if (slot[i][0]!=10) tmp3 = (slot[i][0]-4000).toString(2);
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,9);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<font color="blue">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		case 1:
			if (eq[i]!=i) {
				if (eq[i]<2300) tmp3 = (eq[i]-2200).toString(2);
				else tmp3 = (eq[i]-4900).toString(2);
			}
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,8);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			if (slot[i][0]!=10) tmp3 = (slot[i][0]-4000).toString(2);
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,9);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML +=  '<font color="blue">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		case 2:
			if (eq[i]!=i) {
				if (eq[i]<2300) tmp3 = (eq[i]-2200).toString(2);
				else tmp3 = (eq[i]-4900).toString(2);
			}
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,8);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<font color="blue">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		case 3:
			if (eq[i]!=i) tmp3 = (eq[i]-2300).toString(2);
			else tmp3 = '0000000';
			tmp3 = fillzero(tmp3,7);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			tmp3 = plus[i].toString(2);
			tmp3 = fillzero(tmp3,4);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			if (slot[i][0]!=10) tmp3 = (slot[i][0]-4000).toString(2);
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,9);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<font color="orange">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		case 4:
			if (eq[i]!=i) {
				if (eq[i]>3000) tmp3 = (eq[i]).toString(2);
				else tmp3 = (eq[i]).toString(2);
			}
			else tmp3 = '000000000000';
			tmp3 = fillzero(tmp3,12);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<font color="#008000">'+ tmp3+ '['+tmp3.length+']-';

			tmp3 = plus[i].toString(2);
			tmp3 = fillzero(tmp3,4);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '</font>-';

			for (j=0; j<=3; j++) {
				if (slot[i][j]!=10) {
					if (slot[i][j]>=4000) tmp3 = (slot[i][j]-3000).toString(2);
					else tmp3 = (slot[i][j]).toString(2);
				}
				else tmp3 = '00000000000';
				tmp3 = fillzero(tmp3,11);
				tmp2 += tmp3;
				if(dbw) DebugText.innerHTML += '<font color="#9400D'+(3+j)+'">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + '] ['+(eq[i]-1100)+']</font> | ';
			}
			break;
		case 5:
			if (eq[i]!=i) {
				if (eq[i]>3000) tmp3 = (eq[i]).toString(2);
				else tmp3 = (eq[i]).toString(2);
			}
			else tmp3 = '000000000000';
			tmp3 = fillzero(tmp3,12);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<br>'+ tmp3 + '-';

			tmp3 = plus[i].toString(2);
			tmp3 = fillzero(tmp3,4);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			for (j=0; j<=3; j++) {
				if (slot[i][j]!=10) {
					if (slot[i][j]>=4000) tmp3 = (slot[i][j]-3000).toString(2);
					else tmp3 = (slot[i][j]).toString(2);
				}
				else tmp3 = '00000000000';
				tmp3 = fillzero(tmp3,11);
				tmp2 += tmp3;
				if(dbw) DebugText.innerHTML += '<font color="#9400D'+(3+j)+'">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']</font>-';
			}
			break;
		case 6:
			if (eq[i]!=i) tmp3 = (eq[i]-2500).toString(2);
			else tmp3 = '000000';
			tmp3 = fillzero(tmp3,6);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			tmp3 = plus[i].toString(2);
			tmp3 = fillzero(tmp3,4);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			if (slot[i][0]!=10) tmp3 = (slot[i][0]-4000).toString(2);
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,9);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML +=  '<font color="pink">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		case 7:
			if (eq[i]!=i) tmp3 = (eq[i]-2400).toString(2);
			else tmp3 = '000000';
			tmp3 = fillzero(tmp3,6);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			tmp3 = plus[i].toString(2);
			tmp3 = fillzero(tmp3,4);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			if (slot[i][0]!=10) tmp3 = (slot[i][0]-4000).toString(2);
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,9);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<font color="brown">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		case 8:
		case 9:
			if (eq[i]!=i) tmp3 = (eq[i]-2600).toString(2);
			else tmp3 = '0000000';
			tmp3 = fillzero(tmp3,7);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += tmp3 + '-';

			if (slot[i][0]!=10) tmp3 = (slot[i][0]-4000).toString(2);
			else tmp3 = '00000000';
			tmp3 = fillzero(tmp3,9);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<font color="blue">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		case 10:
			if (eq[i]<1800) tmp3 = (eq[i]-1750).toString(2);
			else if (eq[i]<3100) tmp3 = (eq[i]-2950).toString(2);
			else if (eq[i]<3200) tmp3 = (eq[i]-3000).toString(2);
			else if (eq[i]<3900) tmp3 = (eq[i]-3650).toString(2);
			else if (eq[i]<4000) tmp3 = (eq[i]-3700).toString(2);
			
			tmp3 = fillzero(tmp3,8);
			tmp2 += tmp3;
			if(dbw) DebugText.innerHTML += '<font color="red">'+ tmp3 + '['+to10(tmp3)+','+tmp3.length + ']' + '</font>-';
			break;
		}
	}

	pass = '';
	for (i=0; i<tmp2.length/6; i++) pass += encode.substr(to10(tmp2.substr(i*6,6)), 1);

	for (i=0; i<pass.length; i++) {
		if (pass.substr(i,1)=='0') {
			b=0;
			j=i;
			while(pass.substr(j,1)=='0') {
				b++;
				j++;
			}
			if (b>1) pass = pass.substr(0,i) + '$' + encode.substr(b,1) + pass.substr(j,pass.length-i-b);
		}
	}
	
	if(dbw) DebugText.innerHTML +=  '<br> Overall Length: ['+tmp2.length+'] Pass: '+pass;

	return pass;
}

// Decrypt Character Cookie "ooo aaaah..."
function decchr(n){	
	error = 0;
	savedata = new Array();
	n = n.split('@');
	
	//If Password is too long...
	if (n[0].length>12 && n[0].length<53) {
		tmp2 = n[0].substr(0,13);
		tmp3 = n[0].substr(13,n[0].length-13);
		n[0] = new Array(tmp2, tmp3);
	
		// Encodes cookie data into binary values [001001] 
		//  the value to goes up to is the length of the character data divided by 6 [13 now]
		pass = '';
		for (i=0; i<13; i++) pass += fillzero(encode.indexOf(n[0][0].substr(i,1)).toString(2), 6);
		
		// Here is the part for jobs. Any Jobs over 20 [GM] is casted out [error]
		tmp2 = to10(pass.substr(0,7));
		if (tmp2>=0 && tmp2<=66) savedata[0] = tmp2;
		else pswderr('Job');
	
		// Gender type
		tmp2 = pass.substr(7,1)-0;
		if (tmp2==1 || !tmp2) savedata[1] = tmp2;
		else pswderr('Gender');
	
		// Hair Type
		tmp2 = to10(pass.substr(8,6));
		if (tmp2>=0 && tmp2<=23) savedata[2] = tmp2;
		else pswderr('Hair Style');
	
		// Hair Color
		tmp2 = to10(pass.substr(14,5));
		if (tmp2>=0 && tmp2<=8) savedata[3] = tmp2;
		else pswderr('Hair Color');
	
		// BaseLv
		tmp2 = to10(pass.substr(19,8));
		if (tmp2>=1 && tmp2<=181) savedata[4] = tmp2;
		else pswderr('BaseLv');
	
		// JobLv... Must put in here information for new classes [70 Lvs worth]
		tmp2 = to10(pass.substr(27,8));
		if (tmp2>=1 && (tmp2<=10 || (tmp2<=50 && savedata[0])  || (tmp2 <=99 && savedata[0] == 66) || (tmp2 <=70 && (savedata[0] >= 40 || savedata[0] == 7 || savedata[0] == 8 || savedata[0] == 9)))) savedata[5] = tmp2;
		else pswderr('JobLv');
		
		// Advance Class
		tmp2 = pass.substr(35,1)-0;
		if (tmp2==1 || !tmp2) savedata[14] = tmp2;
		else pswderr('AdvJob Setting');
	
		// Stats
		for (i=0; i<6; i++) {
			tmp2 = to10(pass.substr(36+i*7,7));
			if (tmp2>=1 && tmp2<=99) savedata[6+i] = tmp2;
			else pswderr(mname[i]+' - '+tmp2);
		}
	
		// Find any/all skills and save it
		pass = '';
		for (i=0; i<n[0][1].length; i++) if (encode.indexOf(n[0][1].substr(i,1))>=0 && encode.indexOf(n[0][1].substr(i,1))<69) pass += encptn[encode.indexOf(n[0][1].substr(i,1))];
							else if (n[0][1].substr(i,1) == '/') pass += '0010000';
		while (pass.substr(pass.length-1,1)=='0') pass = pass.substr(0,pass.length-1);
	
		savedata[12] = pass.split('00');
	
		for (i=0; i<savedata[12].length; i++) for (j=0; j<=10; j++) if (savedata[12][i]==enchf[j]) {
			savedata[12][i] = j;
			j+=10;
		}
	
		// Checks to see if the length within the cookie matches the legnth of skills allowed.
		if (savedata[12].length!=Math.max(jobsk[savedata[0]][0]*2+jobsk[savedata[0]][1], 1)) {
			pswderr('Skill '+savedata[12].length+' - '+savedata[0]+' - '+jobsk[savedata[0]][0]+' - '+jobsk[savedata[0]][1]+' - '+Math.max(jobsk[savedata[0]][0]*2+jobsk[savedata[0]][1], 1));
		}
	}
	else pswderr('Password - [Please get rid of any #s in the URL, if that does not work, then there is a programmic error...]');
	
	// Rest to Equipment (savedata[13])
	if (n.length>1) {
		if (n[1].length>44) pswderr('Addition [Equipment] - [If this is data saved before (08-30-05), you must redo your equipment]');
		savedata[13] = n[1];
	}
}

// Decypher Equipment - Gonna have to keep track of this, for inputting more items...
function deceq(m){
	error = 0;
	//Set up data
	savedata = new Array();
	savedata[0] = new Array();
	savedata[1] = new Array();
	savedata[2] = new Array();
	for (i=0; i<=9; i++) savedata[2][i] = new Array();

	// Split data according to v1/v2
	m = m.split('$');
	tmp2 = m[0];
	
	// Encode Data into binary values - fill out 0s
	for (i=1; i<m.length; i++) {
		for (j=0; j<encode.indexOf(m[i].substr(0,1)); j++) tmp2 += '0';
		if (m[i].length>1) tmp2 += m[i].substr(1,m[i].length-1);
	}
	
	if(dbw) DebugText.innerHTML += '<br>'+tmp2+' - '+tmp2.length;
	
	if (tmp2.length == 44) {
		pass = '';
		for (i=0; i<44; i++) pass += fillzero(encode.indexOf(tmp2.substr(i,1)).toString(2),6);
		
		if(dbw) DebugText.innerHTML += '<br><br>Length: '+pass.length+'<br>' + pass.substr(0,pass.length/2) + '<br>' + pass.substr(pass.length/2,pass.length);
		
		// Decypher according to equipment slot - *Important*
		for (i=0; i<=10; i++) {
			switch(i) {
			case 0:	// Upper Head Gear
				tmp2 = to10(pass.substr(0,8));	// Postitions for these values are unique
				if(dbw) DebugText.innerHTML += '<br><br>' + pass.substr(0,8) + '-';
				if (tmp2) {
					if (tmp2<100) savedata[0][i] = 2200+tmp2; // This is where it splits
					else savedata[0][i] = 4900+tmp2;	  // Can probably change this whenever, or add to it
				}						  // Use this as an example, if items go over, just do this
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(8,4));
				if(dbw) DebugText.innerHTML += pass.substr(8,4) + '-';
				savedata[1][i] = tmp2;
	
				tmp2 = to10(pass.substr(12,9));
				if(dbw) DebugText.innerHTML += pass.substr(12,9) + '-';
				if (tmp2) savedata[2][i][0] = 4000+tmp2;
				else savedata[2][i][0] = 10;
				break;
			case 1: // Middle Head Gear
				tmp2 = to10(pass.substr(21,8));
				if(dbw) DebugText.innerHTML += pass.substr(21,8) + '-';
				if (tmp2) {
					if (tmp2<100) savedata[0][i] = 2200+tmp2;
					else savedata[0][i] = 4900+tmp2;
				}
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(29,9));
				if(dbw) DebugText.innerHTML += pass.substr(29,8) + '-';
				if (tmp2) savedata[2][i][0] = 4000+tmp2;
				else savedata[2][i][0] = 10;
				break;
			case 2: // Lower Head Gear
				tmp2 = to10(pass.substr(38,8));
				if(dbw) DebugText.innerHTML += pass.substr(38,8) + '-';
				if (tmp2) {
					if (tmp2<100) savedata[0][i] = 2200+tmp2;
					else savedata[0][i] = 4900+tmp2;
				}
				else savedata[0][i] = i;
				break;
			case 3: // Body Gear
				tmp2 = to10(pass.substr(46,7));
				if(dbw) DebugText.innerHTML += pass.substr(46,7) + '-';
				if (tmp2) savedata[0][i] = 2300+tmp2;
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(53,4));
				if(dbw) DebugText.innerHTML += pass.substr(53,4) + '-';
				savedata[1][i] = tmp2;
	
				tmp2 = to10(pass.substr(57,9));
				if(dbw) DebugText.innerHTML += pass.substr(57,9) + '-';
				if (tmp2) savedata[2][i][0] = 4000+tmp2;
				else savedata[2][i][0] = 10;
				break;
			case 4: // Left hand Gear
				tmp2 = to10(pass.substr(66,12));
				if(dbw) DebugText.innerHTML += 'Gear ['+pass.substr(66,12) + '] ';
				if (tmp2) savedata[0][i] = tmp2;
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(78,4));
				if(dbw) DebugText.innerHTML += pass.substr(78,4) + '-';
				savedata[1][i] = tmp2;
	
				for (j=0; j<=3; j++) {
					tmp2 = to10(pass.substr(82+11*j,11));
					if(dbw) DebugText.innerHTML += pass.substr(82+11*j,11) + '-';
					if (tmp2) {
						if (tmp2>1000) savedata[2][i][j] = 3000+tmp2;
						else savedata[2][i][j] = tmp2;
					}
					else savedata[2][i][j] = 10;
				}
				break;
			case 5: // Right Hand Gear
				tmp2 = to10(pass.substr(126,12));
				if(dbw) DebugText.innerHTML += '<br>Gear ['+ to10(pass.substr(126,12)) + '] ';
				if (tmp2) savedata[0][i] = tmp2;
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(138,4));
				if(dbw) DebugText.innerHTML += pass.substr(138,4) + '-';
				savedata[1][i] = tmp2;
	
				for (j=0; j<=3; j++) {
					tmp2 = to10(pass.substr(142+11*j,11));
					if(dbw) DebugText.innerHTML += pass.substr(142+11*j,11) + '-';
					if (tmp2) {
						if (tmp2>1000) savedata[2][i][j] = 3000+tmp2;
						else savedata[2][i][j] = tmp2;
					}
					else savedata[2][i][j] = 10;
				}
				break;
			case 6: // Garment
				tmp2 = to10(pass.substr(186,6));
				if(dbw) DebugText.innerHTML += pass.substr(186,6) + '-';
				if (tmp2) savedata[0][i] = 2500+tmp2;
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(192,4));
				if(dbw) DebugText.innerHTML += pass.substr(192,4) + '-';
				savedata[1][i] = tmp2;
	
				tmp2 = to10(pass.substr(196,9));
				if(dbw) DebugText.innerHTML += pass.substr(196,9) + '-';
				if (tmp2) savedata[2][i][0] = 4000+tmp2;
				else savedata[2][i][0] = 10;
				break;
			case 7:	// Shoes
				tmp2 = to10(pass.substr(205,6));
				if(dbw) DebugText.innerHTML += pass.substr(205,6) + '-';
				if (tmp2) savedata[0][i] = 2400+tmp2;
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(211,4));
				if(dbw) DebugText.innerHTML += pass.substr(211,4) + '-';
				savedata[1][i] = tmp2;
	
				tmp2 = to10(pass.substr(215,9));
				if(dbw) DebugText.innerHTML += pass.substr(215,9) + '-';
				if (tmp2) savedata[2][i][0] = 4000+tmp2;
				else savedata[2][i][0] = 10;
				break;
			case 8: // Accessory 1
				tmp2 = to10(pass.substr(224,7));
				if(dbw) DebugText.innerHTML += pass.substr(224,7) + '-';
				pass = pass.substr()
				if (tmp2) savedata[0][i] = 2600+tmp2;
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(231,9));
				if(dbw) DebugText.innerHTML += pass.substr(231,8) + '-';
				if (tmp2) savedata[2][i][0] = 4000+tmp2;
				else savedata[2][i][0] = 10;
				break;
			case 9: // Accessory 2
				tmp2 = to10(pass.substr(240,7));
				if(dbw) DebugText.innerHTML += pass.substr(240,7) + '-';
				pass = pass.substr()
				if (tmp2) savedata[0][i] = 2600+tmp2;
				else savedata[0][i] = i;
	
				tmp2 = to10(pass.substr(247,9));
				if(dbw) DebugText.innerHTML += pass.substr(247,8) + '-';
				if (tmp2) savedata[2][i][0] = 4000+tmp2;
				else savedata[2][i][0] = 10;
				break;
			case 10: // Arrows - Fix for Gunslingers
				tmp2 = to10(pass.substr(256,8));
				if(dbw) if(dbw) DebugText.innerHTML += '<font color="red">'+pass.substr(256,8)+'</font>';
				pass = pass.substr();
			
				if (tmp2 <= 50) savedata[0][i] = 1750+tmp2;
				else if (tmp2 <= 100) savedata[0][i] = 2950+tmp2;
				else if (tmp2 <= 150) savedata[0][i] = 3000+tmp2;
				else if (tmp2 <= 200) savedata[0][i] = 3650+tmp2;
				else if (tmp2 <= 250) savedata[0][i] = 3700+tmp2;
				else savedata[0][i] = 1750;
			}
		}

	}
	else pswderr('Equiment - You might need to redo your equipment]');
}

// V2 Character Loading - Edit this to include new classes/skill structures
function loadchrpswd(n){
	supportreset();
	decchr(n);

	if (!error) {
		streset();
		job = savedata[0];
		sex = savedata[1];
		face = savedata[2];
		hair = savedata[3];
		blv = savedata[4];
		jlv = savedata[5];
		AdvOn = savedata[14];
		bardanreset();
		for (i=0; i<6; i++) bstatus[i] = savedata[6+i];
	
		if (savedata[12].length==Math.max(jobsk[job][0]*2+jobsk[job][1], 1)) {
			
			for (i=1; i<=jobsk[job][0]; i++) if (savedata[12][i-1]) skilllv[(job-1)%13*40+i] = savedata[12][i-1];
			if (AdvOn && job > 39) {
				for (i=1; i<=jobsk[job-26][1]; i++) if (savedata[12][i+jobsk[job-26][0]-1]) skilllv[(job-27)*40+i] = savedata[12][i+jobsk[job-26][0]-1];
				for (i=1; i<=(jobsk[job][1]-jobsk[job-26][1]); i++) if (savedata[12][i+jobsk[job][0]+jobsk[job-26][1]-1]) skilllv[(job-1)*40+i] = savedata[12][i+jobsk[job][0]+jobsk[job-26][1]-1];
			}
			else for (i=1; i<=jobsk[job][1]; i++) if (savedata[12][i+jobsk[job][0]-1]) skilllv[(job-1)*40+i] = savedata[12][i+jobsk[job][0]-1];
			for (i=1; i<=jobsk[job][0]; i++) if (savedata[12][i+jobsk[job][0]+jobsk[job][1]-1]) skill1st[(job-1)%13*40+i] = savedata[12][i+jobsk[job][0]+jobsk[job][1]-1];
		
			if (job==0) skilllv[0] = savedata[12][0];
			else skilllv[0] = 9;
		}
		else pswderr('Skill [loadchrpswd]');
	
		skoncheck();
	
		singleaslisting();
		skview();
		if (AdvOn) sstp = sstpAdv;
		blvcalc(1);
	
		if (job == 0) nullskill = jlv - skilllv[0]-1;
		else if (job == 66) {
			tmp = 1;
			for (i=(job-1)*40+1; i<=job*40+40; i++) tmp += skilllv[i];
			if (jlv<tmp) jlv=tmp;
			nullskill = jlv - tmp;
		}
		else {
			tmp = 1;
			if (AdvOn && job > 39) {
				for (i=(job-27)*40+1; i<=(job-26)*40; i++) tmp += skilllv[i];
				for (i=(job-1)*40+1; i<=job*40; i++) tmp += skilllv[i];
			}
			else for (i=(job-1)*40+1; i<=job*40; i++) tmp += skilllv[i];
			if (job>13) for (i=(job-1)%13*40+1; i<=((job-1)%13+1)*40; i++) tmp += skilllv[i] - skill1st[i];
			if (jlv<tmp) jlv=tmp;
			nullskill = jlv - tmp;
		}
		if (nullskill) autojlv = 0;
		else autojlv = 1;
	
		ExtraSkillPoint.innerHTML = nullskill;
		AutoBaseLv.innerHTML = onoff[autoblv];
		AutoJobLv.innerHTML = supportonoff[autojlv];
	
		if (savedata[13]) loadeqpswd(savedata[13]);
		else loadeqpswd('$C');
		start(1);
	}
}
function loadeqpswd(n){
	deceq(n);
	eqreset();

	if (!error) {
		z=0;
		if (job > 20 && job < 34) z=6;
		else if (job > 39 && job < 46) z=26;
		else if (job > 52 && job < 59) z=32;
		else if (job == 66) z=66;
		for (i=0; i<=9; i++) if (savedata[0][i] && itemeq[savedata[0][i]][job-z] && blv>=itemdata[savedata[0][i]][6]) {eq[i] = savedata[0][i]; itemwear[savedata[0][i]][0] += 1; }
		else eq[i] = i;
		if (savedata[0][10]) { eq[10] = savedata[0][10]; itemwear[savedata[0][10]][0] += 1; }
		else if (job == 8) eq[10] = 3001;
		else if (job == 9) eq[10] = 3801;
		else if (job == 19) eq[10] = 3106;
		else eq[10] = 1750;

		for (i=0; i<=7; i++) if (savedata[1][i] && itemeq[savedata[0][i]][job-z] && blv>=itemdata[savedata[0][i]][6]) plus[i] = savedata[1][i];
		else plus[i] = 0;
		for (i=0; i<=9; i++) {
			if (savedata[2][i][0] && itemeq[savedata[0][i]][job-z] && blv>=itemdata[savedata[0][i]][6]) { slot[i][0] = savedata[2][i][0]; itemwear[savedata[2][i][0]][0] += 1; }
			else slot[i][0] = 10;
			if (i==4 || i==5) for (j=1; j<=3; j++) if (savedata[2][i][j] && itemeq[savedata[0][i]][job-z] && blv>=itemdata[savedata[0][i]][6]) { slot[i][j] = savedata[2][i][j]; itemwear[savedata[2][i][j]][0] += 1; }
			else slot[i][j] = 10;
		}

		equip();
		showslot();
		showplus();
	}
	
	readbonus(0);
	statuscalc(0);

	alllayerhide();
}
// Reset Character
function resetpswd(){
	tmp = '*Data Reset*<br>You reset character completely (Novice Lv.1).<br><font color="#CD5C5C">Warning - Will Overwrite Data.</font><br>.<a href="#" onClick="loadchrpswd(\'00w0820wg8421-\');return false">Reset</a><br>.<a href="#" onClick="pswdshow();return false">Cancel</a>';
	CookieInfo.innerHTML = tmp;
}

// Fill in zeros inbetween 1s for binary decryption
function fillzero(n,m){
	l = n.length;	//
	if (l%m) for (k=0; k<m-l; k++) n = '0' + n;	//Fills in the zeros needed to make each side equal
	return n;
}

// Translates Binary code to integers
function to10(x){
	z = 0;
	for (y=0; y<x.length; y++) z += x.substr(y,1) * Math.pow(2,x.length-y-1);
	return z;
}
function pswderr(n){
	alllayerhide();
	alert('Invalid Data - '+n);
	error++;
}

function pswdshow(){
	MM_showHideLayers('CookieLayer','','show');
	tmp = '<table width="100%"><tr><td class="gray" colspan="2">*Character Data<a href="#" onClick="clipboardData.setData(\'Text\', \''+encchr()+'\'); return false">Copy</a></td></tr><tr><td class="data" colspan="2">' + encchr() + '</td></tr><tr><td class="gray" colspan="2">*Equipment Data<a href="#" onClick="clipboardData.setData(\'Text\', \''+enceq()+'\'); return false">Copy</a></td></tr><tr><td class="data" colspan="2">' + enceq() + '</td></tr><tr><td><a href="#" onClick="clipboardData.setData(\'Text\', \'' + encchr() + '@' + enceq() + '\'); return false">Copy Current Character</a></td><td><a href="#" onClick="ckallcopy(); return false">Data Copy Everything (V2)</a></td></tr></table><br>';
	tmp += '*Input Character Data <a href="#" onClick="document.frm.chrpswd.value=\'\';return false">Clear</a> <a href="#" onClick="document.frm.chrpswd.value=clipboardData.getData(\'Text\');return false">Paste</a><br><input type="text" size="45" name="chrpswd" value="' + encchr() + '"><br>*Input Equip Data <a href="#" onClick="document.frm.eqpswd.value=\'\';return false">Clear</a> <a href="#" onClick="document.frm.eqpswd.value=clipboardData.getData(\'Text\');return false">Paste</a><br><input type="text" size="45" name="eqpswd" value="' + enceq() + '">';
	tmp += '<table width="100%"><tr><td><a href="#" onClick="loadchrpswd(document.frm.chrpswd.value);return false">Load Character</a></td><td><a href="#" onClick="loadeqpswd(document.frm.eqpswd.value);return false">Load Equip</a></td><td><a href="#" onClick="loadchrpswd(document.frm.chrpswd.value+\'@\'+document.frm.eqpswd.value);return false">Load All</a></td><td><a href="#" onClick="resetpswd();return false">New Start</a></td></tr></table>';

	CookieInfo.innerHTML = tmp;
}

function ckallcopy(){
	tmp = '';
	for (i=0; i<10; i++) {
		cookieid = 'msim' + i;
		clng = document.cookie.length;
		cdata = document.cookie.split('; ');
		cstr = '';
		j = 0;
		while (cdata[j]){
			if (cdata[j].substr(0,6) == cookieid + '='){
				cstr = cdata[j].substr(6,cdata[j].length);
				break;
			}
			j++;
		}

		cdata = cstr.split('@');
		if (cdata[0] && !cstr.match(/%00/)) {
			tmp += '-=-=Data Retention' + (i+1) + 'Turn=-=-=-=-\15\n *Collective Data* \15\n ' + cdata[0] + '@' + cdata[1] + '\15\n *Character Data* \15\n ' + cdata[0];
			for (k=1; k<5; k++) if (cdata[k]) tmp += '\15\n *Equip Data' + k + ' Data*\15\n ' +  cdata[k];
			tmp += '\15\n-=-=-=-=-=-=-=-=-=-=-=-=-\15\n\15\n';
		}
	}
	clipboardData.setData('Text', tmp);
}
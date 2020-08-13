/*Index**********

* Item Display Functions
[Insert Functions Here]

* Equipment Functions
eqlisting(l, n, m)	:Display list of possible equipment
wear(l, n)		:Equipment modification processing

* Slot Functions
showslot()		:Equipment slot indication
slotlisting(l, m)	:Posssible insertion of card & refining material display
putslot(l,m,n,o)	:Slot modification processing

* Refining functions
showplus()		:Possibility of refining display
pluscalc(m, n, c)	:Refining change processing

* Display Current Equipement
equip()			:Equipment Name & Image Display

* Hair function
facelisting()		:Display Hair Styles
facechange(n)		:Hair Style Change proccessing
haircolorlisting()	:Display Hair Colors
haircolorchange(n)	:Hair Color Change proccessing

* Sex Functions
sexlisting()		:Display Male/Female
sexchange(n)		:Sex Change processing

* Job Functions
joblisting(n)		:Display Possible Job Listing
jobchange(n, m)		:Job Change processing

* Skill Functions
skview()		:Display Possible Skills
skviewsub(k)		:Display skills details
skoncheck()		:Learnable skill processing
skbarallview()		:Display all lvl skill bar [all blank?]
skbarview(m)		:Skill tree (opening) processing [add]
skbarerase(m)		:Skill tree (closing) processing [erase]
skimg(l,m,n)		:Display Skill Lv bar
skcalc(l,m,n)		:Skill Lv change processing
skviewdesc(..)		:On Mouseover Descriptions

* Recovery item function
hpilisting(n)		:Display Recovery items
hpichange(n)		:Recovery item change processing


*****************/

// * Misc Function

function onPress(e) {
	if(browserspc) keypressed = e.which;
	else if(!browserspc) keypressed = window.event.keyCode;
	keypressed = 96;
}
function unPress() {keypressed = 0;}

// * Item Description Functions
function ItemInfo(j,n,m) {
	tooltip = '';
	htmtip = '';
	bntmp = 0;
	bstmp = 0;
	if (m) {
		bntmp = combodata[j][n];
		bstmp = combodata[j][n+1];
	} else {
		bntmp = itemdata[j][7+n];
		bstmp = itemdata[j][15+n];
	}
	if (bntmp != 0) {

		if (!tmp3) {
			tooltip += '\n';
			if (!m) htmtip += '&#8226; ';
		}
		else if(tmp3 && !tmp4) {
			tooltip += ', ';
			htmtip += ', ';
		}
		if (tmp4) tmp4 = false;
		if ((bntmp >= 325 && bntmp <= 334) && tmp3) {
			tooltip += ')\n';
			htmtip += ')<br>';
		}
		if (bntmp >= 325 && bntmp <= 334) {
			tmp3 = true;
			tmp4 = true;
		}

		switch(bntmp) {
			case 0:
				break;
			case 3:
			case 4:
			case 41:
				if (bstmp < 10) {tooltip += propname[bstmp]; htmtip += propname[bstmp];}
				else { tooltip += 'Random Attribute'; htmtip += 'Random Attribute';}
				break;
			case 9:
			case 10:
			case 20:
			case 24:
			case 25:
			case 36:
			case 50:
			case 252:
			case 253:
			case 301:
			case 303:
			case 304:
				tooltip += bonusname[bntmp] + ' ' + bstmp + '%';
				htmtip += bonusname[bntmp] + ' ' + bstmp + '%';
				break;
			case 23:
			case 211:
			case 215:
			case 251:
			case 254:
			case 302:
			case 305:
			case 306:
			case 307:
			case 308:
			case 309:
			case 310:
			case 311:
			case 315:
			case 316:
			case 317:
			case 338:
			case 339:
			case 340:
			case 341:
			case 342:
			case 344:
			case 345:
			case 346:
				tooltip += bonusname[bntmp];
				htmtip += bonusname[bntmp];
				break;
			case 255:
				tooltip += propname[bstmp] + ' ' + bonusname[bntmp];
				htmtip += propname[bstmp] + ' ' + bonusname[bntmp];
				break;
			case 322:
			case 323:
				tooltip += bonusname[bntmp] + ' ' + skilldata[bstmp%10000][0] + ' (Lv ' +Math.max((bstmp-bstmp%10000)/10000, skilllv[bstmp%10000])+')';
				htmtip += bonusname[bntmp] + ' <font color="#3CB371">' + skilldata[bstmp%10000][0] + '</font> (Lv ' +Math.max((bstmp-bstmp%10000)/10000, skilllv[bstmp%10000])+')';
				if (j == 4221) {tooltip += ' [On Monster]'; htmtip += '<b>[On Monster]</b>' }
				break;
			case 324:
				tooltip += bonusname[bntmp] + ' ' + skilldata[bstmp%10000][0] + ' (' +((bstmp-bstmp%10000)/10000)+'%)';
				htmtip += bonusname[bntmp] + ' <font color="#3CB371">' + skilldata[bstmp%10000][0] + '</font> (' +((bstmp-bstmp%10000)/10000)+'%)';
				break;
			case 326:
				tooltip += bonusname[bntmp] + ' ' + jobname[sexname[sex]][bstmp];
				htmtip += bonusname[bntmp] + ' ' + jobname[sexname[sex]][bstmp];
				break;
			case 312:
			case 318:
			case 320:
				tooltip += bonusname[bntmp] + ' ' + spcmon[Math.abs(bstmp)%1000] + ' ';
				htmtip += bonusname[bntmp] + ' ' + spcmon[Math.abs(bstmp)%1000] + ' ';
				if (bntmp == 320) { tooltip  += '+'; htmtip  += '+';}
				tooltip += (bstmp-bstmp%1000)/1000;
				htmtip += (bstmp-bstmp%1000)/1000;
				if (bntmp == 318 || bntmp == 312) { tooltip  += '%'; htmtip  += '%';}
				break;
			case 319:
			case 321:
			case 325:
				tooltip += bonusname[bntmp] + ' ' + classname[Math.abs(bstmp%100)];
				htmtip += bonusname[bntmp] + ' ' + classname[Math.abs(bstmp%100)];
				if (Math.abs(bstmp%100) != 3) { tooltip += ' Family '; htmtip += ' Family '; }
				else {tooltip += ' Monsters '; htmtip += ' Monsters ';}
				if (bntmp == 321) { tooltip += '+'; htmtip += '+';}
				tooltip += (bstmp-bstmp%100)/100;
				htmtip += (bstmp-bstmp%100)/100;
				if (bntmp == 319 || bntmp == 325) { tooltip += '%'; htmtip += '%';}
				break;
			case 327:
				tooltip += bonusname[bntmp] + ' ' + spcmon[bstmp];
				htmtip += bonusname[bntmp] + ' ' + spcmon[bstmp];
				break;
			case 328:
				tooltip += bonusname[bntmp] + ' ' + classname[bstmp] + ' Family';
				htmtip += bonusname[bntmp] + ' ' + classname[bstmp] + ' Family';
				break;
			case 329:
				tooltip += bonusname[bntmp] + ' ' + propname[10+bstmp];
				htmtip += bonusname[bntmp] + ' ' + propname[10+bstmp];
				break;
			case 330:
			case 331:
				tooltip += 'If ' + equiplabel[bstmp%10] + ' ' + bonusname[bntmp] + ' ' + ((bstmp-bstmp%10)/10);
				htmtip += 'If ' + equiplabel[bstmp%10] + ' ' + bonusname[bntmp] + ' ' + ((bstmp-bstmp%10)/10);
				break;
			case 332:
			case 333:
				tooltip += 'If ' + mname[bstmp%10] + ' ' + bonusname[bntmp] + ' ' + ((bstmp-bstmp%10)/10);
				htmtip += 'If ' + mname[bstmp%10] + ' ' + bonusname[bntmp] + ' ' + ((bstmp-bstmp%10)/10);
				break;
			case 343:
				if (j == 2358) {
					tooltip += 'Class specific bonus to Mage, Archer, and Acolyte (50% Mute Resistance)\nClass specific bonus to Swordman, Merchant, and Thief (50% Stun Resistance)';
					htmtip += 'Class specific bonus to Mage, Archer, and Acolyte (50% Mute Resistance)<br>&#8226; Class specific bonus to Swordman, Merchant, and Thief (50% Stun Resistance)';
				}
				else if (j == 2520) {
					tooltip += 'Perfect Dodge [Upgrade Lv]*2\nReflect Damage +[Upgrade Lv]*2\nClass specific bonus to Mage, Archer, and Acolyte (Perfect Dodge +5)\nClass specific bonus to Swordman, Merchant, and Thief (5% Reflect Damage)';
					htmtip += 'Perfect Dodge [Upgrade Lv]*2<br>&#8226; Reflect Damage +[Upgrade Lv]*2<br>&#8226; Class specific bonus to Mage, Archer, and Acolyte (Perfect Dodge +5)<br>&#8226; Class specific bonus to Swordman, Merchant, and Thief (5% Reflect Damage)';
				}
				else if (j == 2420) {
					tooltip += 'Class specific bonus to Mage, Archer, and Acolyte (Max HP +[BaseLv]*5)\nClass specific bonus to Swordman, Merchant, and Thief (Max SP +[JobLv]*2)';
					htmtip += 'Class specific bonus to Mage, Archer, and Acolyte (Max HP +[BaseLv]*5)<br>&#8226; Class specific bonus to Swordman, Merchant, and Thief (Max SP +[JobLv]*2)';
				}
				break;
			default:
				if (bntmp>50 && bntmp != 334 && bntmp != 335 && (bntmp < 76 || bntmp > 100)) { tooltip += bonusname[bntmp] + ' ' + bstmp + '%'; htmtip += bonusname[bntmp] + ' ' + bstmp + '%';}
				else if (bstmp > 0) { tooltip += bonusname[bntmp] + ' +' + bstmp; htmtip += bonusname[bntmp] + ' +' + bstmp;}
				else if (bstmp == 0) { tooltip += bonusname[bntmp] + ' ' + bstmp; htmtip += bonusname[bntmp] + ' ' + bstmp;}
				else { tooltip += bonusname[bntmp] + ' -' + Math.abs(bstmp); htmtip += bonusname[bntmp] + ' -' + Math.abs(bstmp);}
				break;
		}

		if (tmp3 && tmp4) {
			tooltip += ' (';
			htmtip += '( ';
		}
	}
	if ((n == 7 && !m) && tmp3) {
		tmp3 = false;
		tmp4 = false;
		tooltip += ')';
		htmtip += ')';
	}
	tooltip = '';
}

function ComboCheck(j, q) {
	combotooltip = '';
	combohtmtip = '';
	for (x = 1; x <= combosize; x++) {
		z = 0;
		v = 0;
		b = 2;
		for (y = 1; y <= combodata[x][0]*2; y += 2) {
			if (j == combodata[x][y]) {
				combodesc[q][0] = x;
				combotooltip += '\nIf you wear [';
				combohtmtip += 'If you wear [';
				for (i = 1; i <= combodata[x][0]*2; i += 2) {
					if (i != 1) { combotooltip += ', '; combohtmtip += ', '; }
					combotooltip += itemdata[combodata[x][i]][0];
					combohtmtip += itemdata[combodata[x][i]][0];
					if (i < y) z += combodata[x][i+1];
					if (i > y) v += combodata[x][i+1];
				}

				if (combodata[x][y+1] > 0) {
					combotooltip += '] bonuses change to:';
					combohtmtip += '] bonus change to:';
					combodesc[q][1] = combohtmtip;
					combodesc[q][2] = 0;
					combohtmtip = '';
					for (i = (combodata[x][0]*2)+(z*2)+2; i <= ((combodata[x][combodata[x][0]*2+1]-v)*2)+(combodata[x][0]*2); i += 2) {
						if (!tmp3) { b++; combodesc[q][b] = '';}
						ItemInfo(x, i, 1);
						combotooltip += tooltip;
						combodesc[q][b] += htmtip;
					}
					if (tmp3) {
						tmp3 = false;
						tmp4 = false;
						combotooltip += ')';
						combodesc[q][b] += ')';
					}
				}
				else{
					combotooltip += '] bonus gain of:';
					combohtmtip += '] bonus gain of:';
					combodesc[q][1] = combohtmtip;
					combodesc[q][2] = 1;
					combohtmtip = '';
					for (i = (combodata[x][0]*2)+2; i <= (combodata[x][combodata[x][0]*2+1]*2)+(combodata[x][0]*2); i += 2) {
						if (!tmp3) { b++; combodesc[q][b] = '';}
						ItemInfo(x, i, 1);
						combotooltip += tooltip;
						combodesc[q][b] += htmtip;
					}
					if (tmp3) {
						tmp3 = false;
						tmp4 = false;
						combotooltip += ')';
						combodesc[q][b] += ')';
					}
				}
				y = combodata[x][0]*2;
			}
		}
	}

}

function ItemDescDisplay(j, k, l, m, n) {
	if(keypressed != 96) {
		if (j < 4001 || j > 4899) ItemDescImg.innerHTML = '<img src="img2/icon/'+j+'.gif">';
		else ItemDescImg.innerHTML = '<img src="img2/slot/'+j+'.gif">';
		ItemDescName.innerHTML = itemdesc[k][0];
		if (itdebug) ItemDescName.innerHTML += ' ['+j+']';
		ItemSlot.innerHTML = itemdata[j][3];
		ItemWeight.innerHTML = itemdata[j][2];
		ItemRq.innerHTML = itemdata[j][6];
		ItemLv.innerHTML = itemdata[j][5];
		ItemUp.innerHTML = yesno[itemdata[j][24]];
		ItemSex.innerHTML = eqpsex[itemdata[j][23]];
		ItemBonus.innerHTML = '';
		if ((j < 900 || j > 1000) && j != 0) ItemBonus.innerHTML += itemdesc[k][1];
		if ( j != 0) if(combodesc[k][0]) {
			x = combodesc[k][0];
			ComboReqTitle.innerHTML = 'Combo Requirement';
			ComboReqImg.innerHTML = '';
			ComboReqTxt.innerHTML = '';
			for (i = 1; i <= combodata[x][0]*2; i += 2) {
				if (combodata[x][i] < 4001 || combodata[x][i] > 4899) ComboReqImg.innerHTML += '<img src="img2/icon/'+combodata[x][i]+'.gif" onMouseOver="showPopupInfo(3,'+combodata[x][i]+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);">';
				else ComboReqImg.innerHTML += '<img src="img2/slot/'+combodata[x][i]+'.gif" onMouseOver="showPopupInfo(3,'+itemdata[combodata[x][i]][0]+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);">';
				if (i!=1) ComboReqTxt.innerHTML += ', ';
				ComboReqTxt.innerHTML += itemdata[combodata[x][i]][0];
			}
			ComboBonusTitle.innerHTML = 'Combo Bonus';
			ComboBonus.innerHTML = '';
			if (combodesc[k][2]) ComboBonusTitle.innerHTML += '';
			else ComboBonusTitle.innerHTML += ' [Changes Values]';
			for(i = 3; i <= combodesc[k].length-1; i++) {
				ComboBonus.innerHTML += '&#8226; '+combodesc[k][i];
				if (i != combodesc[k].length-1) ComboBonus.innerHTML += '<br>';
			}
		}
		else {
			ComboReqTitle.innerHTML = '';
			ComboReqImg.innerHTML = '';
			ComboReqTxt.innerHTML = '';
			ComboBonusTitle.innerHTML = '';
			ComboBonus.innerHTML = '';
		}
	}
}

// * Equipment Functions
function eqlisting(l, m) {
	if (m == 2 && keypressed==96) {
		if (l != 10) wear(l,l);
	}
	else if (m+browserspc == 1) {
		alllayerhide();
		MM_showHideLayers(layername[l],'','show');
		tmpdesc = ' ';

		if (job == 19 || job == 45) {
		eqp[12] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
		eqp[14] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
		eqp[16] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
		eqp[20] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
		}
		else {
		eqp[12] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
		eqp[14] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
		eqp[16] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
		eqp[20] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
		}

		tmp = new Array();
		tmp3 = false;
		tmp4 = false;
		p = 0;

		itemdesc = new Array();
		itemdesc[0] = new Array();

		if (l != 10) {
			itemdesc[0][0] = 'Remove Equip';
			tmp[0] = '<a href="#" onClick="wear(' + l + ',' + l + '); return false"><img src="img2/icon/off.gif" border="0" width="24" height="24" OnMouseOver="ItemDescDisplay(0,0,0,'+l+', 0); showPopupInfo(3,17);" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';
			k = 1;
		}
		else {
			tmp[0] = '';
			itemdesc[0][0] = '';
			k = 0;
		}
		for (j = 1101; j <= 5121; j++) {
			isforge = false;
			z=0;
			p=0;

			if (j == 4001) j = 5001;

			if (job > 20 && job < 34) z=6;
			else if (job > 39 && job < 46) z=26;
			else if (job > 52 && job < 59) z=32;
			else if (job == 66) z=66;
			if (itemdata[eq[4]][1] == 35 && j == 3801) j = 3900;
			if (itemdata[eq[4]][1] != 35 && j == 3901) j = 4000;
			snequip = 0;
			if ( job == 66 && eqp[itemdata[j][1]][l] == 1 && ((blv >= 90 && ((itemdata[j][1] >= 5 && itemdata[j][1] <= 10) || itemdata[j][1] == 47)) || (blv >= 95 && eqp[itemdata[j][1]][l] == 1 && itemdata[j][5] == 4 && snWeapList[itemdata[j][1]])))
			  snequip = 1;

			if ((itemeq[j][job-z] == 1 && eqp[itemdata[j][1]][l] == 1 && itemdata[j][23] != sex+1 && (itemeq[j][28] == AdvOn || itemeq[j][28] == 0)) || snequip) {
				itemdesc[k] = new Array();
				combodesc[k] = new Array();
				itemdesc[k][1]='';
				if (j >= 1101 && j <= 1900) { for (z = 0; z <= 51; z++) if (j == mpnum[z]) {isforge = true; break;} }

				tmp2 = itemdata[j][0] + '[' + itemdata[j][3] + '][id: '+j+']';
				if (isforge) itemdesc[k][0] = '<font color="#4682B4">' + tmp2 + '</font>';
				else if (snequip && itemeq[j][job-z] == 0) itemdesc[k][0] = tmp2 + '<br><font color="#4682B4">Super Novice Soul</font>';
				else itemdesc[k][0] = tmp2;
				for (m=0; m<8; m++) {
					if (itemdata[j][7+m]) {
						ItemInfo(j, m);
						itemdesc[k][1] += htmtip;
						if (!tmp3) itemdesc[k][1] += '<br>';
					}
					else if (!itemdata[j][7+m] && tmp3) {
						tmp3 = false;
						tmp4 = false;
						itemdesc[k][1] += ')';
					}
					else break;
				}
				ComboCheck(j,k);
				//tmp2 += combotooltip;

				if (blv >= itemdata[j][6]) {
					tmp[k] = '<a href="#" onClick="wear(' + l + ', ' + j + '); return false"><img src="img2/icon/' + j + '.gif" border="0" width="24" height="24" OnMouseOver="ItemDescDisplay('+j+','+k+',0,'+l+',0); showPopupInfo(1,'+k+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 2000);"></a>';
				}
				else {
					tmp[k] = '<img src="img2/icon/' + j + '.gif" border="0" width="24" height="24" style="filter: alpha(opacity=50); opacity:0.5;" OnMouseOver="ItemDescDisplay('+j+','+k+',0,'+l+',0); showPopupInfo(1,'+k+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 2000);">';

					if (isforge) itemdesc[k][0] = '<font color="#EE82EE">' + itemdata[j][0] + '[' + itemdata[j][3] + '][id: '+j+']</font>';
					else itemdesc[k][0] = '<font color="#BC8F8F">' + itemdata[j][0] + '[' + itemdata[j][3] + '][id: '+j+']</font>';

					tmp2 = itemdesc[k][1];
					itemdesc[k][1] = '<font color="#BC8F8F">(Lv ' + itemdata[j][6] + ' and Above)</font><br>'+tmp2;
				}
				if (k % 10 == 9) tmp[k] += '<br>';
				k++;
			}
		}

		i = 1;
		while (tmp.length>i) {
			for (j=0; j<tmp.length-i; j+=2*i) tmp[j] += tmp[j+i];
			i*=2;
		}

		document.getElementById(selectname[l]).innerHTML = tmp[0];
		tmp='';
	}
}

function wear(l, n) {
	if ((itemdata[eq[l]][1] == 24 || itemdata[eq[l]][1] == 27 || itemdata[eq[l]][1] == 28) && (itemdata[n][1] != 24 || itemdata[n][1] != 27 || itemdata[n][1] != 28)) {
		itemwear[eq[10]][0] = 0;
		itemwear[eq[10]][1] = 0;
		eq[10] = 1750;
		itemwear[1750][0] = 1;
	}
	if ((itemdata[eq[l]][1] == 32 || itemdata[eq[l]][1] == 33 || itemdata[eq[l]][1] == 34 || itemdata[eq[l]][1] == 36) && (itemdata[n][1] != 32 || itemdata[eq[l]][1] != 33 || itemdata[n][1] != 34 || itemdata[n][1] != 36)) {
		itemwear[eq[10]][0] = 0;
		itemwear[eq[10]][1] = 0;
		eq[10] = 3801;
		itemwear[3801][0] = 1;
	}
	if (itemdata[eq[l]][1] == 35 && itemdata[n][1] != 35) {
		itemwear[eq[10]][0] = 0;
		itemwear[eq[10]][1] = 0;
		eq[10] = 3901;
		itemwear[3901][0] = 1;
	}

	if (l != 10) for (i = 0; i <= 3; i++) {
		itemwear[slot[l][i]][0] = 0;
		itemwear[slot[l][i]][1] = 0;
		slot[l][i] = 10;
	}

	plus[l] = 0;
	if (itemdata[n][1] == 8 || itemdata[n][1] == 10 || itemdata[n][1] == 47) {
		plus[0] = 0;
		itemwear[slot[0][0]][0] = 0;
		itemwear[slot[0][0]][1] = 0;
		slot[0][0] = 10;
	}

	if (itemdata[eq[l]][1] == 8) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[1]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[1]][1] = 0;
		eq[0] = 0;
		eq[1] = 1;
		slot[0][0] = 10;
		slot[1][0] = 10;
		plus[0] = 0;
	}
	if (itemdata[eq[0]][1] == 8 && (itemdata[n][1] == 9 || itemdata[n][1] == 47)) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[1]][0] = 0;
		itemwear[slot[0][0]][0] = 0;
		itemwear[slot[1][0]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[slot[0][0]][1] = 0;
		itemwear[slot[1][0]][1] = 0;
		eq[0] = 0;
		eq[1] = 1;
		slot[0][0] = 10;
		slot[1][0] = 10;
		plus[0] = 0;
	}
	if (itemdata[eq[l]][1] == 9) {
		itemwear[eq[1]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[slot[1][0]][0] = 0;
		itemwear[slot[2][0]][0] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[slot[1][0]][1] = 0;
		itemwear[slot[2][0]][1] = 0;
		eq[1] = 1;
		eq[2] = 2;
		slot[1][0] = 10;
		slot[2][0] = 10;
	}
	if (itemdata[eq[2]][1] == 9 && (itemdata[n][1] == 8 || itemdata[n][1] == 47)) {
		itemwear[eq[1]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[slot[1][0]][0] = 0;
		itemwear[slot[2][0]][0] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[slot[1][0]][1] = 0;
		itemwear[slot[2][0]][1] = 0;
		eq[1] = 1;
		eq[2] = 2;
		slot[1][0] = 10;
		slot[2][0] = 10;
	}
	if (itemdata[eq[l]][1] == 47) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[slot[0][0]][0] = 0;
		itemwear[slot[2][0]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[slot[0][0]][1] = 0;
		itemwear[slot[2][0]][1] = 0;
		eq[0] = 0;
		eq[2] = 2;
		slot[0][0] = 10;
		slot[2][0] = 10;
	}
	if (slot[1][0] != 10 && itemdata[n][1] == 9) {
		itemwear[eq[1]][0] = 0;
		itemwear[slot[1][0]][0] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[slot[1][0]][1] = 0;
		eq[1] = 1;
		slot[1][0] = 10;
	}
	if (itemdata[eq[2]][1] == 47 && (itemdata[n][1] == 8 || itemdata[n][1] == 9)) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[slot[0][0]][0] = 0;
		itemwear[slot[2][0]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[slot[0][0]][1] = 0;
		itemwear[slot[2][0]][1] = 0;
		eq[0] = 0;
		eq[2] = 2;
		slot[0][0] = 10;
		slot[2][0] = 10;
	}
	if (itemdata[eq[l]][1] == 10) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[1]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[slot[0][0]][0] = 0;
		itemwear[slot[1][0]][0] = 0;
		itemwear[slot[2][0]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[slot[0][0]][1] = 0;
		itemwear[slot[1][0]][1] = 0;
		itemwear[slot[2][0]][1] = 0;
		eq[0] = 0;
		eq[1] = 1;
		eq[2] = 2;
		slot[0][0] = 10;
		slot[1][0] = 10;
		slot[2][0] = 10;
		plus[0] = 0;
	}
	if (itemdata[eq[l]][1] == 13 || itemdata[eq[l]][1] == 15 || itemdata[eq[l]][1] == 17 || itemdata[eq[l]][1] == 19 || itemdata[eq[l]][1] == 23 || itemdata[eq[l]][1] == 24 ||
			(itemdata[eq[l]][1] >= 31 && itemdata[eq[l]][1] <= 36)) {
		itemwear[eq[4]][0] = 0;
		itemwear[eq[5]][0] = 0;
		itemwear[slot[4][0]][0] = 0;
		itemwear[slot[4][1]][0] = 0;
		itemwear[slot[4][2]][0] = 0;
		itemwear[slot[4][3]][0] = 0;
		itemwear[slot[5][0]][0] = 0;
		itemwear[slot[5][1]][0] = 0;
		itemwear[slot[5][2]][0] = 0;
		itemwear[slot[5][3]][0] = 0;
		itemwear[eq[4]][1] = 0;
		itemwear[eq[5]][1] = 0;
		itemwear[slot[4][0]][1] = 0;
		itemwear[slot[4][1]][1] = 0;
		itemwear[slot[4][2]][1] = 0;
		itemwear[slot[4][3]][1] = 0;
		itemwear[slot[5][0]][1] = 0;
		itemwear[slot[5][1]][1] = 0;
		itemwear[slot[5][2]][1] = 0;
		itemwear[slot[5][3]][1] = 0;
		eq[4] = 4;
		eq[5] = 5;
		slot[4][0] = 10;
		slot[4][1] = 10;
		slot[4][2] = 10;
		slot[4][3] = 10;
		slot[5][0] = 10;
		slot[5][1] = 10;
		slot[5][2] = 10;
		slot[5][3] = 10;
		plus[4] = 0;
		plus[5] = 0;
	}
	if (itemdata[n][1] == 13 || itemdata[n][1] == 15 || itemdata[n][1] == 17 || itemdata[n][1] == 19 || itemdata[n][1] == 23 || itemdata[n][1] == 24 ||
			(itemdata[n][1] >= 31 && itemdata[n][1] <= 36)) {
		itemwear[eq[4]][0] = 0;
		itemwear[eq[5]][0] = 0;
		itemwear[slot[4][0]][0] = 0;
		itemwear[slot[4][1]][0] = 0;
		itemwear[slot[4][2]][0] = 0;
		itemwear[slot[4][3]][0] = 0;
		itemwear[slot[5][0]][0] = 0;
		itemwear[slot[5][1]][0] = 0;
		itemwear[slot[5][2]][0] = 0;
		itemwear[slot[5][3]][0] = 0;
		itemwear[eq[4]][1] = 0;
		itemwear[eq[5]][1] = 0;
		itemwear[slot[4][0]][1] = 0;
		itemwear[slot[4][1]][1] = 0;
		itemwear[slot[4][2]][1] = 0;
		itemwear[slot[4][3]][1] = 0;
		itemwear[slot[5][0]][1] = 0;
		itemwear[slot[5][1]][1] = 0;
		itemwear[slot[5][2]][1] = 0;
		itemwear[slot[5][3]][1] = 0;
		eq[4] = 4;
		eq[5] = 5;
		slot[4][0] = 10;
		slot[4][1] = 10;
		slot[4][2] = 10;
		slot[4][3] = 10;
		slot[5][0] = 10;
		slot[5][1] = 10;
		slot[5][2] = 10;
		slot[5][3] = 10;
		plus[4] = 0;
		plus[5] = 0;
	}

	if (itemdata[n][1] == 8) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[1]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[n][0] += 1;
		eq[0] = n;
		eq[1] = n;
	}
	else if (itemdata[n][1] == 9) {
		itemwear[eq[1]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[n][0] += 1;
		eq[1] = n;
		eq[2] = n;
	}
	else if (itemdata[n][1] == 47) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[n][0] += 1;
		eq[0] = n;
		eq[2] = n;
	}
	else if (itemdata[n][1] == 10) {
		itemwear[eq[0]][0] = 0;
		itemwear[eq[1]][0] = 0;
		itemwear[eq[2]][0] = 0;
		itemwear[eq[0]][1] = 0;
		itemwear[eq[1]][1] = 0;
		itemwear[eq[2]][1] = 0;
		itemwear[n][0] += 1;
		eq[0] = n;
		eq[1] = n;
		eq[2] = n;
	}
	else if (itemdata[n][1] == 13 || itemdata[n][1] == 15 || itemdata[n][1] == 17 || itemdata[n][1] == 19 || itemdata[n][1] == 23 || itemdata[n][1] == 24 || (itemdata[n][1] >= 31 && itemdata[n][1] <= 36)) {
		itemwear[eq[4]][0] = 0;
		itemwear[eq[5]][0] = 0;
		itemwear[eq[4]][1] = 0;
		itemwear[eq[5]][1] = 0;
		itemwear[n][0] += 1;
		eq[4] = n;
		eq[5] = n;
		if (itemdata[n][1] == 32 || itemdata[n][1] == 33 || itemdata[n][1] == 34 || itemdata[n][1] == 36) eq[10] = 3801;
		else if (itemdata[n][1] == 35) eq[10] = 3901;
	}
	else {
		if (itemdata[eq[l]][1] == 4) { if (itemwear[eq[l]][0] > 0) itemwear[eq[l]][0]--; }
		else {
			itemwear[eq[l]][0] = 0;
			itemwear[eq[l]][1] = 0;
		}
		itemwear[n][0] += 1;
		eq[l] = n;
	}

	showslot();
	showplus();
	equip();
	readbonus(0);
	statuscalc(0);
	eastablelisting();
	MM_showHideLayers(layername[l],'','hide');
}

// * Slot Functions
function showslot() {
	for (i = 0; i <= 9; i++) {
		sloticon = '';
		if ((i == 1 && itemdata[eq[1]][1] == 8) || (i == 5 && (itemdata[eq[i]][1] == 13 || itemdata[eq[i]][1] == 15 || itemdata[eq[i]][1] == 17 || itemdata[eq[i]][1] == 19 || itemdata[eq[i]][1] == 23 || itemdata[eq[i]][1] == 24 || (itemdata[eq[i]][1] >= 31 && itemdata[eq[i]][1] <= 36)))) {
			document.getElementById(ename[i] + 'Slot').innerHTML = '';
			i++;
		}
		slotc = itemdata[eq[i]][3];
		if (slotnum[itemdata[eq[i]][1]] == 41) {
			for (j = 0; j <= 51; j++) if (eq[i] == mpnum[j] && itemdata[eq[i]][3] == 0) slotc = 1;
			for (k = 0; k <= 2; k++) if (slot[i][k] >= 994 && slot[i][k] <= 1000) slotc = 3;
		}

		for (j = 1; j <= 4; j++) {
			if (slotc >= j) sloticon += '<a href="#" onClick="slotlisting(' + i + ',' + j + '); return false"><img src="img2/slot/' + slot[i][j - 1] + '.gif" border="0"></a>';
			document.getElementById(ename[i] + 'Slot').innerHTML = sloticon;
		}
	}
}
function slotlisting(l, m) {
	if(l == 2) return;
	alllayerhide();
	MM_showHideLayers((ename[l] + 'SlotLayer' + m),'','show');

	tmplist = '';
	q = 0;
	p = 0;
	tmp3 = false;
	tmp4 = false;
	itemdesc[0] = new Array();
	tmplist += '<a href="#" onClick="putslot(' + l + ',' + m + ',10); return false"><img src="img2/slot/off.gif" border="0" width="30" height="40" OnMouseOver="ItemDescDisplay('+j+','+q+',1,'+l+','+ m+'); showPopupInfo(3,17);" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';
	itemdesc[0][0] = 'Remove Equip';
	//Refine Items: First if, element. Second if, crumbs.
	if (slotnum[itemdata[eq[l]][1]] == 41) for (i = 0; i <= 51; i++) if (eq[l] == mpnum[i]) {
		if (m == 1) for (i = 994; i <= 997; i++){q++; tmplist += '<a href="#" onClick="putslot(' + l + ',' + m + ',' + i + ',0); return false"><img src="img2/slot/' + i + '.gif" border="0" width="30" height="40" OnMouseOver="ItemDescDisplay('+j+','+q+',1,'+l+','+ m+'); showPopupInfo(3,'+itemdata[i][0]+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';  itemdesc[q][0] = itemdata[i][0];}
		if (m <= 3){q++; tmplist += '<a href="#" onClick="putslot(' + l + ',' + m + ',1000,0); return false"><img src="img2/slot/1000.gif" border="0" width="30" height="40" OnMouseOver="ItemDescDisplay('+j+','+q+',1,'+l+','+ m+'); showPopupInfo(3,'+itemdata[1000][0]+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>'; itemdesc[q][0] = itemdata[1000][0];}
	}

	tmplist += '<br>';

	if ((slot[l][0] >= 4001 || slot[l][0] == 10) && (slot[l][1] >= 4001 || slot[l][1] == 10) && (slot[l][2] >= 4001 || slot[l][2] == 10) && itemdata[eq[l]][3] >= m) {
	k = 0;
	for (j = 4001; j <= 4332; j++) {
		if (slotnum[itemdata[eq[l]][1]] == itemdata[j][1]) {
			q++;
			itemdesc[q] = new Array();
			p = 0;
			tmp2 = itemdata[j][0] + '[id: '+j+']';
			itemdesc[q][0] = tmp2;
			itemdesc[q][1] = '';
			for (n=0; n<8; n++) {
				if (itemdata[j][7+n]) {
					ItemInfo(j,n);
					itemdesc[q][1] += htmtip;
					if (!tmp3) itemdesc[q][1] += '<br>';
				}
				else if (!itemdata[j][7+n] && tmp3) {
					tmp3 = false;
					tmp4 = false;
					itemdesc[q][1] += ')';
				}
			}

			combodesc[q] = new Array();
			ComboCheck(j, q);
		//	tmp2 += combotooltip;

			tmplist += '<a href="#" onClick="putslot(' + l + ',' + m + ',' + j + '); return false"><img src="img2/slot/' + j + '.gif" border="0" width="30" height="40" OnMouseOver="ItemDescDisplay('+j+','+q+',1,'+l+','+ m+'); showPopupInfo(0,'+q+','+1+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 2000);"></a>';
			if (k % 8 == 7) tmplist += '<br>';
			k++;
		}
	}}
	document.getElementById(ename[l] + 'SlotSelect' + m).innerHTML = tmplist;
	tmplist='';
}

function putslot(l,m,n) {
	if (n !=10) {
		itemwear[slot[l][m-1]][0] = 0;
		itemwear[slot[l][m-1]][1] = 0;
		itemwear[n][0] += 1;
	}
	else {
		if (itemwear[slot[l][m-1]][0] > 0) itemwear[slot[l][m-1]][0]--;
		else {
			itemwear[slot[l][m-1]][0] = 0;
			itemwear[slot[l][m-1]][1] = 0;
		}
	}

	if (n >= 994 && n <= 1000) {
		itemwear[slot[l][3]][0] = 0;
		itemwear[slot[l][3]][1] = 0;
		slot[l][3] = 10;
		for (i = 0; i <= 3; i++) if (slot[l][i] >= 4001) {
			itemwear[slot[l][i]][0] = 0;
			itemwear[slot[l][i]][1] = 0;
			slot[l][i] = 10;
		}
	}
	if (slot[l][m-1] == 4044) support[83] = 0;
	if (slot[l][m-1] == 4088) support[89] = 0;
	slot[l][m-1] = n;

	if (slotnum[itemdata[eq[l]][1]] == 41 && keypressed==96) for (i=m; i<=itemdata[eq[l]][3]-1; i++) {
		if (n == 10) { itemwear[slot[l][m-1]][0] = 0; itemwear[slot[l][m-1]][1] = 0; }
		else {
			if (itemwear[slot[l][i]][0] > 0) itemwear[slot[l][i]][0]--;
			else {
				itemwear[slot[l][i]][0] = 0;
				itemwear[slot[l][i]][1] = 0;
			}
			itemwear[n][0] += 1;
		}

		slot[l][i] = n;
	}
	showslot();
	equip();
	readbonus(0);
	statuscalc(0);
	eastablelisting();
	MM_showHideLayers((ename[l] + 'SlotLayer' + m),'','hide');
}


// * Refining functions
function showplus(){
	for (i = 0; i <= 7; i++) {
		if (i == 5 && (itemdata[eq[i]][1] == 13 || itemdata[eq[i]][1] == 15 || itemdata[eq[i]][1] == 17 || itemdata[eq[i]][1] == 19 || itemdata[eq[i]][1] == 23 || itemdata[eq[i]][1] == 24 || (itemdata[eq[i]][1] >= 31 && itemdata[eq[i]][1] <= 36))) {
			document.getElementById(ename[i] + 'Plus').innerHTML = '';
			i++;
		}
		if (i != 1 && i != 2) {
			if (itemdata[eq[i]][24] == 1) document.getElementById(ename[i] + 'Plus').innerHTML = '<a href="#" onClick="return false" onMouseOut="MM_swapImgRestore(); pluscalc(' + i + ', 2)" onMouseUp="MM_swapImgRestore(); pluscalc(' + i + ', 2)" onMouseDown="MM_swapImage(\'plus' + i + 'down\',\'\',\'img2/design_skin/arw_left_on.gif\',1); pluscalc(' + i + ', 0)"><img src="img2/design_skin/arw_left.gif" width="11" height="11" name="plus' + i + 'down" border="0"></a><a href="#" onClick="return false" onMouseUp="MM_swapImgRestore(); pluscalc(' + i + ', 2)" onMouseOut="MM_swapImgRestore(); pluscalc(' + i + ', 2)" onMouseDown="MM_swapImage(\'plus' + i + 'up\',\'\',\'img2/design_skin/arw_right_on.gif\',1); pluscalc(' + i + ', 1)"><img src="img2/design_skin/arw_right.gif" width="11" height="11" name="plus' + i + 'up" border="0"></a>';
			else document.getElementById(ename[i] + 'Plus').innerHTML = '';
		}
	}
}
function pluscalc(m, n){
	if (eq[m] >= 1101) {
	clearTimeout(i0);
	if (n == 1) {
		plus[m]++;
		if (keypressed==96) {
			if (itemdata[eq[m]][5]) {
				if (plus[m] < 8-itemdata[eq[m]][5]) plus[m] = 8-itemdata[eq[m]][5];
				else plus[m] = 10;
			}
			else {
				if (plus[m] < 4) plus[m] = 4;
				else plus[m] = 10;
			}
		}
		plus[m] = Math.min(plus[m],10);
	}
	else if (n == 0) {
		plus[m]--;
		if (keypressed==96) plus[m] -= 9;
		if (plus[m] < 0) plus[m] = 0;
	}
	else {
		t = 0;
		return;
	}
	equip();
	if (t == 0) i0 = setTimeout("pluscalc('" + m + "', " + n + ", " + c + ")", 100);
	else if (t >= 1 && t <= 10) i0 = setTimeout("pluscalc('" + m + "', " + n + ", " + c + ")", 10);
	t++;
	readbonus(0);
	statuscalc(0);
	return;
	}
}

// * Display Current Equipement
function equip() {
	HeadUIcon.innerHTML = '<img src="img2/icon/' + eq[0] + '.gif" width="24" height="24" border="0">';
	HeadUName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[0]][0].substr(0,10)+'...';
	HeadMIcon.innerHTML = '<img src="img2/icon/' + eq[1] + '.gif" width="24" height="24" border="0">';
	HeadMName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[1]][0].substr(0,10)+'...';
	HeadLIcon.innerHTML = '<img src="img2/icon/' + eq[2] + '.gif" width="24" height="24" border="0">';
	HeadLName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[2]][0].substr(0,10)+'...';
	ArmorIcon.innerHTML = '<img src="img2/icon/' + eq[3] + '.gif" width="24" height="24" border="0">';
	ArmorName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[3]][0].substr(0,10)+'...';
	RightHandIcon.innerHTML = '<img src="img2/icon/' + eq[4] + '.gif" width="24" height="24" border="0">';
	RightHandName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[4]][0].substr(0,10)+'...';
	LeftHandIcon.innerHTML = '<img src="img2/icon/' + eq[5] + '.gif" width="24" height="24" border="0">';
	LeftHandName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[5]][0].substr(0,10)+'...';
	RobeIcon.innerHTML = '<img src="img2/icon/' + eq[6] + '.gif" width="24" height="24" border="0">';
	RobeName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[6]][0].substr(0,10)+'...';
	ShoesIcon.innerHTML = '<img src="img2/icon/' + eq[7] + '.gif" width="24" height="24" border="0">';
	ShoesName.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[7]][0].substr(0,10)+'...';
	Accessory1Icon.innerHTML = '<img src="img2/icon/' + eq[8] + '.gif" width="24" height="24" border="0">';
	Accessory1Name.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[8]][0].substr(0,10)+'...';
	Accessory2Icon.innerHTML = '<img src="img2/icon/' + eq[9] + '.gif" width="24" height="24" border="0">';
	Accessory2Name.innerHTML = '&nbsp;&nbsp;' + itemdata[eq[9]][0].substr(0,10)+'...';

	if ((eq[0] == 2232 || eq[0] == 2233 || eq[0] == 2234) && sex == 0) HeadUGraphic.innerHTML = '<img src="img2/head'+sexname[sex]+'/0.gif" width="65" height="60" border="0">';
	else if (eq[0] == 2206) HeadUGraphic.innerHTML = '<img style="filter: alpha(opacity=75); opacity:0.5;" src="img2/head'+sexname[sex]+'/2206.gif" width="65" height="60" border="0">';
	else HeadUGraphic.innerHTML = '<img src="img2/head'+sexname[sex]+'/' + eq[0] + '.gif" width="65" height="60" border="0">';
	HeadMGraphic.innerHTML = '<img src="img2/head'+sexname[sex]+'/' + eq[1] + '.gif" width="65" height="60" border="0">';
	HeadLGraphic.innerHTML = '<img src="img2/head'+sexname[sex]+'/' + eq[2] + '.gif" width="65" height="60" border="0">';

	for (i = 0; i <= 9; i++) {
	if ((itemdata[eq[i]][1] == 8 && i == 1) || (itemdata[eq[i]][1] == 9 && i == 2) || (itemdata[eq[i]][1] == 10 && (i == 1 || i == 2)) || ((itemdata[eq[i]][1] == 13 || itemdata[eq[i]][1] == 15 || itemdata[eq[i]][1] == 17 || itemdata[eq[i]][1] == 19 || itemdata[eq[i]][1] == 23 || itemdata[eq[i]][1] == 24 || (itemdata[eq[i]][1] >= 31 && itemdata[eq[i]][1] <= 36)) && i == 5)) {
		document.getElementById(ename[i] + 'IconD').innerHTML = '<img style="filter: alpha(opacity=50); opacity:0.5;" src="img2/icon/' + eq[i] + '.gif" width="24" height="24" border="0">';
		document.getElementById(ename[i] + 'NameD').innerHTML = '<font color="#848284">' + itemdata[eq[i]][0] + '</font>';
	}
	else {
		document.getElementById(ename[i] + 'IconD').innerHTML = '<img src="img2/icon/' + eq[i] + '.gif" width="24" height="24" border="0">';
		if (slotnum[itemdata[eq[i]][1]] != 41) {
			temps1 = '';
			if (plus[i] != 0) temps1 += '+' + plus[i] + ' ';
			if (slot[i][0] >= 4001) {
				if (cardprepostfix[slot[i][0] - 4000][1] == 0) {document.getElementById(ename[i] + 'NameD').innerHTML = temps1 + cardprepostfix[slot[i][0] - 4000][0] + ' ' + itemdata[eq[i]][0];}
				else {document.getElementById(ename[i] + 'NameD').innerHTML = temps1 + itemdata[eq[i]][0] + ' ' + cardprepostfix[slot[i][0] - 4000][0];}
			}
			else {document.getElementById(ename[i] + 'NameD').innerHTML = temps1 + itemdata[eq[i]][0];}
		}
		else {
			tempcount = new Array(0, 0, 0, 0);
			temps1 = '';
			temps2 = '';
			temps3 = '';
			if (plus[i] != 0) temps1 += '+' + plus[i] + ' ';
			for (j = 0; j <= 3; j++) {
				if (slot[i][j] >= 4001) {
					tempi = 0;
					if (tempcount[j] == 0) {
						for (k = j + 1; k <= 3; k++) if (slot[i][j] == slot[i][k]) {
							tempcount[k]++;
							tempi++;
						}
						if (cardprepostfix[slot[i][j] - 4000][1] == 0) temps1 += cardsname[tempi] + ' ' + cardprepostfix[slot[i][j] - 4000][0] + ' ';
						else temps3 += ' ' + cardsname[tempi] + ' ' + cardprepostfix[slot[i][j] - 4000][0];
					}
				}
				else if (slot[i][j] == 1000) {
					tempi = 0;
					if (tempcount[j] == 0) {
						for (k = j + 1; k <= 3; k++) if (slot[i][j] == slot[i][k]) {
							tempcount[k]++;
							tempi++;
						}
						temps1 += starsname[tempi];
						if (temps2 == '') temps2 = '<font color="#4241E7">RoSim </font>';
					}
				}
				else if (slot[i][j] >= 994) {
					temps2 = '<font color="#4241E7">RoSim </font>' + propstonename[slot[i][j] - 994];
				}
			}
			document.getElementById(ename[i] + 'NameD').innerHTML = temps1 + temps2 + itemdata[eq[i]][0] + temps3;
		}
	}
	}
	if (itemdata[eq[4]][1] == 24 || itemdata[eq[4]][1] == 27 || itemdata[eq[4]][1] == 28 || job == 8 || job == 19 || (itemdata[eq[4]][1] >= 32 && itemdata[eq[4]][1] <= 36))
		ArrowIcon.innerHTML = '<img src="img2/icon/' + eq[10] + '.gif" width="24" height="24" border="0">';
	else ArrowIcon.innerHTML = '';
	eqetcscheck();
}


// * Hair function
function facelisting() {
	alllayerhide();
	MM_showHideLayers('FaceLayer','','show');

	tmplist = '';
	k = 0;
	for (j = 1; j <= 23; j++) {
		tmplist += '<a href="#" onClick="facechange(' + j + '); return false"><img src="img2/' + sexname[sex] + '/' + j + '.gif" border="0"></a>';
		if (k % 7 == 6) tmplist += '<br>';
		k++;
	}
	FaceSelect.innerHTML = tmplist;
	tmplist='';
}
function facechange(n) {
	face = n;
	ChrFace.innerHTML = '<img src="img2/' + sexname[sex] + '/' + face + colormanage[hair] + '.gif" border="0">';
	MM_showHideLayers('FaceLayer','','hide');
}
function haircolorlisting() {
	alllayerhide();
	MM_showHideLayers('HairColorLayer','','show');

	tmplist = '';
	k = 0;
	for (j = 0; j <= 8; j++) {
		tmplist += '<a href="#" onClick="haircolorchange(' + j + '); return false"><img src="img2/' + sexname[sex] + '/' + face + colormanage[j] + '.gif" border="0"  onMouseOver="showPopupInfo(4,'+j+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';
		if (k % 7 == 6) tmplist += '<br>';
		k++;
	}
	HairColorSelect.innerHTML = tmplist;
	tmplist='';
}
function haircolorchange(n) {
	hair = n;
	ChrFace.innerHTML = '<img src="img2/' + sexname[sex] + '/' + face + colormanage[hair] + '.gif" border="0">';
	MM_showHideLayers('HairColorLayer','','hide');
}

// * Sex Functions
function sexlisting() {
	alllayerhide();
	MM_showHideLayers('SexLayer','','show');

	SexSelect.innerHTML = '<a href="#" onClick="sexchange(0); return false">Male</a><br><a href="#" onClick="sexchange(1); return false">Female</a>';
}
function sexchange(n) {
	sex = n;

	ChrSex.innerHTML = sexname[sex];
	ChrFace.innerHTML = '<img src="img2/' + sexname[sex] + '/' + face + colormanage[hair] + '.gif" border="0">';
	if (AdvOn && job <=6) JobGraphic.innerHTML = '<img src="img2/' + sexname[sex] + '/High_' + jobname[sexname[sex]][job] + '.gif">';
	else JobGraphic.innerHTML = '<img src="img2/' + sexname[sex] + '/' + jobname[sexname[sex]][job] + '.gif">';
	MM_showHideLayers('SexLayer','','hide');
	if (AdvOn && job<=6) ChrJob.innerHTML = 'High ' + jobname[sexname[sex]][job];
	ChrJob.innerHTML = jobname[sexname[sex]][job];

	bardanreset();
	singleaslisting();

	eqreset();
	showslot();
	showplus();
	equip();
	readbonus(0);
	statuscalc(0);
	skview();
}

// * Job Functions
function joblisting(n) {
	alllayerhide();
	MM_showHideLayers('JobLayer','','show');

	tmplist = '';
	tmpname = '';
	if (!AdvOn) {	// Regular Classes
		tmp = 13;
		if (!nullskill || (nullskill && job > 13)) tmp+=26; // Nullskill, used to make sure you use up your skills before changing

		// Novice - Super Novice
		tmplist += '<a href="#" onClick="jobchange(0, 0); return false"><img src="img2/chr_icon_' + sexname[sex] + '/0.gif" onMouseOver="showPopupInfo(5,0);" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);" border="0"></a>';
		if ((job == 0 && blv >= 45 && skilllv[0] == 9) || job == 66) tmplist += '<a href="#" onClick="jobchange(66, 0); return false"><img src="img2/chr_icon_' + sexname[sex] + '/66.gif" onMouseOver="showPopupInfo(5,66);" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);" border="0"></a>';
		tmplist += '<br>';

		for (i = 0; i <= tmp; i++) {
			// 	        Display First Job					Display From First to Second Job				Display From Second Job
			if ((i >= 1 && i <= 9 && skilllv[0] == 9) || ((i == job+13 || i == job+26) && job >= 1 && job <= 7 && jlv >= 40) || (((job >= 14 && job <= 20) || (job >= 27 && job <= 33)) && (i-1)%13+1 == (job-1)%13+1)) {
				tmplist += '<a href="#" onClick="jobchange(' + i + ', 0); return false"><img src="img2/chr_icon_' + sexname[sex] + '/' + i + '.gif" border="0" onMouseOver="showPopupInfo(5,'+i+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';
				if ((i%3 == 0 && i <= 9) || i >= 27) tmplist += '<br>';
			}
		}
	}
	else {		// Adv Classes
		tmp = 13;	// First Classes
		for (i = 0; i <= tmp; i++) {
			if (i == 0 || (i >= 1 && i <= 6 && skilllv[0] == 9)) {
				tmplist += '<a href="#" onClick="jobchange(' + i + ', 1); return false"><img src="img2/chr_icon_' + sexname[sex] + '/' + i + '.gif" border="0" onMouseOver="showPopupInfo(5,'+i+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';
				if ((i%3 == 0 && i <= 9) || i >= 13) tmplist += '<br>';
			}
		}
		tmp = 39;	// Secondary
		if (!nullskill || (nullskill && job >6)) tmp+=19;
		for (i = 40; i <= tmp; i++) {
			if (((i == job+39 || i == job+52) && job >= 1 && job <= 6 && jlv >= 40) || (job >= 40 && job <= 58 && (i-1)%13+1 == (job-1)%13+1)) {
				tmplist += '<a href="#" onClick="jobchange(' + i + ', 1); return false"><img src="img2/chr_icon_' + sexname[sex] + '/' + i + '.gif" border="0" onMouseOver="showPopupInfo(5,'+i+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';
				if (i >= 53) tmplist += '<br>';
			}
		}
	}
	if (skilllv[0] != 9) tmplist += '&#8226; You Require [Basic Skill] level 9 to become a 1-1 class.<br>';
	else if (nullskill && job<=6 && jlv>=40 && !AdvOn) tmplist += '&#8226; You must use all skill points before moving forward<br>';
	else tmplist += n;

	// Adv Classes
	tmplist += '<br><a href="#" onClick="transreset();return false"><center><img src="img2/design_skin/valkery.gif" onMouseOver="showPopupInfo(5,-1);" border="0" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);""></center></a><br>';

	//tmplist += '<br>*Other*<br><a href="#" onClick="jobchange(19, 0); return false">Gamemaster</a><br>';
	JobSelect.innerHTML = tmplist;
	tmplist='';
}
function joblistingname(n) {
	if (n == -1) JobSelectName.innerHTML = 'Turn Transcendance ['+onoff[(AdvOn+1)%2]+']';
	else if (AdvOn && n <= 6) JobSelectName.innerHTML = 'High ' + jobname[sexname[sex]][n];
	else JobSelectName.innerHTML = jobname[sexname[sex]][n];

}


function jobchange(n, m) {
	st = 0;
	tmp = jlv;
	jlv = 1;
	if (AdvOn) z = 26;
	else z = 0;
	if ((n >= 0 && n <=13) || n == 66) {
		if (n!=0 && (job-1)%13+1 == n && n!=66) {	// If going back to previous 1st class

			if (job > 13)
			{
				for (i = (job-1-z)*40+1; i <= (job-z)*40; i++) {		// Reset 2nd Class Skills
					skillon[i] = 0;
					skilllv[i] = 0;
				}


				if (AdvOn) {
					for (i = (job-1)*40+1; i <= job*40; i++) {	// Reset Adv 2nd Class Skills
						skillon[i] = 0;
						skilllv[i] = 0;
					}
				}
				for (i = ((job-1)%13)*40+1; i <= ((job-1)%13+1)*40; i++) {	// Get previous class skills
					skilllv[i] = skill1st[i];
					skill1st[i] = 0;
					jlv += skilllv[i];
				}
			}
			else {
				for (i = (n-1)*40+1; i <= n*40; i++) {		// Get previous class skills
					skilllv[i] = skill1st[i];
					skill1st[i] = 0;
					jlv += skilllv[i];
				}
			}

		}
		else {	// Reset Normally - Totally different class
			if (job <= 13) {
				for (i = Math.max((job-1),0)*40+1; i <= job*40; i++) {		// All 1st class skills
					skillon[i] = 0;
					skilllv[i] = 0;
					skill1st[i] = 0;
				}
			}
			else {
				for (i = ((job-1)%13)*40+1; i <= ((job-1)%13+1)*40; i++) {		// All 1st class skills
					skillon[i] = 0;
					skilllv[i] = 0;
					skill1st[i] = 0;
				}
				for (i = (job-1-z)*40+1; i <= (job-z)*40; i++) {		// Reset 2nd Class Skills
					skillon[i] = 0;
					skilllv[i] = 0;
				}
				if (AdvOn) {
					for (i = (job-1)*40+1; i <= job*40; i++) {	// Reset Adv 2nd Class Skills
						skillon[i] = 0;
						skilllv[i] = 0;
					}
				}
			}

			if (job == 66 || n == 66) {
				for (i = 2601; i <= 2649; i++) {	// Reset SN
					skillon[i] = 0;
					skilllv[i] = 0;
					skill1st[i] = 0;
				}
			}
			if (n == 0) jlv += skilllv[0];
		}
	}
	else if (n >= 14 && n != 66) {	// When changing 2nd classes+, it stays within base class...
		if (job <= 7) for (i = ((job-1)%13)*40; i <= ((job-1)%13+1)*40; i++) skill1st[i] = skilllv[i];
		else if (n != job) {
			for (i = ((job-1)%13)*40+1; i <= ((job-1)%13+1)*40; i++) {
				skillon[i] = Math.min(skill1st[i], 1);
				skilllv[i] = skill1st[i];
			}
			for (i = (job-1-z)*40+1; i <= (job-z)*40; i++) {
				skillon[i] = 0;
				skilllv[i] = 0;
			}
			if (AdvOn) {
				for (i = (job-1)*40+1; i <= job*40; i++) {
					skillon[i] = 0;
					skilllv[i] = 0;
				}
			}
		}
		else jlv = tmp;
		if(n >= 40) {
			for (i = (n-27)*40+1; i <= (n-26)*40; i++) {
				tmp = 1;
				for (j = 4; j <= 8; j++) if (skilldata[i][j] != 0 && skilllv[skilldata[i][j]] < skilldata[i][j+5]) tmp = 0;
				skillon[i] = tmp;
			}
		}
		for (i = (n-1)*40+1; i <= n*40; i++) {
			tmp = 1;
			for (j = 4; j <= 8; j++) if (skilldata[i][j] != 0 && skilllv[skilldata[i][j]] < skilldata[i][j+5]) tmp = 0;
			skillon[i] = tmp;
		}
	}
	if (n != 0) {
		sntemp = 0;
		if (n == 66) sntemp += 40;
		if (AdvOn && n >39){
			for (i = (n-27)*40+1; i <= (n-26)*40; i++) if (skilldata[i][0] != '' && skilldata[i][4] == 0) skillon[i] = 1;
		}
		else {
			for (i = (n-1)*40+1; i <= (n*40)+sntemp; i++) if (skilldata[i][0] != '' && skilldata[i][4] == 0) skillon[i] = 1; //&& i != 725) skillon[i] = 1;
		}
	}
	job = n;
	nullskill = 0;
	ExtraSkillPoint.innerHTML = 0;
	start(0);


	if (AdvOn && job <=6) JobGraphic.innerHTML = '<img src="img2/' + sexname[sex] + '/High_' + jobname[sexname[sex]][job] + '.gif">';
	else JobGraphic.innerHTML = '<img src="img2/' + sexname[sex] + '/' + jobname[sexname[sex]][job] + '.gif">';
	MM_showHideLayers('JobLayer','','hide');
}

// * Skill Functions
function skview() {
	skillview = new Array(4);
	for (i = 0; i <= 3; i++) skillview[i] = '<table width="195" border="0" cellspacing="1" cellpadding="1" bgcolor="#000000">';
	tmp = new Array();
	if (job != 0 && job != 66) {	// Processing 1st Class jobs
		c=1;	// If you were a swordie, n=1; n<= 40; n++; <- Important
		for (n = (job-1)%13*40+1; n <= ((job-1)%13+1)*40; n++) if (skilldata[n][0] && skilldata[n][1]) {
			if (n != 86 && n != 135 && n != 168 && n != 207 && n != 208) {
				tmp[c] = skviewsub();
				c++;
			}
		}
		else n += 40;
	}

	i = 1;
	while (tmp[1+2*i]) {
		for (j=1; j<tmp.length-2*i; j+=4*i) tmp[j] += tmp[j+2*i];
		i*=2;
	}
	i = 1;
	while (tmp[2+2*i]) {
		for (j=2; j<tmp.length-2*i; j+=4*i) tmp[j] += tmp[j+2*i];
		i*=2;
	}

	if (tmp[1]) skillview[0] += tmp[1];
	if (tmp[2]) skillview[1] += tmp[2];

	tmp = new Array();
	if (job >= 13) {	// Processing 2nd Classes
		c=1;	// If Knight, n=181; n <= 210; n++ <<-- VERY IMPORTANT!!

		// New Skill listing version... smaller skill lists, re-use 2-1 skills
		if (AdvOn) {
			for (n = (job-27)*40+1; n <= ((job-26)*40); n++) if (skilldata[n][0] && skilldata[n][1]) {
				if (n != 563 && n != 1093 && n != 1244 && n != 1246) {
					tmp[c] = skviewsub();
					c++;
				}
			}
			else n += 40;
		}

		sntemp=0;	// Since Super Novice uses 52 skills...
		if (job==66) sntemp+=40;
		for (n = (job-1)*40+1; n <= (job*40)+sntemp; n++) if (skilldata[n][0]) {
			if (n != 563 && n != 1093 && n != 1244 && n != 1246) {
				tmp[c] = skviewsub();
				c++;
			}
		}
		else n += 40;
	}

	i = 1;
	while (tmp[1+2*i]) {
		for (j=1; j<tmp.length-2*i; j+=4*i) tmp[j] += tmp[j+2*i];
		i*=2;
	}
	i = 1;
	while (tmp[2+2*i]) {
		for (j=2; j<tmp.length-2*i; j+=4*i) tmp[j] += tmp[j+2*i];
		i*=2;
	}


	if (tmp[1]) skillview[2] += tmp[1];
	if (tmp[2]) skillview[3] += tmp[2];

	for (i = 0; i <= 3; i++) skillview[i] += '</table>';

	tmp = '';

	SkillView0.innerHTML = skillview[0];
	SkillView1.innerHTML = skillview[1];
	SkillView2.innerHTML = skillview[2];
	SkillView3.innerHTML = skillview[3];
	for (i = 0; i <= 3; i++) skillview[i] += '';

	// Move the advertisement
	var myVar = document.getElementById("SkillListTable").offsetHeight;
	if ( myVar+100 >= 1300)	{
		myVar+=140;
		document.getElementById("SupportPSA").style.top = myVar+'px';
	}
	else
		document.getElementById("SupportPSA").style.top = '1300px';
	skbarallview();
}

function skviewsub() {
	k = '';
	k += '<tr bgcolor="#FFFFFF"><td width="24" align="center"><a href="#" ><img src="img2/skill'+sexname[sex]+'/'+n+'.gif" width="24" height="24" OnMouseOver="skviewdesc('+sex+','+n+')"></td><td width="166">'+skilldata[n][0]+' <span id="Skill'+n+'"></span></a></td></tr><tr bgcolor="FFFFFF"><td colspan="2" align="center"><img src="img2/skill/arw.gif" width="191" height="8"><br><table border="0" cellspacing="1" width="100%" height="42" bgcolor="#000000"><tr>';
	j = 0;
	tmp2=0;
	tmp3=0;
	if (skilldata[n][9] != 0) {	// Skills Required
		z = 0;
		for (i = 4; i <=8; i++) if (skilldata[n][i+5] != 0) {
			if (AdvOn && (skilldata[n][i] > 520 && skilldata[n][i] < 1280)) z = 26;
			else z = 0;
			k += '<td align="center" width="20%" bgcolor="#D6D6D6"><img src="img2/skill'+sexname[sex]+'/'+skilldata[n][i]+'.gif" width="24" height="24" OnMouseOver="skviewdesc('+sex+','+skilldata[n][i]+');showPopupInfo(6, '+n+', '+i+', '+z+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 500);"><br>Lv.'+skilldata[n][i+5]+'</td>';
			j++;
			tmp2++;
			if (tmp2 == 6) {
				k += '</tr><tr>';
				tmp2=0;
				tmp3++;
			}
		}
	}

	if (job != 66) {
		for (m = 1; m <= 360; m++){	// Skills that need this [1st class; NOT SN]
			for (l = 4; l <= 8; l++) if (skilldata[m][l] == n) {
				k += '<td align="center" width="20%" bgcolor="#F2F2F2">Lv.'+skilldata[m][l+5]+'<br><img src="img2/skill'+sexname[sex]+'/'+m+'.gif" width="24" height="24" OnMouseOver="skviewdesc('+sex+','+m+');showPopupInfo(7, '+m+', '+l+', 0);" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 500);"></td>';
				j++;
				tmp2++;
				if (tmp2 == 6) {
					k += '</tr><tr>';
					tmp2=0;
					tmp3++;
				}
			}
		}

		z = 0;
		if (AdvOn) z = 26;
		for (m=521; m <= 1320; m++) {	// Skills that need this [Regular 2nd; NOT SN]
			for (l = 4; l <= 8; l++) if (skilldata[m][l] == n) {
				k += '<td align="center" width="20%" bgcolor="#F2F2F2">Lv.'+skilldata[m][l+5]+'<br><img src="img2/skill'+sexname[sex]+'/'+m+'.gif" width="24" height="24" OnMouseOver="skviewdesc('+sex+','+m+');showPopupInfo(7, '+m+', '+l+', '+z+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 500);"></td>';
				j++;
				tmp2++;
				if (tmp2 == 6) {
					k += '</tr><tr>';
					tmp2=0;
					tmp3++;
				}
			}
		}
		if (AdvOn) for (m=1561; m <= 2284; m++) {	// Skills that need this [Advanced 2nd; NOT SN]
			for (l = 4; l <= 8; l++) if (skilldata[m][l] == n) {
				k += '<td align="center" width="20%" bgcolor="#F2F2F2">Lv.'+skilldata[m][l+5]+'<br><img src="img2/skill'+sexname[sex]+'/'+m+'.gif" width="24" height="24" OnMouseOver="skviewdesc('+sex+','+m+');showPopupInfo(7, '+m+', '+l+', 0);" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 500);"></td>';
				j++;
				tmp2++;
				if (tmp2 == 6) {
					k += '</tr><tr>';
					tmp2=0;
					tmp3++;
				}
			}
		}
	}

	if (job==66) {
		for (m = 2601; m <= 2649; m++){	// Skills that need this [Super Novice Only (much faster)]
			for (l = 4; l <= 8; l++) if (skilldata[m][l] == n) {
				k += '<td align="center" width="20%" bgcolor="#F2F2F2">Lv.'+skilldata[m][l+5]+'<br><img src="img2/skill'+sexname[sex]+'/'+m+'.gif" width="24" height="24" OnMouseOver="skviewdesc('+sex+','+m+');showPopupInfo(7, '+m+', '+l+', 0);" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 500);"></td>';
				j++;
			}
		}
	}
	if (j == 0) k += '<td bgcolor="#FFFFFF"></td>'
	if (tmp3) k += '<td colspan="'+(6-tmp2)+'" bgcolor="#FFFFFF"></td>';
	k += '</tr></table></td></tr><tr bgcolor="#D6D6D6"><td colspan="2"></td></tr>';
	return k;
}

function skoncheck() {
	sntemp = 0;
	if (job == 66) sntemp+=40;
	if (job == 0) skillon[0] = 1;
	else if (job < 66) {
		for (n = (job-1)%13*40+1; n <= ((job-1)%13+1)*40; n++) if (skilldata[n][0] != '') {
			skillon[n] = 1;
			for (j = 4; j <= 8; j++) if (skilldata[n][j+5] > skilllv[skilldata[n][j]]) skillon[n] = 0;
		}
	}
	if (job >= 14) {
		if (AdvOn) {	// (Testing)
			for (n = (job-27)*40+1; n <= ((job-26)*40); n++) if (skilldata[n][0] != '') {
				skillon[n] = 1;
				for (j = 4; j <= 8; j++) if (skilldata[n][j+5] > skilllv[skilldata[n][j]]) skillon[n] = 0;
			}
		}
		for (n = (job-1)*40+1; n <= (job*40)+sntemp; n++) {
			if (skilldata[n][0] != '') {
				skillon[n] = 1;
				for (j = 4; j <= 8; j++) if (skilldata[n][j+5] > skilllv[skilldata[n][j]]) skillon[n] = 0;
			}
		}
	}
}



function skbarallview() {
	if (job != 0 && job < 66) {//job <= 18 ~ 1st @ 2nd Classes
		Skill0.innerHTML = 'Lv. 10<br><img src="img2/skill/noreset.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif">';
		for (i=((job-1)%13)*40+1; i<=((job-1)%13+1)*40; i++) {
			if (skilldata[i][0] != '') {
				if (i != 86 && i != 135 && i != 168 && i != 207 && i != 208) {
				if (skillon[i] == 1) {
					skimg(skill1st[i],i,1);
					for (j=1; j<=skill1st[i]-1; j++) skimg(j,i,5);
					if (skill1st[i]>=1) skimg(skill1st[i],i,6);
					for (j=skill1st[i]+1; j<=skilllv[i]; j++) skimg(j,i,3);
					for (j=skilllv[i]+1; j<=skilldata[i][1]; j++) skimg(j,i,4);
				}
				else {
					skimg(skill1st[i],i,0);
					for (j=1; j<=skilldata[i][1]; j++) skimg(j,i,2);
				}
				document.getElementById('Skill'+i).innerHTML = 'Lv.'+skilllv[i]+'<br>'+bar;

			}}
			else i += 40;
		}
		if (job >= 14) {
			if (AdvOn) for (i=(job-27)*40+1; i<=(job-26)*40; i++) {	// (Testing)
				if (skilldata[i][0] != '') {
					if (i != 563 && i != 1093 && i != 1244 && i != 1246) {
					if (skillon[i] == 1) {
						skimg(0,i,1);
						for (j=1; j<=skilllv[i]; j++) skimg(j,i,3);
						for (j=skilllv[i]+1; j<=skilldata[i][1]; j++) skimg(j,i,4);
					}
					else {
						skimg(0,i,0);
						for (j=1; j<=skilldata[i][1]; j++) skimg(j,i,2);
					}
					document.getElementById('Skill'+i).innerHTML = 'Lv.'+skilllv[i]+'<br>'+bar;
				}}
				else i += 40;
			}
			for (i=(job-1)*40+1; i<=job*40; i++) {
				if (skilldata[i][0] != '') {
					if (i != 563 && i != 1093 && i != 1244 && i != 1246) {
					if (skillon[i] == 1) {
						skimg(0,i,1);
						for (j=1; j<=skilllv[i]; j++) skimg(j,i,3);
						for (j=skilllv[i]+1; j<=skilldata[i][1]; j++) skimg(j,i,4);
					}
					else {
						skimg(0,i,0);
						for (j=1; j<=skilldata[i][1]; j++) skimg(j,i,2);
					}
					document.getElementById('Skill'+i).innerHTML = 'Lv.'+skilllv[i]+'<br>'+bar;
				}}
				else i += 40;
			}
		}
	}
	else if (job == 0) {//job == 0 ~ Novice
		skimg(0,0,1);
		for (j=1; j<=skilllv[0]; j++) skimg(j,0,3);
		for (j=skilllv[0]+1; j<=9; j++) skimg(j,0,4);
		Skill0.innerHTML = 'Lv.'+skilllv[0]+'<br>'+bar;
	}
	else if (job == 66) { //job == 66 ~ Super Novice
		Skill0.innerHTML = '<br><img src="img2/skill/noreset.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif"><img src="img2/skill/on1st.gif">';
		for (i=(job-1)*40+1; i<=(job*40)+40; i++) {
			if (skilldata[i][0] != '') {
				if (skillon[i] == 1) {
					skimg(0,i,1);
					for (j=1; j<=skilllv[i]; j++) skimg(j,i,3);
					for (j=skilllv[i]+1; j<=skilldata[i][1]; j++) skimg(j,i,4);
				}
				else {
					skimg(0,i,0);
					for (j=1; j<=skilldata[i][1]; j++) skimg(j,i,2);
				}
				document.getElementById('Skill'+i).innerHTML = 'Lv.'+skilllv[i]+'<br>'+bar;
			}
			else i += 40;
		}
	}
	else Skill0.innerHTML = 'AAAAAAAAAAAAAAAAAAAAAAAAA error.'; // No Job [error handling]
}

function skbardisp(m) {
	skimg(skill1st[m],m,1);
	for (j=1; j<=skill1st[m]-1; j++) skimg(j,m,5);
	if (skill1st[m]>=1) skimg(skill1st[m],m,6);
	for (j=skill1st[m]+1; j<=skilllv[m]; j++) skimg(j,m,3);
	for (j=skilllv[m]+1; j<=skilldata[m][1]; j++) skimg(j,m,4);
	document.getElementById('Skill'+m).innerHTML = 'Lv.'+skilllv[m]+'<br>'+bar;
}

function skbarview(m,n,o) {
	if (n == 0)	tmp3 = new Array(1,m);
	for (i=75; i<=126; i++) support[i] = 0;
	for(z=1;z<=o[0];z++) {
		m = o[z];

		skbardisp(m);

		if (job!=0) {
			if (job!=66)
			{
				for (i=(job-1)%13*40+1; i<=((job-1)%13+1)*40; i++) {
					if (skilldata[i][0] != '') {
						if (i != 86 && i != 135 && i != 168 && i != 207 && i != 208) {
							tmp = 1;
							for (j=4; j<=8; j++) {
								if (skilldata[i][j] != 0) if (skilldata[i][j+5] > skilllv[skilldata[i][j]]) {
									if (skillon[i] == 1) {
										jlv -= skilllv[i];
										skilllv[i] = 0;
										skillon[i] = 0;
										skbarerase(i);
										i=(job-1)%13*40+1;
										j+=5;
									}
									tmp = 0;
								}
								if (j == 8 && tmp == 1 && skillon[i] == 0) {
									skillon[i] = 1;
									if ( n != 1) {
										tmp3[1] = i;
										skbarview(i,0,tmp3);
									}
									else skbardisp(i);
								}
							}
						}
					}
					else i += 40;
				}
			}
			sntemp = 0;
			k = 0;
			if (job == 66) sntemp += 40;
			if (AdvOn) k = 26;
			if (job >= 14) {
				 for (i=(job-1-k)*40+1; i<=((job-k)*40)+sntemp; i++) {
					if (skilldata[i][0] != '') {
						if (i != 563 && i != 1093 && i != 1244 && i != 1246) {
							tmp = 1;
							for (j=4; j<=8; j++) {
								if (skilldata[i][j] != 0) if (skilldata[i][j+5] > skilllv[skilldata[i][j]]) {
									if (skillon[i] == 1) {
										jlv -= skilllv[i];
										skilllv[i] = 0;
										skillon[i] = 0;
										skbarerase(i);
										i=(job-1-k)*40+1;
										j+=5;
									}
									tmp = 0;
								}
								if (j == 8 && tmp == 1 && skillon[i] == 0) {
									skillon[i] = 1;
									if ( n != 1) {
										tmp3[1] = i;
										skbarview(i,0,tmp3);
									}
									else skbardisp(i);
								}
							}
						}
					}
					else i += 40;
				}
				if(AdvOn) for (i=(job-1)*40+1; i<=(job*40)+sntemp; i++) {
					if (skilldata[i][0] != '') {
						if (i != 563 && i != 1093 && i != 1244 && i != 1246) {
							tmp = 1;
							for (j=4; j<=8; j++) {
								if (skilldata[i][j] != 0) if (skilldata[i][j+5] > skilllv[skilldata[i][j]]) {
									if (skillon[i] == 1) {
										jlv -= skilllv[i];
										skilllv[i] = 0;
										skillon[i] = 0;
										skbarerase(i);
										i=(job-1)*40+1;
										j+=5;
									}
									tmp = 0;
								}
								if (j == 8 && tmp == 1 && skillon[i] == 0) {
									skillon[i] = 1;
									if ( n != 1) {
										tmp3[1] = i;
										skbarview(i,0,tmp3);
									}
									else skbardisp(i);
								}
							}
						}
					}
					else i += 40;
				}
			}
		}
	}
}

function skbarerase(m) {
	skimg(skill1st[m],m,0);
	for (j=1; j<=skilldata[m][1]; j++) skimg(j,m,2);
	document.getElementById('Skill'+m).innerHTML = 'Lv.'+skilllv[i]+'<br>'+bar;
}
function skimg(l,m,n) {
// l: Skill Lv, m: Skill number, n: Type
// Type - 0:noreset, 1:reset, 2:no, 3:on, 4:off, 5:1ston, 6:1stonreset
	if (n == 1) bar = '<a href="#" onClick="skcalc('+l+','+m+',0); return false"><img src="img2/skill/'+skbaricon[n]+'.gif" border="0"></a>';
	else if (n == 6) bar += '<a href="#" onClick="skcalc('+l+','+m+',0); return false"><img src="img2/skill/'+skbaricon[n]+'.gif" border="0"></a>';
	else if (n == 3 || n == 4) bar += '<a href="#" onClick="skcalc('+l+','+m+',0); return false"><img src="img2/skill/'+skbaricon[n]+'.gif" border="0"></a>';
	else if (n == 2) bar += '<a href="#" onClick="skcalc('+l+','+m+',1); return false"><img src="img2/skill/'+skbaricon[n]+'.gif" border="0"></a>';
	else if (n == 0) bar = '<img src="img2/skill/'+skbaricon[n]+'.gif">';
	else if (n == 5) bar += '<img src="img2/skill/'+skbaricon[n]+'.gif">';
}
function autoskcalc(l,m) {
// l:Skill Lv, m: Skill Number
	if (skillon[m]) {
		if (skilllv[m]<=l) {
			if ((l - skilllv[m] > nullskill + 50 - jlv && (job < 39 && job != 8 && job != 9)) ||
			(job == 66 && l - skilllv[m] > nullskill + 99 - jlv) ||
			((job >= 40 || job == 8 || job == 9) && job != 66 && l - skilllv[m] > nullskill + 70 - jlv)) {
				if (job < 39  && job != 8 && job != 9) l = nullskill + skilllv[m] + 50 - jlv;
				else if (job == 66) l = nullskill + skilllv[m] + 99 - jlv;
				else l = nullskill + skilllv[m] + 70 - jlv;
				tmp = 1;
			}
			else tmp = 0;

			if (!autojlv && l-skilllv[m]>nullskill) {
				autojlv = 1;
				AutoJobLv.innerHTML = supportonoff[1];
				jlv -= nullskill;
				nullskill = 0;
			}

			if (!autojlv) nullskill -= l - skilllv[m];
			else jlv += l - skilllv[m];

			skilllv[m] = l;
			if(l) skillon[m] = 1;

			if (tmp) {
				autojlv = 1;
				AutoJobLv.innerHTML = supportonoff[1];
				nullskill = 0;
			}
			else {
				tmp2[0]++;
				tmp2[tmp2[0]] = m;
			}
		//	alert(tmp2[0]+' - '+tmp2[tmp2[0]]);
		}
	}
	else {
		for(z=0;z<=4;z++) {
			if (!skilldata[m][4+z]) z += 5;
			else autoskcalc(skilldata[m][4+z+5], skilldata[m][4+z]);
		}
		if ((l - skilllv[m] > nullskill + 50 - jlv && (job < 39 && job != 8 && job != 9)) ||
		(job == 66 && l - skilllv[m] > nullskill + 99 - jlv) ||
		((job >= 40 || job == 8 || job == 9) && job != 66 && l - skilllv[m] > nullskill + 70 - jlv)) {
			if (job < 39 && job != 8 && job != 9) l = nullskill + skilllv[m] + 50 - jlv;
			else if (job == 66) l = nullskill + skilllv[m] + 99 - jlv;
			else l = nullskill + skilllv[m] + 70 - jlv;
			tmp = 1;
		}
		else tmp = 0;

		if (!autojlv && l-skilllv[m]>nullskill) {
			autojlv = 1;
			AutoJobLv.innerHTML = supportonoff[1];
			jlv -= nullskill;
			nullskill = 0;
		}

		if (!autojlv) nullskill -= l - skilllv[m];
		else jlv += l - skilllv[m];

		skilllv[m] = l;
		if(l) skillon[m] = 1;

		if (tmp) {
			autojlv = 1;
			AutoJobLv.innerHTML = supportonoff[1];
			nullskill = 0;
		}
		else {
			tmp2[0]++;
			tmp2[tmp2[0]] = m;
		}

	//	alert(tmp2[0]+' - '+tmp2[tmp2[0]]);
	}
}
function skcalc(l,m,n) {
// l:Skill Lv [Input], m: Skill number [ID], n: AutoSkill [On/Off]
	jtmp = jlv;
	tmp2 = new Array();
	tmp2[0] = 0;
	if (n == 0) {
		tmp2[0] = 1;
		tmp2[1] = m;
		// If below max gjLv
		if ((l - skilllv[m] > nullskill + 50 - jlv && (job < 39 && job != 8 && job != 9))  ||
		(job == 66 && l - skilllv[m] > nullskill + 99 - jlv) ||
		((job >= 40 || job == 8 || job == 9) && job != 66 && l - skilllv[m] > nullskill + 70 - jlv)) {
			if (job < 39 && job != 8 && job != 9) l = nullskill + skilllv[m] + 50 - jlv;
			else if (job == 66) l = nullskill + skilllv[m] + 99 - jlv;
			else l = nullskill + skilllv[m] + 70 - jlv;
			tmp = 1;
		}
		else tmp = 0;

		if (!autojlv && l-skilllv[m]>nullskill) {
			autojlv = 1;
			AutoJobLv.innerHTML = supportonoff[1];
			jlv -= nullskill;
			nullskill = 0;
		}

		if (!autojlv) nullskill -= l - skilllv[m];
		else jlv += l - skilllv[m];

		skilllv[m] = l;

		if (tmp) {
			autojlv = 1;
			AutoJobLv.innerHTML = supportonoff[1];
			nullskill = 0;
		}
		skbarview(m,0,tmp2);
		readbonus(0);
		statuscalc(0);
	}
	if (n == 1) {
		for(i=0;i<=4;i++) {
			if (!skilldata[m][4+i]) i += 5;
			else autoskcalc(skilldata[m][4+i+5], skilldata[m][4+i]);
		}
		if ((l - skilllv[m] > nullskill + 50 - jlv && (job < 39 && job != 8 && job != 9))  ||
		(job == 66 && l - skilllv[m] > nullskill + 99 - jlv) ||
		((job >= 40 || job == 8 || job == 9) && job != 66 && l - skilllv[m] > nullskill + 70 - jlv)) {
			if (job < 39 && job != 8 && job != 9) l = nullskill + skilllv[m] + 50 - jlv;
			else if (job == 66) l = nullskill + skilllv[m] + 99 - jlv;
			else l = nullskill + skilllv[m] + 70 - jlv;
			tmp = 1;
		}
		else tmp = 0;

		if (!autojlv && l-skilllv[m]>nullskill) {
			autojlv = 1;
			AutoJobLv.innerHTML = supportonoff[1];
			jlv -= nullskill;
			nullskill = 0;
		}

		if (!autojlv) nullskill -= l - skilllv[m];
		else jlv += l - skilllv[m];

		skilllv[m] = l;
		if(l) skillon[m] = 1;

		if (tmp) {
			autojlv = 1;
			AutoJobLv.innerHTML = supportonoff[1];
			nullskill = 0;
		}
		else {
			tmp2[0]++;
			tmp2[tmp2[0]] = m;
		}

		if (tmp2[0]) {
			skbarview(0,1,tmp2);
			readbonus(0);
			statuscalc(0);
		}
	}

	ExtraSkillPoint.innerHTML = nullskill;

	// If you go below jlv needed to change while Job List window is open, close it.
	if ((job <= 6 && jtmp >= 40 && (jlv < 40 || nullskill))) {
		MM_showHideLayers('JobLayer','','hide');
		st = 0;
	}

	if (job == 0 && jtmp >= 10 && skilllv[0] < 10) MM_showHideLayers('JobLayer','','hide');

	tmp2 = '';
	if (AdvOn) tmp2 = ' Transcendant';

	if (m == 0 && skilllv[0] == 9) joblisting('<br>&#8226; Choose a 1-1 Class.<br>');
	if (!nullskill) {
		if (job >= 1 && job <= 7 && jlv >= 40 && st == 0) {
			joblisting('<br>&#8226; Choose your'+ tmp2 +' 2nd class.<br>');
			st = 1;
		}
		if (job >= 1 && job <= 7 && jlv == 50 && st == 1) {
			joblisting('<br>&#8226; Choose your'+ tmp2 +' 2nd class.<br>');
			st = 0;
		}
	}
}

function skviewdesc(sex, skillnum) { if (keypressed!=96) {
	// Simple, Get a check of what job he/she is in, and display the window with the proper information.
	// Skill Image
	SkillImg =  '<img src="img2/skill'+sexname[sex]+'/'+skillnum+'.gif" width="24" height="24"> ';

	// Skill Name
	SkillName = skilldata[skillnum][0];

	tempSkill = new Array();
	if (skillnum >= 1121 && skillnum <= 1128) tempSkill = skilldesc[skillnum][sex];
	else tempSkill = skilldesc[skillnum];

	// Skill Description
	SkillDe = tempSkill[0];

	// Skill Notes
	SkillNotes = tempSkill[1];

	// Skill Requirements
	req = false;
	z = 4
	SkillReq = '';
	while(z <= 8) {
		if (skilldata[skillnum][z] != 0){
			if (req != false)
				SkillReq += ', ';
			meh = skilldata[skillnum][z];
			meh2 = z + 5
			SkillReq += 'Level ' + skilldata[skillnum][meh2] + ' - ';
			SkillReq += skilldata[meh][0];
			req = true;
		}
		z++;
	}
	if (req == false) SkillReq += 'None';
	if (skillnum == 728) SkillReq = 'Job Level 50 and Above';

	// Skill Info
	SkillInfo = '';
	if (tempSkill[3] == 1) {
		SkillInfo = '<table border="1" bordercolor="#D6D6D6"><tr class="gray" align="center">';
		numrows = tempSkill[4];
		numcols = tempSkill[5];
		temp = '<td>Level</td>';
		temp2 = '';

		// Titles
		n = 6;
		m = 5 + numcols;
		while(n <= m) {
			temp += '<td>';
			temp += tempSkill[n];
			temp += '</td>';
			n++;
		}
		temp += '</tr>';

		// Description rows
		n = 6 + numcols; // Position in Array
		i = 1; // Postion of Rows
		m = numrows*numcols;
		m += n;
		while(n < m){
			temp2 += '<tr align="center"><td>' + i + '</td>';	// Level Column

			z = n;
			j = z + numcols;
			while(z < j ){	// Itterate through column length
				temp2 += '<td>' + tempSkill[z] + '</td>';
				z++;
			}

			temp2 += '</tr>';

			i++;
			n = n + numcols;
		}
		SkillInfo += temp;
		SkillInfo += temp2;
		SkillInfo += '</table>';
	}

	// Skill Use
	SkillUse = '';
	if (skilldata[skillnum][3] == 0) SkillUse = 'Passive';
	else if (skilldata[skillnum][3] == 1) SkillUse = 'Active [Assist]';
	else if (skilldata[skillnum][3] == 2) SkillUse = 'Active [Attack]';
	else if (skilldata[skillnum][3] == 3) SkillUse = 'Active [Recover]';
	else if (skilldata[skillnum][3] == 4) SkillUse = 'Active [Status Afflicting]';
	else if (skilldata[skillnum][3] == 5) SkillUse = 'Active [Hidden Trap]';
	else if (skilldata[skillnum][3] == 6) SkillUse = 'Active [Visible Trap]';
	else if (skilldata[skillnum][3] == 7) SkillUse = 'Active [Blessing]';
	else if (skilldata[skillnum][3] == 8) SkillUse = 'Active [Praise]';
	else if (skilldata[skillnum][3] == 9) SkillUse = 'Active [Demon/Undead Attack]';

	// Skill Who
	SkillWho = '';
	if (tempSkill[2] == 0) SkillWho = 'User';
	else if (tempSkill[2] == 1) SkillWho = 'Allies';
	else if (tempSkill[2] == 2) SkillWho = 'Party';
	else if (tempSkill[2] == 3) SkillWho = 'Ground';
	else if (tempSkill[2] == 4) SkillWho = 'Enemy';

	SkillDescImg.innerHTML = SkillImg;
	SkillDescName.innerHTML = SkillName;
	SkillDesc.innerHTML = SkillDe;
	SkillDescNote.innerHTML = SkillNotes;
	SkillDescReq.innerHTML = SkillReq;
	SkillDescInfo.innerHTML = SkillInfo;
	SkillDescUse.innerHTML = SkillUse;
	SkillDescWho.innerHTML = SkillWho;
}}

// * Recovery item function
function hpilisting() {
	alllayerhide();
	MM_showHideLayers('HPRItemLayer','','show');

	tmplist = '';
	k = 0;
	for (i = 501; i <= 550; i++) if (itemdata[i][1]==48) {
		tmplist += '<a href="#" onClick="hpichange(' + i + '); return false"><img src="img2/icon/' + i + '.gif" border="0" onMouseOver="showPopupInfo(3,'+i+');" OnMouseOut="overDesc=0; setTimeout(\'HidePopUp()\', 1000);"></a>';
		if (k % 7 == 6) tmplist += '<br>';
		k++;
	}
	HPRItemSelect.innerHTML = tmplist;
	tmplist='';
}
function hpichange(n) {
	hpi = n;
	HPRItemIcon.innerHTML = '<img src="img2/icon/' + hpi + '.gif" border="0">';
	HPRItemName.innerHTML = itemdata[hpi][0];
	MM_showHideLayers('HPRItemLayer','','hide');
	showmobdata();
	bbtshow();
}

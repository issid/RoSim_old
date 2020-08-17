skilldata = new Array(2800);
skilldesc = new Array(2800);
skillcopy = new Array(2800);
for (i = 0; i <= 2800; i++)  { 	skilldata[i] = new Array('', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				skilldesc[i] = new Array('','', 0, 0, 0, 0);
				skillcopy[i] = 0; }

// 1080 - old skill size

skillon = new Array(2800);	// Is Skill activated
skilllv = new Array(2800);	// Skill Lv Array
skill1st = new Array(2800);	// Skills Preset Before Job Change

//skilldata[] = new Array('', , , , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

/* Skill Data Array *************
0: Name, 1: Mastered Lv, 2: Lv change, 3: Type,
4: Required Skill 1, 5: Required Skill 2, 6: Required Skill 3, 7: Required Skill 4, 8: Required Skill 5
9: Required Skill Lv1, 10: Required Skill Lv2, 11: Required Skill Lv3, 12: Required Skill Lv4, 13: Required Skill Lv5
14: Attack Skill ID#
Lv change 0: It is Not, 1: It is
Type 0: Passive, 1: Assistance [non-Attack], 2: Attack, 3: Recover [Healing], 4: Curse [Status Ailment],
  5: Trap (Hidden), 6: Trap (Visible), 7: Blessing [Stat change], 8: Praise [protective], 9:Running demon [Hurts Demon/Undead]
******************************/

/* Skill Desctription Array ******************
0: Skill Description, 1: Notes, 2: Use, 3: Skill Effects, 4: Effect List Rows, 5: Total Number of Colums [excluding lvl column],
 6 + [4]: Column TItles, ...

Use :		 	0: User, 1: Allies, 2: Party Member, 3: Ground, 4: Enemy
Skill Effects		0: None, 1: Yes
*****************************/
// No Column
//skilldesc[0] = new Array('Description', 'Notes', 0, 0, 0, 0);

// 0) Novice
skilldata[0] = new Array('Basic Skill', 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[0] = new Array('Basic Skill', '9', 0, 0, 0, 0);

// 1) Swordman
skilldata[1] = new Array('Sword Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1] = new Array('This skill increases the damage of one-handed swords.', 'The skill level affects the damage increase.', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '4', '8', '12', '16', '20', '24', '28', '32', '36', '40');

skilldata[2] = new Array('Two-Handed Sword Mastery', 10, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[2] = new Array('This skill increases the damage of two-handed swords.', 'The skill level affects the damage increase.', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '4', '8', '12', '16', '20', '24', '28', '32', '36', '40');

skilldata[3] = new Array('Increase HP Recovery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[3] = new Array('This skill restores an additional 5 HP per skill level every 10 seconds while standing still.', 'The maximum HP a character has also affects the amount of HP which is regenerated from this skill as well. Additionally, this skill increases the healing value of health items by 10% per skill level.', 0, 1, 10, 3, 'Value of Recovery', 'Additional Value of Recovery', 'Additional Potion Value'
, '5', 'MAXHP 0.2%', '+10%', '10', 'MAXHP 0.4%', '+20%', '15', 'MAXHP 0.6%', '+30%', '20', 'MAXHP 0.8%', '+40%', '25', 'MAXHP 1.0%', '+50%', '30 ', 'MAXHP 1.2%', '+60%', '35 ', 'MAXHP 1.4%', '+70%', '40 ', 'MAXHP 1.6%', '+80%', '45 ', 'MAXHP 1.8%', '+90%', '50 ', 'MAXHP 2.0%', '+100%');

skilldata[4] = new Array('Bash', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
skilldesc[4] = new Array('Attack a target with a mighty blow. The skill level affects the damage dealt to a target and the accuracy of the attack.', 'Be warned, from skill level 6 and beyond, the SP consumption of this skill suddenly increases. You should consider the cost this may have by leveling this skill past level 5.', 4, 1, 10, 4, 'Attack Strength Added by lvl', 'Additional Accuracy Rate', 'SP consumption', 'Stun Chance [With Fatal Blow]'
, '130%', '+5 ', '8', '-', '160%', '+10', '8', '-', '190%', '+15', '8', '-', '220%', '+20 ', '8', '-', '250%', '+25', '8', '-', '280%', '+30 ', '15', '6%', '310%', '+35 ', '15', '12%', '340%', '+40', '15', '18%', '370%', '+45', '15', '24%', '400% ', '+50', '15', '30%');

skilldata[5] = new Array('Provoke', 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[5] = new Array('Taunt a target and bring its attention to you. The target loses defense but its attack strength increases while provoked.', 'You cannot provoke Bosses or undead monsters. The higher the level difference between the character and the provoked target is, the higher success rate the skill will have.', 4, 1, 10, 4, 'Additional ATK of enemy', 'DEF of enemy decrement', 'Success Chance', 'SP consumption'
, '2%', '6%', '53%', '4', '4%', '12%', '56% ', '5', '6%', '18%', '59%', '6', '8%', '24%', '62%', '7', '10%', '30%', '65%', '8', '12%', '36%', '68%', '9', '14%', '42%', '71%', '10', '16%', '48%', '74%', '11', '18%', '54%', '77%', '12', '20%', '60%', '80%', '13');

skilldata[6] = new Array('Magnum Break', 10, 0, 2, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 2);
skilldesc[6] = new Array('Attack a group of enemies with a splash damaging attack that damages enemies within 25 cells around your targeted monster, at the same time pushing them back 2 cells.', 'The elemental attribute of this skill is fire. Adds 20% Fire property strength onto normal attack for 10 seconds after each use. Some SP and a small amount of HP are required to use.', 4, 1, 10, 2, 'Attack Strength Added by lvl', 'SP consumption'
, '115%', '15', '130%', '15', '145%', '15', '160%', '15', '175%', '15', '190%', '15', '205%', '15', '220%', '15', '235%', '15', '250%', '15');

skilldata[7] = new Array('Endure', 10, 0, 1, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[7] = new Array('When a character is being attacked, there is a delay which hinders the characters movement or ability to attack back immediately. The Endure skill removes the delay so you can run away or attack without interruption.', 'Cannot be used during Guild Sieges. Endure effect is canceled if its user is attacked more than 7 times during skills duration. Has a 10 second skill recasting delay.', 0, 1, 10, 1, 'Skill Duration'
, '10sec', '13sec', '16sec', '19sec', '22sec', '25sec', '28sec', '31sec', '34sec', '37sec');

// 2) Magician
skilldata[41] = new Array('Increase SP Recovery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[41] = new Array('Restores SP every 10 seconds while standing still. Every skill level increases the SP restoration amount by 3, the maximum SP of the caster affects the SP restoration amount.', ' - ', 0, 1, 10, 2, 'Value of Recovery', 'Additional Value of Recovery by MAXSP'
, '3', 'MAXSP 0.2%', '6', 'MAXSP 0.4%', '9 ', 'MAXSP 0.6%', '12 ', 'MAXSP 0.8%', '15 ', 'MAXSP 1.0%', '18 ', 'MAXSP 1.2%', '21 ', 'MAXSP 1.4%', '24 ', 'MAXSP 1.6%', '27 ', 'MAXSP 1.8%', '30 ', 'MAXSP 2.0%');

skilldata[42] = new Array('Sight', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[42] = new Array('Summon a spinning fire ball around the caster that detects hidden enemies around the caster. Requires 10 SP for a use.', 'Has a search area of 5x5 squares.', 0, 0, 0, 0);

skilldata[43] = new Array('Napalm Beat', 10, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3);
skilldesc[43] = new Array('Damages an area 9 cells around the target with Ghost Property attack. The targets within the attack range receive damage.', 'Has a 1 second delay after use.', 4, 1, 10, 2, 'Damage Increment ', 'Required SP'
, 'MATK * 0.8', '9', 'MATK * 0.9 ', '9', 'MATK * 1.0', '9', 'MATK * 1.1', '9', 'MATK * 1.2 ', '9', 'MATK * 1.3 ', '9', 'MATK * 1.4 ', '9', 'MATK * 1.5', '9', 'MATK * 1.6', '9', 'MATK * 1.7', '9');

skilldata[44] = new Array('Safety Wall', 10, 1, 1, 43, 45, 0, 0, 0, 7, 5, 0, 0, 0, 0);
skilldesc[44] = new Array('Create a 1 cell barrier with a magic wall. It protects a character from physical melee attacks.', 'Consumes 1 Blue Gemstone. Cannot be cast on the same cell twice. Skill level affects on the numbers of hits the caster is protected from and the Skill Duration.', 3, 1, 10, 3, 'Guard ', 'Casting Time ', 'SP consumption'
, '2 times ', '4sec ', '30', ' 3 times ', '3.5sec ', '30', '4 times', '3sec ', '30', '5 times ', '2.5sec ', '35', '6 times', '2sec ', '35', '7 times ', '1.5sec ', '35', ' 8 times', '1sec ', '40', '9 times', '1sec ', '40', '10 times', '1sec ', '40', '11 times ', '1sec ', '40');

skilldata[45] = new Array('Soul Strike', 10, 0, 2, 43, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4);
skilldesc[45] = new Array('Summon aggressive ancient holy ghosts which attack with ghost property on a desired target. At level 10, when summoned, the holy ghost delivers 5 consecutive blows.', 'Has a 0.5 casting delay time.', 4, 1, 10, 3, 'Numbers of Blow ', 'Delay After a use ', 'SP consumption'
, '1 ', '1.2sec ', '15', ' 1 ', '1.4sec ', '18', '2 ', '1.6sec ', '21', '2 ', '1.8sec ', '24', '3 ', '2.0sec ', '27', '3 ', '2.2sec ', '30', ' 4 ', '2.4sec ', '33', '4 ', '2.6sec ', '36', '5 ', '2.8sec ', '39', '5 ', '2.7sec ', '42');

skilldata[46] = new Array('Cold Bolt', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5);
skilldesc[46] = new Array('Strike a target with icy bolts falling from the sky. Skill level affects on the numbers of bolts that the caster can summon at a time.', 'Suffers a delay after a use.', 4, 1, 10, 3, 'Numbers of bolt', 'Casting Time', 'SP consumption'
, '1', '0.7sec', '12', ' 2', '1.4sec', '14', '3', '2.1sec', '16', '4', '2.8sec', '18', '5', '3.5sec', '20', '6', '4.2sec', '22', ' 7', '4.9sec', '24', '8', '5.6sec', '26', '9', '6.3sec', '28', '10', '7sec', '30');

skilldata[47] = new Array('Frost Driver', 10, 0, 2, 46, 0, 0, 0, 0, 5, 0, 0, 0, 0, 6);
skilldesc[47] = new Array('Attacks a target and Freezes it by chance. Target frozen by Frost Diver skill become water property regardless of its own property. However this skill doesnt work on boss and undead monsters, and has a delay after a use.', 'This skill also has a 0.8 casting time, the magic defense of the target affects the time, chance frozen.', 4, 1, 10, 4, 'ATK', 'Frozen Time', 'Freezing Chance', 'SP consumption'
, '110%', '3sec', '38%', '25', '120%', '6sec', '41%', '24', '130%', '9sec', '44%', '23', '140%', '12sec', '47%', '22', '150%', '15sec', '50%', '21', '160%', '18sec', '53%', '20', '170%', '21sec', '56%', '19', '180%', '24sec', '59%', '18', '190%', '27sec', '62%', '17', '200%', '30sec', '65%', '16');

skilldata[48] = new Array('Stone Curse', 10, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7);
skilldesc[48] = new Array('Stone Curse, curses a target spending 1 Red Gemstone. The target will be stoned after few seconds, The HP amount of the target will be decreased by 1% every 5 seconds until the remaining amount of HP becomes 1.', 'Cannot be used on boss monsters or the undead. The level and LUK stat of a target affects the skill duration. This skill makes the target become the Earth property for the skills duration. Lv 6 and above does not require a red gemstone if skill fails.', 4, 1, 10, 2, 'Stone Curse chance', 'SP consumption'
, '24%', '25', '28%', '24', '32%', '23', '36%', '22', '40%', '21', '44%', '20', '48%', '19', '52%', '18', '56%', '17', '60%', '16');

skilldata[49] = new Array('Fire Bolt', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8);
skilldesc[49] = new Array('Strike a target with fire falling from the sky. Skill level affects the number of fire bolts that the caster can use at a time. Has a delay after a use.', ' - ', 4, 1, 10, 3, 'Numbers of Bolt', 'Casting Time', 'SP consumption'
, '1', '0.7sec', '12', ' 2', '1.4sec', '14', '3', '2.1sec', '16', '4', '2.8sec', '18', '5', '3.5sec', '20', '6', '4.2sec', '22', ' 7', '4.9sec', '24', '8', '5.6sec', '26', '9', '6.3sec', '28', '10', '7sec', '30');

skilldata[50] = new Array('Fire Ball', 10, 0, 2, 49, 0, 0, 0, 0, 4, 0, 0, 0, 0, 9);
skilldesc[50] = new Array('Summon a fire ball to collide with a target. The fire ball does splash damage around the target within a 5*5 = 25 cell radiust. The splashed damage deals 3/4 of the damage the target has taken. Skill level affects on the amount of damage. Has a 1.5 delay before and after a use.', 'Consumes 25 SP regardless of the skill level.', 4, 1, 10, 1, 'ATK(MATK)'
, '95%', '100%', '105%', '110%', '115%', '120%', '125%', '130%', '135%', '140%');

skilldata[51] = new Array('Fire Wall', 10, 0, 2, 42, 50, 0, 0, 0, 1, 5, 0, 0, 0, 10);
skilldesc[51] = new Array('Create a fire wall on the ground between a target and the caster. All monsters except the undead take 50% damage of the Magic attack strength of the caster and are knocked back at the same time when they attempt to walk across the fire wall.', 'Skill level affects on the strength of fire wall. This skill is fire property and can be cast 3 walls at a time. Consumes 40 SP regardless of the skill level.', 3, 1, 10, 3, 'Numbers of Knocking Enemy', 'Skill Duration', 'Casting Time'
, '3 times', '4sec', '2sec', ' 4 times', '8sec', '1.85sec', '5 times', '12sec', '1.7sec', '6 times', '16sec', '1.55sec', '7 times', '20sec', '1.4sec', '8 times', '24sec', '1.25sec', ' 9 times', '28sec', '1.1sec', '10 times', '32sec', '0.95sec', '11 times', '36sec', '0.8sec', '12 times', '40sec', '0.65sec');

skilldata[52] = new Array('Lightning Bolt', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11);
skilldesc[52] = new Array('Strike a target with lightening bolts. Skill level affects the number of bolts that the caster can summon at a time.', 'Has a delay after use.', 4, 1, 10, 3, 'Number of bolt', 'Casting Time', 'SP consumption'
, '1', '0.7sec', '12', ' 2', '1.4sec', '14', '3', '2.1sec', '16', '4', '2.8sec', '18', '5', '3.5sec', '20', '6', '4.2sec', '22', ' 7', '4.9sec', '24', '8', '5.6sec', '26', '9', '6.3sec', '28', '10', '7sec', '30');

skilldata[53] = new Array('Thunder Storm', 10, 0, 2, 52, 0, 0, 0, 0, 4, 0, 0, 0, 0, 12);
skilldesc[53] = new Array('Summon numerous lightening bolts on a chosen spot. The thunderstorm does splash damage 5*5 = 25 cells around the chosen spot at the same time. 1 lightening bolt does 80% damage of the casters magic attack strength.', 'Skill level affects the number of lightening bolts the caster can summon at a time.', 3, 1, 10, 2, 'Casting Time', 'SP consumption'
, '1sec', '29', '2sec', '34', '3sec', '39', '4sec', '44', '5sec', '49', '6sec', '54', '7sec', '59', '8sec', '64', '9sec', '69', '10sec', '74');

// 3) Archer
skilldata[81] = new Array('Owls Eye', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[81] = new Array('Increases DEX. The dex added by this skill is showed up on the status window as + with bonus stat points.', ' - ', 0, 1, 10, 1, '+ DEX'
, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10');

skilldata[82] = new Array('Vultures Eye', 10, 0, 0, 81, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[82] = new Array('Increases accuracy rate and attack range. When mastered, it addes 5 cells + 10 cells = total 15 cells more attack range.', ' - ', 0, 1, 10, 2, 'Range Increment', '+ Accuracy Rate'
, '+1', '+1', '+2', '+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10');

skilldata[83] = new Array('Improve Concentration', 10, 1, 1, 82, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[83] = new Array('Increases DEX and AGI temporarily for a skill duration, detects hidden enemies within 3*3 = 9 cells around the caster at the same time.', ' - ', 0, 1, 10, 3, '+ AGI / DEX', 'Required SP', 'Skill Duration'
, '+3%', '25', '60sec', ' +4%', '30', '80sec', '+5%', '35', '100sec', '+6%', '40', '120sec', '+7%', '45', '140sec', '+8%', '50', '160sec', ' +9%', '55', '180sec', '+10%', '60', '200sec', '+11%', '65', '220sec', '+12%', '70', '240sec');

skilldata[84] = new Array('Double Strafe', 10, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13);
skilldesc[84] = new Array('Double hit an Enemy with 1 shot. This skill doesnt consume any arrows when casted, so even if the caster doesnt have any arrows left, this skill is still usable.', 'Consumes 12 SP regardless of the skill level. Fixed Cast Delay of 0.3sec.', 4, 1, 10, 1, 'ATK'
, '100% x 2', '110% x 2', '120% x 2', '130% x 2', '140% x 2', '150% x 2', '160% x 2', '170% x 2', '180% x 2', '190% x 2');

skilldata[85] = new Array('Arrow Shower', 10, 0, 2, 84, 0, 0, 0, 0, 5, 0, 0, 0, 0, 14);
skilldesc[85] = new Array('Does splash damage 5*5 = 25 cells around a target. The target hit by the skill is forced 2 cells back. This skill also doesnt require any arrow to be used as Double Strafe skill.', 'Consumes 15 SP regardless of the skill level. Fixed Cast Delay of 0.3sec.', 4, 1, 10, 1, 'ATK'
, '80%', '85%', '90%', '95%', '100%', '105%', '110%', '115%', '120%', '125%');

skilldata[86] = new Array('Arrow Repel', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15);
skilldesc[86] = new Array('', '', 0, 0, 0, 0);

// 4) Acolyte
skilldata[121] = new Array('Divine Protection', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[121] = new Array('Increases the defence of the user against undead and demon monsters.', ' - ', 0, 1, 10, 1, 'Additional DEF'
, '3', '6', '9', '12', '15', '18', '21', '24', '27', '30');

skilldata[122] = new Array('Demon Bane', 10, 0, 0, 121, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[122] = new Array('Increases the attack strength of the user against undead and demon monsters.', ' - ', 0, 1, 10, 1, 'Attack Strength Added'
, '3', '6', '9', '12', '15', '18', '21', '24', '27', '30');

skilldata[123] = new Array('Ruwach', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16);
skilldesc[123] = new Array('Summons a holy light around the caster to detect and attack hidden enemies within its range.', 'Does holy attack by 145% of the maximum attack strength of the caster, consumes 10 SP.', 0, 0, 10, 0);

skilldata[124] = new Array('Pneuma', 1, 0, 1, 126, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[124] = new Array('Shield an area (3+3+3 = 9 cells) that protects characters within from long range physical attacks.', 'Cannot be overlapped on the same area. Requires 10 SP.', 3, 0, 10, 0);

skilldata[125] = new Array('Teleport', 2, 0, 1, 123, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[125] = new Array('Instantly moves the caster to a different location.', 'At skill level 1, the skill moves the caster to a random spot within the same map, at skill lvl 2, it moves the caster to a save point. Consumes 10 SP at lvl 1, 9 SP at lvl 2.', 0, 0, 10, 0);

skilldata[126] = new Array('Warp Portal', 4, 0, 1, 125, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[126] = new Array('Using a Blue Gemstone creates a portal which transports targets to a save point. The warped portal will close when the maximum capacity is full or after the skills duration.', 'You can save a total of 3 locations to warp to by using the /memo command, the casters save point will be automatically shown as a warp location allowing a total of 4 warp points for this skill. The maximum capacity of people that the caster can warp at a time is 8 regardless of its skill level. Has a 1 second casting delay.', 3, 1, 4, 3, 'Skill Duration', 'Warp Point', 'SP consumption'
, '10sec', 'Kafra', '35', ' 15sec', 'Kafra+1', '32', '20sec', 'Kafra+2', '29', '25sec', 'Kafra+3', '26');

skilldata[127] = new Array('Heal', 10, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17);
skilldesc[127] = new Array('This skill works in 2 ways - Restores HP of a target or does damage on undead monsters. The amount of HP restoration is affected by the base lvl, skill lvl and INT of the caster.', 'Can heal monsters by pressing the SHIFT key and using this skill. Can deal holy attack with undead monsters by half of the basic healing amount. Has a 1 second delay after use.', 1, 1, 10, 1, 'SP consumption'
, '13', '16', '19', '22', '25', '28', '31', '34', '37', '40');

skilldata[128] = new Array('Increase Agi', 10, 1, 1, 127, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[128] = new Array('Doubles the moving speed and AGI of a target, giving the target a faster attack and flee rate. ', 'When used it consumes SP and 15 HP. Has a 1 second delay after use.', 1, 1, 10, 3, 'SP consumption', 'AGI Increment', 'Skill Duration'
, '18', '3', '60sec', ' 21', '4', '80sec', '24', '5', '100sec', '27', '6', '120sec', '30', '7', '140sec', '33', '8', '160sec', ' 36', '9', '180sec', '39', '10', '200sec', '42', '11', '220sec', '45', '12', '240sec');

skilldata[129] = new Array('Decrease Agi', 10, 1, 1, 128, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[129] = new Array('Decreases the moving speed of a target and AGI by a low chance. Targets attack and flee become slower. This skill does not work on boss monsters.', 'Level and INT of the caster affects the success rate. Magic defence of a target lowers the success rate. Has a 1 second delay before and after use.', 4, 1, 10, 4, 'SP consumption', 'AGI Decrement', 'Success Chance', 'Skill Duration'
, '15', '3', '53%', '40sec', '17', '4', '56%', '50sec', '19', '5', '59%', '60sec', '21', '6', '62%', '70sec', '23', '7', '65%', '80sec', '25', '8', '68%', '90sec', '27', '9', '71%', '100sec', '29', '10', '74%', '110sec', '31', '11', '77%', '120%', '33', '12', '80%', '130sec');

skilldata[130] = new Array('Aqua Benedicta', 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[130] = new Array('Creates Holy Water out normal water. Requires 10 SP for use.', 'Has a 2 second delay after use.', 0, 0, 10, 0);

skilldata[131] = new Array('Signum Crusis', 10, 0, 1, 122, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[131] = new Array('Decreases the defence of undead and shadow property monsters, this skill has a wide range. However this skill works by a low chance, when successful, the targets will have (...) emoticon above their head. Lasts until the target is killed. This skill consumes a fixed amount of SP which is 35.', 'The higher the level difference is between the caster and the target, the higher success rate it has. Has a 0.5 second casting time and a 2 second delay after a use.', 0, 1, 10, 2, 'DEF Decrement', 'Chance'
, '-12', '27%', '-14', '29%', '-16', '31%', '-18', '33%', '-20', '35%', '-22', '37%', '-24', '39%', '-26', '41%', '-28', '43%', '-30', '45%');

skilldata[132] = new Array('Angelus', 10, 0, 1, 121, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[132] = new Array('Increases the defence rate of the caster and party members in one screen for the skills duration. ', 'Has a 0.5 second casting delay and 3.5 second delay after use.', 0, 1, 10, 3, 'DEF by VIT', 'Skill Duration', 'SP consumption'
, '105%', '30sec', '23', ' 110%', '60sec', '26', '115%', '90sec', '29', '120%', '120sec', '32', '125%', '150sec', '35', '130%', '180sec', '38', ' 135%', '210sec', '41', '140%', '240sec', '44', '145%', '270sec', '47', '150%', '300sec', '50');

skilldata[133] = new Array('Blessing', 10, 1, 1, 121, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[133] = new Array('Increases STR, INT, DEX of a target for the skills duration.', 'This skill cures Curse and Stone Curse. When used against a undead monsters while pressing the SHIFT key, it can Curse the monster.', 0, 1, 10, 3, 'STR/DEX/INT<br>Increment', 'Skill Duration', 'SP consumption'
, '1', '60sec', '28', ' 2', '80sec', '32', '3', '100sec', '36', '4', '120sec', '40', '5', '140sec', '44', '6', '160sec', '48', ' 7', '180sec', '52', '8', '200sec', '56', '9', '220sec', '60', '10', '240sec', '64');

skilldata[134] = new Array('Cure', 1, 0, 3, 127, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[134] = new Array('Cures cursed status, Silence, Chaos and Blind.', 'Requires 15 SP for use, when used on undead monsters, it causes Chaos effect on them (This ability is not implemented). Has a 1 second delay after use.', 0, 0, 10, 0);

skilldata[135] = new Array('Holy Light', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18);
skilldesc[135] = new Array('', '', 0, 0, 0, 0);

// 5) Merchant
skilldata[161] = new Array('Enlarge Weight Limit', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[161] = new Array('Increases the weight limit of the character.', ' - ', 0, 1, 10, 1, 'Weight Limit Increment'
, '+200', '+400', '+600', '+800', '+1000', '+1200', '+1400', '+1600', '+1800', '+2000');

skilldata[162] = new Array('Discount', 10, 0, 0, 161, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[162] = new Array('Allows to purchse items from NPC shops at a lower price.', 'Skill level affects the discount amount.', 0, 1, 10, 1, 'Discount %'
, '7%', '9%', '11%', '13%', '15%', '17%', '19%', '21%', '23%', '24%');

skilldata[163] = new Array('Overcharge', 10, 0, 0, 162, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[163] = new Array('When selling items to NPC shops, the normal selling price is 50% of the buying price for the item.', 'When learning this skill, Merchant characters can sell their items at higher price than 50%.', 0, 1, 10, 1, 'Overcharge %'
, '7%', '9%', '11%', '13%', '15%', '17%', '19%', '21%', '23%', '24%');

skilldata[164] = new Array('Pushcart', 10, 0, 0, 161, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[164] = new Array('Allows its user to rent a cart from Kafra employees. A total of a 100 items can be stored in a cart, but their weight is limited to 8000.', 'When a cart is equipped it decreases the moving speed of the user, the moving speed can be recovered by mastering this Pushcart skill.', 0, 0, 10, 0);

skilldata[165] = new Array('Item Appraisal', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[165] = new Array('Allows its user to identify unknown items without using magnifiers.', '10 SP required.', 0, 0, 10, 0);

skilldata[166] = new Array('Vending', 10, 0, 1, 164, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[166] = new Array('Allows Merchants to open shops when they equip a cart.', 'Only allows to sell items in the cart inventory, the maximum price is limitted as 10,000,000 zeny. At lvl 1, Merchants can vend only 3 items at once, skill level affects on the numbers of items the user can sell at once. Consumes 30 SP regardless of the skill level.', 0, 1, 10, 1, 'Vending Items'
, '3 ea', '4 ea', '5 ea', '6 ea', '7 ea', '8 ea', '9 ea', '10 ea', '11 ea', '12 ea');

skilldata[167] = new Array('Mammonite', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19);
skilldesc[167] = new Array('Does great damage on a target by spending enormous amount of zeny.', 'Consumes 5 SP regardless of the skill level, however the amount of zeny is affected by the skill level.', 0, 4, 10, 2, 'Zeny', 'ATK'
, '100z', '150%', '200z', '200%', '300z', '250%', '400z', '300%', '500z', '350%', '600z', '400%', '700z', '450%', '800z', '500%', '900z', '550%', '1000z', '600%');

skilldata[168] = new Array('Cart Revolution', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
skilldesc[168] = new Array('', '', 0, 0, 0, 0);

// 6) Thief
skilldata[201] = new Array('Double Attack', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[201] = new Array('Delivers double blows at a time when using dagger class weapon by chance.', ' - ', 0, 1, 10, 1, 'Chance'
, '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%');

skilldata[202] = new Array('Improve Dodge', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[202] = new Array('Improves flee rate.', 'Grants +10 FLEE to Assassins who master this skill.', 0, 1, 10, 1, 'Flee Rate'
, '3%', '6%', '9%', '12%', '15%', '18%', '21%', '24%', '27%', '30%');

skilldata[203] = new Array('Steal', 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[203] = new Array('Imcreases the chance of stealing items from monsters. Consumes 10 SP regardless of the skill level. ', 'Skill level and DEX affect on the success chance.', 0, 4, 10, 1, 'Success Chance'
, '13%', '16%', '19%', '22%', '25%', '28%', '31%', '34%', '37%', '40%');

skilldata[204] = new Array('Hide', 10, 0, 1, 203, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[204] = new Array('Buries oneself under the ground to avoid enemies. However, insect, Demon and boss monsters detect this skill.', 'Consumes 10 SP for casting and continually drains certain amount of SP while hiding. SP and HP are not restored automatically while hiding.', 0, 1, 10, 2, 'Skill Duration', 'SP consumption'
, '30 sec', 'SP 1 / 5sec', '60 sec', 'SP 1 / 6sec', '90 sec', 'SP 1 / 7sec', '120 sec', 'SP 1 / 8sec', '150 sec', 'SP 1 / 9sec', '180 sec', 'SP 1 / 10sec', '210 sec', 'SP 1 / 11sec', '240 sec', 'SP 1 / 12sec', '270 sec', 'SP 1 / 13sec', '300 sec', 'SP 1 / 14sec');

skilldata[205] = new Array('Envenom', 10, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21);
skilldesc[205] = new Array('Poisons and attacks a target at the same time. The target receives damage when hit by this skill and the HP of the target is continually decreased after that. ', 'VIT of the target affects on the chance of being poisoned.When hit by this skill, the defence of the target is decreased. Consumes 12 SP regardless of the skill level, doesnt work on boss monsters.', 0, 4, 10, 2, 'Poison Chance', 'ATK'
, '14%', '+15', '18%', '+30', '22%', '+45', '26%', '+60', '30%', '+75', '34%', '+90', '38%', '+105', '42%', '+120', '46%', '+135', '50%', '+150');

skilldata[206] = new Array('Detoxify', 1, 0, 1, 205, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[206] = new Array('Cure a poisoned target.', ' - ', 1, 0, 0, 0);

skilldata[207] = new Array('Sand Attack', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22);
skilldesc[207] = new Array('', '', 0, 0, 0, 0);

skilldata[208] = new Array('Throw Stone', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23);
skilldesc[208] = new Array('', '', 0, 0, 0, 0);

// 7) Taekwon Boy
skilldata[241] = new Array('Sprint', 10, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[241] = new Array('Enable the caster to run with incredible speed.', 'At levels 7 and above, this skill endows the caster with the Spurt status, which will temporarily increase STR for 150 Seconds if the caster stops running and is barehanded. Spurt status is canceled if the caster equips a weapon. Each level of the Sprint skill increases its user barehanded damage by +10.', 0, 1, 10, 3, '+ Dmg', 'Cast Time', 'SP Cost'
, '+10', '6', '100', '+20', '5', '90', '+30', '4', '80', '+40', '3', '70', '+50', '2', '60', '+60', '1', '50', '+70', '0', '40', '+80', '0', '30', '+90', '0', '20', '+100', '0', '10');

skilldata[242] = new Array('Leap', 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[242] = new Array('Leap to a targeted cell within the skill\'s range. So long as the targeted cell is not dead or inaccesibble, the caster can leap over walls and obstacles.', 'Leap cannot be used in areas where Fly Wings are disabled, except for WoE (Guild War) maps.', 0, 1, 5, 2, 'Range', 'Cast Time'
, '2', '5', '4', '4', '6', '3', '8', '2', '10', '1');

skilldata[243] = new Array('Tornado Kick', 7, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91);
skilldesc[243] = new Array('<b>Caster must be in Tornado Stance to perform this skill</b> which will attack all enemies within a 5*5 cell area around the caster.', 'Soul Linkers cannot perform this skill.', 4, 1, 7, 2, 'ATK', 'SP Cost'
, '180%', '14', '200%', '12', '220%', '10', '240%', '8', '260%', '6', '280%', '4', '300%', '2');

skilldata[244] = new Array('Tornado Stance', 1, 0, 1, 243, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[244] = new Array('Enable a 15% chance of automatically entering Tornado Stance when the caster successfully hits a target.', 'Has a Cast Time of 0 sec and costs 1 SP. Soul Linkers cannot perform this skill.', 0, 0, 0, 0);

skilldata[245] = new Array('Heel Drop', 7, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92);
skilldesc[245] = new Array('<b>Caster must be in Heel Drop Stance to perform this skill</b> which will inflict damage and cause the Stun effect for 3 Seconds on the targeted enemy.', 'Soul Linkers cannot perform this skill.', 4, 1, 7, 2, 'ATK', 'SP Cost'
, '180%', '14', '200%', '12', '220%', '10', '240%', '8', '260%', '6', '280%', '4', '300%', '2');

skilldata[246] = new Array('Heel Drop Stance', 1, 0, 1, 245, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[246] = new Array('Enable a 15% chance of automatically entering Heel Drop Stance when the caster successfully hits a target.', 'Has a Cast Time of 0 Sec. Costs 1 SP. Soul Linkers cannot perform this skill. ', 0, 0, 0, 0);

skilldata[247] = new Array('Roundhouse', 7, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93);
skilldesc[247] = new Array('<b>Caster must be in Roundhouse Stance to perform this skill</b> which will damage its target and and push back enemies around the target. Enemies that are pushed do not receive any damage.', 'Soul Linkers cannot perform this skill.', 4, 1, 7, 2, 'ATK', 'SP Cost'
, '220%', '14', '250%', '12', '280%', '10', '310%', '8', '340%', '6', '370%', '4', '400%', '2');

skilldata[248] = new Array('Roundhouse Stance', 1, 0, 1, 247, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[248] = new Array('Enable a 15% chance of automatically entering Roundhouse Stance when the caster successfully hits a target.', 'Has a Cast Time of 0 Sec. Costs 1 SP.Soul Linkers cannot perform this skill.', 0, 0, 0, 0);

skilldata[249] = new Array('Counter Kick', 7, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 94);
skilldesc[249] = new Array('<b>Caster must be in Counter Kick Stance to perform this skill</b> which will always hit its target.', 'Soul Linkers cannot perform this skill.', 4, 1, 7, 2, 'ATK', 'SP Cost'
, '220%', '14', '250%', '12', '280%', '10', '310%', '8', '340%', '6', '370%', '4', '400%', '2');

skilldata[250] = new Array('Counter Kick Stance', 1, 0, 1, 249, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[250] = new Array('Enable a 20% chance of automatically entering Counter Kick Stance when the caster successfully hits a target.', 'Has a Cast Time of 0 Sec. Costs 1 SP. Soul Linkers cannot perform this skill.', 0, 0, 0, 0);

skilldata[251] = new Array('Flying Kick', 7, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95);
skilldesc[251] = new Array('Attack a distant enemy with a kick that instantly close the gap between the target and the player.', 'When in Tumbling status, the caster\'s Base Level affects the amount of inflicted damage. Flying Kick will have increased damage affected by Base Level during Sprint status. If Spurt and Sprint statuses are both active, Flying Kick will inflict enhanced damage. Flying Kick will also cancel most positive statuses on the target, which include Spirit statuses endowed by Soul Linkers, One Hand Quicken, Kaahi, Kaite, and the Berserk Potion effect. However, Stalkers can protect themselves from this positive status removal effect with their Preserve skill. Soul Linkers cannot perform this skill.', 4, 1, 7, 2, 'Damage', 'SP Cost'
, '40%', '70', '50%', '60', '60%', '50', '70%', '40', '80%', '30', '90%', '20', '100%', '10');

skilldata[252] = new Array('Tumbling', 1, 0, 1, 251, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0);
skilldesc[252] = new Array('Enable a 20% chance of blocking long ranged physical attacks.', 'When caster is in Spurt status (after performing Lv 7 Sprint or higher), Tumbling will also block other kinds of attacks. Costs 1 SP.', 0, 0, 0, 0);

skilldata[253] = new Array('Peaceful Break', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[253] = new Array('When two or more Taekwon Class characters sit next to each other, HP will be restored for both characters.', 'This HP restoration is affected by VIT and enhanced by an additional 30 HP with the /doridori command.', 0, 1, 10, 1, 'HP Restoration'
, '30', '60', '90', '120', '150', '180', '210', '240', '270', '300');

skilldata[254] = new Array('Happy Break', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[254] = new Array('When two or more Taekwon Class characters sit next to each other, SP will be restored for both characters.', 'his SP restoration is affected by Max SP and enhanced by an additional 3 SP with the /doridori command. Using the /doridori command while in Happy Break status will make it last for 30 minutes. During this status, the caster will have a low chance of using the Earth Spike spell scroll, with a 10% chance at Skill Level 1, and a 1% chance at Skill Level 10. Using the Earth Spike scroll during this status will consume 10 SP.', 0, 1, 10, 1, 'SP Restoration'
, '3', '6', '9', '12', '15', '18', '21', '24', '27', '30');

skilldata[255] = new Array('Kihop', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[255] = new Array('Increase Attack Power based on the number of Party Members on the same map.', 'Normal attacks, and skills with up to 500% power, inflict an amount of additional according to the skill\'s level.', 0, 1, 5, 1, 'Increase per Person'
, '2%', '4%', '6%', '8%', '10%');

skilldata[256] = new Array('Mild Wind', 7, 0, 7, 253, 254, 255, 0, 0, 5, 5, 5, 0, 0, 0);
skilldesc[256] = new Array('Summon a wind that will enchant the caster\'s attacks for 5 minutes with an elemental property based on the level of the cast skill.', 'Mild Wind is instant casting, and with the sole exception of holy element endow, mild wind will not cancel if you change weapons.', 0, 1, 7, 2, 'Property', 'SP Cost'
, 'Earth', '20', 'Wind', '20', 'Water', '20', 'Fire', '20', 'Ghost', '50', 'Shadow', '50', 'Holy', '50');

skilldata[257] = new Array('Taekwon Mission', 1, 0, 0, 255, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[257] = new Array('Activating this skill will display the current monster target for the Taekwon Mission. Taekwon Boys and Girls will earn 1 Taekwon Mission Point by defeating 100 target monsters. Fulfilling the 100 target monster quota will begin a new Taekwon Mission with a randomly chosen target. Mini Boss and Boss monsters will never be chosen as targets.', 'Taekwon characters that achieve the Top 10 Taekwon Ranking by earning the most Taekwon Mission Points can string combos with the Tornado Kick, Roundhouse, Heel Drop, and Counter Kick skills. Taekwon Rankers at Base Level 90 and above with have tripled Max HP and SP, and will be able to use all Taekwon Boy and Girl skills. This skill is disabled once a character changes to an advanced job, such as Taekwon Master or Soul Linker.', 0, 0, 0, 0);


// 8) Ninja
skilldata[281] = new Array('Dagger Throwing Practice', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[281] = new Array('Increase Shuriken damage.', 'This bonus damage completely bypasses all defense and hits the target even in cases where you normally would miss. This skill only increases the damage of Throw Shuriken.', 0, 1, 10, 1, 'Damage'
, '+3', '+6', '+9', '+12', '+15', '+18', '+21', '+24', '+27', '+30');

skilldata[282] = new Array('Throw Shuriken', 10, 0, 2, 281, 0, 0, 0, 0, 1, 0, 0, 0, 0, 96);
skilldesc[282] = new Array('Throw a Shuriken at a target from a distance of up to 9 cells away from the caster.', 'Shurikens are not modified by % increase cards, but the damage can be boosted by using cards and equipment which boost your attack such as andre cards and icepick. Throw Shuriken can be cast as fast as your attack speed, and has no cast time or delay. This skill increases Shuriken damage by 4 each time its level is increased, and consumes 2 SP regardless of skill level.', 4, 1, 10, 1, 'Damage'
, '+4', '+8', '+12', '+16', '+20', '+24', '+28', '+32', '+36', '+40');

skilldata[283] = new Array('Throw Kunai', 5, 0, 2, 282, 0, 0, 0, 0, 5, 0, 0, 0, 0, 97);
skilldesc[283] = new Array('Throw a Kunai that will strike its target 3 times in one attack from up to 9 cells away.', 'Does a total of 300% attack and bypasses defense. Kunais are not modified by % increase cards, but the damage can be boosted by using cards and equipment which boost your attack such as andre cards and icepick.', 4, 1, 5, 1, 'SP Cost'
, '30', '25', '20', '15', '10');

skilldata[284] = new Array('Throw Huuma Shuriken', 5, 0, 2, 281, 283, 0, 0, 0, 5, 5, 0, 0, 0, 98);
skilldesc[284] = new Array('Throw a Huuma Shuriken that will damage its target and any nearby enemies within 3x3 radius.', 'The total amount of damage is divided among the enemies damaged by this skill. Raising this skill\'s level increases its number of strikes. Damage is not influenced by Dagger Throwing Practice. Has an interruptible 3 sec. cast time and 1 sec. delay. ', 0, 1, 5, 2, 'ATK', 'SP Cost'
, '300%', '20', '450%', '25', '600%', '30', '750%', '35', '900%', '40');

skilldata[285] = new Array('Throw Coins', 10, 0, 2, 281, 284, 0, 0, 0, 10, 5, 0, 0, 0, 99);
skilldesc[285] = new Array('Throw money at a target to inflict an amount of Defense piercing damage equal to the amount of zeny spent in the attack.', 'This skill is followed by a 5 second Cast Delay, and its damage is reduced against Boss monsters (1/2) and in PvP (% reductions). Has a 5 sec. delay. Consumes 50 SP regardless of the skill\'s level. ', 4, 1, 10, 1, 'Zeny Used'
, '500~1000', '1000~2000', '1500~3000', '2000~4000', '2500~5000', '3000~6000', '3500~7000', '4000~8000', '4500~9000', '5000~10000');

skilldata[286] = new Array('Flip Tatami', 5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100);
skilldesc[286] = new Array('Flip tatami to cause the 4*4 area around the caster to ignore long range physical damage for 3 seconds and push back and damage surrounding enemies.', 'Each cast is followed by a 3 second cast delay, and has the chance to damage and push enemies 3 cells backward if they are within the skill\'s attack range. Consumes 15 SP regardless of the skill\'s level.', 0, 1, 5, 2, 'ATK', 'Range'
, '110%', '1 cell', '120%', '2 cells', '130%', '2 cells', '140%', '3 cells', '150%', '3 cells');

skilldata[287] = new Array('Shadow Leap', 5, 0, 1, 286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[287] = new Array('This skill instantly moves the caster to a targeted cell, ignoring obstacles in the caster\'s way. ', 'Shadow Leap can only be performed when the caster is in Hiding status (through the Haze Slasher skill or Smokie card). In WoE, this is used to only get you out of hiding. Consumes 10 SP regardless of the skill\'s level.', 0, 1, 5, 1, 'Leap Distance'
, '6 cells', '7 cells', '8 cells', '9 cells', '10 cells');

skilldata[288] = new Array('Haze Slasher', 10, 0, 2, 287, 0, 0, 0, 0, 1, 0, 0, 0, 0, 101);
skilldesc[288] = new Array('Strike an enemy, and then immediately enter the Hiding status; can be followed by the Shadow Leap or Shadow Slash skill.', 'If your hit strikes, your character becomes hidden. If you miss, you will not be put into hiding. Has a Cast Delay of 1.5 sec.', 4, 1, 10, 3, 'Damage', 'Hide Duration', 'SP Cost'
, '110%', '30 sec', '10', '120%', '60 sec', '12', '130%', '90 sec', '14', '140%', '120 sec', '16', '150%', '150 sec', '18', '160%', '180 sec', '20', '170%', '210 sec', '22', '180%', '240 sec', '24', '190%', '270 sec', '26', '200%', '300 sec', '28');

skilldata[289] = new Array('Shadow Slash', 5, 0, 2, 288, 0, 0, 0, 0, 5, 0, 0, 0, 0, 102);
skilldesc[289] = new Array('Strike a target with an attack whose range is equal to the caster\'s Shadow Leap range.', 'Shadow Slash can only be performed during Hiding status, which can be enabled by the Haze Slasher skill. When used, you teleport to your target and strike the opponent. Shadow Slash is restricted in WoE, and can only be cast on adjacent targets.', 4, 1, 5, 3, 'ATK', 'Critical', 'SP Cost'
, '100%', '+30%', '14', '200%', '+35%', '16', '300%', '+40%', '18', '400%', '+45%', '20', '500%', '+50%', '22');

skilldata[290] = new Array('Cicada Skin Shed', 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[290] = new Array('Enable Cicada Skin Shed status, which enables caster to automatically dodge a set number of attacks (even while casting).', 'Each special dodge is followed by a backward movement of 7 cells. When the number of attacks reaches the skill\'s limit, Cicada Skin Shed status is canceled. Has a Cast Delay of 1.5 sec.', 0, 1, 5, 3, '# Dodges', 'Duration', 'SP Cost'
, '1', '20 sec', '12', '1', '30 sec', '15', '2', '40 sec', '18', '2', '50 sec', '21', '3', '60 sec', '24');

skilldata[291] = new Array('Ninja Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[291] = new Array('Increase SP Restoration Speed by training in the Ninja Arts.', 'The amount of SP restored by this skill is affected by the character\'s Max SP. Restores SP every 10 sec while not moving or attacking.', 0, 1, 10, 1, 'SP Restoration'
, '+3', '+6', '+9', '+12', '+15', '+18', '+21', '+24', '+27', '+30');

skilldata[292] = new Array('Flaming Petals', 10, 0, 2, 291, 0, 0, 0, 0, 1, 0, 0, 0, 0, 103);
skilldesc[292] = new Array('Inflict Fire property damage at a target by shooting flaming petals.', 'his skill\'s level affects the number of strikes, and each strike causes an amount of damage equal to 90% of the caster\'s MATK (up to 900%). There is no Cast Delay. No item required.', 4, 1, 10, 2, 'Cast Time', 'SP Cost'
, '0.7 sec', '18', '1.4 sec', '20', '2.1 sec', '22', '2.8 sec', '24', '3.5 sec', '26', '4.2 sec', '28', '4.9 sec', '30', '5.6 sec', '32', '6.3 sec', '34', '7.0 sec', '36');

skilldata[293] = new Array('Blaze Shield', 10, 0, 1, 292, 0, 0, 0, 0, 5, 0, 0, 0, 0, 104);
skilldesc[293] = new Array('Summon a blazing storm in a 5*5 cell area around the caster that will deliver multiple strikes to enemies within its range. ', 'The Blaze Shield lasts for 20 seconds, but is automatically canceled after inflicting its maximum number of strikes to each cell. Does 50% MATK to any enemy who comes within range. This skill has a 1 second Cast Delay. Can be canceled out by Magnetic Earth. Each cast consumes 1 Flame Stone. Consumes 25 SP regardless of the skill\'s level.', 0, 1, 10, 2, '# Hits', 'Cast Time'
, '5', '6.0 sec', '5', '5.5 sec', '6', '5.0 sec', '6', '4.5 sec', '7', '4.0 sec', '7', '3.5 sec', '8', '3.0 sec', '8', '2.5 sec', '9', '2.0 sec', '9', '1.5 sec');

skilldata[294] = new Array('Exploding Dragon', 5, 0, 2, 291, 293, 0, 0, 0, 10, 7, 0, 0, 0, 105);
skilldesc[294] = new Array('Summon a flaming dragon that will inflict 3 strikes on all enemies in a 5*5 cell area around the cell targeted by this skill.', 'Has a Cast Time and Cast Delay of 3 seconds. Each cast consumes 1 Flame Stone.', 3, 1, 5, 2, 'ATK', 'SP Cost'
, 'MATK +300%', '20', 'MATK +450%', '25', 'MATK +600%', '30', 'MATK +750%', '35', 'MATK +900%', '40');

skilldata[295] = new Array('Freezing Spear', 10, 0, 2, 291, 0, 0, 0, 0, 1, 0, 0, 0, 0, 106);
skilldesc[295] = new Array('Summon spears of ice that will strike a targeted enemy multiple times.', 'Each strike inflicts an amount of damage that is equal to 70% of the caster\'s MATK (rumored to be 100%). No item Requirement.', 4, 1, 10, 3, '# of Hits', 'Cast Time', 'SP Cost'
, '3', '0.7 sec', '15', '4', '1.4 sec', '18', '5', '2.1 sec', '21', '6', '2.8 sec', '24', '7', '3.5 sec', '27', '8', '4.2 sec', '30', '9', '4.9 sec', '33', '10', '5.6 sec', '36', '11', '6.3 sec', '39', '12', '7.0 sec', '42');

skilldata[296] = new Array('Watery Evasion', 10, 0, 4, 295, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[296] = new Array('Create a water pool that will affect enemies within range by decreasing their AGI and reducing Movement Speed by 50%.', 'All Ninja Class characters, including the caster, are immune to these AGI and Movement Speed penalties. The area targeted by Watery Evasion will increase the damage of the Freezing Spear skill, and enable the use of Water Ball and Aqua Benedicta for other players. Cancels out Blaze Shield and cannot be cast on cells with Magnetic Earth. Has a Cast Time and Cast Delay of 3 seconds. Each cast consumes 1 Ice Stone.', 3, 1, 10, 4, 'AGI Penalty', 'Range', 'Duration', 'SP Cost'
, '0', '3x3', '15 sec', '15', '-3', '3x3', '20 sec', '18', '-3', '3x3', '25 sec', '21', '-5', '5x5', '30 sec', '24', '-5', '5x5', '35 sec', '27', '-5', '5x5', '40 sec', '30', '-5', '7x7', '45 sec', '33', '-8', '7x7', '50 sec', '36', '-8', '7x7', '55 sec', '39', '-8', '8x8', '60 sec', '42');

skilldata[297] = new Array('Snow Flake Draft', 5, 0, 2, 296, 291, 0, 0, 0, 7, 10, 0, 0, 0, 107);
skilldesc[297] = new Array('Summon a meteor of ice that will damage enemies in a 7*7 cell area around the caster.', 'Cannot be used on Magnetic Earth. Freeze chance is reduced by mDef and Luck. Each cast consumes 1 Ice Stone.', 0, 1, 5, 4, 'ATK', 'Freeze', 'Cast Time', 'SP Cost'
, 'MATK +150%', '20%', '2.0 sec', '40', 'MATK +200%', '30%', '2.5 sec', '45', 'MATK +250%', '40%', '3.0 sec', '50', 'MATK +300%', '50%', '3.5 sec', '55', 'MATK +350%', '60%', '4.0 sec', '60');

skilldata[298] = new Array('Wind Blade', 10, 0, 2, 291, 0, 0, 0, 0, 1, 0, 0, 0, 0, 108);
skilldesc[298] = new Array('Shoot a shearing blade of air that will inflict Wind property damage to a targeted enemy.', 'Deals 100% MATK, for up to 600% total. The skill has a Cast Delay of 1 second. There is no item requirement.', 4, 1, 10, 3, '# of Hits', 'Cast Time ', 'SP Cost'
, '1', '1.0 sec', '12', '2', '2.0 sec', '14', '2', '2.0 sec', '16', '3', '3.0 sec', '18', '3', '3.0 sec', '20', '4', '4.0 sec', '22', '4', '4.0 sec', '24', '5', '5.0 sec', '26', '5', '5.0 sec', '28', '6', '6.0 sec', '30');

skilldata[299] = new Array('Lightning Jolt', 5, 0, 2, 298, 0, 0, 0, 0, 5, 0, 0, 0, 0, 109);
skilldesc[299] = new Array('Summon lightning bolts around the caster to damage enemies within the skill\'s range.', 'Does a single hit and cannot be used on Magnetic Earth. Has a Cast Time of 4 seconds and no Cast Delay. Each cast consumes 1 Wind Stone.', 0, 1, 5, 3, 'ATK', 'Range', 'SP Cost'
, 'MATK +200%', '5x5', '16', 'MATK +240%', '5x5', '20', 'MATK +280%', '7x7', '24', 'MATK +320%', '7x7', '28', 'MATK +360%', '9x9', '32');

skilldata[300] = new Array('First Wind', 5, 0, 2, 291, 299, 0, 0, 0, 10, 5, 0, 0, 0, 110);
skilldesc[300] = new Array('Shoot a blade of sharp wind that will slash all enemies between the caster and the skill\'s target.', 'Has a damage width of 3 cells along its path. Has a Cast Time of 4 seconds and no Cast Delay. Each cast consumes 1 Wind Stone.', 4, 1, 5, 3, 'ATK Range', 'Range', 'SP Cost'
, 'MATK +200%', '5 cells', '24', 'MATK +300%', '6 cells', '28', 'MATK +400%', '7 cells', '32', 'MATK +500%', '8 cells', '36', 'MATK +600%', '9 cells', '40');

skilldata[301] = new Array('Ninja Aura', 5, 0, 7, 291, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[301] = new Array('Focus spritual energy to enter Ninja Aura status, which endows the caster with INT and STR bonuses at the cost of 5% HP.', 'Ninja Aura status enables the use of the Mirror Image and Killing Strike skills, although using those skills will cancel Ninja Aura. Has no Cast Delay.', 0, 1, 5, 5, 'STR', 'INT', 'Duration', 'Cast Time', 'SP Cost'
, '+1', '+1', '30 sec', '5.0 sec', '20', '+2', '+2', '45 sec', '4.0 sec', '30', '+3', '+3', '60 sec', '3.0 sec', '40', '+4', '+4', '75 sec', '2.0 sec', '50', '+5', '+5', '90 sec', '1.0 sec', '60');

skilldata[302] = new Array('Killing Strike', 10, 0, 2, 281, 289, 301, 0, 0, 7, 5, 1, 0, 0, 111);
skilldesc[302] = new Array('Sacrifice the caster\'s remaining HP to inflict devastating damage to the targeted enemy.', 'The amount of remaining HP and STR affects the damage inflicted, and each cast of this skill will always reduce the caster\'s HP to 1. The skill boosts the caster\'s STR by +40 and always hits. It can be blocked/reduced by ranged skill nullifiers like Pnuema. The damage it deals is always neutral, and has no Cast Time or Delay. ', 4, 1, 10, 2, 'HP Efficiency', 'SP Cost'
, '8%', '55', '16%', '60', '24%', '65', '32%', '70', '40%', '75', '48%', '80', '56%', '85', '64%', '90', '72%', '95', '80%', '100');

skilldata[303] = new Array('Mirror Image', 10, 0, 1, 289, 290, 301, 0, 0, 3, 4, 1, 0, 0, 0);
skilldesc[303] = new Array('Create a mirror image that will enable the caster to dodge a set number of long and short range physical attacks. ', 'Mirror Image can only be cast during Ninja Aura status and cannot be used to block or evade magic based attacks. Can be removed with Dispell. Has a Cast Delay of 1 second. Consumes 1 Shadow Orb.', 0, 1, 10, 4, 'Hits Blocked', 'Duration', 'Cast Time', 'SP Cost'
, '1', '60 sec', '4.0 sec', '30', '1', '80 sec', '3.5 sec', '32', '2', '100 sec', '3.0 sec', '34', '2', '120 sec', '2.5 sec', '36', '3', '140 sec', '2.0 sec', '38', '3', '160 sec', '1.5 sec', '40', '4', '180 sec', '1.0 sec', '42', '4', '200 sec', '1.0 sec', '44', '5', '220 sec', '1.0 sec', '46', '5', '240 sec', '1.0 sec', '48');

// 9) Gunslinger
skilldata[321] = new Array('Snake Eyes', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[321] = new Array('Increase attack range and Accuracy when equipped with a Pistol Class Weapon.', 'Snake Eye affects the range of the skills Rapid Shower, Piercing Shot, Full Buster, Spread Attack, and Ground Drift.', 0, 1, 10, 2, 'Accuracy', 'Range'
, '+1', '+1', '+2', '+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10');

skilldata[322] = new Array('Single Action', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[322] = new Array('Essential Gunslinger skill that enables Gunslingers to fire their weapons more quickly and accurately.', 'Raising this skill\'s level will increase Accuracy and Attack Speed.', 0, 1, 10, 2, 'Hit Rate', 'ASPD'
, '+2', '+1%', '+4', '+1%', '+6', '+2%', '+8', '+2%', '+10', '+3%', '+12', '+3%', '+14', '+4%', '+16', '+4%', '+18', '+5%', '+20', '+5%');

skilldata[323] = new Array('Chain Action', 10, 0, 0, 322, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[323] = new Array('Enables the chance of firing two shots in a single attack while fighting enemies when equipped with a Pistol Class Weapon.', 'Raising this skill\'s level increases the chance of firing these double shots.', 0, 1, 10, 1, 'Chance'
, '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%');

skilldata[324] = new Array('Trigger Happy Shot', 10, 0, 2, 323, 0, 0, 0, 0, 3, 0, 0, 0, 0, 112);
skilldesc[324] = new Array('Consume 5 bullets to perform a rapidfire 5 shot attack.', 'Requires a Pistol Class Weapon. Consumes 5 bullets.', 4, 1, 10, 2, 'ATK', 'SP Cost'
, '550%', '22', '600%', '24', '650%', '26', '700%', '28', '750%', '30', '800%', '32', '850%', '34', '900%', '36', '950%', '38', '1000%', '40');

skilldata[325] = new Array('Desperado', 10, 0, 2, 324, 0, 0, 0, 0, 5, 0, 0, 0, 0, 113);
skilldesc[325] = new Array('Perform a haphazard attack that may damage enemies within a 7x7 cell radius around the caster. ', 'Each cast has a maximum of 10 strikes, and requires a Pistol Class Weapon. Bypasses Pnuema, but can be blocked by Safety Wall (considered short range). Ranged bonuses do not take affect. Has a 1 second Cast Delay. Consumes 10 bullets.', 4, 1, 10, 2, 'ATK', 'SP Cost'
, '100%', '32', '150%', '34', '200%', '36', '250%', '38', '300%', '40', '350%', '42', '400%', '44', '450%', '46', '500%', '48', '550%', '50');

skilldata[326] = new Array('Gatling Fever', 10, 0, 7, 324, 325, 0, 0, 0, 7, 5, 0, 0, 0, 0);
skilldesc[326] = new Array('Temporarily increase Attack Speed and damage at the cost of reducing Flee Rate and Movement Speed.', 'Gatling Fever status is canceled when this skill is double cast. ASPD boost stacks with Last Stand. Requires Gatling Gun Class Weapon.', 0, 1, 10, 5, 'ATK', 'ASPD', 'Flee', 'Duration', 'SP Cost'
, '+30', '+2%', '-5', '30 sec', '30', '+40', '+4%', '-10', '45 sec', '32', '+50', '+6%', '-15', '60 sec', '34', '+60', '+8%', '-20', '75 sec', '36', '+70', '+10%', '-25', '90 sec', '38', '+80', '+12%', '-30', '105 sec', '40', '+90', '+14%', '-35', '120 sec', '42', '+100', '+16%', '-40', '135 sec', '44', '+110', '+18%', '-45', '150 sec', '46', '+120', '+20%', '-50', '165 sec', '48');

skilldata[327] = new Array('Tracking', 10, 0, 2, 322, 0, 0, 0, 0, 5, 0, 0, 0, 0, 114);
skilldesc[327] = new Array('Carefully aim at a target to inflict devastating damage.', 'Raising this skill\'s level increases Cast Time and damage. Cast Time cannot be modified, by Dex, skills, or equipment and is interruptible. There is no Cast Delay. Pistol or Rifle Class weapon required to use Tracking. Consumes 1 bullet.', 4, 1, 10, 3, 'ATK', 'Cast Time', 'SP Cost'
, '300%', '1.2 sec', '15', '400%', '1.4 sec', '20', '500%', '1.6 sec', '25', '600%', '1.8 sec', '30', '700%', '2.0 sec', '35', '800%', '2.2 sec', '40', '900%', '2.4 sec', '45', '1000%', '2.6 sec', '50', '1100%', '2.8 sec', '55', '1200%', '3.0 sec', '60');

skilldata[328] = new Array('Wounding Shot', 5, 0, 2, 327, 0, 0, 0, 0, 5, 0, 0, 0, 0, 115);
skilldesc[328] = new Array('Inflict Defense piercing damage that has the chance of causing the Bleeding effect on its target.', 'Has a Cast Time of 1.5 seconds and no Cast Delay. Requires a Pistol or Rifle Class Weapon. Consumes 1 bullet.', 4, 1, 5, 3, 'ATK', 'Bleed Chance', 'SP COST'
, '120%', '3%', '11', '140%', '6%', '12', '160%', '9%', '13', '180%', '12%', '14', '200%', '15%', '15');

skilldata[329] = new Array('Disarm', 5, 0, 2, 327, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0);
skilldesc[329] = new Array('Shoot an enemy\'s appendages to render it incapable of attacking.', 'This skill\'s success rate increases as its level is raised. When used on monsters, this skill will reduce Atk by 25%, but has no effect on Boss monsters. Disarm has a fixed range of 7 cells, and requires a Pistol or Rifle Class Weapon. Consumes 1 bullet.', 4, 1, 5, 2, 'Success', 'SP Cost'
, '3%', '15', '6%', '20', '9%', '25', '12%', '30', '15%', '35');

skilldata[330] = new Array('Crowd Control Shot', 10, 0, 2, 322, 0, 0, 0, 0, 5, 0, 0, 0, 0, 116);
skilldesc[330] = new Array('Fire a close range shot that will push an enemy 5 cells backward.', 'Considered a close range attack. Does not receive bonuses from ranged bonuses and is not affected by Pnuema. Has a 1 second Cast Time and 1 second Cast Delay. Requires a Shotgun Class Weapon. Consumes 1 bullet.', 4, 1, 10, 2, 'ATK', 'SP Cost'
, '150%', '3', '200%', '6', '250%', '9', '300%', '12', '350%', '15', '400%', '18', '450%', '21', '500%', '24', '550%', '27', '600%', '30');

skilldata[331] = new Array('Full Blast', 10, 0, 2, 330, 0, 0, 0, 0, 3, 0, 0, 0, 0, 117);
skilldesc[331] = new Array('Inflict devastating damage to an enemy by firing multiple blasts at once.', 'This skill has a small chance of causing the Blind status to the caster, and can consume up to 10 bullets per cast. Requires a Shotgun Class Weapon.', 4, 1, 10, 5, 'ATK', 'Cooldown', 'Blind Chance', 'SP Cost', 'Bullets'
, '400%', '1.2 sec', '2%', '20', '2', '500%', '1.4 sec', '3%', '25', '2', '600%', '1.6 sec', '6%', '30', '4', '700%', '1.8 sec', '8%', '35', '4', '800%', '2.0 sec', '10%', '40', '6', '900%', '2.2 sec', '12%', '45', '6', '1000%', '2.4 sec', '14%', '50', '8', '1100%', '2.6 sec', '16%', '55', '8', '1200%', '2.8 sec', '18%', '60', '10', '1300%', '3.0 sec', '20%', '65', '10');

skilldata[332] = new Array('Spread Shot', 10, 0, 2, 331, 0, 0, 0, 0, 5, 0, 0, 0, 0, 118);
skilldesc[332] = new Array('Consume 5 bullets to spread damage over a large area.', 'Requires a Shotgun Class Weapon.', 4, 1, 10, 3, 'ATK', 'Radius', 'SP Cost'
, '100%', '3x3', '15', '120%', '3x3', '20', '140%', '3x3', '25', '160%', '5x5', '30', '180%', '5x5', '35', '200%', '5x5', '40', '220%', '7x7', '45', '240%', '7x7', '50', '260%', '7x7', '55', '280%', '9x9', '60');

skilldata[333] = new Array('Gunslinger Mine', 10, 0, 6, 331, 332, 0, 0, 0, 5, 7, 0, 0, 0, 119);
skilldesc[333] = new Array('Plant Bullet Spheres into the ground that will explode upon enemy approach.', 'The explosion\'s effect varies according to the type of bullet planted. Requires a Grenade Launcher Class Weapon.<ul><li>Fire Sphere: 5 cell knock back<li>Wind Sphere: Stun Chance<li>Poison Sphere: Poison Chance<li>Blinding Sphere: Bliding Chance<li> Ice Sphere: Freeze Chance</ul>', 3, 1, 10, 3, 'Bonus Dmg', 'Duration', 'SP Cost'
, '+50', '3 sec', '4', '+100', '6 sec', '8', '+150', '9 sec', '12', '+200', '12 sec', '16', '+250', '15 sec', '20', '+300', '18 sec', '24', '+350', '21 sec', '28', '+400', '24 sec', '32', '+450', '27 sec', '36', '+500', '30 sec', '40');

skilldata[334] = new Array('Coin Flip', 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[334] = new Array('Consume 1 zeny to flip a coin. If it lands showing heads, the caster will gain 1 coin, but if it shows tails, the caster will lose 1 coin.', 'The caster can have a maximum of 10 coins, and increasing this skill\'s level raises the success rate of flipping a coin that will show heads. Gunslinger coins are displayed as glowing orbs around the caster. Each coin grants +3 ATK bonus, for a maximum of +30 ATK. Costs 2 SP to use.', 0, 1, 5, 1, 'Success'
, '30%', '40%', '50%', '60%', '70%');

skilldata[335] = new Array('Increase Accuracy', 1, 0, 7, 321, 334, 0, 0, 0, 10, 5, 0, 0, 0, 0);
skilldesc[335] = new Array('Consume 4 coins to add +20 Accuracy, +4 DEX, and +4 AGI for a 1 minute duration.', 'Has a Cast Delay of 1 second.', 0, 1, 1, 5, 'Hit', 'Agi/Dex', 'Duration', 'Coins', 'SP Cost'
, '+20', '+4', '60 sec', '4', '30');

skilldata[336] = new Array('Magical Bullet', 1, 0, 2, 334, 0, 0, 0, 0, 1, 0, 0, 0, 0, 120);
skilldesc[336] = new Array('Consume 1 coin to fire a magic shot that does not use any bullets, inflicting an amount of Ghost property damage equal to the caster\'s ATK + MATK.', 'Nothing needs to be equipped when using this skill. Consumes 7 SP', 0, 0, 0, 0);

skilldata[337] = new Array('Cracker', 1, 0, 4, 334, 0, 0, 0, 0, 1, 0, 0, 0, 0, 121);
skilldesc[337] = new Array('Consume 1 coin to fire a bullet that will shock an enemy, causing the Stun status.', 'The nearer the target is to the caster, the greater the chance of inflicting the Stun status. Has a Cast Delay of 1 seconds.<br>Stun Chance = 30%-60%.<br>Stun Length = 5 seconds.', 4, 0, 0, 0);

skilldata[338] = new Array('Coin Fling', 1, 0, 4, 334, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[338] = new Array('Flick a coin at an enemy to reduce their defenses.', 'Drops both Vit Def and Armor Def, based on number of coins used. The effect lasts for 30 seconds. In PVP, this only reduces Vit Def, and cannot be stacked. Costs 10 SP per use, and can use up to 5 coins per use.', 4, 1, 5, 1, 'Def Reduced'
, '5%', '10%', '15%', '20%', '25%');

skilldata[339] = new Array('Triple Action', 1, 0, 5, 323, 334, 0, 0, 0, 10, 1, 0, 0, 0, 122);
skilldesc[339] = new Array('Spend 1 coin to shoot an enemy 3 times in one attack.', 'Each hit damages your enemy at 150% each, for a total of 450%. It uses 20 SP, 1 coin, 1 bullet, and has no Cast Time or Delay.', 0, 0, 0, 0);

skilldata[340] = new Array('Last Stand', 1, 0, 0, 326, 334, 0, 0, 0, 10, 4, 0, 0, 0, 0);
skilldesc[340] = new Array('Consume 4 coins to activate Last Stand status in which the caster is immobilized, but has +100 Atk and +20% Aspd.', 'Last Stand has a 15 second duration, and cannot be used with Gunslinger\'s Panic. Has a Cast Time of 3 seconds, and Cast Delay of  4 seconds. Consumes 30 SP and 4 coins.', 0, 0, 0, 0);

skilldata[341] = new Array('Gunslinger\'s Panic', 1, 0, 7, 329, 334, 0, 0, 0, 5, 4, 0, 0, 0, 0);
skilldesc[341] = new Array('Consume 2 coins to activate the Gunslinger\'s Panic status in which caster has +30 Flee Rate and receives 20% less damage from long range physical attacks, but has -30 Accuracy.', 'This skill has a 20 second duration, and cannot be used together with the Last Stand skill. Has a Cast Time and Delay of 1 second. Consumes 15 SP and 2 Coins.', 0, 0, 0, 0);

skilldata[342] = new Array('Bull\'s Eye', 1, 0, 2, 327, 334, 0, 0, 0, 10, 5, 0, 0, 0, 123);
skilldesc[342] = new Array('Consume 1 coin to inflict 500% damage to Demihuman and Brute monsters.', 'Bull\'s Eye has a 0.1% chance to inflict the Coma effect (brought to 1 hp, 1 sp) on all enemies except Boss monsters. Consumes 30 SP, 1 coin, and 1 bullet.', 4, 0, 0, 0);

// 10)
// 11)
// 12)
// 13)
// 14) Knight
skilldata[521] = new Array('Spear Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[521] = new Array('Increase the damage of spears by +4 per skill level, with an additional +1 if the knight is riding a Peco Peco.', ' - ', 0, 1, 10, 2, 'Attack Strength Added by lvl', 'Attack Strength Added by lvl<br>(on Peco Peco)'
, '4', '5', '8', '10', '12', '15', '16', '20', '20', '25', '24', '30', '28', '35', '32', '40', '36', '45', '40', '50');

skilldata[522] = new Array('Pierce', 10, 0, 2, 521, 0, 0, 0, 0, 1, 0, 0, 0, 0, 24);
skilldesc[522] = new Array('Strike an enemy repeatedly with spears. The size of the monster has an affect on the numbers of hits dealt to the target. The attack does 200% a normal hit, multiplied by the additional hits depending on the size of the monster. Consumes 7 SP regardless of skill lvl', 'Small size monster: 1 hit (200% damage)<br>Medium size monster: 2 hits (200% damage x 2 hits = 400% damage)<br>Large size monster: 3 hits (200% damage x 3 hits = 600% damage)', 4, 1, 10, 2, 'Additional ATK', '+ Accuracy'
, '110%', '+5', '120%', '+10', '130%', '+15', '140%', '+20', '150%', '+25', '160%', '+30', '170%', '+35', '180%', '+40', '190%', '+45', '200%', '+50');

skilldata[523] = new Array('Brandish Spear', 10, 0, 2, 524, 529, 0, 0, 0, 3, 1, 0, 0, 0, 25);
skilldesc[523] = new Array('Attacks all enemies within range and pushes them 2 cells back with a spear while on a Peco Peco. Consumes 12 SP regardless of skill level', 'This skill has a 1 second delay before and after use, DEX affects the delay time. This spell cannot be interrupted while being attacked. Range affects on the amount of damage done, the closer mosters are to the user, the more damage can be dealt.', 4, 1, 10, 2, 'Splash Attack Range', 'ATK'
, '(1)', '120%', '(1)', '140%', '(1)', '160%', '(1)+(2)', '180%', '(1)+(2)', '200%', '(1)+(2)', '220%', '(1)+(2)+(3)', '240%', '(1)+(2)+(3)', '260%', '(1)+(2)+(3)', '280%', '(1)+(2)+(3)+(4)', '300%');

skilldata[524] = new Array('Spear Stab', 10, 0, 2, 522, 0, 0, 0, 0, 5, 0, 0, 0, 0, 26);
skilldesc[524] = new Array('With this skill you push back a target using the spear. It can also attack other enemies between the user and the target at the same time. Enemy is pushed back 6 cells and consumes 9 SP regardless of skill level.', 'This skill is very useful in case the user needs to run away from many monsters following or to rescue somebody from a dangerous situation.', 4, 1, 10, 1, 'Additional ATK'
, '120%', '140%', '160%', '180%', '200%', '220%', '240%', '260%', '280%', '300%');

skilldata[525] = new Array('Spear Boomerang', 5, 0, 2, 522, 0, 0, 0, 0, 3, 0, 0, 0, 0, 27);
skilldesc[525] = new Array('Attack a monster in the distance by throwing a spear like a boomerang. The attack properties differ by weapon property. Consumes 10 SP regardless of skill level', 'There is a 1 second skill delay after using this skill.', 4, 1, 5, 2, 'Attack Range', 'Additional ATK'
, '+3', '150%', '+5', '200%', '+7', '250%', '+9', '300%', '+11', '350%');

skilldata[526] = new Array('Two Hand Quicken', 10, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[526] = new Array('Increases attack speed for the skills duration when using two handed sword weapons.', 'This skill can be canceled by the Decrease AGI skill or entering an area that the Quagmire skill has been casted on.', 0, 1, 10, 3, 'Skill Duration', '% Increment', 'SP consumption'
, '30sec', '21%', '14', '60sec', '22%', '18', '120sec', '23%', '26', '140sec', '24%', '28', '150sec', '25%', '30', '180sec', '26%', '34', '210sec', '27%', '38', '240sec', '28%', '42', '270sec', '29%', '46', '300sec', '30%', '50');

skilldata[527] = new Array('Counter Attack', 5, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 28);
skilldesc[527] = new Array('This passive skill counters attacks and defends the user at the same time. However this skill only works for an enemy who is facing the user. Increases accuracy rate by 20, doubles critical hit rate but that doesnt mean the user can hit the target without failure. Consumes 3 SP regardless of skill level.', 'While using this skill, a specific skill gauge shows above the head of the character, the character cannot move for the skill duration.', 0, 1, 5, 1, 'Skill Duration'
, '0.4sec', '0.8sec', '1.2sec', '1.6sec', '2sec');

skilldata[528] = new Array('Bowling Bash', 10, 0, 2, 2, 4, 6, 526, 527, 5, 10, 3, 10, 5, 29);
skilldesc[528] = new Array('This skill knocks a target back, that target hits other targets so all enemies within range get damaged as a result.', 'Accuracy of the skill is affected by the position of the first target and its movement, it`s advised to lure targets into a group before using this skill for better results. This skill has a 1 second delay before and after use, DEX affects the delay time. This spell cannot be interrupted while being attacked.', 4, 1, 10, 3, 'ATK', 'Sliding Range of Enemy (cell)', 'SP consumption'
, '150%', '1', '13', ' 200%', '1', '14', '250%', '2', '15', '300%', '2', '16', '350%', '3', '17', '400%', '3', '18', '450%', '4', '19', '500%', '4', '20', '550%', '5', '21', '600%', '5', '22');

skilldata[529] = new Array('Peco Peco Riding', 1, 0, 0, 7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[529] = new Array('Allows the user to mount a Peco Peco. Riding a Peco Peco increases the moving speed of a character.', 'Peco Pecos can be purchased from an NPC located in front of the North West Prontera Knight Building. Usually the spear does 75% of the original damage to medium size monsters, however on a Peco Peco the spear does 100% damage. ', 0, 0, 0, 0);

skilldata[530] = new Array('Cavalier Mastery', 5, 0, 0, 529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[530] = new Array('Riding a Peco Peco reduces attack speed, by learning this skill the user can gain attack speed.', ' - ', 0, 1, 5, 1, 'ATK Speed'
, '60%', '70%', '80%', '90%', '100%');

// 15) Wizard
skilldata[561] = new Array('Fire Pillar', 10, 0, 2, 51, 0, 0, 0, 0, 1, 0, 0, 0, 0, 30);
skilldesc[561] = new Array('Installs a magical landmine of fire property on a chosen spot with consuming 1 Blue Gemstone. The landmine does continuous fire damage when an enemy steps on it for a skill duration. This skill is not usable on a spot already occupied by enemies and near traps or another fire pillar.', 'This skill does (MATK/5) + 50 damage per one attack of the fire landmine.', 3, 1, 10, 4, 'No. of Hit', 'Skill Duration', 'Casting Time', 'Required SP'
, '3', '30sec', '3sec', '25', '4', '30sec', '2.7sec', '25', '5', '30sec', '2.4sec', '25', '6', '30sec', '2.1sec', '25', '7', '30sec', '1.8sec', '25', '8', '30sec', '1.5sec', '25', '9', '30sec', '1.2sec', '25', '10', '30sec', '0.9sec', '25', '11', '30sec', '0.6sec', '25', '12', '30sec', '0.3sec', '25');

skilldata[562] = new Array('Sight Thrasher', 10, 0, 2, 42, 52, 0, 0, 0, 1, 1, 0, 0, 0, 31);
skilldesc[562] = new Array('Only usable while using Sight. Spreads the fire ball around the caster to 8 directions, does fire damage and pushes back the enemies around the caster at the same time.', 'Has a 0.5 second casting time and a 2 seconds delay after a use.', 0, 1, 10, 3, 'ATK(MATK)', 'Range', 'SP consumption'
, '120%', '+1 cells', '35', ' 140%', '+1 cells', '37', '160%', '+2 cells', '39', '180%', '+2 cells', '41', '200%', '+3 cells', '43', '220%', '+3 cells', '45', '240%', '+4 cells', '47', '260%', '+4 cells', '49', '280%', '+5 cells', '51', '300%', '+5 cells', '53');

skilldata[563] = new Array('Fire Ivory', 10, 0, 2, 590, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0);
skilldesc[563] = new Array('Not Implemented', ' -', 0, 0, 0, 0);

skilldata[564] = new Array('Meteor Storm', 10, 0, 2, 53, 562, 0, 0, 0, 1, 2, 0, 0, 0, 32);
skilldesc[564] = new Array('Summons Meteors from the sky to the chosen spot to do fire splash damage around the spot. One hit does the same amount of damage as the caster`s MATK, skill level affects the number of meteors cast.', 'Has a 15 second casting time regardless of the skill level.', 3, 1, 10, 4, 'Numbers of Meteor', 'Numbers of Hit', 'Required SP', 'Delay'
, '2 ea', '1 time', '20', '2.5sec', '3 ea', '1 time', '24', '3sec', '3 ea', '2 time', '30', '3.5sec', '4 ea', '2 time', '34', '4sec', '4 ea', '3 time', '40', '4.5sec', '5 ea', '3 time', '45', '5sec', '5 ea', '4 time', '50', '5.5sec', '6 ea', '4 time', '54', '6sec', '6 ea', '5 time', '60', '6.5sec', '7 ea', '5 time', '64', '7sec');

skilldata[565] = new Array('Jupiter Thunder', 10, 1, 2, 43, 52, 0, 0, 0, 1, 1, 0, 0, 0, 33);
skilldesc[565] = new Array('Throws a lightening ball that delievers numerous blows to a target.', 'The target is forced back as many cells as the numbers of hit it`s taken.', 4, 1, 10, 3, 'Numbers of Hit', 'Required SP', 'Casting Time'
, '3 times', '20', '2.5sec', '4 times', '23', '3sec', '5 times', '26', '3.5sec', '6 times', '29', '4sec', '7 times', '32', '4.5sec', '8 times', '35', '5sec', '9 times', '38', '5.5sec', '10 times', '41', '6sec', '11 times', '44', '6.5sec', '12 times', '47', '7sec');

skilldata[566] = new Array('Lord of Vermillion', 10, 0, 2, 53, 565, 0, 0, 0, 1, 5, 0, 0, 0, 34);
skilldesc[566] = new Array('Drop numerous thunderbolt explosions on the chosen ground. Enemies within the area will receive damages 4 times for 4 seconds. For instance, if the casters mastered this skill, 280% * 4 = maximum 1120% damage will be dealt with them.', 'When skill level goes higher, the casting time is reduced. Also has a 5 seconds delay after a use.', 3, 1, 10, 3, 'Required SP', 'ATK(MATK)', 'Casting Time (sec)'
, '45', '100%', '15', '48', '120%', '14.5', '51', '140%', '14', '54', '160%', '13.5', '57', '180%', '13', '60', '200%', '12.5', '63', '220%', '12', '66', '240%', '11.5', '69', '260%', '11', '72', '280%', '10.5');

skilldata[567] = new Array('Waterball', 5, 1, 2, 46, 52, 0, 0, 0, 1, 1, 0, 0, 0, 35);
skilldesc[567] = new Array('Create a powerful water ball from the water under the caster that delivers numerous blows to a target.', 'At lvl 1 this skill uses water within 1 cell, at lvl 2~3 this skill uses water within 3*3= 9 cells, at 4~5 this skill uses 5*5 = 25 cells.', 4, 1, 5, 4, 'Target Cell', 'ATK(MATK)', 'SP consumption', 'Casting Time'
, '1 Cell', '130%', '5', '1sec', '9 Cells', '160%', '10', '2sec', '9 Cells', '190%', '15', '3sec', '25 Cells', '220%', '20', '4sec', '25 Cells', '250%', '25', '5sec');

skilldata[568] = new Array('Icewall', 10, 0, 1, 47, 48, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[568] = new Array('Shield 5 cells in front of the caster with ice wall.', 'Consumes 50 of the wall durability every second, when being attacked, the wall durabilty is decreased as much as the damage amount it`s taken. When the wall durabilty becomes 0, this skill is canceled.', 3, 1, 10, 2, 'Wall Durability', 'Required SP'
, '400', '20', '600', '20', '800', '20', '1000', '20', '1200', '20', '1400', '20', '1600', '20', '1800', '20', '2000', '20', '2200', '20');

skilldata[569] = new Array('Frost Nova', 10, 0, 1, 568, 0, 0, 0, 0, 1, 0, 0, 0, 0, 36);
skilldesc[569] = new Array('Freezes all enemies around the player in a 5x5 radius and has a chance to freeze them. Not usable on boss monsters. The freezing chance and the Skill Duration are the same as Frost Diver skill.', 'Cast Time is not affected by DEX. Has a 1 second delay after a use. The amount of damage is the same as half the damage of Frost Driver.', 4, 1, 10, 2, 'Casting Time', 'Required SP'
, '8.5sec', '45', '8sec', '43', '7.5sec', '41', '7sec', '39', '6.5sec', '37', '6sec', '35', '5.5sec', '33', '5sec', '31', '4.5sec', '29', '4sec', '27');

skilldata[570] = new Array('Storm Gust', 10, 0, 2, 47, 565, 0, 0, 0, 1, 3, 0, 0, 0, 37);
skilldesc[570] = new Array('Summons blizzard on the chosen area. The enemies hit by the blizzard are forced back to random directions, the blizzard freezes enemies when hit 3 times.', 'However boss and undead monsters are impossible to freeze. The blizzard summoned by this skill does 10 times attacks. Has a 5 seconds delay after a use.', 3, 1, 10, 3, 'ATK', 'Casting Time', 'Required SP'
, '140%', '6sec', '78', '180%', '7sec', '78', '220%', '8sec', '78', '260%', '9sec', '78', '300%', '10sec', '78', '340%', '11sec', '78', '380%', '12sec', '78', '420%', '13sec', '78', '460%', '14sec', '78', '500%', '15sec', '78');

skilldata[571] = new Array('Earth Spike', 5, 0, 2, 48, 0, 0, 0, 0, 1, 0, 0, 0, 0, 38);
skilldesc[571] = new Array('Attacks a target by summoning a stone pillar from the ground.', 'Has a 1 second delay.', 4, 1, 5, 3, 'Numbers of Hit', 'Required SP', 'Casting Time'
, '1 time', '12', '1sec', '2 times', '14', '2sec', '3 times', '16', '3sec', '4 times', '18', '4sec', '5 times', '20', '5sec');

skilldata[572] = new Array('Heavens Drive', 5, 0, 2, 571, 0, 0, 0, 0, 3, 0, 0, 0, 0, 39);
skilldesc[572] = new Array('Summons nemerous stone pillars from the ground within 25 cells(5x5 square).', ' - ', 3, 1, 5, 3, 'Numbers of Hit', 'Required SP', 'Casting Time'
, '1 time', '28', '1sec', '2 times', '32', '2sec', '3 times', '36', '3sec', '4 times', '40', '4sec', '5 times', '44', '5sec');

skilldata[573] = new Array('Quagmire', 5, 0, 1, 572, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[573] = new Array('Create a Marsh on the chosen ground within 25 cells.', 'Decreases AGI and DEX according to skill Lv. Movement speed is decreased by 50%. AGI and DEX of enemies cannot be decreased lower than 50. Can not be used on boss monsters. Consumes 15 SP regardless of the skill level.', 3, 1, 5, 2, 'AGI / DEX Reduction', 'Skill Duration'
, '10%', '5sec', '20%', '10sec', '30%', '15sec', '40%', '20sec', '50%', '25sec');

skilldata[574] = new Array('Sense', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[574] = new Array('Allows the user to analyze various information of a target such as the amount of HP/SP.', 'If the caster is in a party, the whole party members can see the same information of the target.', 0, 0, 0, 0);

// 16) Hunter
skilldata[601] = new Array('Ankle Snare', 5, 0, 5, 615, 0, 0, 0, 0, 1, 0, 0, 0, 0, 40);
skilldesc[601] = new Array('Install a trap which makes an enemy immobile for a while. The enemy is not allowed to do anything but attack.', 'Consumes 12 SP regardless of the skill level.', 3, 1, 5, 2, 'Lasting Time', 'Time Limit'
, '250sec', '4sec', '200sec', '8sec', '150sec', '12sec', '100sec', '16sec', '50sec', '20sec');

skilldata[602] = new Array('Beast Bane', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[602] = new Array('Increases attack strength when fighting with a brute or insect monster.', '', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '4', '8', '12', '16', '20', '24', '28', '32', '36', '40');

skilldata[603] = new Array('Blast Mine', 5, 0, 6, 609, 610, 613, 0, 0, 1, 1, 1, 0, 0, 41);
skilldesc[603] = new Array('Install a trap which explodes 9 cells around with fire property damage.', 'This trap will take some time to be activated after being installed, the caster can move the trap before its activated by attacking the trap. Consumes 10 SP regardless of the skill level.', 2, 1, 5, 1, 'Lasting Time'
, '25sec', '20sec', '15sec', '10sec', '5sec');

skilldata[604] = new Array('Bliz Beat', 5, 0, 2, 607, 0, 0, 0, 0, 1, 0, 0, 0, 0, 42);
skilldesc[604] = new Array('Manages Falcon to deliver blows to a target and enemies in its flight path. Skill level affects on the numbers of blows that Falcon can do, user can manage Falcon to attack 5 times for the maximum.', 'Also this skill adds a chance for Falcon to automatically attack the target the user`s fighting with when the user`s using a bow and arrows. Has a casting time in case the user`s using this skill as active skill not automatic casting skill.', 4, 1, 5, 2, 'Number of Hits', 'Required SP'
, '1', '10', '2', '13', '3', '16', '4', '19', '5', '22');

skilldata[605] = new Array('Claymore', 5, 0, 6, 603, 614, 0, 0, 0, 1, 1, 0, 0, 0, 43);
skilldesc[605] = new Array('Installs a trap which explodes 25 cells around with fire property splash damage.', 'DEX, INT and the skill level affect the amount of damage. Consumes 15 SP regardless of the skill level.', 3, 1, 5, 1, 'Lasting Time'
, '20sec', '40sec', '60sec', '80sec', '100sec');

skilldata[606] = new Array('Detect', 4, 0, 1, 83, 607, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[606] = new Array('Manages Falcon to detect hidden enemies around.', 'Skill level affects on the detecting range of Falcon. Consumes 8 SP regardless of the skill level.', 3, 1, 4, 1, 'Detecting Range'
, '+3 cells', '+5 cells', '+7 cells', '+9 cells');

skilldata[607] = new Array('Falcon Mastery', 1, 0, 0, 602, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[607] = new Array('Allows Hunters to use Falcon, the exclusive sub character for hunter class.', 'You can obtain a falcon from the Hunters Guild.', 0, 0, 0, 0);

skilldata[608] = new Array('Flasher', 5, 0, 5, 615, 0, 0, 0, 0, 1, 0, 0, 0, 0, 44);
skilldesc[608] = new Array('Install a trap which blinds an enemy by emitting a light.', 'Consumes 12 SP regardless of the skill level.', 3, 1, 5, 1, 'Lasting Time'
, '150sec', '120sec', '90sec', '60sec', '30sec');

skilldata[609] = new Array('Freezing Trap', 5, 0, 5, 608, 0, 0, 0, 0, 1, 0, 0, 0, 0, 45);
skilldesc[609] = new Array('Install a trap which attacks and freezes an enemy stepping on it.', 'The chance of freezing is affected by the magic defense of the target, can not be used on boss monsters. Consumes 10 SP regardless of the skill level.', 3, 1, 5, 1, 'Lasting Time'
, '150sec', '120sec', '90sec', '60sec', '30sec');

skilldata[610] = new Array('Land Mine', 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46);
skilldesc[610] = new Array('Install a trap explodes when an enemy steps on it. Does earth property attack, also has a chance to stun the target by chance.', 'DEX, INT and the skill level affects on the amount of damage. Consumes 10 SP regardless of the skill level.', 3, 1, 5, 2, 'ATK', 'Lasting Time'
, '50%', '200sec', '75%', '160sec', '100%', '120sec', '125%', '80sec', '150%', '40sec');

skilldata[611] = new Array('Remove Trap', 1, 0, 1, 610, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[611] = new Array('Remove traps by consuming 5 SP for a use. However it is impossible to remove a trap which is still in active.', 'Obtains one trap item when successfully remove the trap.', 0, 0, 0, 0);

skilldata[612] = new Array('Talkie Box', 1, 0, 5, 611, 614, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[612] = new Array('Install a trap which plays the memorized messages when somebody steps on it. The message is not played for the caster.', 'Consumes 10 SP for a use.', 3, 1, 1, 1, 'Lasting Time'
, '600sec');

skilldata[613] = new Array('Sandman', 5, 0, 5, 608, 0, 0, 0, 0, 1, 0, 0, 0, 0, 47);
skilldesc[613] = new Array('Installs a trap which makes an enemy and near enemies fall asleep when stepped on.', 'The enemies sleeping will not awaken unless they are hit by an attack. Is not usable on boss monsters. Consumes 12 SP regardless of the skill level.', 3, 1, 5, 1, 'Lasting Time'
, '150sec', '120sec', '90sec', '60sec', '30sec');

skilldata[614] = new Array('Shockwave Trap', 5, 0, 5, 601, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[614] = new Array('Installs a trap which drains an enemys SP.', 'Skill level affects on the amount of SP drained by, when mastered this skill, 80% of SP can be drained for the maximum. Consumes 45 SP regardless of the skill level.', 3, 1, 5, 2, 'SP Drain', 'Lasting Time'
, '20%', '200sec', '35%', '160sec', '50%', '120sec', '65%', '80sec', '80%', '40sec');

skilldata[615] = new Array('Skid Trap', 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[615] = new Array('Install a trap to slide an enemy toward a certain direction.', 'Skill level affects on the range of sliding the target. Consumes 10 SP regardless of the skill level.', 3, 1, 5, 2, 'Sliding Range', 'Lasting Time'
, '6 cells', '300sec', '7 cells', '240sec', '8 cells', '180sec', '9 cells', '120sec', '10 cells', '60sec');

skilldata[616] = new Array('Spring Trap', 5, 0, 1, 607, 611, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[616] = new Array('Manages Falcon to remove a trap from a distance.', 'Consumes 10 SP regardless of the skill level.', 3, 1, 5, 1, 'Falcon Range'
, '4 cells', '5 cells', '6 cells', '7 cells', '8 cells');

skilldata[617] = new Array('Steel Crow', 10, 0, 0, 604, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[617] = new Array('Increases Falcon damage.Blitz Beat skill level associates in this skill', '', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '6', '12', '18', '24', '30', '36', '42', '48', '54', '60');

// 17) Priest
skilldata[641] = new Array('Increase SP Recovery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[641] = new Array('Restores SP every 10 seconds while standing still.', 'Every skill level increases the amount of SP restoration by 3, the maximum SP of the user affects on the amount of SP that can be recovered by this skill.', 0, 1, 10, 2, 'Value of Recovery', 'Additional Value of Recovery by MAXSP'
, '3', 'MAXSP 0.2%', '6', 'MAXSP 0.4%', '9', 'MAXSP 0.6%', '12', 'MAXSP 0.8%', '15', 'MAXSP 1.0%', '18', 'MAXSP 1.2%', '21', 'MAXSP 1.4%', '24', 'MAXSP 1.6%', '27', 'MAXSP 1.8%', '30', 'MAXSP 2.0%');

skilldata[642] = new Array('Safety Wall', 10, 0, 1, 646, 648, 0, 0, 0, 4, 3, 0, 0, 0, 0);
skilldesc[642] = new Array('Barrier 1 cell with a magic wall. It protects a character from physical melee attacks.', 'Consumes 1 Blue Gemstone. Cannot be cast on the same cell twice.', 3, 1, 10, 2, 'Guard', 'Required SP'
, '2 times', '30', '2 times', '30', '4 times', '30', '5 times', '35', '6 times', '35', '7 times', '40', '8 times', '40', '9 times', '40', '10 times', '40', '11 times', '40');

skilldata[643] = new Array('Mace Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[643] = new Array('Increases mace weapon damage.', 'Damage added to the maces original damage by this skill, pierces the defence of monsters.', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '3', '6', '9', '12', '15', '18', '21', '24', '27', '30');

skilldata[644] = new Array('Impositio Manus', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[644] = new Array('Amplifies the attack strength of a target for 1 minute skill duration.', '', 1, 1, 5, 2, 'Damage Increment', 'SP consumption'
, '5', '13', '10', '16', '15', '19', '20', '22', '25', '25');

skilldata[645] = new Array('Suffragium', 3, 0, 7, 644, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[645] = new Array('Reduces the casting delay of one skill cast.', 'Can not be used on the caster. Steadily consumes 8 SP regardless of the skill level.', 1, 1, 3, 2, 'Casting Time Decrement', 'Time Limit'
, '-15%', '30sec', '-30%', '20sec', '-45%', '10sec');

skilldata[646] = new Array('Aspersio', 5, 0, 7, 130, 644, 0, 0, 0, 1, 3, 0, 0, 0, 0);
skilldesc[646] = new Array('Endows holy property on weapons for the skills duration.', 'The weapons can deal more damage against undead and shadow property monsters.Consumes 1 "Holy Water" for each use.', 1, 1, 5, 2, 'Skill Duration', 'SP consumption'
, '1 min', '12', '1 min 30sec', '14', '2 min', '16', '2 min 30sec', '18', '3 min', '20');

skilldata[647] = new Array('B.S. Sacramenti', 5, 0, 7, 646, 654, 0, 0, 0, 5, 3, 0, 0, 0, 0);
skilldesc[647] = new Array('Endows holy property on the armor of party members for the skills duration.', 'This skill requires at least 3 characters who are Priests or Acolytes, they should be near the caster when casting this skill. When used, the SP of all characters supporting this skill and the caster is consumed. Priest consume 20 SP, Acolyte consume 10 SP. If there are any undead or demon monster in the range of the cast skill, they will be damaged by holy property.', 2, 1, 5, 1, 'Skill Duration'
, '40sec', '80sec', '120sec', '160sec', '200sec');

skilldata[648] = new Array('Sanctuary', 10, 0, 1, 127, 0, 0, 0, 0, 1, 0, 0, 0, 0, 48);
skilldesc[648] = new Array('Creates a holy area that heals the HP of characters and damages undead monsters. Demon monsters within the area steadily for a skill duration.', 'Consumes 1 Blue Gemstone for a skill use. When undead or demon monsters come into the cast area, they will be knocked back and damaged at the same time.', 3, 1, 10, 4, 'Skill Duration', 'Max people', 'HP Recovery', 'SP consumption'
, '4sec', '4 people', '100/sec', '15', '7sec', '5 people', '200/sec', '18', '10sec', '6 people', '300/sec', '21', '13sec', '7 people', '400/sec', '24', '16sec', '8 people', '500/sec', '27', '19sec', '9 people', '600/sec', '30', '22sec', '10 people', '777/sec', '33', '25sec', '11 people', '777/sec', '36', '28sec', '12 people', '777/sec', '39', '31sec', '13 people', '777/sec', '42');

skilldata[649] = new Array('Status Recovery', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49);
skilldesc[649] = new Array('Recovers abnormal status such as Undead, Frozen, Stone Curse or Stun.', 'When used against undead monsters while pressing Shift key, it Blinds the target by random chance.', 1, 0, 0, 0);

skilldata[650] = new Array('Slow Poison', 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[650] = new Array('Slows the poison effects on the target.', 'However this skill cannot counteract poison status.', 1, 0, 0, 0);

skilldata[651] = new Array('Resurrection', 4, 0, 1, 641, 649, 0, 0, 0, 4, 1, 0, 0, 0, 50);
skilldesc[651] = new Array('Revive a dead character by using 1 Blue Gemstone.', 'Consumes 60 SP regardless of its skill level. It can be usable on monsters while pressing Shift key, this skill has a low chance to kill undead monsters instantly.', 1, 1, 4, 3, 'Casting Time', 'Delay', 'HP amount when revived'
, '6sec', '0sec', '10%', '4sec', '1sec', '30%', '2sec', '2sec', '50%', '0sec', '3sec', '80%');

skilldata[652] = new Array('Kyrie Eleison', 10, 0, 8, 132, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[652] = new Array('Create a barrier around a character that protects them from certain attacks. The magic barrier is affected by the maximum HP of the target. Missed attacks or perfect dodge do not reduce the time of blocked attacks.', 'If an enemy attacks the barrier with more damage amount than the remaining defense strength of the barrier it will be destroyed, the user within the barrier will receive the remaining amount of damage the enemy dealt. The barrier lasts 120 seconds regardless of the skill level.', 1, 1, 10, 2, 'Max Guard no.', 'Required SP'
, '5 times', '20', '6 times', '20', '6 times', '20', '7 times', '25', '7 times', '25', '8 times', '25', '8 times', '30', '9 times', '30', '9 times', '30', '10 times', '40');

skilldata[653] = new Array('Magnificant', 5, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[653] = new Array('Speeds up SP restoration time of the caster and the party members for the skills duration', 'Consumes 40 SP regardless of the skill level.', 2, 1, 5, 1, 'Skill Duration'
, '30sec', '45sec', '60sec', '75sec', '90sec');

skilldata[654] = new Array('Gloria', 5, 0, 8, 652, 653, 0, 0, 0, 4, 3, 0, 0, 0, 0);
skilldesc[654] = new Array('Adds 30 points to LUK for the caster and the party members for the skills duration.', 'Consumes 20 SP regardless of the skill level.', 2, 1, 5, 1, 'Skill Duration'
, '10sec', '15sec', '20sec', '25sec', '30sec');

skilldata[655] = new Array('Lex Divina', 10, 0, 9, 123, 0, 0, 0, 0, 1, 0, 0, 0, 0, 51);
skilldesc[655] = new Array('Silence a target by a low chance.', 'The muted target cannot use any skills for the skills duration. It is not applicable for boss monsters. When used on a target that is already Silenced, this skill cures the Silence status of the target.', 4, 1, 10, 2, 'Skill Duration', 'Required SP'
, '30sec', '20', '35sec', '20', '40sec', '20', '45sec', '20', '50sec', '20', '60sec', '18', '60sec', '16', '60sec', '14', '60sec', '12', '60sec', '10');

skilldata[656] = new Array('Turn Undead', 10, 0, 9, 651, 655, 0, 0, 0, 1, 3, 0, 0, 0, 52);
skilldesc[656] = new Array('Deliver an instant death to undead monsters by a low chance, the chance is affected by LUK, INT, the base level of the caster, and the skill level.', 'Consumes 20 SP regardless of the skill level, even if it fails to kill an undead monster, it will still give damage. Boss monsters are only damaged by this skill.', 4, 0, 0, 0);

skilldata[657] = new Array('Lex Aeterna', 1, 0, 9, 655, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[657] = new Array('Gives double damage to a target for one attack.', 'Consumes 10 SP regardless of the skill level, however it is not applicable for characters that have Stone Curse or Frozen status.', 4, 0, 0, 0);

skilldata[658] = new Array('Magnus Exorcismus', 10, 1, 9, 642, 656, 657, 0, 0, 1, 3, 1, 0, 0, 53);
skilldesc[658] = new Array('Summon a grand cross on the ground. Deals powerful damage to undead, and shadow property monsters.', 'INT of the caster affects on the amount of damage the skill does. Consumes 1 Blue Gemstone.', 3, 1, 10, 2, 'No. of Hits', 'SP consumption'
, '1', '40', '2', '42', '3', '44', '4', '46', '5', '48', '6', '50', '7', '52', '8', '54', '9', '56', '10', '58');

// 18) Blacksmith
skilldata[681] = new Array('Iron Tempering', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[681] = new Array('Allows Blacksmiths to create iron by consuming 1 Iron Ore and 1 Mini-Furnace.', '', 0, 1, 5, 1, 'Success Chance'
, '26%', '32%', '38%', '44%', '50%');

skilldata[682] = new Array('Steel Tempering', 5, 0, 0, 681, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[682] = new Array('Allows Blacksmiths to create Steel by consuming 5 Iron and 1 Mini-Furnce.', '', 0, 1, 5, 1, 'Success Chance'
, '15%', '20%', '25%', '30%', '35%');

skilldata[683] = new Array('Enchantedstone Craft', 5, 0, 0, 681, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[683] = new Array('Allows Blacksmiths to create elemental stones by consuming 10 elemental ores and 1 Mini-Furnace', '', 0, 1, 5, 1, 'Success Chance'
, '15%', '20%', '25%', '30%', '35%');

skilldata[684] = new Array('Oridecon Research', 5, 0, 0, 683, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[684] = new Array('This skill is strictly applied onto creating lvl 3 weapons, the skill level affects the success chance of any lvl 3 weapons created.', '', 0, 0, 0, 0);

skilldata[685] = new Array('Smith Dagger', 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[685] = new Array('Allows Blacksmiths to create various dagger class weapons.', '', 0, 1, 3, 1, 'Success Chance'
, '10%', '20%', '30%');

skilldata[686] = new Array('Smith Sword', 3, 0, 0, 685, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[686] = new Array('Allows Blacksmiths to create various one handed sword class weapons.', '', 0, 1, 3, 1, 'Success Chance'
, '10%', '20%', '30%');

skilldata[687] = new Array('Smith Two-Handed Sword', 3, 0, 0, 686, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[687] = new Array('Allows Blacksmiths to create various two handed sword class weapons.', '', 0, 1, 3, 1, 'Success Chance'
, '10%', '20%', '30%');

skilldata[688] = new Array('Smith Axe', 3, 0, 0, 686, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[688] = new Array('Allows Blacksmiths to create various axe class weapons.', '', 0, 1, 3, 1, 'Success Chance'
, '10%', '20%', '30%');

skilldata[689] = new Array('Smith Mace', 3, 0, 0, 690, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[689] = new Array('Allows Blacksmiths to create various mace class weapons.', '', 0, 1, 3, 1, 'Success Chance'
, '10%', '20%', '30%');

skilldata[690] = new Array('Smith Knucklebrace', 3, 0, 0, 685, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[690] = new Array('Allows Blacksmiths to create various knuckle class weapons.', '', 0, 1, 3, 1, 'Success Chance'
, '10%', '20%', '30%');

skilldata[691] = new Array('Smith Spear', 3, 0, 0, 685, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[691] = new Array('Allows Blacksmiths to create various spear class weapons.', '', 0, 1, 3, 1, 'Success Chance'
, '10%', '20%', '30%');

skilldata[692] = new Array('Hilt Binding', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[692] = new Array('Adds 1 STR and 4 ATK. Also increases duration of Adrenaline Rush, Power Thrust, and Weapon Perfection skills by 10%.', 'Only applicable for weapon the users equipping.', 0, 0, 0, 0);

skilldata[693] = new Array('Ore Discovery', 1, 0, 0, 682, 692, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[693] = new Array('Increases the chance of finding ores from dead monsters.', '', 0, 0, 0, 0);

skilldata[694] = new Array('Weaponry Research', 10, 0, 0, 692, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[694] = new Array('Improves the attack strength of weapons and increases the chance of creating weapons.', 'Accuracy and attack strength are increased by this skill at the same time, it is applicable for all weapons equiped or made. It also carries over its succes in forging with upgrading.', 0, 1, 10, 2, 'Accuracy/Attack Strength Added by lvl', '+ Forging Chance'
, '2', '1%', '4', '2%', '6', '3%', '8', '4%', '10', '5%', '12', '6%', '14', '7%', '16', '8%', '18', '9%', '20', '10%');

skilldata[695] = new Array('Weapon Repair', 1, 0, 1, 694, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[695] = new Array('Allows Blacksmiths to repair damaged weapons by spending 1 Steel.', 'Requires its user to carry Anvil and Iron Hammer. Consumes 5 SP.', 0, 0, 0, 0);

skilldata[696] = new Array('Skin Tempering', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[696] = new Array('Increase tolerance against Fire and Neutral property attacks.', ' - ', 0, 1, 5, 2, 'Fire Resistance', 'Neutral Resistance'
, '5%', '1%', '10%', '2%', '15%', '3%', '20%', '4%', '25%', '5%');

skilldata[697] = new Array('Hammer Fall', 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54);
skilldesc[697] = new Array('Ignite a vibration 25 cells around a chosen spot by hammering that cell with massive power.', 'Any enemies coming into the area get stunned by chance. Only activated when equipping mace or axe class weapons, consumes 10 SP for a skill use.', 3, 1, 5, 1, 'Stun Chance'
, '30%', '40%', '50%', '60%', '70%');

skilldata[698] = new Array('Adrenaline Rush', 5, 0, 1, 697, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[698] = new Array('Increases the attack speed of the caster when equipping axe or mace class weapon for the skill duration.', 'This skill affects party members of the caster if they equip axe or mace class weapons as well. However this skill increases 30% of the attack speed for the caster and 25% for the party members.', 0, 1, 5, 2, 'Required SP', 'Skill Duration'
, '20', '30sec', '23', '60sec', '26', '90sec', '29', '120sec', '32', '150sec');

skilldata[699] = new Array('Weapon Perfection', 5, 0, 1, 694, 698, 0, 0, 0, 2, 2, 0, 0, 0, 0);
skilldesc[699] = new Array('Does 100% damage on every monster regardless of their size or the weapon of caster.', 'Applicable for party members of the caster if they are equipping axe or mace class weapons. However the skill duration for party members is 1/5 of the casters.', 0, 1, 5, 2, 'Required SP', 'Skill Duration'
, '18', '10sec', '16', '20sec', '14', '30sec', '12', '40sec', '10', '50sec');

skilldata[700] = new Array('Power-Thrust', 5, 0, 1, 698, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[700] = new Array('Increases the attack strength of weapon and the damaging chance of the weapon at the same time.', 'Applicable for party members of the caster if they are equipping axe or mace weapons. The skill duration for party members are applied as 1/5 of the casters.', 0, 1, 5, 4, 'Skill Duration', 'IncrementATK', 'Required SP', 'Weapon Damage %'
, '20sec', '105%', '18', '0.2%', '40sec', '110%', '16', '0.4%', '60sec', '115%', '14', '0.6%', '80sec', '120%', '12', '0.8%', '100sec', '125%', '10', '1%');

skilldata[701] = new Array('Maximize Power', 5, 0, 1, 699, 700, 0, 0, 0, 3, 2, 0, 0, 0, 0);
skilldesc[701] = new Array('Amplify weapon damage for a skill duration.It cosumes 10 SP for the skill casting, and this skill continually drain SP until the SP amount becomes 0.', 'When the SP amount becomes 0, this skill is canceled. The defense of the enemy affects the dammage output of this skill and on the weapon damage, unlike a critical attack.', 0, 1, 5, 1, 'Required SP'
, '1 SP / 1sec', '1 SP / 2sec', '1 SP / 3sec', '1 SP / 4sec', '1 SP / 5sec');

// 19) Assassin
skilldata[721] = new Array('Righthand Mastery', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[721] = new Array('When Assassin uses two weapons at the same time, the damage of right handed weapon decreases from 100% to 50%, the damage of left handed decreases from 80% to 30%.', 'Right handed weapon damage can be recovered by learning this skill. Does not apply to katar class weapons.', 0, 1, 5, 1, 'Increment'
, '60%', '70%', '80%', '90%', '100%');

skilldata[722] = new Array('Lefthand Mastery', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[722] = new Array('Recovers the left handed weapon damage which has disadvantage for using two different weapons on each hand.', 'Does not apply to katar class weapons.', 0, 1, 5, 1, 'Increment'
, '40%', '50%', '60%', '70%', '80%');

skilldata[723] = new Array('Katar Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[723] = new Array('Improve Katar weapon damage.', '', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '3', '6', '9', '12', '15', '18', '21', '24', '27', '30');

skilldata[724] = new Array('Cloaking', 10, 0, 1, 204, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[724] = new Array('Allows its user to move while hiding. User can move quickly while moving adjacent to a wall, but moves slower when away from a wall. At skill Level 1 and 2, it is only possible to use this skill next to walls.', 'Also the skill can be canceled by using skills or attacking. Consumes the same amount of SP as Hiding skill, also drains certain amount of SP while cloaking. When SP becomes 0, this skill is automatically canceled.', 0, 1, 10, 2, 'Required SP', 'Skill Duration'
, '15', '4sec/1SP', '15', '5sec/1SP', '15', '6sec/1SP', '15', '7sec/1SP', '15', '8sec/1SP', '15', '9sec/1SP', '15', '10sec/1SP', '15', '11sec/1SP', '15', '12sec/1SP', '15', '13sec/1SP');

skilldata[725] = new Array('Sonic Blow', 10, 0, 2, 723, 0, 0, 0, 0, 4, 0, 0, 0, 0, 55);
skilldesc[725] = new Array('Delivers 8 consecutive blows and spins a target at the same time.', 'Has chance of stunning the target. This attack is only considered one hit.', 4, 1, 10, 3, 'Total ATK', 'Stun Chance', 'Required SP'
, '340%', '12%', '16', '380%', '14%', '18', '420%', '16%', '20', '460%', '18%', '22', '600%', '20%', '24', '640%', '22%', '26', '680%', '24%', '28', '720%', '26%', '30', '760%', '28%', '32', '800%', '30%', '34');

skilldata[726] = new Array('Grimtooth', 5, 0, 2, 724, 725, 0, 0, 0, 2, 5, 0, 0, 0, 56);
skilldesc[726] = new Array('Does long range splash damage in an area while hiding.', 'Requires katar class weapon, does neutral physical damage on many enemies at once. Must be hiding [not cloaked] for this skill to work.', 4, 1, 5, 3, 'ATK', 'Distance', 'SP Required'
, '100%', '3 cells', '2', '125%', '4 cells', '2', '150%', '5 cells', '2', '175%', '6 cells', '2', '200%', '7 cells', '2');

skilldata[727] = new Array('Enchant Poison', 10, 0, 1, 205, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[727] = new Array('Endows poison property on a weapon for a skill duration.', 'This skill has a chance to poison enemies by low chance. When user changes weapons while this skill is active, the skill is canceled.', 2, 1, 10, 3, 'Required SP', 'Skill Duration', 'Poison Chance'
, '20', '30sec', '3%', '20', '45sec', '3%', '20', '60sec', '4%', '20', '75sec', '4%', '20', '90sec', '5%', '20', '105sec', '5%', '20', '120sec', '6%', '20', '135sec', '6%', '20', '150sec', '7%', '20', '165sec', '7%');

skilldata[728] = new Array('Poison React', 10, 0, 1, 727, 0, 0, 0, 0, 3, 0, 0, 0, 0, 57);
skilldesc[728] = new Array('Automatically counters one time attack when hit by poison property attack.', '[Future addition to skill is to be counter on any attack by chance - kRo]', 1, 1, 10, 2, 'Required SP', 'Skill Duration'
, '30', '30sec', '30', '30sec', '27', '30sec', '27', '30sec', '24', '30sec', '24', '30sec', '21', '30sec', '21', '30sec', '18', '30sec', '18', '30sec');

skilldata[729] = new Array('Venom Dust', 10, 0, 1, 727, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[729] = new Array('Contaminates an area with poison.', 'Consumes 1 Red Gemstone for a use. All monsters within the area effected are posioned.', 3, 1, 10, 2, 'Required SP', 'Skill Duration'
, '20', '5sec', '20', '10sec', '20', '15sec', '20', '20sec', '20', '25sec', '20', '30sec', '20', '35sec', '20', '40sec', '20', '45sec', '20', '50sec');

skilldata[730] = new Array('Venom Splasher', 10, 0, 2, 728, 729, 0, 0, 0, 5, 5, 0, 0, 0, 58);
skilldesc[730] = new Array('Poisons a target and causes the target to explode and does poison damage around when the target has less than 1/3 of the maximum HP left.', 'A timer icon is shown above the head of the target, when the target is hit in this condition, this skill is canceled.The target will do splash damage for 25% of the damage its taken around 3*3 cells, poisoning monsters within its range.', 4, 1, 10, 2, 'Required SP', 'ATK'
, '33', '220%', '36', '240%', '39', '260%', '42', '280%', '45', '300%', '48', '320%', '51', '340%', '54', '360%', '57', '380%', '60', '400%');

// 20) Taekwon Master
skilldata[761] = new Array('S,L,S Perception', 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[761] = new Array('Designate the current map with one of the cosmic alignments, Solar, Lunar or Stellar, for the use of certain skills.', 'It is impossible to change a map\'s cosmic alignment once it is designated. Using this skill on a cosmically aligned map will display a list of map designations.', 0, 1, 3, 1, 'Effect'
, 'Designate current map with Solar alignment.', 'Designate current map with Lunar alignment.', ' Designate current map with Stellar alignment. ');

skilldata[762] = new Array('S,L,S Opposition', 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[762] = new Array('Designate the targeted monster with one of the cosmic alignments, Solar, Lunar or Stellar, for the use of certain skills.', 'It is impossible to change a monster\'s cosmic alignment once it is designated. Using this skill on a cosmically aligned monster will display a list of monster designations. On players, character jobs can be designated without regarding size and Max HP. Costs 100 SP', 0, 1, 3, 1, 'Effect'
, 'Designate monster with Solar alignment.<br>[Limited to Small sized monsters.]', 'Designate monster with Lunar alignment. <br>[Limited to Medium sized monsters with Max HP of 6,000 or more.]', 'Designate monster with Stellar alignment.<br>[Limited to Large sized monsters with Max HP of 20,000 or more.]');

skilldata[763] = new Array('Solar Heat', 3, 0, 2, 761, 0, 0, 0, 0, 1, 0, 0, 0, 0, 125);
skilldesc[763] = new Array('Inflict damage, drain 2 SP and push back monsters around the caster. On other players, this skill will only have the push back effect and continuously drain SP.', 'Deals 100% damage to monsters and players in PvP. Has no Cast Time. Costs 20 SP per use. This skill is only enabled in Solar areas.', 1, 1, 3, 1, 'Duration'
, '10 sec', '20 sec', '60 sec');

skilldata[764] = new Array('Solar Protection', 4, 0, 7, 761, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[764] = new Array('Temporarily add an increase to Defense that is affected by LUK, DEX and character\'s Base Level.', 'Calculated as [(Lv+Dex+Luk) / 10]<p>This skill is only enabled on Solar (even numbered) days in Solar areas.</p>', 0, 1, 4, 2, 'Duration', 'SP Cost'
, '80 sec', '70', '160 sec', '60', '240 sec', '50', '320 sec', '40');

skilldata[765] = new Array('Lunar Heat', 3, 0, 2, 761, 0, 0, 0, 0, 2, 0, 0, 0, 0, 126);
skilldesc[765] = new Array('Inflict damage, drain 2 SP and push back monsters around the caster. On other players, this skill will only have the push back effect and continuously drain SP.', ' Deals 100% damage to monsters and players in PvP. This skill is only enabled in Lunar areas.', 0, 1, 3, 1, 'Duration'
, '10 sec', '20 sec', '60 sec');

skilldata[766] = new Array('Lunar Protection', 4, 0, 7, 761, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[766] = new Array('Temporarily add an increase to Flee that is affected by LUK, DEX and character\'s Base Level.', 'calculated as (Lv+Dex+Luk) / 10 <p>This skill is only enabled on Lunar (odd numbered) days in Lunar areas.</p>', 0, 1, 4, 2, 'Duration', 'SP Cost'
, '80 sec', '70', '160 sec', '60', '240 sec', '50', '320 sec', '40');

skilldata[767] = new Array('Stellar Heat', 3, 0, 2, 761, 0, 0, 0, 0, 3, 0, 0, 0, 0, 127);
skilldesc[767] = new Array('Inflict damage, drain 2 SP and push back monsters around the caster. On other players, this skill will only have the push back effect and continuously drain SP.', 'Deals 100% damage to monsters and players in PvP. This skill is only enabled in Stellar areas.', 0, 1, 3, 1, 'Duration'
, '10 sec', '20 sec', '60 sec');

skilldata[768] = new Array('Stellar Protection', 4, 0, 7, 761, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[768] = new Array('Increase ASPD against Stellar aligned monsters. Character\'s Base Level, LUK, DEX and skill\'s level affect this damage increase.', 'Calculated as [(Lv+Dex+Luk) / 10].<p>This skill can only be used in a stellar aligned map, durring a stellar day (multiple of 5).</p>', 0, 1, 4, 2, 'Duration', 'SP Cost'
, '80 sec', '70', '160 sec', '60', '240 sec', '50', '320 sec', '40');

skilldata[769] = new Array('Solar Blessings', 5, 0, 7, 761, 762, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[769] = new Array('Increase the EXP reward from defeating Solar aligned monsters on Solar (even numbered) days.', '', 0, 1, 5, 1, 'EXP Increase'
, '10%', '20%', '30%', '40%', '50%');

skilldata[770] = new Array('Lunar Blessings', 5, 0, 7, 761, 762, 0, 0, 0, 2, 2, 0, 0, 0, 0);
skilldesc[770] = new Array('Increase the EXP reward from defeating Lunar aligned monsters on Lunar (odd numbered) days.', '', 0, 1, 5, 1, 'Exp Increase'
, '10%', '20%', '30%', '40%', '50%');

skilldata[771] = new Array('Stellar Blessings', 5, 0, 7, 761, 762, 0, 0, 0, 3, 3, 0, 0, 0, 0);
skilldesc[771] = new Array('Increase the EXP reward from defeating Stellar aligned monsters on Stellar (multiple of five) days.', '', 0, 1, 5, 1, 'Exp Increase'
, '10%', '20%', '30%', '40%', '50%');

skilldata[772] = new Array('Solar Wrath', 3, 0, 7, 762, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[772] = new Array('Increase Attack Power against Solar aligned monsters.', 'Character\'s Base Level, LUK, DEX and skill\'s level affect this damage increase.', 0, 1, 3, 1, 'ATK Bonus'
, '( (Level+LUK+DEX) / 9 )%', '( (Level+LUK+DEX) / 6 )%', '( (Level+LUK+DEX) / 3 )%');

skilldata[773] = new Array('Lunar Wrath', 3, 0, 7, 762, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[773] = new Array('Increase Attack Power against Lunar aligned monsters.', 'Character\'s Base Level, LUK, DEX and skill\'s level affect this damage increase.', 0, 1, 3, 1, 'ATK Bonus'
, '( (Level+LUK+DEX) / 9 )%', '( (Level+LUK+DEX) / 6 )%', '( (Level+LUK+DEX) / 3 )%');

skilldata[774] = new Array('Stellar Wrath', 3, 0, 7, 762, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[774] = new Array('Increase Attack Power against Stellar aligned monsters.', 'Character\'s Base Level, LUK, DEX and skill\'s level affect this damage increase.', 0, 1, 3, 1, 'ATK Bonus'
, '( (Level+Str+Luk+Dex) / 9 )%', '( (Level+Str+Luk+Dex) / 6 )%', ' ( (Level+Str+Luk+Dex) / 3 )% ');

skilldata[775] = new Array('S,L,S Shadow', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[775] = new Array('Increase Attack Speed at the cost of <strong><font color="red">permanently losing sight</font>.', 'Only activates when Taekwon Master hits JobLv 50.', 0, 1, 10, 1, 'ASPD Increase'
, '3%', '6%', '9%', '12%', '15%', '18%', '21%', '24%', '27%', '30%');

skilldata[776] = new Array('S,L,S Team-Up', 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[776] = new Array('Increase a Monk class character\'s chance of casting Raging Trifecta when using Counter Kick, while Monk\'s Raging Thrust will increase the Taekwon Master\'s chance of casting Counter Kick.', '', 0, 1, 3, 1, 'Chance'
, '120%', '150%', '200%');

skilldata[777] = new Array('S,L,S Courier', 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[777] = new Array('Increase Maximum Weight Limit when in Solar, Lunar and Stellar areas. The effect of this skill is canceled when its user leaves the Solar, Lunar or Stellar designated area.', 'If you spend too much time outside an aligned area, you will lose the bonus.', 0, 1, 10, 1, 'Max Weight Bonus'
, '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%');

skilldata[778] = new Array('S,L,S Union', 1, 0, 7, 777, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0);
skilldesc[778] = new Array('Awaken the caster\'s hidden potential for 10 minutes while in a spirit status, endowing the caster with attacks that have 100% Accuracy and will ignore enemy\'s Defense, and increased Movement Speed.', 'However, 2% of caster\'s HP will be drained with each attack on monsters and 8% will be drained with each attack on other players. In this status, attacking when the caster\'s remaining HP is less that 20% of Max HP will instantly kill the caster. caster\'s remaining HP is less that 20% of Max HP instantly kill the caster. Requires Spirit Status from a Soul Linker. ', 0, 0, 0, 0);

// 21) Ninja
// 22) Gunslinger
// 23)
// 24)
// 25)
// 26)
// 27) Crusader
skilldata[1041] = new Array('Divine Protection', 10, 0, 0, 1044, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1041] = skilldesc[121];
skilldata[1042] = new Array('Demon Bane', 10, 0, 0, 1041, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1042] = skilldesc[122];
skilldata[1043] = new Array('Heal', 10, 1, 3, 1042, 1048, 0, 0, 0, 5, 10, 0, 0, 0, 16);
skilldesc[1043] = skilldesc[127];
skilldata[1044] = new Array('Cure', 1, 0, 3, 1048, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1044] = skilldesc[134];
skilldata[1045] = new Array('Spear Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1045] = skilldesc[521];
skilldata[1046] = new Array('Peco Peco Riding', 1, 0, 0, 7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1046] = skilldesc[529];
skilldata[1047] = new Array('Cavalier Mastery', 5, 0, 0, 1046, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1047] = skilldesc[530];
skilldata[1048] = new Array('Faith', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1048] = new Array('Increases the maximum HP and holy resistance of the caster.', '', 0, 1, 10, 2, 'HP Increment', 'Additional Resist (Holy)'
, '200', '5%', '400', '10%', '600', '15%', '800', '20%', '1000', '25%', '1200', '30%', '1400', '35%', '1600', '40%', '1800', '45%', '2000', '50%');

skilldata[1049] = new Array('Guard', 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1049] = new Array('Guard physical attacks for the skills duration.', 'When used, the caster cannot move for 0.3 seconds. Using this skill in rapid succession cancels the skill. Requires a shield. Lasts 300 seconds.', 0, 1, 10, 2, 'Guard Chance', 'SP consumption'
, '5%', '12', '10%', '14', '15%', '16', '20%', '18', '25%', '20', '30%', '22', '35%', '24', '40%', '26', '45%', '28', '50%', '30');

skilldata[1050] = new Array('Smite', 5, 0, 2, 1049, 0, 0, 0, 0, 5, 0, 0, 0, 0, 59);
skilldesc[1050] = new Array('Strike a target with a shield.', 'This skill knocks the target back, also has a low chance to stun the target. Range is 3 cells within range, consumes 10 SP. Requires a shield.', 4, 1, 5, 3, 'ATK', 'Stun Chance', 'Range of Knocking Back Enemy (cell)'
, '120%', '20%', '5', '140%', '25%', '6', '160%', '30%', '7', '180%', '35%', '8', '200%', '40%', '9');

skilldata[1051] = new Array('Shield Boomerang', 5, 0, 2, 1050, 0, 0, 0, 0, 3, 0, 0, 0, 0, 60);
skilldesc[1051] = new Array('Damages a target by throwing a shield.', 'Shields that are heavy or upgraded result in more damage dealt. Skill level affects the skill range. Consumes 12 SP. Requires a shield.', 4, 1, 5, 2, 'ATK', 'Range'
, '130%', '3', '160%', '5', '190%', '7', '220%', '9', '250%', '11');

skilldata[1052] = new Array('Shield Reflect', 10, 0, 1, 1051, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1052] = new Array('Reflect an amount of the full damage taken from an enemy back to the enemy for the skills duration.', 'Lasts 300 seconds. Requires a shield.', 0, 1, 10, 2, 'Damage Returned to Enemy', 'SP consumption'
, '13%', '35', '16%', '40', '19%', '45', '22%', '50', '25%', '55', '28%', '60', '31%', '65', '34%', '70', '37%', '75', '40%', '80');

skilldata[1053] = new Array('Holy Cross', 10, 0, 2, 1048, 0, 0, 0, 0, 7, 0, 0, 0, 0, 61);
skilldesc[1053] = new Array('Delivers 2 blows to a target.', 'The attack property is holy, can blind the target by low chance.', 4, 1, 10, 3, 'ATK', 'Blind Chance', 'SP consumption'
, '135%', '3%', '11', '170%', '6%', '12', '205%', '9%', '13', '240%', '12%', '14', '275%', '15%', '15', '310%', '18%', '16', '345%', '21%', '17', '380%', '24%', '18', '415%', '27%', '19', '450%', '30%', '20');

skilldata[1054] = new Array('Grand Cross', 10, 0, 2, 1048, 1053, 0, 0, 0, 10, 6, 0, 0, 0, 62);
skilldesc[1054] = new Array('Summons a grand cross around the caster for a 0.9 second skill duration, enemies within the cross are damaged 3 times by holy attack.', 'Has a 3 second casting delay, during the casting duration, the armor defence decreases by 2/3. This skill cannot be interrupted. Causes Blind effect on undead and demon monsters. One thing the caster should know is that this skill damages not only enemies but the caster at the same time, the damage amount the caster takes is half the amount the enemy takes.', 0, 1, 10, 2, 'ATK', 'SP consumption'
, '140%', '37', '180%', '44', '220%', '51', '260%', '58', '300%', '65', '340%', '72', '380%', '79', '420%', '86', '460%', '93', '500%', '100');

skilldata[1055] = new Array('Sacrafice', 5, 0, 1, 1052, 1054, 0, 0, 0, 5, 4, 0, 0, 0, 0);
skilldesc[1055] = new Array('Protect a party member by taking the full damage he is receiving. However the party member and the caster should be within the skills range, level difference should be less than 10.', 'If the party member goes out of the skills range, the skill is canceled. The amount of damage that the caster receives for a party member is affected by the defence of the party member, the defence of the caster does not affect on the amount of damage received. If the caster is in Guard or Defending Aura status, the party member will be protected by the same status. This skill cannot be used for other Crusaders. Consumes 25 SP and has a 3 second casting delay.', 2, 1, 5, 3, 'Range', 'Skill Duration', 'Use'
, '7', '30sec', '1person', '8', '45sec', '2person', '9', '1 min', '3person', '10', '1 min 15sec', '4person', '11', '1 min 30sec', '5person');

skilldata[1056] = new Array('Resistant Souls', 5, 0, 1, 1041, 1043, 0, 0, 0, 5, 5, 0, 0, 0, 0);
skilldesc[1056] = new Array('Increase the resistance against demon and holy property attacks.', 'This skill can be cast on party members only. Lasts 180 seconds. 3 second casting delay. Consumes 30 SP.', 2, 1, 5, 2, 'Resist against Demon', 'Additional Resistance'
, '5%', '5%', '10%', '10%', '15%', '15%', '20%', '20%', '25%', '25%');

skilldata[1057] = new Array('Defending Aura', 5, 0, 1, 1051, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1057] = new Array('Reduces the damage of long range physical attacks.', 'Lasts 180 seconds, causes movement and attack speed to be slower for the skills duration. Can be shared with a party member who has the `Sacrifice` skill casted on them. Using this skill in rapid succession cancels the skill. Requires 30 SP for use, and a shield.', 0, 1, 5, 1, 'Long Range ATK Decrement'
, '-20%', '-35%', '-50%', '-65%', '-80%');

skilldata[1058] = new Array('Spear Quicken', 10, 0, 1, 1045, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0);
skilldesc[1058] = new Array('Increases attack speed for the skills duration when using two handed spears.', 'This skill can be canceled by the Decrease AGI skill or entering an area that the Quagmire skill has been casted on.', 0, 1, 10, 3, 'Skill Duration', '% Increment', 'SP consumption'
, '30sec', '21%', '24', '60sec', '22%', '28', '120sec', '23%', '32', '140sec', '24%', '36', '150sec', '25%', '40', '180sec', '26%', '44', '210sec', '27%', '48', '240sec', '28%', '52', '270sec', '29%', '56', '300sec', '30%', '60');

// 28) Sage
skilldata[1081] = new Array('Earth Spike', 5, 1, 2, 1098, 0, 0, 0, 0, 1, 0, 0, 0, 0, 38);
skilldesc[1081] = skilldesc[571];
skilldata[1082] = new Array('Heavens Drive', 5, 1, 2, 1081, 0, 0, 0, 0, 1, 0, 0, 0, 0, 39);
skilldesc[1082] = skilldesc[572];
skilldata[1083] = new Array('Sense', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1083] = skilldesc[574];
skilldata[1084] = new Array('Study', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1084] = new Array('Increases book class weapon damage.', ' - ', 0, 1, 10, 2, '+ ATK', '+ ASPD'
, '3', '0.5%', '6', '1%', '9', '1.5%', '12', '2%', '15', '2.5%', '18', '3%', '21', '3.5%', '24', '4%', '27', '4.5%', '30', '5%');

skilldata[1085] = new Array('Cast Cancel', 5, 0, 1, 1084, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1085] = new Array('Only usable while casting a magic spell. Allows its user to cancel a magic spell while casting.', 'When cancel, still the magic spell consumes the required SP, however skill level reduces the required SP for canceled magic spell. Consumes 2 SP regardless of the skill level.', 0, 1, 5, 1, 'Required SP when canceled'
, '90%', '70%', '50%', '30%', '10%');

skilldata[1086] = new Array('Free Cast', 10, 0, 0, 1085, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1086] = new Array('Allows its user to move and attack while casting magic spells.', 'Skill level affects on the moving and attack speed.', 0, 1, 10, 2, 'Moving Speed', 'ATK Speed'
, '30%', '55%', '35%', '60%', '40%', '65%', '45%', '70%', '50%', '75%', '55%', '80%', '60%', '85%', '65%', '90%', '70%', '95%', '75%', '100%');

skilldata[1087] = new Array('Spell Breaker', 5, 0, 1, 1089, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1087] = new Array('Canceles a magic spell an enemys casting, and receives the SP amount required for the spell while dealing 2% maxHP damage to the target. At Lv 5, you absorb half the HP that damaged the target', 'This skill pierces the ability of phen card that cannot be interrupted while casting a magic spell. If the enemy uses Spell Breaker and the caster counters the Spell Breaker using Magic Rod, the target will receive 20 % damage on the SP amount. Has a 10% chance of working on MVP monsters. Consumes 2 SP regardless of the skill level.', 4, 1, 5, 1, 'SP consumption'
, '0%', '25%', '50%', '70%', '100%');

skilldata[1088] = new Array('Hindsight', 10, 0, 1, 1086, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[1088] = new Array('Allows casting of a spell while physically attacking an enemy.', 'Spells consume 2/3 the amount of the required SP. However the caster cannot choose a skill that has never been learned. If a chosen skill`s level is 3, a random skill lvl between lvl 1 and lvl 3 will be cast when used. This skill has a chance to cast skills by 50 % at lvl 1, 35 % at lvl 2 and 15 % at lvl 3. Consumes 35 SP for casting.', 0, 1, 10, 2, 'Chance', 'Skill Duration'
, '7%', '120sec', '8%', '150sec', '9%', '180sec', '10%', '210sec', '11%', '240sec', '12%', '270sec', '13%', '300sec', '14%', '330sec', '15%', '360sec', '16%', '390sec');

skilldata[1089] = new Array('Magic Rod', 5, 0, 1, 1084, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[1089] = new Array('Allows its caster to receive the SP amount for a magic skill used by an enemy (except ground target skills) instead of physical damage.', 'Consumes 2 SP for a skill use. If the enemy uses Spell Breaker and the caster counters the Spell Breaker by using Magic Rod, the target will receive 20% damage.', 0, 1, 5, 2, 'Time', 'SP consumption'
, '0.4sec', '20%', '0.6sec', '40%', '0.8sec', '60%', '1sec', '80%', '1.2sec', '100%');

skilldata[1090] = new Array('Volcano', 5, 0, 1, 1095, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1090] = new Array('Create an area on the ground which magnetically amplifies all fire attacks and the attacks of characters whose attribute is the fire property.', 'Lasts 3 minutes, requires 1 Yellow Gemstone for a skill use. Cannot be double casted, also cannot be double casted with other ground skills except for certain skills (i.e - Volcano, Deluge, Magnetic Earth, Whirlwind) that is casted right before this skill was casted. Ice Wall can not be casted in this area, ground skills can not be double casted within the area.', 3, 1, 5, 4, 'Fire Property ATK Increment', 'ATK Increment ', 'Range', 'SP consumption'
, '10%', '10', '5 cells', '48', '14%', '20', '5 cells', '46', '17%', '30', '7 cells', '44', '19%', '40', '7  cells', '42', '20%', '50', '9 cells', '40');

skilldata[1091] = new Array('Deluge', 5, 0, 1, 1096, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1091] = new Array('Create an area on the ground which magnetically amplifies all the water attacks and increases the maximum HP of water attribute characters.', 'Allows use of Water Ball and Aqua Benedicta. Lasts 3 minutes, requires 1 Yellow Gemstone.  Cannot be double casted, also cannot be double casted with other ground skills except certain skills (i.e - Volcano, Deluge, Magnetic Earth, Whirlwind) that is cast right before this skill was casted. Ice Wall can not be casted in this area, ground skills can not be double casted within the area.', 3, 1, 5, 4, 'Water Property ATK ', 'MAX HP Increment', 'Range', 'SP consumption'
, '10%', '5%', '5 cells', '48', '14%', '9%', '5 cells', '46', '17%', '12%', '7 cells', '44', '19%', '14%', '7  cells', '42', '20%', '15%', '9 cells', '40');

skilldata[1092] = new Array('Whirlwind', 5, 0, 1, 1097, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1092] = new Array('Create an area on the ground which magnetically amplifies all the wind attacks and increases the flee rate of wind attribute characters.', 'Fire Wall lasts 1.5 times longer within this area. Lasts 3 minutes, Requires 1 Yellow Gemstone for a use. Cannot be double casted, also cannot be double casted with other ground skills except certain skills (i.e - Volcano, Deluge, Magnetic Earth, Whirlwind) that is casted right before this skill was casted. Ice Wall can not be cast in this area, ground skills can not be double casted within the area.', 3, 1, 5, 4, 'Wind Property ATK Increment', 'Flee Rate Increment ', 'Range', 'SP consumption'
, '10%', '3', '5 cells', '48', '14%', '6', '5 cells', '46', '17%', '9', '7 cells', '44', '19%', '12', '7  cells', '42', '20%', '15', '9 cells', '40');

skilldata[1093] = new Array('Barengon', 5, 0, 1, 1110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1093] = new Array('Not Implemented', ' - ', 3, 0, 0, 0);

skilldata[1094] = new Array('Magnitic Earth', 5, 0, 1, 1090, 1091, 1092, 0, 0, 3, 3, 3, 0, 0, 0);
skilldesc[1094] = new Array('Create an area on the ground that blocks all magic spells in which target the ground.', 'Cancels previous ground magic already casted within the targeted area. Other ground skills can not be doubled within the area. Requires 1 Blue Gemstone and 1 Yellow Gemstone for a use. Cannot be double cast, also cannot be double cast with other ground skills except certain skills (i.e - Volcano, Deluge, Magnetic Earth, Whirlwind) that is cast right before this skill was casted.', 3, 1, 5, 3, 'Range', 'Skill Duration', 'Required SP'
, '7 cells', '2 min', '66', '7 cells', '2 min 45sec', '62', '9 cells', '3min 30sec', '58', '9 cells', '4 min 15sec', '54', '11 cells', '5 min', '50');

skilldata[1095] = new Array('Endow Blaze', 5, 0, 1, 49, 1084, 0, 0, 0, 1, 5, 0, 0, 0, 0);
skilldesc[1095] = new Array('Endows the Fire property on a weapon of a party member.', 'Skill level affects skill failure chance, weapon is destroyed on failure. Consumes 40 SP regardless of the skill level, lasts 20 minutes. Requires 1 Red Blood for a skill use.', 2, 1, 5, 1, 'Success Chance'
, '80%', '85%', '90%', '95%', '100%');

skilldata[1096] = new Array('Endow Tsunami', 5, 0, 1, 46, 1084, 0, 0, 0, 1, 5, 0, 0, 0, 0);
skilldesc[1096] = new Array('Endows the Water property on a weapon of a party member.', 'Skill level affects skill failure chance, weapon is destroyed on failure. Consumes 40 SP regardless of the skill level, lasts 20 minutes. Requires 1 Crystal Blue for a skill use.', 2, 1, 5, 1, 'Success Chance'
, '80%', '85%', '90%', '95%', '100%');

skilldata[1097] = new Array('Endow Tornado', 5, 0, 1, 52, 1084, 0, 0, 0, 1, 5, 0, 0, 0, 0);
skilldesc[1097] = new Array('Endows the Wind property on a weapon of a party member.', 'Skill level affects skill failure chance, weapon is destroyed on failure. Consumes 40 SP regardless of the skill level, lasts 20 minutes. Requires 1 Wind of Verdure for a skill use.', 2, 1, 5, 1, 'Success Chance'
, '80%', '85%', '90%', '95%', '100%');

skilldata[1098] = new Array('Endow Quake', 5, 0, 1, 48, 1084, 0, 0, 0, 1, 5, 0, 0, 0, 0);
skilldesc[1098] = new Array('Endows the Earth property on a weapon of a party member.', 'Skill level affects skill failure chance, weapon is destroyed on failure. Consumes 40 SP regardless of the skill level, lasts 20 minutes. Requires 1 Green Live for a skill use.', 2, 1, 5, 1, 'Success Chance'
, '80%', '85%', '90%', '95%', '100%');

skilldata[1099] = new Array('Dragonology', 5, 0, 0, 1084, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0);
skilldesc[1099] = new Array('Increase resistance and damage against Dragon class monsters.', 'Also works against magical damage dealt by Dragon class monsters.', 0, 1, 5, 4, 'Dragon Resist', '+ATK vs Dragon', '+MATK vs Dragon', 'Int Bonus'
, '4%', '4%', '+2%', '1', '8%', '8%', '+4%', '1', '12%', '12%', '+6%', '2', '16%', '16%', '+8%', '2', '20%', '20%', '+10%', '3');

skilldata[1100] = new Array('Dispell', 5, 0, 1, 1087, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1100] = new Array('Cancel all magical effects on the caster by a low chance.', 'Requires 1 Yellow Gemstone and 1 Red Gemstone for a skill use.', 0, 1, 5, 1, 'Success Chance'
, '60%', '70%', '80%', '90%', '100%');

skilldata[1101] = new Array('Hocus-pocus', 10, 0, 1, 1088, 1094, 1100, 0, 0, 5, 1, 1, 0, 0, 0);
skilldesc[1101] = new Array('Cast a random skill.', 'Skill level affects the number of skills that can be casted. Consumes 50 SP and 2 Yellow Gemstones regardless of the skill level. This ability also has the chance [roughly small] to summon any MVP monster.', 0, 0, 0, 0);

// 29) Bard
bardanname = new Array();
bardanname[0] = new Array('Music Lesson','Melody Strike','Unchanted Serenade','Unbearring Octave','Perfect Tablature','Impressive Riff','Magic Strings','Song of Lutie');
bardanname[1] = new Array('Dance Lesson','Sling Arrow','Hip Shaker','Dazzler','Focus Ballet','Slow Grace','Lady Luck','Gypsys Kiss');

skilldata[1121] = new Array('Music Lesson', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1121] = new Array();skilldesc[1121][0] = new Array('Increase the damage of musical instruments and the quality of play skills.', ' - ', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '+3', '+6', '+9', '+12', '+15', '+18', '+21', '+24', '+27', '+30');
skilldesc[1121][1] = new Array('Increases whip weapon damage and the quality of dancing skills.', ' - ', 0, 1, 10, 1, 'Attack Strength Added by lvl'
, '+3', '+6', '+9', '+12', '+15', '+18', '+21', '+24', '+27', '+30');

skilldata[1122] = new Array('Melody Strike', 5, 0, 2, 1121, 0, 0, 0, 0, 3, 0, 0, 0, 0, 63);
skilldesc[1122] = new Array();skilldesc[1122][0] = new Array('Shoots arrows using musical instruments.', 'This skill is also usable while playing music. Property of the attack is affected by the property of arrows the casters using. Consumes 8 SP, has a 1.5 seconds casting time.', 4, 1, 5, 1, 'Damage Increment'
, '150%', '175%', '200%', '225%', '250%');
skilldesc[1122][1] = new Array('Throw arrows using a whip.', 'This skill is also usable while playing music. Property of the attack is affected by the property of arrows the casters using. Consumes 8 SP, has a 1.5 seconds casting time.', 4, 1, 5, 1, 'Damage Increment'
, '150%', '175%', '200%', '225%', '250%');

skilldata[1123] = new Array('Unchanted Serenade', 5, 0, 1, 1121, 1129, 0, 0, 0, 1, 1, 0, 0, 0, 64);
skilldesc[1123] = new Array();skilldesc[1123][0] = new Array('Cast an area that continually damages enemies within it`s range.', 'Does one damage immediately when casted, and continues to damage every 3 seconds, a total of 11 attacks will be done for the skills duration. This skill deals neutral property attack which pierces the defense of targets. Lasts 30 seconds, does area of effect damage within a 9*9 cell radius around the caster, consumes 1 SP per every 3 seconds.', 3, 1, 5, 2, 'Damage', 'Required SP'
, '10', '23', '20', '26', '30', '29', '40', '32', '50', '35');
skilldesc[1123][1] = new Array('Cast an area which continually damages SP of enemies within its range.', 'Damages one time when casted, continues to damage SP every 3 seconds. So this skill does damage on SP total 11 times for a skill duration. (Neutral, Pierce Defense) Total damage amount is affected by Dance Lessons and Hip Shaker skill level. (Hip Shaker which is caused by dancing skill overlapped doesnt have any skill duration, the skill level is always 1, does 10 SP damage.) The skill duration is 30 seconds, drains 1 SP of the caster every 3 seconds, does damages 9*9 cells around the caster.', 3, 1, 5, 2, 'SP Damage', 'Required SP'
, '10', '23', '20', '26', '30', '29', '40', '32', '50', '35');

skilldata[1124] = new Array('Unbearring Octave', 5, 0, 1, 1130, 0, 0, 0, 0, 1, 0, 0, 0, 0, 76);
skilldesc[1124] = new Array();skilldesc[1124][0] = new Array('Freezes characters in an area by chance.', 'In normal area, this skill works on monsters, but in PvP or Guild siege area, this skill works on characters as well. Has 3 seconds casting delay. [Last I checked, it only freezes people within your party.]', 0, 1, 5, 2, 'Freeze Chance', 'Required SP'
, '20%', '12', '25%', '14', '30%', '16', '35%', '18', '40%', '20');
skilldesc[1124][1] = new Array('Stun all enemies in view, skill level affects on the chance of stunning.', 'Party members could be stunned by a even chance. The stun chance is affected by the skill level, has a 3 seconds delay before activated.', 0, 1, 5, 2, 'Stun Chance', 'Required SP'
, '20%', '12', '25%', '14', '30%', '16', '35%', '18', '40%', '20');

skilldata[1125] = new Array('Perfect Tablature', 10, 0, 1, 1123, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1125] = new Array();skilldesc[1125][0] = new Array('Create an area where increases flee rate and perfect dodge rate of characters within.', 'The flee rate is affected by AGI, Music Lessons skill of the caster, the perfect dodge rate is affected by LUK, Music Lessons of the caster. Lasts 60 seconds, drains 1 SP of the caster every 5 sedonds for a skill duration. The skill range is 9*9 cells around the caster', 3, 1, 10, 2, '+ Flee Rate', '+ Dodge'
, '1%', '1%', '2%', '1%', '3%', '2%', '4%', '2%', '5%', '3%', '6%', '3%', '7%', '4%', '8%', '4%', '9%', '5%', '10%', '5%');
skilldesc[1125][1] = new Array('Cast an area which increases accuracy rate within its range.', 'The accuracy rate increased by this skill is affected by Dance Lessons skill level and DEX of the caster. Lasts 60 sec, drains 1 SP of the caster every 5 seconds, applied on all characters 9*9 cells around the caster.', 3, 1, 10, 2, '+ Accuracy Rate', 'Required SP'
, '2%', '22', '4%', '24', '6%', '26', '8%', '28', '10%', '30', '12%', '32', '14%', '34', '15%', '36', '18%', '38', '20%', '40');

skilldata[1126] = new Array('Impressive Riff', 10, 0, 1, 1123, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1126] = new Array();skilldesc[1126][0] = new Array('Increases attack speed of characters within 9*9 cells around the caster.', 'The attack speed increased by this skill is the same as the one of Two-handed Quicken, Adrenaline Rush. However this skill is impossible to associate with those skills. The amount of attack speed increased by this skill is affected by AGI and Music Lessons skill level of the caster. Lasts 120 seconds, drains 1 SP of the caster every 3 seconds for a skill duration.', 3, 1, 10, 2, 'Additional ASPD', 'Required SP'
, '11%', '38', '12%', '41', '13%', '44', '14%', '47', '15%', '50', '16%', '53', '17%', '56', '18%', '59', '19%', '62', '20%', '65');
skilldesc[1126][1] = new Array('Cast an area which decreases movement and attack speed of enemies within its range. ', 'Cancels any skills that increase movement or attack speed. The amount of attack speed decreased by this skill is affected by Dance Lessons skill level and STR of the caster. The amount of moving speed decreased by this skill is affected by Dance Lessons skill level and AGI of the caster. Lasts 180 seconds, drains 1 SP of the caster every 10 seconds for a skill duration, applied on all enemies 9*9 cells around the caster.', 3, 1, 10, 3, 'ATK Speed Decrement', 'Moving Speed Decrement', 'Required SP'
, '3%', '2%', '28', '6%', '4%', '31', '9%', '6^', '34', '12%', '8%', '37', '15%', '10%', '40', '18%', '12%', '43', '21%', '14%', '46', '24%', '16%', '49', '27%', '18%', '52', '30%', '20%', '55');

skilldata[1127] = new Array('Magic Strings', 10, 0, 1, 1123, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1127] = new Array();skilldesc[1127][0] = new Array('Create an area within 9*9 cells around the caster where reduces the magic casting time and delay after skill use for characters within the area.', 'The amount of casting time reduced by this skill is affected by DEX and Music Lessons skill level of the caster. The amount of delay after skill use is affected by INT and Music Lessons skill level of the caster. Suffragium the Priest skill doesnt associate in this skill. Lasts 180 seconds, drains 1 SP of the caster every 5 seconds for a skill duration.', 3, 1, 10, 3, 'Decreased Casting Time', 'Decreased Delay', 'Required SP'
, '3%', '3%', '40', '6%', '6%', '45', '9%', '9%', '50', '12%', '12%', '55', '15%', '15%', '60', '18%', '18%', '65', '21%', '21%', '70', '24%', '24%', '75', '27%', '27%', '80', '30%', '50%', '85');
skilldesc[1127][1] = new Array('Cast an area which increases the critical attack rate within its range.', 'The amount of critical rate increased by this skill is affected by Dance Lessons skill level and LUK of the caster. Lasts 120 seconds, drains 1 SP of the caster every 4 seconds for a skill duration, applied on all characters 9*9 cells around the caster.', 3, 1, 10, 2, 'Critical Rate', 'Required SP'
, '1%', '43', '2%', '46', '3%', '49', '4%', '52', '5%', '55', '6%', '58', '7%', '61', '8%', '64', '9%', '67', '10%', '70');

skilldata[1128] = new Array('Song of Lutie', 10, 0, 1, 1123, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1128] = new Array();skilldesc[1128][0] = new Array('Increases the maximum HP of all party members who are within 9*9 cells around the caster.', 'Within this range, all characters can restore their HP continuously. This skill restores HP immediately when casted, continues to restore HP every 6 seconds, this skill restores total 31 times for a skill duration. The increment of MHP and HP restoration are affected by VIT and Music Lessons skill level of the caster. Lasts 180 seconds, drains 1 SP every 6 seconds for a skill duration.', 3, 1, 10, 3, 'MHP Increment', 'HP Recovery', 'Required SP'
, '7%', '35', '40', '9%', '40', '45', '11%', '45', '50', '13%', '50', '55', '15%', '55', '60', '17%', '60', '65', '19%', '65', '70', '21%', '70', '75', '23%', '75', '80', '25%', '80', '85');
skilldesc[1128][1] = new Array('Cast an area which increases the maximum SP and reduces the SP used for skills of party members.', 'The amount of maximum SP increased by this skill is affected by Dance Lessons skill and INT of the caster. The amount of SP consumption reduced by this skill is affected by Dance Lessons skill and INT of the caster. Lasts 180 seconds, drains 1 SP of the caster every 5 seconds for a skill duration, applied on all characters 9*9 cells around the caster.', 2, 1, 10, 3, 'MSP Increment', 'SP Reduced', 'Required SP'
, '11%', '13%', '40', '12%', '16%', '45', '13%', '19%', '50', '14%', '22%', '55', '15%', '25%', '60', '16%', '28%', '65', '17%', '31%', '70', '18%', '34%', '75', '19%', '37%', '80', '20%', '40%', '85');

skilldata[1129] = new Array('Amp', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1129] = new Array('Quit dancing or singing when casting. Can not Encore this skill.', 'Consumes 1 SP.', 0, 0, 0, 0);

skilldata[1130] = new Array('Encore', 1, 0, 1, 1129, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1130] = new Array('Recast the last skill casted. Requires half the SP of the recasted skill.', 'Consumes 1 SP for casting.', 0, 0, 0, 0);

skilldata[1131] = new Array('Lullaby', 1, 0, 1, 1125, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0);
skilldesc[1131] = new Array('Cast an area which increases the flee rate and perfect dodge rate within its range.', 'Activated 1 time immediately after casted, activated every 6 seconds for a skill duration, so total 11 times of sleeping curse will be activated for a skill duration. Chance of putting enemies in sleep is affected by INT of the caster, consumes 20 SP. Lasts 60 seconds, drains 1 SP of the caster every 4 seconds for a skill duration, applied on all enemies 9*9 cells around the caster.', 3, 0, 0, 0);

skilldata[1132] = new Array('Mental Sensing', 5, 0, 1, 1138, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1132] = new Array('Cast an area that increases the EXP amount the characters receive.', 'Skill level affects on the amount of increased EXP. Consumes 30 SP. Drains 1 SP of the caster every 3 seconds for a skill duration, applied on every creature 9*9 cells around the caster.', 3, 1, 5, 1, 'Experience Increment'
, '136%', '147%', '158%', '169%', '180%');

skilldata[1133] = new Array('Down Tempo', 1, 0, 1, 1136, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1133] = new Array('Cast an area where the Defense of all the characters within the area drop down to 0.', 'Boss Monsters can not be effected by this skill. Lasts 60 seconds, consumes 15 SP for a cast and drains 1 SP of the caster every 4 seconds for the skill duration. Applied on every character 9*9 cells around the caster.', 3, 0, 0, 0);

skilldata[1134] = new Array('Battle Theme', 5, 0, 1, 1128, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0);
skilldesc[1134] = new Array('Create an area where the attack and defense of party members are increased for the skill duration.', 'Lasts 60 seconds, drains 1 SP of the caster for the skill duration, applied on all party members 9*9 cells around the caster.', 2, 1, 5, 3, 'ATK Increment', 'DEF Increment', 'Required SP'
, '50', '4', '40', '75', '6', '45', '100', '8', '50', '125', '10', '55', '150', '12', '60');

skilldata[1135] = new Array('Harmonic Luck', 5, 0, 1, 1134, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1135] = new Array('Cast an area that amplifies level 3 and 4 weapon damage of party members for the skill duration.', 'Lasts 60 seconds, drains 1 SP of the caster every 3 seconds, applied on 9*9 cells around the caster.', 2, 1, 5, 1, 'ATK'
, '150', '200', '250', '300', '350');

skilldata[1136] = new Array('Classical Pluck', 1, 0, 1, 1126, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0);
skilldesc[1136] = new Array('Cast an area where all skills and magic are not allowed.', 'Boss Monsters can not be effected by this skill. Lasts 60 seconds, consumes 15 SP for a cast and drains 1 SP of the caster every 4 seconds for the skill duration. Applied on every character 9*9 cells around the caster.', 3, 0, 0, 0);

skilldata[1137] = new Array('Power Cord', 1, 0, 1, 1131, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1137] = new Array('Cast an area that allows party members of the caster to use any skills without required items such as gemstones or traps. [Except for Hocus Pocus]', 'Consumes 10 SP. Lasts 60 seconds for a skill duration, drains 1 SP of the caster every 5 seconds for the skill duration. Applied on all party members 9*9 cells around the caster.', 2, 0, 0, 0);

skilldata[1138] = new Array('Acoustic Rhythm', 5, 0, 1, 1127, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0);
skilldesc[1138] = new Array('Endows resistance to every element to party members within skills range by a set amount. Also endows tolerance against abnormal statuses by 50%.', 'Consumes 10 SP. Lasts 60 seconds, drains 1 SP of the caster every 3 seconds for the skill duration, applied on all party members 9*9 cells around the caster.', 2, 1, 5, 1, 'Resistance Increment'
, '60%', '65%', '70%', '75%', '80%');

skilldata[1139] = new Array('Ragnarok', 1, 0, 2, 1133, 1137, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[1139] = new Array('', '', 0, 0, 0, 0);

// 30) Monk
skilldata[1161] = new Array('Iron Fist', 10, 0, 0, 121, 122, 0, 0, 0, 10, 10, 0, 0, 0, 0);
skilldesc[1161] = new Array('Increases Knuckle and Bare hand damage.', '-', 0, 1, 10, 1, 'Additional Damage'
, '+3', '+6', '+9', '+12', '+15', '+18', '+21', '+24', '+27', '+30');

skilldata[1162] = new Array('Spiritual Cadence', 5, 0, 0, 1170, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1162] = new Array('Restores HP and SP every 10 seconds while sitting.', 'When the casters weight is over 50%, this skill restores HP and SP every 20 seconds. The restoration amount is affected by the maximum HP and SP of the caster.', 0, 1, 5, 2, 'HP Recovery', 'SP Recovery'
, '+4', '+2', '+8', '+4', '+12', '+6', '+16', '+8', '+20', '+10');

skilldata[1163] = new Array('Summon Spirit Sphere', 5, 0, 1, 1161, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1163] = new Array('Summon a maximum of 5 spirit spheres.', 'Each sphere adds +3 Atk that ignores Def and always hits. This spell cannot be interrupted. 3 second casting delay. DEX affects on the casting time. One spirit sphere lasts 10 minutes. Consumes 8 SP.', 0, 1, 5, 1, 'No. if Spheres'
, '1 ea', '2 ea', '3 ea', '4 ea', '5 ea');

skilldata[1164] = new Array('Spiritual Sphere Absorption', 1, 0, 3, 1163, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1164] = new Array('Restores 10 SP by absorbing one spirit sphere', '[Can be used on monsters to recover SP by 20% chance according to its level. Does not work on Bosses or Guardians.] Has a 2 second casting delay, this skill cannot be interrupted. Consumes 5 SP.', 0, 0, 0, 0);

skilldata[1165] = new Array('Raging Trifecta Blow', 10, 0, 0, 1167, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1165] = new Array('Description', 'Notes', 0, 1, 10, 2, 'Combo Percentage', 'ATK'
, '29%', '120%', '28%', '140%', '27%', '160%', '26%', '180%', '25%', '200%', '24%', '220%', '23%', '240%', '22%', '260%', '21%', '280%%', '20%', '300%');

skilldata[1166] = new Array('Snap', 1, 0, 1, 1162, 1172, 1173, 0, 0, 2, 3, 3, 0, 0, 0);
skilldesc[1166] = new Array('Instantly moves the caster to a chosen spot if there is no obstacle between the caster and the location.', 'Requires 1 spirit sphere and 10 SP.', 3, 0, 0, 0);

skilldata[1167] = new Array('Flee', 10, 0, 0, 1161, 1163, 0, 0, 0, 5, 5, 0, 0, 0, 0);
skilldesc[1167] = new Array('Increases flee rate, skill level affects on the flee rate percentage.', '-', 0, 1, 10, 1, 'Additional Dodge Rate'
, '+1', '+3', '+4', '+6', '+7', '+9', '+10', '+12', '+13', '+15');

skilldata[1168] = new Array('Occult Impaction', 5, 0, 2, 1163, 0, 0, 0, 0, 5, 0, 0, 0, 0, 66);
skilldesc[1168] = new Array('Deliver a massive psychic impact to an enemy spending 1 spirit sphere at a time.', 'DEF of the enemy affects on the amount of damage taken. as a 0.5 second delay after a use', 4, 1, 5, 2, 'ATK', 'Required SP'
, '175%', '10', '250%', '14', '325%', '17', '400%', '19', '475%', '20');

skilldata[1169] = new Array('Throw Spirit Sphere', 5, 0, 2, 1168, 0, 0, 0, 0, 3, 0, 0, 0, 0, 65);
skilldesc[1169] = new Array('Throw spirit spheres to a target at a distance.', 'Skill level affects on the numbers of spirit spheres that the caster can use at a time. Casting cannot be interrupted, the casting time takes as much as [1 second + (The numbers of spirit spheresx1 second)]]. Consumes 20 SP 10. Has a 0.5 delay time after a use.', 4, 1, 5, 2, 'ATK', 'No. of spheres'
, '150%', '1', '175%', '2', '200%', '3', '225%', '4', '250%', '5');

skilldata[1170] = new Array('Root', 5, 0, 1, 1167, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1170] = new Array('Consuming 1 spirit sphere, stops both the enemy and the casters movement for the skill duration. Both the enemy and caster become paralyzed until either dies.', 'Higher skill level allows the caster to use certain skills for this skills duration. This skill is not applicable for boss monsters.', 4, 1, 5, 3, 'Casting Time', 'Skill Duration', 'Usable Skills'
, '0.5sec', '20sec', '-', '0.7sec', '30sec', 'Throw Spirit Sphere', '0.9sec', '40sec', 'Occult Impaction', '1.1sec', '50sec', 'Raging Quadruple Blow', '1.3sec', '60sec', 'Guillotine Fist (Fury + 4 Spheres needed)');

skilldata[1171] = new Array('Fury', 5, 0, 1, 1164, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1171] = new Array('Increases critical attack rate for a 3 minute skill duration, consuming 5 spirit spheres.', 'During the skill duration, SP can not be restored automatically but can be restored through the skill, Spiritual Cadence. Consumes 15 SP for a skill use.', 0, 1, 5, 1, 'Additional Critical Chance'
, '10%', '12.5%', '15%', '17.5%', '20%');

skilldata[1172] = new Array('Mental Strength', 5, 0, 1, 1175, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1172] = new Array('Consumes 5 spirit spheres for a skill use, during the skill duration, the casters DEF and MDEF are fixed at 90.', 'The caster cannot use any active skills during the skill duration at the same time, the attack and moving speed are decreased 25%. Has a 5 second casting time which cannot be interrupted, this skill spends 200 SP for a single use.', 0, 1, 5, 1, 'Skill Duration'
, '30sec', '60sec', '90sec', '120sec', '150sec');

skilldata[1173] = new Array('Guillotine Fist', 5, 0, 2, 1169, 1171, 0, 0, 0, 3, 3, 0, 0, 0, 67);
skilldesc[1173] = new Array('During the fury status, the caster can deals huge damages with a target by consuming 5 spirit spheres and the remaining SP amount of the caster. The remaining SP amount of the caster affects on the amount of damage dealt with the target.', 'This skill pierces the flee rate, the size and the defence of target, also this skill is neutral property which is not affected by the weapon property. Fury status is canceled immediately after the skill use, for 5 minutes after the skill is used, the caster cannot restore SP automatically. Skill level affects on the casting time and this skill can be interrupted while casting. If the caster has learned Raging Thrust or Root lvl 5 and is qualified requirements, this skill can be used by the caster.', 4, 1, 5, 3, 'Additional Dmg', 'Casting Time', 'Delay after use'
, '400', '4sec', '3sec', '550', '3.5sec', '2.5sec', '700', '3sec', '2sec', '850', '2.5sec', '1.5sec', '1000', '2sec', '1sec');

skilldata[1174] = new Array('Raging Quadruple Blow', 5, 0, 2, 1165, 0, 0, 0, 0, 5, 0, 0, 0, 0, 68);
skilldesc[1174] = new Array('Only usable during the delay time that occurred by Raging Trifecta Blow. Deliver 4 blows on a target, the caster cannot move for a short period after use.', 'If Raging Thrust is used in conjunction with this skill, movement will be delayed even longer. The delay time is affected by DEX and AGI of the caster.', 4, 1, 5, 1, 'ATK'
, '200%', '250%', '300%', '350%', '400%');

skilldata[1175] = new Array('Raging Thrust', 5, 0, 2, 1174, 0, 0, 0, 0, 3, 0, 0, 0, 0, 69);
skilldesc[1175] = new Array('Only usable during the delay after Raging Quadruple Blow. The target will take damage and be pushed 5 cells back at the same time. Consumes 1 spirit sphere, the caster cannot mover after skill use [for a short period].', 'If Guillotine Fist is used, and the caster is in Fury status carrying at least 4 spirit spheres, extra movement delay time for Guillotine Fist will occur. The delay time is affected by DEX and AGI of the caster. Guillotine Fist can be activated without a casting delay after this skill.', 4, 1, 5, 1, 'ATK'
, '300%', '360%', '420%', '480%', '540%');

// 31) Alchemist
skilldata[1201] = new Array('Axe Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1201] = new Array('A basic Alchemist skill which is mastered at lvl 10.', 'Increases axe weapon danage.', 0, 1, 10, 1, 'Attack Strength Added'
, '3', '6', '9', '12', '15', '18', '21', '24', '27', '30');

skilldata[1202] = new Array('Potion Research', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1202] = new Array('Improves potion value, aid in manufacturing potions at the same time.', 'The restoration amount of a potion is added on the total restoration amount increased by VIT stat and HP recovery skills.', 0, 1, 10, 1, '+ Value'
, '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%');

skilldata[1203] = new Array('Prepare Potion', 10, 0, 1, 1202, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1203] = new Array('Create various potions or chemicals.', 'Requires 1 Medicine Bowl and the Creation Guide for the potion the caster attempt to create for a use. Consumes 5 SP.', 0, 0, 0, 0);

skilldata[1204] = new Array('Bomb ', 5, 0, 2, 1203, 0, 0, 0, 0, 4, 0, 0, 0, 0, 70);
skilldesc[1204] = new Array('Set the ground on fire with a bottle grenade.', 'The fire does damages on a target every 1 second. However the target is not forced back. Also this skill has a chance to damage the weapon of target at the same time when the targets taken damages. Consumes 10 SP', 4, 1, 5, 2, 'ATK', 'Weapon Damage Chance'
, '120%', '1%', '140%', '2%', '160%', '3%', '180%', '4%', '200%', '5%');

skilldata[1205] = new Array('Acid Terror', 5, 0, 2, 1203, 0, 0, 0, 0, 5, 0, 0, 0, 0, 71);
skilldesc[1205] = new Array('Attacks a target by throwing an acid bottle. This skill has a chance to damage the armor of the target at the same time.', 'Consumes 1 Acid Bottle for a use. If the armor of the target is being protected by [Synthetic Armor] skill, this skill cannot damage the armor. Requires 15 SP for a use.', 4, 1, 5, 2, 'ATK', 'Armor Damage Chance'
, '140%', '3%', '180%', '7%', '220%', '10%', '260%', '12%', '300%', '13%');

skilldata[1206] = new Array('Aid Potion', 5, 0, 1, 1203, 0, 0, 0, 0, 3, 0, 0, 0, 0, 72);
skilldesc[1206] = new Array('Restores HP by throwing a potion to a party member/guildsman of the caster.', 'Skill level affects on the kind of potion the caster can use. Consumes 10 SP.', 2, 1, 5, 2, 'Potion Value', 'Potion'
, '110%', 'Red Potion', '120%', 'Orange Potion', '130%', 'Yellow Potion', '140%', 'White Potion', '150%', 'Blue Potion');

skilldata[1207] = new Array('Summon Flora', 5, 0, 1, 1203, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0);
skilldesc[1207] = new Array('Summons Floras on a chosen spot.', 'The maximum HP of Flora is affected by the skill level. Requires 1 Plant Bottle, 15 SP for a skill use.', 3, 0, 0, 0);

skilldata[1208] = new Array('Summon Marine Sphere', 5, 0, 1, 1203, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1208] = new Array('Summon Marine Spheres on a chosen spot. Marine Sphere randomly moves and casts self destructive skill when attacked.', 'The Marine Sphere can move and cast the self destructive skill at the same time, the casting time for self destructive skill is 5 seconds, as time goes by the marine sphere can move faster. Requires 10 SP.', 3, 0, 0, 0);

skilldata[1209] = new Array('Alchemical Weapon', 5, 0, 1, 1211, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1209] = new Array('Protects the weapon of a target for a skill duration. Consumes 1 Glistening Coat for a use.', 'This skill counteracts [Divest Weapon], the Rogue skill. Requires 30 SP regardless of the skill level.', 1, 1, 5, 1, 'Skill Duration'
, '60sec', '120sec', '180sec', '240sec', '300sec');

skilldata[1210] = new Array('Synthesized Shield', 5, 0, 1, 1212, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1210] = new Array('Protects the shield of a target for a skill duration.', 'Consumes 1 Glistening Coat for a skill duration. This skill counteracts [Divest Shield], the Rogue skill. Consumes 30 SP regardless of the skill level.', 1, 1, 5, 1, 'Skill Duration'
, '60sec', '120sec', '180sec', '240sec', '300sec');

skilldata[1211] = new Array('Synthesized Armor', 5, 0, 1, 1210, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1211] = new Array('Protects the armor of a target for a skill duration.', 'Requires 1 Glistening Coat for a skill duration. This skill counteracts [Divest Armor], the Rogue skill, consumes 30 SP regardless of the skill level.', 1, 1, 5, 1, 'Skill Duration'
, '60sec', '120sec', '180sec', '240sec', '300sec');

skilldata[1212] = new Array('Biochemical Helm', 5, 0, 1, 1203, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1212] = new Array('Protects the headgear of a target for a skill duration.', 'Requires 1 Glistening Coat for a use. This skill counteracts [Divest Helm], the Rogue skill. Consumes 30 SP regardless of the skill level.', 1, 1, 5, 1, 'Skill Duration'
, '60sec', '120sec', '180sec', '240sec', '300sec');

//skilldata[1213] = new Array('Bioethics', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//skilldesc[1213] = new Array('Fundamental skill for creating Homunculus.', 'This skill must be learned via quest.<br><b>Not Implemented on iRO</b>', 0, 0, 0, 0);

skilldata[1213] = new Array('Vaporize', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1213] = new Array('Kill current Homunculus.', '', 0, 0, 0, 0);

skilldata[1214] = new Array('Call Homunculus', 1, 0, 1, 1213, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1214] = new Array('Summon Homunculus, or cancel summoning, by consuming a certain amount of SP.', '', 0, 0, 0, 0);

skilldata[1215] = new Array('Homunculus Resurrection', 5, 0, 3, 1214, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1215] = new Array('Resurrect Homunculus.', '', 0, 1, 5, 2, 'HP Restored', 'SP Cost', '20%', '74', '40%', '68', '60%', '62', '80%', '56', '100%', '50');

// 32) Rogue
skilldata[1241] = new Array('Sword Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1241] = skilldesc[1];
skilldata[1242] = new Array('Vultures Eye', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1242] = skilldesc[82];
skilldata[1243] = new Array('Double Strafe', 10, 0, 2, 1242, 0, 0, 0, 0, 10, 0, 0, 0, 0, 13);
skilldesc[1243] = skilldesc[84];
skilldata[1244] = new Array('Ankle Snare', 5, 0, 5, 1246, 0, 0, 0, 0, 5, 0, 0, 0, 0, 40);
skilldesc[1244] = skilldesc[601];
skilldata[1245] = new Array('Remove Trap', 1, 0, 1, 1243, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1245] = skilldesc[611];
skilldata[1246] = new Array('Skid Trap', 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1246] = skilldesc[615];
skilldata[1247] = new Array('Gank', 10, 0, 0, 203, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1247] = new Array('Automatically cast steal skill by chance while fighting.', 'Skill level of Steal and Gank affect on the chance of stealing items from monsters.', 0, 1, 10, 1, 'Gank Chance'
, '7%', '8%', '10%', '11%', '13%', '14%', '16%', '17%', '19%', '20%');

skilldata[1248] = new Array('Mug', 10, 0, 1, 1247, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[1248] = new Array('Extorts zeny from monsters.', 'Allows the user to steal zeny only once from a monster, however it is possible to steal zeny from monsters that the user stole items before. DEX, LUK and the level difference between the caster and the target affect on the success chance. Consumes 15 SP.', 4, 1, 10, 1, 'Success Chance'
, '1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%');

skilldata[1249] = new Array('Back Stab', 10, 0, 2, 1248, 0, 0, 0, 0, 4, 0, 0, 0, 0, 73);
skilldesc[1249] = new Array('Attacks a target at the back and pushes it forward.', 'When used with a Bow type weapon, you deal 1/2 damage. Target cannot avoid this attack since its an attack from behind the sight. Also this skill is usable while hiding. Consumes 16 SP', 4, 1, 10, 1, 'ATK'
, '340%', '380%', '420%', '460%', '500%', '540%', '580%', '620%', '660%', '700%');

skilldata[1250] = new Array('Stalk', 5, 0, 1, 204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1250] = new Array('Allows its user to move slowly while hiding.', ' - ', 0, 0, 0, 0);

skilldata[1251] = new Array('Sightless Mind', 5, 0, 2, 1249, 1250, 0, 0, 0, 2, 2, 0, 0, 0, 74);
skilldesc[1251] = new Array('Only usable while hiding. Does splash attack within 3*3 cells around the caster.', 'The targets within this area will have a chance to be stunned or blinded by chance at the same time. When used, this skill cancels hiding status immediately. Consumes 20 SP.', 3, 1, 5, 3, 'ATK', 'Blind Chance', 'Stun Chance'
, '140%', '13%', '13%', '180%', '16%', '16%', '220%', '19%', '19%', '260%', '22%', '22%', '300%', '25%', '25%');

skilldata[1252] = new Array('Divest Weapon', 5, 0, 1, 1254, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1252] = new Array('Forcibly strip the weapon off a target. While used in PvP, the target cannot re-equip the weapon for period of time.', 'Decreases Attack of a monster by 10% for a short amount of time. DEX difference between the caster and the target affects on the success chance.', 4, 1, 5, 2, 'Effect Percentage', 'Required SP'
, '7%', '17', '9%', '19', '11%', '21', '13%', '23', '15%', '25');

skilldata[1253] = new Array('Divest Shield', 5, 0, 1, 1255, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1253] = new Array('Forcibly strip the shield off a target.', 'While used in PvP, the target cannot re-equip the shield for period of time. For monsters, this skill decreases DEF of a monster by 10% for a short amount of time. DEX difference between the caster and the target affects on the success chance.', 4, 1, 5, 2, 'Effect Percentage', 'Required SP'
, '7%', '17', '9%', '19', '11%', '21', '13%', '23', '15%', '25');

skilldata[1254] = new Array('Divest Armor', 5, 0, 1, 1253, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1254] = new Array('Forcibly strip the armor off a target.', 'While used in PvP, the target cannot re-equip the armor for period of time. For monsters, this skill decreases DEF of a monster by 10% for a short amount of time. DEX difference between the caster and the target affects on the succes chance.', 4, 1, 5, 2, 'Effect Percentage', 'Required SP'
, '7%', '17', '9%', '19', '11%', '21', '13%', '23', '15%', '25');

skilldata[1255] = new Array('Divest Helm', 5, 0, 1, 1248, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[1255] = new Array('Forcibly strip the helmet off a target.', 'While used in PvP, the target cannot re-equip the helmet for period of time. For monsters, this skill decreases DEF of a monster by 10% for a short amount of time. DEX difference between the caster and the target affects on the success chance.', 4, 1, 5, 2, 'Effect Percentage', 'Required SP'
, '7%', '17', '9%', '19', '11%', '21', '13%', '23', '15%', '25');

skilldata[1256] = new Array('Snatch', 5, 0, 2, 1249, 1251, 0, 0, 0, 4, 5, 0, 0, 0, 75);
skilldesc[1256] = new Array('Warps both the target and caster to a random location.', 'Not usable on Boss Monsters. As higher level the caster is, as lower level the target is, the success rate will be increased.', 4, 1, 5, 2, 'ATK', 'Required SP'
, '130%', '13', '160%', '16', '190%', '19', '220%', '21', '250%', '24');

skilldata[1257] = new Array('Scribble', 1, 0, 1, 1258, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1257] = new Array('Paint graffiti 5*5 cells around a chosen spot within a limit of 20 characters.', 'Requires 1 Red Gemstone and 15 SP for a skill use.', 3, 0, 0, 0);

skilldata[1258] = new Array('Piece', 5, 0, 1, 1259, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1258] = new Array('Paint graffiti on a guild castle flag.', '[Skill seems to not be implemented, yet Remover still remains. Still required to get scribble.]', 3, 0, 0, 0);

skilldata[1259] = new Array('Remover', 1, 0, 1, 1260, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1259] = new Array('Remove graffiti from a guild flag.', 'Requires 1 Wet Duster and 5 SP for a use. [Not in use due to Piece not being implemented]', 3, 0, 0, 0);

skilldata[1260] = new Array('Slyness', 1, 0, 0, 1253, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[1260] = new Array('When more than 2 rogues sit beside each other, monsters will not attack them.', 'Not usable on boss, insect, demon monsters.', 0, 0, 0, 0);

skilldata[1261] = new Array('Haggle', 5, 0, 0, 1260, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1261] = new Array('Buy items from NPC shops at lower price.', 'Allows its user to buy items at 1 % lower price than Discount, the merchant skill when mastered.', 0, 1, 5, 1, 'Haggle %'
, '9%', '13%', '17%', '21%', '25%');

skilldata[1262] = new Array('Intimidate', 10, 0, 0, 1256, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1262] = new Array('Use the last skill from the last enemy dealt with.', 'Skill level affects the level of skill the caster can remember. Only memorizes the character skills, it is impossible to memorize exclusive skills for monsters. For instance when a user`s hit by Bash lvl 10 at Intimidate lvl 5, the user will be able to use Bash lvl 5.', 4, 1, 10, 1, 'Max Skill Lv'
, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10');

// 33) Soul Linker
skilldata[1281] = new Array('Alchemist Spirit', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1281] = new Array('Summon the spirit of history\'s greatest Alchemist and temporarily endow its powers upon a targeted Alchemist, enhancing that Alchemist\'s Aid Potion skill, which is affected by Base Level, and enabling the use of the Aid Berserk Potion and the Spiritual Potion Creation skills.', '<ul><li>For Alchemists with Prepare Potion Lv 10, gain the usage of Spiritual Potion Creation (A).</li><li>For Alchemists with Prepare Potion Lv 10 in a party with a super novice, gain the usage of Spiritual Potion Creation (B).</li><li>For Alchemists with Prepare Potion Lv 10 in a party with a Taekwon Kid, gain the usage of Spiritual Potion Creation (C).</li></ul>', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1282] = new Array('Blacksmith Spirit', 5, 0, 7, 1281, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1282] = new Array('Summon the spirit of history\'s most proficient Blacksmith and endow its abilities upon a targeted Blacksmith. For the skill\'s duration, the use of Advanced Adrenaline Rush is enabled if the Blacksmith has mastered the Adrenaline Rush skill.', 'Advanced Adrenaline Rush increases Attack Speed by 30% and can be used on all weapons, except Bow Class Weapons, and cannot be used with skills with similar effects such as Two Hand Quicken, Adrenaline Rush, One Hand Quicken, Solar, Lunar and Stellar Shadow or Protection, Spear Quicken, Impressive Riff, or Solar, Lunar, Stellar Protection.<ul><li>For Blacksmiths with Andrenalin Rush Lv 5, gain the usage of the skill Full Andrenalin Rush.</li></ul>', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1283] = new Array('Monk Spirit', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1283] = new Array('Summon the spirit of history\'s toughest Monk and temporarily endow its powers upon a targeted Monk, enhancing that Monk\'s Raging Thrust skill so that it inflicts splashed damage on enemies within a 5*5 cell area.', 'Monk Spirit also enables Monks to use combo skills with reduced SP consumption and to restore SP during Fury status.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1284] = new Array('Priest Spirit', 5, 0, 7, 1283, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1284] = new Array('Summon the spirit of history\'s most pious Priest and endow its abilities upon the Priest targeted by this skill.', 'For the skill\'s duration, the targeted Priest\'s Holy Light skill will have its Attack Power and SP cost multiplied by five.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1285] = new Array('Taekwon Master Spirit', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1285] = new Array('Summon the spirit of history\'s greatest Taekwon Master and temporarily endow its power upon a targeted Taekwon Master, enabling Taekwon Master to use Solar, Lunar and Stellar Union skill.', '', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1286] = new Array('Soul Linker Spirit', 5, 0, 7, 1285, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1286] = new Array('Summon the spirit of history\'s most skilled Soul Linker and endow its abilities on a targeted Soul Linker, temporarily allowing the use of [Ka-] category skills on any character.', 'Cannot be cast on the caster.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1287] = new Array('Sage Spirit', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1287] = new Array('Summon the spirit of history\'s greatest Sage and temporarily endow its abilities upon a targeted Sage, enhancing that Sage\'s Hindsight skill so that it casts the highest level Bolt skills.', '', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1288] = new Array('Wizard Spirit', 5, 0, 7, 1287, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1288] = new Array('Summon the spirit of history\'s most powerful Wizard and endow its abilities upon the Wizard targeted by this skill.', 'For the skill\'s duration, the targeted Wizard can use certain skills without consuming Gemstones.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1289] = new Array('Crusader Spirit', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1289] = new Array('Summon the spirit of history\'s bravest Crusader and temporarily endow its abilities on a targeted Crusader.', 'For the skill\'s duration, the Crusader skill, Shield Boomerang, will have double damage and never miss its target.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1290] = new Array('Knight Spirit', 5, 0, 7, 1289, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1290] = new Array('Summon the spirit of history\'s most chivalrous Knight and endow its abilities upon the Knight targeted by this skill.', 'For the skill\'s duration, the use of One Hand Quicken will be enabled if the Two Hand Quicken skill is mastered.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1291] = new Array('Bard and Dancer Spirits', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1291] = new Array('Summon the spirit of history\'s most artistic performer and endow its abilities upon the Bard or Dancer targeted by this skill.', 'For the skill\'s duration, Bards and Dancers have increased Movement Speed, receive the same effect as Party Members when performing Play or Dance skills, and are able to combo skills with Perfect Tablature, Focus Ballet, Impressive Riff, Slow Grace, Magic Strings, Lady Luck, Song of Lutie and Gypsy\'s Kiss.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1292] = new Array('Hunter Spirit', 5, 0, 7, 1291, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1292] = new Array('Summon the spirit of history\'s most popular Hunter and endow its abilities on a targeted Hunter, temporarily enhancing that Hunter\'s Beast Bane skill according to the Hunter\'s STR.', 'If the Hunter has the skill Double Strafing Lv 10, the Hunter gains the usage of the skill Beast Strafing.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1293] = new Array('Assassin Spirit', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1293] = new Array('Summon the spirit of history\'s most mysterious Assassin and endow its abilities upon a targeted Assassin.', 'For the skill\'s duration, Sonic Blow will have a 100% increase in damage and reduced cast delay. In WoE, its reduced to a 50% increase and no Cast Delay reduction.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1294] = new Array('Rogue Spirit', 5, 0, 7, 1293, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1294] = new Array('Summon the spirit of history\'s sneakiest Rogue and endow its abilities upon the Rogue targeted by this skill, enhancing Stealth status\'s Movement Speed and STR increase.', 'For this skill\'s duration, this Rogue will be unaffected by dispell skills and will receive more HP and SP from potions created by a Top Ten Ranking Alchemist.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1295] = new Array('Super Novice Spirit', 5, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1295] = new Array('Summon the spirit of history\'s awesomest Super Novice and temporarily endow its abilities on the Super Novice targeted by this skill.', 'For the skill\'s duration, Super Novices have a low chance of summoning a Guardian Angel that will erase their previous death record. Super Novices at Base Level 90 and above can equip any headgear regardless of location, and at Base Level 96 and above, they can equip certain Level 4 Weapons, such as One Handed Swords, Maces Axes, Staffs and Daggers.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1296] = new Array('1st Transcendent Spirit', 5, 0, 7, 1295, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1296] = new Array('Call upon the spirits of the most powerful 1st Transcendent Class warriors ever so that they can lend their powers to their successors.', 'This skill will increase every Stat for friendly 1st Transcendent characters based on their Base Level, but each Stat bonus will not exceed +50. Only Transcendent 1st class characters with levels below 70 are affected by this skill.', 2, 1, 5, 2, 'Duration', 'SP Cost'
, '150 sec', '460', '200 sec', '360', '250 sec', '260', '300 sec', '160', '350 sec', '60');

skilldata[1297] = new Array('Kaizel', 7, 0, 1, 1284, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1297] = new Array('Instantly revive a fallen character that will be in Kyrie Eleison status for 3 Seconds upon revival.', 'This revival lasts for 30 minutes and is canceled by resurrecting the target. This skill is disabled during WoE (Guild War).<p>"Ka-" Skill - Only usable on other Soul Linkers, Spouses, and Children. Requires Soul Linker Spirit to be casted on other characters.</p>', 2, 1, 7, 3, 'Max HP', 'Cast Time', 'SP Cost'
, '10%', '4.5 sec', '110', '20%', '4.0 sec', '100', '30%', '3.5 sec', '90', '40%', '3.0 sec', '80', '50%', '2.5 sec', '70', '60%', '-', '60', '70%', '-', '50');

skilldata[1298] = new Array('Kaahi', 7, 0, 3, 1284, 1289, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[1298] = new Array('Consume a certain amount of SP to restore HP each time an enemy uses a normal attack.', '"Ka-" Skill - Only usable on other Soul Linkers, Spouses, and Children. Requires Soul Linker Spirit to be casted on other characters.', 2, 1, 7, 2, 'HP Recovered', 'SP Cost'
, '200', '5', '400', '10', '600', '15', '800', '20', '1000', '25', '1200', '30', '1400', '35');

skilldata[1299] = new Array('Kaupe', 3, 0, 1, 1294, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1299] = new Array('Kaupe status enables the chance of dodging a physical attack from an enemy and lasts until the 10 minute duration elapses or until character successfully dodges an attack.', '"Ka-" Skill - Only usable on other Soul Linkers, Spouses, and Children. Requires Soul Linker Spirit to be casted on other characters.', 2, 1, 3, 2, 'Block Chance', 'SP Cost'
, '33%', '20', '66%', '30', '100%', '40');

skilldata[1300] = new Array('Kaite', 7, 0, 1, 1288, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1300] = new Array('Reflect most magic spells back at the original caster.', 'Reflected Healing spells will not heal the original caster. The magic spells of high level monsters cannot be reflected, although this skill has a 100% chance of reflecting spells from other players regardless of level.<p>"Ka-" Skill - Only usable on other Soul Linkers, Spouses, and Children. Requires Soul Linker Spirit to be casted on other characters.</p>', 2, 1, 7, 3, '# Reflect Spells', 'Duration', 'Cast Time'
, '1', '1 min', '6 sec', '1', '2 min', '5.5 sec', '1', '3 min', '5 sec', '1', '4 min', '4.5 sec', '2', '5 min', '4 sec', '2', '6 min', '3.5 sec', '2', '10 min', '3');

skilldata[1301] = new Array('Kaina', 7, 0, 1, 253, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1301] = new Array('Increase Max SP and enhance the efficiency of the Happy Break skill.', 'At Base Level 70, this skill reduces the SP consumption of the Estin, Estun and Esma skills by 3% in proportion to the skill level of Kaina. At Base Level 80, this SP consumption is reduced by 5% and at Level 90, it is reduced by 7%.<p>"Ka-" Skill - Only usable on other Soul Linkers, Spouses, and Children. Requires Soul Linker Spirit to be casted on other characters.</p>', 1, 1, 7, 2, 'Happy Break Bonus', 'SP Increase'
, '40%', '30', '50%', '60', '60%', '90', '70%', '120', '80%', '150', '90%', '180', '100%', '210');

skilldata[1302] = new Array('Eswoo', 7, 0, 4, 1284, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1302] = new Array('Temporarily shrink a monster to reduce its Movement Speed.', 'Boss monsters will only be shrunk for 1/5th of the normal skill duration. If this skill is cast on a monster that is already shrunken, the caster will be inflicted by the Stun status and the targeted monster will recover from Shrunken status more quickly.<p>"Es-" Skill - Only usable on monsters.</p>', 4, 1, 7, 2, 'Duration', 'SP Cost'
, '1 sec', '75', '2 sec', '65', '3 sec', '55', '4 sec', '45', '5 sec', '35', '6 sec', '25', '7 sec', '15');

skilldata[1303] = new Array('Estun', 7, 0, 2, 1288, 0, 0, 0, 0, 1, 0, 0, 0, 0, 128);
skilldesc[1303] = new Array('Push back a targeted monster 2 cells away. ', 'Only Medium sized monsters are damaged by this skill, which takes the elemental property of the Mild Wind skill if it is cast. At skill level 7, Estun will have a 3 Second delay that will allow the casting of the Esma skill.<p>"Es-" Skill - Only usable on monsters.</p>', 4, 1, 7, 2, 'MATK Dmg', 'SP Cost'
, '5%', '18', '10%', '20', '15%', '22', '20%', '24', '25%', '26', '30%', '28', '35%', '30');

skilldata[1304] = new Array('Estin', 7, 0, 2, 1288, 0, 0, 0, 0, 1, 0, 0, 0, 0, 129);
skilldesc[1304] = new Array('Push back a targeted monster 2 cells away.', 'Only Small sized monsters are damaged by this skill, which takes the elemental property of the Mild Wind skill if it is cast. At skill level 7, Estin will have a 3 Second delay that will allow the casting of the Esma skill.<p>"Es-" Skill - Only usable on monsters.</p>', 4, 1, 7, 2, 'MATK Dmg', 'SP Cost'
, '10%', '18', '20%', '20', '30%', '22', '40%', '24', '50%', '26', '60%', '28', '70%', '30');

skilldata[1305] = new Array('Eske', 3, 0, 4, 1290, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1305] = new Array('ncrease targeted monster\'s Attack Power, multiplying it by 4, but reduce its Defense by half.', 'This skill is followed by a 3 Second delay in which the Esma skill can be cast.<p>"Es-" Skill - Only usable on monsters.</p>', 4, 1, 3, 3, 'Duration', 'Cast Time', 'SP Cost'
, '10 sec', '3 sec', '45', '20 sec', '2 sec', '30', '30 sec', '1 sec', '15');

skilldata[1306] = new Array('Eska', 3, 0, 4, 1283, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1306] = new Array('Force a monster into a status similar to Monk\'s Mental Strength, in which Movement and Attack Speed is reduced, but Defense and Magic Defense will be temporarily enhanced.', '<p>"Es-" Skill - Only usable on monsters.</p>', 4, 1, 3, 3, 'Duration', 'Cast Time', 'SP Cost'
, '10 sec', '3 sec', '100', '20 sec', '2 sec', '80', '30 sec', '1 sec', '60');

skilldata[1307] = new Array('Esma', 10, 0, 2, 1303, 1304, 0, 0, 0, 7, 7, 0, 0, 0, 130);
skilldesc[1307] = new Array('ne blast inflicts an amount of damage that is calculated as (40 + Base Level)% of a normal attack (MATK?), that will take on the elemental property applied by the Mild Wind skill.', 'This skill can be activated only after casting another "Es-" type skill.<p>"Es-" Skill - Only usable on monsters.</p>', 4, 1, 10, 2, 'Bolts (hits)', 'SP Cost'
, '1', '8', '2', '16', '3', '24', '4', '32', '5', '40', '6', '48', '7', '56', '8', '64', '9', '72', '10', '80');

// 34) Ninja
// 35) Gunslinger
// 36)
// 37)
// 38)
// 39)
// 40) Lord Knight
skilldata[1561] = new Array('Aura Blade', 5, 0, 1, 2, 4, 6, 0, 0, 5, 5, 5, 0, 0, 0);
skilldesc[1561] = new Array('Enchant weapon with an aura that will add more damage.', 'This additional damage is not affected by casters accuracy or targets defense [hits no matter what]. Despite its name, it works with spears as well.', 0, 1, 5, 3, 'Damage Bonus', 'Duration', 'SP Used'
, '+20', '40sec', '18', '+40', '60sec', '26', '+60', '80sec', '34', '+80', '100sec', '42', '+100', '120sec', '50');

skilldata[1562] = new Array('Parry', 10, 0, 1, 2, 5, 526, 0, 0, 10, 5, 3, 0, 0, 0);
skilldesc[1562] = new Array('Block an attack from an enemy using a Two-Handed Sword.', 'TWhen successful, the caster will cancel one attack in order to dodge one attack from the enemy. Requires a Two-Handed Sword.', 0, 1, 10, 2, 'Block Rate', 'Duration'
, '23%', '15sec', '26%', '20sec', '29%', '25sec', '32%', '30sec', '35%', '35sec', '38%', '40sec', '41%', '45sec', '44%', '50sec', '47%', '55sec', '50%', '60sec');

skilldata[1563] = new Array('Spear Dynamo', 5, 0, 1, 3, 521, 529, 0, 0, 5, 5, 1, 0, 0, 0);
skilldesc[1563] = new Array('When used, it increases accuracy and attack strength of its user and casts Endure effect at the same time.', ' The defense of the user will be decreased for the skills duration.', 0, 1, 5, 5, '+HIT', '+Dmg', '-DEF', 'Duration', 'SP Used'
, '+10%', '+5%', '-5%', '25sec', '14', '+20%', '+10%', '-10%', '30sec', '18', '+30%', '+15%', '-15%', '35sec', '22', '+40%', '+20%', '-20%', '40sec', '26', '+50%', '+25%', '-25%', '45sec', '30');

skilldata[1564] = new Array('Relax', 1, 0, 1, 3, 7, 0, 0, 0, 10, 3, 0, 0, 0, 0);
skilldesc[1564] = new Array('Increases HP restoration speed while sitting and resting.', 'This skill requires 12 SP every 10 seconds. Skill is canceled after standing up or using items.', 0, 0, 0, 0);

skilldata[1565] = new Array('Clashing Spiral', 5, 0, 2, 521, 522, 524, 529, 0, 10, 5, 5, 1, 0, 77);
skilldesc[1565] = new Array('Deliver a series of spiraling strikes at an enemy. When hit, the enemy is frozen for a second.', 'Deals DEF and VIT DEF bypassing damage. Damage is determined by skill level and the weight of the Spear [not implemented here yet]. The skill level also affects the cast time and cast delay after Clashing Spiral is used. <br><br>[Zharay - Since I do not know how a spears weight functions in its calculation, the calculation shown is that of normal Def/vDef bypass damage.]', 4, 1, 5, 4, 'ATK Bonus', 'Cast Time', 'Cast Delay', 'SP Used'
, '150%', '0.3sec', '1.2sec', '13', '200%', '0.5sec', '1.4sec', '15', '250%', '0.7sec', '1.6sec', '17', '300%', '0.9sec', '1.8sec', '19', '350%', '1sec', '2sec', '20');

skilldata[1566] = new Array('Traumatic Blow', 5, 0, 2, 521, 529, 0, 0, 0, 9, 1, 0, 0, 0, 78);
skilldesc[1566] = new Array('Brutally strike an enemy, causing the Bleeding effect by chance.', 'Enemies afflicted with Bleeding will continuously receive extra damage for a while. There is an after-cast delay of 0.5 seconds for all skills, and takes 23 SP regardless of skill level. Lasting time of overall skill is 90s. Chance of causing "bleed" is 50% base chance.', 4, 1, 5, 1, 'ATK Bonus'
, '140%', '180%', '220%', '260%', '300%');

skilldata[1567] = new Array('Vital Strike', 10, 0, 2, 530, 1566, 0, 0, 0, 3, 3, 0, 0, 0, 79);
skilldesc[1567] = new Array('Requires a Spear weapon. Hit a vital point of a target to cause various abnormal status effects.', 'Skill level affects the attack strength and the skills success rate.<br><br>Ailment Listing:<br><br>1. Ankle Strike: MoveSpeed reduced by 50%.<br>2. Wrist Strike: ASPD reduced by 25%.<br>3. Knee Strike: MoveSpeed reduced by 30%, ASPD reduced by 10%.<br>4. Shoulder Strike: DEF reduced by 50%.<br>5. Waist Strike: DEF reduced by 25%, ATK reduced by 25%.<br>6. Neck Strike: Increase your damage by 2x, Crit effect, and 30 second forced bleeding status ailment. ', 4, 1, 10, 4, 'Damage', 'Alignment Chance', 'Cast Delay', 'SP Used'
, '60%', '10%', '0.8sec', '12', '70%', '15%', '0.8sec', '12', '80%', '20%', '0.8sec', '14', '90%', '25%', '0.8sec', '14', '100%', '30%', '0.8sec', '16', '110%', '35%', '1sec', '16', '120%', '40%', '1sec', '18', '130%', '45%', '1sec', '18', '140%', '50%', '1sec', '20', '150%', '55%', '1sec', '20');

skilldata[1568] = new Array('Frenzy', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1568] = new Array('Increases maximum HP, movement speed and attack strength for skills duration. However, this skill decreases the casters flee rate and will limit actions to moving and attacking.', 'Frenzy status will drain a certain amount of HP per second and will cause user to be unable to restore HP from healing skills. Cannot be used in guild war areas.<br><b>[JobLv 50 and above required (?)]</b>', 0, 1, 1, 1, 'Full Description'
, '<div align="left"Exactly, you will receive the following when you use the skill.<br>- maxHP x3, and HP is fully recovered, but SP is all gone<br>- You cannot regain HP/SP via natural means for 5 minutes afterwards of the skill<br>- ATK + 200%<br>- ASPD + 30%<br>- Pernament move speed bonus during skill<br>- ALL DEF (equip def/mdef, stat def/mdef) set to 0<br>- Halves FLEE rate<br>- Receives Endure effect<br>- 5% HP reduced every 15 seconds<br>- Cannot chat, cannot use items, cannot receive Heals (when you do, the Heal amount you receive, you will see 0... yes, 0)<br>- Cannot change equipments<br>- Skill will automatically cancel when HP below 100<br>- Can be used in siege mode (WoE in iRO)</div>');

// 41) High Wizard
skilldata[1601] = new Array('Soul Drain', 10, 0, 0, 41, 45, 0, 0, 0, 5, 7, 0, 0, 0, 0);
skilldesc[1601] = new Array('Increases maximum SP and regains a certain amount of SP each time an enemy is defeated.', 'The amount of SP regained by this skill is affected by the enemys level.', 0, 1, 10, 2, 'SP Drain', 'Max SP Increase'
, '110%', '2%', '125%', '4%', '140%', '6%', '155%', '8%', '170%', '10%', '185%', '12%', '200%', '14%', '215%', '16%', '230%', '18%', '245%', '20%');

skilldata[1602] = new Array('Stave Crasher', 1, 0, 2, 41, 0, 0, 0, 0, 1, 0, 0, 0, 0, 80);
skilldesc[1602] = new Array('Inflict a Neutral physical attack on one target.', 'The inflicted damage is affected by the defense [not magical defense] of the target and the magic attack strength of the caster. Relies on DEX for hitting targets.', 4, 1, 1, 3, 'Cast Time', 'Cast Delay', 'SP Used'
, '0.3sec', '0.3sec', '12');

skilldata[1603] = new Array('Mystical Amplification', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[1603] = new Array('Temporarily amplifies magic attack strength for a skill.', 'This boost is seprate from wand MATK bonus.', 0, 1, 10, 2, 'mATK Bonus', 'SP Used'
, '5%', '14', '10%', '18', '15%', '22', '20%', '26', '25%', '30', '30%', '34', '35%', '38', '40%', '42', '45%', '46', '50%', '50');

skilldata[1604] = new Array('Napalm Vulcan', 5, 0, 2, 43, 0, 0, 0, 0, 5, 0, 0, 0, 0, 81);
skilldesc[1604] = new Array('Deliver multiple blows to an enemy from a distance and curse the target by chance using psychokinesis.', 'Skill level affects the number of inflicted blows. There is a chance of causing Curse to enemy. There is a 1sec Cast Delay.', 4, 1, 5, 3, 'Hits', 'Curse Chance', 'SP Used'
, '1', '5%', '10', '2', '10%', '25', '3', '15%', '40', '4', '20%', '55', '5', '25%', '70');

skilldata[1605] = new Array('Ganbantein', 1, 0, 1, 568, 574, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[1605] = new Array('Maximizes your magical potential, you cast a small AoE spell that cancels all other ground-targeted AoE spells around 1 cell of where you targeted.', 'When this skill is used on top of land effects [like Magnetic Earth], 3x3 cells around where it is cast will cancel out Land Protection but rest will still be in effect. Has fixed rate of 80% success rate.Skill will consume a gemstone regardless of success or failure.<br>It takes one Blue Gemstone and Yellow Gemstone. This skill is not affected by skills that removes gemstone requirement from your casting. <br><b>[Not Implemented on iRO]</b>', 3, 1, 1, 3, 'Cast Time', 'Cast Delay', 'SP Used'
, '3sec', '5sec', '40');

skilldata[1606] = new Array('Gravitation Field', 5, 0, 1, 573, 1602, 1603, 0, 0, 1, 1, 10, 0, 0, 0);
skilldesc[1606] = new Array('Around 5x5 cell of where you targeted, it will greately increase the effect of gravity in that area. As a result, all enemies in this skill will receive DEF-ignoring set damage every second, and attack speed will be decreased.', 'Until this skill disappears, the caster of this spell cannot do anything else. When you get attacked while channeling this skill, the skill will cancel and you are free to do other things. This skill cannot be overwritten over another existing Gravitation Field. The attack speed penalty does not apply to Boss Monsters, but they will still receive DEF-ignoring damage. Cannot use items while using this skill<br>This skill uses 1 Blue Gemstone.<br><b>[Not Implemented on iRO]</b>', 3, 1, 5, 4, 'Damage', 'ASPD Penalty', 'Duration', 'SP Used'
, '400', '5%', '5sec', '20', '600', '10%', '6sec', '40', '800', '15%', '7sec', '60', '1000', '20%', '8sec', '80', '1200', '25%', '9sec', '100');

// 42) Sniper
skilldata[1641] = new Array('Falcon Eyes', 10, 0, 1, 81, 82, 83, 607, 0, 10, 10, 10, 1, 0, 0);
skilldesc[1641] = new Array('Adds 5 points to all stats, and increases accuracy, weapon damage and critical attack rate for skills duration.', 'Lasting time is fixed to 30 seconds.', 0, 1, 10, 4, 'HIT Bonus', 'Damage Bonus', 'Crit Bonus', 'SP Used'
, '3%', '2%', '1%', '20', '6%', '4%', '2%', '20', '9%', '6%', '3%', '25', '12%', '8%', '4%', '25', '15%', '10%', '5%', '30', '18%', '12%', '6%', '30', '21%', '14%', '7%', '35', '24%', '16%', '8%', '35', '27%', '18%', '9%', '40', '30%', '20%', '10%', '40');

skilldata[1642] = new Array('Falcon Assault', 5, 0, 2, 82, 607, 604, 617, 0, 5, 1, 5, 3, 0, 82);
skilldesc[1642] = new Array('Command a Falcon to inflict numerous blows on a target.', 'The bonus ATK % shown here is added to the Blitz Beat damage of same level.', 4, 1, 5, 4, 'Damage %', 'Cast Time', 'Cast Delay', 'SP Used'
, '220%', '1sec', '1.2sec', '30', '290%', '2sec', '1.2sec', '34', '360%', '3sec', '1.2sec', '38', '430%', '4sec', '1.2sec', '42', '500%', '5sec', '1.2sec', '46');

skilldata[1643] = new Array('Focused Arrow Strike', 5, 0, 2, 83, 84, 0, 0, 0, 10, 5, 0, 0, 0, 83);
skilldesc[1643] = new Array('Shoot an arrow with incredible might at a targeted spot.', 'The arrow will be shot straight towards the spot and will cause huge damage to enemies in its way. This attack brings you +20 CRIT rate for usage of this skill. Max range is 14 cells. Cast Time is set to 2 seconds, Cast Delay is set to 0.5 sec. Uses 1 arrow.', 4, 1, 5, 2, 'ATK %', 'SP Used'
, '150%', '18', '200%', '21', '250%', '24', '300%', '27', '350%', '30');

skilldata[1644] = new Array('Wind Walker', 10, 0, 1, 83, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0);
skilldesc[1644] = new Array('Increase movement speed and flee rate of the caster and party members.', 'Cannot be used with other skills that increase movement speed, such as Increase AGI. Skills which decrease movement speed, such as Quagmire, will cancel this skill. Cast Delay is set to 2 seconds.', 2, 1, 10, 5, 'Movement %', 'Flee %', 'Cast Time', 'Duration', 'SP Used'
, '2%', '1%', '2sec', '140sec', '46', '4%', '1%', '2.4sec', '160sec', '52', '6%', '2%', '2.8sec', '180sec', '58', '8%', '2%', '3.2sec', '200sec', '64', '10%', '3%', '3.4sec', '220sec', '70', '12%', '3%', '3.6sec', '240sec', '76', '14%', '4%', '4.4sec', '260sec', '82', '16%', '4%', '4.8sec', '280sec', '86', '18%', '5%', '5.2sec', '300sec', '92', '20%', '5%', '5.6sec', '400sec', '100');

// 43) High Priest
skilldata[1681] = new Array('Assumptio', 5, 0, 8, 132, 641, 644, 0, 0, 1, 3, 3, 0, 0, 0);
skilldesc[1681] = new Array('Reduce damage taken from enemies to 1/2 for skills duration.', 'Cannot be used with Kyrie Eleison at the same time. Damage is only reduced to 2/3 in guild war areas and PvP zones.', 1, 1, 5, 4, 'Cast Time', 'Cast Delay', 'Duration', 'SP Used'
, '1sec', '1.1sec', '20sec', '20', '1.5sec', '1.2sec', '40sec', '25', '2sec', '1.3sec', '60sec', '30', '2.5sec', '1.4sec', '80sec', '35', '3sec', '1.5sec', '100sec', '40');

skilldata[1682] = new Array('Basilica', 5, 0, 1, 641, 652, 654, 0, 0, 1, 3, 2, 0, 0, 0);
skilldesc[1682] = new Array('Blocks all enemies, as well as every attack, which come into this skills range [5x5].', 'If the Priest moves or casts another skill, this effect is cancled. Cannot be used against Boss monsters and during guild sieges. If there is any obstacle within skills range, Basilica cannot be cast. Requires 1 Blue Gemstone, 1 Yellow Gemstone, 1 Red Gemstone and 1 Holy Water.', 3, 1, 5, 4, 'Duration', 'Cast Time', 'Cast Delay', 'SP Used'
, '20sec', '5sec', '2sec', '120', '25sec', '6sec', '3sec', '140', '30sec', '7sec', '4sec', '160', '35sec', '8sec', '5sec', '180', '40sec', '9sec', '6sec', '200');

skilldata[1683] = new Array('Meditation', 10, 0, 0, 641, 646, 655, 0, 0, 5, 3, 5, 0, 0, 0);
skilldesc[1683] = new Array('Increases SP regeneration and Maximum SP.', 'Also affects the amount of HP restored by heal skills.', 0, 1, 10, 3, 'SP Recovery %', 'Max SP %', 'Heal Bonus %'
, '3%', '1%', '2%', '6%', '2%', '4%', '9%', '3%', '6%', '12%', '4%', '8%', '15%', '5%', '10%', '18%', '6%', '12%', '21%', '7%', '14%', '24%', '8%', '16%', '27%', '9%', '18%', '30%', '10%', '20%');

skilldata[1684] = new Array('Spiritual Thrift', 5, 0, 0, 122, 643, 0, 0, 0, 10, 10, 0, 0, 0, 0);
skilldesc[1684] = new Array('Decrease SP usage of your skills.', 'Great for Battle Priests', 0, 1, 5, 1, 'SP Consumption Reduction'
, '4%', '8%', '12%', '16%', '20%');

// 44) Mastersmith
skilldata[1721] = new Array('Shattering Strike', 10, 0, 1, 694, 696, 700, 0, 0, 5, 3, 3, 0, 0, 0);
skilldesc[1721] = new Array('Destroy the weapon or armor of a target by chance for skills duration.', 'For monsters, this skill can decrease their attack strength or defense by 25% for 5 sec. Skill level affects skills success rate. Does not work on Boss monsters.', 0, 1, 10, 5, 'Weapon Destory %', 'Armor Destroy %', 'Cast Time', 'Duration', 'SP Used'
, '1%', '0.7%', '5sec', '15', '50', '2%', '1.4%', '5sec', '20', '50', '3%', '2.1%', '6sec', '25', '60', '4%', '2.8%', '6sec', '30', '60', '5%', '3.5%', '7sec', '35', '70', '6%', '4.2%', '7sec', '40', '70', '7%', '4.9%', '8sec', '45', '80', '8%', '5.6%', '8sec', '50', '80', '9%', '6.3%', '9sec', '55', '90', '10%', '7%', '10sec', '60', '90');

skilldata[1722] = new Array('Cart Boost', 1, 0, 1, 164, 692, 0, 0, 0, 5, 1, 0, 0, 0, 0);
skilldesc[1722] = new Array('Increase the casters movement speed with a Pushcart.', 'Other effects which decrease characters movement speed cannot interfere with this skill. It takes about 20 SP, lasts 30 seconds. [Also Required - Cart Revolution & Cart Change (?)]', 0, 0, 0, 0);

skilldata[1723] = new Array('High Speed Cart Ram', 10, 0, 2, 167, 697, 1722, 0, 0, 10, 5, 1, 0, 0, 84);
skilldesc[1723] = new Array('Can only be used while in Cart Boost state. Using the power of the money, you strike a single target with your cart. SP consumption is always 15. There is no cast time or delay', '', 4, 1, 10, 3, 'ATK', 'Zenny Used', 'Stun Chance'
, '(Weight / 15) %', '600z', '5%', '(Weight / 14) %', '700z', '10%', '(Weight / 13) %', '800z', '15%', '(Weight / 12) %', '900z', '20%', '(Weight / 11) %', '1000z', '25%', '(Weight / 10) %', '1100z', '30%', '(Weight / 9) %', '1200z', '35%', '(Weight / 8) %', '1300z', '40%', '(Weight / 7) %', '1400z', '45%', '(Weight / 6) %', '1500z', '50%');

skilldata[1724] = new Array('Upgrade Weapon', 10, 0, 1, 694, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0);
skilldesc[1724] = new Array('Lets you upgrade your weapon. Unlike smithing weapons, this skill is not affected by DEX or LUK, but by casters Job Level.', 'At Job Level 50, the caster will have about the same success rate as the item upgrading NPCs.<br>At Job Level 60, the caster will have a 5% greater success rate than the item upgrading NPCs.<br>At Job Level 70, the caster will have a 10% greater success chance than the item upgrading NPCs.<br>For instance, if an item upgrading NPC has a 50% chance of success, the caster will have a 60% chance of success chance at Job Level 70. <br>Skill level determines maximum upgrade possible.', 0, 0, 0, 0);

skilldata[1725] = new Array('Maximum Power-Thrust', 5, 0, 1, 700, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[1725] = new Array('Greately increase weapon power by using power of the Zeny.', 'Unlike normal Power-Thrust, this skill only affects you. All skill levels have same 0.1% chance of weapon breaking every hit. SP consumed is always 15. Duration is always 180sec. There is no cast time or delay.', 0, 1, 5, 2, 'Bonus Dmg', 'Zenny Used'
, '120%', '3000z', '140%', '3500z', '160%', '4000z', '180%', '4500z', '200%', '5000z');

skilldata[1726] = new Array('Nugget Craft', 3, 0, 1, 684, 693, 694, 0, 0, 3, 1, 5, 0, 0, 0);
skilldesc[1726] = new Array('Create a gold piece (using iron ore, gold ore, or silver ore), then combine it to create a nugget.', 'This nugget will be used to create specific weapons, sell it to NPCs for high price, or to create coins with. It can also be used to increase chance of making a weapon as well. <br><b>[Currently Not Implemented]</b>', 0, 0, 0, 0);

skilldata[1727] = new Array('Coin Craft', 3, 0, 1, 681, 682, 683, 684, 0, 5, 5, 3, 2, 0, 0);
skilldesc[1727] = new Array('Create a coin that gives you random Zeny when you double click.', 'You can receive many different coins depending on the item you use to create. Sometimes, you can even receive a Money Pouch! <br><b>[Currently Not Implemented]</b>', 0, 0, 0, 0);

skilldata[1728] = new Array('Auto Attacking Machine Craft', 1, 0, 1, 694, 699, 0, 0, 0, 10, 3, 0, 0, 0, 0);
skilldesc[1728] = new Array('Create a small tower that attacks enemy for you.', 'You can install up to 3, and even if they did not do any attack, they will disappear eventually. It has auto-Detect skill, and it will automatically attack all enemies within range. It does 100 to 300 random damage, and it ignores enemy DEF. <br><b>[Currently Not Implemented]</b>', 0, 0, 0, 0);

// 45) Assassin Cross
skilldata[1761] = new Array('Advanced Katar Mastery', 5, 0, 0, 201, 723, 0, 0, 0, 5, 7, 0, 0, 0, 0);
skilldesc[1761] = new Array('Increase Katar weapon damage.', 'Only affects Katar-type weapons.', 0, 1, 5, 1, 'Bonus Rate'
, '12%', '14%', '16%', '18%', '20%');

skilldata[1762] = new Array('Soul Destroyer', 10, 0, 2, 201, 205, 724, 727, 0, 5, 5, 3, 6, 0, 85);
skilldesc[1762] = new Array('Inflict an amount of damage to a target that is calculated as half of targets physical Defense added to half of its Magic Defense.', 'Damage is also is affected by the attack strength and INT of the caster. This skill always hits enemies regardless of their FLEE rate [Magical damage only]. This skill ignores all other damage enhancing factors, but if you have elemental weapon, the attack will go in that element.', 4, 1, 10, 2, 'Cast Delay', 'SP Used'
, '2sec', '20', '2.2sec', '20', '2.4sec', '20', '2.6sec', '20', '2.8sec', '20', '3sec', '30', '3.2sec', '30', '3.4sec', '30', '3.6sec', '30', '3.8sec', '30');

skilldata[1763] = new Array('Meteor Assault', 10, 0, 2, 721, 723, 725, 1762, 0, 3, 5, 5, 1, 0, 86);
skilldesc[1763] = new Array('Deliver blows to enemies in a 5*5 cell area around the caster.', 'Also causes various abnormal status effects to enemies by chance. There is a set 0.5 seconds of Cast Delay.', 4, 1, 10, 3, 'ATK Power', 'Aliment Chance', 'SP Used'
, '80%', '10%', '10', '120%', '15%', '12', '160%', '20%', '14', '200%', '25%', '16', '240%', '30%', '18', '280%', '35%', '20', '320%', '40%', '22', '360%', '45%', '24', '400%', '50%', '26', '440%', '55%', '28');

skilldata[1764] = new Array('Create Deadly Poison', 1, 0, 1, 205, 206, 727, 0, 0, 10, 1, 5, 0, 0, 0);
skilldesc[1764] = new Array('Create a bottle of Deadly Poison by using the following materials - 1 Venom Canine, 1 Poison Spore, 1 Cactus Needle, 1 Bee Sting, 1 Karvodailnirol, 1 Berserk Potion and 1 Empty Bottle.', 'DEX and LUK of the caster affects the success rate of skill. When this skill fails, caster loses 25% of Max HP. If an Assassin Cross drinks Deadly Poison, the character will have increased attack speed, but will risk becoming poisoned. Other characters that drink Deadly Poison will instantly die.<br>SP used is 50, and Cast Delay is set to 5 sec. <br><br>Final Calculation of Chance:<br>Base Rate + {(Base Rate * DEX / 50) + (Base Rate * LUK / 100)}', 0, 0, 0, 0);

skilldata[1765] = new Array('Enchant Deadly Poison', 5, 0, 7, 1764, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[1765] = new Array('Enchant deadly poison to enhance a weapons damage. Requires 1 bottle of Deadly Poison.', 'When attacking, the target will be poisoned by chance and the HP amount of the target will dramatically decrease for a duration. When fighting Boss monsters, only the weapons enhanced damage will apply. This skill is not a poison-elemental attack. Cast delay is set to 2sec.', 0, 1, 5, 3, 'ATK %', 'Duration', 'SP Used'
, '200%', '40sec', '60', '250%', '45sec', '70', '300%', '50sec', '80', '350%', '55sec', '90', '400%', '60sec', '100');

// 46) Taekwon
// 47) Ninja
// 48) Gunslinger
// 49)
// 50)
// 51)
// 52)
// 53) Paladin
skilldata[2081] = new Array('Gloria Domini', 5, 0, 2, 7, 1048, 1050, 0, 0, 5, 5, 2, 0, 0, 87);
skilldesc[2081] = new Array('Summon a grand crucifix to crush enemies.', 'Damage inflicted by this skill is not affected by defense or attack strength, but does a consistent amount of damage determined by skill level. Gloria Domini cannot be canceled by any method.', 0, 1, 5, 5, 'Dmg', 'SP Dmg', 'Cast Time', 'Cast Delay', 'SP Used'
, '800', '30', '2sec', '2sec', '50', '1100', '35', '2.5sec', '3sec', '50', '1400', '40', '3sec', '4sec', '50', '1700', '45', '3.5sec', '5sec', '50', '2000', '50', '4sec', '6sec', '50');

skilldata[2082] = new Array('Martyrs Reckoning', 5, 0, 2, 7, 1055, 0, 0, 0, 1, 3, 0, 0, 0, 88);
skilldesc[2082] = new Array('Sacrifice ones HP to do more damage onto an enemy.', '5 attacks will be affected by this skill after it is cast. You will sacrifice up to 3% of your max HP, and can cause up to x1.65 damage of sacrificed HP. However, this skill will not consider your current HP state. Continued usage of this skill can lead to death. This skill has no effect against Boss monsters. SP usage is fixed to 100 for all levels.', 4, 1, 5, 2, 'HP Used', 'Damage * [X]'
, '9%', '100%', '9%', '110%', '9%', '120%', '9%', '130%', '9%', '140%');

skilldata[2083] = new Array('Battle Chant', 10, 0, 7, 1048, 1042, 0, 0, 0, 8, 5, 0, 0, 0, 0);
skilldesc[2083] = new Array('Sing a hymn to cause negative effects onto enemies and to bring positive effects onto the casters forces within a 7x7 radius.', 'Applies to every player and enemy within its range. Note by using this skill, people within can not use potions; but you can receive healing type magic (Heal and Sanctuary). If an enemy uses Lex Divina against Paladin who is using this skill, Gospel will cancel. You cannot overlap this skill with other skills on the caster [only]. While using Gospel, it will periodically take some of the Paladins HP and SP.<br><br>Random Effects [Party]:<br>&#8226; +20 to all stats<br>&#8226; Cure Status Ailments<br>&#8226; Random Heal [1-9999]<br><br> Random Effects [Enemy]<br>&#8226; Removal of buffs<br>&#8226; Random Status Ailment<br>&#8226; Random DEF Bypassed Damage [1-9999]<br>&#8226; 0 DEF + 0 VIT<br>&#8226; 0 ATK<br>&#8226; 0 FLEE<br>&#8226; 75% Penalty to ASPD', 3, 1, 10, 4, 'Chance', 'HP Used/sec', 'SP Used/sec', 'SP Used'
, '55%', '30/10sec', '20 / 10sec', '80', '60%', '30 / 10sec', '20 / 10sec', '80', '65%', '30 / 10sec', '20 / 10sec', '80', '70%', '30 / 10sec', '20 / 10sec', '80', '75%', '30 / 10sec', '20 / 10sec', '80', '80%', '45 / 10sec', '35 / 10sec', '100', '85%', '45 / 10sec', '35 / 10sec', '100', '90%', '45 / 10sec', '35 / 10sec', '100', '95%', '45 / 10sec', '35 / 10sec', '100', '100%', '45 / 10sec', '35 / 10sec', '100');

skilldata[2084] = new Array('Rapid Smiting', 5, 0, 2, 1051, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2084] = new Array('Using the shield, you will deal 5 repeated attack in a single skill.', 'Hit chance of this skill depends on your HIT rate, and additional damage can be gained by having the shield to have high refined rate and having a heavy shield. Final damage will include subtraction from enemy DEF as well. Non-Elemental and requires a shield to be equipped. Range 4. Cast Time - 1 sec. Cast Delay - 2 sec.', 4, 1, 5, 3, 'Dmg', 'HIT Bonus', 'SP Used'
, '130%', '+20', '28', '160%', '+20', '31', '190%', '+20', '34', '220%', '+20', '37', '250%', '+20', '40');

// 54) Scholar
skilldata[2121] = new Array('Indulge', 5, 0, 1, 41, 1089, 0, 0, 0, 1, 1, 0, 0, 0, 0);
skilldesc[2121] = new Array('Consumes 10 % of the Max HP amount to recover a certain amount of SP.', 'As you increase level of this skill, efficiency increases as well. The HP used is set to 10% at all levels.', 0, 1, 5, 3, 'MaxSP from HP', 'Cast Delay', 'SP Used'
, '10%', '2sec', '1', '20%', '2.5sec', '2', '30%', '3sec', '3', '40%', '3.5sec', '4', '50%', '4sec', '5');

skilldata[2122] = new Array('Soul Exhale', 1, 0, 1, 1089, 1087, 0, 0, 0, 3, 2, 0, 0, 0, 0);
skilldesc[2122] = new Array('Exchange the remaining SP amount of the caster with that of the target.', 'Cannot gain more than the maximum SP amount of the target or caster. You can use this for party members in normal maps, and for anyone in PvP. If a magic caster gets SP switched, and his or her SP does not fulfill the requirement for magic he or she was casting, the magic will do absolutely nothing. If you use this on a monster, you regain 3% of your SP. You can not use this skill on a monster again that already had Soul Change. You can also use this skill in Siege Mode (WoE). SP Consumed is 5. Cast Time - 3sec. Cast Delay - 5sec.', 4, 0, 0, 0);

skilldata[2123] = new Array('Soul Siphon', 5, 0, 2, 1085, 1089, 1100, 0, 0, 5, 3, 3, 0, 0, 0);
skilldesc[2123] = new Array('Drains SP from a target by chance.', 'Since this is a damage done to mental system, the damage will be decreased by targets MDEF. At Level 5, this skill also does an amount of damage that is double the remaining SP amount of the caster. However, when this skill fails, the caster will be damaged by this effect. Can only be used in PvP zones and guild war areas.', 4, 1, 5, 3, 'Burn Chance', 'Cast Delay', 'SP Used'
, '40%', '10sec', '80', '50%', '10sec', '90', '60%', '10sec', '100', '70%', '10sec', '110', '70%', '15sec', '120');

skilldata[2124] = new Array('Mind Breaker', 5, 0, 2, 41, 2123, 0, 0, 0, 3, 1, 0, 0, 0, 0);
skilldesc[2124] = new Array('Induce mental turmoil to confuse an enemy.', 'Mind Breaker decreases the enemys Magic Defense, but will increase its MATK. Skill level affects Mind Breakers success rate.', 4, 1, 5, 5, 'Enemy mATK', 'Enemy mDEF', 'Succes Rate', 'Cast Delay', 'SP Used'
, '+20%', '-12%', '60%', '0.8sec', '12', '+40%', '-24%', '65%', '0.9sec', '15', '60%', '-36%', '70%', '1sec', '18', '80%', '-48%', '75%', '1.1sec', '21', '+100%', '-60%', '80%', '1.2sec', '24');

skilldata[2125] = new Array('Foresight', 1, 0, 1, 1084, 1086, 1088, 0, 0, 5, 5, 1, 0, 0, 0);
skilldesc[2125] = new Array('Reduce a skills cast time for 3 casts.', 'Aside from the 3 cast limitation, there is no duration for this skill. However, if the caster dies, Foresight will be canceled. Foresights casting time is 8 seconds, and is not reduced by DEX.', 0, 0, 0, 0);

skilldata[2126] = new Array('Blinding Mist', 1, 0, 1, 1091, 1092, 0, 0, 0, 2, 2, 0, 0, 0, 0);
skilldesc[2126] = new Array('Create a wall of fog in a 2x5 cell area that will cause the Blind effect onto characters and monsters.', 'All long range attacks and magic skills will have a greater chance to miss targets, and will have reduced damage. This skill only works on monsters in normal fields, but will work against characters in PvP. The wall lasts for 20 seconds, and cannot be installed on top of Sage ground based skills except Deluge. Over Deluge  it will last for 40 seconds. Players and enemies on top of Deluge + Fog combination may cure Dark status while in fog, and they will not be blind again until they go outside, then re-enter. There are no casting time associated, and you can put maximum of 2 of this skill on top of each other. SP Consumed, 25.<br><br>Exact value changes are as follows:<br>- Physical ranged attack receives 50% damage penalty, 75% hit rate penalty<br>- All magic has, 75% chance of missing<br>- There is no penalty for physical melee attack<br>- Same penalty applies to characters and monsters that try to attack players or enemies within the fog', 3, 0, 0, 0);

skilldata[2127] = new Array('Fiber Lock', 1, 0, 6, 1099, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[2127] = new Array('Shoot a spider web to bind a target to a spot. Can shoot a maximum of 3 spider webs at one time.', 'The spider web lasts 8 secs. Spider webs can be burnt away with Alchemist Bomb skill, but will do 2.5 times more damage than the Bomb skill while it is burning. Any target caught in the web will receive 50% penalty to FLEE rate and 2x more damage from the fire element. However, this skill only makes target unable to move, but they can still attack you if you are in their range, or if they use magic. In PvP / Siege Mode (WoE), this skill only lasts as half as long. Consumes 50 SP. Requires Spider Web.', 3, 0, 0, 0);

skilldata[2128] = new Array('Double Casting', 5, 0, 1, 1088, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[2128] = new Array('Under this effect, when you use bolt-type skills (including bolts that happen from Auto-Spell), there is a small chance of the skill happening one more time without casting after casting first one normally.', 'Cast Time - 2 sec (not affected by DEX). No Cast Delay.', 0, 1, 5, 3, 'Chance', 'Duration', 'SP Used'
, '40%', '90sec', '40', '50%', '90sec', '45', '60%', '90sec', '50', '70%', '90sec', '55', '80%', '90sec', '60');

// 55) Minstrel
skilldata[2161] = new Array('Arrow Vulcan', 10, 0, 2, 85, 1122, 0, 0, 0, 5, 1, 0, 0, 0, 88);
skilldesc[2161] = new Array('Shoot a flurry of arrows at an enemy.', 'Regardless of the skill level, you will shoot 9 arrows quickly. Minstrel must equip a Musical Instrument, and Gypsy must equip a Whip in order to use this skill.', 4, 1, 10, 4, 'ATK', 'Cast Time', 'Cast Delay', 'SP Used'
, '300%', '2sec', '0.8sec', '12', '400%', '2.2sec', '0.8sec', '14', '500%', '2.4sec', '0.8sec', '16', '600%', '2.6sec', '0.8sec', '18', '700%', '2.8sec', '.8sec', '20', '800%', '3sec', '1sec', '22', '900%', '3.2sec', '1sec', '24', '1000%', '3.4sec', '1sec', '26', '1100%', '3.6sec', '1sec', '28', '1200%', '3.8sec', '1sec', '30');

skilldata[2162] = new Array('Sheltering Bliss', 5, 0, 1, 83, 1121, 0, 0, 0, 5, 7, 0, 0, 0, 0);
skilldesc[2162] = new Array('An ensemble skill for Minstrel and Gypsy that creates a 3*3 cell area around the casters where other characters and monsters cannot enter.', 'This area only blocks characters from entering, and does not offer protection from magical or long range attacks. If there is an obstacle on the desired area, this skill cannot be cast. You cannot use this skill in Siege Mode (WoE).', 3, 1, 5, 3, 'Duration', 'SP Used/tick', 'SP Used'
, '20sec', '4', '30', '25sec', '8', '40', '30sec', '12', '50', '35sec', '16', '60', '40sec', '20', '70');

skilldata[2163] = new Array('Marionette Control', 1, 0, 7, 83, 1121, 0, 0, 0, 10, 5, 0, 0, 0, 0);
skilldesc[2163] = new Array('Half of all of the casters stats will be given to a party member that is not 5 levels higher or lower than the caster.', 'However, the party member receiving these bonus stats cannot exceed 99 for any stat, and the caster cannot move for the skill duration. This skill is canceled if the party member is further than 7 cells away from the caster. Cannot be used in guild war areas. SP Consumption fixed at 100.', 2, 0, 0, 0);

skilldata[2164] = new Array('Longing for Freedom', 5, 0, 1, 1121, 1123, 2163, 0, 0, 10, 3, 1, 0, 0, 0);
skilldesc[2164] = new Array('During duet combination skill of Gypsy and a Minstrel, when this skill is used, this allows the user of this skill to move around in the area affected by the duet skill.', 'Gypsy and Minstrel must use this skill on their own in order to move. The duet combination skill area will be fixed to the area that it started, and if either Gypsy or Minstrel moves out of the duet area, cancel it manually, or either one of them die, the duet skill will cancel as well as this skill. User of this skill will suffer 3 SP removed every 3 second instead of 1 SP every 3 second normally taken when using a duet skill. While under effect of this skill, they can attack and use skills as normal.', 0, 1, 5, 1, 'ATK & Move Speed'
, '60%', '70%', '80%', '90%', '100%');

skilldata[2165] = new Array('Hermond\'s Rod', 5, 0, 1, 83, 1121, 0, 0, 0, 10, 10, 0, 0, 0, 0);
skilldesc[2165] = new Array('All friendly units in this skill will have all their buffs (except Berserk) removed, and they will become invulnerable to magic.', 'Going out of this skill will cancel out the effect. In this skill, other than the user of this skill, no skill can be used. Caster of this skill is not affected, and those that are not in your guild or your party. It can only be used in Siege Mode (WoE). 5 SP every 5 seconds.', 3, 1, 5, 2, 'Duration', 'SP Used'
, '10sec', '20', '15sec', '30', '20sec', '40', '25sec', '50', '30sec', '60');

skilldata[2166] = new Array('Tarot Card of Fate', 5, 0, 1, 83, 1123, 0, 0, 0, 10, 3, 0, 0, 0, 0);
skilldesc[2166] = new Array('Decide fate of the enemy.', 'A card is randomly selected from 14 different cards, and success rate depends on the skill level. This skill has 1 second casting time not affected by DEX, and Cast delay of 3 seconds. SP Conusmption fixed at 40.<br><br>One from 14 different effects. They are as follows:<br><br>The Fool: Sickness of the mind, start from zero.<br>- Renders enemys SP to 0. Right Side.<br><br>The Magician: Overworked, start of the trouble.<br>- Reduces enemys MATK by half for 30 seconds. Opposite Side.<br><br>The High Priestess - Breaking of the knowledge, understand in your own way.<br>- Removes all buffs. Opposite Side.<br><br>The Chariot - Bad luck, desperation, destruction, and unintended accident.<br>- Deals DEF-ignoring 1000 damage. Randomly destroys one armor equipment. Opposite Side.<br><br>Strength - Strength in the wrong way, lose confidence, destruction of nation.<br>- Reduces enemys ATK by half for 30 seconds. Opposite Side.<br><br>The Lovers - Farewell, be discovered while cheating on someone.<br>- Randomly teleports you to somewhere, and heal 2000 HP. If you are in an area where teleportating is not allowed, then you will only receive 2000 HP heal and no teleportation. Opposite Side.<br><br>Wheel of Fortune - Unexpected bad fortune, broken promise, lost goal, self-loathe.<br>- Randomly causes effect of 2 other Tarot cards. Opposite Side.<br><br>The Hanged Man - Precursor of agony, giving up, stop.<br>- Either Stop, Frozen, or Stone will happen regardless of any reasons. Opposite Side.<br><br>Death - Bad luck, unexpected catastrophe, difficult situation, danger of sickness, lose your job.<br>- Will receive Curse, Coma, and Poison all in single set. Right Side.<br><br>Temperance - Impossible to control, tiredness, stubborn, and vanity.<br>- Causes Chaos ailment for next 30 seconds. Opposite Side.<br><br>The Devil - Demons interfere with you, danger of sickness, and unescapable curse.<br>- Deals DEF-ignoring 6666 damage, 30 seconds of halved ATK and MATK, and Curse status ailment. Right Side.<br><br>The Tower - Accidents, losing command, failure, sudden changes, bankrupcy.<br>- Deals DEF-ignoring 4444 damage. Right Side.<br><br>The Star - Destruction of hope, sad future, chaos, and lose judgment.<br>- Causes 5 second of Stun. Opposite Side.<br><br>The Sun - Destruction of country, unsatisfied, chaos, losing of knowledge.<br>- For 30 seconds, ATK, MATK, HIT, FLEE, and DEF will be reduced by 20%. Opposite Side.', 4, 1, 5, 1, 'Success Rate'
, '8%', '16%', '24%', '32%', '40%');

// 56) Champion
skilldata[2201] = new Array('Raging Palm Strike', 5, 0, 2, 1161, 1163, 0, 0, 0, 7, 5, 0, 0, 0, 89);
skilldesc[2201] = new Array('Strike an enemy using the palms.', 'There is a one second delay before the attack actually damages an enemy. When activated, it also pushes the enemy back [3 cells]. Can only be used during Fury status.', 4, 1, 5, 2, 'Dmg', 'SP Used'
, '300%', '2', '400%', '4', '500%', '6', '600%', '8', '700%', '10');

skilldata[2202] = new Array('Glacier Fist', 5, 0, 2, 1161, 1163, 1175, 0, 0, 5, 5, 3, 0, 0, 90);
skilldesc[2202] = new Array('A combo skill that can be used after using Raging Quadruple Blow.', 'An enemy hit by this skill is frozen for a short period of time. Requires 1 Spirit Sphere. <br>[Can be used in the combination Raging Trifecta Blow -> Raging Quadriple Blow -> Raging Thrust -> Raging Palm Strike or on its own.(?)]', 4, 1, 5, 3, 'Dmg', 'Stun Chance', 'SP Used'
, '140%', '20%', '4', '240%', '30%', '6', '340%', '40%', '8', '440%', '50%', '10', '540%', '60%', '10');

skilldata[2203] = new Array('Chain Crush Combo', 10, 0, 2, 2202, 0, 0, 0, 0, 2, 0, 0, 0, 0, 91);
skilldesc[2203] = new Array('A combo skill that can be used after using Glacier Fist.', 'As you level this skill up, amount of hits you will do, as well as overall damage, will increase. Consumes 1 Spirit Sphere to do additional damage. After using this skill, it is possible to use Guillotine Fist. After performing Guillotine Fist, it is impossible to use either Chain Crush Combo or Glacier Fist.', 4, 1, 10, 4, 'Dmg', 'Combo Hits', 'Cast Delay', 'SP Used'
, '500%', '1', '0.8sec', '4', '600%', '1', '0.8sec', '6', '700%', '2', '0.8sec', '8', '800%', '2', '0.8sec', '10', '900%', '3', '0.8sec', '12', '1000%', '3', '1sec', '14', '1100%', '4', '1sec', '16', '1200%', '4', '1sec', '18', '1300%', '5', '1sec', '20', '1400%', '5', '1sec', '22');

skilldata[2204] = new Array('Zen', 1, 0, 1, 1171, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2204] = new Array('Summon 5 Spirit Spheres at once.', 'Cast time is same as Summon Spirit Sphere. There is a penalty associated with this, but it is not implemented. SP Consumed - 20', 0, 0, 0, 0);

// 57) Biochemist
skilldata[2241] = new Array('Alchemy', 5, 0, 1, 1203, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2241] = new Array('You can create many items that are used for Prepare Potion skill.', 'You can easily create Empty Bottles, Empty Potion Bottles, and Test Tubes to help you with other skills that require those items. <br><b>[Not Implemented on iRO]</b>', 0, 0, 0, 0);

skilldata[2242] = new Array('Potion Synthesis', 5, 0, 1, 1203, 2241, 0, 0, 0, 6, 2, 0, 0, 0, 0);
skilldesc[2242] = new Array('Combine many different potions to create new potions.', 'There are already set rules to what can be mixed, and the problem is the success rate. You can create potions that weigh less, but perform the same... or create heavier potions that heal for far more. For potions that summon creatures to attack, they might have better attack rate, or have a new skill to use. <br><b>[Not Implemented on iRO]</b>', 0, 0, 0, 0);

skilldata[2243] = new Array('Aid Condensed Potion', 10, 0, 3, 1206, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2243] = new Array('Consume one Condensed Potion to heal party members within a 7*7 cell area around a targeted spot.', 'Its healing is directly related to skill Lv.', 3, 1, 10, 2, 'Heal', 'SP Used'
, '110%', '30', '120%', '30', '130%', '30', '140%', '30', '150%', '30', '160%', '30', '170%', '30', '180%', '30', '190%', '30', '200%', '30');

skilldata[2244] = new Array('Full Chemical Protection', 5, 0, 7, 1209, 1210, 1211, 1212, 0, 5, 5, 5, 5, 0, 0);
skilldesc[2244] = new Array('This skill provides 4 different kinds of chemical protection at once.', 'SP consumed fixed at 40', 1, 1, 5, 1, 'Duration'
, '120', '240', '360', '480', '600');

skilldata[2245] = new Array('Acid Bomb', 10, 0, 2, 1204, 1205, 0, 0, 0, 5, 5, 0, 0, 0, 0);
skilldesc[2245] = new Array('Uses both flame bottle and acid bottle at the same time, to cause an explosion.', 'Skill level dictates how many times you hit in a row. If this skill is used on a character instead of a monster, it deals only 50% of overall damage. Also, due to the explosion, targets weapon and armor has chance to be destroyed. Damage is increased by increasing your INT. Also, damage is increased if enemys VIT is high. SP consumed is always 30. Cast Time - 1sec. Cast Delay - 1sec.', 4, 1, 10, 2, 'Hits', 'Equip Destroy Chance'
, '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10');

skilldata[2246] = new Array('Plant Cultivation', 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2246] = new Array('By using spores and plant stalk, you can summon a mushroom or a plant.', 'What you get is random, and there is chance of failure. This skill cannot be used in WoE / Siege Mode. It has fixed chance of success of 50% that does not change. SP Consumed is always 10.', 3, 1, 2, 1, 'Effect'
, 'Summon a Black or Red Mushroom using one Mushroom Spore.', 'Summon Yellow, Red, White, Green, Blue, or Shining Plant using one Stem.');

// 58) Stalker
skilldata[2281] = new Array('Stealth', 5, 0, 1, 204, 1250, 0, 0, 0, 5, 3, 0, 0, 0, 0);
skilldesc[2281] = new Array('This skill allows its caster to move slowly while hiding.', 'This skill cannot be detected by skills such as Sight, Ruwach or Improve Concentration. Unlike the hiding skill, the caster will be damaged by ground targeting skills, and will leave footprints when moving. This skill cannot be used against Insect, Demon or Boss monsters. During Guild Sieges, this skill will consume 5 times as much SP.<br>SP consumption fixed at 40. There is an unspecified Cast Time for this skill.', 0, 1, 5, 3, 'Move Speed', 'STR Bonus', 'SP Used/sec'
, '70%', '1', '22 / 10sec', '75%', '2', '25 / 10sec', '80%', '4', '28 / 10sec', '85%', '8', '31 / 10sec', '90%', '16', '34 / 10sec');

skilldata[2282] = new Array('Counter Instinct', 5, 0, 8, 1252, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[2282] = new Array('Only works against enemies using Sword weapons. Parry 3 attacks from an enemy to receive only half of the damage.', 'Skill level affects the chance of blocking attacks. When activated and fighting a monster, this skill will return half of the damage taken by the caster back to the monster.', 0, 1, 5, 2, 'Reflect Chance', 'SP Used'
, '15%', '10', '30%', '15', '45%', '20', '60%', '25', '75%', '30');

skilldata[2283] = new Array('Preserve', 1, 0, 1, 1262, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0);
skilldesc[2283] = new Array('This skill prevents the caster from copying other skills through the Rogue Intimidate skill for 10 minutes, preserving the skill caster has last copied.', 'Lasts 10 minutes, takes 30 SP. Cast time is 1 second.', 0, 0, 0, 0);

skilldata[2284] = new Array('Full Divestment', 5, 0, 4, 1252, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2284] = new Array('This skill works by casting 4 different kinds of divest skills at the same time.', 'Caster must possess higher DEX than the opponent to increase chance of success. SP Consumption fixed at 30.', 4, 1, 5, 1, 'Strip Chance'
, '7%', '9%', '11%', '13%', '15%');

// 59) Taekwon
// 60) Ninja
// 61) Gunslinger
// 62)
// 63)
// 64)
// 65)
// 66) Super Novice
skilldata[2601] = new Array('Sword Mastery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2601] = skilldesc[1];
skilldata[2602] = new Array('Increase HP Recovery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2602] = skilldesc[3];
skilldata[2603] = new Array('Bash', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2603] = skilldesc[4];
skilldata[2604] = new Array('Provoke', 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2604] = skilldesc[5];
skilldata[2605] = new Array('Magnum Break', 10, 0, 2, 2603, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2605] = skilldesc[6];
skilldata[2606] = new Array('Endure', 10, 0, 1, 2604, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2606] = skilldesc[7];
skilldata[2607] = new Array('Increase SP Recovery', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2607] = skilldesc[41];
skilldata[2608] = new Array('Sight', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2608] = skilldesc[42];
skilldata[2609] = new Array('Napalm Beat', 10, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2609] = skilldesc[43];
skilldata[2610] = new Array('Safety Wall', 10, 1, 1, 2609, 2611, 0, 0, 0, 7, 5, 0, 0, 0, 0);
skilldesc[2610] = skilldesc[44];
skilldata[2611] = new Array('Soul Strike', 10, 0, 2, 2609, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[2611] = skilldesc[45];
skilldata[2612] = new Array('Cold Bolt', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2612] = skilldesc[46];
skilldata[2613] = new Array('Frost Driver', 10, 0, 2, 2612, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2613] = skilldesc[47];
skilldata[2614] = new Array('Stone Curse', 10, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2614] = skilldesc[48];
skilldata[2615] = new Array('Fire Bolt', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2615] = skilldesc[49];
skilldata[2616] = new Array('Fire Ball', 10, 0, 2, 2615, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[2616] = skilldesc[50];
skilldata[2617] = new Array('Fire Wall', 10, 0, 2, 2608, 2616, 0, 0, 0, 1, 5, 0, 0, 0, 0);
skilldesc[2617] = skilldesc[51];
skilldata[2618] = new Array('Lightning Bolt', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2618] = skilldesc[52];
skilldata[2619] = new Array('Thunder Storm', 10, 0, 2, 2618, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[2619] = skilldesc[53];
skilldata[2620] = new Array('Owls Eye', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2620] = skilldesc[81];
skilldata[2621] = new Array('Vultures Eye', 10, 0, 0, 2620, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2621] = skilldesc[82];
skilldata[2622] = new Array('Improve Concentration', 10, 1, 1, 2621, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[2622] = skilldesc[86];
skilldata[2623] = new Array('Divine Protection', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2623] = skilldesc[121];
skilldata[2624] = new Array('Demon Bane', 10, 0, 0, 2623, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2624] = skilldesc[122];
skilldata[2625] = new Array('Ruwach', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2625] = skilldesc[123];
skilldata[2626] = new Array('Pneuma', 1, 0, 1, 2628, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0);
skilldesc[2626] = skilldesc[124];
skilldata[2627] = new Array('Teleport', 2, 0, 1, 2625, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[2627] = skilldesc[125];
skilldata[2628] = new Array('Warp Portal', 4, 0, 1, 2627, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[2628] = skilldesc[126];
skilldata[2629] = new Array('Heal', 10, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2629] = skilldesc[127];
skilldata[2630] = new Array('Increase Agi', 10, 1, 1, 2629, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2630] = skilldesc[128];
skilldata[2631] = new Array('Decrease Agi', 10, 1, 1, 2630, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
skilldesc[2631] = skilldesc[129];
skilldata[2632] = new Array('Aqua Benedicta', 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2632] = skilldesc[130];
skilldata[2633] = new Array('Signum Crusis', 10, 0, 1, 2627, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2633] = skilldesc[131];
skilldata[2634] = new Array('Angelus', 10, 0, 1, 2623, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2634] = skilldesc[132];
skilldata[2635] = new Array('Blessing', 10, 1, 1, 2623, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2635] = skilldesc[133];
skilldata[2636] = new Array('Cure', 1, 0, 3, 2629, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
skilldesc[2636] = skilldesc[134];
skilldata[2637] = new Array('Enlarge Weight Limit', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2637] = skilldesc[161];
skilldata[2638] = new Array('Discount', 10, 0, 0, 2637, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2638] = skilldesc[162];
skilldata[2639] = new Array('Overcharge', 10, 0, 0, 2637, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2639] = skilldesc[136];
skilldata[2640] = new Array('Pushcart', 10, 0, 0, 2637, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2640] = skilldesc[164];
skilldata[2641] = new Array('Item Appraisal', 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2641] = skilldesc[165];
skilldata[2642] = new Array('Vending', 10, 0, 1, 2639, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2642] = skilldesc[166];
skilldata[2643] = new Array('Mammonite', 10, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2643] = skilldesc[167];
skilldata[2644] = new Array('Double Attack', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2644] = skilldesc[201];
skilldata[2645] = new Array('Improve Dodge', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2645] = skilldesc[202];
skilldata[2646] = new Array('Steal', 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2646] = skilldesc[203];
skilldata[2647] = new Array('Hide', 10, 0, 1, 2645, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0);
skilldesc[2647] = skilldesc[204];
skilldata[2648] = new Array('Envenom', 10, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
skilldesc[2648] = skilldesc[205];
skilldata[2649] = new Array('Detoxify', 1, 0, 1, 2648, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0);
skilldesc[2649] = skilldesc[206];
// Monster Skills
skilldata[2680][0] = '[No Data]'
skilldata[2681][0] = 'Emotion'
skilldata[2682][0] = 'Summon Slave'
skilldata[2683][0] = 'Summon Monster'
skilldata[2684][0] = 'Holy Attack'
skilldata[2685][0] = 'Shadow Attack'
skilldata[2686][0] = 'Ghost Attack'
skilldata[2687][0] = 'Fire Attack'
skilldata[2688][0] = 'Earth Attack'
skilldata[2689][0] = 'Wind Attack'
skilldata[2690][0] = 'Water Attack'
skilldata[2691][0] = 'Random Element Attack'
skilldata[2692][0] = 'Magic Attack'
skilldata[2693][0] = 'Splash Attack'
skilldata[2694][0] = 'Guide Attack'
skilldata[2695][0] = 'Critical Attack'
skilldata[2696][0] = 'Combo Attack'
skilldata[2697][0] = 'Poison Attack'
skilldata[2698][0] = 'Freeze'
skilldata[2699][0] = 'Petrify'
skilldata[2700][0] = 'Silence Attack'
skilldata[2701][0] = 'Curse Attack'
skilldata[2702][0] = 'Blind Attack'
skilldata[2703][0] = 'Sleep Attack'
skilldata[2704][0] = 'Stun Attack'
skilldata[2705][0] = 'Change Attribute'
skilldata[2706][0] = 'Change to Earth'
skilldata[2707][0] = 'Change to Water'
skilldata[2708][0] = 'Change to Fire'
skilldata[2709][0] = 'Change to Wind'
skilldata[2710][0] = 'Transform'
skilldata[2711][0] = 'Self Destruct'
skilldata[2712][0] = 'Hallucination'
skilldata[2713][0] = 'Energy Drain'
skilldata[2714][0] = 'Dark Breath'
skilldata[2715][0] = 'Arrow Repel'
skilldata[2716][0] = 'Shadow Replification'
skilldata[2717][0] = 'Bind'
skilldata[2718][0] = 'Dispell'
skilldata[2719][0] = 'Rebirth'
skilldata[2720][0] = 'Call Slave'
// Monster Skills
skilldata[2720][0] = 'Call Slave'
skilldata[2721][0] = 'Dark Cross'
skilldata[2722][0] = 'Grand Darkness'
skilldata[2723][0] = 'Defender'
skilldata[2724][0] = 'Pierce Attack'
skilldata[2725][0] = 'Power Up'
skilldata[2726][0] = 'Break Armor'
skilldata[2727][0] = 'Break Weapon'
skilldata[2728][0] = 'Dark Thunder'
skilldata[2729][0] = 'Break Shield'
skilldata[2730][0] = 'Mental Breaker'
skilldata[2731][0] = 'Change to Undead'
skilldata[2732][0] = 'Change to Holy'
skilldata[2733][0] = 'Change to Ghost'
skilldata[2734][0] = 'Dark Blessing'
skilldata[2735][0] = 'Dark Strike'
skilldata[2736][0] = 'Break Helm'
skilldata[2737][0] = 'Stop'
skilldata[2738][0] = 'Change to Shadow'
skilldata[2739][0] = 'Keeping'
skilldata[2740][0] = 'Undead Attack'
// Monster Skills

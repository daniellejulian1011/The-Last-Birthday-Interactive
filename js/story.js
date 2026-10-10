/* THE LAST BIRTHDAY — STORY DATA. All writing, art direction and scenes are original. */
export const ENDINGS = {
  truth: { title:'THE TRUTH SURVIVES', subtitle:'The morning they buried finally comes to light.', tone:'hope', text:'June leaves with the original order, Ruth Hale’s warnings, and the damaged evacuation records. By dawn, the papers have names, dates, and a signature. Robin is not brought back. But no one will ever call his death an unfortunate accident again.' },
  doors: { title:'THE DOORS OPEN', subtitle:'Some doors should never have been locked.', tone:'hope', text:'June throws the emergency release. Every rusted exit bar slams open in sequence. Cold air fills the passageways that trapped so many ten years ago. She steps outside and leaves the doors wide open for the investigators.' },
  ashes: { title:'ASHES TO ASHES', subtitle:'Fire can destroy evidence. It cannot change the past.', tone:'dark', text:'June puts a match to the dry curtains and runs while she still can. Candlewick’s becomes an orange wound against the horizon. When the fire crews arrive, almost nothing remains to prove what Edwin did. The building is gone. Its story may be gone with it.' },
  alone: { title:'ALONE IN THE DARK', subtitle:'Surviving is a choice, too.', tone:'dark', text:'June finds the service exit and keeps running until the lights disappear behind the trees. She will live another day. Inside, the torn banners stir as the machinery settles. She knows what happened. She cannot yet make herself tell anyone.' },
  lastguest: { title:'THE LAST GUEST', subtitle:'One more birthday. One more empty chair.', tone:'dark', text:'June stays beside Robin’s dusty place setting until the first grey light slips through the windows. Somewhere beyond the doorway, metal feet scrape once, then stop. Morning finds her still there, Robin’s little name card held in both hands.' },
  newhost: { title:'THE NEW HOST', subtitle:'The celebration needs someone to keep it alive.', tone:'dark', text:'June takes Edwin’s envelope instead of his confession. The records disappear into a furnace, and the property changes hands quietly. In the weeks that follow, there are reports of new lights behind the boarded windows. June never answers the questions.' },
  caught: { title:'NO MORE CANDLES', subtitle:'The house keeps its final visitor.', tone:'dark', text:'Her flashlight strikes the porcelain face. One ear twitches. The corridor fills with the brutal clatter of old machinery, and her vision tips sideways. When the night goes quiet again, the birthday hall has one more occupied chair.' }
};
const O=(label,to,extras={})=>({label,to,...extras});
const E=(id,title,art,time,speaker,text,options,extras={})=>({id,title,art,time,speaker,text,options,...extras});
export const SCENES = {
  prologue: E('prologue','THE PARTY','birthday1973','OCT 27, 1973 · 7:14 PM','JUNE · AGE 14',
    'Robin is seven today. His birthday crown is too big and he cannot stop laughing. Above the stage, painted letters promise A DAY YOU WILL NEVER FORGET. You wish someone would turn down the lights.',[
      O('Take a picture of Robin','prologue_photo',{effects:{addItems:['family_photo'],addEvidence:['robin_photo']},tag:'📷 A keepsake'}),
      O('Help Robin carry his cake','prologue_cake',{effects:{flags:['helped_robin']},tag:'🎂 A promise'}),
      O('Watch the birthday mascot','prologue_mascot',{tag:'🐰 A performance'})
  ],{chapter:'PROLOGUE · 1973'}),
  prologue_photo:E('prologue_photo','ONE PERFECT SECOND','birthday1973','7:19 PM','ROBIN','“Are you going to take it or what?” He raises two fingers behind his head. The flash freezes him beneath the paper stars. The photograph smells of warm chemical paper.',[O('Put the picture safely away','warning')]),
  prologue_cake:E('prologue_cake','THE SEVENTH CANDLE','birthday1973','7:19 PM','ROBIN','“Don’t let it tip, June!” His grin is fearless. The icing has little pink rabbits on it. Your hands brush as you straighten the cake. You promise him you will never forget tonight.',[O('Walk toward the stage','warning')]),
  prologue_mascot:E('prologue_mascot','THE BIRTHDAY SONG','birthday1973','7:21 PM','MR. MORROW · 1973 RECORDING','A jaunty mechanical voice rings out from the stage speaker: “Hip-hip-hooray! Happy birthday, Robin!” The enormous pink rabbit bows, gears ticking under the music. Its smile stays in place after the applause stops.',[O('Look behind the curtain','warning')]),
  warning:E('warning','THE FIRST WARNING','birthday1973','7:47 PM','JUNE','A bulb pops above the kitchen. A burnt-plastic smell creeps through the streamers. Near the emergency exit, two heavy chains have been wrapped around the panic bars.',[
    O('Tell a member of staff about the chains','p_staff',{effects:{flags:['reported_chains']},tag:'🗝️ Speak up'}),
    O('Find Robin in the party crowd','p_robin',{effects:{flags:['sought_robin']},tag:'❤️ Find him'}),
    O('Try to remove the chains yourself','p_chains',{effects:{flags:['saw_chains']},tag:'⛓️ Investigate'})
  ]),
  p_staff:E('p_staff','THE EMPLOYEE','birthday1973','7:50 PM','EMPLOYEE','“It’s the owner’s instruction. We can’t have the back door left open during a party.” He refuses to look at the smoke collecting near the ceiling.',[O('Run back to Robin','fire')]),
  p_robin:E('p_robin','WHERE IS HE?','birthday1973','7:52 PM','JUNE','Robin had been near the stage. His paper crown lies beneath a folding chair. You call his name over the music, but the lights flicker and the speakers cut out.',[O('Push through the crowd','fire')]),
  p_chains:E('p_chains','NOT AN ACCIDENT','birthday1973','7:52 PM','JUNE','The lock is new. Someone has deliberately chained the emergency exit from the outside. You tug until your fingers sting. Behind you, a little voice calls your name.',[O('Turn around','fire')]),
  fire:E('fire','OCTOBER 27, 1973','fire1973','8:41 PM','JUNE','The kitchen doors blow open. People rush toward exits that will not move. Robin vanishes behind smoke and falling decorations. Mr. Morrow’s birthday song stops in the middle of a note.',[
    O('Try to reach Robin','p_after',{effects:{flags:['tried_rescue'],nerve:-7},tag:'💔 Reach for him'}),
    O('Pull the emergency alarm','p_after',{effects:{flags:['pulled_alarm']},tag:'🚨 Save who you can'})
  ],{scare:'fire',chapter:'THE FIRE · 1973'}),
  p_after:E('p_after','TEN YEARS','fire1973','OCT 27, 1973 · LATER','JUNE','They find you outside with soot on your face. Robin does not come out. At seven years old, your brother dies in the Candlewick’s Celebration Palace fire. The official report calls it an electrical accident. You never believe it.',[O('TEN YEARS LATER…','arrival',{tag:'1983 →'})],{chapter:'ACT I · THE RETURN'}),
  arrival:E('arrival','THE RETURN','exterior','OCT 27, 1983 · 10:46 PM','JUNE · AGE 24','Candlewick’s has been closed since the fire. Now, on the tenth anniversary, someone has scheduled a demolition. A typed notice arrived without a return address: BEFORE THEY BURY THE PLACE, LOOK WHERE THE DOORS WERE LOCKED. You have a flashlight, a 35mm camera, and one night.',[
    O('Approach the abandoned entrance','forecourt',{tag:'🚪 Enter the grounds'}),
    O('Read the demolition notice again','notice',{tag:'📄 Investigate'})
  ],{chapter:'ACT I · THE RETURN'}),
  notice:E('notice','A LETTER WITHOUT A NAME','exterior','10:49 PM','JUNE','The letter has an old Candlewick’s office stamp. The demolition authorization bears Edwin Candlewick’s signature. He is still alive. He still owns the land. Why erase the building after exactly ten years?',[
    O('Pocket the letter and approach','forecourt',{effects:{addEvidence:['demolition_notice']}})
  ]),
  forecourt:E('forecourt','THE PARKING LOT','exterior','10:54 PM','JUNE','Rain taps against the roof of your father’s old station wagon. The neon sign sputters red. One letter in CANDLEWICK’S is dead. Something large crosses the glass lobby doors, too slowly to be a trick of the rain.',[
    O('Enter through the broken front doors','lobby'),
    O('Search the service entrance','service_entrance',{tag:'🔎 Side route'}),
    O('Turn back to the car','leave_early',{tag:'🚗 Walk away'})
  ]),
  service_entrance:E('service_entrance','THE BACK LOT','exterior','11:00 PM','JUNE','A rotten crate holds a faded employee badge and an invoice for heavy chain purchased two days before the fire. Behind you, a hinge gives a dry metallic squeal.',[
    O('Take the employee badge and invoice','lobby',{effects:{addItems:['staff_key'],addEvidence:['chain_invoice'],nerve:-5}}),
    O('Leave it and slip in through the lobby','lobby')
  ]),
  leave_early:E('leave_early','THE ENGINE WILL NOT START','exterior','11:01 PM','JUNE','The engine coughs. In the rear-view mirror, you see the open entrance doors. A tiny triangle of birthday bunting moves in the window. It was still a moment ago. You cannot make yourself drive away with the truth inside.',[
    O('Get out and return to the building','lobby',{effects:{nerve:-4}})
  ]),
  lobby:E('lobby','WELCOME BACK','lobby','11:06 PM','JUNE','The lobby smells of mildew and paper. A welcome sign has fallen face down in a puddle. The doors close behind you on their own weight. In the dark, the ventilation shaft knocks three times.',[
    O('Follow the passage into the grand hall','hall'),
    O('Read the faded evacuation plaque','plaque',{tag:'📜 Evidence'}),
    O('Check the front doors','front_door',{tag:'🚪 Exit'})
  ],{chapter:'ACT II · THE PALACE'}),
  plaque:E('plaque','EVERY EXIT MUST OPEN','lobby','11:08 PM','EVACUATION PLAQUE','The building code requires unimpeded emergency egress. A handwritten red note below it reads: “E.C. ordered chains. R.H. objected. Oct. 25, 1973.” The final two initials are scratched away.',[O('Photograph the plaque','hall',{effects:{addEvidence:['evacuation_plaque']}}),O('Leave without photographing it','hall')]),
  front_door:E('front_door','THE LOBBY DOORS','lobby','11:10 PM','JUNE','The front doors are not locked. You can still leave. But inside, someone has arranged the old birthday hats in a neat row along the reception desk. The smallest one is marked ROBIN.',[O('Take Robin’s paper crown','hall',{effects:{addItems:['paper_crown'],nerve:-6}}),O('Leave it and keep going','hall')]),
  hall:E('hall','THE GRAND CELEBRATION HALL','hall','11:17 PM','JUNE','The center of Candlewick’s has become a maze of overturned tables and water-damaged streamers. Three corridors branch into darkness. Above them hangs the clock that stopped at 8:41. You hear one slow scrape from the stage. Then another.',[
    O('Investigate Mr. Morrow’s main stage','stage'),
    O('Search the shuttered arcade','arcade'),
    O('Enter the employees-only passage','staff',{require:{items:['staff_key']},lock:'Find a staff badge on the grounds or beneath the stage.'}),
    O('Force the employee door','staff_force',{tag:'💥 Risky',hideIf:{items:['staff_key']}}),
    O('Unlock Edwin Candlewick’s office','office',{require:{items:['office_key']},lock:'You need Edwin’s office key from Security.'}),
    O('Follow the locked birthday corridor','final_corridor',{require:{flags:['valve_open','signed_order'],minEvidence:3},lock:'Restore the release valve, find Edwin’s signed order and collect 3 clues.'}),
    O('Leave the palace','ending_alone',{tag:'🏃 Ending'})
  ],{chapter:'ACT II · THE PALACE'}),
  stage:E('stage','THE SILENT STAR','stage','11:22 PM','JUNE','Mr. Morrow’s stage stands empty. Pale handprints mark the walls near the backstage curtain. An enormous footprint dents the wood. There are three fresh gouges near the stair. Something has been walking here.',[
    O('Lift the collapsed birthday backdrop','stage_hatch',{tag:'🔑 Search'}),
    O('Examine the cake table','stage_table',{tag:'🎂 Memory'}),
    O('Step behind the red curtain','stage_curtain',{tag:'⚠️ Dangerous'}),
    O('Return to the grand hall','hall')
  ]),
  stage_hatch:E('stage_hatch','BENEATH THE STAGE','stage','11:25 PM','JUNE','Beneath a false floorboard, you find a staff badge and a bent brass hinge. Someone scratched four numbers into the plank: 10 · 27. The same date you have tried to forget.',[
    O('Keep the badge and return to the hall','hall',{effects:{addItems:['staff_key'],addEvidence:['stage_date']}}),
    O('Listen beneath the stage','stage_curtain',{effects:{nerve:-4}})
  ]),
  stage_table:E('stage_table','THE EMPTY PLACE SETTING','stage','11:27 PM','JUNE','One plate has been kept clean beneath a clear cake cover. A faded name card says ROBIN. Someone visited the palace long after the fire and arranged a birthday table for a child who never turned eight.',[
    O('Pocket the name card','stage',{effects:{addItems:['robin_card'],addEvidence:['place_setting'],nerve:-3}}),
    O('Back away from the table','stage')
  ]),
  stage_curtain:E('stage_curtain','DO NOT MOVE','stage','11:31 PM','JUNE','A towering pink shape stands beyond the curtain. Its left ear hangs loose, its painted eyes hollow. Before you can move, the head turns sharply toward you. It says nothing. Its enormous shoes drag across the floor.',[
    O('Freeze until it passes','stage',{effects:{nerve:-12,flags:['froze_for_morrow']},tag:'🤫 Stay quiet'}),
    O('Fire your camera flash and retreat','stage',{effects:{nerve:-6,flags:['flashed_morrow']},tag:'📸 Dazzle it'})
  ],{scare:'morrow'}),
  arcade:E('arcade','THE DEAD ARCADE','arcade','11:38 PM','JUNE','Cabinets stand in rows like headstones. Some still hold coins in their slots. A photo booth leans against the wall. Near the prize counter, a maintenance terminal glows with one remaining green dot.',[
    O('Open the old photo booth','arcade_photo',{tag:'📷 Clue'}),
    O('Inspect the maintenance terminal','arcade_code',{tag:'🔢 Puzzle'}),
    O('Look under the prize counter','arcade_receipt',{tag:'📜 Clue'}),
    O('Return to the grand hall','hall')
  ]),
  arcade_photo:E('arcade_photo','TWO CHILDREN','arcade','11:41 PM','JUNE','The booth contains a strip of four photographs. You and Robin make ridiculous faces. Behind your shoulders, the emergency exit sign has been partly painted over. The date on the strip is OCT 27, 1973.',[
    O('Keep the photo strip','arcade',{effects:{addItems:['photo_strip'],addEvidence:['photo_strip'],nerve:4}}),
    O('Put it back','arcade')
  ]),
  arcade_receipt:E('arcade_receipt','PRIZE COUNTER LEDGER','arcade','11:43 PM','LEDGER · 1973','A maintenance invoice lists forty feet of chain, six padlocks, and an employee warning submitted by RUTH HALE. The invoice bears a penciled note: “Approved by owner.”',[O('Add the invoice to your case notes','arcade',{effects:{addEvidence:['prize_ledger']}}),O('Leave it','arcade')]),
  arcade_code:E('arcade_code','MAINTENANCE TERMINAL','arcade','11:46 PM','GREEN SCREEN','PROPERTY SYSTEM · 1973. Type the four-digit month and day of the last celebration to release the emergency maintenance drawer.',[
    O('Enter 10-27','arcade_correct',{tag:'🔓 1027'}),
    O('Enter 19-73','arcade_wrong',{tag:'1973'}),
    O('Enter 08-41','arcade_wrong',{tag:'0841'}),
    O('Leave the terminal','arcade')
  ]),
  arcade_wrong:E('arcade_wrong','ACCESS DENIED','arcade','11:47 PM','TERMINAL','The machine lets out a shrill alarm chirp. In the aisle behind you, an arcade cabinet tips sideways. Something large has brushed past it.',[O('Try the maintenance terminal again','arcade_code',{effects:{nerve:-8}}),O('Retreat to the grand hall','hall',{effects:{nerve:-5}})],{scare:'impact'}),
  arcade_correct:E('arcade_correct','THE DRAWER','arcade','11:48 PM','JUNE','Inside the maintenance drawer: a carbon copy of the evacuation-system malfunction report. The exits were obstructed before the fire; the system logged the failure. Someone crossed out the warning in red ink.',[O('Take the report and head back','arcade',{effects:{addEvidence:['maintenance_report'],addItems:['maintenance_report']}})]),
  staff_force:E('staff_force','THE LOCK GIVES','service','11:51 PM','JUNE','You shoulder the door until the rotting jamb breaks. The crash travels down the narrow corridor. Then a much heavier impact answers from somewhere behind you.',[O('Slip into the service corridor','staff',{effects:{nerve:-16,flags:['forced_door']}})],{scare:'impact'}),
  staff:E('staff','THE STAFF CORRIDOR','service','11:54 PM','JUNE','Steel doors line the staff passage. A red line painted on the floor leads to the boiler room. To the right lies the security office. On the left, filing boxes overflow from the old archive. The air feels warmer here.',[
    O('Search Ruth Hale’s archived warnings','archive'),
    O('Enter the security office','security'),
    O('Descend to the boiler room','boiler'),
    O('Return to the grand hall','hall')
  ],{chapter:'ACT III · THE COVER-UP'}),
  archive:E('archive','THE ARCHIVE','archive','12:03 AM','JUNE','Ten years of damp have swollen the cabinets. Cardboard folders are labeled SAFETY, INCIDENT, and PRIVATE. A newspaper headline declares ELECTRICAL FAULT BLAMED IN CELEBRATION PALACE FIRE.',[
    O('Read Ruth Hale’s safety memorandum','archive_ruth',{tag:'📜 Essential'}),
    O('Examine the exit inspection log','archive_exit',{tag:'⛓️ Clue'}),
    O('Search the incident-file photographs','archive_photos',{tag:'📷 Clue'}),
    O('Return to the staff corridor','staff')
  ]),
  archive_ruth:E('archive_ruth','RUTH HALE’S WARNING','archive','12:07 AM','MEMORANDUM · OCT 25, 1973','“I have again advised the proprietor that chaining the south and west exits constitutes an immediate danger. If these routes are not reopened, lives may be lost. — R. Hale, Safety Supervisor.” The memo was marked RECEIVED. It was never acted upon.',[O('Take the original memorandum','archive',{effects:{addEvidence:['ruth_memo'],addItems:['ruth_memo']}})]),
  archive_exit:E('archive_exit','UNSIGNED INSPECTIONS','archive','12:09 AM','JUNE','An inspection log shows that exits were cleared in early October. A later inspection page is missing. Under the staple, someone wrote: E.C. OVERRODE THE ORDER. You photograph the page.',[O('Keep the inspection record','archive',{effects:{addEvidence:['exit_log']}})]),
  archive_photos:E('archive_photos','THE MORNING AFTER','archive','12:11 AM','JUNE','In a set of fire department contact sheets, the padlocks are still intact on the rear doors. The photographs were never included in the public report.',[O('Save the contact sheet','archive',{effects:{addEvidence:['fire_photos']}})]),
  security:E('security','THE SECURITY OFFICE','security','12:16 AM','JUNE','Monitors hang from a rusted rack. One camera points at the stage; another, at a locked corridor. A steel desk holds an office key and a hand-written map of the building. A red lever says MAIN RELAY.',[
    O('Take Edwin’s office key','security_key',{tag:'🔑 Essential'}),
    O('Read the incident camera log','security_log',{tag:'📄 Evidence'}),
    O('Pull the main relay','security_power',{tag:'⚡ Risky'}),
    O('Check the stage camera','security_monitor',{tag:'📺 ⚠️'}),
    O('Return to the staff passage','staff')
  ]),
  security_key:E('security_key','EDWIN’S MASTER KEY','security','12:18 AM','JUNE','The key has a small brass C engraved on its bow. A red tag says OWNER — OFFICE / DEMOLITION FILES.',[O('Keep the key','security',{effects:{addItems:['office_key']}})]),
  security_log:E('security_log','THE SECURITY LOG','security','12:20 AM','JUNE','The final camera log reads: 8:26 smoke visible near kitchen; 8:31 west exit obstructed; 8:41 cameras offline. Another entry has been added recently: OCT 27, 1983 — DEMOLITION REVIEW / E. CANDLEWICK.',[O('Copy the log','security',{effects:{addEvidence:['camera_log']}})]),
  security_power:E('security_power','THE MAIN RELAY','security','12:22 AM','JUNE','You throw the switch. Emergency lights pulse down the corridor. From far away comes the deafening clunk of a large stage mechanism engaging. The old building has power again. A heavy tread sounds beyond the door.',[O('Douse your flashlight and step back','security',{effects:{flags:['relay_on'],nerve:-10}})],{scare:'impact'}),
  security_monitor:E('security_monitor','CAMERA THREE','security','12:24 AM','JUNE','The grainy picture shows the birthday stage. It is empty. The screen rolls and brightens. Mr. Morrow is suddenly inches from the camera, motionless, filling the frame with his broken smile. The picture goes black.',[
    O('Unplug the camera','security',{effects:{nerve:-13}}),
    O('Stare at the dead screen','security',{effects:{nerve:-17,flags:['watched_morrow']}})
  ],{scare:'morrow'}),
  boiler:E('boiler','THE BOILER ROOM','boiler','12:31 AM','JUNE','Iron pipes sweat above an old emergency release mechanism. The evacuation system once controlled the magnetic door latches. Its manual bypass valve is still intact beneath a pressure gauge. Something scratches the other side of the hatch.',[
    O('Turn the emergency bypass valve','boiler_valve',{tag:'🔓 Essential'}),
    O('Read the engineer’s warning','boiler_note',{tag:'📜 Clue'}),
    O('Peer through the maintenance hatch','boiler_hatch',{tag:'⚠️ Dangerous'}),
    O('Return to the staff corridor','staff')
  ]),
  boiler_valve:E('boiler_valve','THE RELEASE VALVE','boiler','12:34 AM','JUNE','The wheel fights you. Then it turns. Far above, one latch releases, then a second. A chain drops onto tile with a sharp metallic crash. Somewhere in the dark, Mr. Morrow changes direction.',[O('Step away before it hears you','staff',{effects:{flags:['valve_open'],nerve:-8,addEvidence:['valve_record']}})],{scare:'impact'}),
  boiler_note:E('boiler_note','MAINTENANCE CAUTION','boiler','12:35 AM','ENGINEERING NOTICE','The bypass can release locked safety doors even without the automatic controller. The owner refused to authorize its use during the October 1973 incident.',[O('Photograph the notice','boiler',{effects:{addEvidence:['bypass_notice']}})]),
  boiler_hatch:E('boiler_hatch','SOMETHING BREATHES METAL','boiler','12:36 AM','JUNE','There is no face behind the hatch. Only an enormous white glove reaching through the bars. The fingers flex. Cold metal scrapes your camera lens as you recoil.',[O('Pull free and run','staff',{effects:{nerve:-18}})],{scare:'morrow'}),
  office:E('office','THE OWNER’S OFFICE','office','12:45 AM','JUNE','Edwin Candlewick’s office is preserved behind a locked door. A portrait hangs over a heavy desk. The odor of fresh cigar smoke does not belong in a room abandoned for ten years. He has been here tonight.',[
    O('Open the leather order book','office_order',{tag:'📜 Essential'}),
    O('Read the demolition correspondence','office_letters',{tag:'🗞️ Evidence'}),
    O('Check Edwin’s personal safe','office_safe',{tag:'🔢 Puzzle'}),
    O('Take the matchbox from the desk','office_matches',{tag:'🔥 Dangerous'}),
    O('Return to the grand hall','hall')
  ],{chapter:'ACT IV · THE OWNER'}),
  office_order:E('office_order','THE SIGNED ORDER','office','12:48 AM','EDWIN CANDLEWICK · OCT 25, 1973','“Chain the service exits during parties. Patrons are to use the main entrance only. I will accept responsibility for this instruction. — E. Candlewick.” The ink is dark and unmistakable. This is why Robin never came home.',[O('Secure the signed order as evidence','office',{effects:{addEvidence:['signed_order'],flags:['signed_order'],addItems:['signed_order']}})]),
  office_letters:E('office_letters','DEMOLITION AUTHORIZATION','office','12:50 AM','JUNE','Edwin ordered the demolition for 6:00 AM tomorrow. An unsigned note says: “The original incident papers must be destroyed before inspection.” A second envelope is addressed to you, dated today.',[O('Photograph the documents','office',{effects:{addEvidence:['demolition_letters'],flags:['knows_edwin_here']}})]),
  office_safe:E('office_safe','THE OWNER’S SAFE','office','12:52 AM','JUNE','The safe has a four-digit dial. A calendar on the desk is still marked at October 1973. A note underneath reads: DAY FIRST, MONTH SECOND. Edwin wanted the date of the tragedy to be his combination.',[
    O('Dial 27-10','office_safe_open',{tag:'🔓 2710'}),
    O('Dial 10-27','office_safe_fail',{tag:'1027'}),
    O('Dial 19-73','office_safe_fail',{tag:'1973'}),
    O('Leave the safe','office')
  ]),
  office_safe_fail:E('office_safe_fail','THE DIAL JAMS','office','12:53 AM','JUNE','The dial clicks shut. A low, deliberate footstep sounds from the hall outside. Then the slow drag of metal across wood.',[O('Try another combination','office_safe',{effects:{nerve:-6}}),O('Hide behind the desk','office',{effects:{nerve:-4}})],{scare:'impact'}),
  office_safe_open:E('office_safe_open','THE CONFIDENTIAL FILE','office','12:55 AM','JUNE','Inside lies the insurer’s settlement agreement, paying Candlewick’s to stay silent about the obstruction. There is also a letter signed by Edwin admitting he told the investigator to exclude the padlock photographs.',[O('Take the settlement letter','office',{effects:{addEvidence:['insurance_coverup']}})]),
  office_matches:E('office_matches','THE MATCHBOX','office','12:56 AM','JUNE','An old brass matchbox has the palace logo etched into its lid. It is full. Beside it is a note: “Everything must be gone before dawn.”',[O('Take the matches','office',{effects:{addItems:['matches']}})]),
  final_corridor:E('final_corridor','THE SEALED PASSAGE','service','1:04 AM','JUNE','The bypass system has unlocked the fire doors. With the evidence tucked inside your jacket, you enter the passage the investigators never photographed. Far below, music-box chimes play three wrong notes, then stop. A large shadow falls across the floor.',[
    O('Keep your flashlight off and slip past','last_party',{effects:{nerve:-8,flags:['quiet_entry']},tag:'🤫 Sneak'}),
    O('Raise the camera and flash the shadow','last_party',{effects:{nerve:-3,flags:['bold_entry']},tag:'📸 Confront'}),
    O('Panic and sprint toward the noise','ending_caught',{tag:'⚠️ Dangerous ending'}),
    O('Return to the main hall','hall')
  ],{chapter:'ACT V · THE LAST BIRTHDAY',scare:'impact'}),
  last_party:E('last_party','ONE MORE BIRTHDAY','final','1:12 AM','JUNE','Someone has laid a fresh birthday table in a room sealed since 1973. Seven unlit candles circle a paper crown. At the far wall stands Mr. Morrow. Its jaw hangs slightly open. No sound comes from the ruined mascot—not a song, not a whisper, not a word.',[
    O('Inspect Robin’s place setting','last_photo',{tag:'❤️ Memory'}),
    O('Approach the silent Mr. Morrow','last_morrow',{tag:'🐰 ⚠️'}),
    O('Investigate the footsteps by the doorway','edwin',{tag:'🕴️ Face the owner'}),
    O('Decide what happens to the palace','final_decision',{tag:'⚖️ Choose your fate'})
  ]),
  last_photo:E('last_photo','A NAME ON A CARD','final','1:14 AM','JUNE','The name card is Robin’s. There is no secret message, no miraculous sign. Only a photograph of a boy who was seven, and a place carefully set for him. You realize that finding the truth does not have to mean staying here forever.',[O('Keep his memory and face the night','last_party',{effects:{flags:['accepted_loss'],nerve:8}})]),
  last_morrow:E('last_morrow','THE MASK','final','1:17 AM','JUNE','Up close, you see rust in the hinges and layers of old paint around the fixed smile. The rabbit’s head tilts. The black eye sockets contain only broken lenses. In the silence, something shifts inside its chest harness. The machine reaches for you.',[
    O('Step back before its hand closes','last_party',{effects:{nerve:-13}}),
    O('Stand still and let it touch your shoulder','ending_caught',{tag:'⚠️ Dangerous ending'})
  ],{scare:'morrow'}),
  edwin:E('edwin','THE OWNER RETURNS','office','1:20 AM','EDWIN CANDLEWICK','“You should have stayed away, Miss Mercer.” Edwin stands by the doorway, older now, his burgundy waistcoat immaculate. He looks at the files in your hands before he looks at your face. “A great many people have already put this behind them.”',[
    O('Accuse him of locking the exits','edwin_accuse',{effects:{flags:['confronted_edwin']}}),
    O('Demand to know why he came tonight','edwin_motive',{effects:{flags:['confronted_edwin']}}),
    O('Say nothing and return to the birthday room','last_party')
  ]),
  edwin_accuse:E('edwin_accuse','THE CONFESSION','office','1:23 AM','EDWIN','“I ordered the chains. I did not order the fire.” His voice loses its composure for a fraction of a second. “The insurers demanded the rest. You could make a very comfortable life by keeping quiet.” He offers an envelope of cash.',[O('Refuse the bribe and make your final choice','final_decision',{effects:{flags:['refused_bribe']}}),O('Consider his offer','final_decision',{effects:{flags:['heard_offer']}})]),
  edwin_motive:E('edwin_motive','THE LAST INSPECTION','office','1:24 AM','EDWIN','“The demolition permit is legal,” Edwin says. “The inspector was not supposed to find the originals.” As he talks, a vast shadow moves across the doorway behind him. Edwin turns white. The machinery in this building does not recognize its owner.',[O('Leave him behind and decide','final_decision',{effects:{flags:['heard_offer'],nerve:-6}})]),
  final_decision:E('final_decision','YOUR LAST DECISION','final','1:28 AM','JUNE','Outside, the sky has begun to pale. The signed order rests against your chest. The bypass valve has opened the escape route. Behind you, the gigantic rabbit waits in silence. There is enough time for one final choice. Whatever you do will stay with you.',[
    O('Expose Edwin and give the records to investigators','ending_truth',{require:{flags:['signed_order'],minEvidence:4},lock:'Find 4 distinct pieces of evidence and Edwin’s signed order.',tag:'📜 Justice'}),
    O('Release every emergency door and escape','ending_doors',{require:{flags:['valve_open']},lock:'The bypass valve must be opened.',tag:'🚪 Mercy'}),
    O('Burn the curtains and destroy the building','ending_ashes',{require:{items:['matches']},lock:'Find the matches in Edwin’s office.',tag:'🔥 Revenge'}),
    O('Take Edwin’s bribe and keep the story buried','ending_newhost',{require:{flags:['heard_offer']},lock:'Confront Edwin to unlock his offer.',tag:'💰 Corruption'}),
    O('Leave the evidence behind and escape alone','ending_alone',{tag:'🌑 Survival'}),
    O('Sit beside Robin’s empty birthday chair until dawn','ending_lastguest',{tag:'🎂 Grief'}),
    O('Return to the birthday room','last_party')
  ],{chapter:'THE CHOICE'}),
  ending_truth:E('ending_truth',ENDINGS.truth.title,'exterior','OCT 28, 1983 · DAWN','ENDING 01 / 06',ENDINGS.truth.text,[],{ending:'truth'}),
  ending_doors:E('ending_doors',ENDINGS.doors.title,'lobby','OCT 28, 1983 · DAWN','ENDING 02 / 06',ENDINGS.doors.text,[],{ending:'doors'}),
  ending_ashes:E('ending_ashes',ENDINGS.ashes.title,'fire1973','OCT 28, 1983 · DAWN','ENDING 03 / 06',ENDINGS.ashes.text,[],{ending:'ashes'}),
  ending_alone:E('ending_alone',ENDINGS.alone.title,'exterior','OCT 28, 1983 · DAWN','ENDING 04 / 06',ENDINGS.alone.text,[],{ending:'alone'}),
  ending_lastguest:E('ending_lastguest',ENDINGS.lastguest.title,'final','OCT 28, 1983 · DAWN','ENDING 05 / 06',ENDINGS.lastguest.text,[],{ending:'lastguest'}),
  ending_newhost:E('ending_newhost',ENDINGS.newhost.title,'final','OCT 28, 1983 · DAWN','ENDING 06 / 06',ENDINGS.newhost.text,[],{ending:'newhost'}),
  ending_caught:E('ending_caught',ENDINGS.caught.title,'scare','OCT 27, 1983 · ??:??','FAILURE ENDING',ENDINGS.caught.text,[],{ending:'caught',scare:'morrow'})
};
export const EVIDENCE={
 robin_photo:['Family Birthday Photograph','A happy moment on October 27, 1973.'],demolition_notice:['Demolition Notice','Edwin ordered the demolition on the ten-year anniversary.'],chain_invoice:['Chain Purchase Invoice','Proof the chains were purchased before the fire.'],evacuation_plaque:['Defaced Exit Plaque','A handwritten warning names E.C. and R.H.'],stage_date:['The Stage Inscription','Someone marked the date of the last birthday.'],place_setting:['Robin’s Place Setting','A table set after the venue was abandoned.'],photo_strip:['Photo Booth Contact Strip','Shows the emergency exit partially obscured.'],prize_ledger:['Prize Counter Ledger','Lists padlocks and Ruth Hale’s written objection.'],maintenance_report:['Maintenance Failure Report','The exit obstruction was officially recorded.'],ruth_memo:['Ruth Hale’s Safety Memo','A clear written warning from two days before the fire.'],exit_log:['Exit Inspection Log','Notes that Edwin overrode the safety order.'],fire_photos:['Fire Department Photographs','The padlocks remained intact after the tragedy.'],camera_log:['Security Camera Log','Shows smoke and blocked exits before cameras failed.'],valve_record:['Emergency Bypass','The manual release still works.'],bypass_notice:['Engineer’s Bypass Warning','Edwin refused permission to release magnetic locks.'],signed_order:['Edwin’s Signed Order','Definitive proof he ordered the exits chained.'],demolition_letters:['Demolition Correspondence','Orders destruction of original incident records.'],insurance_coverup:['Insurance Settlement Letter','An admission of the withheld evidence.']
};
export const ITEMS={family_photo:'Family photograph',staff_key:'Employee badge',paper_crown:'Robin’s paper crown',robin_card:'Robin’s name card',photo_strip:'Photo booth strip',maintenance_report:'Maintenance report',ruth_memo:'Ruth Hale’s memo',office_key:'Office key',signed_order:'Signed exit order',matches:'Brass matchbox'};
export const CHAPTERS=[['PROLOGUE','1973'],['ACT I','The Return'],['ACT II','The Palace'],['ACT III','The Cover-Up'],['ACT IV','The Owner'],['ACT V','The Last Birthday']];

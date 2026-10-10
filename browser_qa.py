"""Browser smoke/regression test using an in-memory page for restricted sandboxes.
The shipped game is unchanged. Scenes are loaded from SVG files as data URLs only in this test.
"""
from pathlib import Path
import base64, re, asyncio, json
from playwright.async_api import async_playwright
ROOT=Path(__file__).resolve().parents[1]
assets={p.stem:'data:image/svg+xml;base64,'+base64.b64encode(p.read_bytes()).decode() for p in (ROOT/'assets/scenes').glob('*.svg')}
style=(ROOT/'style.css').read_text()
style=style.replace("url('assets/scenes/scare.svg')",f"url('{assets['scare']}')")
html=(ROOT/'index.html').read_text()
html=re.sub(r'<link rel="stylesheet"[^>]*>', '<style>'+style+'</style>',html)
html=re.sub(r'<script type="module"[^>]*></script>','',html)
html=html.replace("url('assets/scenes/exterior.svg')",f"url('{assets['exterior']}')")
story=(ROOT/'js/story.js').read_text().replace('export const','const')
game=(ROOT/'js/game.js').read_text()
game=game.replace("import { SCENES, ENDINGS, EVIDENCE, ITEMS } from './story.js';",'')
game=game.replace("`url('assets/scenes/${art}.svg')`","`url('${window.__ARTS__[art]}')`")
game=game.replace("if(['localhost','127.0.0.1'].includes(location.hostname))","if(true){")
script='window.__ARTS__='+json.dumps(assets)+';\n'+story+'\n'+game
async def run():
 async with async_playwright() as pw:
  browser=await pw.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-gpu'])
  page=await browser.new_page(viewport={'width':1440,'height':900})
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  await page.set_content(html,wait_until='load')
  await page.evaluate('''() => { const store = new Map(); Object.defineProperty(window, 'localStorage', { configurable:true, value: { getItem:(k)=>store.has(k)?store.get(k):null, setItem:(k,v)=>store.set(k,String(v)), removeItem:(k)=>store.delete(k) } }); }''')
  await page.add_script_tag(content=script)
  await page.wait_for_timeout(500)
  print('Menu visible:',await page.locator('#main-menu').is_visible())
  await page.screenshot(path=str(ROOT/'preview-menu.png'))
  await page.locator('#new-game').click();await page.wait_for_timeout(200)
  print('Initial scene:',await page.locator('#scene-heading').inner_text())
  assert await page.locator('#scene-heading').inner_text()=='THE PARTY'
  await page.screenshot(path=str(ROOT/'preview-game.png'))
  # Exercise user choices from actual buttons via in-memory QA hooks.
  async def check(scene, choice):
   await page.evaluate('(scene)=>window.__LAST_BIRTHDAY_TEST__.goTo(scene)',scene)
   opts=await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.getOptions()')
   matching=[o for o in opts if choice in o['label']]
   assert matching,(scene,choice,opts)
   return matching[0]['unlocked']
  assert await check('prologue','Take a picture')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Take a picture")')
  assert await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.getScene()')=='prologue_photo'
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("hall")')
  assert not await check('hall','Unlock Edwin')
  assert not await check('hall','Follow the locked birthday corridor')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("arcade_code")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Enter 10-27")')
  assert await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.getScene()')=='arcade_correct'
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("stage_hatch")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Keep the badge")')
  assert await check('hall','Enter the employees-only passage')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("security_key")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Keep the key")')
  assert await check('hall','Unlock Edwin')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("boiler_valve")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Step away")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("office_order")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Secure the signed order")')
  assert await check('hall','Follow the locked birthday corridor')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("final_decision")')
  assert await check('final_decision','Expose Edwin')
  assert await check('final_decision','Release every')
  assert not await check('final_decision','Take Edwin')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("office_matches")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Take the matches")')
  assert await check('final_decision','Burn the curtains')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("edwin_accuse")')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Consider his offer")')
  assert await check('final_decision','Take Edwin')
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.choose("Take Edwin")')
  assert await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.getScene()')=='ending_newhost'
  # Modal, audio and UI controls
  await page.locator('#journal-btn').click();assert await page.locator('#modal-title').inner_text()=='JUNE’S JOURNAL'
  await page.locator('#close-modal').click()
  await page.locator('#pause-btn').click();assert await page.locator('#modal-title').inner_text()=='PAUSED'
  await page.locator('#close-modal').click()
  await page.locator('#game-audio').click()
  print('Current evidence',await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.getState().evidence'))
  assert await page.evaluate('()=>localStorage.getItem("the-last-birthday-vn-save-v1")!==null')
  await page.locator('#pause-btn').click()
  await page.get_by_role('button',name='MAIN MENU').click()
  assert await page.locator('#continue-game').is_enabled()
  await page.locator('#continue-game').click()
  assert await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.getScene()')=='ending_newhost'
  await page.locator('#menu-settings').count() # menu Settings exists while hidden; no interaction needed
  assert not errors,errors
  print('Desktop tests: PASS')
  await page.set_viewport_size({'width':390,'height':844})
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.goTo("hall")')
  await page.screenshot(path=str(ROOT/'preview-mobile.png'))
  print('Mobile choice buttons:',await page.locator('.choice').count())
  print('Mobile horizontal overflow:',await page.evaluate('()=>document.documentElement.scrollWidth > innerWidth'))
  assert not await page.evaluate('()=>document.documentElement.scrollWidth > innerWidth')
  print('Mobile tests: PASS')
  # Complete a real UI route from 1973 to the investigators ending, including hub travel.
  await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.reset()')
  route=[
   ('Take a picture','prologue_photo'),('Put the picture','warning'),('Try to remove','p_chains'),
   ('Turn around','fire'),('Pull the emergency alarm','p_after'),('TEN YEARS LATER','arrival'),
   ('Approach the abandoned entrance','forecourt'),('Enter through the broken','lobby'),
   ('Follow the passage','hall'),('Investigate Mr. Morrow','stage'),('Lift the collapsed','stage_hatch'),
   ('Keep the badge','hall'),('Search the shuttered arcade','arcade'),('Open the old photo booth','arcade_photo'),
   ('Keep the photo strip','arcade'),('Return to the grand hall','hall'),
   ('Enter the employees-only passage','staff'),('Enter the security office','security'),
   ('Take Edwin','security_key'),('Keep the key','security'),('Return to the staff passage','staff'),
   ('Descend to the boiler room','boiler'),('Turn the emergency bypass valve','boiler_valve'),
   ('Step away before','staff'),('Return to the grand hall','hall'),
   ('Unlock Edwin','office'),('Open the leather order book','office_order'),
   ('Secure the signed order','office'),('Return to the grand hall','hall'),
   ('Follow the locked birthday corridor','final_corridor'),('Keep your flashlight off','last_party'),
   ('Decide what happens','final_decision'),('Expose Edwin','ending_truth')]
  for label,expected in route:
   await page.locator('.choice').filter(has_text=label).first.click()
   current=await page.evaluate('()=>window.__LAST_BIRTHDAY_TEST__.getScene()')
   assert current==expected,(label,expected,current)
  assert not errors,errors
  print('Complete human-click UI ending path: PASS ('+str(len(route))+' choices)')
  await browser.close()
asyncio.run(run())

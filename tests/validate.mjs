import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import {SCENES,ENDINGS,EVIDENCE,ITEMS} from '../js/story.js';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const ids=Object.keys(SCENES);let edges=0;
for(const node of Object.values(SCENES)){
 assert.ok(existsSync(resolve(root,`assets/scenes/${node.art}.svg`)),`Missing art: ${node.id}`);
 assert.ok(node.title && node.text && node.speaker && Array.isArray(node.options),`Malformed node: ${node.id}`);
 for(const option of node.options){edges++;assert.ok(SCENES[option.to],`${node.id}: broken link to ${option.to}`);
   for(const item of option.require?.items||[])assert.ok(ITEMS[item],`Unknown required item ${item}`);
   for(const evidence of option.effects?.addEvidence||[])assert.ok(EVIDENCE[evidence],`Unknown evidence ${evidence}`);
   for(const item of option.effects?.addItems||[])assert.ok(ITEMS[item],`Unknown item ${item}`);
 }
}
const reachable=new Set(['prologue']), todo=['prologue'];while(todo.length){const node=SCENES[todo.pop()];for(const opt of node.options){if(!reachable.has(opt.to)){reachable.add(opt.to);todo.push(opt.to)}}}
assert.equal(reachable.size,ids.length,`Unreachable nodes: ${ids.filter(id=>!reachable.has(id))}`);
assert.equal(Object.keys(ENDINGS).length,7);
assert.equal(ids.filter(id=>SCENES[id].ending).length,7);
const route=['prologue','prologue_photo','warning','p_chains','fire','p_after','arrival','forecourt','lobby','hall'];
route.forEach(id=>assert.ok(reachable.has(id),`Missing core story beat ${id}`));
const index=readFileSync(resolve(root,'index.html'),'utf8');
for(const id of ['new-game','continue-game','menu-settings','menu-gallery','game-screen','story-text','choices','modal','dialogue-help'])assert.ok(index.includes(`id="${id}"`),`Missing DOM element ${id}`);
for(const filename of ['index.html','style.css','js/game.js','js/story.js','README.md'])assert.ok(existsSync(resolve(root,filename)),`Missing project file ${filename}`);
console.log(`PASS: ${ids.length} story scenes, ${edges} choices, 7 outcomes, all scene links, all SVG backgrounds, core HTML elements.`);

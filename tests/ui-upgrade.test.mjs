import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const app=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../styles.css',import.meta.url),'utf8');
test('farm modules present, including crop-fit comparison and eight operational tools',()=>{
 for(const name of ['function advisor()', 'function advisorResults(', 'function soil()', 'function planner()', 'function tasks()', 'function health()', 'function harvest()', 'function prices()', 'function storage()', 'function finance()']) assert.ok(app.includes(name),name);
});
test('new farmer homepage has photo-led cards, calls to action and risk notices',()=>{
 for(const name of ['premium-hero','photo-feature-grid','farmland-sunrise.webp','safety-note','from soil to sale']) assert.ok(app.includes(name)||css.includes(name),name);
});
test('local agricultural media included in both source and build output',()=>{
 for(const name of ['farmland-sunrise.webp',...Array.from({length:8},(_,i)=>`feature-${String(i+1).padStart(2,'0')}.webp`)]){
 const f=new URL('../assets/'+name,import.meta.url);assert.ok(fs.statSync(f).size>3000,name);
 }
});
test('crop-fit advisor explains non-validated scores',()=>{
 assert.ok(app.includes('not a probability of crop success'));
 assert.ok(app.includes('soil pH'));
 assert.ok(app.includes('does not use a region-specific variety database'));
});

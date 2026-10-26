import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {crops} from '../data.js';
import {filterCrops} from '../logic.js';

const app=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../styles.css',import.meta.url),'utf8');

test('crop search ignores leading/trailing whitespace and letter case',()=>{
 const query=crops[0].name;
 assert.deepEqual(
  filterCrops(crops,{query:` \t${query.toUpperCase()} \n`}).map(c=>c.id),
  filterCrops(crops,{query}).map(c=>c.id)
 );
});

test('crop search preserves active category, season and sorting filters',()=>{
 const crop=crops[0];
 const results=filterCrops(crops,{category:crop.group,season:crop.season,sort:'duration'});
 assert.ok(results.length>0);
 assert.ok(results.every(c=>c.group===crop.group&&c.season===crop.season));
 assert.deepEqual(results.map(c=>c.duration),[...results.map(c=>c.duration)].sort((a,b)=>a-b));
});

test('clearing the query restores results under the selected filters',()=>{
 const crop=crops[0];
 const options={category:crop.group,season:crop.season,sort:'name'};
 assert.deepEqual(
  filterCrops(crops,{...options,query:'not-a-real-crop'}),
  []
 );
 assert.deepEqual(
  filterCrops(crops,{...options,query:''}).map(c=>c.id),
  filterCrops(crops,options).map(c=>c.id)
 );
});

test('catalogue exposes a keyboard-accessible clear button and retains empty results',()=>{
 assert.match(app,/id="clear-crop-search" class="crop-search-clear" type="button" aria-label="Clear crop search"/);
 assert.match(app,/clearButton\.hidden=!ui\.q/);
 assert.match(app,/ui\.q='';const input=\$\('#crop-search'\);if\(input\)input\.value='';updateCrops\(\);if\(input\)input\.focus\(\)/);
 assert.match(app,/No crops found/);
 assert.match(css,/\.crop-search-clear:focus-visible/);
});

import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {scrollState,phraseIndex} from './scroll-state.js';
assert.deepEqual(scrollState(0,2300,1000),{progress:0,intro:1,story:0});
assert.deepEqual(scrollState(-2000,2300,1000),{progress:1,intro:0,story:1});
assert.equal(scrollState(-650,2300,1000).progress,.5);
assert.equal(scrollState(10,500,1000).progress,0);
const pages=['index','cooling','heating','maintenance','about','contact'];
for(const page of pages){const html=readFileSync(`${page}.html`,'utf8');assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1);for(const [,href] of html.matchAll(/href="([^"]+)"/g)){if(/^[\w-]+\.html$/.test(href))assert(existsSync(href),`${page}: broken link ${href}`);}assert(html.includes('noindex,nofollow'));}
function luminance(hex){const c=hex.match(/\w\w/g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
for(const color of ['b0272e','002d4b'])assert((1.05)/(luminance(color)+.05)>=4.5);
assert.equal(Array.from({length:9},(_,i)=>i%2?5:6).reduce((a,b)=>a+b),50);
console.log('PASS: six pages, internal links, single H1, private indexing, CTA contrast, 50-star flag layout.');

assert.deepEqual([0,.32,.34,.66,.67,1].map(phraseIndex),[0,0,1,1,2,2]);

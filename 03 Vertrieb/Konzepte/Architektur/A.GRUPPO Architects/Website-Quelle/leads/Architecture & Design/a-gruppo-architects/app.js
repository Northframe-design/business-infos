
import './content.js';

const $ = id => document.getElementById(id);
const rooms = [
 {id:'exterior',label:'Home',title:'A.GRUPPO',tagline:'Architecture.<br>Design. Build.',description:'Modern architecture, from concept to construction. Dallas and San Marcos, Texas.'},
 {id:'living',label:'Studio',title:'STUDIO',tagline:'Client. Site.<br>Idea.',description:'A collaborative approach to architecture, balancing precision, restraint and craft.'},
 {id:'kitchen',label:'Projects',title:'WORK',tagline:'Spaces for<br>everyday life.',description:'Explore residential projects and photographs from the A.GRUPPO portfolio.'},
 {id:'bedroom',label:'Contact',title:'TALK',tagline:'An idea.<br>A conversation.',description:'Offices in Dallas and San Marcos. Talk to us about your project.'},
 {id:'terrace',label:'Process',title:'BUILD',tagline:'From concept<br>to construction.',description:'Design and construction as an integrated process. It starts with listening.'}
];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const base = new URL('../../../natura-assets/film/', import.meta.url);
const canvas = $('gl'), ctx = canvas.getContext('2d', {alpha:true});
const blobs = new Map(), bitmaps = new Map(), fetching = new Map(), decoding = new Map();
const hotspots = [];
let manifest, frame = 0, current = -1, ready = false, move = null, drawToken = 0, animationId = 0;
let drawn = -1, width = innerWidth, height = innerHeight, touchY = null;
const clamp = n => Math.max(0, Math.min(manifest.frameCount - 1, n));
const frameURL = i => new URL(`frame-${String(i).padStart(3,'0')}.webp`,base);

async function getBlob(i) {
  if(blobs.has(i)) return blobs.get(i);
  if(fetching.has(i)) return fetching.get(i);
  const task = (async()=>{
    const response = await fetch(frameURL(i));
    if(!response.ok) throw new Error(`Frame ${i}: HTTP ${response.status}`);
    const blob = await response.blob(); blobs.set(i,blob); return blob;
  })().finally(()=>fetching.delete(i));
  fetching.set(i,task); return task;
}
async function getBitmap(i) {
  if(bitmaps.has(i)) {const value=bitmaps.get(i);bitmaps.delete(i);bitmaps.set(i,value);return value;}
  if(decoding.has(i)) return decoding.get(i);
  const task=(async()=>{
    const bitmap = await createImageBitmap(await getBlob(i));bitmaps.set(i,bitmap);
    // Compressed frames stay cached. Only nearby decoded images occupy graphics memory.
    while(bitmaps.size>24) {
      const oldest=[...bitmaps.keys()].find(key=>key!==drawn&&Math.abs(key-frame)>4);
      if(oldest===undefined) break;
      bitmaps.get(oldest).close();bitmaps.delete(oldest);
    }
    return bitmap;
  })().finally(()=>decoding.delete(i));
  decoding.set(i,task);return task;
}
function stacked(){return width<=900||innerHeight<650;}
function artworkRect() {
  if(stacked()) {
    const slot=document.querySelector('.scene-space');
    const size=Math.min(width*.98,slot.clientHeight*1.05);
    return {x:(width-size)/2,y:slot.offsetTop+(slot.clientHeight-size)/2,size};
  }
  const size=Math.min(height*.76,width*.47);
  return {x:width*.605-size/2,y:height*.51-size/2,size};
}
function paint(bitmap,i) {
  const rect=artworkRect();ctx.clearRect(0,0,width,height);
  ctx.drawImage(bitmap,rect.x,rect.y,rect.size,rect.size);
  drawn=i;canvas.dataset.frame=String(i);
  positionHotspots(i,rect);
  document.body.dataset.buffering='false';
}
function positionHotspots(i,rect) {
  const segment=Math.min(3,Math.floor(i/32)),t=(i-segment*32)/32;
  const e=t*t*t*(t*(t*6-15)+10),s0=manifest.stops[segment],s1=manifest.stops[segment+1];
  const mix=(a,b)=>a.map((v,j)=>v*(1-e)+b[j]*e);
  const norm=a=>{const n=Math.hypot(...a);return a.map(v=>v/n);};
  const dot=(a,b)=>a.reduce((s,v,j)=>s+v*b[j],0);
  const target=mix(s0.target,s1.target);target[2]+=Math.sin(Math.PI*e)**2*.3;
  let direction=norm(mix(norm(s0.direction),norm(s1.direction)));
  const turn=Math.sin(Math.PI*e)**2*.08,[dx,dy,dz]=direction;
  direction=[dx*Math.cos(turn)-dy*Math.sin(turn),dx*Math.sin(turn)+dy*Math.cos(turn),dz];
  const right=norm([-direction[1],direction[0],0]);
  const up=[-direction[2]*right[1],direction[2]*right[0],direction[0]*right[1]-direction[1]*right[0]];
  const scale=s0.scale*(1-e)+s1.scale*e+Math.sin(Math.PI*e)**2*.8;
  hotspots.forEach(({element,anchor,index})=>{
    const offset=anchor.map((v,j)=>v-target[j]);
    const x=rect.x+rect.size*(.5+dot(offset,right)/scale),y=rect.y+rect.size*(.5-dot(offset,up)/scale);
    const visible=(i<8||Math.abs(i-manifest.stops[index].frame)<5)&&x>width*.13&&x<width*.78&&y>90&&y<height-180;
    element.classList.toggle('is-visible',visible);element.classList.toggle('is-selected',i>=8);
    element.disabled=!visible;element.hidden=!visible;element.style.left=`${x}px`;element.style.top=`${y}px`;
  });
}
async function draw() {
  const token=++drawToken, i=Math.round(frame);
  canvas.dataset.requestedFrame=String(i);
  if(bitmaps.has(i)) {paint(bitmaps.get(i),i);return;}
  document.body.dataset.buffering='true';
  try {const bitmap=await getBitmap(i);if(token===drawToken) paint(bitmap,i);}
  catch(error) {
    if(token!==drawToken)return;
    console.error(error);document.body.dataset.buffering='false';
    $('film-status').textContent='This view could not load. Select a section to try again.';
  }
}
function warmNearby() {
  const center=Math.round(frame);
  for(let d=1;d<=4;d++) for(const i of [center+d,center-d])
    if(i>=0&&i<manifest.frameCount)getBitmap(i).catch(()=>{});
}
function setFrame(next,{hash=true}={}) {
  frame=clamp(next);canvas.dataset.progress=frame.toFixed(3);
  const index=manifest.stops.reduce((best,stop,i)=>Math.abs(stop.frame-frame)<Math.abs(manifest.stops[best].frame-frame)?i:best,0);
  if(index!==current) {current=index;updateUI();if(hash)history.replaceState(null,'',location.pathname+location.search+(current?`#${rooms[current].id}`:''));}
  $('film-status').textContent='';draw();warmNearby();
}
function stopMotion() {
  cancelAnimationFrame(animationId);move=null;document.body.dataset.transitioning='false';
}
function navigateToRoom(id,{immediate=false}={}) {
  if(!ready)return;
  const index=typeof id==='number'?(id+rooms.length)%rooms.length:rooms.findIndex(r=>r.id===id);
  if(index<0)return;
  closeMenu();stopMotion();const to=manifest.stops[index].frame;
  if(Math.abs(to-frame)<.001){setFrame(to);return;}
  if(immediate||reduced.matches){stopMotion();setFrame(to);return;}
  move={from:frame,to,elapsed:0,lastTime:null,duration:Math.max(600,Math.abs(to-frame)*70)};
  document.body.dataset.transitioning='true';animationId=requestAnimationFrame(animate);
}
window.navigateToRoom=navigateToRoom;
function animate(now) {
  if(!move)return;
  const delta=move.lastTime===null?0:Math.min(50,Math.max(0,now-move.lastTime));
  move.lastTime=now;
  const elapsed=Math.min(move.duration,move.elapsed+delta);
  const t=elapsed/move.duration;
  // The rendered camera path already eases at room stops. Keep a steady
  // playback rate and pause its clock while the next image is decoded.
  const next=move.from+(move.to-move.from)*t;
  const image=Math.round(next);
  if(!bitmaps.has(image)) {
    document.body.dataset.buffering='true';
    getBitmap(image).catch(()=>{});
    animationId=requestAnimationFrame(animate);return;
  }
  move.elapsed=elapsed;
  setFrame(next);
  if(t<1)animationId=requestAnimationFrame(animate);else stopMotion();
}
function updateUI() {
  const room=rooms[current];document.body.dataset.room=room.id;
  $('room-number').textContent=String(Math.max(1,current)).padStart(2,'0');
  $('room-title').textContent=room.title;
  $('room-title').setAttribute('aria-label',room.title.replace('<br> ',' '));
  $('room-tagline').innerHTML=room.tagline;$('room-description').textContent=room.description;
  $('explore-label').innerHTML=current===0?'Explore<br> the house':current===4?'Back to<br> the house':'Explore<br> further';
  $('content-open').textContent=['Explore our work','Meet the studio','View the projects','Get in touch','Our process'][current];
  document.querySelectorAll('.top-nav [data-panel]').forEach(b=>b.classList.toggle('is-current',b.dataset.panel===[null,'office','projects','contact','process'][current]));
  $('sidebar-note').textContent=current===0?'Architecture, design and build. Explore the studio and its work.':'Discover A.GRUPPO through its studio, projects and process.';
  $('scroll-label').textContent=current===0?'to discover':'to continue';
  document.querySelectorAll('.room-link').forEach((b,i)=>b.setAttribute('aria-current',String(i===current)));
  const order=current===0?[0,1,3]:[1,2,3];
  document.querySelectorAll('.thumbnail').forEach((b,i)=>{
    const r=rooms[order[i]];b.dataset.go=r.id;b.setAttribute('aria-label',`View ${r.label}`);
    b.setAttribute('aria-current',String(order[i]===current));
    b.querySelector('img').src=new URL(`thumb-${r.id}.webp`,base);b.querySelector('img').alt=r.label;
    b.querySelector('.thumb-number').textContent=String(i+1).padStart(2,'0');b.querySelector('.thumb-label').textContent=r.label;
  });
}
function closeMenu() {$('menu-panel').hidden=true;$('menu-toggle').setAttribute('aria-expanded','false');}
function buildUI() {

  rooms.forEach((r,i)=>{
    const b=document.createElement('button');b.className='room-link';b.dataset.go=r.id;
    b.innerHTML=`<span class="number">${String(i+1).padStart(2,'0')}</span><span class="dot"></span><span class="label">${r.label}</span><span class="active-line"></span>`;
    $('room-navigation').append(b);
    const menu=document.createElement('button');menu.dataset.go=r.id;menu.textContent=r.label;$('menu-panel').querySelector('nav').append(menu);
    if(i>0&&i<4){
      const spot=document.createElement('button');spot.className='hotspot';spot.dataset.go=r.id;spot.dataset.room=r.id;
      spot.setAttribute('aria-label',`Explore ${r.label}`);spot.innerHTML=`<span class="hotspot-dot"></span><span class="hotspot-label">${r.label}</span>`;
      $('hotspots').append(spot);hotspots.push({element:spot,index:i,anchor:[null,[-2.5,.6,1.2],[3,1.3,1.1],[1.4,3.8,5.1]][i]});
    }
  });
  for(let i=0;i<3;i++){
    const b=document.createElement('button');b.className='thumbnail';
    b.innerHTML='<span class="thumbnail-frame"><img alt=""></span><span class="thumbnail-caption"><span class="thumb-number"></span><span class="thumb-label"></span></span>';
    b.dataset.go='exterior';$('thumbnails').append(b);
  }
  document.addEventListener('click',event=>{const b=event.target.closest('[data-go]');if(b)navigateToRoom(b.dataset.go);});
  $('explore').addEventListener('click',()=>navigateToRoom(current+1));
  $('scroll-cue').addEventListener('click',()=>navigateToRoom(current+1));
  $('menu-toggle').addEventListener('click',()=>{const open=$('menu-panel').hidden;$('menu-panel').hidden=!open;$('menu-toggle').setAttribute('aria-expanded',String(open));});
  document.addEventListener('click',e=>{if(!e.target.closest('#menu-panel,#menu-toggle'))closeMenu();});
  $('retry').addEventListener('click',()=>location.reload());
}
function resize() {
  width=innerWidth;height=stacked()?document.querySelector('.experience').clientHeight:innerHeight;
  const ratio=Math.min(devicePixelRatio,2);canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);
  if(ready)draw();
}
addEventListener('resize',resize);
const blocksInput=()=>!ready||$('studio-dialog').open||!$('menu-panel').hidden;
addEventListener('wheel',e=>{
  if(stacked()||blocksInput()||e.ctrlKey)return;
  if(width<=700&&Math.abs(e.deltaX)>Math.abs(e.deltaY)&&e.target.closest('.room-navigation'))return;
  e.preventDefault();stopMotion();
  const unit=e.deltaMode===1?16:e.deltaMode===2?height:1;
  setFrame(frame+e.deltaY*unit/32);
},{passive:false});
document.querySelector('.experience').addEventListener('touchstart',e=>{
  if(!stacked()&&e.touches.length===1&&!blocksInput()&&!e.target.closest('button,a,nav')){touchY=e.touches[0].clientY;stopMotion();}
},{passive:true});
document.querySelector('.experience').addEventListener('touchmove',e=>{
  if(touchY===null||blocksInput())return;
  e.preventDefault();const y=e.touches[0].clientY;setFrame(frame+(touchY-y)/8);touchY=y;
},{passive:false});
addEventListener('touchend',()=>touchY=null);addEventListener('touchcancel',()=>touchY=null);
addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeMenu();return;}
  if(stacked()||blocksInput()||e.target.closest('button,a,input,textarea'))return;
  if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(e.key)) {e.preventDefault();stopMotion();setFrame(frame+(['ArrowDown','ArrowRight'].includes(e.key)?2:-2));}
  if(e.key==='PageDown'){e.preventDefault();navigateToRoom(Math.min(4,current+1));}
  if(e.key==='PageUp'){e.preventDefault();navigateToRoom(Math.max(0,current-1));}
  if(e.key==='Home'){e.preventDefault();navigateToRoom(0);}
  if(e.key==='End'){e.preventDefault();navigateToRoom(4);}
});
addEventListener('hashchange',()=>navigateToRoom(location.hash.slice(1)||'exterior'));
addEventListener('blur',stopMotion);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopMotion();});
addEventListener('agruppo:content-open',()=>{stopMotion();closeMenu();});

async function preload() {
  const queue=Array.from({length:manifest.frameCount},(_,i)=>i).sort((a,b)=>Math.abs(a-frame)-Math.abs(b-frame));
  await Promise.all(Array.from({length:4},async()=>{
    while(queue.length){const i=queue.shift();try{await getBlob(i);}catch{/* On demand fetching retries a failed background request. */}}
  }));
  document.body.dataset.preloaded=String(blobs.size===manifest.frameCount);
}
async function start() {
  buildUI();resize();
  try {
    const response=await fetch(new URL('manifest.json',base));if(!response.ok)throw new Error('Film manifest unavailable');manifest=await response.json();
    const index=Math.max(0,rooms.findIndex(r=>r.id===location.hash.slice(1)));
    frame=manifest.stops[index].frame;current=index;updateUI();
    $('loading-progress').style.width='35%';
    const first=await getBitmap(frame);paint(first,frame);
    ready=true;setFrame(frame,{hash:false});
    document.body.dataset.ready='true';document.body.dataset.transitioning='false';
    $('loading-progress').style.width='100%';$('loading').classList.add('is-done');
    preload();
  }catch(error){console.error(error);$('loading-message').textContent='The house could not load. Please retry; studio content remains available.';$('retry').hidden=false;}
}
start();

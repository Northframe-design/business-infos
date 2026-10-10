(() => {
 const toggle=document.querySelector('#render-toggle'),sheet=document.querySelector('.bush-sheet');
 toggle.addEventListener('click',()=>{const active=sheet.classList.toggle('is-colour');toggle.setAttribute('aria-pressed',String(active));toggle.textContent=active?'View monochrome ↗':'View in colour ↗';});
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 gsap.matchMedia().add('(prefers-reduced-motion:no-preference)',()=>{
  const render=document.querySelector('.bush-render'),cursor=document.querySelector('.draft-cursor');
  const tl=gsap.timeline();
  document.querySelectorAll('.draft-rulers path').forEach(path=>{const length=path.getTotalLength();gsap.set(path,{strokeDasharray:length,strokeDashoffset:length});tl.to(path,{strokeDashoffset:0,duration:1.35,ease:'power2.inOut'},0);});
  tl.from(render.querySelector('img'),{clipPath:'inset(0 100% 0 0)',opacity:0,duration:1.25,ease:'power2.inOut'},.25)
    .from('.annotation',{opacity:0,scale:.85,stagger:.18,duration:.5},1)
    .from('.bush-title> *',{opacity:0,y:20,stagger:.1,duration:.7},.65);
  const move=e=>{
   if(e.pointerType==='touch')return;
   const r=render.getBoundingClientRect(),x=Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100)),y=Math.max(0,Math.min(100,(e.clientY-r.top)/r.height*100));
   gsap.to(cursor,{'--x':`${x}%`,'--y':`${y}%`,opacity:1,duration:.12,overwrite:true});
   cursor.querySelector('span').textContent=`X ${String(Math.round(x)).padStart(3,'0')} / Y ${String(Math.round(y)).padStart(3,'0')}`;
  };
  const selection=document.createElement('div');selection.className='draft-selection';selection.setAttribute('aria-hidden','true');render.append(selection);
  const hint=document.createElement('span');hint.className='draft-hint';hint.textContent='CLICK + DRAG TO INSPECT';render.append(hint);
  let origin=null;
  const down=e=>{if(e.pointerType==='touch'||e.button!==0)return;const r=render.getBoundingClientRect();origin=[e.clientX-r.left,e.clientY-r.top];render.setPointerCapture(e.pointerId);render.classList.add('is-inspecting');};
  const drag=e=>{if(!origin)return;const r=render.getBoundingClientRect(),x=Math.max(0,Math.min(r.width,e.clientX-r.left)),y=Math.max(0,Math.min(r.height,e.clientY-r.top));Object.assign(selection.style,{left:Math.min(x,origin[0])+'px',top:Math.min(y,origin[1])+'px',width:Math.abs(x-origin[0])+'px',height:Math.abs(y-origin[1])+'px'});};
  const up=()=>{origin=null;};
  const reset=()=>{origin=null;render.classList.remove('is-inspecting');selection.removeAttribute('style');};
  addEventListener('resize',reset);
  render.addEventListener('pointerdown',down);render.addEventListener('pointermove',drag);render.addEventListener('pointerup',up);render.addEventListener('pointercancel',up);
  const leave=()=>gsap.to(cursor,{opacity:0,duration:.25});
  render.addEventListener('pointermove',move);render.addEventListener('pointerleave',leave);

  return()=>{removeEventListener('resize',reset);reset();selection.remove();hint.remove();render.removeEventListener('pointerdown',down);render.removeEventListener('pointermove',drag);render.removeEventListener('pointerup',up);render.removeEventListener('pointercancel',up);render.removeEventListener('pointermove',move);render.removeEventListener('pointerleave',leave);};
 });
})();

(() => {
 const chips=[...document.querySelectorAll('.chip')],items=[...document.querySelectorAll('#grid li')];
 chips.forEach(c=>c.addEventListener('click',()=>{
  chips.forEach(x=>{x.classList.toggle('on',x===c);x.setAttribute('aria-pressed',String(x===c));});
  items.forEach(li=>{li.hidden=c.dataset.f!=='all'&&!li.dataset.c.split(' ').includes(c.dataset.f);});
  window.ScrollTrigger?.refresh();
 }));
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 gsap.matchMedia().add({motion:'(prefers-reduced-motion:no-preference)',desktop:'(min-width:900px) and (min-height:700px)'},ctx=>{
  if(!ctx.conditions.motion)return;
  const desktop=ctx.conditions.desktop;
  const labels=[...document.querySelectorAll('.drawing-steps span')];
  gsap.set('.drawing-lines',{opacity:1}); gsap.set('.drawing-rule',{display:'none'});
  const tl=gsap.timeline({scrollTrigger:{trigger:'.intro',start:desktop?'top top':'top 10%',end:desktop?'+=90%':'bottom 70%',pin:desktop,scrub:.5,invalidateOnRefresh:true,onUpdate:s=>labels.forEach((l,i)=>l.classList.toggle('active',i===Math.min(2,Math.floor(s.progress*3))))}});
  const video=document.querySelector('.drawing-video');
  let videoURL, disposed=false;
  const controller=new AbortController();
  const seek=()=>{if(video.readyState>=2&&!video.seeking)video.currentTime=Math.min(video.duration-.04,2.2+tl.progress()*Math.max(0,video.duration-2.24));};
  // Blob URL keeps seeking reliable on the simple local preview server.
  if(video.readyState>=2){video.closest('.drawing-scene').classList.add('video-ready');seek();}else fetch(video.dataset.src).then(r=>{if(!r.ok)throw new Error('Video unavailable');return r.blob();}).then(blob=>{
   if(disposed)return;
   videoURL=URL.createObjectURL(blob);
   video.addEventListener('loadeddata',()=>{video.closest('.drawing-scene').classList.add('video-ready');seek();},{once:true,signal:controller.signal});
   video.src=videoURL;video.load();
  }).catch(()=>{}); // Sketch-to-photo dissolve remains available on loading failure.
  tl.eventCallback('onUpdate',seek);
  video.addEventListener('seeked',()=>{const target=Math.min(video.duration-.04,2.2+tl.progress()*Math.max(0,video.duration-2.24));if(Math.abs(target-video.currentTime)>.08)seek();},{signal:controller.signal});
  const cleanup=()=>{disposed=true;controller.abort();video.closest('.drawing-scene').classList.remove('video-ready');if(videoURL)URL.revokeObjectURL(videoURL);};
  addEventListener('pagehide',cleanup,{once:true,signal:controller.signal});
  if(desktop){gsap.to('.boothe-visual',{width:'62%',ease:'none',scrollTrigger:{trigger:'.intro',start:'top top',end:'+=90%',scrub:.5}});gsap.to('.boothe-copy',{xPercent:-35,opacity:0,ease:'none',scrollTrigger:{trigger:'.intro',start:'top top',end:'+=65%',scrub:.5}});}
  tl.fromTo('.drawing-lines',{opacity:1},{opacity:0,duration:1,ease:'none'},0)
    .fromTo('.project-strip',{y:22,opacity:.55},{y:0,opacity:1,duration:.5},.4);
  return cleanup;
 });
 document.fonts.ready.then(()=>ScrollTrigger.refresh()); addEventListener('load',()=>ScrollTrigger.refresh());
})();

(() => {
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.matchMedia().add('(prefers-reduced-motion:no-preference)',()=>{
  const footer=document.querySelector('.boothe-signoff');
  const letters=footer.querySelectorAll('.elastic-letter');
  const footerLogo=gsap.timeline({paused:true});
  letters.forEach(letter=>{
   const path=letter.querySelector('.elastic-glyph');
   footerLogo.to(path,{attr:{d:path.dataset.end},duration:1,ease:'none'},0);
  });
  const heading=document.querySelector('.boothe-copy h1');
  if(!heading.querySelector('.boothe-char')){
   heading.setAttribute('aria-label','Architecture with a different perspective.');
   [...heading.children].forEach((line,index)=>{
    line.setAttribute('aria-hidden','true');
    [...line.childNodes].filter(node=>node.nodeType===3).forEach(node=>{
     const fragment=document.createDocumentFragment();
     for(const char of node.textContent){const span=document.createElement('span');span.className='boothe-char';span.textContent=char;span.dataset.direction=index%2?'110':'-110';fragment.append(span);}
     node.replaceWith(fragment);
    });
   });
  }
  gsap.from('.boothe-char',{yPercent:(i,el)=>Number(el.dataset.direction),opacity:0,duration:.65,stagger:.025,ease:'power3.out'});
  gsap.utils.toArray('.grid li').forEach(card=>gsap.from(card.querySelectorAll('h3,p'),{y:18,opacity:0,stagger:.08,duration:.65,scrollTrigger:{trigger:card,start:'top 85%',once:true}}));
  gsap.to('.bar',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:footer,start:'top 20%',end:'top top',scrub:true}});
  // Adapted from the reference footer trigger; Boothe glyph geometry is independent.
  ScrollTrigger.create({animation:footerLogo,trigger:footer,start:'top 50%',end:'bottom bottom',scrub:2});
 });
})();

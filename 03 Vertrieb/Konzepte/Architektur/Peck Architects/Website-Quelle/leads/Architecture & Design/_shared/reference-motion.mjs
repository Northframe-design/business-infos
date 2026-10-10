// Deterministic wrap used by the continuous For Living-style gallery.
export function loopOffset(position,delta,cycle){
 if(!Number.isFinite(cycle)||cycle<=0)return 0;
 return ((position+delta)%cycle+cycle)%cycle;
}
if(typeof document!=='undefined'){
 const studio=document.body.dataset.studio;
 const header=document.querySelector('.bar');
 const syncHeader=()=>document.body.classList.toggle('is-scrolled',scrollY>120);
 addEventListener('scroll',syncHeader,{passive:true});syncHeader();
 if(window.gsap&&window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion:no-preference)',()=>{
   const lenis=window.Lenis?new Lenis({lerp:.09,smoothWheel:true,anchors:true,prevent:node=>!!node.closest('.project-viewer,.mobile-links,.track')}):null;
   const tick=time=>lenis?.raf(time*1000);
   if(lenis){lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tick);}
   const menu=document.querySelector('.mobile-menu'),panel=menu?.querySelector('.mobile-links');
   const menuToggle=()=>{
    if(menu.open){lenis?.stop();gsap.fromTo(panel,{opacity:0,y:-8},{opacity:1,y:0,duration:.5,ease:'power2.out'});gsap.fromTo(panel.children,{opacity:0,yPercent:10},{opacity:1,yPercent:0,duration:1,stagger:.1,ease:'power2.out'});}
    else lenis?.start();
   };
   menu?.addEventListener('toggle',menuToggle);
   // Original reference timings: For Living's header entry and cascading copy.
   if(studio==='peck'){
    gsap.from(header,{yPercent:-150,duration:1,delay:.6,ease:'power2.out'});
    gsap.from('.peck-origin,.peck-stage h1,.peck-intro-copy,.peck-button',{yPercent:12,opacity:0,duration:1,delay:.8,stagger:.15,ease:'power2.out'});
    document.querySelectorAll('.services li').forEach(row=>{
     const tl=gsap.timeline({scrollTrigger:{trigger:row,start:'top 55%',once:true}});
     tl.from(row.children,{xPercent:innerWidth>991?-20:0,yPercent:innerWidth>991?0:-20,opacity:0,duration:.5,stagger:.1,ease:'power2.out'})
       .fromTo(row,{'--row-height':0},{'--row-height':1,duration:.45,ease:'none'},.25)
       .to(row,{'--row-line':1,duration:1,ease:'power2.out'},.7);
    });
   }
   if(studio==='magee'){
    gsap.from('.magee-center>img',{yPercent:18,opacity:0,duration:1.3,delay:1.8,ease:'power3.out'});
    gsap.from('.magee-center h1,.magee-hero-foot',{y:24,opacity:0,duration:.9,delay:2,stagger:.15});
    gsap.utils.toArray('.pillars>div').forEach(row=>gsap.from(row,{y:45,opacity:0,duration:.8,scrollTrigger:{trigger:row,start:'top 85%',once:true}}));
   }
   if(studio==='bush'){
    // Heron's framed technical panels contract and headings reveal line by line.
    gsap.to('.bush-sheet',{scale:.94,opacity:.3,transformOrigin:'50% 0',ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
    gsap.utils.toArray('.about .text p,.team>article,.contact address').forEach(el=>gsap.from(el,{yPercent:25,opacity:0,duration:.7,scrollTrigger:{trigger:el,start:'top 85%',once:true}}));
   }
   const headings=studio==='boothe'?'.statement .big,.contact h2':studio==='bush'?'.bush-unused-heading':studio==='magee'?'.about h2,.contact h2':'.about h2';
   gsap.utils.toArray(headings).forEach(el=>gsap.from(el,{clipPath:'inset(0 0 100% 0)',y:35,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',once:true}}));
   return()=>{menu?.removeEventListener('toggle',menuToggle);gsap.ticker.remove(tick);lenis?.destroy();};
  });
  if(studio==='boothe'){
   gsap.matchMedia().add('(max-width:899px) and (prefers-reduced-motion:no-preference)',()=>{
    document.querySelectorAll('#projects .grid figure').forEach(figure=>{
     const trigger={trigger:figure,start:'top 90%',end:'top 25%',scrub:.25};
     gsap.fromTo(figure,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0)',ease:'none',scrollTrigger:trigger});
     gsap.fromTo(figure.querySelector('img'),{scale:1.5,yPercent:-15},{scale:1,yPercent:0,ease:'none',scrollTrigger:trigger});
    });
   });
   gsap.matchMedia().add('(hover:hover) and (prefers-reduced-motion:no-preference)',()=>{
    const tags=[...document.querySelectorAll('.statement .tags li')],photos=[...document.querySelectorAll('.grid img')];
    const preview=document.createElement('figure');preview.className='term-preview';preview.setAttribute('aria-hidden','true');
    const image=document.createElement('img');image.alt='';preview.append(image);document.body.append(preview);
    const cleanups=[];
    tags.forEach((tag,i)=>{
     const original=tag.textContent;tag.tabIndex=0;tag.setAttribute('aria-label',original);tag.textContent='';
     const label=document.createElement('span');label.className='term-label';label.setAttribute('aria-hidden','true');label.textContent=original;
     const duplicate=label.cloneNode(true);duplicate.classList.add('term-duplicate');tag.append(label,duplicate);
     const move=e=>gsap.to(preview,{x:Math.min(innerWidth-340,Math.max(20,e.clientX+24)),y:Math.max(90,Math.min(innerHeight-240,e.clientY-200)),duration:.35,ease:'power2.out',overwrite:'auto'});
     const enter=()=>{
      image.src=photos[i].src;const r=tag.getBoundingClientRect();move({clientX:r.right,clientY:r.top});
      gsap.fromTo(preview,{autoAlpha:1,clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0)',duration:1.25,ease:'power3.out',overwrite:true});
      gsap.fromTo(image,{scale:2},{scale:1,duration:2,delay:.5,ease:'power3.out',overwrite:true});
      gsap.to(label,{yPercent:-50,opacity:0,duration:.33,overwrite:true});gsap.fromTo(duplicate,{yPercent:50,opacity:0},{yPercent:0,opacity:1,duration:.33,overwrite:true});
     };
     const leave=()=>{gsap.to(preview,{autoAlpha:0,duration:.25,overwrite:true});gsap.to(label,{yPercent:0,opacity:1,duration:.33,overwrite:true});gsap.to(duplicate,{yPercent:50,opacity:0,duration:.33,overwrite:true});};
     tag.addEventListener('pointerenter',enter);tag.addEventListener('pointermove',move);tag.addEventListener('pointerleave',leave);tag.addEventListener('focus',enter);tag.addEventListener('blur',leave);
     cleanups.push(()=>{tag.removeEventListener('pointerenter',enter);tag.removeEventListener('pointermove',move);tag.removeEventListener('pointerleave',leave);tag.removeEventListener('focus',enter);tag.removeEventListener('blur',leave);tag.textContent=original;tag.removeAttribute('tabindex');tag.removeAttribute('aria-label');});
    });
    return()=>{cleanups.forEach(fn=>fn());gsap.killTweensOf([preview,image]);preview.remove();};
   });
   gsap.matchMedia().add('(min-width:900px) and (min-height:700px) and (prefers-reduced-motion:no-preference)',()=>{
    const work=document.querySelector('#projects'),grid=work.querySelector('.grid');
    work.classList.add('is-horizontal');
    const progress=document.createElement('div');progress.className='work-progress';progress.setAttribute('aria-hidden','true');progress.innerHTML='<i></i>';work.append(progress);
    const distance=()=>Math.max(0,grid.scrollWidth-work.clientWidth+innerWidth*.1);
    const tween=gsap.to(grid,{x:()=>-distance(),ease:'none',scrollTrigger:{trigger:work,start:'top top',end:()=>`+=${Math.max(innerHeight,distance())}`,pin:true,refreshPriority:1,scrub:1,invalidateOnRefresh:true,onUpdate:self=>work.style.setProperty('--work-progress',self.progress)}});
    // Normal: narrow image columns unfold, the image settles and captions enter per letter.
    const captionRestores=[];
    [...grid.children].forEach((card,index)=>{
     const figure=card.querySelector('figure'),img=figure.querySelector('img'),title=card.querySelector('b');
     const copy=title.textContent;captionRestores.push(()=>title.textContent=copy);
     title.setAttribute('aria-label',copy);title.textContent='';
     [...copy].forEach(char=>{const span=document.createElement('span');span.className='project-char';span.textContent=char===' '?'\u00a0':char;span.setAttribute('aria-hidden','true');title.append(span);});
     gsap.fromTo(figure,{clipPath:'inset(0 75% 0 0)'},{clipPath:'inset(0 0% 0 0)',ease:'power1.inOut',scrollTrigger:{trigger:card,containerAnimation:tween,start:'left 90%',end:'left 20%',scrub:true}});
     gsap.fromTo(img,{scale:1.5,yPercent:-15},{scale:1,yPercent:0,ease:'power1.inOut',scrollTrigger:{trigger:card,containerAnimation:tween,start:'left 90%',end:'left 20%',scrub:true}});
     gsap.from(title.children,{yPercent:100,duration:.25,stagger:.05,ease:'power2.out',scrollTrigger:{trigger:card,containerAnimation:tween,start:'left 75%',toggleActions:'play none none reverse'}});
    });
    const change=()=>{ScrollTrigger.refresh();window.scrollTo({top:tween.scrollTrigger.start,behavior:'instant'});};
    work.querySelectorAll('.chip').forEach(el=>el.addEventListener('click',change));
    const focus=e=>{
     const item=e.target.closest('.grid>li');if(!item)return;
     const offset=Math.min(distance(),Math.max(0,item.offsetLeft-grid.offsetLeft));
     window.scrollTo({top:tween.scrollTrigger.start+offset,behavior:'instant'});
    };
    grid.addEventListener('focusin',focus);
    return()=>{captionRestores.forEach(restore=>restore());work.classList.remove('is-horizontal');progress.remove();grid.removeEventListener('focusin',focus);work.querySelectorAll('.chip').forEach(el=>el.removeEventListener('click',change));};
   });
  }
 }
 if(studio==='peck'){
  const contact=document.querySelector('.contact'),signature=document.createElement('p');signature.className='peck-signature';signature.textContent='PECK ARCHITECTS';signature.setAttribute('aria-hidden','true');contact.append(signature);
  const track=document.querySelector('.track'),controls=document.createElement('div');controls.className='gallery-controls';
  controls.innerHTML='<button type="button" class="gallery-prev" aria-label="Previous projects">←</button><button type="button" class="gallery-pause" aria-pressed="false">Pause motion</button><button type="button" class="gallery-next" aria-label="Next projects">→</button>';
  track.before(controls);
  const pause=controls.querySelector('.gallery-pause');
  let manualUntil=0;
  const step=direction=>{manualUntil=Date.now()+1200;track.scrollBy({left:direction*(track.querySelector('.proj').getBoundingClientRect().width+32),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});};
  controls.querySelector('.gallery-prev').addEventListener('click',()=>step(-1));controls.querySelector('.gallery-next').addEventListener('click',()=>step(1));
  if(window.gsap)gsap.matchMedia().add('(min-width:900px) and (prefers-reduced-motion:no-preference)',()=>{
   const originals=[...track.children],copies=originals.slice(0,6).map(el=>{const clone=el.cloneNode(true);clone.inert=true;clone.setAttribute('aria-hidden','true');track.append(clone);return clone;});
   let paused=false,hover=false,focused=false,visible=false,position=track.scrollLeft;
   const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;});observer.observe(track);
   const onPause=()=>{paused=!paused;pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'Resume motion':'Pause motion';};
   const enter=()=>hover=true,leave=()=>hover=false,focus=()=>focused=true,blur=e=>{focused=track.contains(e.relatedTarget);};
   track.addEventListener('pointerenter',enter);track.addEventListener('pointerleave',leave);track.addEventListener('focusin',focus);track.addEventListener('focusout',blur);pause.addEventListener('click',onPause);
   const tick=(time,delta)=>{
    if(paused||hover||focused||!visible||document.hidden||Date.now()<manualUntil){position=track.scrollLeft;return;}
    const cycle=copies[0].offsetLeft-originals[0].offsetLeft;
    const speed=(originals[0].getBoundingClientRect().width+32)/7.5;
    position=loopOffset(position,Math.min(delta,50)/1000*speed,cycle);track.scrollLeft=position;
   };
   gsap.ticker.add(tick);
   return()=>{gsap.ticker.remove(tick);observer.disconnect();copies.forEach(el=>el.remove());pause.removeEventListener('click',onPause);track.removeEventListener('pointerenter',enter);track.removeEventListener('pointerleave',leave);track.removeEventListener('focusin',focus);track.removeEventListener('focusout',blur);pause.textContent='Pause motion';pause.setAttribute('aria-pressed','false');};
  });
 }
 document.fonts.ready.then(()=>window.ScrollTrigger?.refresh());
}

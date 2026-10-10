(() => {
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 const hero=document.querySelector('.intro'),cards=document.querySelector('.peck-worlds');
 const shade=document.createElement('div');shade.className='peck-shade';shade.setAttribute('aria-hidden','true');hero.append(shade);
 const light=document.createElement('img');light.src=document.querySelector('.peck-material').src;light.alt='';light.className='peck-light';hero.prepend(light);
 const mm=gsap.matchMedia();
 mm.add({desktop:'(min-width:900px)',mobile:'(max-width:899px)',motion:'(prefers-reduced-motion:no-preference)'},ctx=>{
  if(!ctx.conditions.motion)return;
  if(ctx.conditions.desktop){
   const next=cards.nextSibling,parent=cards.parentNode;
   hero.classList.add('has-cardstage');hero.append(cards);
   const tl=gsap.timeline({scrollTrigger:{trigger:hero,start:'top top',end:'+=100%',pin:true,pinSpacing:false,scrub:1,invalidateOnRefresh:true}});
   gsap.set(cards,{top:'50svh'});
   tl.to(shade,{opacity:.8,duration:1,ease:'power2.out'},.125)
     .to(cards,{top:'0svh',duration:.2},.125)
     .to('.peck-stage',{opacity:0,filter:'blur(5px)',duration:1,ease:'power2.out'},.205)
     .to('.peck-image-note',{opacity:0,duration:.3},0);
   [...cards.children].forEach((card,i)=>tl.fromTo(card,{yPercent:180},{yPercent:[-45,-30,-15][i],duration:1.25,ease:'none'},.205));
   const move=e=>{const r=hero.getBoundingClientRect();gsap.to(light,{'--mx':`${e.clientX-r.left}px`,'--my':`${e.clientY-r.top}px`,duration:.05,overwrite:true});};
   hero.addEventListener('pointermove',move);
   return ()=>{hero.removeEventListener('pointermove',move);hero.classList.remove('has-cardstage');gsap.set(cards,{clearProps:'top'});parent.insertBefore(cards,next);gsap.set(cards.children,{clearProps:'all'});};
  }
  gsap.fromTo(shade,{opacity:0},{opacity:.8,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom 25%',scrub:1}});
  gsap.fromTo('.peck-stage',{opacity:1,filter:'none'},{opacity:0,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom 30%',scrub:1}});
  gsap.fromTo(light,{'--mx':'75%','--my':'5%'},{'--mx':'15%','--my':'75%',duration:3,yoyo:true,repeat:-1,ease:'power2.inOut'});
  [...cards.children].forEach(card=>ScrollTrigger.create({trigger:card,start:'top 62%',end:'top 16%',toggleClass:'active'}));
 });
 document.fonts.ready.then(()=>ScrollTrigger.refresh());
})();

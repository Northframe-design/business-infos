(() => {
 if(!window.gsap || !window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 gsap.matchMedia().add('(max-width:899px)',()=>{const hint=document.querySelector('.showcase-foot>span'),text=hint.textContent;hint.textContent='Swipe to explore the collection';return()=>{hint.textContent=text;};});
 gsap.matchMedia().add('(min-width:900px) and (prefers-reduced-motion:no-preference)',()=>{
  const controller=new AbortController();
  import('./showcase.mjs?v=35').then(m=>m.mountShowcase(document.querySelector('.showcase-stage'),controller.signal)).catch(error=>console.warn('Gallery uses photo fallback:',error));
  gsap.from('.magee-backdrop',{scale:1.05,duration:2,delay:2,ease:'power3.out'});
  gsap.to('.magee-center',{yPercent:-18,opacity:0,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom 30%',scrub:true}});
  return()=>controller.abort();
 });
 document.querySelectorAll('.cat').forEach(el=>el.addEventListener('toggle',()=>ScrollTrigger.refresh()));
 document.fonts.ready.then(()=>ScrollTrigger.refresh());
})();

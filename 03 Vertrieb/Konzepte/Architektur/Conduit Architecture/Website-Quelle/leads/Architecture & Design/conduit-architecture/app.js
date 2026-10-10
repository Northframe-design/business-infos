(() => {
 if (!window.gsap || !window.ScrollTrigger) return;
 gsap.registerPlugin(ScrollTrigger);
 const mm=gsap.matchMedia();
 mm.add({motion:'(prefers-reduced-motion: no-preference)',desktop:'(min-width:900px)'},context=>{
   if(!context.conditions.motion)return;
   const intro=document.querySelector('.intro'), assembly=document.querySelector('.assembly');
   const header=document.querySelector('.bar-logo img');
   const desktop=context.conditions.desktop;
   const metrics=()=>{
     const box=intro.getBoundingClientRect(), h=header.getBoundingClientRect();
     const unit=Math.min(box.width/760,box.height/440);
     const ox=(box.width-760*unit)/2, oy=(box.height-440*unit)/2;
     const scale=h.width/760/unit;
     return {box,unit,ox,oy,scale,x:h.left-box.left-ox*scale,y:h.top-(oy+100*unit)*scale};
   };
   gsap.set('.hero-film',{display:'block'});
   gsap.set('.conduit-overview',{marginTop:-innerHeight});
   gsap.set(header,{opacity:0});
   gsap.set('.bar',{autoAlpha:0});
   gsap.set(assembly,{transformOrigin:'0 0',zIndex:40});
   const tl=gsap.timeline({scrollTrigger:{trigger:intro,start:'top top',end:desktop?'+=190%':'+=140%',pin:true,scrub:.55,invalidateOnRefresh:true}});
   tl.fromTo('.hero-strip',{left:i=>i*100/7+'%',top:0,width:100/7+'%',height:'100%'},{left:i=>{const m=metrics();return m.ox+(12+i*10)*m.unit;},top:i=>{const m=metrics();return m.oy+(100+[42,42,22,22,42,42,22][i])*m.unit;},width:()=>2.5*metrics().unit,height:i=>(148-[42,42,22,22,42,42,22][i])*metrics().unit,duration:1.1,stagger:.025,ease:'power3.inOut'},0);
   tl.fromTo('.hero-film',{opacity:1},{opacity:0,duration:.15},1.1);
   tl.fromTo('.logo-piece',{opacity:0},{opacity:1,duration:.2,stagger:.015},1.05);
   tl.fromTo('.logo-letter',{x:80,y:22,opacity:0},{x:0,y:0,opacity:1,duration:.65,stagger:.045,ease:'power3.out'},.8);
   tl.fromTo('.logo-descriptor',{y:10,opacity:0},{y:0,opacity:1,duration:.4,stagger:.008},1.25);
   tl.to('.intro-meta,.intro-footer',{opacity:0,duration:.3},1.65);
   tl.to('.bar',{autoAlpha:1,backgroundColor:'rgba(25,25,25,0)',duration:.35},1.85);
   tl.to(assembly,{x:()=>metrics().x,y:()=>metrics().y,scale:()=>metrics().scale,duration:.85,ease:'power3.inOut'},1.85);
   tl.to(header,{opacity:1,duration:.08},2.67).to(assembly,{opacity:0,duration:.08},2.67);
   tl.to('.bar',{backgroundColor:'rgba(25,25,25,.96)',duration:.08},2.75);
   tl.to('.intro-stage',{opacity:0,duration:.15},2.7);
   gsap.matchMedia().add('(min-width:900px) and (min-height:680px)',()=>{
     const track=document.querySelector('.track');
     const distance=()=>Math.max(0,track.scrollWidth-innerWidth);
     gsap.to(track,{x:()=>-distance(),ease:'none',scrollTrigger:{trigger:'.work',start:'top top',end:()=>'+='+distance(),pin:true,scrub:.55,invalidateOnRefresh:true,onUpdate:s=>document.querySelector('#count-n').textContent=String(Math.min(7,Math.floor(s.progress*7)+1)).padStart(2,'0')}});
   });
 });
 const refresh=()=>ScrollTrigger.refresh();
 document.fonts.ready.then(refresh); addEventListener('load',refresh);
})();

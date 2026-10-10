// Heron home-page motion mapped to the studio's existing project content.
const motion=matchMedia('(prefers-reduced-motion:no-preference)');
const rows=[...document.querySelectorAll('.bush-index-row')];
rows.forEach(row=>row.addEventListener('toggle',()=>{
 if(row.open)rows.filter(other=>other!==row).forEach(other=>other.open=false);
 window.ScrollTrigger?.refresh();
}));
if(window.gsap&&window.ScrollTrigger){
 const mm=gsap.matchMedia();
 mm.add('(min-width:900px) and (prefers-reduced-motion:no-preference)',()=>{
  const stage=document.querySelector('.bush-sequence'),cards=[...stage.children];
  stage.classList.add('is-sequence');
  const nav=document.createElement('div');nav.className='sequence-nav';nav.setAttribute('aria-label','Selected project');
  cards.forEach((card,i)=>{const button=document.createElement('button');button.type='button';button.textContent=String(i+1).padStart(2,'0');button.setAttribute('aria-label',card.querySelector('h2').textContent);nav.append(button);});
  stage.append(nav);
  let active=-1;
  const activate=index=>{if(index===active)return;active=index;cards.forEach((card,i)=>{card.inert=i!==index;card.setAttribute('aria-hidden',String(i!==index));});[...nav.children].forEach((button,i)=>button.setAttribute('aria-current',String(i===index)));};
  const tl=gsap.timeline({scrollTrigger:{trigger:stage,start:'top 90px',end:()=>`+=${innerHeight*4}`,pin:true,scrub:true,refreshPriority:1,invalidateOnRefresh:true,onUpdate:self=>activate(Math.min(3,Math.floor(self.progress*4+.3)))}});
  cards.forEach((card,i)=>{
   gsap.set(card,{autoAlpha:i===0?1:0,scale:i===0?1:1.04,y:i===0?0:48});
   if(i)tl.to(card,{autoAlpha:1,y:0,scale:1,duration:.5,ease:'none'},i-.3);
   tl.to(card.querySelector('img'),{scale:1.025,duration:.85,ease:'none'},i);
   if(i<3)tl.to(card,{autoAlpha:0,y:-48,scale:.96,duration:.5,ease:'none'},i+.7);
  });
  tl.to({hold:0},{hold:1,duration:.5},3.5);activate(0);
  const jump=index=>window.scrollTo({top:tl.scrollTrigger.start+(tl.scrollTrigger.end-tl.scrollTrigger.start)*(index+.45)/4,behavior:'instant'});
  [...nav.children].forEach((button,i)=>button.addEventListener('click',()=>jump(i)));
  const next=event=>{const a=event.target.closest('a.next');if(!a)return;const index=cards.findIndex(card=>'#'+card.id===a.getAttribute('href'));if(index>=0){event.preventDefault();event.stopPropagation();jump(index);}};
  stage.addEventListener('click',next);
  const platforms=[...document.querySelectorAll('.bush-platform .slide')];
  platforms.forEach(card=>gsap.fromTo(card.querySelector('img'),{yPercent:-8},{yPercent:8,ease:'none',scrollTrigger:{trigger:card,start:'top bottom',end:'bottom top',scrub:true}}));
  return()=>{stage.classList.remove('is-sequence');nav.remove();stage.removeEventListener('click',next);cards.forEach(card=>{card.inert=false;card.removeAttribute('aria-hidden');});};
 });
 mm.add('(prefers-reduced-motion:no-preference)',()=>{
  // Heron's word-entry cadence and section divider draw.
  const titles=[...document.querySelectorAll('.bush-work-heading h2,.about .quote,.contact h2')];
  titles.forEach(el=>{
   const original=el.innerHTML;el.setAttribute('aria-label',el.textContent);
   const walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);
   nodes.forEach(node=>{const frag=document.createDocumentFragment();node.textContent.split(/(\s+)/).forEach(word=>{if(!word.trim()){frag.append(word);return;}const span=document.createElement('span');span.className='bush-word';span.setAttribute('aria-hidden','true');span.textContent=word;frag.append(span);});node.replaceWith(frag);});
   gsap.from(el.querySelectorAll('.bush-word'),{yPercent:100,opacity:0,duration:.6,stagger:.004,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 85%',once:true}});
   el._restoreMotion=()=>{el.innerHTML=original;el.removeAttribute('aria-label');};
  });
  gsap.utils.toArray('.svc li,.bush-index-row,.contact').forEach(el=>gsap.fromTo(el,{'--divider-progress':0},{'--divider-progress':1,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
  return()=>titles.forEach(el=>{el._restoreMotion();delete el._restoreMotion;});
 });
 document.fonts.ready.then(()=>ScrollTrigger.refresh());
}

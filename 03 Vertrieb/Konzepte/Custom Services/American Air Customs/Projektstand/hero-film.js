import {scrollState} from './scroll-state.js';
const video=document.querySelector('#hvac-film'),hero=document.querySelector('.immersive-hero'),journey=document.querySelector('.hero-journey'),motion=document.querySelector('#motion'),photo=document.querySelector('.family');
const phrases=[...document.querySelectorAll(".hero-phrase")];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches,target=0,frame=0;
function label(){motion.textContent=paused?'Play motion ▷':'Pause motion Ⅱ';motion.setAttribute('aria-pressed',String(paused));}
function seek(){frame=0;if(paused||!Number.isFinite(video.duration)||video.seeking)return;const time=target*Math.max(0,video.duration-.08);if(Math.abs(video.currentTime-time)>.025)video.currentTime=time;}
function update(){const rect=journey.getBoundingClientRect(),state=scrollState(rect.top,rect.height,hero.clientHeight);target=state.progress;const staticView=paused||reduced.matches;hero.style.setProperty('--travel',staticView?0:target);hero.style.setProperty('--intro-alpha',1);hero.style.setProperty('--intro-visibility','visible');hero.style.setProperty('--story-alpha',staticView?0:state.story);if(photo)photo.style.setProperty('--photo-shift',staticView?'0px':Math.max(-25,Math.min(25,(photo.getBoundingClientRect().top-innerHeight*.5)*.05))+'px');if(!frame)frame=requestAnimationFrame(seek);}
video.addEventListener('seeked',()=>{if(!frame)frame=requestAnimationFrame(seek);});
video.addEventListener('loadedmetadata',update);
video.addEventListener('error',()=>{hero.classList.add('film-failed');});
motion.addEventListener('click',()=>{paused=!paused;label();update();});
reduced.addEventListener('change',e=>{paused=e.matches;label();update();});
addEventListener('scroll',update,{passive:true});addEventListener('resize',update);
label();update();

let activePhrase=0,heroVisible=true;
new IntersectionObserver(([entry])=>{heroVisible=entry.isIntersecting;}).observe(hero);
setInterval(()=>{
  if(paused||reduced.matches||document.hidden||!heroVisible)return;
  phrases.forEach(phrase=>phrase.classList.remove('is-leaving'));
  phrases[activePhrase].classList.add('is-leaving');
  phrases[activePhrase].classList.remove('is-active');
  activePhrase=(activePhrase+1)%phrases.length;
  phrases[activePhrase].classList.add('is-active');
},4000);

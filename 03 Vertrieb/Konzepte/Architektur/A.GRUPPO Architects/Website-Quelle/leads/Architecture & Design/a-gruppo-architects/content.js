const dialog=document.querySelector('#studio-dialog');
const body=document.querySelector('#content-body');
const tabs=document.querySelector('#content-tabs');
const sections={office:'Studio',projects:'Projects',process:'Process',contact:'Contact'};
const roomSections={exterior:'projects',living:'office',kitchen:'projects',bedroom:'contact',terrace:'process'};
const viewer=document.querySelector('#photo-viewer');
let returnFocus, photoFocus, photos=[], index=0;

function showPhoto(next){
  index=(next+photos.length)%photos.length;
  const source=photos[index].querySelector('img');
  document.querySelector('#photo-image').src=source.src;
  document.querySelector('#photo-image').alt=source.alt;
  document.querySelector('#photo-caption').textContent=`${source.alt} · ${index+1} / ${photos.length}`;
  if(!viewer.open)viewer.showModal();
}
function openContent(section){
  if(!sections[section])return;
  dispatchEvent(new Event('agruppo:content-open'));
  if(!dialog.open){returnFocus=document.activeElement;dialog.showModal();}
  tabs.replaceChildren(...Object.entries(sections).map(([key,label])=>{
    const b=document.createElement('button');b.textContent=label;b.dataset.panel=key;
    b.setAttribute('aria-current',String(key===section));return b;
  }));
  body.replaceChildren(document.querySelector(`#content-${section}`).content.cloneNode(true));
  body.querySelector('h2').id='dialog-title';
  photos=[...body.querySelectorAll('[data-photo]')];
  photos.forEach((button,i)=>{
    button.setAttribute('aria-label',`View image: ${button.querySelector('img').alt}`);
    button.addEventListener('click',()=>{photoFocus=button;showPhoto(i);});
  });
  body.scrollTop=0;document.querySelector('#dialog-close').focus();
}
document.addEventListener('click',e=>{
  const button=e.target.closest('[data-panel],#content-open');
  if(button)openContent(button.dataset.panel||roomSections[document.body.dataset.room]);
});
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>returnFocus?.focus());
document.querySelector('#photo-close').addEventListener('click',()=>viewer.close());
document.querySelector('#photo-prev').addEventListener('click',()=>showPhoto(index-1));
document.querySelector('#photo-next').addEventListener('click',()=>showPhoto(index+1));
viewer.addEventListener('close',()=>photoFocus?.focus());
viewer.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();showPhoto(index+(e.key==='ArrowRight'?1:-1));}
});

const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
for(const link of nav.querySelectorAll('a'))if(new URL(link.href).pathname===location.pathname)link.setAttribute('aria-current','page');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Close ×':'Menu +';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){menu.click();menu.focus();}});
const form=document.querySelector('#request');
form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nService: ${d.get('service')}\n\n${d.get('message')}`;location.href=`mailto:americanaircustoms@yahoo.com?subject=${encodeURIComponent('HVAC service request: '+d.get('service'))}&body=${encodeURIComponent(body)}`;document.querySelector('#form-status').textContent='Your email app can open the draft. You can also call 972-313-3734.';});
if(document.querySelector('#hvac-film'))import('./hero-film.js');

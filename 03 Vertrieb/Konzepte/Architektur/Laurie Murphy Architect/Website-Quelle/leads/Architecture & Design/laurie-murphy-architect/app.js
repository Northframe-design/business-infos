(() => {
 const buttons=[...document.querySelectorAll('#cats button')],shots=[...document.querySelectorAll('#stage .shot')],caption=document.querySelector('#shot-cap');
 const show=i=>{buttons.forEach((b,k)=>{b.classList.toggle('on',k===i);b.setAttribute('aria-pressed',String(k===i));});shots.forEach((s,k)=>{s.classList.toggle('on',k===i);s.setAttribute('aria-hidden',String(k!==i));});caption.textContent=`${String(i+1).padStart(2,'0')} — ${buttons[i].textContent.slice(2).trim()}`;};
 buttons.forEach((b,i)=>{b.addEventListener('click',()=>show(i));b.addEventListener('focus',()=>show(i));b.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches)show(i);});});show(0);
})();

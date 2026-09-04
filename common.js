function qs(s){return document.querySelector(s)}function qsa(s){return [...document.querySelectorAll(s)]}
function toast(msg){let t=qs('#toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;right:22px;bottom:22px;background:#26364e;color:#fff;padding:11px 14px;border-radius:12px;font-size:9px;z-index:1000;box-shadow:0 16px 40px rgba(34,50,75,.2);opacity:0;transform:translateY(8px);transition:.2s';document.body.appendChild(t)}t.textContent=msg;t.style.opacity='1';t.style.transform='none';setTimeout(()=>{t.style.opacity='0';t.style.transform='translateY(8px)'},2000)}
function setupAppShell(page){
 const sidebar=qs('.app-sidebar'); const menu=qs('.mobile-menu'); if(menu&&sidebar)menu.onclick=()=>sidebar.classList.toggle('open');
 qsa('.app-nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav===page));
}
function setupReveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});qsa('.reveal').forEach(x=>io.observe(x))}
function setupPageTransitions(){qsa('a[data-transition]').forEach(a=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey)return;e.preventDefault();const dest=a.href;let f=qs('.page-fade');if(!f){f=document.createElement('div');f.className='page-fade';document.body.appendChild(f)}f.classList.add('go');setTimeout(()=>location.href=dest,350)}))}

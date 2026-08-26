const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.right='0';nav.style.left='0';nav.style.padding='20px';nav.style.background='#fbfaf5';nav.style.flexDirection='column';nav.style.textAlign='center';});

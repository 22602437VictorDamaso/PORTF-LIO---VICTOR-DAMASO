// Menu mobile
var burger=document.getElementById('burger'),mmenu=document.getElementById('mmenu');
burger.addEventListener('click',function(){
  var on=mmenu.classList.toggle('on');
  burger.classList.toggle('on',on);
  document.body.style.overflow=on?'hidden':'';
});
mmenu.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click',function(){
    mmenu.classList.remove('on');burger.classList.remove('on');
    document.body.style.overflow='';
  });
});

// Fade ao entrar na tela
var obs=new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');obs.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.fi').forEach(function(el){obs.observe(el);});

// Barras de habilidades
var obsB=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){
      e.target.querySelector('.fill').style.width=e.target.dataset.lvl+'%';
      obsB.unobserve(e.target);
    }
  });
},{threshold:.5});
document.querySelectorAll('.hard-item').forEach(function(el){obsB.observe(el);});

// Link ativo no nav
var secs=document.querySelectorAll('section[id]');
var links=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',function(){
  var y=window.scrollY;
  secs.forEach(function(s){
    if(y>=s.offsetTop-120&&y<s.offsetTop+s.offsetHeight-120){
      links.forEach(function(l){l.classList.toggle('ativo',l.getAttribute('href')==='#'+s.id);});
    }
  });
});

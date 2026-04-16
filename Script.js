  // SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', ()=>{
  reveals.forEach(el=>{
    let pos = el.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(pos < screen - 100){
      el.classList.add('active');
    }
  });
});

// SHRINK
window.addEventListener("scroll", function(){
  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

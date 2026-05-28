gsap.registerPlugin(ScrollTrigger);

/* LENIS */

const lenis = new Lenis({
  duration:1.2,
  smoothWheel:true
});

function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* SPLIT TEXT */

function splitTextToSpans(selector){

  const elements = document.querySelectorAll(selector);

  elements.forEach(el=>{

    const text = el.innerText;

    el.innerHTML = '';

    text.split(' ').forEach(word=>{

      const wrapper = document.createElement('span');

      wrapper.className = 'word-wrapper';

      const wordSpan = document.createElement('span');

      wordSpan.className = 'word';

      wordSpan.innerHTML = word + '&nbsp;';

      wrapper.appendChild(wordSpan);

      el.appendChild(wrapper);

    });

  });

}

splitTextToSpans('#split-title');

/* HERO TIMELINE */

const tlHero = gsap.timeline();

tlHero

.from("nav",{
  y:-50,
  opacity:0,
  duration:1,
  ease:"power3.out"
})

.from(".word",{
  y:180,
  opacity:0,
  rotateX:90,
  skewY:8,
  transformOrigin:"top center",
  stagger:.08,
  duration:1.5,
  ease:"power4.out"
},"-=0.5")

.from(".fade-up",{
  y:40,
  opacity:0,
  duration:1,
  stagger:.2,
  ease:"power3.out"
},"-=1")

.from(".img-wrapper",{
  clipPath:"inset(100% 0% 0% 0%)",
  scale:1.2,
  duration:1.5,
  ease:"power4.inOut"
},"-=1.2");

/* ORBS */

gsap.to(".orb-1",{
  x:"random(-100,100)",
  y:"random(-100,100)",
  duration:8,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut"
});

gsap.to(".orb-2",{
  x:"random(-150,150)",
  y:"random(-150,150)",
  duration:10,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut"
});

/* CURSOR */

const cursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove",(e)=>{

  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:.15
  });

});

/* CURSOR HOVER */

document.querySelectorAll("a, .card").forEach(el=>{

  el.addEventListener("mouseenter",()=>{
    cursor.classList.add("active");
  });

  el.addEventListener("mouseleave",()=>{
    cursor.classList.remove("active");
  });

});

/* LIGHT FOLLOW */

const light = document.querySelector(".mouse-light");

window.addEventListener("mousemove",(e)=>{

  gsap.to(light,{
    x:e.clientX - 300,
    y:e.clientY - 300,
    duration:1.2,
    ease:"power3.out"
  });

});

/* SKILLS */

gsap.from(".stagger-card",{

  scrollTrigger:{
    trigger:".skills",
    start:"top 70%"
  },

  y:100,
  opacity:0,
  rotation:5,
  duration:1,
  stagger:.15,
  ease:"back.out(1.7)"

});

/* PARALLAX */

gsap.to(".parallax-img",{

  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"bottom top",
    scrub:true
  },

  y:150,
  ease:"none"

});
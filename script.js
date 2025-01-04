// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


var images = document.querySelectorAll(".imgCard")
images.forEach((card)=>{
  let tl =gsap.timeline({
    scrollTrigger:{
      trigger:card,
      start:"top 15%",
      bottom:"70% center",
      markers:false,
      scrub:1,
    }
  });
  tl.to(card,{
    scale:0.6,
    duration:1,
    ease:"Power4.out"
  })
  let tl2 =gsap.timeline({
    scrollTrigger:{
      trigger:"#text-container",
      start:"30% top",
      end:"50% top",
      markers:false,
      scrub:1,
    }
  });
  tl2.to("#text-container",{
    opacity:0,
    duration:2,
    ease:"Power4.out",
  })
})
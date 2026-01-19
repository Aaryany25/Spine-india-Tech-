// Initialize Lenis
const lenis = new Lenis({
    infinte:true
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf)

// GSAP

// register plugin
gsap.registerPlugin(SplitText);

// split text into words
const text = new SplitText("#textSplit", {
  type: "words"
});
gsap.fromTo(
  "#aboutRight img",
  {
    clipPath: "inset(0 0 100% 0)"
  },
  {
    clipPath: "inset(0 0 0% 0)",
    ease: "none",
    duration:0.5,
    scrollTrigger: {
      trigger: "#aboutRight",
      start: "35% center",
      end: "top 40%",
    //   scrub: 1.5,
    //   markers:true
    }
  }
);

gsap.from(text.words,{
    opacity:0,
    // duration:0.5,
    // delay:2,
    // stagger:0.2,
    filter:blur("10px"),
    // y:20,
    scrollTrigger:{
        trigger:"#AboutSection",
        scrub:0.5,
        // markers:true,
start:"center center",
end:"+=1000",
// pin:true
    }
})
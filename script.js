  const marquee = document.getElementById("marquee");

  marquee.addEventListener("mouseenter", () => {
    marquee.style.animationPlayState = "paused";
  });

  marquee.addEventListener("mouseleave", () => {
    marquee.style.animationPlayState = "running";
  });

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

function Animations(){
  // GSAP
  // register plugin
  gsap.registerPlugin(SplitText);
  
  gsap.fromTo(
    "#aboutRight img",
    {
      clipPath: "inset(0 0 100% 0)",
      // scale:1.1
    },
    {
    clipPath: "inset(0 0 0% 0)",
    ease: "none",
    duration:0.5,
    scale:1,
    scrollTrigger: {
      trigger: "#aboutRight",
      start: "35% center",
      end: "top 40%",
      scrub: 1.5,
      pin:true,
      //   markers:true
    }
  },"start"
);

// split text into words
const text = new SplitText("#textSplit", {
  type: "lines"
});
gsap.from(text.lines,{
  opacity:0,
  // duration:0.5,
  // delay:2,
  stagger:0.2,
  filter:blur("10px"),
  // y:20,
  scrollTrigger:{
        trigger:"#AboutSection",
        scrub:0.5,
        // markers:true,
start:"45% center",
end:"+=400",
pin:true
    }
},"start")
}
Animations()
function CursorAnimation(){
 document.addEventListener("mousemove", function (dets) {
  console.log(dets.x,dets.y)
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
}
CursorAnimation()
// intro animation
gsap.from(".title", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".box", {
  scale: 0,
  rotation: 180,
  duration: 1.2,
  ease: "back.out(1.7)"
});

// button-triggered animation
const box = document.querySelector(".box");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  gsap.to(box, {
    x: gsap.utils.random(-200, 200),
    y: gsap.utils.random(-100, 100),
    rotation: gsap.utils.random(0, 360),
    borderRadius: gsap.utils.random(0, 50) + "%",
    duration: 1,
    ease: "elastic.out(1, 0.5)"
  });
});


const tl = gsap.timeline()
.to("path", {attr:{
  d:"M 100 100 C 100 100 150 212 250 100 C 350 -12 400 100 400 100"
}})
GSDevTools.create({animation:tl})


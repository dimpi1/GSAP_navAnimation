var tl = gsap.timeline()

tl.from ("img",{
    opacity:0,
    y : -30,
    duration: 0.7,
    delay: 0.3
})

tl.from ("h4",{
    opacity:0,
    y : -30,
    duration: 1,
    // delay: 0.5
    stagger:0.3
})


tl.from ("h1",{
    opacity:0,
    y : 20,
    duration: 1,
    scale: 0.3
})
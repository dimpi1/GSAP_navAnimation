// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay: 1,
//     borderRadius:"50%",
//     backgroundColor:"yellow",
//     rotate:360
// })

// gsap.from("h1",{
//     opacity:0,
//     y:30,
//     duration:2,
//     delay: 1,
//     // color: "pink",
//     stagger: 1
// })

// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay: 1,
//     // borderRadius:"50%",
//     // backgroundColor:"yellow",
//     rotate:360,
//     repeat:-1,
//     yoyo:true
// })

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
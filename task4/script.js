const tl = gsap.timeline()

tl.from("#main .nav img, .middle li, .right a ", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5
})

tl.from("#centerMain h1", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
})
tl.from("#main img", {
    scale: 0,
    opacity: 0,
    stagger: 0.3
})
tl.from(".middleFooter p", {
    y: -50,
    repeat: -1
})
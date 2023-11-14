const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// Video container
const videoAnimate = () => {
    let video = document.querySelector('#video-container');
    let play = document.querySelector('#play');
    video.addEventListener('mouseenter', () => {
    gsap.to(play, {
            scale: 1,
            opacity: 1
    })
    })
    video.addEventListener('mouseleave', () => {
        gsap.to(play, {
            scale: 0,
            opacity: 0
        })
    })

    video.addEventListener("mousemove", (event) => {
        gsap.to(play, {
            left: event.x-50,
            top: event.y-80
        })
    })
}
videoAnimate();

// Loading Animation
const loadingAnimation = () => {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.3
    })
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.3,
    })
}
loadingAnimation()
// Shery.imageEffect(element, configurations)
Shery.imageEffect(".back", {style: 5, debug: true, gooey: true})

let elem = document.querySelectorAll("#elem");

elem.forEach((elem) => {

    let headings = elem.querySelectorAll("h1");
    let index = 0
    let animating = false
    document.querySelector("#main").addEventListener("click", () => {
        if(!animating) {
            animating = true
            gsap.to(headings[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: (() => {
                    gsap.set(this._targets[0], {top: "100%"})
                    animating = false
                })
            })
    
            index === headings.length-1 ? (index = 0) : index++;
    
            gsap.to(headings[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            })
        }
    })


})


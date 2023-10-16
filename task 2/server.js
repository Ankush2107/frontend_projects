window.addEventListener('mousemove', function(event) {

    let rectangle = document.querySelector('.center')

    let xAxisValuesMap = gsap.utils.mapRange(0, window.innerWidth, 100 + rectangle.getBoundingClientRect().width/2, window.innerWidth - (100 + rectangle.getBoundingClientRect().width/2), event.clientX);

    gsap.to('.center', {
        left: xAxisValuesMap + "px",
        ease: Power3,
    });
}) ;
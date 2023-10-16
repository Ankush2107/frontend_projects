const throttleFunction=(func, delay)=>{
  let prev = 0;
    return (...args) => {
    let now = new Date().getTime();

    if(now - prev> delay){
        prev = now;      
        return func(...args); 
    }
  }
}

document.querySelector("#center").addEventListener("mousemove", throttleFunction((event)=>{

    let div = document.createElement("div")
    div.classList.add("yellow")
    div.style.left = event.clientX + "px";
    div.style.top = event.clientY + "px";

    let img = document.createElement('img')
    img.setAttribute("src", "https://images.pexels.com/photos/17435121/pexels-photo-17435121/free-photo-of-eyeglasses-next-to-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    div.appendChild(img)

    document.body.appendChild(div)

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: 0.6,
    });

    gsap.to(img, {
        y: "100",
        delay: 0.6,
        ease: Power2,
    });


    setTimeout(function() {
        div.remove()
    }, 2000)

}, 400));
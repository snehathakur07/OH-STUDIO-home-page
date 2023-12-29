window.addEventListener("scroll", () => {
    // console.log(window.scrollY) 
    // console.log(window.innerHeight)
    let toAnimate = document.querySelectorAll(".animate");
    for (var i = 0; i < toAnimate.length; i++) {
        if ((window.innerHeight) >= toAnimate[i].getBoundingClientRect().top) {
            // console.log(i);
            let delay=i*100;
            // setTimeout(() => {
                toAnimate[i].classList.add("visible");
            // }, delay)

            // console.log(toAnimate[i].classList + " is showing")
            // console.log(window.scrollY + "  " + toAnimate[i].getBoundingClientRect().top)
        }
    }
})
function loading() {
    // Using GSAP cdn in our website
    var tl = gsap.timeline();

    gsap.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    });

    tl.from("#yellow2", {
        top: "100%",
        delay: 0.9,
        duration: 0.7,
        ease: "expo.out"
    }, "anim");

    tl.to("#loader h1", {
        delay: 0.9,
        color: "black",
        duration: 0.7,
    }, "anim");

    tl.to("#loader", {
        display: "none",
    });

    tl.to("#loader", {
        opacity: 0,
    });
}

loading();

//locomotive scroll github
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function loading() {

    // Using GSAP cdn in our website
    var tl = gsap.timeline();

    gsap.to("#yellow1", {
        top: "-100%",
        delay: 0.1,
        duration: 0.5,
        ease: "expo.out"
    });

    tl.from("#yellow2", {
        top: "100%",
        delay: 0.7,
        duration: 1,
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

function locomotive() {

    // locomotive scroll from github
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    // scroll to top
    document.querySelector("#footer h2").addEventListener("click", () => {
        scroll.scrollTo(0);
    });

    // To show the image on page no.2 on hover
    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimg})`;
        });
    });
}

locomotive();
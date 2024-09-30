function timelineOne(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top top",
            scrub: 1,
            markers: false,
            pin: true,
            end: "bottom -350%"
        }
    })
    
    tl  .to("#circle #btm img", {
            scale: 1,
            rotate: "-180deg",
            duration: 1,
            ease: Power1,
            stagger: .1
        },"hello")
        .to("#circle #top img", {
            scale: 1,
            duration: 1,
            ease: Power1,
            stagger: .1
        },"hello")
        .to("#cimage img", {
            scale: "0",
            duration: 1,
            ease: Power1,
            stagger: .1
        },"hello")
        .to("#centerimg h5", {
            opacity: 0,
            duration: 1,
            ease: Power1,
            stagger: .1
        },"hello")
        .to("#circle", {
            scale: .6,
            ease: Power1,
        },"hello")
        .to("#overlay>h1#gallery", {
            bottom: "-50%",
            opacity: 0,
            ease: Power1
        },"hello")
        .to("#gola", {
            top: "50%",
            scale: 2,
            ease: Power1
        },"hello")
        .to("#home #nav h1", {
            color: "#fff",
            ease: Power1,
        },"hello")
        .to("#gola", {
            opacity: 0,
            duration: 1,
            ease: Power1
        },"hello2")
        .to("#smcircle", {
            scale: 0,
            duration: 1,
            ease: Power1,
        },"hello2")
        .to("#circle", {
            scale: 0,
            ease: Power1,
        },"hello2")
        .to("#overlay>h1#pflare", {
            rotate: 0,
            bottom: "10%",
            ease: Power1,
            duration: 1
        },"hello2")
        .to("#information", {
            top: 0,
            duration: 2,
            ease: Power1
        })
        .to("#information", {
            top: "-70%",
            duration: 2,
            ease: Power1
        })
}

function timelineTwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            scrub: 1,
            start: "top top",
            markers: false,
            end: "bottom -250%",
            pin: true
        }
    })

    tl2.to(".circle",{
        top: "50%",
        stagger: .1,
        ease: Power1
    })
    tl2.to(".pi",{
        scale: 10,
        stagger: .1,
        ease: Power1
    })
    tl2.to(".pi",{
        background: "linear-gradient(to right, rgb(213, 167, 180),rgb(180, 170, 213))",
        ease: Power1
    })
    tl2.to("#stop h1",{
        left: "-220%",
        delay: -1,
        duration: 4,
        ease: Power1
    },"a")
    tl2.to("#sbtm #two",{
        opacity: 0,
        duration: 3,
        ease: Power1
    },"a")
    tl2.to("#sbtm #one",{
        opacity: 1,
        delay: 2,
        duration: 3,
        ease: Power1
    },"a")
    tl2.to("#stop #square",{
        stagger: .1,
        delay: 3,
        ease: Power1,
        top: "-55%",
        duration: 5
    },"a")
    // tl2.to("#square .s1",{
    //     stagger: .1,
    //     top: "0%",
    //     delay: "2s",
    //     duration: 5,
    //     ease: Power1
    // },"a")
    
}
timelineOne();
timelineTwo();
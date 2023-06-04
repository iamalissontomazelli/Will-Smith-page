const tl = gsap.timeline();
tl.to(".logo", 1, {
    x: 50,
    color: "white",
    ease: "expo"
})

tl.to(".navbar", 1,{
    x:-50,
    ease:"circ",
    opacity: 1
})
tl.to("#hero-image-one",1,{
    x:"100%"
})
tl.to([".h2"], {
    opacity: 1,
    duration:1,
})
tl.to([".p"], {
    opacity: 1,
    duration:1,
})
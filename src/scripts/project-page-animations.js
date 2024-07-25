import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(Draggable);

// Animation for images inside the parents with the enter-animation-section class
// They will be animated on enter on the screen to appear to elongate from the left to the right
// This become signature animation for this website, I guess.

const enterAnimationSections = gsap.utils.toArray(".enter-animation-section");

enterAnimationSections.forEach((section) => {
    const images = section.getElementsByTagName("img");

    gsap.set(images, { 
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
    });

    gsap.to(images, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease:"power3.out",
        immediateRender: false,
        scrollTrigger: {
            trigger: section,
            start: "center 90%",
        },
        stagger: 0.33
    },)

});

// Simple parallax on scroll
const parallaxImages = gsap.utils.toArray(".parallax-scroll img");

parallaxImages.forEach((img, index) => {
    gsap.to(img, {
        y: "-20%",
        duration: 1,
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }

    })
});

// Drag animation

// It would be so cool to add inertia
// But I have not bought the pro version of GSAP,
// so no Inertia plugin for me :(

// const dragZone = document.querySelector("#draggable-container");
// var ww = dragZone.getClientRects.innerWidth(),
//     boundLeft = ww - 2250; // take the width of the BOX

// Draggable.create(dragZone, {
//     type: "x",
//     bounds: {minX:0, maxX:boundLeft},
//     onClick: function () {
//       console.log("clicked");
//     },
//     onDragEnd: function () {
//       console.log("drag ended");
//     },
//   });
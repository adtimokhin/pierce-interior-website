import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


// TODO: Add a fading of the previous section to this animation
// Animation for the Selected Projects section
const tlSelectedProjects = gsap.timeline({
    scrollTrigger:{
        trigger: "#selected_projects",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});

tlSelectedProjects.to("#project_2", {
    y:"-=100%",
    ease:"none"
});

tlSelectedProjects.to("#project_3", {
    y:"-=200%",
    ease:"none"
});

// Animations for the View All Projects section
const allProjectsSection = document.querySelector("#all_projects_redirect");
const sectionImageContainers = gsap.utils.toArray("#all_projects_redirect div");
const sectionImages = gsap.utils.toArray("#all_projects_redirect div img");

// 1. Mouse follow interaction
// On mouse move inside the section the images will move slightly to the opposite direction to the mouse
// The movement amplitude will depend on the "depth" of the image
// For now, that will be an arbitary value assigned how I feel will make the animation look
// Better.
allProjectsSection.addEventListener("mousemove", animateImagesMouseMove);
function animateImagesMouseMove(e) {
    sectionImageContainers.forEach((container, index)=>{
        const depth = 120; // arbitrary value that controls the amplitude of how much the 
                           // images follow the cursor
        const rect = container.getBoundingClientRect();
        const containerCenterX = rect.left + rect.width / 2;
        const containerCenterY = rect.top + rect.height / 2;

        const moveX = (e.clientX - containerCenterX) / depth;
        const moveY = (e.clientY - containerCenterY) / depth;
        index ++;
    
        gsap.to(container, {
          x: -moveX * index,
          y: -moveY * index,
        });
    })
}


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
        stagger: 0.1
    },)

});

// 2. Parallax effect
// The images inside the containers are larger than the containers themselves.
// All of the images are of the known height, so we can use it to manipulate the images inside the containers
// const tlAllProjects = gsap.timeline({
//     scrollTrigger:{
//         trigger: "#all_projects_redirect",
//         start: "top center",
//         end: "bottom top",
//         scrub: 1,
//     }
// });
// tlAllProjects.to(sectionImages, {
//     y:"-40px",
//     stagger: 0.1
// });

// Animation Idea: Add it so that the images inside the containers will move in the direction the mouse moves
// It might be too visually complex thought.


// Animation for the Our Design Process section
const tlDesignProcess = gsap.timeline({
    scrollTrigger:{
        trigger: "#design_process",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play none none reverse"
        // snap: ".snappable-div"
    }
})
tlDesignProcess.to("#card_slider", {
    y: calcTransform("y", "calc(-100% + 56vh)"),
});


// Function that helps to move the y coordinate to the position using calc(); inside the gsap.to()
// borrowed from: https://gsap.com/community/forums/topic/36211-y-calc100-100px/?do=findComment&comment=181306
function calcTransform(property, value) {
    let alias = { y: "translateY", x: "translateX", z: "translateZ", rotation: "rotate" };
    return function (i, target) {
      let transform = target.style.transform; // remember the original transform
      target.style.transform = (alias[property] || property) + "(" + value + ")"; // apply the new value
      let computed = parseFloat(gsap.getProperty(target, property, property.substr(0, 3) === "rot" ? "deg" : "px", true)); // grab the pixel value
      target.style.transform = transform; // revert
      gsap.getProperty(target, property, "px", true); // reset the cache so the new value is reflected
      return computed; 
    };
  }




// gsap.registerPlugin(ScrollTrigger);

// let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

// gsap.utils.toArray("section").forEach((section, i) => {
//   section.bg = section.querySelector(".bg"); 

//   // Give the backgrounds some random images
//   section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
  
//   // the first image (i === 0) should be handled differently because it should start at the very top.
//   // use function-based values in order to keep things responsive
//   gsap.fromTo(section.bg, {
//     backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
//   }, {
//     backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
//     ease: "none",
//     scrollTrigger: {
//       trigger: section,
//       start: () => i ? "top bottom" : "top top", 
//       end: "bottom top",
//       scrub: true,
//       invalidateOnRefresh: true // to make it responsive
//     }
//   });

// });
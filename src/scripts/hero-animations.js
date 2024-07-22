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
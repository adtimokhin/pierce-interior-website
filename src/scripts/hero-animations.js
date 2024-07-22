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
        markers:true,
    }
})
tlSelectedProjects.to("#project_2", {
    y:"-=100%",
    ease:"none"
})
tlSelectedProjects.to("#project_3", {
    y:"-=200%",
    ease:"none"
})

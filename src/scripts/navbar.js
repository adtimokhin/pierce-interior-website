import gsap from "gsap";

let burgerIsOpen = false; // initially the expanded menu is not visible

const burger = document.querySelector("#burger-menu-icon");
const expandedMenu = document.querySelector("#expanded-menu");
const menuItems = gsap.utils.toArray("#expanded-menu a");

burger.addEventListener("click", menuOnClickAnimate);

menuItems.forEach((item) => {
    item.addEventListener("click", menuOnClickAnimate)
})


// Actual Animation
function menuOnClickAnimate () {
    
    const iconChangeTl = gsap.timeline();
    const menuMoveTl = gsap.timeline();
    menuMoveTl.fromTo(expandedMenu, {
    },
    {            
        left: burgerIsOpen? "-100%" : "0",
        ease: "power3.out",
        duration: 0.75
    }

    );

    iconChangeTl.to("#burger-path", { opacity:0 , duration: 0.2 , ease: "power2.out"})
    iconChangeTl.to("#burger-path", {
        attr: 
            {
                d: burgerIsOpen? "M0 12.2667H32M0 18.6667H32" : "M1.15235 30.447L30.996 1M30.8437 30.9986L1 1.55164"
            }, 
        duration:0, 

        onComplete: ()=> {
            burgerIsOpen = !burgerIsOpen;
        }}
    );
    iconChangeTl.to("#burger-path", { opacity:1 , duration: 0.75 , ease: "power2.out", });
}



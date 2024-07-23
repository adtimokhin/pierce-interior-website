import gsap from "gsap";


const button = document.querySelector(".next-page-container");
const section = document.querySelector("#next-project-section");
const navText = section.getElementsByTagName("p")[1];


button.addEventListener("mouseover", ()=>{
    gsap.to(".font-outline", {
        "--starter-height": "20%",
        duration: 1,
        ease: "power3.out"
    
    });

    gsap.to(section, {
        backgroundColor: "#EC9A4E",
        duration: 1.2,
        ease: "power3.out"
    });

    console.log(navText.textContent);

    gsap.to(navText, {
        color: "#000000",
        duration: 1.2,
        ease: "power3.out"
    });
})

button.addEventListener("mouseout", ()=>{
    gsap.to(".font-outline", {
        "--starter-height": "0%",
        duration: 1,
        ease: "power3.out"
    
    });

    gsap.to(section, {
        backgroundColor: "#233B79",
        duration: 1.2,
        ease: "power3.out"
    });


    gsap.to(navText, {
        color: "#FFFFFF",
        duration: 1.2,
        ease: "power3.out"
    });
})

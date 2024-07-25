import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "../styles/cursor.scss"

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
    speed: 0.8,
    skewing: 1,
    skewingText: 3
});

const links = gsap.utils.toArray("a");
links.forEach((link)=>{
    link.addEventListener("mouseover", ()=>{
        cursor.setText('explore');
    });
    link.addEventListener("mouseleave", ()=>{
        cursor.removeText();
    })
})

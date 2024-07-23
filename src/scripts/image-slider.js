import gsap from "gsap";

// Reference: 
// https://www.youtube.com/watch?v=3Z30ZJnc6VY&t=1s

document.addEventListener("DOMContentLoaded", ()=>{
    const cursor = document.querySelector("#image-gallery-cursor");
    const container = document.querySelector("#image-gallery");
    const zones = gsap.utils.toArray(".hovarable-zone");
    const cursorArea = document.querySelector(".gallery-cursor-area");

    const destFolder = container.getAttribute('data-dest-folder');

    const rect = cursor.getBoundingClientRect();
    const containerCenterX = rect.left + rect.width / 2;
    const containerCenterY = rect.top + rect.height / 2;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    zones.forEach((zone, index)=>{
        zone.addEventListener("mouseenter", ()=>{
            console.log(index);

            const image = document.createElement("img");
            image.src = `${destFolder}/${index}.png`;
            image.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
            image.style.width = "100%";
            image.style.height = "100%";
            image.style.objectFit = "cover";
            image.style.position = "abosulte";
            image.style.top = 0;

            container.appendChild(image);

            gsap.to(image, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.75,
                ease: "power2.out"
            })
        });

        zone.addEventListener("mouseout", ()=>{
            const images = container.getElementsByTagName("img");
            if (images.length){
                const lastImage = images[images.length - 1];
                Array.from(images).forEach((image, index)=>{
                    if (image !== lastImage){
                        // Animate the image exit
                        gsap.to(image, {
                            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                            duration: 0.75,
                            ease: "power3.out",
                            onComplete: ()=>{
                                setTimeout(()=>{
                                    // After the image leaves the screen
                                    // Remove it to clear the DOM
                                    image.remove();
                                }, 1000)
                            }
                        })
                    }
                })
            }
        })
    });

    // Cursor area

    cursorArea.addEventListener("mouseenter", (e)=>{
        // We need to show the cursor
        gsap.to(container, {
            height: "100%",
            duration: 1,
            ease: "power3.out"
        })
    });

    cursorArea.addEventListener("mousemove", (e)=>{
        // I do not really like the skewing on this project, but maybe it will be useful.
        // Calculate skew based on mouse position
        // const skewX = (e.clientX - screenWidth / 2) / 100;
        // const skewY = (e.clientY - screenHeight / 2) / 100;
        gsap.to(cursor, {
            x: e.clientX + 100,
            y: e.clientY - containerCenterY / 2 ,
            duration: 1,
            ease: "power3.out",
        })
    });

    cursorArea.addEventListener("mouseleave", (_)=>{
        // We need to show the cursor
        gsap.to(container, {
            height: "0%",
            duration: 1,
            ease: "power3.out"
        })
    });

});

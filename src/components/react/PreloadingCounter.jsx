import { useEffect, useState } from "react";


function PreloadingCounter(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        // We will go over the predefined array of the numbers
        // They will look like the counter is loading data

        const values = [1, 2, 4, 5, 6, 7, 14, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 37, 38, 43, 45, 47, 49, 50, 53, 56, 61, 62, 68, 71, 73, 76, 77, 79, 82, 84, 85, 86, 87, 89, 91, 92, 93, 98, 99];
        const updateCounter = (i) => {
            if (i < values.length) {
                setCount(values[i]);
                setTimeout(() => updateCounter(i + 1), 30);
            }
        };
        setTimeout(()=>{
            updateCounter(0);
        }, 750);// duration of the initial animation
    }, []);

    return (
        <p className="text-[10rem] text-background w-full text-end" id="counter">
                <span>{count}</span>
                <span>%</span>
        </p>)
}


export default PreloadingCounter;
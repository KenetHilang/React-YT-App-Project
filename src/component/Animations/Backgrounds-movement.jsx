import { useEffect, useRef } from "react";
import Boxes from "./Box-bg";
import { gsap } from "gsap";

function Bg_Move() {
    const containerRef = useRef(null)

    useEffect(() => {
        const boxes = containerRef.current.querySelectorAll(".box");

        const wrap = (value) => gsap.utils.wrap(-1000, 800, value);

        gsap.to(boxes, {
            ease: "none",
            y: "-=1000",
            modifiers: {
                y: gsap.utils.unitize(wrap),
            },
            repeat: -1,
        })
    },[])


    return (
        <>
            <div className="fixed z-10 overflow-hidden w-full h-screen">
                <div ref={containerRef} className="sliding-container">
                    {Array.from({ length: 10 }, (_, index) => (
                        <Boxes 
                        key={index} 
                        angka={index+1} 
                        kelas="box"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Bg_Move;

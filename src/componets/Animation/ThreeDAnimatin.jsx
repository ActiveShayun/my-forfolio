"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

const ThreeDAnimatin = () => {

    const ref = useRef(null); // DOM রেফারেন্স তৈরি

    useAnimationFrame((t) => {
        if (!ref.current) return;

        const rotateX = (t / 2000) * 50;
        const rotateY = (t / 2000) * 50;
        ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });


    return (
        <div className="flex justify-center items-center -z-[4] mt-10">
            {/* ফিক্সড প্রস্থের কন্টেইনার */}
            <div className="fixed-width-container">
                <div className="w-[200px] h-[200px] perspective-800">
                    <div
                        ref={ref}
                        className="w-full h-full relative transform-style-preserve-3d"
                    >
                        {/* কিউবের প্রতিটি সাইড */}
                        <div className="side front flex items-center justify-center text-white">Design</div>
                        <div
                            className="side right flex items-center justify-center text-white">Development</div>
                        <div
                            className="side back flex items-center justify-cente text-white">Debuging</div>
                        <div
                            className="side left flex items-center justify-center text-white">Problem Solving</div>
                        <div
                            className="side top flex items-center justify-center text-white">Planing</div>
                        <div
                            className="side bottom flex items-center justify-center text-white">Execute</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeDAnimatin;

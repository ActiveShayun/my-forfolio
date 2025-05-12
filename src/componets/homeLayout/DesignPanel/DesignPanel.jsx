import React from 'react';
import Marquee from 'react-fast-marquee';
import { GoNorthStar } from "react-icons/go";

const DesignPanel = () => {
    return (
        <div className='mt-8 bg-[#344C36] text-[#6A5121] text-2xl font-bold'>
            <div className='bg-[#FAAD1B] -rotate-1'>
                <Marquee>
                    <div className='flex gap-16 items-center  py-4'>
                        <span><GoNorthStar /></span>
                        <span>App Design</span>
                        <span><GoNorthStar /></span>
                        <span>Wevsite Design</span>
                        <span><GoNorthStar /></span>
                        <span>App Design</span>
                        <span><GoNorthStar /></span>
                        <span>Dashboard</span>
                        <span><GoNorthStar /></span>
                        <span>Wireframe</span>
                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default DesignPanel;
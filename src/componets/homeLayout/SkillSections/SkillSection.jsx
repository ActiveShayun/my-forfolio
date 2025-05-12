import React from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { motion } from "motion/react"
import { GrJs } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
// ..
AOS.init();

const SkillSection = () => {


    return (
        <div>
            <div className="max-w-5xl mx-auto p-8 mt-10">
                <SectionTitle heading={'Technical Skills'} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div data-aos="zoom-in"
                        className="p-4 border-b-2 border-[#FAAD1B]  rounded-lg bg-gray-50 shadow-lg flex flex-col justify-between">
                        <div className="font-semibold text-lg flex items-center gap-2">
                            <motion.span
                                animate={{ transform: '90px' }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="block">
                                <RiTailwindCssFill className='text-[60px] text-[#3EBFF8]' />
                            </motion.span>
                            <span className='block'>Tailwind</span>
                        </div>
                        <p className="text-gray-600 text-sm my-2">
                            Tailwind CSS is a utility-first framework that enables fast, scalable, and maintainable UI development with minimal custom CSS.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-[#FAAD1B] rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border-b-2 border-[#FAAD1B]  rounded-lg bg-gray-50 shadow-lg flex flex-col justify-between">
                        <div className="font-semibold text-lg flex items-center gap-2">
                            <motion.span
                                transition={{ duration: 5, repeat: Infinity }}
                                className="rounded-sm">
                                <GrJs className='text-[60px] text-[#F7E025] relative bottom-3' />
                            </motion.span>
                            <span>Javascript</span>
                        </div>
                        <p className="text-gray-600 text-sm my-2">
                            JavaScript is a versatile language for creating dynamic web applications across both front-end and back-end.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-[#FAAD1B] rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border-b-2 border-[#FAAD1B]  rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <motion.span
                                transition={{ duration: 5, repeat: Infinity }}
                                className="rounded-sm text-[60px] text-[#50D6FF]"><FaReact /></motion.span>
                            <span>React</span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            React is a library for building dynamic, scalable UIs using components and integrating smoothly with modern web tools.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-[#FAAD1B] rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4  border-b-2 border-[#FAAD1B] rounded-lg bg-gray-50 shadow-lg flex flex-col justify-between">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <motion.span
                                transition={{ duration: 5, repeat: Infinity }}
                                className="text-[60px] text-[#5BA94B] rounded-sm"><FaNodeJs /></motion.span>
                            <span>Node js</span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            Node.js is a fast, lightweight runtime for scalable server-side apps, integrating smoothly with Express.js and MongoDB.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-[#FAAD1B] rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border-b-2 border-[#FAAD1B]  rounded-lg bg-gray-50 shadow-lg flex flex-col justify-between">
                        <h3 className="font-semibold text-lg  flex items-center gap-2">
                            <motion.span
                                transition={{ duration: 5, repeat: Infinity }}
                                className="text-[60px] text-[#93C747] rounded-sm"><SiExpress /></motion.span>
                            <span>Express js</span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            Express.js is a flexible Node.js framework that simplifies API development, ensuring scalability and efficient MongoDB integration.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-[#FAAD1B] rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4  border-b-2 border-[#FAAD1B]  rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg  flex items-center gap-2">
                            <motion.span
                                transition={{ duration: 5, repeat: Infinity }}
                                className="text-[60px] text-green-700 rounded-sm"><BiLogoMongodb /></motion.span>
                            <span>Mongodb</span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            MongoDB is a flexible, scalable NoSQL database that stores data in JSON-like documents and integrates seamlessly with Node.js and Express.js.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-[#FAAD1B] rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;
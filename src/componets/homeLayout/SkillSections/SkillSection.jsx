import React from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { motion } from "motion/react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
// ..
AOS.init();

const SkillSection = () => {

    const box = {
        width: 20,
        height: 20,
        backgroundColor: "#ff0088",
        borderRadius: 5,
    }

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="max-w-5xl mx-auto p-8 mt-10">
                <SectionTitle heading={'Skill'}/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div data-aos="zoom-in"
                        className="p-4 border rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            Tailwind
                            <motion.span style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm"><RiTailwindCssFill /></motion.span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            ailwind CSS is a utility-first framework for building modern, responsive interfaces. It allows rapid styling with predefined classes, reducing custom CSS. With Tailwind, I can build scalable and maintainable layouts
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            Javascript
                            <motion.span style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm"><FaJs /></motion.span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            JavaScript is a versatile programming language for building interactive web applications. It enables efficient front-end and back-end development with seamless integration into React, Node.js, and Express.js.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            React
                            <motion.span style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm"><FaReact /></motion.span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            React is a powerful library for creating dynamic UIs. It supports component-based development, ensuring scalability and maintainability while integrating smoothly with Tailwind CSS, Node.js, and MongoDB.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            Node js
                            <motion.span style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm"><FaNodeJs /></motion.span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            Node.js is a lightweight, efficient runtime for scalable server-side applications. It enables fast, non-blocking operations and integrates seamlessly with Express.js and MongoDB.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg  flex items-center gap-2">
                            Express js
                            <motion.span style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm"><SiExpress /></motion.span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            Express.js is a flexible web framework for Node.js, simplifying API development and request handling. It ensures scalability and efficiency with seamless MongoDB integration.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className="p-4 border rounded-lg bg-gray-50 shadow-lg">
                        <h3 className="font-semibold text-lg  flex items-center gap-2">
                            Mongodb
                            <motion.span style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm"><BiLogoMongodb /></motion.span>
                        </h3>
                        <p className="text-gray-600 text-sm my-2">
                            MongoDB is a NoSQL database designed for flexibility and scalability. It stores data in JSON-like documents and integrates smoothly with Node.js and Express.js for efficient data management.
                        </p>
                        <div className="relative w-full bg-gray-300 h-2 rounded-full">
                            <div className="absolute left-0 top-0 h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import heroImg from '../../../assets/hero.png'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroVideo from '../../../assets/heroVideo.mp4'
import ThreeDAnimatin from "../../Animation/ThreeDAnimatin";

const Banner = () => {
    const [currentRole, setCurrentRole] = useState("Frontend - Developer");
    const letters = currentRole.split("");
    const [logos, setLogos] = useState([])
    console.log(logos);
    useEffect(() => {
        fetch('/logo.json')
            .then(res => res.json())
            .then(data => setLogos(data))
    }, [])

    const box = {
        width: 30,
        height: 30,
        backgroundColor: "#ff0088",
        borderRadius: 5,
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // প্রতিটি ক্যারেক্টারের মধ্যে 0.05s 
                delayChildren: 0.2     // পুরো কন্টেইনারের প্রারম্ভিক বিলম্ব
            }
        },
        exit: { opacity: 0 }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 200 }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole(prev =>
                prev === "Frontend - Developer"
                    ? "Backend - Developer"
                    : "Frontend - Developer"
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="pt-10 bg-[url(./assets/heroBg.jpg)] w-full bg-cover md:h-[830px] lg:h-[550px] bg-center bg-fixed relative z-[222] rounded-md pb-2 md:pb-0">
            <div id="banner" className="grid grid-cols-1 lg:grid-cols-2 mb-10 px-6">
                {/* text introduction section*/}
                <div>
                    <div>
                        <h2 className="leading-4 text-3xl font-bold mb-4 playfair-display text-white">Welcome to my world</h2>
                        <div className="xl:flex items-center gap-4 z-[600] ">
                            <h2
                                className=" font-semibold monomakh-regular text-white mt-2 md:mt-4 lg:mt-0 inline-block">
                                Hi, I’m
                                <span className="playfair-display-name"> Apu Roy a</span></h2>
                            <div style={{ fontSize: "2em", }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentRole}
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        style={{ display: "inline-block" }}
                                    >
                                        {letters.map((char, index) => (
                                            <motion.span
                                                key={index}
                                                variants={letterVariants}
                                                style={{ display: "inline-block", color: '#FF0088' }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                    >
                                        |
                                    </motion.span>
                                </AnimatePresence>

                            </div>
                        </div>
                        <p className="mt-1 font-playfair text-white mt-2">Hello, I’m Apu Roy a passionate web developer dedicated to transforming ideas into engaging digital experiences. With expertise in modern front-end technologies and a keen eye for detail, I build responsive, user-friendly websites that not only look great but also perform seamlessly. I thrive on solving complex challenges and continuously learning new techniques to stay ahead in the fast-paced world of web development.</p>
                    </div>
                    <div>
                        <h2
                            className="text-2xl font-semibold my-4 text-[#FF014F]">Contact With Me</h2>

                        <div className="flex items-center gap-4">
                            <motion.span
                                style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm">
                                <a href="https://www.facebook.com/profile.php?id=100074605937724">
                                    <FaFacebookF />
                                </a>
                            </motion.span>
                            <motion.span
                                animate={{ rotateX: 40 }}
                                transition={{
                                    repeat: Infinity,
                                    type: "spring",
                                    visualDuration: 0.3,
                                    bounce: 0.45,
                                }}
                                className="bg-slate-300 p-3 rounded-sm">
                                <a href="https://www.linkedin.com/in/apu-roy-651268350/">
                                    <FaLinkedinIn />
                                </a>
                            </motion.span>
                            <motion.span
                                style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm">
                                <a href="https://web.whatsapp.com/">
                                    <IoLogoWhatsapp />
                                </a>
                            </motion.span>
                            <div >
                                <a className="btn hover:bg-[#FF014F] transition hover:text-white">Download Resume</a>
                            </div>
                        </div>
                        <ThreeDAnimatin />
                    </div>
                </div>
                {/* image section */}
                <div className="flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <div className=" h-[400px] border border-red-600 flex items-center justify-center rounded-md  mt-8 lg:mt-0">
                            <img className="mx-auto h-full object-cover" src={heroImg} alt="" />
                        </div>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className={`absolute w-[50px] h-8 rounded-full flex items-center justify-center text-white text-sm mr-4 font-bold orbit orbit-${index}`}
                                style={{ animationDelay: `${index * 0.5}s` }}
                            >
                                <img className="w-[30px] h-[40px] rounded-full object-cover" src={logo?.img} alt="" />
                            </div>
                        ))}
                    </div>
                    <style>
                        {`
          @keyframes orbit {
            0% { transform: rotate(0deg) translate(220px, 100px) rotate(0deg); }
            100% { transform: rotate(360deg) translate(150px, 100px) rotate(-360deg); }
         }
        .orbit {
            animation: orbit 11s linear infinite;
         }
        `}
                    </style>
                </div>
            </div>
            <div className="absolute top-0 left-0 bg-black opacity-60 w-full h-full -z-[10] rounded-md"></div>
        </div>
    );
};

export default Banner;
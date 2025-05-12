import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import heroImg from '../../../assets/hero.png'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import coverBanner from '../../../assets/coverbnner.webp'
import ThreeDAnimatin from "../../Animation/ThreeDAnimatin";
import { IoMdPlay } from "react-icons/io";

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
        backgroundColor: "#BF9023",
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
        <div className="pt-10 w-full bg-cover md:h-[830px] lg:h-[550px] bg-center bg-fixed relative z-[222] rounded-md pb-2 md:pb-0">
            <div id="banner" className="grid grid-cols-1 lg:grid-cols-2 mb-10 px-6">
                {/* text introduction section*/}
                <div className="mt-6">
                    <div>
                        <div className="items-center gap-4 z-[600] ">
                            {/* start */}
                            <div>
                                <div className="flex items-center justify-center border-2 border-[#747574] px-3 py-1 w-[170px] mb-3">
                                    <h2 className="text-xl">Hello There</h2>
                                </div>

                                <div>
                                    <h3>
                                        <span className="text-4xl font-bold">
                                            I,m</span>
                                        <span className="text-3xl text-[#FAAD1B]
                                    border-b-2 border-[#FAAD1B] ml-2">Apu Roy</span> </h3>
                                </div>
                            </div>
                            {/* end */}
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
                                                style={{ display: "inline-block", color: '#3F403F', fontSize: '36px', fontWeight: '700' }}
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
                        <p className="font-playfair text-[#311c1c]  mt-2">Hello, I’m Apu Roy a passionate web developer dedicated to transforming ideas into engaging digital experiences. With expertise in modern front-end technologies and a keen eye for detail, I build responsive, user-friendly websites that not only look great but also perform seamlessly. I thrive on solving complex challenges and continuously learning new techniques to stay ahead in the fast-paced world of web development.</p>
                    </div>
                    <div>
                        <div className=" bg-[#BF9023] flex items-center gap-2 w-[210px] rounded-4xl my-4">
                            <div className="bg-[#344C36] rounded-4xl py-2 px-2">
                                <h2
                                    className="text-xl font-semibold text-white">Contact With Me</h2>
                            </div>
                            <div className="flex items-center justify-center bg-white rounded-full p-1">
                                <span className="text-xl"><IoMdPlay /></span>
                            </div>

                        </div>
                        <div className="flex items-center gap-4">
                            <motion.span
                                style={box}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="flex justify-center  items-center rounded-sm bg-neutral-700">
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
                                <a href="">
                                    <IoLogoWhatsapp />
                                </a>
                            </motion.span>
                            <div >
                                <a className="btn hover:bg-[#BF9023] transition hover:text-white">Download Resume</a>
                            </div>
                        </div>
                        <ThreeDAnimatin />
                    </div>
                </div>
                {/* image section */}
                <div className="flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <div className="flex items-center justify-center rounded-md  mt-8 lg:mt-0 ">
                            <div className="relative">
                                <div className="absolute top-0 w-full h-full -z-10">
                                    <img src={coverBanner} alt="" />
                                </div>
                                <div>
                                    <img className="mx-auto h-[500px] object-cover" src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className={`absolute w-[50px] h-8 rounded-full flex items-center justify-center text-white text-sm mr-4 font-bold orbit orbit-${index}`}
                                style={{ animationDelay: `${index * 0.5}s` }}
                            >
                                <div>

                                    <img className="w-[30px] h-[40px] rounded-full object-cover" src={logo?.img} alt="" />
                                </div>
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

        </div>
    );
};

export default Banner;
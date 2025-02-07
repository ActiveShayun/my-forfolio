import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import heroImg from '../../../assets/hero.png'
import { motion } from "motion/react"


const Banner = () => {
    const box = {
        width: 30,
        height: 30,
        backgroundColor: "#ff0088",
        borderRadius: 5,
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-10 mb-10">
            {/* text introduction section*/}
            <div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <h2 className="leading-4">Welcome to my world</h2>
                    <h3 className="text-4xl font-bold my-4 ">Hi, I’m Apu Roy
                        <span className="block">a
                            <span className="text-[#FF014F] ml-2">Wev Developer</span>
                        </span>
                    </h3>
                    <p>Hello, I’m Apu Roy a passionate web developer dedicated to transforming ideas into engaging digital experiences. With expertise in modern front-end technologies and a keen eye for detail, I build responsive, user-friendly websites that not only look great but also perform seamlessly. I thrive on solving complex challenges and continuously learning new techniques to stay ahead in the fast-paced world of web development.</p>
                </div>
                <div>
                    <h2
                        className="font-semibold my-4 text-[#FF014F]">Contact With Me</h2>

                    <div className="flex items-center gap-4">
                        <motion.span
                            style={box}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="flex justify-center  items-center rounded-sm"><FaFacebookF /></motion.span>
                        <motion.span
                            animate={{ rotateX: 40 }}
                            transition={{
                                repeat: Infinity,
                                type: "spring",
                                visualDuration: 0.3,
                                bounce: 0.45,
                            }}
                            className="bg-slate-300 p-3 rounded-sm"><FaLinkedinIn /></motion.span>
                        <motion.span
                            style={box}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="flex justify-center  items-center rounded-sm"><IoLogoWhatsapp /></motion.span>
                        <div >
                            <a className="btn hover:bg-[#FF014F] transition hover:text-white">Download Resume</a>
                        </div>
                    </div>

                </div>
            </div>
            {/* image section */}
            <div>
                <img className="mx-auto h-[400px] object-cover" src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
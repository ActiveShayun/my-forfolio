import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import aboutPhoto from '../../../assets/aboutMe.jpg'
import { FaArrowRightToBracket } from "react-icons/fa6";


const AboutMeSection = () => {
    return (
        <div
            className="mt-22 bg-[#344C36] grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-16 w-full rounded-xl"
        >
            <div className=" flex items-center justify-center">
                <div className="relative text-center">
                    <img
                        className="w-[360px] h-[390px] mx-auto rounded-full object-cover"
                        src={aboutPhoto} alt="" />
                    <div className="absolute bottom-4 left-6">
                        <div>
                            <span className="bg-[#BF9023] py-1 px-2 rounded-3xl  border border-white mb-1 inline-block">UX/UI Design</span>
                        </div>
                        <div>
                            <span className="bg-[#344C36] py-1 px-2 rounded-3xl border border-white rotate-6 inline-block text-white"
                            >Mobile App Design</span>
                            <span className="bg-[#BF9023] py-1 px-2 rounded-3xl  border border-white -rotate-6 inline-block ml-1"
                            >Wevsite Design</span>
                        </div>
                        <div className="space-x-1 my-2">
                            <span className="bg-[#BF9023] py-1 px-2 rounded-3xl border border-white rotate-6 inline-block"
                            >Design System</span>
                            <span className="bg-[#344C36] py-1 px-2 rounded-3xl  border border-white text-white"
                            >Prototype</span>
                            <span className="bg-[#344C36] py-1 px-2 rounded-3xl border border-white -rotate-10 inline-block text-white"
                            >Dashboard</span>
                        </div>
                        <div>
                            <span className="bg-[#BF9023] py-1 px-2 rounded-3xl  border border-white mt-1 inline-block"
                            >Wireframe Design</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shadow-lg text-left px-4">
                <div>
                    <h3 className="text-white text-3xl mb-4">- About Me</h3>
                    <h4 class="text-left mb-4">
                        <span className="text-white text-4xl font-bold">Who is</span>
                        <span className="text-4xl ml-3 text-[#F6AB1C]">Apu Roy</span></h4>
                    <p className="text-gray-200 pr-3">
                        I'm a passionate web developer with experience in building responsive and user-friendly websites.
                        I specialize in modern front-end technologies and clean, efficient code.
                        Always eager to learn, I turn ideas into seamless digital experiences.
                    </p>
                </div>
                <div className="flex items-center gap-8 mt-4">
                    <div>
                        <span className="text-[#F6AB1C] text-4xl">10+</span>
                        <p className="text-gray-200 text-lg">Project Completed</p>
                    </div>
                    <div>
                        <span className="text-[#F6AB1C] text-4xl">3+</span>
                        <p className="text-gray-200 text-lg">Industry Covered</p>
                    </div>
                    <div>
                        <span className="text-[#F6AB1C] text-4xl">000+</span>
                        <p className="text-gray-200 text-lg">Years of Experience</p>
                    </div>
                </div>
                <div className=" bg-[#BF9023] flex items-center gap-2 w-[210px] rounded-4xl mt-5 p-1">
                    <div className="bg-[#344C36] rounded-4xl py-2 px-2">
                        <h2
                            className="text-xl font-semibold text-white">
                            Download CV</h2>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full p-1">
                        <span className="text-xl">
                            <FaArrowRightToBracket />
                        </span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutMeSection;
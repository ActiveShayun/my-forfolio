import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#E4EAED] text-neutral-content p-4 flex items-center justify-center rounded-md">

                <nav className="flex flex-col items-center justify-center gap-4 text-black p-4">
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://www.linkedin.com/in/apu-roy-651268350/">
                            <span className="text-2xl"><FaLinkedinIn /></span>
                        </a>
                        <a href="https://github.com/ActiveShayun">
                            <span className="text-2xl"><FaGithub /></span>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100074605937724">
                            <span className="text-2xl"><FaFacebookF /></span>
                        </a>
                        <a href="">
                            <span className="text-2xl"><FaWhatsapp /></span>
                        </a>
                    </div>
                    <div className="flex justify-center items-center text-black mx-auto">
                        <p className="text-center flex justify-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </div>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;
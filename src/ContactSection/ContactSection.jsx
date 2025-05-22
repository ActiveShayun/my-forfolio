import SectionTitle from '../componets/shared/SectionTitle/SectionTitle';
import { MdAddIcCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from './ContactForm';


const ContactSection = () => {
 
    return (
        <div className='my-18' id='contact'>
            <SectionTitle heading={'Reach Me Here'} />
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 mt-8'>
                <div>
                    <h5 className='text-lg mb-2'>- Contact Us</h5>
                    <div>
                        <span className='text-4xl font-semibold'>
                            Let's Tall for</span> <span className='text-[#FAAD1B] text-4xl'>Your</span>
                        <h6 className='text-[#FAAD1B] text-4xl font-semibold mt-1 mb-4'>Next Project</h6>
                    </div>
                    <p>Get in touch with us! Whether you have a question, feedback, or need assistance, we're here to help. Fill out the form below, and our team will get back to you as soon as possible.</p>
                    <div className='flex items-center gap-2 mb-3.5 mt-3.5'>
                        <span className='bg-[#FAAD1B]  rounded-full w-[40px] 
                        h-[40px]  flex items-center justify-center p-1 text-lg'><MdAddIcCall /></span>
                        <span className='text-lg tracking-[2px]'>
                            +8801904773653</span>
                    </div>
                    <div className='flex items-center gap-2 mb-3.5'>
                        <span className='bg-[#FAAD1B]  rounded-full w-[40px] 
                        h-[40px]  flex items-center justify-center p-1 text-lg'><MdMarkEmailRead /></span>
                        <span className='text-lg tracking-[2px]'>
                            mrapuroy1609@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2 mb-3.5'>
                        <span className='bg-[#FAAD1B]  rounded-full w-[40px] 
                        h-[40px]  flex items-center justify-center p-1 text-lg'><SiWhatsapp /></span>
                        <span className='text-lg tracking-[2px]'>
                            +8801904773653</span>
                    </div>
                    <div className='flex items-center gap-2 mb-3.5'>
                        <span className='bg-[#FAAD1B]  rounded-full w-[40px] 
                        h-[40px]  flex items-center justify-center p-1 text-lg'><CiLocationOn /></span>
                        <span className='text-lg tracking-[2px]'>
                            Sreepur, Guzipur</span>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
};

export default ContactSection;
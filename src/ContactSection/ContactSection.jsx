import SectionTitle from '../componets/shared/SectionTitle/SectionTitle';
import { MdAddIcCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";

const ContactSection = () => {
    return (
        <div className='my-18'>
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

                <div className='p-7 rounded-md'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <label htmlFor="">
                            <span className='block font-medium mb-2'>Your Name*</span>
                            <input type="text" placeholder="EX john Doe" className="input input-bordered w-full rounded-md bg-[#F5F5F5]" />
                        </label>
                        <label htmlFor="">
                            <span className='block font-medium mb-2'>Y&our Phone*</span>
                            <input type="text" placeholder="Enter your phon number" className="input input-bordered w-full rounded-md bg-[#F5F5F5]" />
                        </label>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="" className='mb-3'>
                            <span className='block font-medium mb-2'>Your Email*</span>
                            <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full rounded-md mb-2 bg-[#F5F5F5]" />
                        </label>
                        <label className='mb-3' htmlFor="">
                            <span className='block font-medium my-2'>Subject*</span>
                            <input type="text" placeholder="Type here subject" className="input input-bordered w-full rounded-md mb-2 bg-[#F5F5F5]" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <span className='block font-medium my-2'>Your Massage*</span>
                            <textarea className="textarea w-full mb-2 bg-[#F5F5F5]" placeholder="type here message"></textarea>
                        </label>
                    </div>
                    <button type='submit' className="cursor-pointer bg-[#BF9023] flex items-center gap-2 w-[145px] rounded-4xl my-4">
                        <span className="bg-[#344C36] rounded-4xl py-2 px-4">
                            <span
                                className="text-xl font-semibold text-white">Submit</span>
                        </span>
                        <span className="flex items-center justify-center bg-white rounded-full p-1">
                            <span className="text-xl">
                                <IoMdArrowForward />
                            </span>
                        </span>

                    </button>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;
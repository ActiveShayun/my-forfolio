import React from 'react';
import SectionTitle from '../componets/shared/SectionTitle/SectionTitle';
import contactImg from '../assets/contact.png'

const ContactSection = () => {
    return (
        <div className='my-18'>
            <SectionTitle heading={'Reach Me Here'} />
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 mt-8'>
                <div className='space-y-2'>
                    <img src={contactImg} alt="" />
                    <h3 className='text-2xl font-bold rounded-md'>Mr : Apu Roy</h3>
                    <p>Have a project in mind or need a website? Feel free to reach out! Whether it’s a collaboration, inquiry, or just a friendly hello, I’d love to hear from you. Drop me a message, and let’s create something extraordinary together.</p>
                    <div>
                        <p>Email - mrapu@gmail.com</p>
                        <p>Phone - 0190477345</p>
                    </div>

                </div>

                <div className='bg-[#E4EAED] p-7 rounded-md'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <label htmlFor="">
                            <span className='block font-medium mb-2'>Name</span>
                            <input type="text" placeholder="Type here name" className="input input-bordered w-full rounded-md " />
                        </label>
                        <label htmlFor="">
                            <span className='block font-medium mb-2'>Phone</span>
                            <input type="text" placeholder="Type here phone" className="input input-bordered w-full rounded-md" />
                        </label>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="" className='mb-3'>
                            <span className='block font-medium mb-2'>Email</span>
                            <input type="text" placeholder="Type here email" className="input input-bordered w-full rounded-md mb-2" />
                        </label>
                        <label className='mb-3' htmlFor="">
                            <span className='block font-medium my-2'>Subject</span>
                            <input type="text" placeholder="Type here subject" className="input input-bordered w-full rounded-md mb-2" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <span className='block font-medium my-2'>Your Massage</span>
                            <textarea className="textarea textarea-secondary w-full mb-2" placeholder="type here message"></textarea>
                        </label>
                    </div>
                    <button className='px-5 py-1 rounded-md block mx-auto bg-[#FF0088] w-full mt-6 font-semibold text-white'>Send Me</button>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;
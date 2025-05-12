import { IoMdArrowForward } from "react-icons/io";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const response = await emailjs.send(
                serviceId,
                templateId,
                data,
                publicKey
            )
            console.log('email sent success full', response);
            if (response.status === 200) {
                toast.success('Email sent successful')
                reset()
            }
        } catch (err) {
            console.log('email not sent', err);
            toast.error('Email sent unsuccessful')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-7 rounded-md'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <label htmlFor="">
                            <span className='block font-medium mb-2'>Your Name*</span>
                            <input
                                type="text"
                                {...register('name', { required: 'name is require' })}
                                placeholder="EX john Doe"
                                className="input input-bordered w-full rounded-md bg-[#F5F5F5]" />
                            {errors.name &&
                                <span className="text-red-600">
                                    {errors.name.message}</span>}
                        </label>
                        <label htmlFor="">
                            <span className='block font-medium mb-2'>Your Phone*</span>
                            <input
                                {...register('number', { required: 'number is' })}
                                type="number" placeholder="Enter your phon number" className="input input-bordered w-full rounded-md bg-[#F5F5F5]" />
                            {errors.number &&
                                <span className="text-red-600">{errors.number.message}</span>}
                        </label>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="" className='mb-3'>
                            <span className='block font-medium mb-2'>Your Email*</span>
                            <input
                                {...register('email', { required: 'email is required' })}
                                type="text" placeholder="example@gmail.com" className="input input-bordered w-full rounded-md mb-2 bg-[#F5F5F5]" />
                            {errors.email &&
                                <span className="text-red-600">{errors.email?.message}</span>}
                        </label>
                        <label className='mb-3' htmlFor="">
                            <span className='block font-medium my-2'>Subject*</span>
                            <input
                                {...register('subject', { required: 'subject is required' })}
                                type="text" placeholder="Type here subject" className="input input-bordered w-full rounded-md mb-2 bg-[#F5F5F5]" />
                            {errors.subject &&
                                <span className="text-red-600">{errors.subject?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <span className='block font-medium my-2'>Your Massage*</span>
                            <textarea
                                {...register('message', { required: 'message is required' })}
                                className="textarea w-full mb-2 bg-[#F5F5F5]" placeholder="type here message"></textarea>
                            {errors.message &&
                                <span className="text-red-600">{errors.message?.message}</span>}
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
            </form>
        </div>
    );
};

export default ContactForm;
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import ReactStars from 'react-stars'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { uploadImgOnImageBB } from '../../../utility/utility';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddReview = ({ isOpen, setIsOpen }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [rating, setRating] = useState(0)

    console.log(rating);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        if (rating === 0) {
            return toast.error('please select rating star')
        }
        const image = data.photo[0]
        const uploadImage = await uploadImgOnImageBB(image)
        console.log(uploadImage.data.display_url);
        const review = {
            name: data.name,
            email: data.email,
            photo: uploadImage.data.display_url,
            review: data.review,
            ratings: rating,
            dateline: startDate
        }

        if (uploadImage.success) {
            const res = await axios.post('http://localhost:5000/add-review', review)
            console.log(res);
            if (res.data.insertedId) {
                toast.success('review added successful')
                setIsOpen(false)
            }
        }
    }

    const ratingChanged = (newRating) => {

        setRating(newRating)
        console.log(newRating);
    }

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}
                className="relative z-[5000]">
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="max-w-lg
                    bg-[#E4EAED] px-12 py-3 rounded-xl">
                        <div>
                            {/* add review section*/}
                            <div >
                                {/* Review Section */}
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h3 className="text-3xl font-bold text-green-400">Leave a Review</h3>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                            {/* name */}
                                            <div>
                                                <label className="block text-lg mb-1">Name</label>
                                                <input
                                                    {...register('name')}
                                                    type="text"
                                                    className="w-full p-3 rounded-md text-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>
                                            {/* email */}
                                            <div>
                                                <label className="block text-lg mb-1">Email</label>
                                                <input
                                                    {...register('email')}
                                                    type="email"
                                                    className="w-full p-3 rounded-md text-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    placeholder="example@gmail.com"
                                                    required
                                                />
                                            </div>
                                            {/* date */}
                                            <div>
                                                <label className="block text-lg mb-1">Deadline</label>
                                                <DatePicker
                                                    className="w-full p-3 rounded-md text-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                />
                                            </div>
                                            {/* star */}
                                            <div className=''>
                                                <label
                                                    className="block text-lg relative top-1">
                                                    Rating</label>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={30}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#F8AC1B" />
                                            </div>
                                        </div>
                                        {/* add img */}
                                        <div>
                                            <label className="block text-lg mb-1">Add Your image</label>
                                            <input
                                                className='p-1 w-[200px]'
                                                type="file"
                                                {...register('photo')}
                                                required />
                                        </div>
                                        {/* review */}
                                        <div>
                                            <div className='flex items-center gap-4'>
                                                <label className="block text-lg mb-1">Review</label>
                                            </div>
                                            <textarea
                                                {...register('review')}
                                                name='review'
                                                rows="4"
                                                className="w-full p-3 rounded-md text-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                placeholder="Write your review..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-lg font-bold rounded-lg text-white hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                                        >
                                            Submit Review
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => setIsOpen(false)}>Deactivate</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default AddReview;
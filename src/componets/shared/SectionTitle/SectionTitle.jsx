import React from 'react';
import { IoCodeSlashOutline } from 'react-icons/io5';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-3 playfair-display '>{heading}</h2>
            <span className='flex justify-center gap-3 text-[#FF0088]  text-2xl font-semibold mb-3'>
                <IoCodeSlashOutline />
                <IoCodeSlashOutline />
                <IoCodeSlashOutline /></span>
            <p className='text-center'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
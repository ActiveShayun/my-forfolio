import { p, span } from 'motion/react-client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ d }) => {
    console.log('ProjectDetails', d);
    return (
        <div>
            <div data-aos="zoom-in" className="w-full mx-auto shadow-xl rounded-2xl overflow-hidden mb-4 md:mb-0">
                <img
                    src={d.demo}
                    alt="Project Name"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                    <h3 className=" mb-1 text-xl">{d.category}</h3>
                    <p className=''>{d.description}</p>
                    <p className='font-semibold flex items-center justify-center gap-3 mt-2'>
                        <span><MdLiveTv /></span>
                        <a href={d.liveProjectLink}>
                            Live Link  </a></p>
                    <p className='font-semibold flex items-center justify-center gap-2'>
                        <span><FaGithub /></span>
                        <a href={d.githubClientLink}>
                            Github Link</a>
                    </p>
                    <p>
                        <span className='text-lg font-bold'>Use technology Stack</span>
                        <span className='flex flex-wrap justify-center'>
                            {
                                d.technologyStack?.map(tec =>
                                    <span
                                        className='m-2 border border-[#FF0088] px-2 rounded-full'>
                                        {tec}</span>)
                            }
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
import { p, span } from 'motion/react-client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ d }) => {
    console.log('ProjectDetails', d);
    return (
        <div>
            <div data-aos="zoom-in" className="w-full mx-auto max-w-sm shadow-xl rounded-2xl overflow-hidden">
                <img
                    src={d.liveProjectLink}
                    alt="Project Name"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                    <h3 className=" mb-2">{d.category}</h3>
                    <p className=''>{d.description}</p>
                    <p className='font-semibold '>

                        <a href="https://github.com/ActiveShayun">
                            Live Link  </a></p>
                    <p className='font-semibold flex items-center justify-center gap-2'>
                        <span><FaGithub /></span>
                        <a href="https://github.com/ActiveShayun">
                            Github Link</a>
                    </p>
                    <p>
                        <span className='text-lg font-bold'>   Use technology Stack</span>
                        <span className='block'>
                            {
                                d.technologyStack?.map(tec =>
                                    <span className='m-2'>{tec}</span>)

                            }
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
import React, { useEffect, useState } from 'react';
import Developments from '../Developments';


const ProjectShowCase = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    console.log(project);
    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    project?.map(p => <Developments key={p.category} p={p} />)
                }
            </div>
        </div>
    );
};

export default ProjectShowCase;
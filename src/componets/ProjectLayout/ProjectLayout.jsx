import ProjectsCategory from '../homeLayout/Projects/ProjectsCategory';
import SectionTitle from '../shared/SectionTitle/SectionTitle';


const ProjectLayout = () => {
    return (
        <div className='my-10'>
            <div>
                <SectionTitle heading={'My Creativity'} />
                <ProjectsCategory />
            </div>
        </div>
    );
};

export default ProjectLayout;
import { NavLink } from "react-router-dom";


const ProjectsCategory = () => {
    return (
        <div id="portfolio" className="flex items-center justify-center gap-3">
            <NavLink to='/' className={({ isActive }) => isActive ?
                'bg-[#FAAD1B] text-lg px-3 rounded-sm text-white underline'
                : 'bg-[#FAAD1B] text-black text-lg px-3 rounded-sm'}>All</NavLink>
            <NavLink to={'/design/'} className={({ isActive }) => isActive ?
                'bg-[#FAAD1B] text-lg px-3 rounded-sm text-white underline'
                : 'bg-[#FAAD1B] text-black text-lg px-3 rounded-sm'}>Design</NavLink>
            <NavLink className={({ isActive }) => isActive ?
                'bg-[#FAAD1B] text-lg px-3 rounded-sm text-white underline'
                : 'bg-[#FAAD1B] text-black text-lg px-3 rounded-sm'}>Development</NavLink>
            <NavLink className={({ isActive }) => isActive ?
                'bg-[#FAAD1B] text-lg px-3 rounded-sm text-white underline'
                : 'bg-[#FAAD1B] text-black text-lg px-3 rounded-sm'}>Photography</NavLink>
        </div>
    );
};

export default ProjectsCategory;
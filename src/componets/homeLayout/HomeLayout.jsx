import { Outlet } from "react-router-dom";
import ProjectLayout from "../ProjectLayout/ProjectLayout";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import Banner from "./Banner/Banner";
import SkillSection from "./SkillSections/SkillSection";
import ContactSection from "../../ContactSection/ContactSection";

const HomeLayout = () => {
    return (
        <div>
            <Banner />
            <AboutMeSection />
            <SkillSection />
            <ProjectLayout />
            <Outlet />
            <ContactSection/>
        </div>
    );
};

export default HomeLayout;
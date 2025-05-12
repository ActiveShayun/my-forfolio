import { Outlet } from "react-router-dom";
import ProjectLayout from "../ProjectLayout/ProjectLayout";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import Banner from "./Banner/Banner";
import SkillSection from "./SkillSections/SkillSection";
import ContactSection from "../../ContactSection/ContactSection";
import DesignPanel from "./DesignPanel/DesignPanel";
import ReviewsCard from "../shared/ReviewModal/ReviewsCard";

const HomeLayout = () => {
    return (
        <div>
            <Banner />
            <DesignPanel/>
            <AboutMeSection />
            <SkillSection />
            <ProjectLayout />
            <Outlet />
            <ContactSection/>
            <ReviewsCard/>
        </div>
    );
};

export default HomeLayout;
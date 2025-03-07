import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout
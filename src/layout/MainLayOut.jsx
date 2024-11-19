import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NabVar from "../components/NabVar";


const MainLayOut = () => {
    return (
        <div>
            <div className="h-16">
             <NabVar/>
            </div>
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-12">
                <Outlet/>  
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayOut;
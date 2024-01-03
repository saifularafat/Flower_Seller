import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";
import MiddleHeader from "../Share/LogoSearchInfo/MiddleHeader";
import Nav from "../Share/NavBer/Nav";

const Main = () => {
    return (
        <div>
            <Header />
            <MiddleHeader />
            <Nav />
            <div className="min-h-[calc(100vh-410px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
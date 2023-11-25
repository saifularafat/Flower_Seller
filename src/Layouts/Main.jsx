import Home from "../Pages/Home/Home/Home";
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
            <Home />
            <Footer />
        </div>
    );
};

export default Main;
import Home from "../Pages/Home/Home/Home";
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
        </div>
    );
};

export default Main;
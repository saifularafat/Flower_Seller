import { Link } from "react-router-dom";
import logo from "./../../assets/logo/logo.webp"
const Logo = () => {
    return (
        <Link to="/" className="">
            <img src={logo} alt="" className="w-1/2 object-cover"/>
        </Link>
    );
};

export default Logo;
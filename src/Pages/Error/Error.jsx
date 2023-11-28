import Lottie from "lottie-react";
import errorPage from "../../assets/othersImg/errorPage.json";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="flex items-center justify-center bg-slate-400 h-screen">
            <div className="shadow-2xl pb-4">
                <h2 className="text-2xl font-semibold text-center text-slate-800 uppercase">Page Not Found!</h2>
                <div>
                    <Lottie animationData={errorPage} />
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/" className="text-center bg-blue-400 px-5 py-2 text-lg font-semibold text-white uppercase tracking-wider rounded-md hover:text-blue-950 transition-all duration-200">
                        GO Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
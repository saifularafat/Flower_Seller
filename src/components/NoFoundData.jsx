import { Link } from "react-router-dom";

const NoFoundData = () => {
    return (
        <div className="w-10/12 mx-auto pb-3">
            <div className="text-center">
                <h2 className="md:text-2xl text-xl font-semibold text-slate-950">No Found Data!</h2>
                <p className="md:text-lg text-base font-normal md:pt-4 pt-2">Did you know you can search for Flower</p>
                <p className="md:text-lg text-base font-normal ">currently offering Flower ordering?</p>
                <div className="pt-7">
                    <Link to="" className="md:py-2 py-1 md:px-4 px-2 rounded-md bg-blue-600 hover:bg-blue-300 md:text-xl text-base font-bold text-white transition-all duration-200">
                        Flower Sale & Order
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoFoundData;
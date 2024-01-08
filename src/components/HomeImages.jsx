import { Link } from "react-router-dom";

const HomeImages = ({
    path1, Image1, title1,
    path2, Image2, title2,
    path3, Image3, title3,
    path4, Image4, title4,
    path5, Image5, title5,
    path6, Image6, title6, }) => {
    return (
        <div className="grid grid-cols-6 gap-3 w-[1320px] md:mx-auto md:overflow-x-hidden overflow-x-scroll my-10">
            <Link to={path1} className=" border border-white rounded-md shadow-md p-0">
                <img src={Image1} loading='lazy' alt="flower" className="hover:scale-105 transition-all duration-200" />
                <h4 className="text-center text-lg font-medium tracking-wide">{title1}</h4>
            </Link>
            <Link to={path2} className=" border border-white rounded-md shadow-md p-0">
                <img src={Image2} loading='lazy' alt="flower" className="hover:scale-105 transition-all duration-200" />
                <h4 className="text-center text-lg font-medium tracking-wide">{title2}</h4>
            </Link>
            <Link to={path3} className=" border border-white rounded-md shadow-md p-0">
                <img src={Image3} loading='lazy' alt="flower" className="hover:scale-105 transition-all duration-200" />
                <h4 className="text-center text-lg font-medium tracking-wide">{title3}</h4>
            </Link>
            <Link to={path4} className=" border border-white rounded-md shadow-md p-0">
                <img src={Image4} loading='lazy' alt="flower" className="hover:scale-105 transition-all duration-200" />
                <h4 className="text-center text-lg font-medium tracking-wide">{title4}</h4>
            </Link>
            <Link to={path5} className=" border border-white rounded-md shadow-md p-0">
                <img src={Image5} loading='lazy' alt="flower" className="hover:scale-105 transition-all duration-200" />
                <h4 className="text-center text-lg font-medium tracking-wide">{title5}</h4>
            </Link>
            <Link to={path6} className=" border border-white rounded-md shadow-md p-0">
                <img src={Image6} loading='lazy' alt="flower" className="hover:scale-105 transition-all duration-200" />
                <h4 className="text-center text-lg font-medium tracking-wide">{title6}</h4>
            </Link>
            
        </div>
    );
};

export default HomeImages;
import { Link } from "react-router-dom";
const SectionSiteCover = ({ path1, Image1, title1, path2, Image2, title2 }) => {
    return (
        /* TODO Side Cover */
        <div className="md:flex items-center md:gap-6 gap-4 md:w-11/12 w-full mx-auto">
            <div className="relative">
                <Link to={path1} className="">
                    <img src={Image1} loading='lazy' alt="flower" className="w-full object-cover" />
                    <div className="absolute left-0 bottom-0 bg-black/70 py-2 pl-3 w-full">
                        <p className="text-white text-lg font-medium">{title1}</p>
                    </div>
                </Link>
            </div>
            <div className="relative">
                <Link to={path2} className="">
                    <img src={Image2} loading='lazy' alt="flower" className="w-full object-cover" />
                    <div className="absolute left-0 bottom-0 bg-black/70 py-2 pl-3 w-full">
                        <p className="text-white text-lg font-medium">{title2}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SectionSiteCover;
import { Link } from "react-router-dom";
import {AiOutlineDoubleRight } from "react-icons/ai"
const PagesPath = ({ path, name, title }) => {
    return (
        <div className="flex items-center gap-1 py-2">
            <Link to="/" className="md:text-sm text-xs font-semibold text-blue-400 hover:underline">Home</Link>
            <AiOutlineDoubleRight  className="text-[9px] mt-1" />
            <Link to={path} className="md:text-sm text-xs font-semibold text-blue-400 hover:underline">{name}</Link>
            <AiOutlineDoubleRight className="text-[9px] mt-1" />
            <p className="md:text-sm text-xs font-semibold text-blue-500">{title}</p>
        </div>
    );
};

export default PagesPath;
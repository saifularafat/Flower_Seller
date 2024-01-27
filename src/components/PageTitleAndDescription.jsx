import { Link } from "react-router-dom";
import PagesPath from "./PagesPath";

const PageTitleAndDescription = ({ path, name, pageTitle, title, bgBorder, des1, textLink1, linkName1,des2, textLink2, linkName2, des3 }) => {
    return (
        <>
            <PagesPath path={path} name={name} title={pageTitle} />
            <div className="grid grid-cols-3 md:grid-cols-7 gap-5  hidden md:block">
                <div className="col-span-1 md:col-span-2 relative">
                    <div className="absolute translate-y-1/2 pt-1 md:hidden block">
                        <h3 className="md:text-2xl text-base font-semibold text-blue-950">{title}</h3>
                    </div>
                    <div className={`absolute h-full w-[2px] bg-slate-300 ${bgBorder} right-6 top-0`}>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-5">
                    <p className="">
                        {des1} <Link to={textLink1} className="text-blue-500 underline">{linkName1}</Link> {des2} <Link to={textLink2} className="text-blue-500 underline"> {linkName2}</Link>{des3}
                    </p>
                </div>
            </div>
        </>
    );
};

export default PageTitleAndDescription;
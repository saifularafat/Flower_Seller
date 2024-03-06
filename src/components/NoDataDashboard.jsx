import { Link } from "react-router-dom";

const NoDataDashboard = ({ title1, title2, link }) => {
    return (
        <div className="w-10/12 mx-auto pb-3 md:my-16 my-6 " >
            <div className="text-center">
                <h2 className="md:text-2xl text-xl font-semibold text-slate-950">{title1}</h2>
                <p className="md:text-base text-sm font-normal md:pt-3 pt-1">{title2}</p>
                <p className="md:text-base text-sm font-normal">Currently offering Flower Go the order?</p>
                <div className="md:pt-5 pt-3 flex items-center justify-center">
                    <Link to={link} className="">
                        <button className="bg-sky-600 flex items-center justify-center text-white font-semibold text-base overflow-hidden group">
                            <span className="inline-block bg-sky-900 px-[10px] py-2 after:content-['D'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">D </span>
                            <span className="inline-block bg-sky-900 px-[10px] py-2 after:content-['E'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">e</span>
                            <span className="inline-block bg-sky-900 px-[10px] py-2 after:content-['T'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">t</span>
                            <span className="inline-block bg-sky-900 px-[10px] py-2 after:content-['A'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">a</span>
                            <span className="inline-block bg-sky-900 px-[10px] py-2 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">i</span>
                            <span className="inline-block bg-sky-900 px-[10px] py-2 after:content-['L'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">l</span>
                            <span className="inline-block bg-sky-900 px-[10px] py-2 after:content-['S'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">s</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoDataDashboard;
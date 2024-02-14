import { BsSearch } from "react-icons/bs";

const EmailSearch = () => {
    return (
        <>
            {/* search section */}
            < div className="flex items-center md:py-2 py-1 px-2 border-0 border-b border-solid border-slate-300 rounded" >
                <BsSearch className="text-slate-600 md:text-xl text-base font-bold md:mx-1 mx-1" />
                <input className={`w-full outline-none pl-1`} type="text" placeholder="Search Email " />
            </div >
        </>
    );
};

export default EmailSearch;
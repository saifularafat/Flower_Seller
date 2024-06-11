import { BiDotsVertical } from "react-icons/bi";
import { FaPrint } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";

const ModalFirstPart = ({ emailClick, setEmailClick }) => {
    console.log("emailDelete", setEmailClick);
    return (
        <div className="grid grid-cols-3 md:grid-cols-11 py-3 border-0 border-b border-solid border-slate-300">
            {/* first part */}
            <div className="BACK_TITLE col-span-2 md:col-span-10 flex items-center">
                <button onClick={() => setEmailClick(!emailClick)}>
                    <SlArrowLeft className="text-2xl text-slate-800 font-semibold hover:bg-slate-50 p-1 rounded-2xl transition-all duration-200" />
                </button>
                <h2 className="pl-3 text-sm font-semibold text-slate-950">Bring smile discussion same boy include care.</h2>
                <div className="flex items-center gap-2 pl-2">
                    <p className="text-xs bg-red-200 text-red-800 py-1 px-2 rounded-md">Private</p>
                    <p className="text-xs bg-blue-200 text-blue-800 py-1 px-2 rounded-md">Company</p>
                </div>
            </div>
            {/* SECOND PART */}
            <div className="PRINTER col-span-1 gap-0 text-end  flex items-center">
                <button className="hover:bg-slate-200 p-2 rounded-2xl transition-all duration-200">
                    <FaPrint className="text-xl text-slate-400" />
                </button>
                <button className="hover:bg-slate-200 p-2 rounded-2xl transition-all duration-200">
                    <BiDotsVertical className="text-xl text-slate-700" />
                </button>
            </div>
        </div>
    );
};

export default ModalFirstPart;
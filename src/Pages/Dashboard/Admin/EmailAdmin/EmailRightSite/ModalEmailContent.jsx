import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { FaPhotoFilm } from "react-icons/fa6";

const ModalEmailContent = ({ startClick, setStartClick }) => {
    return (
        <div className="flex items-start justify-between py-2 px-3 border-0 border-b border-solid border-slate-300">
            <div className="flex items-center gap-3">
                <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                <div>
                    <h2 className="font-medium text-slate-950">Katie Brandt</h2>
                    <p className="text-xs text-slate-600">james25@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center gap-4 text-slate-800">
                <h3 className="text-sm font-medium">Nov 12, 2023</h3>
                <button>
                    <FaPhotoFilm className="text-lg text-blue-900" />
                </button>
                <button className="" onClick={() => setStartClick(!startClick)}>
                    {
                        startClick ?
                            <AiFillStar className="text-xl text-yellow-500" />
                            :
                            <AiOutlineStar className="text-xl " />
                    }

                </button>
                <button className="hover:bg-slate-200 p-1 rounded-2xl transition-all duration-200">
                    <BiDotsVertical className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default ModalEmailContent;
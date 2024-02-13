import { useState } from "react";
import { FaAlignJustify, FaAlignLeft, FaBold, FaItalic, FaMinus, FaUnderline } from "react-icons/fa6";
import { GiCrossedSabres } from "react-icons/gi";
import { FiZapOff } from "react-icons/fi";
import { CiTextAlignCenter, CiTextAlignRight } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
const EmailCompose = () => {
    const [compose, setCompose] = useState(false);
    return (
        <div className="w-11/12 mx-auto mt-3">
        <button
            onClick={() => setCompose(!compose)}
            className="w-full  bg-blue-700/50 hover:bg-blue-700/70 rounded-lg py-1 px-3 text-white text-lg font-medium transition-all duration-200 "
        >
            Compose
        </button>
        {
            compose &&
            <div className="absolute bottom-[58px] right-[50px] w-2/6 overflow-hidden rounded-tl-xl bg-white z-10">
                {/* first */}
                <div className="flex items-center justify-between bg-slate-200 py-2 px-3">
                    <h2 className="text-lg font-medium text-gray-950">Compose Mail</h2>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setCompose(!compose)}>
                            <FaMinus className="text-2xl hover:bg-slate-300 p-1 text-slate-900 rounded-lg" />
                        </button>
                        <button onClick={() => setCompose(!compose)}>
                            <GiCrossedSabres className="text-2xl hover:bg-slate-300 text-slate-900 hover:text-red-900 p-1 rounded-lg" />
                        </button>
                    </div>
                </div>
                {/* second */}
                <div className="grid grid-cols-6 content-center px-3 py-1 border-0 border-b border-solid border-slate-300">
                    <div className="col-span-5 flex items-center gap-1">
                        <p className=" text-base font-medium text-slate-950">To: </p>
                        <input type="text" className="w-full py-2 px-0 outline-none text-slate-900 text-xs lowercase" />
                    </div>
                    <div className="col-span-1 pt-2 text-right gap-1">
                        <button className="pr-2 text-blue-600 font-medium border-0 border-r border-solid border-slate-500">Cc</button>
                        <button className="pl-2 text-blue-600 font-medium ">Bcc</button>
                    </div>
                </div>
                {/* Three */}
                <div className=" px-3 py-2 border-0 border-b border-solid border-slate-300">
                    <input type="text" placeholder="subject" className="placeholder:text-slate-400 placeholder:text-sm outline-none w-full" />
                </div>
                {/* Four */}
                <div className=" px-3 py-3 border-0 border-b border-solid border-slate-300">
                    <div className="flex items-center text-slate-900 gap-3">
                        <button><FaBold /></button>
                        <button><FaUnderline /></button>
                        <button><FaItalic /></button>
                        <button><FiZapOff /></button>
                        <button><CiTextAlignCenter /></button>
                        <button><FaAlignLeft /></button>
                        <button><CiTextAlignRight /></button>
                        <button><FaAlignJustify /></button>
                    </div>
                </div>
                {/* five */}
                <div className=" px-3 py-3 border-0 border-b border-solid border-slate-300">
                    {/* <input type="text" placeholder="write something here..." ro className="h-"/> */}
                    <textarea name="" id="" cols="30" rows="3" placeholder="write something here..." className="w-full placeholder:text-slate-400 placeholder:text-sm outline-none text-slate-900 font-normal p-1" ></textarea>
                </div>
                {/* six */}
                <div className=" px-3 py-3 border-0 border-b border-solid border-slate-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <button className="flex items-center">
                                <span className="h-10 px-3 flex items-center justify-center bg-blue-600 text-white rounded-l-lg hover:bg-blue-900 transition-all duration-200">Send</span>
                                <LuSend className="h-10 w-9 px-2 flex items-center text-white justify-center rounded-r-lg bg-blue-600 hover:bg-blue-900 transition-all duration-200" />
                            </button>
                            <input type="file" name="" id="file" style={{ display: "none" }} />
                            <label htmlFor="file" className="cursor-pointer">
                                <GrGallery className="text-xl" />
                            </label>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="text-xl hover:bg-slate-300 p-1 rounded-lg transition-all duration-200">
                                <HiOutlineDotsVertical />
                            </button>
                            <button className="text-xl hover:bg-slate-300 hover:text-red-800 p-1 rounded-lg transition-all duration-200">
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
    );
};

export default EmailCompose;
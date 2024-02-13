import { useState } from "react";
import { AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
// import { CompanyLinkEmail, NavLinksEmail } from "../../../../components/NavLinksEmail";
import { BsSend } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { PiStarThin } from "react-icons/pi";
import { BiTrash } from "react-icons/bi";
import { FaAlignJustify, FaAlignLeft, FaBold, FaItalic, FaMinus, FaUnderline } from "react-icons/fa6";
import { GiCrossedSabres } from "react-icons/gi";
import { FiZapOff } from "react-icons/fi";
import { CiTextAlignCenter, CiTextAlignRight } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import NavLinksEmail from "../../../../../components/NavLinkEmail"
import CompanyLinkEmail from "./../../../../../components/CompanyLinkEmail"
const EmailLeftSite = () => {
    const [compose, setCompose] = useState(false);
    
    return (
        <div className={`text-accent rounded-l-xl shadow-2xl`}>
            {/* Desktop */}
            <div className=" w-full h-[580px] overflow-y-scroll myEmailScroll">
                {/* compose */}
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
                                <h2 className="text-lg font-medium text-accent">Compose Mail</h2>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => setCompose(!compose)}>
                                        <FaMinus className="text-2xl hover:bg-slate-300 p-1 rounded-lg" />
                                    </button>
                                    <button onClick={() => setCompose(!compose)}>
                                        <GiCrossedSabres className="text-2xl hover:bg-slate-300 hover:text-red-900 p-1 rounded-lg" />
                                    </button>
                                </div>
                            </div>
                            {/* second */}
                            <div className="grid grid-cols-6 content-center px-3 py-1 border-0 border-b border-solid border-slate-300">
                                <div className="col-span-5 flex items-center gap-1">
                                    <p className=" text-base font-medium">To: </p>
                                    <input type="text" className="w-full py-2 px-1 text-accent" />
                                </div>
                                <div className="col-span-1 pt-2 text-right gap-1">
                                    <button className="pr-2 text-blue-800 font-medium border-0 border-r border-solid border-blue-300">Cc</button>
                                    <button className="pl-2 text-blue-800 font-medium">Bcc</button>
                                </div>
                            </div>
                            {/* Three */}
                            <div className=" px-3 py-2 border-0 border-b border-solid border-slate-300">
                                <input type="text" placeholder="subject" className="placeholder:text-slate-400 placeholder:text-sm" />
                            </div>
                            {/* Four */}
                            <div className=" px-3 py-3 border-0 border-b border-solid border-slate-300">
                                <div className="flex items-center gap-3">
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
                                <textarea name="" id="" cols="30" rows="3" placeholder="write something here..." className="w-full placeholder:text-slate-400 placeholder:text-sm border-none" ></textarea>
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
                {/* email router */}
                <ul className="pt-6 space-y-4">
                    <li>
                        <NavLinksEmail path="" Icon={AiOutlineMail} linkName="Inbox" numberBg="bg-blue-100" numberText="text-blue-700" number="6" />
                    </li>
                    <li>
                        <NavLinksEmail path="" Icon={BsSend} linkName="Send" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinksEmail path="" Icon={BsSend} linkName="Send" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinksEmail path="" Icon={MdEdit} linkName="Draft" numberBg="bg-red-100" numberText="text-red-600" number="2" />
                    </li>
                    <li>
                        <NavLinksEmail path="" Icon={PiStarThin} linkName="Starred" numberBg="bg-yellow-100" numberText="text-yellow-800" number="9" />
                    </li>
                    <li>
                        <NavLinksEmail path="" Icon={BiTrash} linkName="Trash" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinksEmail path="" Icon={AiOutlineSetting} linkName="Setting" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <div className="bg-slate-200 w-full mt-9">
                            <span className="text-xs pl-4 ">LABELS</span>
                        </div>
                    </li>
                    <li>
                        <CompanyLinkEmail companyPath="" BgColor="bg-blue-700" companyName="Personal" />
                    </li>
                    <li>
                        <CompanyLinkEmail companyPath="" BgColor="bg-sky-500" companyName="Company" />
                    </li>
                    <li>
                        <CompanyLinkEmail companyPath="" BgColor="bg-orange-600" companyName="Important" />
                    </li>
                    <li>
                        <CompanyLinkEmail companyPath="" BgColor="bg-red-600" companyName="Private" />
                    </li>
                </ul>
            </div>

            {/* mobile */}
        </div>
    );
};

export default EmailLeftSite;
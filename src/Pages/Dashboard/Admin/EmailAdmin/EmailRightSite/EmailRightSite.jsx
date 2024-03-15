import { BsThreeDotsVertical } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { BiDotsVertical, BiErrorAlt, BiTrash } from "react-icons/bi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { AiFillStar, AiOutlineFolder, AiOutlineStar } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { CiShoppingTag } from "react-icons/ci";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { FaPhotoFilm, FaPrint } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import useAuth from "../../../../../api/useAuth";
import MainEmail from "./MainEmail";
import EmailImageFile from "./EmailImageFile";
import EmailUserInfo from "./EmailUserInfo";
import ModalFirstPart from "./ModalFirstPart";
import ModalSecondPart from "./ModalSecondPart";

const EmailRightSite = ({ allEmail }) => {
    const [select, setSelect] = useState(false);
    const [spin, setSpin] = useState(false);
    const [dotClick, setDotClick] = useState(false);
    const [startClick, setStartClick] = useState(false);
    const [emailClick, setEmailClick] = useState(false);


    const { user } = useAuth();
    const emailFilter = allEmail.filter(email => email?.toEmail === user?.email)

    console.log(allEmail);
    console.log("email Filter 29 => ",emailFilter);

    return (
        <div className={`h-[580px] text-accent rounded-r-xl shadow-2xl relative`}>
            {/* table icon */}
            <div className="flex items-center justify-between py-2 border-0 border-b border-solid border-slate-400 px-2">
                <button className="" onClick={() => setSelect(!select)}>
                    {
                        select ?
                            <div className="flex items-center gap-4">
                                <Tooltip id="my-tooltip" place="top" />
                                <ImCheckboxChecked />
                                <BiTrash className="text-xl border-none" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
                                <HiOutlineMail className="text-xl border-none" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                                <AiOutlineFolder className="text-xl border-none" data-tooltip-id="my-tooltip" data-tooltip-content="Folder" />
                                <CiShoppingTag className="text-2xl text-black border-none" data-tooltip-id="my-tooltip" data-tooltip-content="Label" />
                            </div>
                            :
                            <GrCheckbox className="" />
                    }

                </button>
                <div className="flex items-center gap-4 text-slate-800">
                    <button className="hover:bg-slate-200 p-2 rounded-full" onClick={() => setSpin(!spin)}>
                        {
                            spin ?
                                <TfiReload className="animate-spin" />
                                :
                                <TfiReload className="" />
                        }

                    </button>
                    <button className="relative hover:bg-slate-200 p-1 rounded-full" onClick={() => setDotClick(!dotClick)}>
                        <BsThreeDotsVertical />
                        {
                            dotClick &&
                            <div className="absolute right-4 top-6 rounded-lg bg-white">
                                <Link className="inline-block hover:text-blue-500 hover:bg-slate-200 rounded-t-lg py-1 px-2 text-sm" to="">Refresh</Link> <br />
                                <Link className="inline-block hover:text-blue-500 hover:bg-slate-200 rounded-b-lg py-1 px-3 text-sm" to="">Details</Link>

                            </div>
                        }
                    </button>
                </div>
            </div>
            {/* Main Content table */}
            <div className="overflow-y-scroll h-[380px] myEmailScroll">
                {/* first */}
                <div>
                    {/* email table */}
                    <button
                        className={` flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-100 transition-all duration-200`}>
                        <div className="flex items-center gap-2 px-2">
                            <button className="" onClick={() => setSelect(!select)}>
                                {
                                    select ?
                                        <ImCheckboxChecked />
                                        :
                                        <GrCheckbox />
                                }

                            </button>
                            <button className="text-slate-800 border-none" onClick={() => setStartClick(!startClick)}>
                                {
                                    startClick ?
                                        <AiFillStar className="text-xl text-yellow-500 border-none" />
                                        :
                                        <AiOutlineStar className="text-xl " />
                                }

                            </button>
                            {/* Show Email table */}
                           <EmailUserInfo emailClick={emailClick} setEmailClick={setEmailClick}/>
                        </div>
                        <div className="flex items-center gap-4 mx-3">
                            <Tooltip id="my-tooltip" place="top" />
                            <BiTrash className="text-xl text-red-700 border-none" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
                            <HiOutlineMail className="text-xl text-blue-500" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                            <BiErrorAlt className="text-xl text-slate-700" data-tooltip-id="my-tooltip" data-tooltip-content="Mark to spam" />
                        </div>
                    </button>
                    {
                        emailClick &&
                        <div className="absolute right-0 top-0 bottom-0 bg-slate-100 rounded-tr-xl rounded-br-xl w-full h-screen overflow-y-scroll myScroll">
                            <div className={`MAIN_ICONS_FULL_PART  py-2 px-4`}>
                                <ModalFirstPart emailClick={emailClick} setEmailClick={setEmailClick}/>
                                {/* THREE PART */}
                               <ModalSecondPart />
                            </div>
                            {/* email content */}
                            <div className={` text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
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
                                {/* main text */}
                               <MainEmail />
                               <EmailImageFile />
                            </div>
                            <div className={` text-accent mt-3 mx-4 py-3 px-3 rounded-t-lg`}>
                                <h2 className="text-sm font-medium text-gray-800"> Click here to <span className="text-blue-700 text-base cursor-pointer hover:underline">Reply</span> or <span className="text-blue-700 text-base hover:underline cursor-pointer">Forward</span></h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default EmailRightSite;
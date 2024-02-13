import { ImCheckboxChecked } from "react-icons/im";
// import useTheme from "../../Shared/useTheme";
import { GrCheckbox } from "react-icons/gr";
import { AiFillStar, AiOutlineFolder, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { BiDotsVertical, BiErrorAlt, BiTrash } from "react-icons/bi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { FaPhotoFilm, FaPrint } from "react-icons/fa6";
import { RiArrowDownSFill, RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { CiShoppingTag } from "react-icons/ci";

const EmailTable = ({ userImage, userName, userTitle32 }) => {
    const [select, setSelect] = useState(false);
    const [spin, setSpin] = useState(false);
    const [dotClick, setDotClick] = useState(false);
    const [startClick, setStartClick] = useState(false);
    const [emailClick, setEmailClick] = useState(false);
    // const { isDarkMode } = useTheme();
    return (
        // <button
        //     className={`${isDarkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-slate-200 "} flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 transition-all duration-200`}>
        //     <div className="flex items-center gap-2 px-2">
        //         <button className="" onClick={() => setSelect(!select)}>
        //             {
        //                 select ?
        //                     <ImCheckboxChecked />
        //                     :
        //                     <GrCheckbox />
        //             }

        //         </button>
        //         <button className="" onClick={() => setStartClick(!startClick)}>
        //             {
        //                 startClick ?
        //                     <AiFillStar className="text-xl text-yellow-500" />
        //                     :
        //                     <AiOutlineStar className="text-xl " />
        //             }

        //         </button>
        //         <button
        //             onClick={() => setEmailClick(!emailClick)}
        //             className="info flex items-center pl-2">
        //             <img src={userImage} alt="email" className="w-8 h-8 rounded-full" />
        //             <div className="md:flex items-center gap-3">
        //                 <h3 className="text-lg font-semibold pl-2">{userName}</h3>
        //                 <p className="text-sm">{userTitle32}</p>
        //             </div>
        //         </button>
        //     </div>
        //     <div className="flex items-center gap-4 mx-3">
        //         <Tooltip id="my-tooltip" place="top" />
        //         <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
        //         <HiOutlineMail className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
        //         <BiErrorAlt className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark to spam" />
        //     </div>
        // </button>
        <div>
            {/* email table */}
            <button
                className={`${isDarkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-slate-200 "} flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 transition-all duration-200`}>
                <div className="flex items-center gap-2 px-2">
                    <button className="" onClick={() => setSelect(!select)}>
                        {
                            select ?
                                <ImCheckboxChecked />
                                :
                                <GrCheckbox />
                        }

                    </button>
                    <button className="" onClick={() => setStartClick(!startClick)}>
                        {
                            startClick ?
                                <AiFillStar className="text-xl text-yellow-500" />
                                :
                                <AiOutlineStar className="text-xl " />
                        }

                    </button>
                    <button
                        onClick={() => setEmailClick(!emailClick)}
                        className="info flex items-center pl-2">
                        <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                        <div className="md:flex items-center gap-3">
                            <h3 className="text-lg font-semibold pl-2">Katie Brandt</h3>
                            <p className="text-sm">Bring smile discussion same boy include care.</p>
                        </div>
                    </button>
                </div>
                <div className="flex items-center gap-4 mx-3">
                    <Tooltip id="my-tooltip" place="top" />
                    <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
                    <HiOutlineMail className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                    <BiErrorAlt className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark to spam" />
                </div>
            </button>
            <EmailTable userImage={""} userName="Katie Brandt" userTitle32="Bring smile discussion same boy include care" emailClick={emailClick} setEmailClick={setEmailClick} />
            {
                emailClick &&
                <div className="absolute right-0 top-0 bottom-0 bg-slate-100 rounded-tr-xl rounded-br-xl w-full h-[470px] overflow-y-scroll myEmailScroll">
                    <div className={`MAIN_ICONS_FULL_PART ${isDarkMode ? "bg-slate-800" : "bg-white"} py-2 px-4`}>
                        <div className="grid grid-cols-3 md:grid-cols-11 py-3 border-0 border-b border-solid border-slate-300">
                            {/* first part */}
                            <div className="BACK_TITLE col-span-2 md:col-span-10 flex items-center">
                                <button onClick={() => setEmailClick(!emailClick)}>
                                    <RiArrowDownSFill className="text-2xl font-semibold" />
                                </button>
                                <h2 className="pl-3 text-sm font-semibold">Bring smile discussion same boy include care.</h2>
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
                                    <BiDotsVertical className="text-xl" />
                                </button>
                            </div>
                        </div>
                        {/* THREE PART */}
                        <div className="ICONS grid grid-cols-3 md:grid-cols-5 py-2 ">
                            <div className="col-span-2 md:col-span-4 flex items-center">
                                <div className="flex items-center gap-4 mx-3 z-10">
                                    <Tooltip id="my-tooltip" place="top" />
                                    <BiTrash className="text-xl z-10" data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
                                    <HiOutlineMailOpen className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                                    <AiOutlineFolder className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Folder" />
                                    <CiShoppingTag className="text-2xl text-black" data-tooltip-id="my-tooltip" data-tooltip-content="Label" />
                                </div>
                            </div>
                            {/* FOUR PART */}
                            <div className=" PART_BY_PART col-span-1 flex items-center">
                                <p className="text-sm font-medium">1-10 <span className="text-xs">of</span> 371</p>
                                <button className="hover:bg-slate-200 p-1 rounded-2xl transition-all duration-200">
                                    <RiArrowLeftSFill className="text-2xl" />
                                </button>
                                <button className="hover:bg-slate-200 p-1 rounded-2xl transition-all duration-200">
                                    <RiArrowRightSFill className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* email content */}
                    <div className={`${isDarkMode ? "bg-slate-800" : "bg-white"} text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
                        <div className="flex items-start justify-between py-2 px-3 border-0 border-b border-solid border-slate-300">
                            <div className="flex items-center gap-3">
                                <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                                <div>
                                    <h2 className="font-medium">Katie Brandt</h2>
                                    <p className="text-xs">james25@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <h3 className="text-sm font-medium">Nov 12, 2023</h3>
                                <button>
                                    <FaPhotoFilm className="text-lg" />
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
                        <div className="py-5 px-5 border-0 border-b border-solid border-slate-300 ">
                            <p className="text-justify">
                                Guy national course pay small per. Commercial research lose key fight marriage. Young series raise degree foot degree detail number. Crime gas real pass white. Television success east.
                                Into miss knowledge result. Seat carry tax beat line. Amount language paper machine fly. Music several common former. More mouth year site move hold. Billion material born news western late.
                            </p>
                            <p className="text-justify pt-3">
                                World them term identify. Rule southern condition thought. Article successful traditional friend. Phone financial skill theory. Change Mr experience. Everyone help structure much family. Voice general group likely.
                            </p>
                            <div className="pt-8">
                                <p className="text-base">saiful isalam </p>
                                <p className="mt-1 border-0 border-t border-solid border-slate-300 w-1/5 font-medium">
                                    Your Signature
                                </p>
                            </div>
                        </div>
                        <div className="py-4 px-5 ">
                            <p className="text-sm font-medium text-slate-400">2 Attachments</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 mt-5">
                                    <img src={''} alt="" className="object-cover w-7 h-8" />
                                    <h5 className="text-xs font-medium text-slate-700">logo.pdf</h5>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={''} alt="" className="object-cover w-7 h-8" />
                                    <h5 className="text-xs font-medium text-slate-700">performance.xls</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${isDarkMode ? "bg-slate-800" : "bg-white"} text-accent mt-3 mx-4 py-3 px-3 rounded-t-lg`}>
                        <h2 className="text-sm font-medium"> Click here to <span className="text-blue-700 text-base cursor-pointer">Reply</span> or <span className="text-blue-700 text-base cursor-pointer">Forward</span></h2>
                    </div>
                </div>
            }
        </div>
    );
};

export default EmailTable;
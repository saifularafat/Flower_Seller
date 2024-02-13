import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
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
import {  RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { FaPhotoFilm, FaPrint } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import EmailTable from "../EmailTable";

const EmailRightSite = () => {
    const [select, setSelect] = useState(false);
    const [spin, setSpin] = useState(false);
    const [dotClick, setDotClick] = useState(false);
    const [startClick, setStartClick] = useState(false);
    const [emailClick, setEmailClick] = useState(false);
    const [emailOneClick, setEmailOneClick] = useState(false);
    const [emailTwoClick, setEmailTwoClick] = useState(false);
    const [emailThreeClick, setEmailThreeClick] = useState(false);

    return (
        <div className={`h-[580px] text-accent rounded-r-xl shadow-2xl relative`}>
            {/* search section */}
            <div className="flex items-center md:py-2 py-1 px-2 border-0 border-b border-solid border-slate-300 rounded">
                <BsSearch className="md:text-xl text-base font-bold md:mx-1 mx-1" />
                <input className={`w-full`} type="text" placeholder="Search Email " />
            </div>
            {/* table icon */}
            <div className="flex items-center justify-between py-2 border-0 border-b border-solid border-slate-400 px-2">
                <button className="" onClick={() => setSelect(!select)}>
                    {
                        select ?
                            <div className="flex items-center gap-4">
                                <Tooltip id="my-tooltip" place="top" />
                                <ImCheckboxChecked />
                                <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
                                <HiOutlineMail className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                                <AiOutlineFolder className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Folder" />
                                <CiShoppingTag className="text-2xl text-black" data-tooltip-id="my-tooltip" data-tooltip-content="Label" />
                            </div>
                            :
                            <GrCheckbox className="" />
                    }

                </button>
                <div className="flex items-center gap-4 ">
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
                        className={` flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 transition-all duration-200`}>
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
                                    <p className="text-sm">Bring discussion same boy include care.</p>
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
                    {/* <EmailTable userImage={''} userName="Katie Brandt" userTitle32="Bring smile discussion same boy include care" emailClick={emailClick} setEmailClick={setEmailClick} /> */}
                    {
                        emailClick &&
                        <div className="absolute right-0 top-0 bottom-0 bg-slate-100 rounded-tr-xl rounded-br-xl w-full h-[470px] overflow-y-scroll myEmailScroll">
                            <div className={`MAIN_ICONS_FULL_PART  py-2 px-4`}>
                                <div className="grid grid-cols-3 md:grid-cols-11 py-3 border-0 border-b border-solid border-slate-300">
                                    {/* first part */}
                                    <div className="BACK_TITLE col-span-2 md:col-span-10 flex items-center">
                                        <button onClick={() => setEmailClick(!emailClick)}>
                                            <SlArrowLeft className="text-2xl font-semibold hover:bg-slate-50 p-1 rounded-2xl transition-all duration-200" />
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
                                        <div className="flex items-center gap-4 mx-3">
                                            <Tooltip id="my-tooltip" place="top" />
                                            <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
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
                            <div className={` text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
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
                            <div className={` text-accent mt-3 mx-4 py-3 px-3 rounded-t-lg`}>
                                <h2 className="text-sm font-medium"> Click here to <span className="text-blue-700 text-base cursor-pointer">Reply</span> or <span className="text-blue-700 text-base cursor-pointer">Forward</span></h2>
                            </div>
                        </div>
                    }
                </div>
                {/* second */}
                <div>
                    {/* email table */}
                    <button
                        className={` flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 transition-all duration-200`}>
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
                                onClick={() => setEmailOneClick(!emailOneClick)}
                                className="info flex items-center pl-2">
                                <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                                <div className="md:flex items-center gap-3">
                                    <h3 className="text-lg font-semibold pl-2">Tipo Sultan</h3>
                                    <p className="text-sm">Always beautiful name push miss international.</p>
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
                    {/* <EmailTable userImage={user1} userName="Katie Brandt" userTitle32="Bring smile discussion same boy include care" emailClick={emailClick} setEmailClick={setEmailClick} /> */}
                    {
                        emailOneClick &&
                        <div className="absolute right-0 top-0 bottom-0 bg-slate-100 rounded-tr-xl rounded-br-xl w-full h-[470px] overflow-y-scroll myEmailScroll">
                            <div className={`MAIN_ICONS_FULL_PARTpy-2 px-4`}>
                                <div className="grid grid-cols-3 md:grid-cols-11 py-3 border-0 border-b border-solid border-slate-300">
                                    {/* first part */}
                                    <div className="BACK_TITLE col-span-2 md:col-span-10 flex items-center">
                                        <button onClick={() => setEmailOneClick(!emailOneClick)}>
                                            <SlArrowLeft className="text-2xl font-semibold hover:bg-slate-50 p-1 rounded-2xl transition-all duration-200" />
                                        </button>
                                        <h2 className="pl-3 text-sm font-semibold">Always beautiful name push miss international.</h2>
                                        <div className="flex items-center gap-2 pl-2">
                                            <p className="text-xs bg-red-200 text-red-800 py-1 px-2 rounded-md">Important</p>
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
                                        <div className="flex items-center gap-4 mx-3">
                                            <Tooltip id="my-tooltip" place="top" />
                                            <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
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
                            <div className={` text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
                                <div className="flex items-start justify-between py-2 px-3 border-0 border-b border-solid border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <img src={user2} alt="user image" className="w-8 h-8 rounded-full" />
                                        <div>
                                            <h2 className="font-medium">Tipo Sultan</h2>
                                            <p className="text-xs">tiposultan@123.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-sm font-medium">Nov 09, 2023</h3>
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
                                        Skin if open line speak wish. Ten size their happen trial. Will third prevent.
                                        Popular wall indeed memory cause generation under age. Less one pressure guy song. Upon theory item science speak mission. After read plan official good week yet show.
                                    </p>
                                    <p className="text-justify pt-3">
                                        Author of exist no bag exactly. To impact since. Argue market strategy evidence start business movie.
                                        Million fire crime magazine mention. Deep figure full Mr. Take response four serve law. Forward late part.
                                    </p>
                                    <div className="pt-8">
                                        <p className="text-base">Tipo Sultan</p>
                                        <p className="mt-1 border-0 border-t border-solid border-slate-300 w-1/5 font-medium">
                                            Your Signature
                                        </p>
                                    </div>
                                </div>
                                <div className="py-4 px-5 ">
                                    <p className="text-sm font-medium text-slate-400">2 Attachments</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mt-5">
                                            <img src={pdf} alt="" className="object-cover w-7 h-8" />
                                            <h5 className="text-xs font-medium text-slate-700">logo.pdf</h5>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src={pdfImg} alt="" className="object-cover w-7 h-8" />
                                            <h5 className="text-xs font-medium text-slate-700">performance.xls</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={` text-accent mt-3 mx-4 py-3 px-3 rounded-t-lg`}>
                                <h2 className="text-sm font-medium"> Click here to <span className="text-blue-700 text-base cursor-pointer">Reply</span> or <span className="text-blue-700 text-base cursor-pointer">Forward</span></h2>
                            </div>
                        </div>
                    }
                </div>
                {/* Three */}
                <div>
                    {/* email table */}
                    <button
                        className={` flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 transition-all duration-200`}>
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
                                onClick={() => setEmailTwoClick(!emailTwoClick)}
                                className="info flex items-center pl-2">
                                <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                                <div className="md:flex items-center gap-3">
                                    <h3 className="text-lg font-semibold pl-2">Jennifer Garcia</h3>
                                    <p className="text-sm">Simply idea project health both after.</p>
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
                    {
                        emailTwoClick &&
                        <div className="absolute right-0 top-0 bottom-0 bg-slate-200 rounded-tr-xl rounded-br-xl w-full h-[470px] overflow-y-scroll myEmailScroll">
                            <div className={`MAIN_ICONS_FULL_PART  py-2 px-4`}>
                                <div className="grid grid-cols-3 md:grid-cols-11 py-3 border-0 border-b border-solid border-slate-300">
                                    {/* first part */}
                                    <div className="BACK_TITLE col-span-2 md:col-span-10 flex items-center">
                                        <button onClick={() => setEmailTwoClick(!emailTwoClick)}>
                                            <SlArrowLeft className="text-2xl font-semibold hover:bg-slate-50 p-1 rounded-2xl transition-all duration-200" />
                                        </button>
                                        <h2 className="pl-3 text-sm font-semibold">Simply idea project health prevent beyond both after.</h2>
                                        <div className="flex items-center gap-2 pl-2">
                                            <p className="text-xs bg-blue-200 text-blue-800 py-1 px-2 rounded-md">Personal</p>
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
                                        <div className="flex items-center gap-4 mx-3">
                                            <Tooltip id="my-tooltip" place="top" />
                                            <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
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
                            <div className={` text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
                                <div className="flex items-start justify-between py-2 px-3 border-0 border-b border-solid border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                                        <div>
                                            <h2 className="font-medium">Jennifer Garcia</h2>
                                            <p className="text-xs">jennifer@yahoo.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-sm font-medium">Nov 11, 2023</h3>
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
                                        Second again well doctor because election necessary point. Campaign about from western themselves particular loss popular. During garden star couple water simply area.
                                    </p>
                                    <p className="text-justify pt-3">
                                        Likely market physical heavy quite we. Recent how room page sit fast Congress fight. Interview establish watch water. Loss family picture mind consumer about PM. Safe natural size. Character recognize painting movie.                                </p>
                                    <div className="pt-8">
                                        <p className="text-base">Jennifer Garcia</p>
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
                            <div className={` text-accent mt-3 mx-4 py-3 px-3 rounded-t-lg`}>
                                <h2 className="text-sm font-medium"> Click here to <span className="text-blue-700 text-base cursor-pointer">Reply</span> or <span className="text-blue-700 text-base cursor-pointer">Forward</span></h2>
                            </div>
                        </div>
                    }
                </div>
                {/* Four */}
                <div>
                    {/* email table */}
                    <button
                        className={` flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 transition-all duration-200`}>
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
                                onClick={() => setEmailThreeClick(!emailThreeClick)}
                                className="info flex items-center pl-2">
                                <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                                <div className="md:flex items-center gap-3">
                                    <h3 className="text-lg font-semibold pl-2">Lindsey Melton</h3>
                                    <p className="text-sm">Amount collection marriage price.</p>
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
                    {
                        emailThreeClick &&
                        <div className="absolute right-0 top-0 bottom-0 bg-slate-200 rounded-tr-xl rounded-br-xl w-full h-[470px] overflow-y-scroll myEmailScroll">
                            <div className={`MAIN_ICONS_FULL_PART  py-2 px-4`}>
                                <div className="grid grid-cols-3 md:grid-cols-11 py-3 border-0 border-b border-solid border-slate-300">
                                    {/* first part */}
                                    <div className="BACK_TITLE col-span-2 md:col-span-10 flex items-center">
                                        <button onClick={() => setEmailThreeClick(!emailThreeClick)}>
                                            <SlArrowLeft className="text-2xl font-semibold hover:bg-slate-50 p-1 rounded-2xl transition-all duration-200" />
                                        </button>
                                        <h2 className="pl-3 text-sm font-semibold">Amount collection marriage price.</h2>
                                        <div className="flex items-center gap-2 pl-2">
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
                                        <div className="flex items-center gap-4 mx-3">
                                            <Tooltip id="my-tooltip" place="top" />
                                            <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
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
                            <div className={` text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
                                <div className="flex items-start justify-between py-2 px-3 border-0 border-b border-solid border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
                                        <div>
                                            <h2 className="font-medium">Lindsey Melton</h2>
                                            <p className="text-xs">tolson@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-sm font-medium">Nov 03, 2023</h3>
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
                                        Join list dog rate doctor surface share. Meeting beat particular sing apply space. Clear down thought magazine meet. Would better sport wide personal matter. Analysis effort school officer such. Age blue future her start marriage.
                                    </p>
                                    <p className="text-justify pt-3">
                                        Accept wall price hair garden staff. Enough off rest. Beyond half small lay agency. Option in hand charge direction least message. Safe minute situation just floor. Guess month than already.                                        </p>
                                    <div className="pt-8">
                                        <p className="text-base">Lindsey Melton</p>
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
                            <div className={` text-accent mt-3 mx-4 py-3 px-3 rounded-t-lg`}>
                                <h2 className="text-sm font-medium"> Click here to <span className="text-blue-700 text-base cursor-pointer">Reply</span> or <span className="text-blue-700 text-base cursor-pointer">Forward</span></h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default EmailRightSite;
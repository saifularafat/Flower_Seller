import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { useState } from "react";
import { BiErrorAlt, BiTrash } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import EmailUserInfo from "./EmailUserInfo";
import ModalFirstPart from "./ModalFirstPart";
import ModalSecondPart from "./ModalSecondPart";
import EmailTopTableIcon from "./EmailTopTableIcon";
import ModalMainEmailShow from "./ModalMainEmailShow";

const EmailRightSite = ({ allEmail }) => {
    const [select, setSelect] = useState(false);
    const [spin, setSpin] = useState(false);
    const [dotClick, setDotClick] = useState(false);
    const [startClick, setStartClick] = useState(false);
    const [emailClick, setEmailClick] = useState(false);

    console.log("..............>", allEmail);

    return (
        <div className={`h-[580px] text-accent rounded-r-xl shadow-2xl relative`}>
            {/* table icon */}
            <EmailTopTableIcon
                select={select}
                setSelect={setSelect}
                spin={spin}
                setSpin={setSpin}
                dotClick={dotClick}
            />
            {/* Main Content table */}
            <div className="overflow-y-scroll h-[380px] myEmailScroll">
                {/* first */}
                <div>
                    {/* email table */}
                    {
                        allEmail.map(email =>
                            <button key={email?._id}
                                className={`flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-100 transition-all duration-200`}>
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
                                    <EmailUserInfo email={email} />
                                </div>
                                <div className="flex items-center gap-4 mx-3">
                                    <Tooltip id="my-tooltip" place="top" />
                                    <BiTrash className="text-xl text-red-700 border-none" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
                                    <HiOutlineMail className="text-xl text-blue-500" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                                    <BiErrorAlt className="text-xl text-slate-700" data-tooltip-id="my-tooltip" data-tooltip-content="Mark to spam" />
                                </div>
                            </button>
                        )
                    }
                    {
                        emailClick &&
                        <div className="absolute right-0 top-0 bottom-0 bg-slate-100 rounded-tr-xl rounded-br-xl w-full h-screen overflow-y-scroll myScroll">
                            <div className={`MAIN_ICONS_FULL_PART  py-2 px-4`}>
                                <ModalFirstPart emailClick={emailClick} setEmailClick={setEmailClick} allEmail={allEmail} />
                                {/* THREE PART */}
                                <ModalSecondPart allEmail={allEmail} />
                            </div>
                            {/* email content */}
                            <div className={` text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
                                <ModalMainEmailShow startClick={startClick} setStartClick={setStartClick} allEmail={allEmail} />

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
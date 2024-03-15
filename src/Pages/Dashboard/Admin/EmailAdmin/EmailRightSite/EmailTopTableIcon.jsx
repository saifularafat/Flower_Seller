import { AiOutlineFolder } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiShoppingTag } from "react-icons/ci";
import { GrCheckbox } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { ImCheckboxChecked } from "react-icons/im";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const EmailTopTableIcon = ({ select, setSelect, spin, setSpin, dotClick }) => {
    return (
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
    );
};

export default EmailTopTableIcon;
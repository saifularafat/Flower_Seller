import { AiOutlineFolder } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const ModalSecondPart = () => {
    return (
        <>
            <div className="ICONS grid grid-cols-3 md:grid-cols-5 py-2 ">
                <div className="col-span-2 md:col-span-4 flex items-center">
                    <div className="flex items-center gap-4 mx-3">
                        <Tooltip id="my-tooltip" place="top" />
                        <BiTrash className="text-xl text-red-700 outline-none" data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
                        <HiOutlineMailOpen className="text-xl text-blue-700 outline-none" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                        <AiOutlineFolder className="text-xl text-green-700 outline-none" data-tooltip-id="my-tooltip" data-tooltip-content="Folder" />
                        <CiShoppingTag className="text-2xl text-slate-950 outline-none" data-tooltip-id="my-tooltip" data-tooltip-content="Label" />
                    </div>
                </div>
                {/* FOUR PART */}
                <div className=" PART_BY_PART col-span-1 flex items-center text-slate-700">
                    <p className="text-sm font-medium">1-10 <span className="text-xs">of</span> 371</p>
                    <button className="hover:bg-slate-200 p-1 rounded-2xl transition-all duration-200">
                        <RiArrowLeftSFill className="text-2xl" />
                    </button>
                    <button className="hover:bg-slate-200 p-1 rounded-2xl transition-all duration-200">
                        <RiArrowRightSFill className="text-2xl" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalSecondPart;
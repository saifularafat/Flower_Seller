import { AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { PiStarThin } from "react-icons/pi";
import { BiTrash } from "react-icons/bi";
import NavLinksEmail from "../../../../../components/NavLinkEmail"
import CompanyLinkEmail from "./../../../../../components/CompanyLinkEmail"
import EmailCompose from "./EmailCompose";
const EmailLeftSite = () => {

    return (
        <div className={`text-accent rounded-l-xl shadow-2xl`}>
            {/* Desktop */}
            <div className=" w-full h-[580px] overflow-y-scroll myScroll">
                {/* compose */}
                <EmailCompose />
                {/* email router */}
                <ul className="pt-6 space-y-4">
                    <li>
                        <NavLinksEmail path="" Icon={AiOutlineMail} linkName="Inbox" numberBg="bg-blue-200" numberText="text-blue-700" number="6" />
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
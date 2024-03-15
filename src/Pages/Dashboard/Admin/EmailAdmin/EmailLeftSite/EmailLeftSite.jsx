import { AiOutlineMail } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { PiStarThin } from "react-icons/pi";
import { BiErrorAlt, BiTrash } from "react-icons/bi";
import NavLinksEmail from "../../../../../components/NavLinkEmail"
import CompanyLinkEmail from "./../../../../../components/CompanyLinkEmail"
import EmailCompose from "./EmailCompose";
import useAdmin from "../../../../../api/useAdmin";

const EmailLeftSite = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className={`text-accent rounded-l-xl shadow-2xl`}>
            {/* Desktop */}
            <div className=" w-full h-[580px] overflow-y-scroll myScroll">
                {/* compose */}
                <EmailCompose />
                {/* email router */}
                <ul className="pt-6 space-y-4">
                    <li>
                        <NavLinksEmail path="/dashboard/email/index" Icon={AiOutlineMail} linkName="Inbox" numberBg="bg-blue-200" numberText="text-blue-700" number="6" />
                    </li>
                    <li>
                        <NavLinksEmail path="/dashboard/email/send" Icon={BsSend} linkName="Send" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinksEmail path="/dashboard/email/draft" Icon={MdEdit} linkName="Draft" numberBg="bg-red-100" numberText="text-red-600" number="2" />
                    </li>
                    <li>
                        <NavLinksEmail path="/dashboard/email/starred" Icon={PiStarThin} linkName="Starred" numberBg="bg-yellow-100" numberText="text-yellow-800" number="9" />
                    </li>
                    <li>
                        <NavLinksEmail path="/dashboard/email/spam" Icon={BiErrorAlt} linkName="Spam" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinksEmail path="/dashboard/email/trash" Icon={BiTrash} linkName="Trash" numberBg="" numberText="" number="" />
                    </li>
                    {
                        isAdmin &&
                        <>
                            <li>
                                <div className="bg-slate-200 w-full mt-9">
                                    <span className="text-xs pl-4 ">LABELS</span>
                                </div>
                            </li>
                            <li>
                                <CompanyLinkEmail companyPath="/dashboard/email/personal-email" BgColor="bg-blue-700" companyName="Personal" />
                            </li>
                            <li>
                                <CompanyLinkEmail companyPath="/dashboard/email/company-email" BgColor="bg-sky-500" companyName="Company" />
                            </li>
                            <li>
                                <CompanyLinkEmail companyPath="/dashboard/email/important-email" BgColor="bg-orange-600" companyName="Important" />
                            </li>
                            <li>
                                <CompanyLinkEmail companyPath="/dashboard/email/private-email" BgColor="bg-red-600" companyName="Private" />
                            </li>
                        </>
                    }
                </ul>
            </div>

            {/* mobile */}
        </div>
    );
};

export default EmailLeftSite;
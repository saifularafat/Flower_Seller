import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoAddCircleSharp, IoChatboxEllipses, IoLogoPaypal } from "react-icons/io5";
import { GoDot } from "react-icons/go";
import { GiFlowerEmblem } from "react-icons/gi";
import { ImProfile } from "react-icons/im";

const IsAdmin = () => {
    const [order, handelOrder] = useState(false);
    const [offer, handelOffer] = useState(false);
    return (
        <div>
            <ul className="space-y-0">
                <li>
                    <NavLink
                        to="/dashboard/adminHome"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <FaHome className="md:text-xl text-sm" />
                        <span>Admin Home </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/addItem"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <IoAddCircleSharp className="md:text-xl text-sm" />
                        <span>Add Item </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/allUsers"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <FaUsers className="text-xl" />
                        <span>All Users </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/totalFlowerItems"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <GiFlowerEmblem className="text-xl" />
                        <span className="md:block hidden">Total Flowers  </span>
                        <span className="block md:hidden">T. Flowers  </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/allPayment"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <IoLogoPaypal className="text-xl" />
                        <span>All Payment </span>
                    </NavLink>
                </li>

                {/* order link start */}
                <div className="pb-2">
                    <button onClick={() => handelOrder(!order)} className="flex items-center justify-between w-full md:text-base text-[10px] font-medium py-1 md:pl-2 px-1 hover:bg-slate-100 rounded bg-slate-100 text-slate-600 uppercase transition-all duration-200 md:mt-3 mt-2">
                        <span className="md:block hidden">Order information</span>
                        <span className="md:hidden block">Order info</span>
                        {
                            order ?
                                <BsChevronDown />
                                : <BsChevronUp />
                        }
                    </button>
                </div>
                {
                    order && <div className="space-y-2 pl-2">
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/totalPayment"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Total Payment </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/sslPayment"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>SSL Payment </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/stripePayment"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Stripe Pay </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/cashOnDelivery"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Cash On Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/successOrder"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Success Order</span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/retuneOrder"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Retune Order</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/orderCancel"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Order Cancel</span>
                            </NavLink>
                        </li>
                    </div>
                }
                {/* order link end */}

                {/* offer link start */}
                <div className="pb-2">
                    <button onClick={() => handelOffer(!offer)} className="flex items-center justify-between w-full md:text-base text-[10px] font-medium py-1 md:pl-2 px-1 hover:bg-slate-100 rounded bg-slate-100 text-slate-600 uppercase transition-all duration-200 md:mt-3 mt-2">
                        <span className="md:block hidden">Offer & Change Section</span>
                        <span className="block md:hidden">Offer Change </span>
                        {
                            offer ?
                                <BsChevronDown />
                                : <BsChevronUp />
                        }
                    </button>
                </div>
                {
                    offer && <div className="space-y-2 md:pl-2 pl-[2px] pt-2">
                        <li className="w-full">
                            <NavLink
                                to="/dashboard/bestOffer"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span>Best Offer </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/sliderChanges"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span className="md:block hidden">Slider Changes </span>
                                <span className="block md:hidden">S. Changes  </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/bannerChanges" //section banner change korar jonno kora hoice
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span className="md:block hidden">Banner Change  </span>
                                <span className="block md:hidden">B. Changes  </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/leftRightBanner" //section banner ar shathe je banner ashe shegula  change korar jonno kora hoice
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <GoDot className="text-xl" />
                                <span className="md:block hidden">left&Right B. </span>
                                <span className="block md:hidden">left&RightB. </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/footerChange"
                                className={({ isActive }) => (isActive ? "active" : " default")}>
                                <GoDot className="text-xl" />
                                <span className="md:block hidden">Footer Changes  </span>
                                <span className="block md:hidden">F. Changes </span>
                            </NavLink>
                        </li>
                    </div>
                }
                {/* offer link end */}

                {/* messages section start */}
                <p className="pt-1"></p>
                <p className="md:py-2 py-1 mt-1 md:pl-3 px-1 text-slate-600 font-semibold md:text-base text-xs uppercase rounded-md bg-slate-100">Help section</p>
                <p className="pt-1"></p>
                <li>
                    <NavLink
                        to="/dashboard/email"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                            <MdEmail />
                        <span>Email </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/chat"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                            <IoChatboxEllipses />
                        <span>Chat </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/calender"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                            <FaCalendarAlt />
                        <span>Calender </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/adminProfile"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                            <ImProfile />
                        <span>Profile </span>
                    </NavLink>
                </li>
                {/* messages section end */}
            </ul>
        </div>
    );
};

export default IsAdmin;
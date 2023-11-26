import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="border-0 md:border-y border-slate-300 py-2">
            <ul className="md:flex items-center gap-7 md:mx-4 mx-2">
                <li>
                    <NavLink
                    to="thanksgiving-flower"
                    className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        Thanksgiving
                    </NavLink>
                </li>
                <li>
                   <NavLink
                   to="birthday-flower"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        Birthday
                    </NavLink>
                </li>
                <li>
                   <NavLink 
                   to="independenceday-flower"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        IndependenceDay
                    </NavLink>
                </li>
                <li>
                   <NavLink 
                   to="disney-flower"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                    DISNEY
                    </NavLink>
                </li>
                <li>
                   <NavLink
                   to="occasions-flower"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        occasions
                    </NavLink>
                </li>
                <li>
                   <NavLink 
                   to="sympathy-flower"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        Sympathy
                    </NavLink>
                </li>
                <li>
                   <NavLink 
                   to="flowers-6t9"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        Flowers
                    </NavLink>
                </li>
                <li>
                   <NavLink
                   to="flower-plants"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        plants
                    </NavLink>
                </li>
                <li>
                   <NavLink 
                   to="gift-flower"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        Gifts & More
                    </NavLink>
                </li>
                <li>
                   <NavLink 
                   to="flower-sale"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        sale
                    </NavLink>
                </li>
                <li>
                   <NavLink 
                   to="community"
                   className={"text-base font-medium uppercase hover:border-0 hover:border-b-2 hover:border-slate-950 pb-2 px-1"}> 
                        Community
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
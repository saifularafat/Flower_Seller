import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="md:block hidden border-0 md:border-y border-slate-300 py-2 bg-white sticky top-0 z-40">
            <ul className="md:flex items-center gap-7 md:mx-4 mx-2">
                <li>
                    <NavLink
                        to="thanksgiving-flower"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Thanksgiving
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="birthday-flower"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Birthday
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="independenceday-flower"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        IndependenceDay
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="disney-flower"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        DISNEY
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="occasions-flower"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        occasions
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="sympathy-flower"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Sympathy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="flowers-6t9"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Flowers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="flower-plants"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        plants
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="gift-more-flower"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Gifts & More
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="flower-sale"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        sale
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="community"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Community
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
import {  NavLink } from "react-router-dom";

const NavLinkEmail = ({ path, Icon, linkName, numberBg, numberText, number }) => {
    
    return (
        <NavLink to={path}
        className={({ isActive }) => (isActive ? 'defaultEmail' : 'activeEmail')}
        >
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon className="text-lg" />
                    <span className="text-base font-semibold">{linkName}</span>
                </div>
                <div className={`${numberBg} w-5 h-5 relative rounded-full mr-4`}>
                    <span className={`${numberText} text-sm  absolute left-1 `}>{number}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default NavLinkEmail;
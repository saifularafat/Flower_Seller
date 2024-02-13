import { NavLink } from "react-router-dom";

const CompanyLinkEmail =  ({ companyPath,BgColor, companyName}) => {
    
    return (
        <NavLink to={companyPath}
            className={({ isActive }) => (isActive ? 'active' : ' default')}
        >
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <span className={`${BgColor} w-3 h-3 rounded-full`}></span>
                    <span className="text-base font-semibold">{companyName}</span>
                </div>
            </div>
        </NavLink>
    )
};

export default CompanyLinkEmail
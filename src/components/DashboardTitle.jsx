
const DashboardTitle = ({ borderColor, borderStyle, borderWidth, Icon, textColor, title }) => {
    return (
        <div className={`flex items-center gap-2 text-left md:py-3 py-1 border-0 md:border-b-2 border-b-[2px] ${borderColor} ${borderStyle} rounded ${borderWidth}`}>
            <Icon className={`md:text-3xl text-2xl ${textColor}`} />
            <h2 className="md:text-2xl text-base font-medium font-sans uppercase">{title}</h2>
        </div>
    );
};

export default DashboardTitle;
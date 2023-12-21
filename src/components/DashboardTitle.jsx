
const DashboardTitle = ({ borderColor, borderStyle, borderWidth, Icon, textColor, title }) => {
    return (
        <div className={`flex items-center gap-2 text-left py-3 border-0 border-b-2 ${borderColor} ${borderStyle} rounded ${borderWidth}`}>
            <Icon className={`text-3xl ${textColor}`} />
            <h2 className="md:text-2xl text-lg font-medium font-sans uppercase">{title}</h2>
        </div>
    );
};

export default DashboardTitle;

const DashboardTitle = ({ borderColor, borderStyle, borderWidth, borderBG, title }) => {
    return (
        <div className={`flex items-center gap-2 text-left py-3 border-0 border-b-2 ${borderColor} ${borderStyle} rounded ${borderWidth}`}>
            <span className={`${borderBG} p-2 rounded-lr-lg rounded-tr-xl`}></span>
            <h2 className="text-2xl font-medium font-sans uppercase">{title}</h2>
        </div>
    );
};

export default DashboardTitle;

const SectionTitle = ({color, title, textSize}) => {
    return (
        <div className="text-center">
            <h2 className={`${color} md:text-4xl font-bold ${textSize} capitalize`}>{title}</h2>
        </div>
    );
};

export default SectionTitle;
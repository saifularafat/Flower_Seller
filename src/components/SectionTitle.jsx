
const SectionTitle = ({color, title}) => {
    return (
        <div className="text-center">
            <h2 className={`${color} md:text-4xl md:font-bold text-xl font-semibold capitalize`}>{title}</h2>
        </div>
    );
};

export default SectionTitle;
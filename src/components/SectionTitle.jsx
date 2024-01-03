
const SectionTitle = ({color, title}) => {
    return (
        <div className="text-center">
            <h2 className={`${color} md:text-4xl font-bold text-xl capitalize`}>{title}</h2>
        </div>
    );
};

export default SectionTitle;
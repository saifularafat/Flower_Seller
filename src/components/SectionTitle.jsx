
const SectionTitle = ({color, title}) => {
    return (
        <div className="text-center">
            <h2 className={`${color} text-3xl font-bold capitalize`}>{title}</h2>
        </div>
    );
};

export default SectionTitle;
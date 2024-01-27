const DataLoading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="md:w-12 md:h-12 w-9 h-9 flex gap-2 items-center justify-center">
                <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-500"></div>
                <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-red-600"></div>
                <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-700"></div>
            </div>
        </div>
    );
};

export default DataLoading;
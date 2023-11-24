
const BannerContent = () => {
    return (
        <div className="relative bg-gradient-to-tr from-[#A99C79] to-[#D3CCBE] w-full md:h-[320px]">
            <div className="absolute md:translate-y-3/4 md:translate-x-2/4">
                <h2 className="md:text-4xl text-lg md:font-semibold text-[#7c7764]">Here's To The Gestures </h2>
                <h2 className="md:text-4xl text-lg md:font-semibold text-[#7c7764] pb-3">That Bring Us Together</h2>
                <div className="bg-[#7a7150] md:w-3/5 mx-auto text-center rounded-lg">
                    <button className="uppercase md:py-2 py-1 text-[#fff7d6] md:text-base text-xs text-center md:font-semibold font-medium rounded-md">Shop Thanksgiving</button>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;
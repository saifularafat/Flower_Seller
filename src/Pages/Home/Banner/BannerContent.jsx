
const BannerContent = () => {
    return (
        <div className="relative bg-gradient-to-tr from-[#A99C79] to-[#D3CCBE] w-full md:h-[320px]">
            <div className=" absolute translate-y-3/4 translate-x-2/4">
                <h2 className="text-4xl font-semibold text-[#7c7764]">Here's To The Gestures </h2>
                <h2 className="text-4xl font-semibold text-[#7c7764] pb-3">That Bring Us Together</h2>
                <div className="bg-[#7a7150] w-3/5 mx-auto text-center rounded-lg">
                    <button className="uppercase py-2 text-[#fff7d6] text-base text-center font-semibold rounded-md">Shop Thanksgiving</button>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;
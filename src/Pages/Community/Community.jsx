import PagesPath from "../../components/PagesPath";
import banner from "../../assets/banner/communities-hero.webp"

const Community = () => {
    return (
        <div>
            <PagesPath path="/community" name="Community" title="Flower Community" />
            <div className="text-center">
                {/* Celebrations Community */}
                <h3 className="text-2xl md:text-4xl font-semibold">Celebrations Community</h3>
                <div className="pt-1 md:block hidden">
                    <p>Building meaningful relationships is at the heart of everything we do. From
                    </p>
                    <span>engaging</span>
                    <p>workshops to inspiring stories, it’s never been easier to reach out.</p>
                </div>
                <p className="md:hidden">Building meaningful relationships is at the heart of everything we do. From engaging
                    workshops to inspiring stories, it’s never been easier to reach out.
                </p>
            </div>
            <div className="py-5 relative">
                <img src={banner} alt="" />
                <div className="absolute top-[30%] left-[20%] ">
                    <div>
                        <span className="text-sm md:text-3xl font-serif leading-4 font-semibold text-center text-white">Make Every Birthday</span>
                    </div>
                    <div>
                        <span className="text-sm md:text-3xl font-serif leading-4 font-semibold text-center text-white">Special With a Free</span>
                    </div>
                    <div>
                        <span className="text-sm md:text-3xl font-serif leading-4 font-semibold text-center text-white">Group Video Montage!</span>
                    </div>
                    <div className="text-sm font-normal text-white pt-3">
                        <p>We've teamed up with Tribute.co to extend this free offer</p>
                        <p>exclusively for 1-800-Flowers & Family of Brands Customers!</p>
                    </div>
                    <div className="pt-3">
                        <button className="text-slate-800 bg-slate-50 rounded-lg md:py-2 py-1 px-3 md:px-6 md:text-base text-sm md:font-bold font-medium font-sans-">
                            START A TRIBUTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
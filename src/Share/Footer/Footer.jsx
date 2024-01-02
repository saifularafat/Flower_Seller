import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import footerChange from "../../api/useFooterGet";

const Footer = () => {
    const [footerGet] = footerChange();
    const wayToShops = footerGet.find(footer => footer.category === "wayToShop");
    const customService = footerGet.find(footer => footer.category === "customServer");
    const ourStores = footerGet.find(footer => footer.category === "ourStores");
    const corporate = footerGet.find(footer => footer.category === "corporate");
    console.log(corporate);
    return (
        <div className="py-6 bg-slate-500">
            <div className="grid grid-cols-2 text-white md:grid-cols-5 gap-5 w-11/12 mx-auto border-0 border-b border-slate-300 pb-5">
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">More {wayToShops?.wayToShop}</h2>
                    <div className="space-y-1">
                        <Link to={wayToShops?.ftUrl1} className="text-sm hover:underline block">{wayToShops?.ftName1}</Link>
                        <Link to={wayToShops?.ftUrl2} className="text-sm hover:underline block">{wayToShops?.ftName2}</Link>
                        <Link to={wayToShops?.ftUrl3} className="text-sm hover:underline block">{wayToShops?.ftName3}</Link>
                        <Link to={wayToShops?.ftUrl4} className="text-sm hover:underline block">{wayToShops?.ftName4}</Link>
                        <Link to={wayToShops?.ftUrl5} className="text-sm hover:underline block">{wayToShops?.ftName5}</Link>
                        <Link to={wayToShops?.ftUrl6} className="text-sm hover:underline block">{wayToShops?.ftName6}</Link>
                        <Link to={wayToShops?.ftUrl7} className="text-sm hover:underline block">{wayToShops?.ftName7}</Link>
                        <Link to={wayToShops?.ftUrl8} className="text-sm hover:underline block">{wayToShops?.ftName8}</Link>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">{customService?.customService}</h2>
                    <div className="space-y-1">
                    <Link to={customService?.ftUrl1} className="text-sm hover:underline block">{customService?.ftName1}</Link>
                    <Link to={customService?.ftUrl2} className="text-sm hover:underline block">{customService?.ftName2}</Link>
                    <Link to={customService?.ftUrl3} className="text-sm hover:underline block">{customService?.ftName3}</Link>
                    <Link to={customService?.ftUrl4} className="text-sm hover:underline block">{customService?.ftName4}</Link>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">{ourStores?.ourStores}</h2>
                    <div className="space-y-1">
                    <Link to={ourStores?.ftUrl1} className="text-sm hover:underline block">{ourStores?.ftName1}</Link>
                    <Link to={ourStores?.ftUrl2} className="text-sm hover:underline block">{ourStores?.ftName2}</Link>
                    <Link to={ourStores?.ftUrl3} className="text-sm hover:underline block">{ourStores?.ftName3}</Link>
                    <Link to={ourStores?.ftUrl4} className="text-sm hover:underline block">{ourStores?.ftName4}</Link>
                        <Link to="" className="text-sm hover:underline block">Login</Link>
                        <Link to="" className="text-sm hover:underline block">Register</Link>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">{corporate?.corporate}</h2>
                    <div className="space-y-1">
                    <Link to={corporate?.ftUrl1} className="text-sm hover:underline block">{corporate?.ftName1}</Link>
                    <Link to={corporate?.ftUrl2} className="text-sm hover:underline block">{corporate?.ftName2}</Link>
                    <Link to={corporate?.ftUrl3} className="text-sm hover:underline block">{corporate?.ftName3}</Link>
                    <Link to={corporate?.ftUrl4} className="text-sm hover:underline block">{corporate?.ftName4}</Link>
                    <Link to={corporate?.ftUrl5} className="text-sm hover:underline block">{corporate?.ftName5}</Link>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">Follow us</h2>
                    <div className=" grid md:grid-cols-4 grid-cols-3 gap-3">
                        <Link to="" className="bg-green-500 w-10 h-10 rounded-lg"><FaFacebookF className="translate-x-1/2 translate-y-1/2 text-xl" /></Link>
                        <Link to="" className="bg-orange-800 w-10 h-10 rounded-lg"><FaInstagram className="translate-x-1/3 translate-y-1/3 text-2xl" /></Link>
                        <Link to="" className="bg-black w-10 h-10 rounded-lg"><FaXTwitter className="translate-x-1/2 translate-y-1/2 text-xl" /></Link>
                        <Link to="" className="bg-red-800 w-10 h-10 rounded-lg"><FaPinterestP className="translate-x-1/2 translate-y-1/2 text-xl" /></Link>
                        <Link to="" className="bg-red-800 w-10 h-10 rounded-lg"><FaYoutube className="translate-x-1/2 translate-y-1/2 text-xl" /></Link>
                    </div>
                    <div className="mt-5 flex items-center">
                        <input type="text" placeholder="search your flower?" className="py-2 pl-2 rounded-l-lg outline-none text-slate-900 text-base" />
                        <input type="submit" value="Submit" className="bg-blue-900 p-2 rounded-r-lg" />
                    </div>
                </div>
            </div>
            <div className="">
                <p className="text-center pt-3 text-white">{corporate?.footerSocket} <Link to={corporate?.developerURL} className="hover:text-blue-900 hover:underline font-semibold tracking-wider transition-all duration-200" >Saiful Islam</Link></p>
            </div>
        </div>
    );
};

export default Footer;
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="py-6 bg-slate-500">
            <div className="grid grid-cols-2 text-white md:grid-cols-5 gap-5 w-11/12 mx-auto border-0 border-b border-slate-300 pb-5">
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">More ways to shop</h2>
                    <div className="space-y-1">
                        <Link to="" className="text-sm hover:underline block">Flower Delivery Same-Day</Link>
                        <Link to="" className="text-sm hover:underline block">Flowers Arrangements</Link>
                        <Link to="" className="text-sm hover:underline block">Sympathy Flowers & Gifts</Link>
                        <Link to="" className="text-sm hover:underline block">Roses</Link>
                        <Link to="" className="text-sm hover:underline block">Chocolate Covered</Link>
                        <Link to="" className="text-sm hover:underline block">New Year's Flowers</Link>
                        <Link to="" className="text-sm hover:underline block">Birthday Flowers & Gifts</Link>
                        <Link to="" className="text-sm hover:underline block">Marketplace Sellers</Link>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">Customer Service</h2>
                    <div className="space-y-1">
                        <Link to="" className="text-sm hover:underline block">Customer Service</Link>
                        <Link to="" className="text-sm hover:underline block">Contact us</Link>
                        <Link to="" className="text-sm hover:underline block">Gift Cards</Link>
                        <Link to="" className="text-sm hover:underline block">Home Delivery</Link>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">Our Stores</h2>
                    <div className="space-y-1">
                        <Link to="" className="text-sm hover:underline block">Local Store</Link>
                        <Link to="" className="text-sm hover:underline block">Your Location</Link>
                        <Link to="" className="text-sm hover:underline block">Local Event</Link>
                        <Link to="" className="text-sm hover:underline block">Roses</Link>
                        <h3 className="md:text-lg font-bold py-1 uppercase">Account Login</h3>
                        <Link to="" className="text-sm hover:underline block">Login</Link>
                        <Link to="" className="text-sm hover:underline block">Register</Link>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-lg font-bold pb-2 uppercase">Corporate</h2>
                    <div className="space-y-1">
                        <Link to="" className="text-sm hover:underline block">About us</Link>
                        <Link to="" className="text-sm hover:underline block">Our Brands</Link>
                        <Link to="" className="text-sm hover:underline block">Careers</Link>
                        <Link to="" className="text-sm hover:underline block">Investor</Link>
                        <Link to="" className="text-sm hover:underline block">News & Media</Link>
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
                <p className="text-center cursor-pointer pt-3 text-white"> Copyright © 2023 - 2023 TermsFeed®. All rights reserved. developer by saiful arafat</p>
            </div>
        </div>
    );
};

export default Footer;
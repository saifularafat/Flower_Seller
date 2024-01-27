import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import smileImage from "../../assets/othersImg/smile_guarantee.jpg"
const LeftFilter = () => {
    const [price, setPrice] = useState(true)
    const [contains, setContains] = useState(true)
    const [moreLess, setMoreLess] = useState(false)
    const [type, setType] = useState(true)
    const [colors, setColors] = useState(true)
    return (
        <>
            <div className="w-8/12 md:block hidden">
                <h2 className="py-3 text-2xl font-semibold">Filter by</h2>

                {/* first filter*/}
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setPrice(!price)}>
                    <h4 className="text-lg font-bold text-slate-800">Price Range</h4>
                    {
                        price ?
                            <IoIosArrowUp className="font-bold text-lg" />
                            :
                            <IoIosArrowDown className="font-bold text-lg" />
                    }
                </div>
                {
                    price && <div className="space-y-3 mt-2 border-0 border-b border-slate-400 pb-4">
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Under $65</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">$71-80</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">$81-90</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">$91-100</span>
                            </label>
                        </div>
                    </div>
                }

                {/* second filter*/}
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setContains(!contains)}>
                    <h4 className="text-lg font-bold text-slate-800 pt-2">Assortment Contains</h4>
                    {
                        contains ?
                            <IoIosArrowUp className="font-bold text-lg" />
                            :
                            <IoIosArrowDown className="font-bold text-lg" />
                    }
                </div>
                {
                    contains && <div className="space-y-3 mt-2 border-0 border-b border-slate-400 pb-4">
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Flower</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Planet</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Chocolate</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Gift</span>
                            </label>
                        </div>
                    </div>
                }
                {/* Three filter*/}
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setType(!type)}>
                    <h4 className="text-lg font-bold text-slate-800 pt-2">Recipient Type</h4>
                    {
                        type ?
                            <IoIosArrowUp className="font-bold text-lg" />
                            :
                            <IoIosArrowDown className="font-bold text-lg" />
                    }
                </div>
                {
                    type && <div className="space-y-3 mt-2 border-0 border-b border-slate-400 pb-4">
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Mom</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Her</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Family</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Love</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Best Friend</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Teacher</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Student</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Client</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Employee</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Kids</span>
                            </label>
                        </div>
                        {/* <h2 onClick={() => setMoreLess(!moreLess)}>+ More</h2>
                    {
                        moreLess && <div>
                            <div className="">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                    <span className="text-base font-medium">Best Friend</span>
                                </label>
                            </div>
                        </div>
                    }
                    <h2 onClick={() => setMoreLess(!moreLess)} >- Less</h2> */}
                    </div>
                }
                {/* Four filter*/}
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setColors(!colors)}>
                    <h4 className="text-lg font-bold text-slate-800 pt-2">Assortment Contains</h4>
                    {
                        colors ?
                            <IoIosArrowUp className="font-bold text-lg" />
                            :
                            <IoIosArrowDown className="font-bold text-lg" />
                    }
                </div>
                {
                    colors && <div className="space-y-3 mt-2 border-0 border-b border-slate-400 pb-4">
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Red</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Purple</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">White</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Black</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Pink</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
                                <span className="text-base font-medium">Green</span>
                            </label>
                        </div>
                    </div>
                }
            </div>
            {/* image and content */}
            <div className="py-10 md:block hidden">
                <img src={smileImage} alt="" className=" w-10/12 "/>
            </div>
            {/* TODO Filter Bar */}
        </>
    );
};

export default LeftFilter;
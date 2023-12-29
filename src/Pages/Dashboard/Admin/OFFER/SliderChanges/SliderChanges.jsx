import { Helmet } from "react-helmet-async";
import { GiTwirlyFlower } from "react-icons/gi";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { Link } from "react-router-dom";
import useSliderGet from "../../../../../api/useSliderGet";
import Marquee from "react-fast-marquee";

const SliderChanges = () => {
    const [sliders, refetch] = useSliderGet();
    const sliderOne = sliders.find(slider => slider.category === "sliderOne")
    const sliderTwo = sliders.find(slider => slider.category === "sliderTwo")
    const sliderThree = sliders.find(slider => slider.category === "sliderThree")
    const sliderFour = sliders.find(slider => slider.category === "sliderFour")
    const sliderFive = sliders.find(slider => slider.category === "sliderFive")
    const sliderSix = sliders.find(slider => slider.category === "sliderSix")
    console.log(sliderOne);
    return (
        <div>
            <Helmet><title>Flower Shop || Slider Change</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={GiTwirlyFlower} fileColor="" title="Change Slider Image " />
            <Marquee className="py-3 w-1/2 bg-green-200 mt-2">
                Please first Post Button click, and agin post after post delete then agin post Button Click then post and return a post .
            </Marquee>
            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Slider image</th>
                            <th>Slider image serial </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover:bg-green-200 transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={sliderOne?.sliderOne} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{sliderOne?.sliderSerialOne}</td>
                            <div className="flex items-center gap-2 mt-8">
                                <div>
                                    <Link to="/dashboard/sliderChanges/sliderOne" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                        <tr className="hover:bg-green-200 transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle  w-20 h-20">
                                            <img src={sliderTwo?.sliderTwo} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{sliderTwo?.sliderSerialTwo}</td>
                            <div className="flex items-center gap-2 mt-8">
                                <div>
                                    <Link to="/dashboard/sliderChanges/sliderTwo" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                        <tr className="hover:bg-green-200 transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={sliderThree?.sliderThree} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{sliderThree?.sliderSerialThree}</td>
                            <div className="flex items-center gap-2 mt-8">
                                <div>
                                    <Link to="/dashboard/sliderChanges/sliderThree" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                        <tr className="hover:bg-green-200 transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={sliderFour?.sliderFour} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{sliderFour?.sliderSerialFour}</td>
                            <div className="flex items-center gap-2 mt-8">
                                <div>
                                    <Link to="/dashboard/sliderChanges/sliderFour" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                        <tr className="hover:bg-green-200 transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={sliderFive?.sliderFive} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{sliderFive?.sliderSerialFive}</td>
                            <div className="flex items-center gap-2 mt-8">
                                <div>
                                    <Link to="/dashboard/sliderChanges/sliderFive" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                        <tr className="hover:bg-green-200 transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={sliderSix?.sliderSix} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{sliderSix?.sliderSerialSix}</td>
                            <div className="flex items-center gap-2 mt-8">
                                <div>
                                    <Link to="/dashboard/sliderChanges/sliderSix" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SliderChanges;
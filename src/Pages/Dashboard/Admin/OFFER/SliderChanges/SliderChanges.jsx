import { Helmet } from "react-helmet-async";
import { GiTwirlyFlower } from "react-icons/gi";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { Link } from "react-router-dom";
import useSliderGet from "../../../../../api/useSliderGet";
import axios from "axios";
import Swal from "sweetalert2";

const SliderChanges = () => {
    const [sliders, refetch] = useSliderGet();
    const sliderOne = sliders.find(slider => slider.category === "sliderOne")
    const sliderTwo = sliders.find(slider => slider.category === "sliderTwo")
    const sliderThree = sliders.find(slider => slider.category === "sliderThree")
    const sliderFour = sliders.find(slider => slider.category === "sliderFour")
    const sliderFive = sliders.find(slider => slider.category === "sliderFive")
    const sliderSix = sliders.find(slider => slider.category === "sliderSix")

    const handlerDelete = (sliders) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Select Slider delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log("Click is Done!", result);
            if (result.isConfirmed) {
            //     // axios.delete(`${import.meta.env.VITE_API_URL}/bookmarks/${select._id}`)
                axios.delete(`http://localhost:4000/sliderImage/${sliders._id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Slider has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet><title>Flower Shop || Slider Change</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={GiTwirlyFlower} textColor="" title="Change Slider Image " />
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
                            {
                                sliderOne ?
                                    <td>{sliderOne?.sliderSerialOne}</td>
                                    : <td>Please Click Now Post Button</td>
                            }
                            <div className="flex items-center gap-3 md:mt-8 mt-3">
                                {
                                    sliderOne ?
                                        <>
                                            <div className="disabled">
                                                <button disabled className="text-sm font-medium tracking-wider bg-blue-500 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handlerDelete(sliderOne)}
                                                    className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="">
                                                <Link to="/dashboard/sliderChanges/sliderOne" className="text-sm font-medium tracking-wider bg-blue-500 rounded-md md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                            </div>
                                            <div>
                                                <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                }
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
                            {
                                sliderTwo ?
                                    <td>{sliderTwo?.sliderSerialTwo}</td>
                                    : <td>Please Click Now Post Button</td>
                            }
                            <div className="flex items-center gap-3 md:mt-8 mt-3">
                                {
                                    sliderTwo ?
                                        <>
                                            <div className="disabled">
                                                <button disabled className="text-sm font-medium tracking-wider bg-blue-500 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handlerDelete(sliderTwo)}
                                                    className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="">
                                                <Link to="/dashboard/sliderChanges/sliderTwo" className="text-sm font-medium tracking-wider bg-blue-500 rounded-md md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                            </div>
                                            <div>
                                                <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                }
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
                            {
                                sliderThree ?
                                    <td>{sliderThree?.sliderSerialThree}</td>
                                    : <td>Please Click Now Post Button</td>
                            }
                            <div className="flex items-center gap-3 md:mt-8 mt-3">
                                {
                                    sliderThree ?
                                        <>
                                            <div className="disabled">
                                                <button disabled className="text-sm font-medium tracking-wider bg-blue-500 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handlerDelete(sliderThree)}
                                                    className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="">
                                                <Link to="/dashboard/sliderChanges/sliderThree" className="text-sm font-medium tracking-wider bg-blue-500 rounded-md md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                            </div>
                                            <div>
                                                <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                }
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
                            {
                                sliderFour ?
                                    <td>{sliderFour?.sliderSerialFour}</td>
                                    : <td>Please Click Now Post Button</td>
                            }
                            <div className="flex items-center gap-3 md:mt-8 mt-3">
                                {
                                    sliderFour ?
                                        <>
                                            <div className="disabled">
                                                <button disabled className="text-sm font-medium tracking-wider bg-blue-500 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handlerDelete(sliderFour)}
                                                    className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="">
                                                <Link to="/dashboard/sliderChanges/sliderFour" className="text-sm font-medium tracking-wider bg-blue-500 rounded-md md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                            </div>
                                            <div>
                                                <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                }
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
                            {
                                sliderFive ?
                                    <td>{sliderFive?.sliderSerialFive}</td>
                                    : <td>Please Click Now Post Button</td>
                            }
                            <div className="flex items-center gap-3 md:mt-8 mt-3">
                                {
                                    sliderFive ?
                                        <>
                                            <div className="disabled">
                                                <button disabled className="text-sm font-medium tracking-wider bg-blue-500 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handlerDelete(sliderFive)}
                                                    className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="">
                                                <Link to="/dashboard/sliderChanges/sliderFive" className="text-sm font-medium tracking-wider bg-blue-500 rounded-md md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                            </div>
                                            <div>
                                                <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                }
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
                            {
                                sliderSix ?
                                    <td>{sliderSix?.sliderSerialSix}</td>
                                    : <td>Please Click Now Post Button</td>
                            }
                            <div className="flex items-center gap-3 md:mt-8 mt-3">
                                {
                                    sliderSix ?
                                        <>
                                            <div className="disabled">
                                                <button disabled className="text-sm font-medium tracking-wider bg-blue-500 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handlerDelete(sliderSix)}
                                                    className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="">
                                                <Link to="/dashboard/sliderChanges/sliderSix" className="text-sm font-medium tracking-wider bg-blue-500 rounded-md md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                            </div>
                                            <div>
                                                <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                            </div>
                                        </>
                                }
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SliderChanges;
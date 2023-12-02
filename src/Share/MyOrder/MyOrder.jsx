import { Helmet } from "react-helmet-async";
import order from "../../assets/flowers/trending/festiveFrosty.webp"
import { Link } from "react-router-dom";
const MyOrder = () => {
    return (
        <div className="my-12 px-4 grid grid-cols-6">
            <Helmet>
                <title>Flower Shop || My Order </title>
            </Helmet>
            <div className="col-span-1">

            </div>
            <div className="col-span-5">
                <div className="flex items-center justify-between">
                    <h2 className=" uppercase text-xl font-semibold text-slate-500">Order history</h2>
                    <div className="flex items-center bg-slate-50 px-2 py-1 shadow-2xl rounded-xl">

                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src={order} alt="" className="w-24 h-24 rounded border object-cover" />
                    <div className="">
                        <h5 className="text-lg font-semibold text-slate-800">Flowers Sweet </h5>
                        <p className="text-sm font-bold">Payment: $57.70</p>
                        <p className="text-xs text-slate-600 font-bold">Order Date: 05/10/22</p>
                    </div>
                    <div className="space-y-2">
                        <div className="">
                            <Link to="" className="text-sm font-medium tracking-wide py-1 px-2 bg-red-700 text-slate-900 rounded-md"> Order Cancel</Link>
                        </div>
                        <div>
                            <Link to="" className="text-sm font-medium tracking-wide py-1 px-2 bg-blue-800 text-white rounded-md">Order Details </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
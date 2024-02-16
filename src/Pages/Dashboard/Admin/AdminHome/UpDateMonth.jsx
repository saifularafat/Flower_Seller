import { AiOutlineCodeSandbox, AiOutlineCreditCard } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoLogoUsd } from "react-icons/io";
import { TbArrowsTransferUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import medal from "../../../../assets/logo/medal.png"
import useTotalPaymentData from "../../../../api/useTotalPaymentData";
import allUsers from "../../../../api/useAllUser";
import useAllFlowers from "../../../../api/useAllFlowers";

const UpDateMonth = () => {
    const [totalPayment] = useTotalPaymentData();
    const [users] = allUsers();
    const [flowerAll] = useAllFlowers();

    /* total flower Order  */
    let amount = 0;
    totalPayment.forEach(order => {
        amount += parseFloat(order?.totalPrice);
    });
    const totalAmount = amount.toFixed(2);
    /* success Order by Profit */
    const successOrder = totalPayment.filter(sslPay => sslPay?.payStatus === "success");
    let profitAmount = 0;
    successOrder.forEach(order => {
        profitAmount += parseFloat(order?.totalPrice);
    });
    const profitNAmount = profitAmount.toFixed(2);
    const profitTotalAmount = profitNAmount * 15 / 100;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-5 my-3">
                {/* view salary */}
                <div className={`col-span-2 flex w-full text-slate-900 shadow-2xl p-4 overflow-hidden rounded-xl `}>
                    <div>
                        <h3 className="font-medium text-lg">Congratulations 🎉 Saiful</h3>
                        <p className="font-normal tracking-wider mt-3 text-sm text-blue-500">You have won the first place</p>
                        <h2 className="font-medium text-3xl text-blue-600 mt-6 mb-3 cursor-pointer">{totalAmount + "$"} </h2>
                        <Link to="/dashboard/totalPayment">
                            <button className="py-2 px-4 rounded-xl text-white text-xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-600 transition-all duration-150 capitalize">view sales</button>
                        </Link>
                    </div>
                    <div className="object-cover">
                        <img src={medal} alt="medal" className="md:w-36 w-16" />
                    </div>
                </div>
                <div className={`col-span-4 text-slate-900 shadow-2xl px-4 md:pt-9 py-5 overflow-hidden rounded-xl `}>
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium text-slate-900">Statistics</h4>
                            <p className="lowercase text-sm  text-slate-500">Updated 1 months ago</p>
                        </div>
                        <div className="md:flex items-center justify-between space-y-3 md:space-y-0 gap-5 mt-6">
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-blue-500/20 p-3 rounded-full">
                                    <FaChartLine className="text-2xl text-blue-600" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">{totalAmount + "$"} <br /><span className="text-sm text-blue-600 font-normal leading-none">Order</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-blue-800/30 p-3 rounded-full">
                                    <FiUser className="text-2xl text-blue-900" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">{users?.length} <br /><span className="text-sm text-blue-600 font-normal leading-none">customer</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-orange-600/20 p-3 rounded-full">
                                    <AiOutlineCodeSandbox className="text-3xl text-orange-800" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">{flowerAll?.length}<br /><span className="text-sm text-blue-600 font-normal leading-none">products</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-slate-700/20 p-3 rounded-full">
                                    <IoLogoUsd className="text-2xl text-slate-900" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">1269$ <br /><span className="text-sm text-blue-600 font-normal leading-none lowercase">revenue</span></p>
                            </div>
                        </div>
                        <div className="md:flex items-center justify-center space-y-3 md:space-y-0 mt-5 gap-8">
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-green-600/20 p-3 rounded-full">
                                    <AiOutlineCreditCard className="text-2xl text-green-500" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">{profitTotalAmount + "$"} <br /><span className="text-sm text-blue-600 lowercase font-normal leading-none">profit</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-blue-800/20 p-3 rounded-full">
                                    <TbArrowsTransferUp className="text-2xl text-blue-700" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">05 <br /><span className="text-sm text-blue-600 font-normal leading-none lowercase">rang</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpDateMonth;
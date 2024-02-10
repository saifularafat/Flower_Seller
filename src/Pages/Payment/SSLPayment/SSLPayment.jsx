import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";
import { useParams } from "react-router-dom";
import useAllFlowers from "../../../api/useAllFlowers";
import useAuth from "../../../api/useAuth";
import Swal from "sweetalert2";
import DateAndTime from "../../../components/DateAndTime";

const SSLPayment = () => {
    const { id } = useParams();
    const [flowerAll] = useAllFlowers();
    const singleFlower = flowerAll.find(flower => flower?._id === id);
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let amount = parseFloat(singleFlower?.price);
    let tex = parseFloat(amount * 9 / 100);
    const texFixed = tex.toFixed(2);
    const deliveryCharge = 1.10;
    let totalAmount = amount + tex + deliveryCharge;
    const totalPrice = totalAmount.toFixed(2);

    const randomTransitionId = Math.random().toString(36).substring(2, 22);
    const onSubmit = data => {
        /* TODO POST THE PAYMENT */
        const conformPayment = {
            id: singleFlower?._id,
            image: singleFlower?.flowerImg,
            name: singleFlower?.flowerName,
            price: amount,
            totalPrice: totalPrice,
            charge: texFixed,
            currentAddress: data.CurrentAddress,
            PhoneNumber: data.userPhoneNumber,
            email: data.userEmail,
            userName: user.displayName,
            payType: "success",
            paymentType: "Case On Delivery.",
            date: new Date(),
            transitionId:randomTransitionId,
            duration: "Delivery Duration Time is 7 Day!",
        }
        console.log(conformPayment);
        fetch(`${import.meta.env.VITE_API_URL}/sslPayment`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(conformPayment)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data?.url)
                console.log(data?.url)
            })
    }
    return (
        <div className="w-10/12 mx-auto my-5">
            <Helmet><title>Flower Shop || SSL Payment</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-5 gap-5">
                    <div className="col-span-3 text-center">
                        <div className="w-1/2 mx-auto">
                            <img src={singleFlower?.flowerImg} loading="lazy" alt="flower" className="md:w-60 md:h-60 mx-auto rounded border-2 hover:scale-105 transition-all duration-200 border-solid border-slate-500" />
                        </div>
                        <div className="overflow-x-auto">
                            <h2 className="md:text-xl text-base font-semibold pt-2">{singleFlower?.flowerName}</h2>
                            <table className="table table-zebra w-3/4 mx-auto">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="text-base text-slate-900">Info </th>
                                        <th className="text-base text-slate-900">Amount </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-base">Price</td>
                                        <td className="text-base">{singleFlower?.price + '$'}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base">Delivery Charge</td>
                                        <td className="text-base">{deliveryCharge.toFixed(2) + "$"}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base">Tex</td>
                                        <td className="text-base">{texFixed + "$"}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base font-semibold uppercase">Total Amount</td>
                                        <td className="text-lg font-semibold">{totalPrice + "$"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-red-700">Delivery Duration Time is 7 Day!</p>
                    </div>
                    <div className="col-span-2">
                        <label className="label">
                            <span className="label-text text-lg  font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            defaultValue={user?.email}
                            placeholder="Please Provide Your email"
                            {...register("userEmail")}
                            className="input input-bordered w-full text-base disabled"
                        />
                        <label className="label">
                            <span className="label-text text-lg  font-semibold">Current Address</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={""}
                            placeholder="Please Provide Your Current Address"
                            {...register("CurrentAddress", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        {errors.CurrentAddress?.type === "required" && (
                            <p className="text-red-600 text-sm">Please Type Your Current Address </p>
                        )}
                        <label className="label">
                            <span className="label-text text-lg  font-semibold">Phone Number</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={""}
                            placeholder="Please Provide Your Phone number"
                            {...register("userPhoneNumber", { required: true, maxLength: 14 })}
                            className="input input-bordered w-full text-base"
                        />
                        {errors.userPhoneNumber?.type === "required" && (
                            <p className="text-red-600 text-sm">Please Type Your Phone Number </p>
                        )}


                        <div className="w-full pb-4 hidden">
                            <input
                                type="text"
                                placeholder=""
                                defaultValue="cashOnDelivery"
                                {...register("category")}
                                className="hidden"
                            />
                        </div>
                        <div className="mt-4">
                            <button className="flex items-center justify-center md:w-1/2 mx-auto bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                                Conform Order
                                <GiFlowerPot className="md:w-12 md:h-9 text-2xl text-slate-100" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SSLPayment;
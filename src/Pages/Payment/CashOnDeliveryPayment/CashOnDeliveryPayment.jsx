import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";
import { useParams } from "react-router-dom";
import useAllFlowers from "../../../api/useAllFlowers";
import useAuth from "../../../api/useAuth";

const CashOnDeliveryPayment = () => {
    const { id } = useParams();
    const [flowerAll] = useAllFlowers();
    const singleFlower = flowerAll.find(flower => flower?._id === id);
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //!! TODO total Amount 

    // const tex = 
    // const totalAmount = 

    const onSubmit = data => {
        console.log(data);
        const conformPayment = {
            flowerImage: data.image,
            flowerName: data.name,
            flowerPrice: data.price,
            deliveryCharge: "2$",
            CurrentAddress: data.CurrentAddress,
            userPhoneNumber: data.userPhoneNumber,
            userEmail: data.userEmail,
            duration: "Delivery Duration Time is 7 Day!",
        }
        console.log(conformPayment);
    }
    return (
        <div className="w-10/12 mx-auto my-5">
            <Helmet><title>Flower Shop || Cash On Delivery</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-5 gap-5">
                    <div className="col-span-3 text-center">
                        <div className="w-1/2 mx-auto">
                            <img src={singleFlower?.flowerImg} loading="lazy" alt="flower" className="md:w-60 md:h-60 mx-auto rounded border-2 hover:scale-105 transition-all duration-200 border-solid border-slate-500" />
                        </div>
                        <h2 className="md:text-xl text-base font-semibold">{singleFlower?.flowerName} </h2>
                        <h4 className="text-xl font-semibold">Price : {singleFlower?.price+'$'}</h4>
                        <h4 className="text-lg font-semibold">Cash On Delivery Charge <span className="text-xl">2$</span></h4>
                        <hr />
                        <h1 className="text-xl font-medium">Total Amount = <span className="text-2xl ">91$</span></h1>
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

export default CashOnDeliveryPayment;
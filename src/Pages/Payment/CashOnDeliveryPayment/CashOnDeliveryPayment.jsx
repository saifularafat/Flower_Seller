import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";

const CashOnDeliveryPayment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="w-10/12 mx-auto my-5">
            <Helmet><title>Flower Shop || Cash On Delivery</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="w-1/2 mx-auto text-center space-y-1">
                    <div className="w-1/2 mx-auto">
                        <img src="" alt="flower" className="w-20 h-20 mx-auto rounded border-2 border-solid border-slate-500"/>
                    </div>
                    <h2>Flower Name  </h2>
                    <h4>Price : 89$</h4>
                    <h4>Cash On Delivery Charge 2$</h4>
                    <hr />
                    <h1>Total Amount = 91$</h1>
                    <p>Delivery Time is 7 Day a submit !</p>
                </div>
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
                    <button className="flex items-center justify-center w-full bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                        Best Offer
                        <GiFlowerPot className=" w-12 h-9 text-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CashOnDeliveryPayment;
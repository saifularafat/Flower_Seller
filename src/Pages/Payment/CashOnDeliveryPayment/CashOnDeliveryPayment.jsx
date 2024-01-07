import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";
import { useParams } from "react-router-dom";

const CashOnDeliveryPayment = () => {
    const { id } = useParams();
    console.log(id);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        const conformPayment = {
            flowerImage: data.image,
            flowerName: data.name,
            flowerPrice: data.price,
            deliveryCharge: "2$",
            duration: "Delivery Duration Time is 7 Day!",
            CurrentAddress: data.CurrentAddress,
        }
        console.log(conformPayment);
    }
    return (
        <div className="w-10/12 mx-auto my-5">
            <Helmet><title>Flower Shop || Cash On Delivery</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-1/2 mx-auto text-center">
                    <div className="w-1/2 mx-auto">
                        <img src="" alt="flower" className="w-20 h-20 mx-auto rounded border-2 border-solid border-slate-500" />
                    </div>
                    <h2 className="text-base font-semibold">Flower Name  </h2>
                    <h4 className="text-xl font-semibold">Price : 89$</h4>
                    <h4 className="text-lg font-semibold">Cash On Delivery Charge <span className="text-xl">2$</span></h4>
                    <hr />
                    <h1 className="text-xl font-medium">Total Amount = <span className="text-2xl ">91$</span></h1>
                    <p className="text-red-700">Delivery Duration Time is 7 Day!</p>
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
                    <button className="flex items-center justify-center md:w-1/5 mx-auto bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                        Conform Order
                        <GiFlowerPot className="md:w-12 md:h-9 text-2xl text-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CashOnDeliveryPayment;
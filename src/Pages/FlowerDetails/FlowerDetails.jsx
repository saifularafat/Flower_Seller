import { Link, useParams } from "react-router-dom";
import useAllFlowers from "../../api/useAllFlowers";

const FlowerDetails = () => {
    const { id } = useParams();
    const [flowerAll] = useAllFlowers();
    const singleFlower = flowerAll.find(flower => flower._id === id);
    // const { flowerImg } = singleFlower;
    console.log(id, "full Details =>", singleFlower);

    let amount = parseFloat(singleFlower?.price);
    let tex = parseFloat(amount * 9 / 100);
    const texFixed = tex.toFixed(2);
    const deliveryCharge = 1.10;
    let totalAmount = amount + tex + deliveryCharge;
    const totalPrice = totalAmount.toFixed(2);
    return (
        <>
            <div className="grid md:grid-cols-5 grid-cols-3 gap-5 py-6 container mx-auto">
                <div className="md:col-span-2 col-span-1">
                    <div className=" md:flex items-center rounded-lg overflow-hidden">
                        <div className="w-1/5 md:block hidden">

                        </div>
                        <img src={singleFlower?.flowerImg} alt="" className="w-full mx-auto rounded-lg object-cover hover:scale-105 transition-all duration-200" />
                    </div>
                    {
                        singleFlower?.FlowerDetails &&
                        <p>{singleFlower?.FlowerDetails}</p>
                    }
                </div>
                <div className="md:col-span-3 col-span-2 rounded-lg space-y-1">
                    <h2 className="md:text-3xl text-xl font-semibold pb-3">{singleFlower?.flowerName}</h2>
                    <div className="flex items-center justify-between shadow rounded-md md:w-2/3 md:p-3 w-full p-1">
                        <p className="text-xl font-semibold">Flower Price</p>
                        <p className="text-xl font-semibold">{singleFlower?.offerPrice ? <>{singleFlower?.offerPrice + "$"}</> : <>{singleFlower?.price + "$"}</>}</p>
                    </div>
                    <div className="flex items-center justify-between shadow-lg rounded-md md:w-2/3 md:p-3 w-full p-1">
                        <p className="text-xl font-semibold">Delivery Charge</p>
                        <p className="text-xl font-semibold">{deliveryCharge.toFixed(2) + "$"}</p>
                    </div>
                    <div className="flex items-center justify-between shadow-lg rounded-md md:w-2/3 md:p-3 w-full p-1">
                        <p className="text-xl font-semibold">Product Tex</p>
                        <p className="text-xl font-semibold">{texFixed + "$"}</p>
                    </div>
                    <div className="flex items-center justify-between shadow-md rounded-md md:w-2/3 md:p-3 w-full p-1">
                        <p className="text-xl font-semibold">Total Amount</p>
                        <p className="text-xl font-semibold">{totalPrice + "$"}</p>
                    </div>

                    <div className="flex items-center bg-slate-600 justify-between shadow-2xl rounded-md md:w-2/3 md:p-3 w-full p-1 my-6">
                        <button className=" w-full mx-auto md:text-lg text-sm font-medium md:font-semibold tracking-wider text-white">Add To Cart</button>
                    </div>
                    <div className="flex items-center justify-between shadow-2xl bg-blue-700 rounded-md md:w-2/3 md:p-3 w-full p-1">
                        <Link to={`/paymentOption/${id}`} className=" text-center w-full mx-auto md:text-lg text-sm font-medium md:font-semibold tracking-wider text-white uppercase">Pay now</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FlowerDetails;
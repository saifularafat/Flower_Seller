import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import StripeCardDesign from "./StripeCardDesign";
import { Helmet } from "react-helmet-async";
import useAllFlowers from "../../../api/useAllFlowers";
import { useParams } from "react-router-dom";
import Loading from "../../../Share/Loading/Loading";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const StripePayment = () => {
    const { id } = useParams();
    const [flowerAll] = useAllFlowers();
    const singleFlower = flowerAll.find(flower => flower?._id === id);
    let amount = parseFloat(singleFlower?.price);
    let tex = parseFloat(amount * 9 / 100);
    const texFixed = tex.toFixed(2);
    const deliveryCharge = 1.10;
    let totalAmount = amount + tex + deliveryCharge;
    const totalPrice = parseFloat(totalAmount.toFixed(2));
    return (
        <div>
            {singleFlower ? (
                <div className='p-4 '>
                    <Helmet><title> Payment | Flowers Shop</title></Helmet>
                    <div className='flex flex-col md:p-6 p-2 mx-auto  shadow-md  border-2  lg:w-5/12 md:w-8/12 lg:mt-32 lg:mb-16 rounded-3xl'>
                        <div className='hidden mx-auto lg:-mt-32 md:-mt-16 md:block'>
                            <StripeCardDesign />
                        </div>
                        <h1 className='md:m-6 m-2 md:text-3xl text-xl text-center'>Payment</h1>

                        <Elements stripe={stripePromise}>
                            <CheckOutForm
                                price={totalPrice}
                                texFixed={texFixed}
                            />
                        </Elements>
                    </div>
                </div>
            ) : (
                <>
                    <Loading />
                </>
            )}
        </div>
    );
};

export default StripePayment;
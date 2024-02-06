import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import StripeCardDesign from "./StripeCardDesign";
import { Helmet } from "react-helmet-async";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const StripePayment = () => {
    return (
        <div>
            {/* {priceData ? ( */}
                <div className='p-4 '>
                    <Helmet><title> Payment | Flowers Shop</title></Helmet>
                    <div className='flex flex-col md:p-6 p-2 mx-auto  shadow-md  border-2  lg:w-5/12 md:w-8/12 lg:mt-32 lg:mb-16 rounded-3xl'>
                        <div className='hidden mx-auto lg:-mt-32 md:-mt-16 md:block'>
                            <StripeCardDesign />
                        </div>
                        <h1 className='md:m-6 m-2 md:text-3xl text-xl text-center'>Payment</h1>

                        <Elements stripe={stripePromise}>
                            <CheckOutForm 
                            // packages={packages}
                             />
                        </Elements>
                    </div>
                </div>
            {/* ) : (
                <>
                    <h1>Loading............</h1>
                </>
            )} */}
        </div>
    );
};

export default StripePayment;
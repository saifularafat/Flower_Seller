import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Stripe Payment system  => ", e);


        /* button processing function */
        if (!processing) {
            setProcessing(true)
            setTimeout(() => {
                setProcessing(false)
            }, 1500)
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className={
                    processing
                        ? 'processing bg-red-400 w-full p-2 mt-7 rounded text-slate-900 tracking-wide'
                        : 'bg-sky-700 w-full p-2 mt-7 rounded text-white tracking-wide'
                }
                type='submit'
                disabled={!stripe || processing}
            >
                {processing ? 'Processing...' : 'Confirm Pay'}
            </button>
        </form>
    );
};

export default CheckOutForm;
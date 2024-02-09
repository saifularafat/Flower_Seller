import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAllFlowers from "../../../api/useAllFlowers";
import useAuth from "../../../api/useAuth";
import { useAxiosSecure } from "../../../api/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";

const CheckOutForm = ({ price, texFixed }) => {
    const { id } = useParams();
    const stripe = useStripe();
    const elements = useElements();

    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");

    const [flowerAll] = useAllFlowers();
    const singleFlower = flowerAll.find(flower => flower?._id === id);


    // console.log(conformPayment);
    useEffect(() => {
        if (price > 0) {
            axios.post("/create-payment-intent", { price }).then((res) => {
                console.log("Response from /create-payment-intent:", res);
                setClientSecret(res.data.clientSecret);
            }).catch(error => {
                console.error("Error in /create-payment-intent:", error);
            });
        }
    }, [price, texFixed, axiosSecure]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Stripe Payment system  => ", singleFlower, e);


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
        } else {
            setError("")
            console.log("payment Method", paymentMethod);
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous",
                    },
                },
            });
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false);
        console.log("payment intent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            const conformPayment = {
                id: singleFlower?._id,
                image: singleFlower?.flowerImg,
                name: singleFlower?.flowerName,
                price: singleFlower?.price,
                totalPrice: price,
                charge: texFixed,
                currentAddress: user?.CurrentAddress,
                PhoneNumber: user?.userPhoneNumber,
                email: user?.userEmail,
                userName: user?.displayName,
                date: new Date(),
                payStatus: "success",
                paymentType: "stripe payment",
                duration: "Delivery Duration Time is 7 Day!",
            };
            axiosSecure.post("/payment", conformPayment)
                .then((res) => {
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'card payment successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }

        /* button processing function */
        if (!processing) {
            setProcessing(true)
            setTimeout(() => {
                setProcessing(false)
            }, 1500)
        }

    }
    return (
        <div>
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
            <div className=' md:mt-5 mt-2' >
                {error && (
                    <p className='text-red-600 md:mt-5 mt-2 text-center'>Failed: {error}</p>
                )}
                {success && (
                    <p className='text-green-700 text-center'>
                        Complete Your Payment. Your Transaction ID: {success}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CheckOutForm;
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAllFlowers from "../../../api/useAllFlowers";
import useAuth from "../../../api/useAuth";

const CheckOutForm = () => {
    const { id } = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);
    const [flowerAll] = useAllFlowers();
    const { user } = useAuth();
    const singleFlower = flowerAll.find(flower => flower?._id === id);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Stripe Payment system  => ", singleFlower, e);


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }


        // const conformPayment = {
        //     id: singleFlower?._id,
        //     image: singleFlower?.flowerImg,
        //     name: singleFlower?.flowerName,
        //     price: amount,
        //     totalPrice: totalPrice,
        //     charge: texFixed,
        //     currentAddress: data.CurrentAddress,
        //     PhoneNumber: data.userPhoneNumber,
        //     email: data.userEmail,
        //     userName: user.displayName,
        //     payStatus: "success",
        //     paymentType: "Case On Delivery",
        //     duration: "Delivery Duration Time is 7 Day!",
        // }
        // console.log(conformPayment);
        // axios.post(`${import.meta.env.VITE_API_URL}/payment`, conformPayment)
        //     .then(data => {
        //         console.log("post data", data.data);
        //         if (data.data.insertedId) {
        //             Swal.fire({
        //                 position: 'top-center',
        //                 icon: 'success',
        //                 title: 'Hand Cash Payment!',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //             /*TODO RETUNE BY PAYMENT ROUTER*/

        //         }
        //     })


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
            {/* <div className=' md:mt-5 mt-2' >
                {error && (
                    <p className='text-red-600 md:mt-5 mt-2 text-center'>Failed: {error}</p>
                )}
                {success && (
                    <p className='text-green-700 text-center'>
                        Complete Your Payment. Your Transaction ID: {success}
                    </p>
                )}
            </div> */}
        </div>
    );
};

export default CheckOutForm;
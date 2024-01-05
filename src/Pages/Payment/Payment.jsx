import { useState } from "react";

const Payment = () => {
    const [selectSystem, setSelectSystem] = useState("sslPayment");

    const handleSystemChange = (e) => {
        setSelectSystem(e.target.value)
    }
    return (
        <div>
            <h3 className="text-center my-5 md:text-3xl text-xl font-bold">Choose Your Payment System</h3>
            <div className="flex flex-col items-center">
                <label
                    className={`cursor-pointer grid grid-cols-2  md:w-[420px] rounded-lg border   mt-4  p-10
          ${selectSystem === 'sslPayment' ? ' bg-primary' : 'bg-secondary'}
          `}
                >
                    <h1>SSL Payment System</h1>
                    <input
                        type='radio'
                        name='radio-2'
                        className='radio radio-warning ms-auto'
                        value='sslPayment'
                        checked={selectSystem === 'sslPayment'}
                        onChange={handleSystemChange}
                    />
                </label>
                <label
                    className={`cursor-pointer grid grid-cols-2 border-2 shadow-lg
           md:w-[420px] p-10 rounded-lg  mt-4 mb-10
           ${selectSystem === 'cashOnDelivery' ? ' bg-primary' : 'bg-secondary'
                        }
           
           `}
                >
                    <h1>Stripe Payment System</h1>
                    <input
                        type='radio'
                        name='radio-2'
                        className='radio radio-warning ms-auto'
                        value='stripePayment'
                        checked={selectSystem === 'stripePayment'}
                        onChange={handleSystemChange}
                    />
                </label>
                <label
                    className={`cursor-pointer grid grid-cols-2 border-2 shadow-lg
           md:w-[420px] p-10 rounded-lg  mt-4 mb-10
           ${selectSystem === 'cashOnDelivery' ? ' bg-primary' : 'bg-secondary'
                        }
           
           `}
                >
                    <h1>Cash On Delivery</h1>
                    <input
                        type='radio'
                        name='radio-2'
                        className='radio radio-warning ms-auto'
                        value='cashOnDelivery'
                        checked={selectSystem === 'cashOnDelivery'}
                        onChange={handleSystemChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default Payment;
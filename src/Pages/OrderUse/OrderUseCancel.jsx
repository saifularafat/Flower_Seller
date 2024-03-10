import { Link, useParams } from "react-router-dom";
import userEmailToPayment from "../../api/useEmailPayment";
import { useState } from "react";
import { useForm } from "react-hook-form";
const OrderUseCancel = () => {
    const { id } = useParams();
    const [payments, refetch] = userEmailToPayment();
    const payD = payments.find(pay => pay._id === id);
    const [openModal, setOpenModal] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div key={payD?._id} className="flex flex-col md:flex-row justify-center my-10">
                <div className=" max-w-[300px] flex items-center justify-center group">
                    <img className="rounded-lg transform scale-110" src={payD?.image} alt="flower Photo" />
                </div>
                <div className="bg-white flex gap-2 rounded-tr-lg rounded-br-lg px-8 py-3 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                    <div className="space-y-1 text-left">
                        {/* flower info */}
                        <h1 className="text-xl font-bold">Flower Details </h1>
                        <h2 className="text-sm font-medium text-gray-700 font-sans">
                            <span className="">Flower Name: </span> {payD?.name}
                        </h2>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Flower Price: {payD?.price}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Bat & Charge: {payD?.charge}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Total Price: {payD?.totalPrice}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Transition ID: {payD?.payStatus === "pending" ? <span className="uppercase">{payD?.payStatus}</span> : <>{payD?.transition_id}</>}</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Payment Type: {payD?.paymentType}</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Payment Date: {payD?.date}</p>
                        <p className="text-slate-800 text-sm font-sans font-medium">Delivery Address: {payD?.currentAddress}</p>
                        <p className="text-[15px] font-sans text-center font-medium bg-black/80 text-red-600 rounded mt-1">{payD?.duration}</p>
                    </div>
                    <div className="">
                        {/* user info */}
                        <h1 className="text-xl font-bold">User Details </h1>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">User Name: {payD?.userName}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Email: {payD?.email}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Phone Number: {payD?.PhoneNumber}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Flower ID: {payD?._id}</p>

                        <div className="flex items-center justify-center mt-10">
                            <Link to="/dashboard/orderHistory">
                                <button className="text-xl w-36 h-11 rounded-lg before:block before:absolute bg-[#f3f0f0] hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-500 bg-transparent border-2 overflow-hidden border-sky-700 duration-500">
                                    Order History
                                </button>
                            </Link>
                        </div>

                        {/* Order Cancel Modal */}
                        <div className="w-72 pt-3 mx-auto flex items-center justify-center">
                            <button onClick={() => setOpenModal(true)} className="text-xl w-36 h-11 rounded-lg before:block before:absolute bg-red-500 hover:before:bg-red-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-left-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-white bg-transparent border-2 overflow-hidden border-red-700 duration-500">
                                Order Cancel
                            </button>
                            <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                                    {/* cancel Form  */}
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="form-control">
                                            <label className="cursor-pointer label">
                                                <span className="label-text">Remember me</span>
                                                <input value={"this a one "} type="checkbox" name="one"  {...register("one")} defaultChecked className="checkbox checkbox-info" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="cursor-pointer label">
                                                <span className="label-text">Remember me 2</span>
                                                <input value={"this a two"} type="checkbox" name="two"  {...register("two")} className="checkbox checkbox-info" />
                                            </label>
                                        </div>

                                        <input type="submit" />
                                    </form>


                                    {/* <form onSubmit={() => handleSubmit(cancelFormSubmit)} className="p-12">
        
                                            <input {...register("firstName", { required: true, maxLength: 20 })} />
                                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                                            <input type="number" {...register("age", { min: 18, max: 99 })} />
                                            <input type="submit" /> */}


                                    {/* <div className="form-control">
                                            <label className="cursor-pointer label">
                                                <span className="label-text">Remember me</span>
                                                <input value="this a one" type="checkbox" name="one"  {...register("one")} defaultChecked className="checkbox checkbox-info" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="cursor-pointer label">
                                                <span className="label-text">Remember me 2</span>
                                                <input value={"this a "} type="checkbox" name="two"  {...register("two")} className="checkbox checkbox-info" />
                                            </label>
                                        </div>
                                        <label htmlFor="email" className="block">Email</label>
                                        <div className="relative">
                                            <input id="email" type="email" name="email"  {...register("email")} placeholder="example@gmail.com" className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" />
                                            <span className="absolute top-1/4 left-2"><svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z" fill="#000000"></path><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#000000"></rect></g></svg></span>
                                        </div> */}
                                    {/* <div className="space-y-5">
                                            <label htmlFor="email" className="block">Email</label>
                                            <div className="relative">
                                                <input id="email" type="email" placeholder="example@gmail.com" className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" />
                                                <span className="absolute top-1/4 left-2"><svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z" fill="#000000"></path><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#000000"></rect></g></svg></span>
                                            </div>
                                            <label htmlFor="password" className="block">Password</label>
                                            <div className="relative">
                                                <input id="pass" type="password" placeholder=".............." className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" />
                                                <span className="absolute top-1/4 left-2"><svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z" fill="#000000"></path></g></svg></span>
                                            </div>
                                        </div> */}
                                    {/* button type will be submit for handling form submission*/}
                                    {/* <button type="button" className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button> */}
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderUseCancel;
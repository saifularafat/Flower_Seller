import { useParams } from "react-router-dom";
import userEmailToPayment from "../../../api/useEmailPayment";
const PaymentDetails = () => {
    const { id } = useParams();
    const [payments, refetch] = userEmailToPayment();
    const singleFlower = payments.find(flower => flower._id === id);

    console.log(id, "-------........> 6 line >", singleFlower);
    return (
        <>
            {
                payments.map(payD =>
                    <div key={payD?._id} className=" flex flex-col md:flex-row justify-center  my-10">
                        <div className=" max-w-[350px] group">
                            <img className="rounded-lg transform scale-105" src={payD?.image} alt="card navigate ui" />
                        </div>
                        <div className="bg-white space-y-12  max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                            <div className="space-y-1 text-left">
                                <h2 className="text-lg font-medium text-gray-700 font-sans">
                                   <span className="">Flower Name: </span> {payD?.name}
                                </h2>
                                <p className="font-sans text-lg text-gray-700 font-bold"> Total Price: {payD?.totalPrice}$</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-sm font-sans">Shots</p>
                                    <p className="text-3xl tracking-wider text-gray-700">23</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-sm font-sans">Following</p>
                                    <p className="text-3xl tracking-wider text-gray-700">314</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-sm font-sans">Followers</p>
                                    <p className="text-3xl tracking-wider text-gray-700">487</p>
                                </div>
                            </div>
                            <div>
                                <button className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    );
};

export default PaymentDetails;
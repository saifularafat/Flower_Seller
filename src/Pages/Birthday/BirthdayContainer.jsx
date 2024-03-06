import { Link } from "react-router-dom";
import useAllFlowers from "../../api/useAllFlowers";
import SortBy from "./SortBy";
import DataLoading from "../../Share/Loading/DataLoading";
import NoFoundData from "../../components/NoFoundData";
import { MdAddShoppingCart } from "react-icons/md";

const BirthdayContainer = () => {
    const [flowerAll, refetch, isLoading] = useAllFlowers();
    const birthDays = flowerAll.filter(birthDay => birthDay.flowerCategory === "birthday");

    if (isLoading) {
        return <DataLoading />
    }

    return (
        <>
            <SortBy length={birthDays?.length}
                category={birthDays}
                ascending={birthDays}
            />
            {
                birthDays?.length > 0 ?
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-5 ">
                        {
                            birthDays.map(birthDay =>
                                <div key={birthDay?._id} className="w-full md:h-[480px] h-[300px] py-5 hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                    <Link to={`/flowerDetails/${birthDay?._id}`} className="">
                                        <img src={birthDay?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 object-cover hover:scale-105 duration-200 transition-all" />
                                        <div className="md:px-2 px-1 pt-2">
                                            <h4 className="text-base md:font-semibold font-medium leading-tight">{birthDay?.flowerName}</h4>
                                        </div>
                                    </Link>
                                    <div className="flex items-center justify-between p-2">
                                        <p>
                                            {
                                                birthDay?.offerPrice && <span className="md:text-lg text-base md:font-bold font-bold pr-2">{birthDay?.offerPrice}</span>
                                            }
                                            <span className={`md:text-lg text-base md:font-bold font-bold ${birthDay?.offerPrice && "line-through text-red-700"}`}>{birthDay?.price + "$"}</span>
                                        </p>

                                    </div>
                                    <div className="flex items-center md:justify-center justify-between flex-wrap md:gap-2 text-sm md:text-base pt-2">
                                        <button className="text-sm md:px-5 px-2 md:py-2 py-1 rounded-md bg-sky-600 text-white relative overflow-hidden group z-10">
                                            <Link to={`/paymentOption/${birthDay?._id}`}>
                                                <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-700 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span><span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Pay</span>Pay
                                            </Link>
                                        </button>
                                        <button className="text-sm md:px-3 px-2 md:py-2 py-1 rounded-md bg-sky-600 text-white relative overflow-hidden group">
                                            <span className="pr-5 md:block hidden">Add To Cart</span>
                                            <span className="pr-5 block md:hidden">Add Cart</span>
                                            <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center hover:rounded-md group-hover:duration-300 group-hover:w-full w-7 duration-300">
                                                <MdAddShoppingCart className="text-2xl " />
                                            </span>
                                        </button>

                                    </div>
                                </div>)
                        }
                    </div>
                    :
                    <NoFoundData />
            }
        </>
    )
};

export default BirthdayContainer;
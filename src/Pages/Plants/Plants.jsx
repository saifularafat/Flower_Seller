import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import SortBy from "../Birthday/SortBy";
import { Helmet } from "react-helmet-async";
import DataLoading from "../../Share/Loading/DataLoading";
import { useState } from "react";
import useAllFlowers from "../../api/useAllFlowers";
import NoFoundData from "../../components/NoFoundData";

const Plants = () => {
    const [cartAdd, setCartAdd] = useState(false);
    const [flowerAll, refetch, isLoading] = useAllFlowers();
    const plantsTotal = flowerAll.filter(plants => plants.flowerCategory === "plants");
    const totalNumber = plantsTotal.length;
    console.log(totalNumber);
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <>
            <div className="mx-4 md:pb-4">
                <Helmet>
                    <title> Plants Flower || Flower Shop </title>
                </Helmet>
            </div>

            <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 md:block hidden">

                </div>
                <div className="md:col-span-3 pr-2">
                    <SortBy length={totalNumber}
                        category={plantsTotal}
                        ascending={plantsTotal}
                    />
                </div>
            </div>
            <div className="md:mx-4 mx-1 md:py-5 py-2">
                {
                    totalNumber > 0 ?
                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
                            {
                                plantsTotal.map(plant =>
                                    <div key={plant?._id} className="w-full md:h-[420px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                        <Link to={`/flowerDetails/${plant?._id}`} className="">
                                            <img src={plant?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 object-cover hover:scale-105 duration-200 transition-all" />
                                            <div className="px-2 pt-1">
                                                <h4 className="text-base md:font-semibold font-medium leading-tight">{plant?.flowerName}</h4>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-between px-2 py-1">
                                            <p>
                                                {
                                                    plant?.offerPrice && <span className="md:text-lg text-base md:font-bold font-bold pr-2">{plant?.offerPrice}</span>
                                                }
                                                <span className={`md:text-lg text-base md:font-bold font-bold ${plant?.offerPrice && "line-through text-red-700"}`}>{plant?.price + "$"}</span>
                                            </p>
                                            <div onClick={() => setCartAdd(!cartAdd)}>
                                                {
                                                    cartAdd ?
                                                        <IoFlowerSharp onClick={() => setCartAdd(true)} />
                                                        :
                                                        <IoFlowerOutline onClick={() => setCartAdd(false)} />
                                                }
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                        :
                        <NoFoundData />
                }
            </div>
        </>
    );
};

export default Plants;
import { Link } from "react-router-dom";
import useAllFlowers from "../../api/useAllFlowers";
import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";
import { useState } from "react";
import SortBy from "./SortBy";
import DataLoading from "../../Share/Loading/DataLoading";
import NoFoundData from "../../components/NoFoundData";
const BirthdayContainer = () => {
    const [cartAdd, setCartAdd] = useState(false);
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
                                <div key={birthDay?._id} className="w-full md:h-[400px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
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
        </>
    )
};

export default BirthdayContainer;
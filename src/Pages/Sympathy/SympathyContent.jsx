import { useState } from "react";
import useAllFlowers from "../../api/useAllFlowers";
import { Link } from "react-router-dom";
import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";
import DataLoading from "../../Share/Loading/DataLoading";
import NoFoundData from "../../components/NoFoundData";
import FlowerAddToCart from "../../components/FlowerAddToCart/FlowerAddToCart";

const SympathyContent = () => {
    const [cartAdd, setCartAdd] = useState(false);
    const [flowerAll, refetch, isLoading] = useAllFlowers();
    const sympathyAll = flowerAll.filter(sympathy => sympathy.flowerCategory === "sympathy");
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <>
            {
                sympathyAll?.length > 0 ?
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-5 ">
                        {
                            sympathyAll.map(sympathy =>
                                <div key={sympathy?._id} className="w-full md:h-[470px] h-[300px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                    <Link to={`/flowerDetails/${sympathy?._id}`} className="">
                                        <img src={sympathy?.flowerImg} loading='lazy' alt="flower sympathy" className="w-full md:h-80 object-cover hover:scale-105 duration-200 transition-all" />
                                        <div className="px-2 pt-2">
                                            <h4 className="text-lg md:font-semibold font-medium leading-tight">{sympathy?.flowerName}</h4>
                                        </div>
                                    </Link>
                                    <div className="flex items-center justify-between p-2">
                                        <p>
                                            {
                                                sympathy?.offerPrice && <span className="md:text-lg text-base md:font-bold font-bold pr-2">{sympathy?.offerPrice}</span>
                                            }
                                            <span className={`md:text-lg text-base md:font-bold font-bold ${sympathy?.offerPrice && "line-through text-red-700"}`}>{sympathy?.price + "$"}</span>
                                        </p>
                                    </div>
                                    <FlowerAddToCart
                                        item={sympathy}
                                    />
                                </div>)
                        }
                    </div>
                    :
                    <NoFoundData />
            }
        </>
    );
};

export default SympathyContent;
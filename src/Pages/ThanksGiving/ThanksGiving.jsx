import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";
import useAllFlowers from "../../api/useAllFlowers";
import bannerImage from "../../assets/disney/disney-banner.webp"
import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import { Link } from "react-router-dom";
import { useState } from "react";
import SortBy from "../Birthday/SortBy";
import DataLoading from "../../Share/Loading/DataLoading";
const ThanksGiving = () => {
    const [cartAdd, setCartAdd] = useState(false);
    const [flowerAll, refetch, isLoading] = useAllFlowers();
    const thankSgiving = flowerAll.filter(thanksGift => thanksGift.flowerCategory === "thanksgiving");
    const totalNumber = thankSgiving.length;
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <>
            <div className="mx-4 pb-10">
                <PageTitleAndDescription
                    path="/thanksgiving-flower"
                    name="Thanksgiving"
                    pageTitle="Thanksgiving Flowers"
                    title="Thanks Gift"
                    borderBG="bg-slate-300"
                    des1="Introducing our newest collection of Disney flowers in beautifully decorated featuring everyone’s favorite classic characters! Mickey, Minnie, Goofy, "
                    textLink1=""
                    linkName1=""
                    des2="and more adorn these vases, bringing the magic of Disney into any home or office."
                    textLink2=""
                    linkName2=""
                    des3=""
                />
            </div>
            <div className="mx-0 md:pb-12 pb-4 border-0 border-b border-slate-400">
                <img src={bannerImage} loading='lazy' alt="banner" />
            </div>

            <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 md:block hidden">

                </div>
                <div className="md:col-span-3 ">
                    <SortBy length={totalNumber}
                    category={thankSgiving}
                    ascending={thankSgiving}
                    />
                </div>
            </div>
            <div className="md:mx-4 mx-1 md:py-5 py-2">
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
                    {
                        thankSgiving.map(thanksGift =>
                            <div key={thanksGift?._id} className="w-full md:h-[420px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                <Link to={`/flowerDetails/${thanksGift?._id}`} className="">
                                    <img src={thanksGift?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 h-full object-cover hover:scale-105 duration-200 transition-all" />
                                    <div className="px-2 pt-1">
                                        <h4 className="text-base md:text-lg font-semibold leading-none">{thanksGift?.flowerName}</h4>
                                    </div>
                                </Link>
                                <div className="flex items-center justify-between px-2 py-1">
                                    <p>
                                        {
                                            thanksGift?.offerPrice && <span className="text-lg font-bold pr-2">{thanksGift?.offerPrice}</span>
                                        }
                                        <span className={`text-lg font-bold ${thanksGift?.offerPrice && "line-through text-red-700"}`}>{thanksGift?.price + "$"}</span>
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
            </div>
        </>
    );
};

export default ThanksGiving;
import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import bannerImage from "../../assets/disney/disney-banner.webp"
import { Link } from "react-router-dom";
import { useState } from "react";
import useAllFlowers from "../../api/useAllFlowers";
import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";
import DataLoading from "../../Share/Loading/DataLoading";

const Disney = () => {
    const [cartAdd, setCartAdd] = useState(false);
    const [flowerAll, refetch, isLoading] = useAllFlowers();
    const birthDays = flowerAll.filter(birthDay => birthDay.flowerCategory === "disney");
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <>
            <div className="mx-4 pb-10">
                <PageTitleAndDescription
                    path="/disney"
                    name="Disney Flowers"
                    pageTitle="Bouquets & Arrangements"
                    title="Disney Flowers"
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
            <div className="md:mx-4 mx-1 md:py-5 py-2">
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
                    {
                        birthDays.map(birthDay =>
                            <div key={birthDay?._id} className="w-full md:h-[420px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                <Link to={`/flowerDetails/${birthDay?._id}`} className="">
                                    <img src={birthDay?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 h-full object-cover hover:scale-105 duration-200 transition-all" />
                                    <div className="px-2 pt-1">
                                        <h4 className="text-base md:text-lg font-semibold leading-none">{birthDay?.flowerName}</h4>
                                    </div>
                                </Link>
                                <div className="flex items-center justify-between px-2 py-1">
                                    <p>
                                        {
                                            birthDay?.offerPrice && <span className="text-lg font-bold pr-2">{birthDay?.offerPrice}</span>
                                        }
                                        <span className={`text-lg font-bold ${birthDay?.offerPrice && "line-through text-red-700"}`}>{birthDay?.price + "$"}</span>
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

export default Disney;
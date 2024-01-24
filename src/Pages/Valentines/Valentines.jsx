import { useState } from "react";
import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import SortBy from "../Birthday/SortBy";
import useAllFlowers from "../../api/useAllFlowers";
import { Link } from "react-router-dom";
import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";

const Valentines = () => {
    const [cartAdd, setCartAdd] = useState(false);
    const [flowerAll] = useAllFlowers();
    const valentines = flowerAll.filter(valentine => valentine.flowerCategory === "valentines");
    const totalNumber = valentines.length;
    console.log(valentines);
    return (
        <>
            <div className="mx-4 pb-10">
                <PageTitleAndDescription
                    path="/valentineDay-flower"
                    name="valentineDay"
                    pageTitle="valentineDay Flowers"
                    title="ValentineDay Flower"
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
            <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 md:block hidden">

                </div>
                <div className="md:col-span-3 ">
                    <SortBy length={totalNumber}
                        category={valentines}
                        ascending={valentines}
                    />
                </div>
            </div>
            <div className="md:mx-4 mx-1 md:py-5 py-2">
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
                    {
                        valentines.map(valentine =>
                            <div key={valentine?._id} className="w-full md:h-[420px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                <Link to={`/flowerDetails/${valentine?._id}`} className="">
                                    <img src={valentine?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 h-full object-cover hover:scale-105 duration-200 transition-all" />
                                    <div className="px-2 pt-1">
                                        <h4 className="text-base md:text-lg font-semibold leading-none">{valentine?.flowerName}</h4>
                                    </div>
                                </Link>
                                <div className="flex items-center justify-between px-2 py-1">
                                    <p>
                                        {
                                            valentine?.offerPrice && <span className="text-lg font-bold pr-2">{valentine?.offerPrice}</span>
                                        }
                                        <span className={`text-lg font-bold ${valentine?.offerPrice && "line-through text-red-700"}`}>{valentine?.price + "$"}</span>
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

export default Valentines;
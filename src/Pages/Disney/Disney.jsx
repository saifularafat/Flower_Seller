import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import bannerImage from "../../assets/disney/disney-banner.webp"
import { Link } from "react-router-dom";
import useAllFlowers from "../../api/useAllFlowers";
import DataLoading from "../../Share/Loading/DataLoading";
import NoFoundData from "../../components/NoFoundData";
import FlowerAddToCart from "../../components/FlowerAddToCart/FlowerAddToCart";

const Disney = () => {
    const [flowerAll, refetch, isLoading] = useAllFlowers();
    const disneyAll = flowerAll.filter(disney => disney.flowerCategory === "disney");
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <>
            <div className="mx-4 md:pb-10">
                <PageTitleAndDescription
                    path="/disney-flower"
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
                {
                    disneyAll?.length > 0 ?
                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
                            {
                                disneyAll.map(disney =>
                                    <div key={disney?._id} className="w-full md:h-[470px] h-[300px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                        <Link to={`/flowerDetails/${disney?._id}`} className="">
                                            <img src={disney?.flowerImg} loading='lazy' alt="flowerdisney" className="w-full md:h-80 object-cover hover:scale-105 duration-200 transition-all" />
                                            <div className="px-2 pt-2">
                                                <h4 className="text-lg md:font-semibold font-medium leading-tight">{disney?.flowerName}</h4>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-between px-2 py-1">
                                            <p>
                                                {
                                                    disney?.offerPrice && <span className="md:text-lg text-base md:font-bold font-bold pr-2">{disney?.offerPrice}</span>
                                                }
                                                <span className={`md:text-lg text-base md:font-bold font-bold ${disney?.offerPrice && "line-through text-red-700"}`}>{disney?.price + "$"}</span>
                                            </p>
                                        </div>
                                        <FlowerAddToCart
                                        item={disney}
                                    />
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

export default Disney;
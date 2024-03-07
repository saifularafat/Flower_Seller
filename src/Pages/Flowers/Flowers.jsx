import { Link } from "react-router-dom";
import SortBy from "../Birthday/SortBy";
import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import { Helmet } from "react-helmet-async";
import DataLoading from "../../Share/Loading/DataLoading";
import useAllFlowers from "../../api/useAllFlowers";
import bannerImage from "../../assets/othersImg/flowerBanner.webp"
import NoFoundData from "../../components/NoFoundData";
import FlowerAddToCart from "../../components/FlowerAddToCart/FlowerAddToCart";


const Flowers = () => {
    const [flowerAll, , isLoading] = useAllFlowers();
    const flowers = flowerAll.filter(flower => flower.flowerCategory === "flower");
    const totalNumber = flowers?.length;
    console.log(totalNumber);
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <>
            <div className="mx-4 md:pb-10">
                <Helmet>
                    <title> Thanks Flower || Flower Shop </title>
                </Helmet>
                <PageTitleAndDescription
                    path="/flowers-6t9"
                    name="Flowers"
                    pageTitle="Flowers "
                    title="Flowers"
                    borderBG="bg-slate-300"
                    des1="Introducing our newest collection of flowers in beautifully decorated featuring everyone’s favorite classic characters! Mickey, Minnie, Goofy, "
                    textLink1=""
                    linkName1=""
                    des2="and more adorn these vases, bringing the magic of into any home or office."
                    textLink2=""
                    linkName2=""
                    des3=""
                />
            </div>
            <div className="mx-0 md:pb-12 pb-4 border-0 border-b border-slate-400">
                <img src={bannerImage} loading='lazy' alt="banner" className="w-full h-[280px] object-cover" />
            </div>

            <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 md:block hidden">

                </div>
                <div className="md:col-span-3 pr-2">
                    <SortBy length={totalNumber}
                        category={flowers}
                        ascending={flowers}
                    />
                </div>
            </div>
            <div className="md:mx-4 mx-1 md:py-5 py-2">
                {
                    totalNumber > 0 ?
                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
                            {
                                flowers.map(flower =>
                                    <div key={flower?._id} className="w-full md:h-[480px] h-[300px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                        <Link to={`/flowerDetails/${flower?._id}`} className="">
                                            <img src={flower?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 object-cover hover:scale-105 duration-200 transition-all" />
                                            <div className="px-2 pt-2">
                                                <h4 className="text-lg md:font-semibold font-medium leading-tight">{flower?.flowerName}</h4>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-between px-2 py-1">
                                            <p>
                                                {
                                                    flower?.offerPrice && <span className="md:text-lg text-base md:font-bold font-bold pr-2">{flower?.offerPrice}</span>
                                                }
                                                <span className={`md:text-lg text-base md:font-bold font-bold ${flower?.offerPrice && "line-through text-red-700"}`}>{flower?.price + "$"}</span>
                                            </p>
                                        </div>
                                        <FlowerAddToCart
                                        item={flower}
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

export default Flowers;
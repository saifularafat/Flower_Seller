import LeftFilter from "../Birthday/LeftFilter";
import { Helmet } from "react-helmet-async";
import OfferTitle from "../../components/OfferTitle";
import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import SortBy from "../Birthday/SortBy";
import SympathyContent from "./SympathyContent";
import useAllFlowers from "../../api/useAllFlowers";

const Sympathy = () => {
    const [flowerAll] = useAllFlowers();
    const sympathyAll = flowerAll.filter(sympathy => sympathy.flowerCategory === "sympathy");
    return (

        <div className=" mx-4 py-2">
            <Helmet>
                <title>Flower Shop || Sympathy </title>
            </Helmet>
            <OfferTitle />
            <PageTitleAndDescription
                path="/sympathy-flower"
                name="Sympathy"
                pageTitle="Sympathy"
                title="Sympathy"
                borderBG="bg-slate-900"
                des1="Our wide selection of flowers and gifts, from hand-arranged flowers to gourmet fruit baskets, provide a tasteful means to express your deepest condolences."
                textLink1=""
                linkName1=""
                des2="Appropriate to send to the home or office, "
                textLink2=""
                linkName2=""
                des3=" each gift includes your personal sympathy message."
            />
            <div className="grid md:grid-cols-8 gap-5 md:mt-4">
                <div className="col-span-2 md:pt-10">
                    <LeftFilter />
                </div>
                <div className="col-span-6">
                    <SortBy length={sympathyAll?.length}/>
                    <div className="">
                        <SympathyContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sympathy;
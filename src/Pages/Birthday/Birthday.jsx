import { Helmet } from "react-helmet-async";
import OfferTitle from "../../components/OfferTitle";
import PageTitleAndDescription from "../../components/PageTitleAndDescription";
import BirthdayContainer from "./BirthdayContainer";
import LeftFilter from "./LeftFilter";

const Birthday = () => {
    return (
        <div className=" mx-4 pb-10 pt-2">
            <Helmet>
                <title>Flower Shop || Birthday </title>
            </Helmet>
            <OfferTitle />
            <PageTitleAndDescription
                path="/birthday-flower"
                name="Birthday"
                pageTitle="Birthday Flower"
                title="Happy Birthday Flowers"
                borderBG="bg-slate-400"
                des1="Our birthday flowers include fresh roses, daisies, and more! Whether your happy birthday flower delivery is sent to home or office, Need your birthday flowers today? "
                textLink1="birthday-flower"
                linkName1="same-day-birthday-delivery"
                des2="is available! With"
                textLink2="birthday-flower"
                linkName2="same-day-birthday-delivery"
                des3=" on orders placed by 2PM, no one has to know whether you ordered weeks ago or this morning. "
            />
            <div className="grid grid-cols-8 gap-5 mt-4">
                <div className="col-span-2 md:pt-10">
                    <LeftFilter />
                </div>
                <div className="col-span-6">
                    <div className="">
                        <BirthdayContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Birthday;
import OfferTitle from "../../components/OfferTitle";
import PageTitleAndDescription from "../../components/PageTitleAndDescription";

const Birthday = () => {
    return (
        <div className="">
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
        </div>
    );
};

export default Birthday;
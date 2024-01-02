import { Link } from "react-router-dom";
import useBestOffer from "../api/useBestOffer";

const OfferTitle = () => {
    const [bestOffer] = useBestOffer();
    return (
        <div className="bg-slate-50 py-2 text-center">
            {
                bestOffer.map(best => 
                <Link key={best?._id} to={best?.topBestOfferLink} className="text-center md:font-semibold font-medium md:text-lg text-xs text-slate-400 uppercase">
                {best?.topBestOffer}
            </Link>)
            }
        </div>
    );
};

export default OfferTitle;
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const BestOfferEdit = () => {
    const navigate = useNavigate()
    const bestOffer = useLoaderData();
    console.log(bestOffer);
    const { _id, topBestOffer, topBestOfferLink } = bestOffer;
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const { topBestOffer, topBestOfferLink } = data;
        const updateData = {
            topBestOffer,
            topBestOfferLink
        };
        axios.patch(`${import.meta.env.VITE_API_URL}/offerText/${_id}`, updateData)
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Best Offer UPdate Complete',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate("/dashboard/bestOffer")
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label">
                        <span className="label-text text-lg  font-semibold">Top Best Offer</span>
                    </label>
                    <textarea cols={30} rows={15}
                        type="text"
                        defaultValue={topBestOffer}
                        placeholder="Please Type On The Best Offer Text"
                        {...register("topBestOffer")}
                        className="input input-bordered w-full text-base pt-1"
                    />
                    <label className="label">
                        <span className="label-text text-lg  font-semibold">Best Offer Link</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={topBestOfferLink}
                        placeholder="Please Provide The Best Offer Link"
                        {...register("topBestOfferLink")}
                        className="input input-bordered w-full text-base"
                    />
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                            Best Offer
                            <GiFlowerPot className=" w-12 h-9 text-slate-100" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BestOfferEdit;
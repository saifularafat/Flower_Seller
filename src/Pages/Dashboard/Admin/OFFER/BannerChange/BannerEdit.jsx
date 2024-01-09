import axios from "axios";
import { useForm } from "react-hook-form";
import { GiTwirlyFlower } from "react-icons/gi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BannerEdit = () => {
    const edit = useLoaderData();
    const { _id, bannerLink, } = edit;
    const navigate = useNavigate()

    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = (data) => {
        const { bannerLink } = data;
        const updateData = {
            bannerLink
        }
        console.log(updateData);
        axios.patch(`${import.meta.env.VITE_API_URL}/bannerImage/${_id}`, updateData)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Best Offer UPdate Complete',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate("/dashboard/bannerChanges")
            })
    }

    return (
        <div>
            <h3 className="text-center text-xl font-semibold text-slate-700 capitalize py-3 ">{edit?.category}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <input
                    {...register("bannerImage")}
                    type="file"
                    className="file-input file-input-bordered w-full" disabled />
                <input
                    {...register("bannerLink")}
                    type="text"
                    defaultValue={bannerLink}
                    placeholder="Please Provide the Banner Link"
                    className="file-input file-input-bordered w-full px-4" />
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Edit Banner
                        <GiTwirlyFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BannerEdit;
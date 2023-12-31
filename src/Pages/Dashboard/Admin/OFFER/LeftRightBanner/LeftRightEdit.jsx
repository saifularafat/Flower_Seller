import axios from "axios";
import { useForm } from "react-hook-form";
import { LuFlower2 } from "react-icons/lu";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LeftRightEdit = () => {
    const LREdit = useLoaderData();
    const { _id, leftRightContent, leftRightLink, category } = LREdit;

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const { leftRightContent, leftRightLink } = data;
        const updateInfo = {
            leftRightContent,
            leftRightLink
        }
        axios.patch(`http://localhost:4000/leftRightImage/${_id}`, updateInfo)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'L. R. Banner update Complete',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate("/dashboard/leftRightBanner")
            })
    }
    return (
        <div>
            <h3 className="text-center text-xl font-semibold text-slate-700 capitalize">{category}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text text-xl  font-semibold"> Image </span>
                </label>
                <input
                    type="file"
                    disabled
                    className="file-input file-input-bordered w-full " />
                <label className="label">
                    <span className="label-text text-xl  font-semibold">Left Right Content</span>
                </label>
                <input
                    {...register("leftRightContent")}
                    defaultValue={leftRightContent}
                    type="text"
                    placeholder="Please type Any Text"
                    className="file-input file-input-bordered w-full px-4" />

                <label className="label">
                    <span className="label-text text-xl  font-semibold">Left Right Link </span>
                </label>
                <input
                    {...register("leftRightLink", { required: true })}
                    type="text"
                    defaultValue={leftRightLink}
                    placeholder="Please type Any Text"
                    className="file-input file-input-bordered w-full px-4" />
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Left One
                        <LuFlower2 className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LeftRightEdit;
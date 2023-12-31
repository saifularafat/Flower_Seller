import axios from "axios";
import { useForm } from "react-hook-form";
import { LuFlower2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LeftRightTwo = () => {
    const navigate = useNavigate();
    const { register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        const imageUrl = data.leftRightImage[0];
        const formData = new FormData();
        formData.append('image', imageUrl)
        fetch(hosting_image_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imgURL = imageData.data.display_url;
                const { LeftRightSerial, leftRightContent,leftRightLink, category } = data;
                const leftRightBanner = {
                    leftRightImage: imgURL,
                    LeftRightSerial,
                    leftRightContent,
                    leftRightLink,
                    category
                }
                console.log(leftRightBanner);
                axios.post(`http://localhost:4000/leftRightImage`, leftRightBanner)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: ' Left Right Banner successfully add',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        navigate("/dashboard/leftRightBanner")
                    })
            })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text text-xl  font-semibold">Right Image One *</span>
                    </label>
                    <input
                        {...register("leftRightImage", { required: true })}
                        type="file"
                        className="file-input file-input-bordered w-full " />
                    {errors.leftRightImage?.type === "required" && (
                        <p className="text-red-600 text-sm">Right Image is required</p>
                    )}

                    <label className="label">
                        <span className="label-text text-xl  font-semibold">Right Content One *</span>
                    </label>
                    <input
                        {...register("leftRightContent", { required: true })}
                        type="text"
                        placeholder="Please type Any Text"
                        className="file-input file-input-bordered w-full px-4" />
                    {errors.leftRightContent?.type === "required" && (
                        <p className="text-red-600 text-sm">Right Content is required</p>
                    )}
                    <label className="label">
                        <span className="label-text text-xl  font-semibold">Right Link *</span>
                    </label>
                    <input
                        {...register("leftRightLink", { required: true })}
                        type="text"
                        placeholder="Please type Any Text"
                        className="file-input file-input-bordered w-full px-4" />
                    {errors.leftRightLink?.type === "required" && (
                        <p className="text-red-600 text-sm">Right Link is required</p>
                    )}
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="Left Right Serial Two"
                        {...register("LeftRightSerial")}
                        className="hidden"
                    />
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="rightOne"
                        {...register("category")}
                        className="hidden"
                    />
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                            Right One
                            <LuFlower2 className=" w-12 h-9 file-slate-100" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeftRightTwo;
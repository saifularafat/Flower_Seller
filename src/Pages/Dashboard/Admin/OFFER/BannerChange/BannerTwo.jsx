import axios from "axios";
import { useForm } from "react-hook-form";
import { GiTwirlyFlower } from "react-icons/gi";
import Swal from "sweetalert2";

const BannerTwo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        const imgUrl = data.bannerTwo[0];
        const formData = new FormData();
        formData.append("image", imgUrl)
        fetch(hosting_image_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imageURL = imageData.data.display_url;
                const { bannerSerialTwo, bannerTwoLink, category } = data;
                const bannerOneInfo = {
                    bannerTwo: imageURL,
                    bannerTwoLink,
                    bannerSerialTwo,
                    category
                }
                axios.post(`http://localhost:4000/bannerImage`, bannerOneInfo)
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Banner Image Upload Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-file file-lg  font-semibold">Banner Two</span>
                </label>
                <input
                    {...register("bannerTwo", { required: true })}
                    type="file"
                    className="file-input file-input-bordered w-full " />
                {errors.bannerTwo?.type === "required" && (
                    <p className="text-red-600 text-sm">Banner Image is required</p>
                )}
                <label className="label">
                    <span className="label-file file-lg  font-semibold">Banner One in Link</span>
                </label>
                <input
                    {...register("bannerTwoLink", { required: true })}
                    type="text"
                    placeholder="Please Provide the Banner Link"
                    className="file-input file-input-bordered w-full px-4" />
                {errors.bannerTwoLink?.type === "required" && (
                    <p className="text-red-600 text-sm">Banner Link is required</p>
                )}
                <input
                    type="text"
                    placeholder=""
                    defaultValue="Banner Serial One"
                    {...register("bannerSerialTwo")}
                    className="hidden"
                />
                <input
                    type="text"
                    placeholder=""
                    defaultValue="bannerTwo"
                    {...register("category")}
                    className="hidden"
                />
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Banner Two
                        <GiTwirlyFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BannerTwo;
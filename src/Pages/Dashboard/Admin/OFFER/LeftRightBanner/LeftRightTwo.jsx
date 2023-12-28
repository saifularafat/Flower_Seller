import axios from "axios";
import { useForm } from "react-hook-form";
import { LuFlower2 } from "react-icons/lu";
import Swal from "sweetalert2";

const LeftRightTwo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        const imgUrl = data.rightOneImage[0];
        const formData = new FormData();
        formData.append("image", imgUrl);
        fetch(hosting_image_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imgURL = imageData.data.display_url;
                const { LeftRightSerialTwo, rightOneContent, category } = data;
                const rightInfo = {
                    rightOneImage: imgURL,
                    LeftRightSerialTwo,
                    rightOneContent,
                    category
                }
                axios.post(`http://localhost:4000/leftRightImage`, rightInfo)
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "banner upload successfully",
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Right One</span>
                    </label>
                    <input
                        {...register("rightOneImage", { required: true })}
                        type="file"
                        className="file-input file-input-bordered w-full " />
                    {errors.rightOneImage?.type === "required" && (
                        <p className="text-red-600 text-sm">Right Image is required</p>
                    )}
                    
                    <label className="label">
                        <span className="label-text text-xl  font-semibold">Right Content One *</span>
                    </label>
                    <input
                        {...register("rightOneContent", { required: true })}
                        type="text"
                        placeholder="Please type Any Text"
                        className="file-input file-input-bordered w-full px-4" />
                    {errors.rightOneContent?.type === "required" && (
                        <p className="text-red-600 text-sm">Right Content is required</p>
                    )}
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="Left Right Serial Two"
                        {...register("LeftRightSerialTwo")}
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
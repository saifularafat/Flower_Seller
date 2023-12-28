import axios from "axios";
import { useForm } from "react-hook-form";
import { GiTwirlyFlower } from "react-icons/gi";
import Swal from "sweetalert2";

const LeftRightThree = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        const imgUrl = data.leftTwoImage[0];
        const formData = new FormData();
        formData.append("image", imgUrl)
        fetch(hosting_image_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imageURL = imageData.data.display_url;
                const { LeftRightSerialThree, leftTwoContent, category } = data;
                const leftTwoInfo = {
                    leftTwoImage: imageURL,
                    LeftRightSerialThree,
                    leftTwoContent,
                    category
                }
                axios.post(`http://localhost:4000/leftRightImage`, leftTwoInfo)
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Left Two Upload Successfully",
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
                        <span className="label-file file-lg  font-semibold">Left Two</span>
                    </label>
                    <input
                        {...register("leftTwoImage", { required: true })}
                        type="file"
                        className="file-input file-input-bordered w-full " />
                    {errors.leftTwoImage?.type === "required" && (
                        <p className="text-red-600 text-sm">Left Image is required</p>
                    )}
                  

                    <label className="label">
                        <span className="label-text text-xl  font-semibold">Left Content Two *</span>
                    </label>
                    <input
                        {...register("leftTwoContent", { required: true })}
                        type="text"
                        placeholder="Please type Any Text"
                        className="file-input file-input-bordered w-full px-4" />
                    {errors.leftTwoContent?.type === "required" && (
                        <p className="text-red-600 text-sm">Left Content is required</p>
                    )}
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="Left Right Serial Three"
                        {...register("LeftRightSerialThree")}
                        className="hidden"
                    />
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="leftTwo"
                        {...register("category")}
                        className="hidden"
                    />
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                            Left Two
                            <GiTwirlyFlower className=" w-12 h-9 file-slate-100" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeftRightThree;
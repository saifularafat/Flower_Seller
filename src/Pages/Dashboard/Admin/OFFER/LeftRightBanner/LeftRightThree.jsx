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
                const { LeftRightSerialThree } = data;
                const leftTwoInfo = {
                    leftTwoImage: imageURL,
                    LeftRightSerialThree
                }
                axios.post(`http://localhost:4000/leftRightImage`, leftTwoInfo)
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position:"top-center",
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
                        type="file"
                        placeholder=""
                        defaultValue=""
                        {...register("leftTwoImage", { required: true })}
                        className="input input-bordered w-full file-base pt-1"
                    />
                    {errors.leftTwoImage?.type === "required" && (
                        <p className="text-red-600 text-sm">Left Image is required</p>
                    )}
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="Left Right Serial Three"
                        {...register("LeftRightSerialThree")}
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
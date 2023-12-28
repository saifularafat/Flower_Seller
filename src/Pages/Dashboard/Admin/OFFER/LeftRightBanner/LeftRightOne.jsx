import axios from "axios";
import { useForm } from "react-hook-form";
import { LuFlower2 } from "react-icons/lu";
import Swal from "sweetalert2";

const LeftRightOne = () => {
    const { register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        const imageUrl = data.leftOneImage[0];
        const formData = new FormData();
        formData.append('image', imageUrl)
        fetch(hosting_image_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imgURL = imageData.data.display_url;
                const { LeftRightSerialOne } = data;
                const leftRightBanner = {
                    leftOneImage: imgURL,
                    LeftRightSerialOne
                }
                console.log(leftRightBanner);
                axios.post(`http://localhost:4000/leftRightImage`, leftRightBanner)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: ' banner successfully add',
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
                        <span className="label-text text-xl  font-semibold">Left  One *</span>
                    </label>
                    <input
                        {...register("leftOneImage", { required: true })}
                        type="file"
                        className="file-input file-input-bordered w-full " />
                    {errors.leftOneImage?.type === "required" && (
                        <p className="text-red-600 text-sm">Left Image is required</p>
                    )}
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="Left Right Serial One"
                        {...register("LeftRightSerialOne")}
                        className="hidden"
                    />
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                            Left One
                            <LuFlower2 className=" w-12 h-9 file-slate-100" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeftRightOne;
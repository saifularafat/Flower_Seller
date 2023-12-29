import axios from "axios";
import { useForm } from "react-hook-form";
import { GiTwirlyFlower } from "react-icons/gi";
import Swal from "sweetalert2";

const SliderThreePost = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        const imgUrl = data.sliderThree[0];
        const formData = new FormData();
        formData.append("image", imgUrl)
        fetch(hosting_image_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imageURL = imageData.data.display_url;
                const { sliderSerialThree, category } = data;
                const sliderThreeInfo = {
                    sliderThree: imageURL,
                    sliderSerialThree,
                    category
                }
                axios.post(`http://localhost:4000/sliderImage`, sliderThreeInfo)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Slider Image Upload Successfully",
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
                    <span className="label-file file-lg  font-semibold">Slider Three</span>
                </label>
                <input
                    type="file"
                    placeholder=""
                    defaultValue=""
                    {...register("sliderThree", { required: true })}
                    className="file-input file-input-bordered w-full "
                />
                {errors.sliderThree?.type === "required" && (
                    <p className="text-red-600 text-sm">Slider Image is required</p>
                )}
                <input
                    type="text"
                    placeholder=""
                    defaultValue="Slider Serial Three"
                    {...register("sliderSerialThree")}
                    className="hidden"
                />
                <input
                    type="text"
                    placeholder=""
                    defaultValue="sliderThree"
                    {...register("category")}
                    className="hidden"
                />
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Slider Three
                        <GiTwirlyFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SliderThreePost;
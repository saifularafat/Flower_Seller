import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";
import DashboardTitle from "../../../../components/DashboardTitle";
import axios from "axios";
import Swal from "sweetalert2";

const AddItem = () => {
    const { register,
        formState: { errors },
        handleSubmit,
        reset } = useForm();

    const hosting_image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`
    const onSubmit = (data) => {
        console.log("first data", data);
        const imageUrl = data.flowerImage[0];
        const formData = new FormData();
        formData.append('image', imageUrl)
        fetch(hosting_image_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imgURL = imageData.data.display_url;
                const { flowerName, flowerNav, price, category, offerPrice,flowerDetails, percent } = data;
                const createFlower = {
                    flowerName,
                    flowerNav,
                    price: parseFloat(price),
                    flowerCategory: category,
                    offerPrice,
                    percent,
                    flowerImg: imgURL,
                    flowerDetails
                }
                console.log("update data", createFlower);
                axios.post(`${import.meta.env.VITE_API_URL}/flowersAll`, createFlower)
                    .then(data => {
                        console.log("post data", data.data);
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'New flower added!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })
    }
    return (
        <div className="px-2">
            <Helmet>
                <title> Flower Shop || Add Item</title>
            </Helmet>
            <DashboardTitle borderColor=" border-slate-800" borderStyle="border-dashed" borderWidth="md:w-1/5" textColor=" text-slate-600" Icon={GiFlowerPot} title="Add A Items"></DashboardTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className=" bg-[#F3F3F3] px-4 rounded-md">
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Name"
                                {...register("flowerName", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                            {errors.flowerName?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower Name is required</p>
                            )}
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Price*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Price"
                                {...register("price", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                            {errors.price?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower Price is required</p>
                            )}
                        </div>
                    </div>
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Offer Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Offer Price"
                                {...register("offerPrice", { maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Percent</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price Percent"
                                {...register("percent", { maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                        </div>

                    </div>
                    <div className="md:flex items-center mt-3 space-x-3">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text md:text-xl text-xl font-semibold">Flower Recipient</span>
                            </label>
                            <select {...register("recipient")}
                                className="input input-bordered text-base w-full pl-2">
                                <option value="" selected></option>
                                <option value="mom">Mom</option>
                                <option value="her">Her</option>
                                <option value="bestFriend">Best Friend</option>
                                <option value="love">love</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                                <option value="client">Client</option>
                                <option value="employee">Employee</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text md:text-xl text-xl font-semibold">Flower Color</span>
                            </label>
                            <select {...register("color")}
                                className="input input-bordered text-base w-full pl-2">
                                <option value="" selected></option>
                                <option value="red">Red</option>
                                <option value="purple">Purple</option>
                                <option value="white">white</option>
                                <option value="black">Black</option>
                                <option value="pink">Pink</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text md:text-xl text-xl font-semibold">Flower Category*</span>
                            </label>
                            <select {...register("category", { required: true })}
                                className="input input-bordered text-base w-full pl-2">
                                <option value="" selected></option>
                                <option value="flower">Flower</option>
                                <option value="birthday">Birthday</option>
                                <option value="thanksgiving">Thanksgiving</option>
                                <option value="IndependenceDay">IndependenceDay</option>
                                <option value="disney">disney</option>
                                <option value="occasions">Occasions</option>
                                <option value="sympathy">Sympathy</option>
                                <option value="plants">Plants</option>
                                <option value="giftsMore">Gifts & More</option>
                                <option value="sale">Sale</option>
                                <option value="community">Community</option>
                                <option value="chocolate">Chocolate</option>
                                <option value="baby">BabyGift</option>
                                <option value="lave">Love</option>
                                <option value="valentinesDay">ValentinesDay</option>
                            </select>
                            {errors.category?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower category is required</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl  font-semibold">Item Image *</span>
                            </label>
                            <input
                                {...register("flowerImage", { required: true })}
                                type="file"
                                className="file-input file-input-bordered w-full " />
                            {errors.flowerImage?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower Image is required</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl  font-semibold">Details *</span>
                            </label>
                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="3"
                                placeholder="Please Type The Flower Description"
                                {...register("flowerDetails")}
                                className="border border-slate-300 rounded-md overflow-hidden w-full p-2"
                            >

                            </textarea>
                            {errors.flowerDetails?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower Description is required</p>
                            )}
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                            Add Item
                            <GiFlowerPot className=" w-12 h-9 text-slate-100" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddItem;
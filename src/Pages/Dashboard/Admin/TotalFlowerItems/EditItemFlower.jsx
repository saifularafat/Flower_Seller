import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditItemFlower = () => {
    const editFlower = useLoaderData();
    const { _id, flowerImg, flowerName, color,recipient, price, flowerCategory } = editFlower;

    const navigate = useNavigate();

    const { register,
        handleSubmit
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const { flowerName, price, offerPrice, percent, color,recipient, flowerCategory, flowerImg } = data;
        const upDateFlower = {
            flowerName,
            price,
            percent,
            offerPrice,
            color,
            recipient,
            flowerImg,
            flowerCategory
        }
        axios.patch(`${import.meta.env.VITE_API_URL}/flowersAll/${_id}`, upDateFlower)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Flower UpDate successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate("/dashboard/totalFlowerItems")
            })
    }
    return (
        <div className="px-2">
            <Helmet>
                <title> Flower Shop || {editFlower?.flowerName}</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className=" bg-[#F3F3F3] px-4 rounded-md">
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Name"
                                defaultValue={flowerName}
                                {...register("flowerName")}
                                className="input input-bordered w-full text-base"
                            />

                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Price*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Price"
                                defaultValue={price}
                                {...register("price")}
                                className="input input-bordered w-full text-base"
                            />

                        </div>
                    </div>
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Offer Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Offer Price"
                                defaultValue={editFlower?.offerPrice}
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
                                defaultValue={editFlower?.percent}
                                {...register("percent")}
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
                                <option value={recipient} selected>{recipient}</option>
                                <option value="mom">Mom</option>
                                <option value="her">Her</option>
                                <option value="bestFriend">Best Friend</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                                <option value="client">Client</option>
                                <option value="employee">Employee</option>
                                <option value="lover">Lover</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text md:text-xl text-xl font-semibold">Flower Color</span>
                            </label>
                            <select {...register("color")}
                                className="input input-bordered text-base w-full pl-2">
                                <option value={color} selected>{color}</option>
                                <option value="red">Red</option>
                                <option value="purple">Purple</option>
                                <option value="white">white</option>
                                <option value="pink">Pink</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text md:text-3xl text-xl font-semibold">Flower Category*</span>
                            </label>
                            <select {...register("flowerCategory")}
                                className="input input-bordered  text-xl w-full pl-2">
                                <option value={flowerCategory} selected>{flowerCategory}</option>
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
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl  font-semibold">Item Image <br /> <span className="text-sm text-red-700">Please Provide The Image Link</span></span>
                            </label>
                            <input
                                {...register("flowerImg")}
                                defaultValue={flowerImg}
                                className="file-input file-input-bordered w-full px-4" />

                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                            {editFlower?.flowerName}
                            <GiFlowerPot className=" w-12 h-9 text-slate-100" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditItemFlower;
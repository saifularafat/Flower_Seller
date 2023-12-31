import axios from "axios";
import { useForm } from "react-hook-form";
import { GiLotusFlower } from "react-icons/gi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FooterEdit = () => {
    const navigate = useNavigate()
    const ftEdit = useLoaderData();
    const {
        _id, ftName1, ftUrl1, ftName2, ftUrl2, ftName3, ftUrl3, ftName4, ftUrl4, ftName5, ftUrl5,
        ftName6, ftUrl6, ftName7, ftUrl7, ftName8, ftUrl8, category, footerSocket, developerURL
    } = ftEdit;
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        const {
            ftName1, ftUrl1, ftName2, ftUrl2, ftName3, ftUrl3, ftName4, ftUrl4, ftName5, ftUrl5,
            ftName6, ftUrl6, ftName7, ftUrl7, ftName8, ftUrl8, category, footerSocket, developerURL
        } = data;
        const upDateInfo = {
            ftName1, ftUrl1, ftName2, ftUrl2, ftName3, ftUrl3, ftName4, ftUrl4, ftName5, ftUrl5,
            ftName6, ftUrl6, ftName7, ftUrl7, ftName8, ftUrl8, category, footerSocket, developerURL
        }
        axios.patch(`http://localhost:4000/footerChange/${_id}`, upDateInfo)
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Footer Edit Complete',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                Navigate("/dashboard/footerChange")
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* WAY SHOP is SECTION START*/}
                <div className="wayToShop bg-slate-300 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">{category}</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName1}
                            {...register("ftName1")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl1}
                            {...register("ftUrl1")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName2}
                            {...register("ftName2")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl2}
                            {...register("ftUrl2")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName3}
                            {...register("ftName3")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl3}
                            {...register("ftUrl3")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName4}
                            {...register("ftName4")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl4}
                            {...register("ftUrl4")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName5}
                            {...register("ftName5")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl5}
                            {...register("ftUrl5")}
                            className="input input-5ordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName6}
                            {...register("ftName6")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl6}
                            {...register("ftUrl6")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName7}
                            {...register("ftName7")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl7}
                            {...register("ftUrl7")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            defaultValue={ftName8}
                            {...register("ftName8")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            defaultValue={ftUrl8}
                            {...register("ftUrl8")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                <div className="bg-violet-300 p-3 mt-2 rounded-md">
                    <label className="label ">
                        <span className="label-text text-lg  font-semibold uppercase">Footer Socket</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            defaultValue={footerSocket}
                            placeholder="Text Footer Socket"
                            {...register("footerSocket")}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            defaultValue={developerURL}
                            placeholder="developer url"
                            {...register("developerURL")}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Footer Edit
                        <GiLotusFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
                {/* WAY SHOP is SECTION  END*/}
            </form>
        </div >
    );
};

export default FooterEdit;
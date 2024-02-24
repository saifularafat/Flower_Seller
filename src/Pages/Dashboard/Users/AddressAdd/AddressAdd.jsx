import { Helmet } from "react-helmet-async";
import { useAxiosSecure } from "../../../../api/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../api/useAuth";
import DataLoading from "../../../../Share/Loading/DataLoading";
import Swal from "sweetalert2";

const AddressAdd = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();


    const {
        data: info,
        refetch,
        isLoading
    } = useQuery({
        queryKey: ['profile_Info', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user?.email}`)
            return res.data
        }
    })
    console.log(info);

    const onSubmitData = event => {
        event.preventDefault()
        const form = event.target
        const phoneNumber = form.phoneNumber.value
        const address = form.address.value
        const gender = ''
        const data = {
            name: name ? name : info?.name,
            address: address ? address : info?.address,
            phoneNumber: phoneNumber ? phoneNumber : info?.phoneNumber,
            gender: gender ? '' : info?.gender,
        }
        console.log(data);

        axiosSecure
            .patch(`/updateProfile?email=${user?.email}`, data)
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount) {
                    refetch()
                    console.log("updated", data);
                    Swal.fire({
                        showConfirmButton: false,
                        timer: 1500,
                        title: 'Update Successfull',
                        icon: 'success'
                    })
                }
                navigate("/dashboard/profile")
            })

    }

    if (isLoading) {
        return <DataLoading />
    }
    return (
        <div>
            <Helmet>
                <title>Flower Shop || Address Add</title>
            </Helmet>
            <div className='navigation-bar2 md:mx-20'>
                <div className='card  mx-auto'>
                    <div className='card-body'>
                        <form
                            onSubmit={onSubmitData}
                            className=''
                        >
                            <div className='form-control grid grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Address:</span>
                                </label>
                                <input
                                    defaultValue={info?.address}
                                    placeholder={info?.address ? info?.address : "Please Your Address!"}
                                    name='address'
                                    className='col-span-5 input input-sm  border-primary  shadow-md'
                                />
                            </div>
                            <div className='form-control grid  grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Mobile:</span>
                                </label>
                                <input
                                    defaultValue={info?.phoneNumber}
                                    placeholder={info?.phoneNumber ? info?.phoneNumber : "Please Your Phone Number!"}
                                    className='col-span-5 input input-sm  border-primary  shadow-md'
                                    name='phoneNumber'
                                />
                            </div>
                            <div className='form-control mt-6'>
                                <input
                                    type='submit'
                                    className='btn w-1/2 mx-auto btn-primary'
                                    value='Update Profile'
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressAdd;
import { useAxiosSecure } from '../../../../api/useAxiosSecure';
import useAuth from '../../../../api/useAuth';
import defaultPic from '../../../../assets/othersImg/userPro.png';
import Loading from '../../../components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    const img_token = import.meta.env.VITE_IMG_UPLOAD_KEY
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`

    const { user, loading, updateUserInfo } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {
        data: info,
        refetch,
        isLoading: p_loading
    } = useQuery({
        queryKey: ['profile_Info', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user?.email}`)
            //console.log(res);
            return res.data
        }
    })
    console.log(info,'.......................lne 29');

    const onSubmitData = event => {
        event.preventDefault()

        const form = event.target
        const batch = form.batch.value
        const mobile = form.mobile.value
        const address = form.address.value
        const gender = form.gender.value
        const data = {
            batch: batch ? batch : info?.batch,
            mobile: mobile ? mobile : info?.mobile,
            address: address ? address : info?.address,
            gender: gender ? gender : info?.gender
        }
        const formData = new FormData()

        formData.append('image', form.image.files[0])
        //console.log(formData);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    Swal.fire({
                        showConfirmButton: false,
                        timer: 1500,
                        title: ' Image Update Successfull',
                        icon: 'success'
                    })

                    updateUserInfo(user.displayName, imgResponse?.data?.display_url)
                }

                const imgURL = imgResponse?.data?.display_url
                const data2 = { photoURL: imgURL ? imgURL : info?.photoURL, ...data }
                //console.log(data2);
                axiosSecure
                    .patch(`/updateProfile?email=${user?.email}`, data2)
                    .then(data => {
                        //console.log(data);
                        if (data.data.modifiedCount) {
                            refetch()
                            //console.log("updated");
                            Swal.fire({
                                showConfirmButton: false,
                                timer: 1500,
                                title: 'Update Successfull',
                                icon: 'success'
                            })
                        }
                    })
            })
    }

    if (p_loading) {
        return <Loading />
    }

    return (
        <div className='navigation-bar2 md:mx-20'>
            <h1 className='text-2xl mt-4  mx-4'>Edit Profile:</h1>
            <div className='card  mx-auto'>
                <div className='card-body'>
                    <form
                        onSubmit={onSubmitData}
                        className='grid md:gap-20 md:grid-cols-2 gap-5 grid-cols-1'
                    >
                        <div className='text-center lg:text-left flex flex-col '>
                            <div className='w-80 mx-auto'>
                                <img
                                    src={info?.image ? info?.image : defaultPic}
                                    className=' border-2 border-primary   rounded-lg mb-2 p-3 '
                                    alt=''
                                />
                                <div className='form-control rounded-lg border-primary  items-center my-5'>
                                    <input
                                        name='image'
                                        type='file'
                                        className='border-primary file-input-primary  col-span-5 file-input w-full   '
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='form-control  grid grid-cols-6 mt-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Name:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm border-primary shadow-md  '>
                                    {info?.name}
                                </h1>
                            </div>

                            <div className='form-control  grid grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Email:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm border-primary  shadow-md'>
                                    {info?.email}
                                </h1>
                            </div>
                           
                            <div className='form-control grid grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Gender:</span>
                                </label>
                                <div className='col-span-5 flex gap-10 items-center space-x-4'>
                                    <label className='radio radio-inline flex gap-2 '>
                                        <input
                                            type='radio'
                                            name='gender'
                                            value='male'
                                            className='radio radio-primary'
                                        />
                                        <span className=' '>Male</span>
                                    </label>
                                    <label className='radio radio-inline flex gap-2'>
                                        <input
                                            type='radio'
                                            name='gender'
                                            value='female'
                                            className='radio radio-primary'
                                        />
                                        <span className=' '>Female</span>
                                    </label>
                                    <label className='radio radio-inline flex gap-2'>
                                        <input
                                            type='radio'
                                            name='gender'
                                            value='others'
                                            className='radio radio-primary'
                                        />
                                        <span className=' '>Others</span>
                                    </label>
                                </div>
                            </div>
                            <div className='form-control grid grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Address:</span>
                                </label>
                                <input
                                    placeholder={info?.address}
                                    name='address'
                                    className='col-span-5 input input-sm  border-primary  shadow-md'
                                />
                            </div>
                            <div className='form-control grid  grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Mobile:</span>
                                </label>
                                <input
                                    placeholder={info?.phoneNumber}
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile

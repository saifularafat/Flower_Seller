import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import defaultPic from '../../../../assets/othersImg/userPro.png';
import useAuth from '../../../../api/useAuth';
import { useAxiosSecure } from '../../../../api/useAxiosSecure';
import DataLoading from '../../../../Share/Loading/DataLoading';


const UserProfile = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
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
    console.log(info)
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <div className='navigation-bar2 container mx-auto md:p-10'>
            <div className='card  mx-auto'>
                <div className='card-body'>
                    <div className='md:flex justify-center md:gap-10 gap-5 items-center'>
                        <div className='text-center lg:text-left flex flex-col '>
                            <img
                                src={info?.image ? info?.image : defaultPic}
                                className=' h-80  border-2   rounded-lg mb-2 p-3 w-80'
                                alt=''
                            />
                        </div>
                        <div>
                            <div className='form-control  grid sm:grid-cols-6 mt-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Name:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm  capitalize shadow-xl'>
                                    {info?.name}
                                </h1>
                            </div>

                            <div className='form-control  grid sm:grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Email:</span>
                                </label>
                                <h1 className='col-span-5 input input-sm lowercase shadow-xl'>
                                    {info?.email}
                                </h1>
                            </div>
                            <div className='form-control  grid sm:grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Gender:</span>
                                </label>
                                <h1 className='col-span-5 input input-sm  capitalize shadow-xl'>
                                    {info?.gender ? info.gender : 'Add Gender in Edit Profile'}
                                </h1>
                            </div>
                            <div className='form-control grid sm:grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Address:</span>
                                </label>
                                <h1 className='col-span-5 input input-sm  capitalize shadow-xl'>
                                    {info?.address ? info.address : 'Add Address in Edit Profile'}
                                </h1>
                            </div>
                            <div className='form-control grid h-auto sm:grid-cols-6 my-2'>
                                <label className='label col-span-1'>
                                    <span className='label-text '>Mobile:</span>
                                </label>
                                <h1 className='col-span-5 input input-sm  capitalize shadow-xl'>
                                    {info?.phoneNumber ? info?.phoneNumber : 'Add Mobile in Edit Profile'}
                                </h1>
                            </div>
                            <Link to='/dashboard/updateProfile'>
                                <button className='btn btn-primary mt-5'>Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAuth from '../../../../api/useAuth';
import { useAxiosSecure } from '../../../../api/useAxiosSecure';
import DataLoading from '../../../../Share/Loading/DataLoading';
import AdminProfile from './AdminProfile';


const UserProfile = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {
        data: info,
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
        <div className="p-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white/40">
            <div className="relative group">
                <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src={info?.image} alt="card navigate ui" />
                <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
            </div>
            <div className="text-center space-y-1">
                <h1 className="text-2xl text-gray-700"> {info?.name}</h1>
                <p className="text-gray-400 text-sm">{info?.email}</p>
            </div>
            <AdminProfile />
            <div>
                <h6 className='p-1 rounded-md capitalize shadow-sm'>
                    Address:  {info?.address ? info?.address : 'Add Address in Edit Profile'}
                </h6>
                <h6 className='p-1 rounded-md capitalize shadow-md'>
                    Phone:  {info?.phoneNumber ? info?.phoneNumber : 'Add Mobile in Edit Profile'}
                </h6>
                <h6 className='p-1 rounded-md capitalize shadow-lg'>
                    Gender:  {info?.gender ? info.gender : 'Add Gender in Edit Profile'}
                </h6>
            </div>
            <Link
                to='/dashboard/updateProfile'
                className="hover:bg-[#0095FF] text-center tracking-wider hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500"
            >
                Edit Profile
            </Link>
        </div>
    )
}

export default UserProfile

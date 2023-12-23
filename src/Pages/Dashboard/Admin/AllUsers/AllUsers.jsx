import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { PiFlowerLotusBold } from "react-icons/pi";
import useAllUsers from "../../../../api/useAllUser";

const AllUsers = () => {
    const [users, refetch] = useAllUsers();
    console.log(users);
    return (
        <>
            <Helmet>
                <title> Flower Shop || All Users</title>
            </Helmet>
            <DashboardTitle borderColor=" border-slate-900" borderStyle="border-dashed" borderWidth="md:w-1/5" textColor=" text-slate-600" Icon={PiFlowerLotusBold} title="All Users"></DashboardTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) =>
                            <tbody key={user._id}>
                                <tr className="hover:bg-slate-200 transition-all duration-200">
                                    <th>{index + 1}</th>
                                    <td className="text-sm">{user?.name}</td>
                                    <td className="text-sm">{user?.email}</td>
                                    <td className="text-sm">{user?.gender}</td>
                                </tr>
                            </tbody>
                        )
                    }
            </table>
        </div >
        </>
    );
};

export default AllUsers;
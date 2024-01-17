import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { PiFlowerLotusBold } from "react-icons/pi";
import useAllUsers from "../../../../api/useAllUser";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const AllUsers = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [users, refetch] = useAllUsers();

    const handlerMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your selected New Admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#173931',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.!'
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user?._id}`, {
                    method: 'PATCH',
                    headers: { authorization: `bearer ${localStorage.getItem('access_token')}` }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            setButtonDisabled(true)
                            Swal.fire(
                                'Admin!',
                                `${user.name} is an Admin Now!!`,
                                'success'
                            )
                        }
                    })

            }
        })
    }

    const handlerDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You user Select by delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/users/admin/${user?._id}`,)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your user is deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
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
                            <th>role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) =>
                            <tbody key={user._id}>
                                <tr className="hover:bg-slate-200 transition-all duration-200">
                                    <th>{index + 1}</th>
                                    <td className="text-sm">{user?.name}</td>
                                    <td className="text-sm">{user?.email}</td>
                                    <td className={`${user?.role === "admin" ? "bg-blue-900 text-white h-2" : "bg-slate-200"} text-sm font-semibold text-center capitalize tracking-wider rounded-xl overflow-hidden`}>{user?.role}</td>
                                    <td className="text-sm">
                                        <td className="flex items-center gap-1">
                                            <button
                                                onClick={() => handlerMakeAdmin(user)}
                                                disabled={isButtonDisabled}
                                                className="bg-blue-800 text-white w-full py-2 rounded-lg shadow-xl">Admin</button>
                                            <button
                                                onClick={() => handlerDelete(user)}
                                                className="bg-red-800 text-white w-full py-2 rounded-lg shadow-xl">Delete</button>
                                        </td>
                                    </td>
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
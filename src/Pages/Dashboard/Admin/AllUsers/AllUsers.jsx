import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { PiFlowerLotusBold } from "react-icons/pi";
import useAllUsers from "../../../../api/useAllUser";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import DataLoading from "../../../../Share/Loading/DataLoading";
import { FaTrashAlt } from "react-icons/fa";
import Pagination from "../../../../components/Pagination";

const AllUsers = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemPerPage] = useState(12);// Number of items to display per page
    const [users, refetch, isLoading] = useAllUsers();

    if (isLoading) {
        return <DataLoading />
    }

    /* Pagination by users  */
    const totalItems = users?.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = users.slice(startIndex, endIndex)
    console.log(displayedData);

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
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {displayedData?.map((user, index) => (
                            <tr key={user._id} title={user?.email}>
                                <td>{index + 1}</td>
                                <td>{user?.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        <button className='btn btn-disabled btn-xs'>Admin</button>
                                    ) : (
                                        <button
                                            onClick={() => handlerMakeAdmin(user)}
                                            className=' bg-warning btn btn-ghost btn-sm'
                                        >
                                            Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handlerDelete(user)}
                                        className='text-white bg-red-700 rounded-md btn-sm'
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
            <div className='flex justify-center my-6'>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Pagination>
            </div>
        </>
    );
};

export default AllUsers;
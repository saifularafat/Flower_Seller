import { Helmet } from "react-helmet-async";
import useAllFlowers from "../../../../api/useAllFlowers";
import { Link } from "react-router-dom";
import DashboardTitle from "../../../../components/DashboardTitle";
import { GiFlowers } from "react-icons/gi";
import axios from "axios";
import Swal from "sweetalert2";


const TotalFlowerItems = () => {
    const [flowerAll, refetch] = useAllFlowers();
    console.log(flowerAll);
    const itemDelete = (flower) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Select flower Delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log("Click is Done!", result);
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/flowersAll/${flower?._id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Flower has been Deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Flower Shop || Total Flowers</title>
            </Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dotted" borderWidth=" w-3/12" Icon={GiFlowers} textColor="" title="Total Flowers " />
            <h2 className="text-xl font-bold py-4 text-right">Total Flower {flowerAll?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Flower</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        flowerAll.map((flower, index) =>
                            <tbody key={flower._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={flower?.flowerImg} alt="flower" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <div>
                                        <div className="font-bold">{flower?.flowerName}</div>
                                        <div className="text-sm opacity-50">{flower?.recipient}</div>
                                    </div>
                                    <td><span className="text-base font-medium">{flower?.flowerCategory}</span> <br />
                                    <span className="text-xs">{flower?.color}</span></td>
                                    <th>
                                        <p className="btn-sm">{flower?.price}$</p>
                                    </th>
                                    <div className="flex item-center gap-2 pt-4">
                                        <Link to={`/dashboard/editByFlowers/${flower?._id}`} className="rounded-md py-1 hover:bg-blue-300 hover:text-slate-950 bg-green-400 text-white btn-sm transition-all duration-200 tracking-wider font-semibold">Edit</Link>
                                        <button onClick={() => itemDelete(flower)} className="rounded-md py-1 hover:bg-red-300 hover:text-slate-950 bg-red-600 text-slate-700 btn-sm transition-all duration-200 tracking-wider font-semibold">Delate</button>
                                    </div>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default TotalFlowerItems;
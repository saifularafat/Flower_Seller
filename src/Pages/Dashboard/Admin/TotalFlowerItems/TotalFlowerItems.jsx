import { Helmet } from "react-helmet-async";
import useAllFlowers from "../../../../api/useAllFlowers";
import { Link } from "react-router-dom";
import DashboardTitle from "../../../../components/DashboardTitle";
import { GiFlowers } from "react-icons/gi";


const TotalFlowerItems = () => {
    const [flowerAll, refetch] = useAllFlowers();
    console.log(flowerAll);
    return (
        <div>
            <Helmet>
                <title>Flower Shop || Total Flowers</title>
            </Helmet>
            <DashboardTitle  borderColor="border-slate-600" borderStyle=" border-dotted" borderWidth=" w-3/12" Icon={GiFlowers} textColor="" title="Total Flowers "/>
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
                                        <div className="text-sm opacity-50">{flower?.flowerNav}</div>
                                    </div>
                                    <td>{flower?.flowerCategory}</td>
                                    <th>
                                        <p className="btn-sm">{flower?.price}$</p>
                                    </th>
                                    <div className="flex item-center gap-2  pt-2">
                                        <div> <Link to='' className="rounded-md py-1 hover:bg-blue-300 hover:text-slate-950 bg-green-400 text-white btn-sm transition-all duration-200 tracking-wider font-semibold">Edit</Link></div>
                                        <div> <Link to='' className="rounded-md py-1 hover:bg-red-300 hover:text-slate-950 bg-red-600 text-slate-700 font-semibold btn-sm transition-all duration-200">Delate</Link></div>
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
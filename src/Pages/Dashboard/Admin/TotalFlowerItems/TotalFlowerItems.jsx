import useAllFlowers from "../../../../api/useAllFlowers";
import { Link } from "react-router-dom";

const TotalFlowerItems = () => {
    const [flowerAll] = useAllFlowers();
    console.log(flowerAll);
    return (
        <div>
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
                                        <div> <Link to='' className="rounded-md py-1 bg-green-400 text-white btn-sm">Edit</Link></div>
                                        <div> <Link to='' className=" btn-sm">Delate</Link></div>
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
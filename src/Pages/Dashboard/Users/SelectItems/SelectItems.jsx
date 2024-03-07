import { Helmet } from "react-helmet-async";
import useBookMarlFlower from "../../../../api/useBookMarlFlower";
import { Link } from "react-router-dom";

const SelectItems = () => {
    const [bookMark, refetch] = useBookMarlFlower();
    console.log(bookMark);

    return (
        <div>
            <Helmet>
                <title>Flower Shop || Select Items </title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-2">
                    <thead>
                        <tr className="bg-[#4f97cb] text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Flower Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Flower Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookMark.map(item =>
                                <tr key={item?._id} className="hover:bg-gray-50 border-b transition duration-300">
                                    <td className="py-4 px-4 flex justify-start">
                                        <img src={item?.flowerImg} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                    </td>
                                    <td className="py-4 px-6 border-b text-xl font-medium">{item?.flowerName}</td>
                                    <td className="py-4 px-6 border-b text-lg font-medium">
                                        {
                                            item?.offerPrice ?
                                                <span>{item?.offerPrice + "$"}</span>
                                                :
                                                <>
                                                    {item?.price + "$"}
                                                </>

                                        }
                                    </td>
                                    <td className="py-4 px-6 border-b text-end">
                                        <Link to={`/paymentOption/${item?._id}`}>
                                            <button className="text-xl relative w-16 h-9 bg-sky-700 text-white border-y-4 duration-500 overflow-hidden border-sky-950 z-50 group">Pay
                                                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">PAY</span>
                                                <span className="bg-sky-950 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                                                <span className="bg-sky-950 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-sky-950 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectItems;
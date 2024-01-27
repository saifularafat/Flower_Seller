import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    const flowerAll = useLoaderData();
    const [flowerSingle, setFlowerSingle] = useState(flowerAll);
    const [searchText, setSearchText] = useState("");
    const [showTheDiv, setShowTheDiv] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [searchShow, setSearchShow] = useState(false);

    const handelSearch = () => {
        fetch(`${import.meta.env.VITE_API_URL}/searchFiledFlower/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setFlowerSingle(data);
            });
    };

    const handleInputField = () => {
        setClickCount(prevCount => prevCount + 1);
        setShowTheDiv(clickCount % 2 === 0);
    };

    const handleClickItem = (itemId) => {
        setSelectedItemId(itemId === selectedItemId ? null : itemId);
    };

    return (
        <>
            <div className="md:w-10/12 mx-auto flex items-center w-full relative">
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={handleInputField}
                    placeholder="please search your flower!"
                    className="md:block hidden w-full md:px-3 md:py-2 border-2 border-slate-200 rounded-l-md outline-none"
                />
                <button
                    onClick={handelSearch}
                    className="md:block hidden bg-blue-900 text-white md:py-2 md:px-4 border-2 border-blue-900 rounded-r-md">Search
                </button>
                <div>
                    <IoSearchOutline onClick={() => setSearchShow(!searchShow)} className="text-3xl text-white" />
                </div>
            </div>
            {/* Mobile Device */}
            {
                searchShow && 
                // Array.isArray(flowerSingle) && flowerSingle.length > 0 && showTheDiv && (
                    <div className="absolute top-10 left-0 w-full bg-slate-100 z-50">
                        <p>this search Button</p>
                    </div>
                // )
            }
            {/* Desktop device  */}
            {
                Array.isArray(flowerSingle) && flowerSingle.length > 0 && showTheDiv && (
                    <div className="absolute top-full mt-[10px] bg-slate-100 shadow-2xl z-50 p-2">
                        <div className="grid md:grid-cols-6 grid-cols-3 gap-1">
                            {flowerSingle.map(flowers => (
                                <div key={flowers?._id} onClick={() => handleClickItem(flowers?._id)}>
                                    {/* {selectedItemId === flowers?._id && ( */}
                                    <Link to={`/flowerDetails/${flowers?._id}`} className="">
                                        <div className=" py-1 w-full hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                                            <img src={flowers?.flowerImg} loading='lazy' alt="flower" className="w-16 h-16 mx-auto object-cover hover:scale-105 duration-200 transition-all" />
                                            <div className="px-1 pt-1">
                                                <h4 className="text-sm font-medium leading-tight">{flowers?.flowerName}</h4>
                                            </div>
                                            <div className="flex items-center justify-between p-1">
                                                <p>
                                                    {flowers?.offerPrice && <span className="text-xs font-medium pr-2">{flowers?.offerPrice}</span>}
                                                    <span className={`text-xs font-medium ${flowers?.offerPrice && "line-through text-red-700"}`}>{flowers?.price + "$"}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                    {/* )} */}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Search;

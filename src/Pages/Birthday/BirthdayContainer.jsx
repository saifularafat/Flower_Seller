import { Link } from "react-router-dom";
import useAllFlowers from "../../api/useAllFlowers";
import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";
import { useState } from "react";
const BirthdayContainer = () => {
    const [cartAdd, setCartAdd] = useState(false);
    const [flowerAll] = useAllFlowers();
    const birthDays = flowerAll.filter(birthDay => birthDay.flowerCategory === "birthday");

    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 ">
            {
                birthDays.map(birthDay =>
                    <div key={birthDay?._id} className="w-full md:h-[400px] hover:shadow-xl transition-all duration-200 rounded overflow-hidden">
                        <Link to={`/flowerDetails/${birthDay?._id}`} className="">
                            <img src={birthDay?.flowerImg} loading='lazy' alt="flowerBirthday" className="w-full md:h-80 h-full object-cover hover:scale-105 duration-200 transition-all" />
                            <div className="px-2 pt-2">
                                <h4 className="text-base font-semibold leading-tight">{birthDay?.flowerName}</h4>
                            </div>
                        </Link>
                        <div className="flex items-center justify-between p-2">
                            <p>
                                {
                                    birthDay?.offerPrice && <span className="text-lg font-bold pr-2">{birthDay?.offerPrice}</span>
                                }
                                <span className={`text-lg font-bold ${birthDay?.offerPrice && "line-through text-red-700"}`}>{birthDay?.price + "$"}</span>
                            </p>

                            <div onClick={() => setCartAdd(!cartAdd)}>
                                {
                                    cartAdd ?
                                        <IoFlowerSharp onClick={() => setCartAdd(true)} />
                                        :
                                        <IoFlowerOutline onClick={() => setCartAdd(false)} />
                                }
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
};

export default BirthdayContainer;
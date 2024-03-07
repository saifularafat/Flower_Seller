import { MdAddShoppingCart } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../api/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useBookMarlFlower from "../../api/useBookMarlFlower";

const FlowerAddToCart = ({ item }) => {
    const [, refetch] = useBookMarlFlower();

    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const { _id, flowerImg, flowerName, price, percent, offerPrice } = item;

    const handlerFlowerBookMark = (item) => {
        if (user) {
            const BookFlower = {
                flowerBookMarkId: _id,
                flowerImg,
                flowerName,
                price: parseFloat(price),
                percent,
                offerPrice,
                email: user?.email,
            };
            axios.post(`${import.meta.env.VITE_API_URL}/bookmarkFlower`, BookFlower)
                .then(res => {
                    console.log("..............69", res.data);
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Flower Add to the Card',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Add the Flower.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="flex items-center md:justify-center justify-between flex-wrap md:gap-2 text-sm md:text-base pt-2">
            <button className="text-sm md:px-5 px-2 md:py-2 py-1 rounded-md bg-sky-600 text-white relative overflow-hidden group z-10">
                <Link to={`/paymentOption/${_id}`}>
                    <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-700 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span><span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Pay</span>Pay
                </Link>
            </button>
            <button
                onClick={() => handlerFlowerBookMark(item)}
                className="text-sm md:px-3 px-2 md:py-2 py-1 rounded-md bg-sky-600 text-white relative overflow-hidden group">
                <span className="pr-5 md:block hidden">Add To Cart</span>
                <span className="pr-5 block md:hidden">Add Cart</span>
                <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center hover:rounded-md group-hover:duration-300 group-hover:w-full w-7 duration-300">
                    <MdAddShoppingCart className="text-2xl " />
                </span>
            </button>

        </div>
    );
};

export default FlowerAddToCart;
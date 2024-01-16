import { IoFlowerOutline, IoFlowerSharp } from "react-icons/io5";

const CartAdd = ({ addCart, setAddCart, setAddCartTrue, setAddCartFalse }) => {
    return (
        <div onClick={() => setAddCart(!addCart)}>
            {
                addCart ?
                    <IoFlowerSharp onClick={() => setAddCartTrue(true)} />
                    :
                    <IoFlowerOutline onClick={() => setAddCartFalse(false)} />
            }
        </div>
    );
};

export default CartAdd;
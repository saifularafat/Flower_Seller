import { useLoaderData } from "react-router-dom";

const EditItemFlower = () => {
    const editFlower = useLoaderData();
    console.log(editFlower);
    return (
        <div>
            <h1>{editFlower?._id}</h1>
            <h4>This Edit One Items Flower</h4>
        </div>
    );
};

export default EditItemFlower;
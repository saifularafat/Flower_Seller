import { useParams } from "react-router-dom";
import useAllFlowers from "../../api/useAllFlowers";

const FlowerDetails = () => {
    const { id } = useParams();
    const [flowerAll] = useAllFlowers();
    const singleFlower = flowerAll.find(flower => flower._id === id);
    // const { flowerImg } = singleFlower;
    console.log(id, "full Details =>", singleFlower);
    return (
        <div className="grid md:grid-cols-5 grid-cols-3 gap-3 py-6">
            <div className="md:col-span-2 col-span-1">
                <div className=" md:flex items-center rounded-lg overflow-hidden">
                    <div className="w-1/5 md:block hidden">

                    </div>
                    <img src={singleFlower?.flowerImg} alt="" className="w-full mx-auto rounded-lg object-cover hover:scale-105 transition-all duration-200" />
                </div>
                {
                    singleFlower?.FlowerDetails &&
                    <p>{singleFlower?.FlowerDetails}</p>
                }
            </div>
            <div className="md:col-span-3 col-span-2 rounded-lg">
                <h2 className="text-2xl font-semibold">{singleFlower?.flowerName}</h2>
                <table>

                </table>
            </div>
        </div>
    );
};

export default FlowerDetails;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBestOffer = () => {
    const { data: bestOffer = [], refetch } = useQuery({
        queryKey: ["bestOffer"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/offerText`)
            return res.data
        }
    })
    return [bestOffer, refetch]
};

export default useBestOffer;
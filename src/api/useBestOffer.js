import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBestOffer = () => {
    const { data: bestOffer = [], refetch,isLoading } = useQuery({
        queryKey: ["bestOffer"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/offerText`)
            return res.data
        }
    })
    return [bestOffer, refetch,isLoading]
};

export default useBestOffer;
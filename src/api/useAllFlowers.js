import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllFlowers = () => {
    const { data: flowerAll = [], refetch } = useQuery({
        queryKey: ["flowerAll"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/flowersAll`)
            return res.data;
        }
    })
    return [flowerAll, refetch]
};

export default useAllFlowers;
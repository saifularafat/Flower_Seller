import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllFlowers = () => {
    const { data: flowerAll = [], refetch } = useQuery({
        queryKey: ["flowerAll"],
        queryFn: async () => {
            // const res = await axios.get(`${import.meta.env.LOCAL_API_URL}/flowersAll`)
            const res = await axios.get('http://localhost:4000/flowersAll');
            return res.data;
        }
    })
    return [flowerAll, refetch]
};

export default useAllFlowers;
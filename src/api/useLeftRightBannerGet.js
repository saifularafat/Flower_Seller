import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLeftRightBannerGet = () => {
    const { data: leftRightBGet = [], refetch } = useQuery({
        queryKey: ["leftRightBGet"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/leftRightImage`)
            return res.data
        }
    })
    return [leftRightBGet, refetch]
};

export default useLeftRightBannerGet;
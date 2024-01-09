import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBannerGet = () => {
    const {data: banners = [], refetch} = useQuery({
        queryKey: ["banners"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/bannerImage`)
            return res.data
        }
    })
    return [banners, refetch]
};

export default useBannerGet;
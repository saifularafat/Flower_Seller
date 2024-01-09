import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSliderGet = () => {
    const { data: sliders = [], refetch } = useQuery({
        queryKey: ["sliders"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/sliderImage`)
            return res.data
        }
    })
    return [sliders, refetch]
};

export default useSliderGet;
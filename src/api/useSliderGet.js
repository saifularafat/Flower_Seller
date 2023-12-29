import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSliderGet = () => {
    const { data: sliders = [], refetch } = useQuery({
        queryKey: ["sliders"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:4000/sliderImage`)
            return res.data
        }
    })
    return [sliders, refetch]
};

export default useSliderGet;
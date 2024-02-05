import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTotalPaymentData = () => {
    const { data: totalPayment = [], refetch, isLoading } = useQuery({
        queryKey: ["totalPayment"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/payments`)
            return res.data
        }
    })
    return [totalPayment, refetch, isLoading]
};

export default useTotalPaymentData;
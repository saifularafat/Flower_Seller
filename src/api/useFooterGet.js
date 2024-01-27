import { useQuery } from "@tanstack/react-query"
import axios from "axios"

 const footerChange = () => {
    const { data: footerGet = [], refetch,isLoading } = useQuery({
        queryKey: ["footerGet"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/footerChange`)
            return res.data;
        }
    })
    return [footerGet, refetch,isLoading]
}
export default footerChange
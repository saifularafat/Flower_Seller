import { useQuery } from "@tanstack/react-query"
import axios from "axios"

 const footerChange = () => {
    const { data: footerGet = [], refetch } = useQuery({
        queryKey: ["footerGet"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:4000/footerChange`)
            return res.data;
        }
    })
    return [footerGet, refetch]
}
export default footerChange
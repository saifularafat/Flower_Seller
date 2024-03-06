import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useBookMarlFlower = () => {
    const { user } = useAuth()
    const { data: bookMark = [], refetch } = useQuery({
        queryKey: ["bookMark", user?.email],
        queryFn: async () => {
            const data = await fetch(`${import.meta.env.VITE_API_URL}/bookmarkFlower?email=${user?.email}`)
            return data.json()
        }
    })
    return [bookMark, refetch]
};

export default useBookMarlFlower;
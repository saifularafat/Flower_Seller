import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useEmailAdmin = () => {
    const { data: email = [], refetch } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allEmail`)
            return res.data;
        },
    });
    return [email, refetch];
};


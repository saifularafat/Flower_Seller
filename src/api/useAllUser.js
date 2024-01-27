import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const allUsers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
            return res.data;
        },
    });
    return [users, refetch, isLoading];
};

export default allUsers;
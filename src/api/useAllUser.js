import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const allUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:4000/users');
            return res.data;
        },
    });
    return [users, refetch];
};

export default allUsers;
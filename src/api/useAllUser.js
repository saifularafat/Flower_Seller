import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axios.get(`${import.meta.env.LOCAL_API_URL}/users`);
        return res.json();
    })
    return [users, refetch]
}
export default useAllUsers;
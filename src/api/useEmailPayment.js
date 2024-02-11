import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const userEmailToPayment = () => {
    const { user } = useAuth();
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const data = await fetch(`${import.meta.env.VITE_API_URL}/payment/user?email=${user?.email}`)
            return data.json();
        }
    })
    return [payments, refetch]
}

export default userEmailToPayment;
import { OrderListResponseDto } from "@/types/orders.types";
import Axios from "@/axios.config";
import { useQuery } from "@tanstack/react-query";

const getMyOrders = async (): Promise<OrderListResponseDto> => {
  const { data } = await Axios.get("orders/me");
  return data;
};

const useGetMyOrders = () =>
  useQuery({
    queryKey: ["get-my-orders"],
    queryFn: getMyOrders,
  });

export default useGetMyOrders;

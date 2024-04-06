import { CreateOrderRequestDto } from "@/types/orders.types";
import { MutationSuccessResponseDto } from "@/types";
import Axios from "@/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createOrder = async (
  payload: CreateOrderRequestDto,
): Promise<MutationSuccessResponseDto> => {
  const { data } = await Axios.post("orders", payload);
  return data;
};

const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-order"],
    mutationFn: createOrder,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["get-my-orders"],
      });
    },
  });
};

export default useCreateOrder;

import { PaymentTypeListResponseDto } from "@/types/payment-types.types";
import Axios from "@/axios.config";
import { useQuery } from "@tanstack/react-query";

const getPaymentTypes = async (): Promise<PaymentTypeListResponseDto> => {
  const { data } = await Axios.get("payment-types");
  return data;
};

const useGetPaymentTypes = () =>
  useQuery({
    queryKey: ["get-payment-types"],
    queryFn: getPaymentTypes,
  });

export default useGetPaymentTypes;

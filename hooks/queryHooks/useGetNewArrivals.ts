import { NewArrivalListResponseDto } from "@/types/products.types";
import Axios from "@/axios.config";
import { useQuery } from "@tanstack/react-query";

const getNewArrivals = async (): Promise<NewArrivalListResponseDto> => {
  const { data } = await Axios.get("/products/new-arrivals");
  return data;
};

const useGetNewArrivals = () =>
  useQuery({
    queryKey: ["get-new-arrivals"],
    queryFn: getNewArrivals,
  });

export default useGetNewArrivals;

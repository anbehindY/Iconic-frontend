import { GetCollectionsResponseDto } from "@/types/collections.types";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/axios.config";

const getAllCollections = async (): Promise<GetCollectionsResponseDto> => {
  const { data } = await Axios.get("product-types/details");
  return data;
};

const useGetAllCollections = () =>
  useQuery({
    queryKey: ["get-all-collections"],
    queryFn: getAllCollections,
  });

export default useGetAllCollections;

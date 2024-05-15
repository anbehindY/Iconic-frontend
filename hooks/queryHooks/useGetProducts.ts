import { ProductListResponseDto } from "@/types/products.types";
import Axios from "@/axios.config";
import { useQuery } from "@tanstack/react-query";

const getProducts = async (
  collection?: string,
): Promise<ProductListResponseDto> => {
  const { data } = await Axios.get("products/all", {
    params: collection && { productType: collection },
  });
  return data;
};

const useGetProducts = (collection?: string) =>
  useQuery({
    queryKey: ["get-all-products", collection],
    queryFn: getProducts.bind(null, collection),
  });

export default useGetProducts;

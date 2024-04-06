import { ProductDetailResponseDto } from "@/types/products.types";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/axios.config";

const getProductDetails = async (
  productId: string,
): Promise<ProductDetailResponseDto> => {
  const { data } = await Axios.get(`products/details/${productId}`);

  return data;
};

const useGetProductDetails = (productId: string) =>
  useQuery({
    queryKey: ["get-product-details", productId],
    queryFn: getProductDetails.bind(null, productId),
  });

export default useGetProductDetails;

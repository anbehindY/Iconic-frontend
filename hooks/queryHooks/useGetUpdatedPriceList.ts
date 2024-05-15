import { ProductVariantPriceListResponseDto } from "@/types/products.types";
import Axios from "@/axios.config";
import { useQuery } from "@tanstack/react-query";

const getUpdatedPriceList =
  async (): Promise<ProductVariantPriceListResponseDto> => {
    const { data } = await Axios.get("/product-variants");

    return data;
  };

const useGetUpdatedPriceList = () =>
  useQuery({
    queryKey: ["product-variants-price"],
    queryFn: getUpdatedPriceList,
  });

export default useGetUpdatedPriceList;

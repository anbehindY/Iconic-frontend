import { ResponseDto } from "@/types/index";

export type ProductImageDto = {
  color: string;
  colorCode: string;
  imageId: string;
};

export type NewArrivalProduct = {
  id: string;
  product: {
    id: string;
    name: string;
    productType: {
      id: string;
      name: string;
    };
    images: ProductImageDto[];
  };
  color: string;
  processor: string;
  ram: string;
  storage: string;
  price: number;
};

export type NewArrivalListResponseDto = ResponseDto<NewArrivalProduct[]>;

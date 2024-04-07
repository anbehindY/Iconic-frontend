import { ResponseDto } from "@/types/index";

export type ProductImageDto = {
  color: string;
  colorCode: string;
  imageId: string;
};

export type ProductFAQDto = {
  id: string;
  question: string;
  answer: string;
};

export type ProductVariantAvailabilityDto = {
  id: string;
  branch: {
    id: string;
    name: string;
  };
  quantity: number;
};

export type ProductVariantDto = {
  id: string;
  color: string;
  processor: string;
  ram: string;
  storage: string;
  price: number;
  inStock: number;
  availability: ProductVariantAvailabilityDto[];
};

export type NewArrivalProductVariantDto = {
  id: string;
  product: {
    id: string;
    name: string;
    productType: {
      id: string;
      name: string;
    };
  };
  image: ProductImageDto;
  color: string;
  processor: string;
  ram: string;
  storage: string;
  price: number;
};

export type ProductDto = {
  id: string;
  name: string;
  productType: {
    id: string;
    name: string;
  };
  keyFeatures: string[];
  images: ProductImageDto[];
  processors: string[];
  rams: string[];
  storages: string[];
  createdAt: string;
  createdBy: string;
  updatedAt?: string;
  updatedBy?: string;
};

export type ProductDetailsDto = {
  id: string;
  name: string;
  productType: {
    id: string;
    name: string;
  };
  keyFeatures: string[];
  images: ProductImageDto[];
  processors: string[];
  rams: string[];
  storages: string[];
  createdAt: "2024-04-05T13:26:55.574Z";
  faqs: ProductFAQDto[];
  variants: ProductVariantDto[];
};

export type ProductDetailResponseDto = ResponseDto<ProductDetailsDto>;

export type NewArrivalListResponseDto = ResponseDto<
  NewArrivalProductVariantDto[]
>;

export type ProductListResponseDto = ResponseDto<ProductDto[]>;

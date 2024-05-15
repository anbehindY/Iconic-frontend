import { ResponseDto } from "@/types/index";

export type CollectionDto = {
  id: string;
  name: string;
  products: {
    id: string;
    name: string;
  }[];
};

export type GetCollectionsResponseDto = ResponseDto<CollectionDto[]>;

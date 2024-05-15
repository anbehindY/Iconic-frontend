import { ResponseDto } from "@/types/index";

export type PaymentTypeDto = {
  id: string;
  name: string;
  createdAt: string;
  createdBy: string;
  updatedAt?: string;
  updatedBy?: string;
};

export type PaymentTypeListResponseDto = ResponseDto<PaymentTypeDto[]>;

import { OrderStatus, ResponseDto } from "@/types/index";

export type OrderItemRequestDto = {
  productVariantId: string;
  quantity: number;
};

export type OrderItemResponseDto = {
  id: string;
  product: {
    id: string;
    name: string;
    variant: {
      id: string;
      color: string;
      processor: string;
      ram: string;
      storage: string;
    };
  };
  quantity: number;
  price: number;
  createdAt: string;
  subTotal: number;
};

export type CreateOrderRequestDto = {
  paymentType: string;
  orderItems: OrderItemRequestDto[];
};

export type OrderDto = {
  id: string;
  paymentType: string;
  totalAmount: number;
  status: OrderStatus;
  orderItems: OrderItemResponseDto[];
  createdAt: string;
};

export type OrderListResponseDto = ResponseDto<OrderDto[]>;

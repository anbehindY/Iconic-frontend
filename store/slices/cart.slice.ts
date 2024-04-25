import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { ProductImageDto } from "@/types/products.types";

type ProductType = {
  variantId: string;
  quantity: number;
  image?: ProductImageDto;
  name: string;
  price: number;
  storage?: string;
};

type CartStoreType = {
  cartItems: ProductType[];
};

const initialState: CartStoreType = { cartItems: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (
        state.cartItems.some(
          (item) => item.variantId === action.payload.variantId
        )
      ) {
        state.cartItems = state.cartItems.map((item) =>
          item.variantId === action.payload.variantId
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.variantId !== action.payload
      );
    },
    removeAllFromCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;

export const { addToCart, removeFromCart, removeAllFromCart } =
  cartSlice.actions;

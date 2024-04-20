import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

type ProductType = { variantId: string; quantity: number };

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
        (item) => item.variantId !== action.payload.variantId
      );
    },
  },
});

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;

export const { addToCart, removeFromCart } = cartSlice.actions;

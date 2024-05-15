import { configureStore } from "@reduxjs/toolkit";
import { userSlice, cartSlice } from "@/store/slices";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

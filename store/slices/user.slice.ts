import { AuthResponseDto } from "@/types/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

type UserStoreType = AuthResponseDto["payload"];

const initialState: Partial<UserStoreType> = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStoreType>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.memberType = action.payload.memberType;
      state.role = action.payload.role;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.accessToken = action.payload.accessToken;
      state.createdAt = action.payload.createdAt;
    },
    removeUser: (state) => {
      state.id = undefined;
      state.name = undefined;
      state.email = undefined;
      state.memberType = undefined;
      state.role = undefined;
      state.address = undefined;
      state.phone = undefined;
      state.accessToken = undefined;
      state.createdAt = undefined;
    },
  },
});

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;

export const { setUser, removeUser } = userSlice.actions;

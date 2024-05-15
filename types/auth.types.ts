import { ResponseDto } from "@/types/index";

export type AuthSignUpRequestDto = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  address: string;
};

export type AuthSignInRequestDto = {
  username: string;
  password: string;
};

export type AuthResponseDto = ResponseDto<{
  id: string;
  name: string;
  email: string;
  memberType: string;
  role: "customer";
  address: string;
  phone: string;
  accessToken: string;
  createdAt: string;
}>;

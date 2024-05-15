import { AuthResponseDto, AuthSignInRequestDto } from "@/types/auth.types";
import Axios from "@/axios.config";
import { useMutation } from "@tanstack/react-query";

const authSignIn = async (
  payload: AuthSignInRequestDto,
): Promise<AuthResponseDto> => {
  const { data } = await Axios.post("auth/customer/login", payload);
  return data;
};

const useAuthSignIn = () => {
  return useMutation({
    mutationKey: ["auth-sign-in"],
    mutationFn: authSignIn,
  });
};

export default useAuthSignIn;

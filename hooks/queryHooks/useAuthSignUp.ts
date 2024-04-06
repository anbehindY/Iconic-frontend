import { AuthResponseDto, AuthSignUpRequestDto } from "@/types/auth.types";
import Axios from "@/axios.config";
import { useMutation } from "@tanstack/react-query";

const authSignUp = async (
  payload: AuthSignUpRequestDto,
): Promise<AuthResponseDto> => {
  const { data } = await Axios.post("auth/customer/register", payload);
  return data;
};

const useAuthSignUp = () => {
  return useMutation({
    mutationKey: ["auth-sign-up"],
    mutationFn: authSignUp,
  });
};

export default useAuthSignUp;

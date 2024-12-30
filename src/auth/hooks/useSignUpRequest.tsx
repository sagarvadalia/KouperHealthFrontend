import { useMutation } from "@tanstack/react-query"
import { signUpApi } from "../api/signUpApi"
export const useSignUpRequest = () => {
    return useMutation({
        mutationKey: ['signUp'],
        mutationFn: (userName: string) => signUpApi(userName),
    })
  }

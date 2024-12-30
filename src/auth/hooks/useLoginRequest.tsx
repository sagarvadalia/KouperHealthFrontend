import { useMutation } from "@tanstack/react-query"
import { loginApi } from "../api/loginApi"

export const useLoginRequest = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (userName: string) => loginApi(userName),
    })
  }

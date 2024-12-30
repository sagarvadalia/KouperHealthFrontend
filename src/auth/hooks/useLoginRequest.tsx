import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi } from "../api/loginApi"
import { useNavigate } from "react-router"

export const useLoginRequest = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (userName: string) => loginApi(userName),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user'] })
            navigate('/')
        }
    })
  }
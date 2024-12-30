import { useMutation, useQueryClient } from "@tanstack/react-query"
import { signUpApi } from "../api/signUpApi"
import { useNavigate } from 'react-router'

export const useSignUpRequest = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['signUp'],
        mutationFn: (userName: string) => signUpApi(userName),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user'] })
            navigate('/')
        }
    })
}
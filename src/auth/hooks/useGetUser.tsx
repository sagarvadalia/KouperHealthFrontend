import { useQuery } from "@tanstack/react-query"
import { getUserApi } from "../api/getUserApi"

export const useGetUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: getUserApi,
       
  })}
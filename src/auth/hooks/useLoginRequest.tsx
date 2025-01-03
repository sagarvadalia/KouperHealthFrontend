import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../api/loginApi";
import { useNavigate } from "react-router";

export const useLoginRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (userName: string) => loginApi(userName),
    onSuccess: async () => {
      // invalidate the user query
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      // refetch the user query
      await queryClient.refetchQueries({ queryKey: ["user"] });
      // navigate to the home page
      navigate("/");
    },
  });
};

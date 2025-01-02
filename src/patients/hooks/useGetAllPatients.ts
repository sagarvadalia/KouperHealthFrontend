import { useQuery } from "@tanstack/react-query";
import { getAllPatients } from "../api/getAllPatientsApi";

export const useGetAllPatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: getAllPatients,
  });
};

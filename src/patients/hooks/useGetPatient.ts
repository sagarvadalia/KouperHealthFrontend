import { useQuery } from "@tanstack/react-query";
import { getPatientApi } from "../api/getPatientApi";

export const useGetPatient = (id?: string) => {
  return useQuery({
    queryKey: ["patient", id],
    queryFn: () => getPatientApi(id!), // garunteed since enabled checks for id truthiness
    enabled: Boolean(id),
  });
};

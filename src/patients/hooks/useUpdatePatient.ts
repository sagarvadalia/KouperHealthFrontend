import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePatient } from "../api/updatePatientApi";
import { Patient } from "../api/getPatientApi";
export const useUpdatePatient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updatePatient"],
    mutationFn: (patientData: Patient) => updatePatient(patientData),
    onSuccess: async (data) => {
      // invalidate all patient queries in the cache
      await queryClient.invalidateQueries({ queryKey: ["patients"] });
      await queryClient.invalidateQueries({ queryKey: ["patient", data._id] });
    },
  });
};

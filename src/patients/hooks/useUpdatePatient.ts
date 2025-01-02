import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePatient } from "../api/updatePatientApi";
import { Patient } from "../PatientTable";
export const useUpdatePatient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updatePatient"],
    mutationFn: (patientData: Patient) => updatePatient(patientData),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["patients"] });
      await queryClient.invalidateQueries({ queryKey: ["patient", data._id] });
    },
  });
};

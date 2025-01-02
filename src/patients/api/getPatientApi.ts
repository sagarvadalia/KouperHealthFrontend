import { Patient } from "../PatientTable";

export const getPatientApi = async (
  id: string,
): Promise<{ patient: Patient }> => {
  const response = await fetch(`/api/patient/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

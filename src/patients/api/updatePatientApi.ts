import { Patient } from "./getPatientApi";

export const updatePatient = async (patientData: Patient) => {
  const response = await fetch(`/api/patient/${patientData._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientData),
  });
  return response.json();
};

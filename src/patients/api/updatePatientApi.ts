import { Patient } from "../PatientTable";

export const updatePatient = async (patientData: Patient) => {
  console.log(patientData);
  const response = await fetch(`/api/patient/${patientData._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientData),
  });
  return response.json();
};

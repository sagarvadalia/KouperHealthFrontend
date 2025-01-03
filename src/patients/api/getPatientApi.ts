// type pulled from backend
// TODO: add in TRPC so that we can sync types w/ the backend
export type Patient = {
  _id: string;
  name?: string;
  epicId?: string;
  phoneNumber?: string;
  attendingPhysician?: string;
  dischargeDate?: string;
  primaryCareProvider?: string;
  insurance?: string;
  disposition?: string;
  lastModifiedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

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

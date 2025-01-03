import { useParams } from "react-router";
import { useGetPatient } from "./hooks/useGetPatient";
import { Typography } from "@mui/material";

export const PatientView = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPatient(id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { patient } = data!;
//   TODO: build out some valuable patient page
  return (
    <div>
      <Typography variant="h6">Patient Page for {patient?.name}</Typography>
      <Typography variant="body1">Epic ID: {patient?.epicId}</Typography>
      <Typography variant="body1">Phone Number: {patient?.phoneNumber}</Typography>
      <Typography variant="body1">Attending Physician: {patient?.attendingPhysician}</Typography>
      <Typography variant="body1">Discharge Date: {patient?.dischargeDate}</Typography>
      <Typography variant="body1">Primary Care Provider: {patient?.primaryCareProvider}</Typography>
      <Typography variant="body1">Insurance: {patient?.insurance}</Typography>
      <Typography variant="body1">Disposition: {patient?.disposition}</Typography>
    </div>
  );
};

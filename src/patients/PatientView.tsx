import { useParams } from "react-router";
import { useGetPatient } from "./hooks/useGetPatient";

export const PatientView = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPatient(id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { patient } = data!;

  return (
    <div>
      <p>{patient?.name}</p>
    </div>
  );
};

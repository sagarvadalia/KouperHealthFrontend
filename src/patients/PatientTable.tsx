import { useMemo } from "react";
import { useGetAllPatients } from "./hooks/useGetAllPatients";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useUpdatePatient } from "./hooks/useUpdatePatient";
import { Link } from "react-router";
import { Patient } from "./api/getPatientApi";

export const PatientTable = () => {
  const { data, isLoading, error } = useGetAllPatients();
  const { mutate: updatePatient } = useUpdatePatient();
  const columns = useMemo<MRT_ColumnDef<Patient>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        Cell: ({ row }) => (
          <Link to={`/patients/${row.original._id}`}>{row.original.name}</Link>
        ),
      },
      {
        header: "EID",
        accessorKey: "epicId",
      },
      {
        header: "Phone",
        accessorKey: "phoneNumber",
      },
      {
        header: "Attending",
        accessorKey: "attendingPhysician",
      },
      {
        header: "dischargeDate",
        accessorKey: "dischargeDate",
      },
      {
        header: "PCP",
        accessorKey: "primaryCareProvider",
      },
      {
        header: "insurance",
        accessorKey: "insurance",
      },
      {
        header: "disposition",
        accessorKey: "disposition",
      },
      {header: "lastModifiedBy", accessorKey: "lastModifiedBy"}
    ],
    [],
  );

  //pass table options to useMaterialReactTable
  const table = useMaterialReactTable({
    columns,
    data: data?.patients || [], //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableEditing: true,
    enableSorting: true,
    enableTopToolbar: true,
    initialState: {
      density: "compact",
    },
    enablePagination: true,
    onEditingRowSave: ({ exitEditingMode, row, values }) => {
      updatePatient({...values, _id: row.original._id});
      exitEditingMode();
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Patient Table</h1>
      <MaterialReactTable table={table} />;
    </div>
  );
};

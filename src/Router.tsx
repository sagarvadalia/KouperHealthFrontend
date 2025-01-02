import { Routes, Route, Navigate } from "react-router";
import { Login } from "./auth/Login";
import { Signup } from "./auth/Signup";
import { useGetUser } from "./auth/hooks/useGetUser";
import { PDFUpload } from "./fileUpload/PDFUpload";
import { Home } from "./Home";
import { PatientTable } from "./patients/PatientTable";
import { PatientView } from "./patients/PatientView";
import { AppBar, Toolbar, Typography } from "@mui/material";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useGetUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data?.user) {
    return <Navigate to="/login" replace />;
  }
  const { user } = data;
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {user?.userName}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/upload"
        element={
          <ProtectedRoute>
            <PDFUpload />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients"
        element={
          <ProtectedRoute>
            <PatientTable />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patients/:id"
        element={
          <ProtectedRoute>
            <PatientView />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

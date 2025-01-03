import { Routes, Route, Navigate, Link } from "react-router";
import { Login } from "./auth/Login";
import { Signup } from "./auth/Signup";
import { useGetUser } from "./auth/hooks/useGetUser";
import { PDFUpload } from "./fileUpload/PDFUpload";
import { Home } from "./Home";
import { PatientTable } from "./patients/PatientTable";
import { PatientView } from "./patients/PatientView";
import { AppBar, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useGetUser();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data?.user) {
    return <Navigate to="/login" replace />;
  }
  const { user } = data;
  // TODO: add a logout button
  // TODO: add navigation here
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {user?.userName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem>
          <Link to="/upload">Upload PDFs</Link>
          </ListItem>
          <ListItem>
          <Link to="/patients">View Patient Data</Link>
          </ListItem>
        </List>
      </Drawer>
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

import { Routes, Route, Navigate } from "react-router"
import { Login } from "./auth/Login"
import { Signup } from "./auth/Signup"
import { useGetUser } from "./auth/hooks/useGetUser"
import { PDFUpload } from "./fileUpload/PDFUpload"
import { Home } from "./home"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useGetUser()
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>
  console.log(data)
  
  if (!data?.user) {
    return <Navigate to="/login" replace />
  }
  
  return <div>
    
    <h1>Welcome {data.user?.userName}</h1>
    {children}</div>
}

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/" element={
        <ProtectedRoute>
         <Home />
        </ProtectedRoute>
      } />

    <Route path="/upload" element={
        <ProtectedRoute>
          <PDFUpload />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

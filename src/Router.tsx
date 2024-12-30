import { Routes, Route } from "react-router"
import {Login} from "./auth/Login"
import { Signup } from "./auth/Signup"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello World</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

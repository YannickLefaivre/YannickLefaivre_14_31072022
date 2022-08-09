import { Routes, Route } from "react-router-dom"
import CreateEmployee from "../features/create-employee/CreateEmployee"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployee />} index />
    </Routes>
  )
}

export default Router

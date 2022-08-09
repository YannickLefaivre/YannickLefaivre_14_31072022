import { Routes, Route } from "react-router-dom"
import CreateEmployee from "../features/create-employee/CreateEmployee"
import EmployeeList from "../features/employee-list/EmployeeList"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployee />} index />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
  )
}

export default Router

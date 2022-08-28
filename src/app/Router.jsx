import { Routes, Route } from "react-router-dom"
import CreateEmployee from "../features/create-employee/CreateEmployee"
import EmployeeList from "../features/employee-list/EmployeeList"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} index />
      <Route
        path="/create-employee"
        element={<CreateEmployee />}
        index
      />
    </Routes>
  )
}

export default Router

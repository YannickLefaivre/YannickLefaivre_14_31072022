import { useEffect, useMemo, useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  DataTableBase as DataTable,
  FormField,
  SearchBar,
} from "../../common/components"
import * as SearchEngine from "../../common/utils/SearchEngine"
import { Employee, selectEmployee, getEmployees } from "../shared"
import "./EmployeeList.style.css"

const EmployeeList = () => {
  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState(false)

  const dispatch = useDispatch()

  const employee = useSelector(selectEmployee)

  let filteredEmployees = []
  let employeeList = []

  if (employee.data) {
    filteredEmployees = SearchEngine.filterEmployees(
      employee.data,
      filterText
    )

    employeeList = filteredEmployees.map(
      (employeeInfos) => new Employee(employeeInfos)
    )
  }

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText("")
      }
    }

    return (
      <FormField
        label="Search:"
        styleModifier={{
          container: "form-field--data-table-search-bar",
          label: "form-field__label--data-table-search-bar",
        }}
      >
        <SearchBar
          filterText={filterText}
          onFilter={(event) => setFilterText(event.target.value)}
          onClear={handleClear}
        />
      </FormField>
    )
  }, [filterText, resetPaginationToggle])

  useEffect(() => {
    if (employee.data === null) {
      dispatch(getEmployees)
    }
  }, [dispatch, employee.data])

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTable
          data={employeeList}
          defaultSortFieldId={1}
          subHeaderComponent={subHeaderComponentMemo}
          noDataComponent={
            filteredEmployees.length === 0 ? (
              <p>No matching records found</p>
            ) : (
              <p>No records to display</p>
            )
          }
        />
        <NavLink to="/">Home</NavLink>
      </div>
    </>
  )
}

export default EmployeeList

import { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  DataTableBase as DataTable,
  FormField,
  SearchBar,
} from "../../common/components"
import * as SearchEngine from "../../common/utils/SearchEngine"
import { Employee, selectEmployee } from "../shared"
import "./EmployeeList.style.css"

const EmployeeList = () => {
  const employee = useSelector(selectEmployee)

  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState(false)
  const filteredEmployees = SearchEngine.filterEmployees(
    employee,
    filterText
  )

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

  const employeeList = filteredEmployees.map(
    (employeeInfos) => new Employee(employeeInfos)
  )

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

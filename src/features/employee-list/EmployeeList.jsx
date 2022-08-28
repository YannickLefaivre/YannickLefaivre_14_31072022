import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import {
  DataTableBase as DataTable,
  FormField,
  NavigationBar,
  SearchBar,
} from "../../common/components"
import * as SearchEngine from "../../common/utils/SearchEngine"
import { Employee, selectEmployee } from "../shared"
import "./EmployeeList.style.css"

/**
 * Displays the list of company employees.
 *
 * @function
 *
 * @returns {JSX.Element}
 */
const EmployeeList = () => {
  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState(false)

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
    document.title = "Current Employees - HRnet"
  })

  return (
    <>
      <NavigationBar />

      <main className="main-content">
        <h1 className="main-content__title">Current Employees</h1>

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
      </main>
    </>
  )
}

export default EmployeeList

import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import {
  SelectBase as Select,
  DatePickerBase as DatePicker,
  FormField,
  statesOptions,
  departmentOptions,
} from "../../common/components"
import { formatDate } from "../../common/utils/date"
import { employeeActions } from "../shared"
import "./CreateEmployee.style.css"

const CreateEmployee = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [selectedState, setSelectedState] = useState(statesOptions[0])
  const [selectedDepartment, setSelectedDepartment] = useState(
    departmentOptions[0]
  )

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const street = document.getElementById("street")
    const city = document.getElementById("city")
    const zipCode = document.getElementById("zip-code")

    const formattedDateOfBirth = formatDate(dateOfBirth)
    const formattedstartDate = formatDate(startDate)

    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: formattedDateOfBirth,
      startDate: formattedstartDate,
      department: selectedDepartment.value,
      street: street.value,
      city: city.value,
      state: selectedState.value,
      zipCode: zipCode.value,
    }

    dispatch(employeeActions.saveEmployee(employee))

    navigate("/employee-list")

    // $('#confirmation').modal(); Affiché la modale avec la lib HeadlessUIModal
  }

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form
          action="POST"
          id="create-employee"
          className="form"
          onSubmit={handleSubmit}
        >
          <FormField label="First Name" labelFor="first-name">
            <input id="first-name" type="text" required />
          </FormField>

          <FormField label="Last Name" labelFor="last-name">
            <input id="last-name" type="text" required />
          </FormField>

          <FormField label="Date of birth">
            <DatePicker
              selectedValue={dateOfBirth}
              handleChange={(date) => setDateOfBirth(date)}
            />
          </FormField>

          <FormField label="Start date">
            <DatePicker
              selectedValue={startDate}
              handleChange={(date) => setStartDate(date)}
            />
          </FormField>

          <fieldset className="address">
            <legend>Address</legend>

            <FormField label="Street" labelFor="street">
              <input id="street" type="text" required />
            </FormField>

            <FormField label="City" labelFor="city">
              <input id="city" type="text" required />
            </FormField>

            <FormField label="State">
              <Select
                value={selectedState}
                handleChange={setSelectedState}
                options={statesOptions}
              />
            </FormField>

            <FormField label="Zip Code" labelFor="zip-code">
              <input id="zip-code" type="number" required />
            </FormField>
          </fieldset>

          <FormField label="Department">
            <Select
              value={selectedDepartment}
              handleChange={setSelectedDepartment}
              options={departmentOptions}
            />
          </FormField>

          <button
            type="submit"
            className="button button--save-employee"
          >
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateEmployee

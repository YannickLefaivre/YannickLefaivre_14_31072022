import { useState } from "react"
import { NavLink } from "react-router-dom"
import { SelectBase as Select } from "../../common/components"
import { DatePickerBase as DatePicker } from "../../common/components"
import { FormField } from "../../common/components"
import {
  statesOptions,
  departmentOptions,
} from "../../common/components"
import "./CreateEmployee.style.css"

const CreateEmployee = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [selectedState, setSelectedState] = useState(statesOptions[0])
  const [selectedDepartment, setSelectedDepartment] = useState(
    departmentOptions[0]
  )

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" className="form">
          <FormField label="First Name" labelFor="first-name">
            <input id="first-name" type="text" required />
          </FormField>

          <FormField label="Last Name" labelFor="last-name">
            <input id="last-name" type="text" required />
          </FormField>

          <FormField label="Date of birth">
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
            />
          </FormField>

          <FormField label="Start date">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
                onChange={setSelectedState}
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
              onChange={setSelectedDepartment}
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

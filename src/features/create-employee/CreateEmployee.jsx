import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import FormField from "../../common/components/FormField"
import { states, departments } from "./select-component-utils/options"
import CustomDatepickerHeader from "./datepicker-custom-parts/CustomDatepickerHeader"
import { statesAndDepartmentsSelectStyles } from "./select-component-utils/customStyles"
import "./CreateEmployee.style.css"

const CreateEmployee = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [selectedState, setSelectedState] = useState(states[0])
  const [selectedDepartment, setSelectedDepartment] = useState(
    departments[0]
  )

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form
          action="#"
          id="create-employee"
          className="form"
        >
          <FormField label="First Name" labelFor="first-name">
            <input id="first-name" type="text" required />
          </FormField>

          <FormField label="Last Name" labelFor="last-name">
            <input id="last-name" type="text" required />
          </FormField>

          <FormField label="Date of birth">
            <DatePicker
              renderCustomHeader={CustomDatepickerHeader}
              highlightDates={[
                {
                  "react-datepicker__day--highlighted-custom": [
                    new Date(),
                  ],
                },
              ]}
              todayButton={
                <span className="fa-solid fa-house"></span>
              }
              fixedHeight
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              strictParsing
              showPopperArrow={false}
              popperPlacement="bottom-start"
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
                {
                  name: "flip",
                  enabled: false,
                },
              ]}
            />
          </FormField>

          <FormField label="Start date">
            <DatePicker
              renderCustomHeader={CustomDatepickerHeader}
              highlightDates={[
                {
                  "react-datepicker__day--highlighted-custom": [
                    new Date(),
                  ],
                },
              ]}
              todayButton={
                <span className="fa-solid fa-house"></span>
              }
              fixedHeight
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              strictParsing
              showPopperArrow={false}
              popperPlacement="bottom-start"
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
                {
                  name: "flip",
                  enabled: false,
                },
              ]}
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
                options={states}
                isSearchable={false}
                styles={statesAndDepartmentsSelectStyles}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 5,
                  colors: {
                    ...theme.colors,
                    primary: "hsl(0, 0%, 10%)",
                    neutral20: "hsl(0, 0%, 50%)",
                    neutral30: "hsl(0, 0%, 20%)",
                  },
                })}
              />
            </FormField>

            <FormField label="Zip Code" labelFor="zip-code">
              <input id="zip-code" type="number" required />
            </FormField>
          </fieldset>

          <FormField label="Department">
            <Select
              id="department"
              value={selectedDepartment}
              onChange={setSelectedDepartment}
              options={departments}
              isSearchable={false}
              styles={statesAndDepartmentsSelectStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "hsl(0, 0%, 10%)",
                  neutral20: "hsl(0, 0%, 50%)",
                  neutral30: "hsl(0, 0%, 20%)",
                },
              })}
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

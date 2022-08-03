import { useState } from "react"
import { NavLink } from "react-router-dom"
import FormField from "../../common/components/FormField"
import DatePicker from "react-datepicker"
import CustomDatepickerHeader from "./datepicker-custom-parts/CustomDatepickerHeader"
import "react-datepicker/dist/react-datepicker.css"
import "./CreateEmployee.style.css"

const CreateEmployee = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [startDate, setStartDate] = useState(null)

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" className="form">
          <FormField id="first-name" type="text" label="First Name" />

          <FormField id="last-name" type="text" label="Last Name" />

          <label>Date of birth</label>
          <DatePicker
            renderCustomHeader={CustomDatepickerHeader}
            highlightDates={[
              {
                "react-datepicker__day--highlighted-custom": [
                  new Date(),
                ],
              },
            ]}
            todayButton={<span className="fa-solid fa-house"></span>}
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

          <label>Start Date</label>
          <DatePicker
            renderCustomHeader={CustomDatepickerHeader}
            highlightDates={[
              {
                "react-datepicker__day--highlighted-custom": [
                  new Date(),
                ],
              },
            ]}
            todayButton={<span className="fa-solid fa-house"></span>}
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

          <fieldset className="address">
            <legend>Address</legend>

            <FormField id="street" type="text" label="Street" />

            <FormField id="city" type="text" label="City" />

            <FormField id="zip-code" type="number" label="Zip Code" />
          </fieldset>

          <button type="submit" className="button--save-employee">
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateEmployee

import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import {
  SelectBase as Select,
  DatePickerBase as DatePicker,
  ModalBase as Modal,
  FormField,
  statesOptions,
  departmentOptions,
  useModal,
  useSelect,
  useDatePicker,
} from "../../common/components"
import { formatDate } from "../../common/utils/date"
import { employeeActions } from "../shared"
import "./CreateEmployee.style.css"

const CreateEmployee = () => {
  const dateOfBirth = useDatePicker(null)
  const startDate = useDatePicker(null)
  const state = useSelect(statesOptions)
  const department = useSelect(departmentOptions)
  const modal = useModal()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const street = document.getElementById("street")
    const city = document.getElementById("city")
    const zipCode = document.getElementById("zip-code")

    if (firstName.value === "") {
      console.log("Some fields are empty")
      return
    }

    if (lastName.value === "") {
      console.log("Some fields are empty")
      return
    }

    if (!dateOfBirth.selected) {
      console.log("Some fields are empty")
      return
    }

    if (!startDate.selected) {
      console.log("Some fields are empty")
      return
    }

    if (street.value === "") {
      console.log("Some fields are empty")
      return
    }

    if (city.value === "") {
      console.log("Some fields are empty")
      return
    }

    if (!state.selectedOption) {
      console.log("Some fields are empty")
      return
    }

    if (zipCode.value === "") {
      console.log("Some fields are empty")
      return
    }

    if (!department.selectedOption) {
      console.log("Some fields are empty")
      return
    }

    const formattedDateOfBirth = formatDate(dateOfBirth.selected)
    const formattedstartDate = formatDate(startDate.selected)

    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: formattedDateOfBirth,
      startDate: formattedstartDate,
      department: department.selectedOption.value,
      street: street.value,
      city: city.value,
      state: state.selectedOption.value,
      zipCode: zipCode.value,
    }

    dispatch(employeeActions.save(employee))

    modal.open()
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
              selectedValue={dateOfBirth.selected}
              handleChange={dateOfBirth.changeDate}
            />
          </FormField>

          <FormField label="Start date">
            <DatePicker
              selectedValue={startDate.selected}
              handleChange={startDate.changeDate}
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
                value={state.selectedOption}
                handleChange={state.setSelectedOption}
                options={statesOptions}
              />
            </FormField>

            <FormField label="Zip Code" labelFor="zip-code">
              <input id="zip-code" type="number" required />
            </FormField>
          </fieldset>

          <FormField label="Department">
            <Select
              value={department.selectedOption}
              handleChange={department.setSelectedOption}
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

      <Modal isOpen={modal.isOpen} handleClose={modal.close} />
    </>
  )
}

export default CreateEmployee

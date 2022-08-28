import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import {
  DatePickerBase as DatePicker,
  useDatePicker,
} from "../Datepicker"
import {
  SelectBase as Select,
  statesOptions,
  departmentOptions,
  useSelect,
} from "../Select"
import { FormField } from "../FormField"
import { formatDate } from "../../utils/date"
import { employeeActions } from "../../../features/shared"
import "./style.css"

const Form = ({ onSuccess, lastFocusedElementRef }) => {
  const dateOfBirth = useDatePicker(null)
  const startDate = useDatePicker(null)
  const state = useSelect(statesOptions)
  const department = useSelect(departmentOptions)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const street = document.getElementById("street")
    const city = document.getElementById("city")
    const zipCode = document.getElementById("zip-code")

    if (firstName.value === "") {
      return
    }

    if (lastName.value === "") {
      return
    }

    if (!dateOfBirth.selected) {
      return
    }

    if (!startDate.selected) {
      return
    }

    if (street.value === "") {
      return
    }

    if (city.value === "") {
      return
    }

    if (!state.selectedOption) {
      return
    }

    if (zipCode.value === "") {
      return
    }

    if (!department.selectedOption) {
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

    onSuccess()
  }

  return (
    <form
      action="POST"
      id="create-employee"
      className="form"
      onSubmit={handleSubmit}
    >
      <FormField label="First name:" labelFor="first-name">
        <input
          id="first-name"
          type="text"
          required
          className="form-field__input"
        />
      </FormField>

      <FormField label="Last name:" labelFor="last-name">
        <input
          id="last-name"
          type="text"
          required
          className="form-field__input"
        />
      </FormField>

      <FormField label="Date of birth:">
        <DatePicker
          selectedValue={dateOfBirth.selected}
          handleChange={dateOfBirth.changeDate}
        />
      </FormField>

      <FormField label="Start date:">
        <DatePicker
          selectedValue={startDate.selected}
          handleChange={startDate.changeDate}
        />
      </FormField>

      <fieldset className="address-fieldset">
        <legend className="address-fieldset__legend">Address</legend>

        <FormField
          label="Street:"
          labelFor="street"
          styleModifier={{
            label: "form-field__label--address-fieldset",
          }}
        >
          <input
            id="street"
            type="text"
            required
            className="form-field__input form-field__input--address-fieldset"
          />
        </FormField>

        <FormField
          label="City:"
          labelFor="city"
          styleModifier={{
            label: "form-field__label--address-fieldset",
          }}
        >
          <input
            id="city"
            type="text"
            required
            className="form-field__input form-field__input--address-fieldset"
          />
        </FormField>

        <FormField
          label="State:"
          styleModifier={{
            label: "form-field__label--address-fieldset",
          }}
        >
          <Select
            value={state.selectedOption}
            handleChange={state.setSelectedOption}
            options={statesOptions}
          />
        </FormField>

        <FormField
          label="Zip code:"
          labelFor="zip-code"
          styleModifier={{
            container: "form-field--address-fieldset__zip-code-field",
            label: "form-field__label--address-fieldset",
          }}
        >
          <input
            id="zip-code"
            type="number"
            required
            className="form-field__input form-field__input--address-fieldset"
          />
        </FormField>
      </fieldset>

      <FormField label="Department:">
        <Select
          value={department.selectedOption}
          handleChange={department.setSelectedOption}
          options={departmentOptions}
        />
      </FormField>

      <button
        type="submit"
        ref={lastFocusedElementRef}
        className="button button--save-employee"
      >
        Save
      </button>
    </form>
  )
}

Form.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  lastFocusedElementRef: PropTypes.any.isRequired,
}

export { Form }

import PropTypes from "prop-types"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { CustomHeader } from "./custom-parts/CustomHeader"
import "./DatePickerBase.css"

/**
 * Change the value of the date picker when the user
 * clicks on a date or enters one in the text field.
 *
 * @callback handleChange
 * @param {Date | null} date
 * @param {React.SyntheticEvent<any, Event> | undefined} event
 *
 * @returns {void}
 */

/**
 * Basic date picker design.
 *
 * @function
 *
 * @param {Object} [DatePickerBaseProps]
 * @param {Date | null} [DatePickerBaseProps.selectedValue]
 * @param {handleChange} [DatePickerBaseProps.handleChange]
 *
 * @returns {JSX.Element}
 */
const DatePickerBase = ({ selectedValue, handleChange }) => {
  return (
    <DatePicker
      selected={selectedValue}
      onChange={handleChange}
      required
      placeholderText="Enter a date or use the date picker"
      renderCustomHeader={CustomHeader}
      className="form-field__input"
      highlightDates={[
        {
          "react-datepicker__day--highlighted-custom": [new Date()],
        },
      ]}
      todayButton={<span className="fa-solid fa-house"></span>}
      fixedHeight
      strictParsing
      showPopperArrow
      popperPlacement="bottom-start"
      popperModifiers={[
        {
          name: "offset",
          options: {
            offset: [15, 0],
          },
        },
        {
          name: "flip",
          enabled: false,
        },
      ]}
    />
  )
}

DatePickerBase.propTypes = {
  selectedValue: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.any,
  ]),
  handleChange: PropTypes.func,
}

export { DatePickerBase }

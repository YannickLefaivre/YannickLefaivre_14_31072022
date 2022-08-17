import PropTypes from "prop-types"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { CustomDatepickerHeader } from "../custom-parts/CustomDatepickerHeader"
import "../styles/DatePickerBase.css"

/**
 * @callback handleChange
 * @param {Date | null} date
 * @param {React.SyntheticEvent<any, Event> | undefined} event
 *
 * @returns {void}
 */

/**
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
      renderCustomHeader={CustomDatepickerHeader}
      highlightDates={[
        {
          "react-datepicker__day--highlighted-custom": [new Date()],
        },
      ]}
      todayButton={<span className="fa-solid fa-house"></span>}
      fixedHeight
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
      required
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

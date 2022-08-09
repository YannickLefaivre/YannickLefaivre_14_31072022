import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { CustomDatepickerHeader } from "./custom-parts/CustomDatepickerHeader"
import "./DatePickerBase.style.css"

/**
 * @param {Object} DatePickerProps
 *
 * @returns {JSX.Element}
 */
const DatePickerBase = (props) => {
  return (
    <DatePicker
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
      {...props}
    />
  )
}

export { DatePickerBase }

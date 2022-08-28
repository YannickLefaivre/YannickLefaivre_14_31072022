import PropTypes from "prop-types"
import range from "lodash/range"
import { getYear, getMonth } from "../../../utils/date"
import "./CustomHeader.css"

/**
 * Displays the custom date picker header.
 *
 * @function
 *
 * @param {Object} props
 * @param {Date} props.date
 * @param {Function} props.changeYear
 * @param {Function} props.changeMonth
 * @param {Function} props.decreaseMonth
 * @param {Function} props.increaseMonth
 * @param {Boolean} props.prevMonthDisabled
 * @param {Boolean} props.nextMonthButtonDisabled
 *
 * @returns {JSX.Element}
 */
const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  const years = range(1950, getYear(new Date()) + 29, 1)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div className="react-datepicker__header__month-and-year-pickers">
      <button
        type="button"
        className="button react-datepicker__header__month-and-year-picker__item react-datepicker__header__month-and-year-picker__navigation-button"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <span className="fa-solid fa-angle-left react-datepicker__header__month-and-year-picker__navigation-button__icon"></span>
      </button>

      <select
        className="react-datepicker__header__month-and-year-picker__item"
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(value)}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        className="react-datepicker__header__month-and-year-picker__item"
        value={months[getMonth(date)]}
        onChange={({ target: { value } }) =>
          changeMonth(months.indexOf(value))
        }
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="button react-datepicker__header__month-and-year-picker__item react-datepicker__header__month-and-year-picker__navigation-button"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <span className="fa-solid fa-angle-right react-datepicker__header__month-and-year-picker__navigation-button__icon"></span>
      </button>
    </div>
  )
}

CustomHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  changeYear: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  decreaseMonth: PropTypes.func.isRequired,
  increaseMonth: PropTypes.func.isRequired,
  prevMonthButtonDisabled: PropTypes.bool.isRequired,
  nextMonthButtonDisabled: PropTypes.bool.isRequired,
}

export { CustomHeader }

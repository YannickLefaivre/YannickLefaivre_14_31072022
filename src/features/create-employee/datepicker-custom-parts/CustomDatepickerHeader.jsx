import range from "lodash/range"
import { getYear, getMonth } from "../../../common/utils/date"
import "./CustomDatepickerHeader.style.css"

const CustomDatepickerHeader = ({
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

export default CustomDatepickerHeader

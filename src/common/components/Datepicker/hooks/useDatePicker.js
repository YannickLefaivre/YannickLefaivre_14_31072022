import { useState } from "react"

/**
 * @callback changeDate
 * @param {Date} date
 *
 * @returns {Date}
 */

/**
 *
 * @typedef {Object} DatePickerState
 * @property {Date} selected
 * @property {changeDate} changeDate
 */

/**
 * @function
 *
 * @param {Date | null} date
 *
 * @returns {DatePickerState}
 */
const useDatePicker = (date) => {
  const [selected, setSelected] = useState(date)

  const changeDate = (date) => {
    setSelected(date)
  }

  return {
    selected,
    changeDate,
  }
}

export { useDatePicker }

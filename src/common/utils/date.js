/**
 * @param {Date} date
 *
 * @returns {String}
 */
export const formatDate = (date) => {
  return Intl.DateTimeFormat("en", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(date)
}

export {
  getMonth,
  getYear,
  isToday,
  isThisMonth,
  subMonths as subtractMonths,
  subYears as subtractYears,
} from "date-fns"

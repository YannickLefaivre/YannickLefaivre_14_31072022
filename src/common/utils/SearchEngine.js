/**
 * @param {Object[]} employeeList
 * @param {String} userInput
 *
 * @returns {Object[]} The list of employees that
 * match the user's search or the initial list if
 * the userInput parameter is an empty string.
 */
const filterEmployees = (employeeList, userInput) => {
  if (userInput) {
    let searchedEmployees = []

    for (const employee of employeeList) {
      const {
        firstName,
        lastName,
        dateOfBirth,
        department,
        startDate,
        street,
        city,
        state,
        zipCode,
      } = employee

      if (
        firstName.toLowerCase().includes(userInput.toLowerCase()) !==
        false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        lastName.toLowerCase().includes(userInput.toLowerCase()) !==
        false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        dateOfBirth
          .toLowerCase()
          .includes(userInput.toLowerCase()) !== false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        department.toLowerCase().includes(userInput.toLowerCase()) !==
        false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        startDate.toLowerCase().includes(userInput.toLowerCase()) !==
        false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        street.toLowerCase().includes(userInput.toLowerCase()) !==
        false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        city.toLowerCase().includes(userInput.toLowerCase()) !== false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        state.toLowerCase().includes(userInput.toLowerCase()) !==
        false
      ) {
        searchedEmployees.push(employee)

        continue
      } else if (
        zipCode.toLowerCase().includes(userInput.toLowerCase()) !==
        false
      ) {
        searchedEmployees.push(employee)

        continue
      }
    }

    return searchedEmployees
  } else {
    return employeeList
  }
}

export { filterEmployees }

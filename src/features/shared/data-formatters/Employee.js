class Employee {
  /**
   * @typedef {Object} EmployeeInfos
   * @property {String} firstName
   * @property {String} lastName
   * @property {String} startDate
   * @property {String} department
   * @property {String} dateOfBirth
   * @property {String} street
   * @property {String} city
   * @property {String} state
   * @property {String} zipCode
   */

  /**
   *
   * @param {EmployeeInfos} employeeInfos
   */
  constructor({
    firstName,
    lastName,
    startDate,
    department,
    dateOfBirth,
    street,
    city,
    state,
    zipCode,
  }) {
    this.firstName = firstName
    this.lastName = lastName
    this.startDate = startDate
    this.department = department
    this.dateOfBirth = dateOfBirth
    this.street = street
    this.city = city
    this.state = state
    this.zipCode = zipCode
  }
}

export { Employee }

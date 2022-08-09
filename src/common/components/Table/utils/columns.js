export const columns = [
  {
    id: 1,
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    id: 2,
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    id: 3,
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    id: 4,
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    id: 5,
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    id: 6,
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    id: 7,
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    id: 8,
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    id: 9,
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
]

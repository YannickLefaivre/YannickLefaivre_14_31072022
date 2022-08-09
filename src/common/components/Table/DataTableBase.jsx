import DataTable from "react-data-table-component"
import { columns } from "./utils/columns"

/**
 * @param {Object} props
 *
 * @returns {JSX.Element}
 */
const DataTableBase = (props) => {
  return (
    <DataTable
      columns={columns}
      subHeader
      pagination
      highlightOnHover
      responsive
      striped
      dense
      {...props}
    />
  )
}

export { DataTableBase }

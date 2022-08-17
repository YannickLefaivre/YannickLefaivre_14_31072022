import React from "react"
import PropTypes from "prop-types"
import DataTable from "react-data-table-component"
import { columns } from "../utils/columns"

/**
 * @typedef {Object} DataTableBaseProps
 * @property {any[]} data
 * @property {number} defaultSortFieldId
 * @property {React.ReactNode} subHeaderComponent
 * @property {React.ReactNode} noDataComponent
 */

/**
 * @function
 *
 * @param {DataTableBaseProps} DataTableBaseProps
 *
 * @returns {JSX.Element}
 */
const DataTableBase = ({
  data,
  defaultSortFieldId,
  subHeaderComponent,
  noDataComponent,
}) => {
  return (
    <DataTable
      columns={columns}
      subHeader
      pagination
      highlightOnHover
      responsive
      striped
      dense
      data={data}
      defaultSortFieldId={defaultSortFieldId}
      subHeaderComponent={subHeaderComponent}
      noDataComponent={noDataComponent}
    />
  )
}

DataTableBase.propTypes = {
  data: PropTypes.any.isRequired,
  defaultSortFieldId: PropTypes.number.isRequired,
  subHeaderComponent: PropTypes.node.isRequired,
  noDataComponent: PropTypes.node.isRequired,
}

export { DataTableBase }

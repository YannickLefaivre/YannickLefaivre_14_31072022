import PropTypes from "prop-types"
import Select from "react-select"
import { customSelectStyles } from "./utils/customStyles"

/**
 * @callback handleChange
 * @param {*} newValue
 * @param {*} actionMeta
 *
 * @returns {void}
 */

/**
 * @typedef SelectOptions
 * @property {String} label
 * @property {String} value
 */

/**
 * @param {Object} SelectProps
 * @param {SelectOptions[]} SelectProps.options
 * @param {*} [SelectProps.value]
 * @param {handleChange} [SelectProps.handleChange]
 *
 * @returns {JSX.Element}
 */
const SelectBase = ({ options, value, handleChange }) => {
  return (
    <Select
      isSearchable={false}
      styles={customSelectStyles}
      value={value}
      onChange={handleChange}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary: "hsl(0, 0%, 10%)",
          neutral20: "hsl(0, 0%, 50%)",
          neutral30: "hsl(0, 0%, 20%)",
        },
      })}
      required
    />
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.any,
  handleChange: PropTypes.func,
}

export { SelectBase }

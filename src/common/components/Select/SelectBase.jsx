import PropTypes from "prop-types"
import Select from "react-select"

/**
 * Base select custom style
 */
const customSelectStyles = {
  container: (provided, state) => {
    return {
      ...provided,
      marginTop: 0,
      width: "100%",
    }
  },
  control: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
    }
  },
  valueContainer: (provided, state) => {
    return {
      ...provided,
      fontFamily: "sans-serif",
    }
  },
  option: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
      fontFamily: "sans-serif",
      color: "var(--color-gray-1)",
    }
  },
  indicatorSeparator: (provided, state) => {
    return {
      ...provided,
      width: 0,
    }
  },
}

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
 * @function
 *
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
        borderRadius: 3,
        colors: {
          ...theme.colors,
          primary: "var(--color-indigo-3)",
          primary25: "var(--color-indigo-5)",
          primary50: "var(--color-indigo-5)",
          primary75: "var(--color-indigo-5)",
          neutral0: "black",
          neutral20: "var(--color-gray-2)",
          neutral40: "var(--color-gray-3)",
          neutral80: "var(--color-gray-2)",
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

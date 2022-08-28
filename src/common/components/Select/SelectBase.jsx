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
 * Change the value of the select when the user clicks on an option.
 *
 * @callback handleChange
 * @param {*} newValue
 * @param {*} actionMeta
 *
 * @returns {void}
 */

/**
 * Basic select design.
 *
 * @function
 *
 * @param {Object} SelectProps
 * @param {String} SelectProps.inputId
 * @param {Object[]} SelectProps.options [see Option type]{@link module:useSelect~Option}
 * @param {*} [SelectProps.value]
 * @param {handleChange} [SelectProps.handleChange]
 *
 * @returns {JSX.Element}
 */
const SelectBase = ({ inputId, options, value, handleChange }) => {
  return (
    <Select
      inputId={inputId}
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
  inputId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.any,
  handleChange: PropTypes.func,
}

export { SelectBase }

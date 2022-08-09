import Select from "react-select"
import { customSelectStyles } from "./utils/customStyles"

/**
 * @param {Object} SelectProps
 *
 * @returns {JSX.Element}
 */
const SelectBase = (props) => {
  return (
    <Select
      isSearchable={false}
      styles={customSelectStyles}
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
      {...props}
    />
  )
}

export { SelectBase }

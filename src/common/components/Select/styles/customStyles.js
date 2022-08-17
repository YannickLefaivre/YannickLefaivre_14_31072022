export const customSelectStyles = {
  container: (provided, state) => {
    return {
      ...provided,
      marginTop: 10,
      width: 240,
    }
  },
  control: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
      backgroundColor: state.isFocused
        ? "hsla(0, 0%, 90%, 0.7)"
        : "hsla(0, 0%, 95%, 0.7)",
    }
  },
  valueContainer: (provided, state) => {
    return {
      ...provided,
      fontFamily: "Arial",
    }
  },
  option: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
      color: state.isSelected || state.isFocused ? "white" : "dark",
      backgroundColor: state.isSelected
        ? "rgb(var(--secondary-color))"
        : state.isFocused
        ? "rgb(var(--tertiary-color))"
        : "white",
    }
  },
  indicatorSeparator: (provided, state) => {
    return {
      ...provided,
      width: 0,
    }
  },
}

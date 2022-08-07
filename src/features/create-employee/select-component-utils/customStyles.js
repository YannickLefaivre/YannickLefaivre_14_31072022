export const statesAndDepartmentsSelectStyles = {
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

export const monthAndYearSelectStyles = {
  ...statesAndDepartmentsSelectStyles,
  container: (provided, state) => ({
    ...provided,
    marginTop: 0,
    marginInline: 5,
    width: "auto",
  }),
  control: (provided, state) => {
    return {
      ...provided,
      width: "7.5em",
      height: "2.5em",
      minHeight: 17,
      cursor: "pointer",
      backgroundColor: state.isFocused
        ? "hsla(0, 0%, 90%, 0.7)"
        : "hsla(0, 0%, 95%, 0.7)",
    }
  },
  valueContainer: (provided, state) => {
    return {
      ...provided,
      alignItems: "center",
      paddingLeft: 3,
    }
  },
  singleValue: (provided, state) => {
    return {
      ...provided,
      fontWeight: "bold",
      fontFamily: "Arial",
      fontSize: "0.75rem",
    }
  },
  indicatorsContainer: (provided, state) => {
    return {
      ...provided,
      width: 30,
      height: 30,
    }
  },
}

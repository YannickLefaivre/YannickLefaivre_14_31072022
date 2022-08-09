import PropTypes from "prop-types"
import "./style.css"

/**
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.label
 * @param {String} [props.labelFor]
 * @param {String} [props.errorMessage]
 * @param {Object} [props.styleModifier]
 * @param {String} [props.styleModifier.container]
 * @param {String} [props.styleModifier.label]
 *
 * @returns {JSX.Element}
 */
const FormField = ({
  children,
  label,
  labelFor,
  errorMessage,
  styleModifier,
}) => {
  return (
    <div
      className={`form-field${
        styleModifier && styleModifier.container
          ? ` ${styleModifier.container}`
          : ""
      }`}
    >
      <label
        htmlFor={labelFor}
        className={
          styleModifier && styleModifier.label && styleModifier.label
        }
      >
        {label}
      </label>

      {children}

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string,
  errorMessage: PropTypes.string,
  styleModifier: PropTypes.shape({
    container: PropTypes.string,
    label: PropTypes.string,
  }),
}

export { FormField }

import "./style.css"

/**
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.type
 * @param {String} props.label
 *
 * @returns {JSX.Element}
 */
const FormField = ({ id, type, label }) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} className="form-field-input" />
    </div>
  )
}

export default FormField

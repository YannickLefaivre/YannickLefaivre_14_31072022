import PropTypes from "prop-types"
import { Modal } from "@signed-a/react-modal-component/dist"
import "@signed-a/react-modal-component/dist/style.css"
import "../styles/ModalBase.css"

/**
 * @typedef {object} ModalBaseProps
 * @property {boolean} isOpen
 * @property {function} handleClose
 */

/**
 * @function
 *
 * @param {ModalBaseProps} ModalBaseProps
 *
 * @returns {JSX.Element}
 */
const ModalBase = ({ isOpen, handleClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      overlayClassName="success-modal"
    >
      <div className="success-modal__content">
        <p className="success-modal__content__congratulations">
          Employee Created!
        </p>

        <button
          autoFocus
          onClick={handleClose}
          className="button success-modal__content__close-button"
        >
          <span className="fa-solid fa-close"></span>
        </button>
      </div>
    </Modal>
  )
}

ModalBase.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export { ModalBase }

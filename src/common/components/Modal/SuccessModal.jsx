import PropTypes from "prop-types"
import { Modal } from "@signed-a/react-modal-component/dist"
import "@signed-a/react-modal-component/dist/style.css"
import "./SuccessModal.css"

/**
 * @typedef {object} SuccessModalProps
 * @property {boolean} isOpen
 * @property {VoidFunction} handleClickOutside
 * @property {VoidFunction} handleClickOnCloseButton
 */

/**
 * @function
 *
 * @param {SuccessModalProps} SuccessModalProps
 *
 * @returns {JSX.Element}
 */
const SuccessModal = ({
  isOpen,
  handleClickOutside,
  handleClickOnCloseButton,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClickOnCloseButton={handleClickOnCloseButton}
      handleClickOutside={handleClickOutside}
      title="Success"
      hideConfirmButton
      hideCancelButton
      styleModifier={{
        contentContainer: "success-modal__content",
        closeButton: "success-modal__content__close-button",
        closeButtonIcon: "success-modal__content__close-button__icon",
        header: "success-modal__content__header",
        title: "success-modal__content__header__title",
        mainContent: "success-modal__content_main",
        footer: "success-modal__content__footer",
      }}
    >
      <p className="success-modal__content__main__congratulations">
        Employee Created!
      </p>
    </Modal>
  )
}

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClickOnCloseButton: PropTypes.func.isRequired,
  handleClickOutside: PropTypes.func.isRequired,
}

export { SuccessModal }

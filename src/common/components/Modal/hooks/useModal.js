import { useState } from "react"

/**
 * @callback open
 *
 * @return {void}
 */

/**
 * @callback close
 *
 * @return {void}
 */

/**
 * @typedef {object} ModalState
 * @property {boolean} isOpen
 * @property {open} open
 * @property {close} close
 */

/**
 * @function
 *
 * @returns {ModalState}
 */
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    open,
    close,
  }
}

export { useModal }

import { useEffect } from "react"
import {
  Form,
  SuccessModal,
  useModal,
  MODAL_OPEN_STATE,
  NavigationBar,
} from "../../common/components"

/**
 * @function
 *
 * @returns {JSX.Element}
 */
const CreateEmployee = () => {
  const modal = useModal(MODAL_OPEN_STATE.CLOSED)

  useEffect(() => {
    document.title = "Create an employee - HRnet"
  }, [])

  return (
    <>
      <NavigationBar />

      <main className="main-content">
        <h1 className="main-content__title">Create Employee</h1>

        <Form
          onSuccess={modal.open}
          lastFocusedElementRef={modal.openButtonRef}
        />
      </main>

      <SuccessModal
        isOpen={modal.isOpen}
        handleClickOnCloseButton={modal.close}
        handleClickOutside={modal.clickOutside}
      />
    </>
  )
}

export default CreateEmployee

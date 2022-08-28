import { useState } from "react"
import { SlidingMenu } from "../SlidingMenu"
import "./style.css"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <nav
        className={`navigation-bar${
          isOpen ? " navigation-bar--dropdown-menu-open" : ""
        }`}
      >
        <SlidingMenu
          isOpen={isOpen}
          handleTheOpeningToggle={() => setIsOpen(!isOpen)}
        />
      </nav>

      <p className="header__software-name">HRnet</p>
    </header>
  )
}

export { NavigationBar }

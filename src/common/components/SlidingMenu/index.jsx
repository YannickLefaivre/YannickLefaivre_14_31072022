import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import "./style.css"

/**
 * @function
 *
 * @param {Object} SlidingMenuProps
 * @param {Boolean} SlidingMenuProps.isOpen
 * @param {Boolean} SlidingMenuProps.handleTheOpeningToggle
 *
 * @returns {JSX.Element}
 */
const SlidingMenu = ({ isOpen, handleTheOpeningToggle }) => {
  return (
    <div
      className={`dropdown-menu${
        isOpen ? " dropdown-menu--open" : ""
      }`}
    >
      <button
        type="button"
        onClick={handleTheOpeningToggle}
        className={`button dropdown-menu__button${
          isOpen ? " dropdown-menu__button--menu-open" : ""
        }`}
      >
        <span className="dropdown-menu__button__label">Menu</span>
        <svg
          aria-hidden
          viewBox="0 0 320 512"
          className={`dropdown-menu__button__icon${
            isOpen ? " dropdown-menu__button__icon--menu-open" : ""
          }`}
        >
          {/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
          <path
            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            fill="currentColor"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="dropdown-menu__links-list">
          <li className="dropdown-menu__links-list__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "dropdown-menu__links-list__item__link--active"
                  : "dropdown-menu__links-list__item__link"
              }
            >
              View Current Employees
            </NavLink>
          </li>

          <li className="dropdown-menu__links-list__item">
            <NavLink
              to="/create-employee"
              className={({ isActive }) =>
                isActive
                  ? "dropdown-menu__links-list__item__link--active"
                  : "dropdown-menu__links-list__item__link"
              }
            >
              Create Employee
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  )
}

SlidingMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleTheOpeningToggle: PropTypes.func.isRequired,
}

export { SlidingMenu }

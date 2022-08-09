import PropTypes from "prop-types"
import "./SearchBar.style.css"

/**
 * @callback onFilterCallback
 * @param {Event} changeEvent
 */

/**
 * @callback onClearCallback
 * @param {MouseEvent} clickEvent
 */

/**
 * @param {Object} [SearchBarProps]
 * @param {String} [SearchBarProps.filterText=""]
 * @param {onFilterCallback} [SearchBarProps.onFilter=() => {}]
 * @param {onClearCallback} [SearchBarProps.onClear=() => {}]
 *
 *
 * @returns {JSX.Element}
 */
const SearchBar = ({ filterText, onFilter, onClear }) => {
  return (
    <div className="search-bar">
      <input
        id="search"
        type="text"
        aria-label="Filter employee"
        value={filterText}
        onChange={onFilter}
        className="search-bar__input"
      />
      <button
        type="button"
        onClick={onClear}
        className="button search-bar__clear-button"
      >
        Clear
      </button>
    </div>
  )
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

SearchBar.defaultProps = {
  filterText: "",
  onFilter: (event) => {},
  onClear: (event) => {},
}

export { SearchBar }

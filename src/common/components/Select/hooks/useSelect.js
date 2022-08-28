import { useState } from "react"

/**
 * @module useSelect
 */

/**
 * @typedef {Object} Option
 * @property {String} label
 * @property {String} value
 */

/**
 * @typedef {Object} SelectState
 * @property {Option} selectedOption
 * @property {Function} setSelectedOption
 */

/**
 * Manages the state of the select value.
 *
 * @function
 *
 * @param {Option[] | null} options
 * @param {Number} [defaultSelectionIndex=0]
 *
 * @returns {SelectState}
 */
const useSelect = (options, defaultSelectionIndex = 0) => {
  let defaultSelection = null

  if (options !== null) {
    if (options[defaultSelectionIndex] === undefined) {
      throw new RangeError(
        "the array of options you passed as argument has no value to the index you specified."
      )
    }

    defaultSelection = options[defaultSelectionIndex]
  }

  const [selectedOption, setSelectedOption] =
    useState(defaultSelection)

  return {
    selectedOption,
    setSelectedOption,
  }
}

export { useSelect }

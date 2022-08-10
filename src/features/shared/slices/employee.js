import { createSlice } from "@reduxjs/toolkit"
import { mockedEmployees } from "../../employee-list/__mocks__/employees"

const initialState = {
  data: null,
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    get: {
      prepare: (data) => ({ payload: data }),
      reducer: (draft, action) => {
        draft.data = action.payload
      },
    },
    save: {
      prepare: (newEmployee) => ({ payload: newEmployee }),
      reducer: (draft, action) => {
        draft.push(action.payload)
      },
    },
  },
})

export const selectEmployee = (state) => state.employee

export const getEmployees = async (dispatch, getState) => {
  dispatch(employeeSlice.actions.get(mockedEmployees))
}

export const saveEmployee = (newEmployee) => {
  return async (dispatch, getState) => {
    dispatch(employeeSlice.actions.save(newEmployee))
  }
}

export default employeeSlice.reducer

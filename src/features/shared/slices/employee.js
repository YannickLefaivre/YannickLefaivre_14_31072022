import { createSlice } from "@reduxjs/toolkit"
import { mockedEmployees } from "../../employee-list/__mocks__/employees"

const initialState = {
  data: mockedEmployees,
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    save: {
      prepare: (newEmployee) => ({ payload: newEmployee }),
      reducer: (draft, action) => {
        draft.data.push(action.payload)
      },
    },
  },
})

export const selectEmployee = (state) => state.employee

export const { save } = employeeSlice.actions

export default employeeSlice.reducer

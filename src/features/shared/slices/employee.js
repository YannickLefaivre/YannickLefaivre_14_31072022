import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    saveEmployee: {
      prepare: (newEmployee) => ({ payload: newEmployee }),
      reducer: (draft, action) => {
        draft.push(action.payload)
      },
    },
  },
})

export const selectEmployee = (state) => state.employee

export const { saveEmployee } = employeeSlice.actions

export default employeeSlice.reducer

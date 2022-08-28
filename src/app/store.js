import { configureStore } from "@reduxjs/toolkit"
import employeReducer from "../features/shared/slices/employee"

const store = configureStore({
  reducer: {
    employee: employeReducer,
  },
})

export default store

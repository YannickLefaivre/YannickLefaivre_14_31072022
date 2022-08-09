import { BrowserRouter } from "react-router-dom"
import { Provider as ReduxStoreProvider } from "react-redux"
import Router from "./Router"
import store from "./store"

function App() {
  return (
    <ReduxStoreProvider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ReduxStoreProvider>
  )
}

export default App

import UserLayout from "./pages/UserLayout"
import "./App.css"
import { BrowserRoutes,Route,Routes } from "react-router-dom"

const App = () => {
  return (

    <div>
      <BrowserRoutes>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
      
      </BrowserRoutes>
    </div>
  )
}

export default App

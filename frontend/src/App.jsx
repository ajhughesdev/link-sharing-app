import { Route, Routes } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path='create-account' element={<CreateAccount />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App

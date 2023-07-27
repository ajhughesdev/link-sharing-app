import { Route, Routes } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import CreateAccount from './components/CreateAccount/CreateAccount'
import DashboardLayout from './pages/Dashboard/DashboardLayout'
import Login from './components/Login/Login'
import Links from './components/Links/Links'
import Profile from './components/Profile/Profile'
import Preview from './components/Preview/Preview'

const App = () => {
  const isLoggedIn = false
  const hasLinks = false

  return (
    <Routes>
      <Route path='/' element={<RootLayout isLoggedIn={isLoggedIn} />}>
        <Route index element={<Login />} />
        <Route path='create-account' element={<CreateAccount />} />
        <Route path='preview' element={<Preview />} />
        <Route path='dashboard' element={<DashboardLayout isLoggedIn={isLoggedIn} />}>
          <Route index element={<Links hasLinks={hasLinks} />} />
          <Route path='/dashboard/profile' element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard/DashboardLayout'

const RootLayout = ({ isLoggedIn }) => {

    return (
        <div className='app'>
            {isLoggedIn ? <Dashboard /> : <Outlet />}
        </div>
    )
}

export default RootLayout


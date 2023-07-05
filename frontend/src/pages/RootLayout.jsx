import { Outlet } from 'react-router-dom'
import Header from './../components/Header/Header'

const RootLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

export default RootLayout
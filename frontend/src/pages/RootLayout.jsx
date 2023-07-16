import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='app'>
            <>
                <Outlet />
            </>
        </div>
    )
}

export default RootLayout
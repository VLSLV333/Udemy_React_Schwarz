// import { Outlet, useNavigation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'

const RootPage = () => {
    // const navigation = useNavigation()

    return(
        <>
        <MainNavigation />
        <main>
        <Outlet/>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        </main>
        </>
    )
}

export default RootPage
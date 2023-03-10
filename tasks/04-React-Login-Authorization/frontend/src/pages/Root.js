import { useEffect } from 'react'

import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDurationLeft } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData()
  const submit = useSubmit()

  useEffect(() => {
    if (!token){
      return
    }

    if (token === 'EXPIRED') {
      submit(null, {action:'/logout', method: 'post'})
      return
    }

    const tokenLifeLeft = getTokenDurationLeft()

    setTimeout(() => {
      submit(null, {action:'/logout', method: 'post'})
    }, tokenLifeLeft)
  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

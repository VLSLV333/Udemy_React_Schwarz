import { Fragment } from 'react';

import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth';

function App() {
  const dispatch = useDispatch()
  const authentificated = useSelector(state => state.auth.isAuthentificated)

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <Fragment>
      <Header/>
      {!authentificated && <Auth logIn={loginHandler}/>}
      {authentificated && <UserProfile/>}
    <Counter />
    </Fragment>
  );
}

export default App;

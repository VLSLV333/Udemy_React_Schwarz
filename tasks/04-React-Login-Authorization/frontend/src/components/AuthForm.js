import {
	Form,
	Link,
	NavLink,
	useSearchParams,
	useActionData,
	useNavigation,
} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';

	const wrongAuthMode =
		searchParams.get('mode') !== 'login' &&
		searchParams.get('mode') !== 'signup';

	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	const data = useActionData();

	return (
		<>
			{wrongAuthMode && (
				<>
					<h2 className={classes.h2}>
						Hello, this is wrong page:) Please, click:
					</h2>{' '}
					<Link to={'/auth?mode=login'} className={classes.a}>
						Go!
					</Link>
				</>
			)}
			{!wrongAuthMode && (
				<Form method='post' className={classes.form}>
					<h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
					{data && data.errors && (
						<ul>
							{Object.values(data.errors).map((error) => (
								<li key={error}>{error}</li>
							))}
						</ul>
					)}
					{data && data.message && <h3>{data.message}</h3>}
					{data && data.message && (
						<p>
							Have you already{' '}
							<NavLink to={'/auth?mode=signup'} className={classes.navLink}>
								created
							</NavLink>{' '}
							user?
						</p>
					)}
					<p>
						<label htmlFor='email'>Email</label>
						<input
							id='email'
							type='email'
							name='email'
							required
							defaultValue={''}
						/>
					</p>
					<p>
						<label htmlFor='image'>Password</label>
						<input
							id='password'
							type='password'
							name='password'
							required
							defaultValue={''}
						/>
					</p>
					<div className={classes.actions}>
						<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
							{isLogin ? 'Create new user' : 'Login'}
						</Link>
						<button disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : isLogin ? 'Login' : 'Save'}
						</button>
					</div>
				</Form>
			)}
		</>
	);
}

export default AuthForm;

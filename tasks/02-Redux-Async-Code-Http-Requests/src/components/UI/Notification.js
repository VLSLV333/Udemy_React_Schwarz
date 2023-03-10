import classes from './Notification.module.css';

import { showCartActions } from '../store/showCart';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Notification = (props) => {
	const dispatch = useDispatch();

	let specialClasses = '';

	if (props.status === 'error') {
		specialClasses = classes.error;
	}
	if (props.status === 'success') {
		specialClasses = classes.success;
	}

	const cssClasses = `${classes.notification} ${specialClasses}`;

	useEffect(() => {
		let test = setTimeout(() => {
			dispatch(showCartActions.hideNotification());
		}, 3000);

		return () => {
			clearTimeout(test);
		};
	}, [dispatch, props.status]);

	return (
		<section className={cssClasses}>
			<h2>{props.title}</h2>
			<p>{props.message}</p>
		</section>
	);
};

export default Notification;

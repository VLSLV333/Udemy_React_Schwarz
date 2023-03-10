import { useAsyncError } from 'react-router-dom';

import style from './AsyncError.module.css';

const Test = () => {
	const error = useAsyncError();

	return (
		<>
			<h1 className={style.center}>{error.message}</h1>
			<p className={style.center}>
				Please, start backend on your local server, so data could be fetched :)
			</p>
		</>
	);
};

export default Test;

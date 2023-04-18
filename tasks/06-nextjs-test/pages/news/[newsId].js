import { useRouter } from 'next/router';

const Details = () => {
	const router = useRouter();

	// console.log(router);

	console.log(router.query.newsId);

	return <h2>Details page</h2>;
};

export default Details;

//  our-domain.com/news
import Link from 'next/link';

const NewsPage = () => {
	return (
		<>
			<h2>News Page</h2>
			<ul>
				<li>
					<Link href={'/news/NextApp'}>NextJs is great Framework</Link>
				</li>
				<li>
					<Link href={'/news/I_Love_Julia'}>I love Julia</Link>
				</li>
			</ul>
		</>
	);
};

export default NewsPage;

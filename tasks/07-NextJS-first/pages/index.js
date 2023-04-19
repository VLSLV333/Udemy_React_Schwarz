import Head from 'next/head';

import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = ({ loadedMeetups }) => {
	return (
		<>
			<Head>
				<title>NextJS meetups VJ</title>
				<meta name='description' content='Browse a huge list of React meetups!'/>
			</Head>
			<MeetupList meetups={loadedMeetups} />
		</>
	);
};

//		regenerate your page for every incoming request
//		=======		This alternative is great when data changes multiple times every second, and you need access to request object

// export async function getServerSideProps(context) {
// 	const request = context.req;
// 	const response = context.res;

// 	// fetching data from API

// 	return {
// 		props: {
// 			loadedMeetups: Dummy_Meetups,
// 		},
// 	};
// }

//		====== This alternative is faster
export async function getStaticProps() {
	// fetching data from API
	const client = await MongoClient.connect(
		'mongodb+srv://vlad_nextJSapp:vlad_pass123@testnextjsfirstapp.1k7xikz.mongodb.net/meetUp?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetUpsCollection = db.collection('meetupsDB');

	const meetups = await meetUpsCollection.find().toArray();

	client.close();

	return {
		props: {
			//	here we get error because _id on MongoDB is not just a string, so we manually convert it
			loadedMeetups: meetups.map((meet) => ({
				title: meet.title,
				image: meet.image,
				address: meet.address,
				id: meet._id.toString(),
			})),
		},
		// number here is seconds to revaluate this component on server, which will automatically update the pregenerated page on server. THis way there will be no need to redeploy our website every time the content on it updates;
		revalidate: 10, // number of seconds for nextJS to wait untill regenerating page for an incoming request.
	};
}

export default HomePage;

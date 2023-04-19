import Head from 'next/head';

import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = ({ meetup: { title, description, address, image } }) => {
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='description' content={description} />
			</Head>
			<MeetupDetail
				description={description}
				address={address}
				title={title}
				image={image}
			/>
		</>
	);
};

//  using this function we are prerendering static pages for pages with dynamic url parts (here it is [meetID])

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		'mongodb+srv://vlad_nextJSapp:vlad_pass123@testnextjsfirstapp.1k7xikz.mongodb.net/meetUp?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetUpsCollection = db.collection('meetupsDB');

	const meetUps = await meetUpsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: 'blocking',
		paths: meetUps.map((meetup) => ({
			params: { meetId: meetup._id.toString() },
		})),

		// [
		// 	{
		// 		params: {
		// 			meetId: 'm1',
		// 		},
		// 	},
		// 	{
		// 		params: {
		// 			meetId: 'm2',
		// 		},
		// 	},
		// ],
	};
}

export async function getStaticProps(context) {
	// fetch data from API

	// console.log(context);

	const meetId = context.params.meetId;

	const client = await MongoClient.connect(
		'mongodb+srv://vlad_nextJSapp:vlad_pass123@testnextjsfirstapp.1k7xikz.mongodb.net/meetUp?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetUpsCollection = db.collection('meetupsDB');

	const selectedMeetup = await meetUpsCollection.findOne({
		_id: new ObjectId(meetId),
	});

	client.close();

	return {
		props: {
			meetup: {
				description: selectedMeetup.description,
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				id: selectedMeetup._id.toString(),
			},

			// {
			// 	id: meetId,
			// 	description: 'The meetup description',
			// 	address: 'Some address Street 5',
			// 	title: 'A first Meetup',
			// 	image:
			// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
			// },
		},
	};
}

export default MeetupDetails;

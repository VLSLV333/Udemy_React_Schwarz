import Head from 'next/head';

import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
	const router = useRouter();

	const addMeetupHandler = async (enteredMeetupData) => {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		console.log(data);

		//	=== makes sure we can't go back with a back button
		// router.replace('/');
		router.push('/');
	};

	return (
		<>
			<Head>
				<title>Add new meetup</title>
				<meta
					name='description'
					content='Add your own meetup. Create something special!'
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />;
		</>
	);
};

export default NewMeetupPage;

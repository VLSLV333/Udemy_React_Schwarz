import MeetupList from '../components/meetups/MeetupList';

const Dummy_Meetups = [
	{
		id: 'm1',
		title: 'First Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
		address: 'Some address 5, 12345 Munchen',
		description: 'This is the first meetup!',
	},
	{
		id: 'm2',
		title: 'First Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
		address: 'Some address 7, 12345 Munchen',
		description: 'This is the second meetup!',
	},
	{
		id: 'm3',
		title: 'First Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
		address: 'Some address 9, 12345 Munchen',
		description: 'This is the third meetup!',
	},
];

const HomePage = () => {
	return <MeetupList meetups={Dummy_Meetups} />;
};

export default HomePage;

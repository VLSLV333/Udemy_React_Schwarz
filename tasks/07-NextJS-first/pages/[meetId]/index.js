import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
	return (
		<>
			<MeetupDetail
				description={'The meetup description'}
				address={'Some address Street 5'}
				title={'A first Meetup'}
				image={
					'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153'
				}
			/>
		</>
	);
};

export default MeetupDetails;

import { Link } from 'react-router-dom'

const DUMMYEVENTS = [
    {id: 1, title: 'Playing football'},
    {id: 2, title: 'Playing basketball'},
    {id: 3, title: 'Playing soccer'},
    {id: 4, title: 'Playing voleyball'},
    {id: 5, title: 'Playing tenis'},
]

const Events = () => {
    return(
        <>
        <h1>Events Page</h1>
        <ul>
        {DUMMYEVENTS.map(event => <li key={event.id}><Link to={`${event.id}`}>{event.title}</Link></li>)}
        </ul>
        </>
    )
}

export default Events
import { useParams } from 'react-router-dom'

const EventDetail = () => {
    const params = useParams()

    const providedID = params.id

    return(
        <>
        <h1>Event Detail Page</h1>
        <p>{providedID}</p>
        </>
    )
}

export default EventDetail
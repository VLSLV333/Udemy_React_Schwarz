import { useLoaderData, json } from 'react-router-dom'

import EventItem from '../components/EventItem'

const EventDetail = () => {
    const data = useLoaderData()

    return(
        <EventItem event={data.event}/>
    )
}

export default EventDetail

export const loader = async ({request, params}) => {
//  =====  can be used to extract query parameters
//      =====> request.url

    const pageId = params.id

    const response = await fetch('http://localhost:8080/events/' + pageId)

    if (!response.ok){
        throw json({
            message: 'coudn`t fetch this event details!',
            status: 500
        })
    } else {
        return response
    }

}
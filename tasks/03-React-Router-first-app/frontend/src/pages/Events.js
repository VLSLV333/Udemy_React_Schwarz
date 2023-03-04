import { Suspense } from 'react'

import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // THIS IS THE PLACE where 'return response' comes!


//    ================>  key is set is loader function (inside of defer)
//      the defer method returns Promise, so we need to use <Await> compontent to resolve it

//  =====> Suspense allows us to show fallback components/info while we are waiting for other data to arrive.
  return (
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  //=====  Loader functions can use ANY JavaScript available code. The only limitation is hooks, because it's not a React component
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //  ================    1 method
    // return {isError: true, message: 'Could not fetch events...'}

    //  ================    2 method
    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {
    //     status: 500
    // })

    return json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    // ========   this response is a Java Response object that is returned by backend after fetch was made
    // ========   it looks like Responce ('any data from server', {status: 201} ... and so on)
    // ========   so what react-router does it just simply extracts data from the first argument ->
    // ========   'any data from server' that is. (usually some object)
    // ========   The point is that we can simply return the response, and let react-router handle logic of extracting
    // ========   DON'T FORGET to properly extract data using 'useLoaderData', depending on type of data backend returns
    const data = await response.json()
    return data.events
  }
}

export const loader = () => {
  return defer({
    events: loadEvents()
  })


};

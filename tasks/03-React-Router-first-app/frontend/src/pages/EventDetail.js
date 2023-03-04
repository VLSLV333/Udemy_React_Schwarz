import { Suspense } from "react";
import { useRouteLoaderData, json, redirect, defer, Await } from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetail = () => {
  // loader function down on this page passes this kind of object
  const {event, events} = useRouteLoaderData("event-detail");

  return(
    <>
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
    <Await resolve={event}>
    {loadedEvent => <EventItem event={loadedEvent} />}
    </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
    <Await resolve={events}>
    {loadedEvents => <EventsList events={loadedEvents}/>}
    </Await>
    </Suspense>
    </>
    )
    
};

export default EventDetail;

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({
      message: "coudn`t fetch this event details!",
      status: 500,
    });
  } else {
    const data = await response.json()
    return data.event
  }
}

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

export const loader = async ({ request, params }) => {
  //  =====  can be used to extract query parameters
  //      =====> request.url
  const pageId = params.id;

  return defer({
    // ====>      await here makes sure that before accessing <EventDetails> page, we will 100% load and render the info
    //        which is fetched using 'loadEvent' function. After that page is loaded and available, but 'loadEvents' will
    //          continue fetching it's data and it (<EventsList>) will be rendered as soon as data is available.
    
    //  This was made because different fetches can take different time, but some data is not that crusial for users.
    event: await loadEvent(pageId),
    events: loadEvents()
  })
};

export const action = async ({ request, params }) => {
    // request object is created in <EventItem>, while using the useSubmit hook.

  /// ===========  .id = because it is a dynamic part of url we created in App.js route
  const eventIdToDelete = params.id;
  const response = await fetch(
    "http://localhost:8080/events/" + eventIdToDelete, {
        method: request.method
    }
  );

  if (!response.ok) {
    throw json({
      message: "Coudn`t delete event",
      status: 500,
    });
  }
  return redirect("/events");
};

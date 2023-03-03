import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // THIS IS THE PLACE where 'return response' comes!

  // if (data.isError){
  //     return <p>{data.message}</p>
  // }

  const eventsArray = data.events;

  return (
    <>
      <EventsList events={eventsArray} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
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
    return response;
  }
};

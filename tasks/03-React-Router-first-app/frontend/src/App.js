import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Events, {loader as loaderEvents} from "./pages/Events";
import EventDetail, {loader as eventDetailLoader, action as deleteEventAction} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";

import { action as formAction } from "./components/EventForm"; 

import RootPage from "./pages/RootPage";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";
import NewsletterPage, {action as newsletterAction} from './pages/Newsletter'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: loaderEvents,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children:[
              { index: true, element: <EventDetail />, action: deleteEventAction},
              { path: "edit", element: <EditEvent />, action: formAction },
            ]
          },
          { path: "new", element: <NewEvent />, action: formAction},
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

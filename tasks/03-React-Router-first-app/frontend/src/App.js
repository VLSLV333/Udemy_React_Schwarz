import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Events, {loader as loaderEvents} from "./pages/Events";
import EventDetail, {loader as eventDetailLoader} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";

import RootPage from "./pages/RootPage";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";

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
          { path: ":id", element: <EventDetail />, loader: eventDetailLoader},
          { path: "new", element: <NewEvent /> },
          { path: ":id/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

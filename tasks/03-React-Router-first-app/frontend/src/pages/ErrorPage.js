import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import PageContent from "../components/PageContent";
//  =====    this error object was thrown by as in loader function in events.js
const ErrorPage = () => {

const error = useRouteError();

let providedTitle = "An error occurred";
let text = "Something went wrong!";

if (error.status === 500) {
  //    we need to parse this data only when using second method of throwing in loader function in events.js
  // text = JSON.parse(error.data).message;

  text = error.data.message;
}

if (error.status === 404) {
  providedTitle = "Not found =(";
  text = "Could not find resource or page";
}

  return (
    <>
    <MainNavigation/>
    <PageContent title={providedTitle}>
      <p>{text}</p>
    </PageContent>
    </>
  );
};

export default ErrorPage;

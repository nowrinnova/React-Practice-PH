import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    // <div id="error-page" className="text-center">
    //   <h1 className="text-center">Oops!</h1>
    //   <p>Sorry, an unexpected error has occurred.</p>
    //   <p>
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    // </div>
  <>
  <div>
    <h1>oops!</h1></div></>
  );
}
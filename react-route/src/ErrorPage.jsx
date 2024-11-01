import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate=useNavigate()
  const handleBack=()=>{
    navigate('/users')
  } 

  return (
  // <>
  //   <div id="error-page" className="text-center">
  //     <h1 className="text-center">Oops!</h1>
  //     <p>Sorry, an unexpected error has occurred.</p>
  //     <p>
  //       <i>{error.statusText || error.message}</i>
  //     </p>
  //   </div>
  // </>
  <div className="text-2xl font-bold text-center p-10 mx-auto ">
    <h1 className="">oops!</h1>
    <p>{error.statusText|| error.message}</p>
    <button className="btn btn-outline m-5" onClick={handleBack}>Go Back</button>
    </div>
    
  );
}

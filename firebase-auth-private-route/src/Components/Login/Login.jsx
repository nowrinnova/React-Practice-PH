import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
export default function Login() {
  const {loginUser}=useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  //handle the form when it's submitted
  const handleLoginForm=(event)=>{
    event.preventDefault();
    setSuccess('')

    //take the email,password value from the input field
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    
    loginUser(email,password)
    .then(result=>{
      setSuccess('login successfully')
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <div className="max-w-[400px] mx-auto">
      <h1 className="text-2xl font-bold my-4 text-center">LogIn</h1>
      <form onSubmit={handleLoginForm}>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>
       
        <label className="input input-bordered flex items-center gap-2 my-4 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <button
            className="absolute right-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="grow"
          />
        </label>
        <div className="text-center">
          <button className="btn btn-accent btn-wide">Sign Up</button>
        </div>
        <p className="text-center my-4 text-sm">
          Do not have account?
          <NavLink to={"/register"} className="font-bold">
            {" "}
            Register Here
          </NavLink>{" "}
        </p>
        {/* {{errorMessage && (
          <p className="text-center text-sm text-red-700 my-4">
            {errorMessage}
          </p>
        )} */}
        {success && (
          <p className="text-center text-sm text-green-700 my-4">{success}</p>
        )} 
      </form>
    </div>
  )
}

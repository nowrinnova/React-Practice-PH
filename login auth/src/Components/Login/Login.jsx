import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase/firebase.init'
import { NavLink } from 'react-router-dom';

export default function () {
  const [errorMessage,setErrorMessage]=useState('')
  const [success, setSuccess] = useState(false);
  const handleSubmit=(event)=>{
    event.preventDefault()
    //set error message
    setErrorMessage('')
    //set the success massage when new users started
    setSuccess(false);
    const email=event.target.email.value
    const password=event.target.password.value
    const terms=event.target.terms.checked
    if(password.length<6){
      setErrorMessage('password will be more then 6 character')
      return
    }
    if(terms ===false){
      setErrorMessage('terms & condition are not checked in')
      return
    }
    console.log(email)
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      setSuccess(true);
      console.log(result.user)})
    .catch(error=>{
      console.log(error.message)
      setErrorMessage(error.message)
      setSuccess(false);
    })

  }
  return (
  <div className='max-w-2xl mx-auto'><div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='username' placeholder="username" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label justify-start gap-2 cursor-pointer">
          <input type="checkbox" name="terms" className="checkbox" />
          <span className="label-text">Remember me</span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center mx-auto text-sm my-4'>create new account <NavLink className='font-bold text-lg' to={'/register'}> Sign In</NavLink></p>
      {errorMessage && <p className='text-center text-red-600'>{errorMessage}</p>}
      {success && <p className='text-center text-green-900'>login successfully</p>}
    </div>
  </div>
</div></div>
  )
}

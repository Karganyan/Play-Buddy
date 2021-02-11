import React, { useState } from "react"
import { useHistory } from "react-router"
import { signUpThunk} from "../../redux/action-creators/user"
import { useDispatch } from "react-redux"
import '../Signup/signup.css'

const SignUp = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const [ inputValue, setInputValue ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const inputHandler = (event) => {
    setInputValue(prev => {
      return {...prev, [event.target.name]: event.target.value}
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    dispatch(signUpThunk(inputValue, history, setError))
  }

  return (
    <div className='wrapper'>
    <div className='container'>
      <form>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-white">Name</label>
          <input onChange={inputHandler} name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label text-white">Email</label>
          <input onChange={inputHandler} name='email' type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
        </div>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputPassword3" className="form-label text-white">Password</label>
          <input onChange={inputHandler} name='password' type="password" className="form-control" id="exampleInputPassword3" />
        </div>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputPassword4" className="form-label text-white">Confirm Password</label>
          <input onChange={inputHandler} name='confirmPassword' type="password" className="form-control" id="exampleInputPassword4" />
        </div>
        {error ? <p className='text-error text-danger'>{error}</p> : null}
        <button onClick={submitHandler} type="submit" className="btn btn-primary col-md-2 offset-md-5">Sign Up</button>
      </form>
      {/*{error ? <p>{error}</p> : null}*/}
    </div>
    </div>
  )
}

export default SignUp

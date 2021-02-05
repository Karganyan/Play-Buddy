import { Link } from "react-router-dom"
import { useState } from 'react'
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { signInThunk } from "../../redux/action-creators/user"


const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [ inputValue, setInputValue ] = useState()

  const inputHandler = (event) => {
    setInputValue(prev => {
      return {...prev, [event.target.name]: event.target.value}
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    // console.log('gfgfgfgfg')
    dispatch(signInThunk(inputValue, history))
  }

  return (
    <div className='container mt-5'>
      <form className='d-flex flex-column'>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputEmail12" className="form-label">Email</label>
          <input onChange={inputHandler} name='email' type="email" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" />
        </div>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputPassword13" className="form-label">Password</label>
          <input onChange={inputHandler} name='password' type="password" className="form-control" id="exampleInputPassword13" />
        </div>
        <button onClick={submitHandler} type="submit" className="btn btn-primary col-md-2 offset-md-5 mb-2">Sign In</button>
        <Link to='/signup' className="form-text col-md-2 offset-md-5 mb-2 ">Create account</Link>
      </form>
    </div>
  )
}

export default SignIn

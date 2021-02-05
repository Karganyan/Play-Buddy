import { Link } from "react-router-dom"
import { useState } from 'react'
import { useHistory } from "react-router"

const SignIn = () => {
  const history = useHistory()
  const [ inputValue, setInputValue ] = useState()

  const inputHandler = (event) => {
    setInputValue(prev => {
      return {...prev, [event.target.name]: event.target.value}
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const req = await fetch('http://localhost:3001/auth/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputValue)
    })
    const res = await req.json()
    console.log(res)
    if (res.status === 200) {
      history.push('/')
    }
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
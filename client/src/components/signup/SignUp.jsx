import { useState } from "react"
import { useHistory } from "react-router"

const SignUp = () => {
  const history = useHistory()
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
    const req = await fetch('http://localhost:3001/auth/signup', {
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
      <form>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input onChange={inputHandler} name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
          <input onChange={inputHandler} name='email' type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
        </div>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputPassword3" className="form-label">Password</label>
          <input onChange={inputHandler} name='password' type="password" className="form-control" id="exampleInputPassword3" />
        </div>
        <div className="col-md-4 offset-md-4 mb-3">
          <label htmlFor="exampleInputPassword4" className="form-label">Confirm Password</label>
          <input onChange={inputHandler} name='confirmPassword' type="password" className="form-control" id="exampleInputPassword4" />
        </div>
        <button onClick={submitHandler} type="submit" className="btn btn-primary col-md-2 offset-md-5">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp

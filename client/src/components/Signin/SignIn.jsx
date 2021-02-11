import { Link } from "react-router-dom"
import React, { useState } from 'react'
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { signInGoogleThunk, signInThunk, signInVkThunk} from "../../redux/action-creators/user"
import '../Signin/signin.css'
import {theme} from "../Main/Theme"
import {GlobalStyles} from "../Main/Global"
import Burger from "../Main/components/Burger/Burger"
import Menu from "../Main/components/Menu/Menu"
import {ThemeProvider} from "styled-components"

const Signin = () => {
  const history = useHistory()
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const [ inputValue, setInputValue ] = useState()

  const inputHandler = (event) => {
    setInputValue(prev => {
      return {...prev, [event.target.name]: event.target.value}
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    dispatch(signInThunk(inputValue, history, setError))
  }
  const googleHandler = () => {
    dispatch(signInGoogleThunk(history))
  }
  const vkHandler = () => {
    dispatch(signInVkThunk(history))
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <form className='d-flex flex-column'>
          <div className="col-md-4 offset-md-4 mb-3">
            <label htmlFor="exampleInputEmail12" className="form-label text-white">Email</label>
            <input onChange={inputHandler} name='email' type="email" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" />
          </div>
          <div className="col-md-4 offset-md-4 mb-3">
            <label htmlFor="exampleInputPassword13" className="form-label text-white">Password</label>
            <input onChange={inputHandler} name='password' type="password" className="form-control" id="exampleInputPassword13" />
          </div>
          {error ? <p className='text-error text-danger'>{error}</p> : null}
          <button onClick={submitHandler} type="submit" className="btn btn-primary col-md-2 offset-md-5 mb-2">Sign In</button>
          <a href='http://localhost:3001/user/google' className=" btn btn-primary google form-text col-md-2 offset-md-5 mb-2">Войти через <i
            className="fab fa-google"/></a>
          <a href='http://localhost:3001/user/auth/vkontakte' className="btn btn-primary vk form-text col-md-2 offset-md-5 mb-2">Войти через <i
            className="fab fa-vk"/></a>
          <Link to='/signup' className="create form-text col-md-2 offset-md-5 mb-2">Create account</Link>
        </form>
      </div>
    </div>
  )
}

export default Signin

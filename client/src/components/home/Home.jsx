import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInSession } from "../../redux/action-creators/user"

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  useEffect(() => {
    dispatch(userInSession())
  }, [])

  return (
    <div className='container mt-5'>
      {user.id
        ?
        <h1>Привет {user.name}</h1>
        :
        <h1>Нужно зарегестрироваться</h1>
      }
    </div>
  )
}

export default Home

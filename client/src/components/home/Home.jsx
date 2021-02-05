import { useEffect, useState } from "react"

const Home = () => {
  const [ user, setUser ] = useState({})
  useEffect(() => {
    (async () => {
      const req = await fetch('http://localhost:3001/auth/in-session', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        }
      })
      const res = await req.json()
      setUser(res)
    })()
  }, [])
  // console.log('----ff> ', user)
  return (
    <div className='container mt-5'>
      {user?.id && user?.id ? user.name : 'home'}
    </div>
  )
}

export default Home

import { useEffect, useState } from "react"

const Home = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    (async () => {
      const req = await fetch('/auth/in-session', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        mode: 'cors'
      })
      const res = await req.json();
      if (res.user) {
        setUser(res.user)
      }
    })()
  }, [])
  return (
    <div className='container mt-5'>
      {user?.id && user?.id ? user.name : 'home'}
    </div>
  )
}

export default Home

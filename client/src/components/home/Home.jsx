import { useEffect, useState } from "react"

const Home = () => {

  // useEffect(() => {
  //   (async () => {
  //     const req = await fetch('http://localhost:3001/auth/in-session', {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         'Content-type': 'application/json',
  //       }
  //     })
  //     const res = await req.json()
  //     setUser(res)
  //   })()
  // }, [])
  // console.log('----ff> ', user)
  return (
    <div className='container mt-5'>
      Home
    </div>
  )
}

export default Home

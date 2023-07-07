import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AboutMe() {
  // A hook that allows us to destructure params coming from the endpoint
  const { name } = useParams()
  // A hook that allows us to dynamically change the navigation of our UI
  let navigate = useNavigate()

  return (
    <div>
        <h1>Hello, my name is {name}</h1>
        <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  )
}

export default AboutMe
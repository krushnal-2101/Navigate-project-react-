import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
    const navigate = useNavigate()   
  return (
    <div>
       <h1>services page</h1>
       <button onClick={()=> navigate(-1)}>back</button>
    </div>
  )
}

export default Services

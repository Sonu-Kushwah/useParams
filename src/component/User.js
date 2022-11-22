import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const params=useParams();
  const {name}=params;
  return (
    <>
     <h3>This is User Page :{name}</h3>
    </>
  )
}

export default User
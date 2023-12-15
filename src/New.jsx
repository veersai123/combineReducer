import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function New() {
    const name=useSelector((state)=>state.name)
    const dispatch=useDispatch()
  return (
    <>
        <h1>{name}</h1>
        <button onClick={()=>dispatch({type:"A"})}>change</button>
    </>
  )
}

export default New
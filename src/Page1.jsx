import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Page1() {
    const x=useSelector((state)=>state.Reducer1.name)
    const dispatch=useDispatch()
  return (
    <>
          <h1>{x}</h1>
          <div>Page1</div>
          <button onClick={()=>dispatch({type:"A"})}>changeName</button>
    </>
    
  )
}

export default Page1
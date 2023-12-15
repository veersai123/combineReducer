import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Page2() {
    const y=useSelector((state)=>state.Reducer2.count)
    const dispatch=useDispatch()
  return (
    <>
    <h1>{y}</h1>
    <button onClick={()=>dispatch({type:"C"})}>incrementCount</button>
    </>
    
  )
}

export default Page2
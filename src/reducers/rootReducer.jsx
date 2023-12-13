import { combineReducers } from "redux"

const intialState={
    name:"deepak",
  }
const secondState={
    count:0
}
const Reducer1=(state=intialState,action)=>{
    console.log(action)
    switch(action.type)
    {
      case "A":
        return {
          ...state,
          name:"veer sai"
        }
      default:
         return state
    }
  }
const Reducer2=(state=secondState,action)=>{
    console.log(action)
    switch(action.type)
    {
      case "C":
        return {
          ...state,
         count:state.count+1
        }
      default:
         return state
    }
  }

export const rootReducer=combineReducers({
    Reducer1:Reducer1,
    Reducer2:Reducer2
})
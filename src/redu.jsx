import { produce } from "immer"
const intialState={
    name:'Deepak',
    phone:8398398393   
}
export const redu=(state=intialState,action)=>{
    
    
    return produce(state,(y)=>{
        switch(action.type)
        {
            case 'A':
                y.name="React-Redux"
        }
})}


// export const redu=(state=intialState,action)=>{
// switch(action.type)
// {
//     case 'A':
//         return{
//             ...state,
//             name:'Veer Sai'
//         }
//     default:
//         return state
// }
// }
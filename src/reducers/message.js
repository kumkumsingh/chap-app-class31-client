import { ADD_MESSAGES } from "../actions";

export default function messages( state = [], action ={})
{
    console.log("reducer",state,"action",action.type,"payload",action.payload)
    switch(action.type){
        case ADD_MESSAGES:
            return action.payload
        default :
        return state 
    }
}
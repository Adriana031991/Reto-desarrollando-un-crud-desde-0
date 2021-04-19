import { LIST_CIRCUITS } from "../actions/circuit-actions";

const initialState = {
    circuits: []
}
export function listCircuits(state = initialState, action){

    switch(action.type){
        case LIST_CIRCUITS:
            console.log("action", action)
            return Object.assign({}, state, {circuits: action.payload})
        default:
            return state
    }

}
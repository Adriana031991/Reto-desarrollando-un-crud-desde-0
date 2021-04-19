import { ADD_PLAYER } from "../actions/player-actions";

const initialState = {
    players: [],
    newPlayer : {}
}
export function addPlayer(state = initialState, action){

    switch(action.type){
        case ADD_PLAYER:
            return { 
                ...state,
                players: [...state.players, action.payload]
            }
        default:
            return state
    }

}
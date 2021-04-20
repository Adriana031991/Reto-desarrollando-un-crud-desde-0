import { ADD_PLAYER, RESET } from "../actions/player-actions";

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
        case RESET:
            return Object.assign({}, state, { players:[], newPlayer:{}})

        default:
            return state
    }

}
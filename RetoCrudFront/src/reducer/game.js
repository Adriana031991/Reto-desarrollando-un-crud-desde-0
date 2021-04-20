import { SET_TOTAL_PLAYERS, ADD_PLAYER, START_GAME, RESET } from "../actions/game-actions";

const initialState = {
    totalPlayers: 0,
    cars: [],
    podium: null,
}
export function game(state = initialState, action) {

    switch (action.type) {
        case SET_TOTAL_PLAYERS:

            return Object.assign({}, state, { totalPlayers: action.payload })
        case ADD_PLAYER:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case START_GAME:
            return Object.assign({}, state, { podium: action.payload })

        case RESET:
            return Object.assign({}, state, { totalPlayers:0, cars:[], podium:null})
        default:
            return state
    }

}
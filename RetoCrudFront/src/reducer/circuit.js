import { LIST_CIRCUITS, SELECT_CIRCUIT, RESET } from "../actions/circuit-actions";

const initialState = {
    circuits: [],
    circuitSelected: null
}
export function circuit(state = initialState, action) {

    switch (action.type) {
        case LIST_CIRCUITS:
            return Object.assign({}, state, { circuits: action.payload })
        case SELECT_CIRCUIT:
            return Object.assign({}, state, { circuitSelected: action.payload })
            case RESET:
            return Object.assign({}, state, { circuits:[], circuitSelected:null})
        default:
            return state
    }

}
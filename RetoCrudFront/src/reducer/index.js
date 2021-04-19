import { combineReducers } from 'redux';
import { listCircuits } from './circuit';
import { addPlayer } from './player';

const rootReducer = combineReducers({
    circuit : listCircuits,
    player : addPlayer
});

export default rootReducer;
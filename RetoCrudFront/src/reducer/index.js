import { combineReducers } from 'redux';
import { circuit } from './circuit';
import { addPlayer } from './player';
import { game } from './game';

const rootReducer = combineReducers({
    circuit : circuit,
    player : addPlayer,
    game : game
});

export default rootReducer;
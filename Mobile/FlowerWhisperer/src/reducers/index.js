import { combineReducers } from 'redux';

import HealthReducer from './HealthReducer';

export default combineReducers({
        health: HealthReducer,
}); 

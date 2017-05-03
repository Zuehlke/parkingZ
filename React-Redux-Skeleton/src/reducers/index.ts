import { buildings, isFetchingBuildings } from './Reducers';
import { combineReducers } from "redux";

// create root reducer for redux:
export const rootReducer = combineReducers({
    buildings,
    isFetchingBuildings
});
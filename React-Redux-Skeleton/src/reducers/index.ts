import { buildings, isFetchingBuildings, building, isFetchingBuilding } from './Reducers';
import { combineReducers } from "redux";

// create root reducer for redux:
export const rootReducer = combineReducers({
    buildings,
    isFetchingBuildings,
    building,
    isFetchingBuilding
});
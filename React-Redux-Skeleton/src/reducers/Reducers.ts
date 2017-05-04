import {
    FETCH_BUILDINGS, FETCH_BUILDINGS_FULFILLED,
    FETCH_BUILDING, FETCH_BUILDING_FULFILLED,
} from "../actions/Actions";

export const buildings = (state: Building[] = [], action: ActionWithPayload<any>): Building[] => {
    switch (action.type) {
        case FETCH_BUILDINGS:
            return [];

        case FETCH_BUILDINGS_FULFILLED:
            return action.payload.data.buildings;

        default:
            return state;
    }
};

export const isFetchingBuildings = (state = false, action: Action): boolean => {
    switch (action.type) {
        case FETCH_BUILDINGS:
            return true;

        case FETCH_BUILDINGS_FULFILLED:
            return false;

        default:
            return state;
    }
};

export const building = (state: Building = {_id: '-1', name: '', levels: []}, action: ActionWithPayload<any>): Building => {
    switch (action.type) {
        case FETCH_BUILDING:
            return { _id: '-1', name: 'empty', levels: []};

        case FETCH_BUILDING_FULFILLED:
            return action.payload.data.building[0];

        default:
            return state;
    }
};

export const isFetchingBuilding = (state = false, action: Action): boolean => {
    switch (action.type) {
        case FETCH_BUILDING:
            return true;

        case FETCH_BUILDING_FULFILLED:
            return false;

        default:
            return state;
    }
};
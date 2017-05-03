import {
    FETCH_BUILDINGS, FETCH_BUILDINGS_FULFILLED,
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
export const FETCH_BUILDINGS = 'FETCH_BUILDINGS';
export const FETCH_BUILDINGS_FULFILLED = 'FETCH_BUILDINGS_FULFILLED';

export const fetchBuildings = () => ({
    type: FETCH_BUILDINGS
});

export const fetchBuildingsFulfilled = (payload: Building[]) => ({
    type: FETCH_BUILDINGS_FULFILLED, payload
});
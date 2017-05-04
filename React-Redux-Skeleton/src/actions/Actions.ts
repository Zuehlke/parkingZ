export const FETCH_BUILDINGS = 'FETCH_BUILDINGS';
export const FETCH_BUILDINGS_FULFILLED = 'FETCH_BUILDINGS_FULFILLED';

export const FETCH_BUILDING = 'FETCH_BUILDING';
export const FETCH_BUILDING_FULFILLED = 'FETCH_BUILDING_FULFILLED';

export const fetchBuildings = () => ({
    type: FETCH_BUILDINGS
});

export const fetchBuildingsFulfilled = (payload: Building[]) => ({
    type: FETCH_BUILDINGS_FULFILLED, payload
});


export const fetchBuilding = (buildingId: string) => ({
    type: FETCH_BUILDING, payload: buildingId
});

export const fetchBuildingFulfilled = (payload: Building) => ({
    type: FETCH_BUILDING_FULFILLED, payload
});
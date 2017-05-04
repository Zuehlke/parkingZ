import { DataService } from './../services/DataService';
import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";
import {
    FETCH_BUILDINGS, fetchBuildingsFulfilled,
    FETCH_BUILDING, fetchBuildingFulfilled,
} from "../actions/Actions";

const dataService = new DataService();

export const fetchBuildingsEpic = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$.ofType(FETCH_BUILDINGS)
        .mergeMap(action =>
            dataService.fetchBuildings()
                .map(fetchBuildingsFulfilled)
        );

export const fetchBuildingEpic = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$.ofType(FETCH_BUILDING)
        .mergeMap(action =>
            dataService.fetchBuilding(action.payload)
                .map(fetchBuildingFulfilled)
        );
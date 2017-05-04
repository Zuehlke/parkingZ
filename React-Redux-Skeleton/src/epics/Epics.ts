import { DataService } from './../services/DataService';
import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";
import {
    FETCH_BUILDINGS, fetchBuildingsFulfilled,
} from "../actions/Actions";

const dataService = new DataService();

export const fetchBuildingsEpic = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$.ofType(FETCH_BUILDINGS)
        .mergeMap(action =>
            dataService.fetchBuildings()
                .map(fetchBuildingsFulfilled)
        );
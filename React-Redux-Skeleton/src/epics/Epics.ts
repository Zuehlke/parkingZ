import { DataService } from './../services/DataService';
import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";
import {
    FETCH_EXPENSES, fetchExpensesFulfilled,
} from "../actions/Actions";

const dataService = new DataService();

export const fetchExpensesEpic = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$.ofType(FETCH_EXPENSES)
        .mergeMap(action =>
            dataService.fetchExpenses()
                .map(fetchExpensesFulfilled)
        );
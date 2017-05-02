import {
    FETCH_EXPENSES, FETCH_EXPENSES_FULFILLED,
} from "../actions/Actions";

export const expenses = (state: Expense[] = [], action: ActionWithPayload<any>): Expense[] => {
    switch (action.type) {
        case FETCH_EXPENSES:
            return [];

        case FETCH_EXPENSES_FULFILLED:
            return action.payload;

        default:
            return state;
    }
};

export const isFetchingExpenses = (state = false, action: Action): boolean => {
    switch (action.type) {
        case FETCH_EXPENSES:
            return true;

        case FETCH_EXPENSES_FULFILLED:
            return false;

        default:
            return state;
    }
};
export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const FETCH_EXPENSES_FULFILLED = 'FETCH_EXPENSES_FULFILLED';

export const fetchExpenses = () => ({
    type: FETCH_EXPENSES
});

export const fetchExpensesFulfilled = (payload: Expense[]) => ({
    type: FETCH_EXPENSES_FULFILLED, payload
});
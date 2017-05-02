import { combineEpics } from 'redux-observable';
import { fetchExpensesEpic } from './Epics';

export const rootEpic = combineEpics(fetchExpensesEpic);
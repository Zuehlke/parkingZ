import { combineEpics } from 'redux-observable';
import { fetchBuildingsEpic } from './Epics';

export const rootEpic = combineEpics(fetchBuildingsEpic);
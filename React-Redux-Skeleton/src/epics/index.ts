import { combineEpics } from 'redux-observable';
import { fetchBuildingsEpic, fetchBuildingEpic } from './Epics';

export const rootEpic = combineEpics(fetchBuildingsEpic, fetchBuildingEpic);
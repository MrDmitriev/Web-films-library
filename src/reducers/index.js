import {combineReducers} from 'redux';

import data, {ActionCreator as dataActionCreator} from './data.js';
import settings, {ActionCreator as settingsActionCreator} from './settings.js';

export default combineReducers({
  data,
  settings,
});

export const ActionCreator = {
  ...settingsActionCreator,
  ...dataActionCreator,
};


import {combineReducers} from 'redux';

import data, {ActionCreator as dataActionCreator} from './data.js';
import settings, {ActionCreator as settingsActionCreator} from './settings.js';
import auth, {ActionCreator as authActionCreator} from './auth.js';

export default combineReducers({
  data,
  settings,
  auth,
});

export const ActionCreator = {
  ...settingsActionCreator,
  ...dataActionCreator,
  ...authActionCreator,
};


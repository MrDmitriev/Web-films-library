import {getLoginFormData} from '../selectors/auth.js';

const initialState = {
  isAuthed: false,
  userInfo: {},
  form: {},
};

const updateFieldValue = (field, value) => ({type: `UPDATE_FIELD_VALUE`, payload: {field, value}});
const saveUserInfo = (userInfo) => ({type: `SAVE_USER_INFO`, payload: userInfo});

const submitLoginForm = () => (dispatch, getState) => {
  const formData = getLoginFormData(getState());
  const {email, password} = formData;

  if (!email || !password) {
    return false;
  }

  return dispatch(login());
};

const login = () => (dispatch, getState, api) => {
  const formData = getLoginFormData(getState());
  const {email, password} = formData;

  return api.post(`/login`, {email, password})
  .then((response) => {
    console.log(response);
    dispatch(saveUserInfo(response.data));
  });
};


const auth = (state = initialState, action) => {
  switch (action.type) {
    case `UPDATE_FIELD_VALUE`:
      const {field, value} = action.payload;
      return {
        ...state,
        form: {
          ...state.form,
          [field]: value,
        }
      };

    case `SAVE_USER_INFO`:
      return {
        ...state,
        userInfo: action.payload,
      };
  }

  return state;
};

export const ActionCreator = {
  updateFieldValue,
  submitLoginForm,
  saveUserInfo,
  login,
};

export default auth;

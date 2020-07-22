import axios from 'axios';
import {ActionCreator} from '../reducers/index.js';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    dispatch(ActionCreator.setIsFetching(false));
    return response;
  };

  const onError = (err) => {
    return err;
  };

  const onRequest = (config) => {
    dispatch(ActionCreator.setIsFetching(true));
    return config;
  };

  api.interceptors.response.use(onSuccess, onError);
  api.interceptors.request.use(onRequest);

  return api;
};

export default createAPI;

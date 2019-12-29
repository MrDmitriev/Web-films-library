import axios from 'axios';

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    return err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;

import axios from 'axios';


const Axios = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  timeout: 80000
});

/** 
 *  should see changes in test branch
 * you may add interceptors to call 
 * add automatically add needed token in header, note using token in localstorage
 * is not safe prone to see: `https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81`
 * 
 * */

/**
 
 
 Axios.interceptors.request.use(
  async (config) => {
    const token = window.localStorage.getItem()
    const tokenHeader  = token ? 'Token ' + token: null
    config.headers.Authorization = tokenHeader
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

 */

export { Axios };

import axios, { AxiosError } from 'axios';
import Cookies from 'cookies';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const secure = process.env.NODE_ENV === 'production';
    const myCookies = new Cookies();
    const accessToken = myCookies.get('ExpenseTrackingToken');
    console.log('accessToken', accessToken);
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status == 401) {
      console.log('error');
    }
    return new Promise((reject) => {
      reject(error);
    });
  }
);

// axiosInstance.interceptors.response.use(
//     (response: AxiosResponse) => {
//         return response
//     },
//     (error: AxiosError) => {
//         const original_request: $FIXME = error.config
//         if (error.response.status === 401 && !original_request._retry) {
//             original_request._retry = true
//             const myCookies = new Cookies();
//             const refresh_token: string = myCookies.get('ExpenseTrackingRefreshToken')
//             const user: $FIXME = myCookies.get('ExpenseTrackingUser')
//             if (!refresh_token && !user) {
//                 return new Promise((reject) => {
//                     reject(error)
//                 })
//             }
//             return axios_instance.post('/api/auth/refresh_token', {
//                 refresh_token: refresh_token,
//             }).then(res => {
//                 if (res.status !== 200) {
//                     return;
//                 }
//                 let secure = process.env.NODE_ENV === "production";
//                 const myCookies = new Cookies({secure});
//                 myCookies.set('ExpenseTrackingToken', res.data.access_token, {
//                     secure,
//                     sameSite: "strict",
//                     maxAge: getUMonthM(),
//                     path: "/",
//                 });
//                 original_request.headers.authorization = 'Bearer ' + res.data.access_token
//                 return axios(original_request)
//             })
//         }
//     }
// )

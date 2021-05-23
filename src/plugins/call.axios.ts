import axios, { Method } from 'axios';
import { $FIXME } from '@utils/constant';

export const callApi = (
  method: Method,
  url: string,
  withCredential: boolean,
  data?: $FIXME,
  accessToken?: string
) => {
  const config = {
    method,
    url: `api/${url}`,
    withCredentials: withCredential,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    data,
  };
  return axios(config)
    .then((res) => res)
    .catch((err) => {
      console.log(err);
    });
};

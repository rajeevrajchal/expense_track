import axios from 'axios';
import { $FIXME } from '@utils/constant';

export const loginUser = async (loginDetail: $FIXME) => {
  const res = await axios.post('/api/auth/login', loginDetail);
  if (res.status !== 200) {
    return false;
  }
  return res.data;
};

import axios from 'axios';
import { $FIXME } from '@utils/constant';
import { toast } from 'react-toast';

export const loginUser = async (loginDetail: $FIXME) => {
  const res: $FIXME = await axios.post('/api/auth/login', loginDetail);
  console.log(res, 'api res');
  if (!res) {
    toast('Failed to login');
  }
  return res;
};

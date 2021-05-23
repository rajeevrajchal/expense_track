import { NextApiRequest } from 'next';
import { verifyToken } from '@plugins/jwt';
import { $FIXME } from '@utils/constant';

export const tokenVerification = async (
  req: NextApiRequest
  // eslint-disable-next-line consistent-return
) => {
  try {
    if (!req.headers.authorization) {
      return {
        status: false,
        message: 'You are not authorized, Authorization missing. ',
      };
    }
    const authorization: $FIXME = req.headers.authorization.split(' ');
    if (authorization[0] !== 'Bearer') {
      return {
        status: false,
        message: 'token error, required bearer. ',
      };
    }
    const verified = await verifyToken(authorization[1]);
    if (verified) {
      return {
        status: true,
      };
    }
  } catch (e) {
    return {
      status: false,
      message: 'You are not authorized ',
    };
  }
};

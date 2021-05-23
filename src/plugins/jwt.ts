import jwt from 'jsonwebtoken';
import { $FIXME } from '@utils/constant';

export const createToken = (obj: $FIXME): $FIXME => {
  const secretkey = process.env.SECRET_KEY;
  console.log('time', process.env.TOKEN_EXPIRE);
  const payload = {
    _id: obj._id,
    role: obj.role,
    name: obj.name,
    email: obj.email,
  };
  return jwt.sign(payload, secretkey, {
    expiresIn: 1500,
  });
};

export const createRefreshToken = (obj: $FIXME): $FIXME => {
  const secretkey = process.env.SECRET_KEY_REFRESH;
  console.log('time', process.env.TOKEN_EXPIRE);
  const payload = {
    _id: obj._id,
    role: obj.role,
    name: obj.name,
    email: obj.email,
  };
  return jwt.sign(payload, secretkey, {
    expiresIn: 360000,
  });
};

export const decodeToken = (token: string): $FIXME => {
  return jwt.decode(token);
};

export const verifyToken = (authorization: $FIXME): $FIXME => {
  return jwt.verify(authorization, process.env.SECRET_KEY);
};

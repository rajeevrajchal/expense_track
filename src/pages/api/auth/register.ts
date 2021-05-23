import userModel from 'models/user.model';
import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from 'plugins/crypto';
import { dbConnect } from 'plugins/db.mongo';

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(422).json({
        message: 'duplicate user',
      });
    }
    const encryptedPassword: string | unknown = await hashPassword(
      req.body.password
    );
    const user = await userModel.create({
      name: req.body.name.toLowerCase(),
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      social_media: req.body.social_media,
      password: encryptedPassword,
    });
    if (user) {
      return res.status(201).json({
        message: 'successfully created.',
      });
    }
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return registerUser(req, res);
    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}

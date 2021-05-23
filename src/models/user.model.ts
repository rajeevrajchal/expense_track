import mongoose, { Schema } from 'mongoose';
import { rString, uObject, uString, dEnum } from '@utils/model.fields';
import { usersRole } from '../enums/user.enum';

const userSchema = new Schema(
  {
    name: rString,
    email: rString,
    password: rString,
    address: uString,
    phone: uString,
    social_media: uObject,
    role: dEnum(usersRole, usersRole.customer),
  },
  {
    timestamps: true,
  }
);
export default mongoose.models && mongoose.models.users
  ? mongoose.models.users
  : mongoose.model('users', userSchema);

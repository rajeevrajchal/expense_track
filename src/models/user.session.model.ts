import mongoose, { Schema } from 'mongoose';
import { rString } from '@utils/model.fields';

const userSessionSchema = new Schema(
  {
    refresh_token: rString,
    access_token: rString,
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models && mongoose.models.sessions) ??
  mongoose.model('sessions', userSessionSchema);

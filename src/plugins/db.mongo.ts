import mongoose from 'mongoose';
import { $FIXME } from '@utils/constant';

const connection: $FIXME = {};

export const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
  connection.isConnected = db.connection.readyState;
};

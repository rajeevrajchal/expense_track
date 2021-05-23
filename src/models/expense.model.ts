import { rNumber, rObject, uString, rString } from '@utils/model.fields';
import mongoose, { Schema } from 'mongoose';

const expenseSchema = new Schema(
  {
    name: rString,
    category: rObject,
    amount: rNumber,
    date: uString,
    user_id: rString,
  },
  {
    timestamps: true,
  }
);
export default mongoose.models && mongoose.models.expenses
  ? mongoose.models.expenses
  : mongoose.model('expenses', expenseSchema);

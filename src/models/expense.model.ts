import {rNumber, rObject} from '@utils/model.fields';
import mongoose, {Schema} from "mongoose";
import {rString} from "@utils/model.fields";

const expenseSchema = new Schema({
    name: rString,
    category: rObject,
    amount: rNumber,
    date: rString,
    user_id: rString
}, {
    timestamps: true
})
export default (mongoose.models && mongoose.models.expenses? mongoose.models.expenses: mongoose.model('expenses', expenseSchema));

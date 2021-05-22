import { userRole } from '../enums/user.enum';
import { dEnum } from '@utils/model.fields';
import mongoose, {Schema} from "mongoose";
import {rString, uObject, uString} from "@utils/model.fields";

const userSchema = new Schema({
    name: rString,
    email: rString,
    password: rString,
    address: uString,
    phone: uString,
    social_media: uObject,
    role: dEnum(userRole, userRole.customer)
}, {
    timestamps: true
})
export default (mongoose.models && mongoose.models.users? mongoose.models.users: mongoose.model('users', userSchema));

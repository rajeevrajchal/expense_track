import mongoose from "mongoose";
import {$FIXME} from "@utils/constant";

const connection: $FIXME = {}

//FUNCTION TO CONNECT MONGO DB
export const dbConnect = async () => {

    //CHECK IF CONNECTED
    if (connection.isConnected) {
        return;
    }
    //ELSE CONNECT
    const db = await mongoose.connect(
        process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        }
    )
    connection.isConnected = db.connection.readyState
}

import {NextApiRequest, NextApiResponse} from "next";
import Cookies from "cookies";
import {dbConnect} from "@plugins/db.mongo";
import userSession from '@models/user.session.model'
import {createRefreshToken, decodeToken} from "@plugins/jwt";
import {getUMonthM} from "@utils/uDate";

const updateAccessToken = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        //update refresh token
        await dbConnect()
        let secure = process.env.NODE_ENV === "production";
        const myCookies = new Cookies(req, res, {secure});
        const refreshToken = myCookies.get('ExpenseTrackingRefreshToken')
        const user = decodeToken(refreshToken)
        const newRefreshToken = createRefreshToken(user)
        const sessionRes = await userSession.findOneAndUpdate({refresh_token: refreshToken}, {
            refresh_token: newRefreshToken
        })
        if (!sessionRes) {
            return res.status(200).json({error: true, message: 'Failed To Update Token'});
        }
        await myCookies.set('ExpenseTrackingRefreshToken', newRefreshToken, {
            secure,
            sameSite: "strict",
            path: "/",
        });
        return res.status(200).json({message: "success."})
    } catch (e) {
        return res.status(400).json({message: 'Bad Request', error: e});
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            return updateAccessToken(req, res);
        default:
            return res.status(400).json({message: 'Bad Request'});
    }
}

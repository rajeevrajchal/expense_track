import {NextApiRequest, NextApiResponse} from "next";
import Cookies from "cookies";
import userSession from '@models/user.session.model'
import {dbConnect} from "@plugins/db.mongo";

const logOutUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await dbConnect()
        let secure = process.env.NODE_ENV === "production";
        const myCookies = new Cookies(req, res, {secure});
        const refreshToken = myCookies.get('ExpenseTrackingRefreshToken')
        const removeRefreshTokenRes = await userSession.findOneAndRemove({refresh_token: refreshToken})
        if (removeRefreshTokenRes) {
            await myCookies.set('ExpenseTrackingToken', '')
            await myCookies.set('ExpenseTrackingRefreshToken', '')
            return res.status(200).json({
                message: 'successfully logout.',
            });
        }
        return res.status(200).json({
            message: 'cannot logout.',
        });
    } catch (e) {
        return res.status(400).json({
            message: 'bad request.',
            error: e
        });
    }

}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            return logOutUser(req, res);
        default:
            return res.status(400).json({message: 'Bad Request'});
    }
}

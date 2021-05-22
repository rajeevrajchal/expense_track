import {$FIXME} from '@utils/constant';
import userModel from '@models/user.model';
import userSession from '@models/user.session.model';
import {NextApiRequest, NextApiResponse} from 'next';
import {checkPassword} from '@plugins/crypto';
import {dbConnect} from '@plugins/db.mongo';
import {createToken, createRefreshToken} from '@plugins/jwt';
import Cookies from "cookies";
import {getUMonthM} from "@utils/uDate";


const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect()
    let secure = process.env.NODE_ENV === "production";
    const myCookies = new Cookies(req, res, {secure});
    const userExist: $FIXME = await userModel.findOne({email: req.body.email})
    if (!userExist) {
        return res.status(422).json({
            message: `Incorrect Credentials.`,
        });
    }
    const isMatch: boolean | unknown = await checkPassword(req.body.password, userExist.password);
    if (!isMatch) {
        return res.status(422).json({
            message: `Incorrect Credentials.`,
        });
    }
    const token = await createToken(userExist)
    const refreshToken = await createRefreshToken(userExist)
    console.log(refreshToken, 'refreshToken')
    //store refresh token to db.
    const sessionResponse = await userSession.create({
        refresh_token: refreshToken,
        access_token: token
    })
    if (!sessionResponse) {
        return res.status(422).json({
            message: `Internal server error.`,
        });
    }
    myCookies.set('ExpenseTrackingToken', token, {
        secure,
        sameSite: "strict",
        maxAge: getUMonthM(),
        path: "/",
    });

    myCookies.set('ExpenseTrackingRefreshToken', refreshToken, {
        secure,
        sameSite: "strict",
        path: "/",
    });

    res.status(200).json({
        message: 'success full login',
        user: {
            _id: userExist._id,
            address: userExist.address,
            createdAt: userExist.createdAt,
            email: userExist.email,
            name: userExist.name,
            phone: userExist.phone,
            role: userExist.role
        },
        token: token
    });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            return loginUser(req, res);
        default:
            return res.status(400).json({message: 'Bad Request'});
    }
}

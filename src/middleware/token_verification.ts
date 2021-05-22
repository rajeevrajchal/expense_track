import {NextApiRequest, NextApiResponse} from "next";
import {verifyToken} from "@plugins/jwt";


export const tokenVerification = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!req.headers['authorization']) {
            return {
                status: false,
                message: "You are not authorized, Authorization missing. "
            }
        }
        let authorization = req.headers['authorization'].split(' ');
        if (authorization[0] !== 'Bearer') {
            return {
                status: false,
                message: "token error, required bearer. "
            }
        }
        const verified = await verifyToken(authorization[1])
        if (verified) {
            return {
                status: true
            }
        }
    } catch (e) {
        return {
            status: false,
            message: "You are not authorized "
        }
    }
}

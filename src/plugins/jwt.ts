import jwt from 'jsonwebtoken'

export const createToken = (obj) => {
    const secret_key = process.env.SECRET_KEY
    console.log('time', process.env.TOKEN_EXPIRE)
    const payload = {
        _id: obj._id,
        role: obj.role,
        name: obj.name,
        email: obj.email,
    }
    return jwt.sign(
        payload,
        secret_key,
        {
            expiresIn: 1500
        },
    );
}

export const createRefreshToken = (obj) => {
    const secret_key = process.env.SECRET_KEY_REFRESH
    console.log('time', process.env.TOKEN_EXPIRE)
    const payload = {
        _id: obj._id,
        role: obj.role,
        name: obj.name,
        email: obj.email,
    }
    return jwt.sign(
        payload,
        secret_key,
        {
            expiresIn: 360000
        },
    );
}

export const decodeToken = (token: string) => {
    return jwt.decode(token)
}

export const verifyToken = (authorization) => {
    return jwt.verify(authorization, process.env.SECRET_KEY)
}

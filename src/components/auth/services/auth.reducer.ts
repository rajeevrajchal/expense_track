import {initialState} from "@context/store";
import {$FIXME} from "@utils/constant";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

type IUser = {
    _id: string;
    email: string;
    name: string;
    role: string;
    address: string,
    phone: string,
    social_media: $FIXME
};

export interface AuthStateInterface {
    token: string;
    user: IUser;
}

interface ActionType {
    type?: string;
    payload: AuthStateInterface;
}

export const loginReducer = (state = initialState, action: ActionType) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                token: payload.token,
                user: {
                    ...state.user,
                    ...payload.user,
                },
            };
        case LOGOUT_USER:
            return {
                ...state,
                token: '',
                user: {
                    email: '',
                    password: '',
                    _id: '',
                    role: '',
                },
            };
        default:
            return state;
    }
};

import {createContext, FC, useReducer} from 'react';
import {$CHILDREN, $FIXME} from '@utils/constant';
import {modalReducer} from "@ui/shared/modal/services/modal-reducer";

interface ContextProviderInterface {
    children: $CHILDREN;
}

export const initialState = {
    isLoggedIn: false,
    user: {
        _id: '',
        email: '',
        name: '',
        role: '',
        address: '',
        phone: '',
        social_media: []
    },
    token: '',
    modal: {
        show: false,
        mode: '',
    },
};

export const Context = createContext<$FIXME>({});

const combineReducers = (...reducers: $FIXME) => (
    state: $FIXME,
    action: $FIXME
) => {
    for (let i = 0; i < reducers.length; i++) {
        state = reducers[i](state, action);
    }
    return state;
};

export const ContextProvider: FC<ContextProviderInterface> = ({children}) => {
    const [state, dispatch] = useReducer(combineReducers(
        // list of reducers here.
        modalReducer,
    ), initialState);
    const value = {state, dispatch};
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

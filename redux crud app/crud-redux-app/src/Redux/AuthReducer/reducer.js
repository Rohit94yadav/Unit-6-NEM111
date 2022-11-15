import * as types from "./ActionType";

const initialState = {
    isAuth : false,
    token: "",
    isAuthLoading : false,
    isAuthError: false,
}

const reducer = (oldState = initialState, action)=>{
    const{type, payload} = action;

    switch(type){

        case types.USER_LOGIN_REQUEST:
            return{
                ...oldState,
                isAuthLoading: true
            }

            case types.USER_LOGIN_SUCCESS:
                return{
                    ...oldState,
                    isAuthLoading: true,
                    isAuth : true,
                    token: payload,
                }

                case types.USER_LOGIN_FAILURE:
                    return{
                        ...oldState,
                        isAuthLoading: true,
                        token: "",
                        isAuthError: true
                        

                    }

        default:
            return oldState;
    }
}

export {reducer}
import axios from "axios"
import * as types from "./ActionType"

const postLoginRequset =()=>{
    return{
        type: types.USER_LOGIN_REQUEST,
    }
}

const postLoginSuccess =()=>{
    return{
        type: types.USER_LOGIN_SUCCESS,
    }
}

const postLoginFailure =()=>{
    return{
        type: types.USER_LOGIN_FAILURE,
    }
}

const login =(payload)=>(dispatch)=>{

    dispatch(postLoginRequset())

    return axios({
        method: "post",
        url: "/api/login",
        baseURL : "https://reqres.in",
        data: payload
    }).then((res)=>{
        return dispatch(postLoginSuccess(res.data.token))
    }).catch((err)=>{
        dispatch(postLoginFailure())
    })

}

export {login, postLoginFailure,postLoginRequset,postLoginSuccess}

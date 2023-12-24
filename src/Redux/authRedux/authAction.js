import axios from "axios"



export const POST_SIGNUP_REQUIEST="POST_SIGNUP_REQUIEST"
export const POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const POST_SIGNUP_FAILURE="POST_SIGNUP_FAILURE"


export const POST_SIGNIN_REQUIEST="POST_SIGNIN_REQUIEST"
export const POST_SIGNIN_SUCCESS="POST_SIGNIN_SUCCESS"
export const POST_SIGNIN_FAILURE="POST_SIGNIN_FAILURE"


const postSignupRequest=()=>{
    return({
        type:POST_SIGNUP_REQUIEST
    })
}
const postSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data,
    })
}
const postSignupFailure=()=>{
    return({
        type:POST_SIGNUP_FAILURE
    })
}


const postSigninRequest=()=>{
    return({
        type:POST_SIGNIN_REQUIEST
    })
}
const postSigninSuccess=(data)=>{
    return({
        type:POST_SIGNIN_SUCCESS,
        payload:data,
    })
}
const postSigninFailure=()=>{
    return({
        type:POST_SIGNIN_FAILURE
    })
}


export const postSignup=(data)=>(dispatch)=>{
    console.log("dataa",data)
    dispatch(postSignupRequest())
    return axios({
        url:"https://fine-cyan-pelican-cuff.cyclic.app/signup",
        method:'POST',
        data
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
        console.log("res.data.Signup",res.data)
    })
    .catch((error)=>{
        dispatch(postSignupFailure())
    })
}


export const postSignin=(data)=>(dispatch)=>{
    dispatch(postSigninRequest())
    return axios({
        url:"https://fine-cyan-pelican-cuff.cyclic.app/signin",
        method:'POST',
        data
    })
    .then((res)=>{
        dispatch(postSigninSuccess(res.data))
        console.log("res.data.Signin",res.data)
        if(res.data){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("data",JSON.stringify(res.data))
           
        }
    })
    .catch((error)=>{
        dispatch(postSigninFailure())
    })
}
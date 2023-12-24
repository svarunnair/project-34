import axios from "axios"



export const POST_DEPARTMENT_REQUIEST="POST_DEPARTMENT_REQUIEST"
export const POST_DEPARTMENT_SUCCESS="POST_DEPARTMENT_SUCCESS"
export const POST_DEPARTMENT_FAILURE="POST_DEPARTMENT_FAILURE"

export const GET_DEPARTMENT_REQUIEST="GET_DEPARTMENT_REQUIEST"
export const GET_DEPARTMENT_SUCCESS="GET_DEPARTMENT_SUCCESS"
export const GET_DEPARTMENT_FAILURE="GET_DEPARTMENT_FAILURE"

export const POST_ASSETS_REQUIEST="POST_ASSETS_REQUIEST"
export const POST_ASSETS_SUCCESS="POST_ASSETS_SUCCESS"
export const POST_ASSETS_FAILURE="POST_ASSETS_FAILURE"

export const GET_ASSETS_REQUIEST="GET_ASSETS_REQUIEST"
export const GET_ASSETS_SUCCESS="GET_ASSETS_SUCCESS"
export const GET_ASSETS_FAILURE="GET_ASSETS_FAILURE"


const postDepartmentRequiest=()=>{
    return({
        type:POST_DEPARTMENT_REQUIEST
    })
}
const postDepartmentSuccess=(data)=>{
    return({
        type:POST_DEPARTMENT_SUCCESS,
        payload:data
    })
}
const postDepartmentFailure=()=>{
    return({
        type:POST_DEPARTMENT_FAILURE
    })
}


const getAssetsRequiest=()=>{
    return({
        type:GET_ASSETS_REQUIEST
    })
}
const getAssetsSuccess=(data)=>{
    return({
        type:GET_ASSETS_SUCCESS,
        payload:data
    })
}
const getAssetsFailure=()=>{
    return({
        type:GET_ASSETS_FAILURE
    })
}



const getDepartmentRequiest=()=>{
    return({
        type:GET_DEPARTMENT_REQUIEST
    })
}
const getDepartmentSuccess=(data)=>{
    return({
        type:GET_DEPARTMENT_SUCCESS,
        payload:data
    })
}
const getDepartmentFailure=()=>{
    return({
        type:GET_DEPARTMENT_FAILURE
    })
}

const postAssetsRequiest=()=>{
    return({
        type:POST_ASSETS_REQUIEST
    })
}
const postAssetsSuccess=(data)=>{
    return({
        type:POST_ASSETS_SUCCESS,
        payload:data
    })
}
const postAssetsFailure=()=>{
    return({
        type:POST_ASSETS_FAILURE
    })
}









export const postDepartment=(data)=>(dispatch)=>{
    console.log("data",data)
    dispatch(postDepartmentRequiest())
    return axios({
        url:"https://fine-cyan-pelican-cuff.cyclic.app/department",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postDepartmentSuccess(res.data))
        console.log("postDep",res.data)
    })
    .catch((error)=>{
        dispatch(postDepartmentFailure())
    })
}

export const getAssets=()=>(dispatch)=>{
  
    dispatch(getAssetsRequiest())
    return axios({
        url:"https://fine-cyan-pelican-cuff.cyclic.app/asset",
        method:"GET",
    })
    .then((res)=>{
        dispatch(getAssetsSuccess(res.data))
        console.log("getAssets",res.data)
    })
    .catch((error)=>{
        dispatch(getAssetsFailure())
    })
}


export const getDepartment=()=>(dispatch)=>{
    dispatch(getDepartmentRequiest())
    return axios({
        url:"https://fine-cyan-pelican-cuff.cyclic.app/department",
        method:"GET",
    })
    .then((res)=>{
        dispatch(getDepartmentSuccess(res.data))
        console.log("getDep",res.data)
    })
    .catch((error)=>{
        dispatch(getDepartmentFailure())
    })
}


export const postAssets=(data)=>(dispatch)=>{
   console.log("data",data)
    dispatch(postAssetsRequiest())
    return axios({
        url:"https://fine-cyan-pelican-cuff.cyclic.app/asset",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postAssetsSuccess(res.data))
        console.log("postAssets",res.data)
    })
    .catch((error)=>{
        dispatch(postAssetsFailure())
    })
}

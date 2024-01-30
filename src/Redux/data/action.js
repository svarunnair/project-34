import axios from "axios"



export const POST_DEPARTMENT_REQUIEST="POST_DEPARTMENT_REQUIEST"
export const POST_DEPARTMENT_SUCCESS="POST_DEPARTMENT_SUCCESS"
export const POST_DEPARTMENT_FAILURE="POST_DEPARTMENT_FAILURE"

export const GET_DEPARTMENT_REQUIEST="GET_DEPARTMENT_REQUIEST"
export const GET_DEPARTMENT_SUCCESS="GET_DEPARTMENT_SUCCESS"
export const GET_DEPARTMENT_FAILURE="GET_DEPARTMENT_FAILURE"

export const DELETE_DEPARTMENT_REQUIEST="DELETE_DEPARTMENT_REQUIEST"
export const DELETE_DEPARTMENT_SUCCESS="DELETE_DEPARTMENT_SUCCESS"
export const DELETE_DEPARTMENT_FAILURE="DELETE_DEPARTMENT_FAILURE"

export const POST_ASSETS_REQUIEST="POST_ASSETS_REQUIEST"
export const POST_ASSETS_SUCCESS="POST_ASSETS_SUCCESS"
export const POST_ASSETS_FAILURE="POST_ASSETS_FAILURE"

export const GET_ASSETS_REQUIEST="GET_ASSETS_REQUIEST"
export const GET_ASSETS_SUCCESS="GET_ASSETS_SUCCESS"
export const GET_ASSETS_FAILURE="GET_ASSETS_FAILURE"

export const DELETE_ASSETS_REQUIEST="DELETE_ASSETS_REQUIEST"
export const DELETE_ASSETS_SUCCESS="DELETE_ASSETS_SUCCESS"
export const DELETE_ASSETS_FAILURE="DELETE_ASSETS_FAILURE"

export const POST_SERVICE_REQUIEST="POST_SERVICE_REQUIEST"
export const POST_SERVICE_SUCCESS="POST_SERVICE_SUCCESS"
export const POST_SERVICE_FAILURE="POST_SERVICE_FAILURE"

export const GET_SERVICE_REQUIEST="GET_SERVICE_REQUIEST"
export const GET_SERVICE_SUCCESS="GET_SERVICE_SUCCESS"
export const GET_SERVICE_FAILURE="GET_SERVICE_FAILURE"

export const PATCH_SERVICE_REQUIEST="PATCH_SERVICE_REQUIEST"
export const PATCH_SERVICE_SUCCESS="PATCH_SERVICE_SUCCESS"
export const PATCH_SERVICE_FAILURE="PATCH_SERVICE_FAILURE"

export const DELETE_SERVICE_REQUIEST="DELETE_SERVICE_REQUIEST"
export const DELETE_SERVICE_SUCCESS="DELETE_SERVICE_SUCCESS"
export const DELETE_SERVICE_FAILURE="DELETE_SERVICE_FAILURE"

export const GET_DETAIL_REQUIEST="GET_DETAIL_REQUIEST"
export const GET_DETAIL_SUCCESS="GET_DETAIL_SUCCESS"
export const GET_DETAIL_FAILURE="GET_DETAIL_FAILURE"

export const GET_SERVICEDATA_REQUIEST="GET_SERVICEDATA_REQUIEST"
export const GET_SERVICEDATA_SUCCESS="GET_SERVICEDATA_SUCCESS"
export const GET_SERVICEDATA_FAILURE="GET_SERVICEDATA_FAILURE"

export const PATCH_ASSET_REQUIEST="PATCH_ASSET_REQUIEST"
export const PATCH_ASSET_SUCCESS="PATCH_ASSET_SUCCESS"
export const PATCH_ASSET_FAILURE="PATCH_ASSET_FAILURE"


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

const deleteDepartmentRequiest=()=>{
    return({
        type:DELETE_DEPARTMENT_REQUIEST
    })
}
const deleteDepartmentSuccess=(data)=>{
    return({
        type:DELETE_DEPARTMENT_SUCCESS,
        payload:data
    })
}
const deleteDepartmentFailure=()=>{
    return({
        type:DELETE_DEPARTMENT_FAILURE
    })
}

const getDetailRequiest=()=>{
    return({
        type:GET_DETAIL_REQUIEST
    })
}
const getDetailSuccess=(data)=>{
    return({
        type:GET_DETAIL_SUCCESS,
        payload:data
    })
}
const getDetailFailure=()=>{
    return({
        type:GET_DETAIL_FAILURE
    })
}

const patchServiceRequiest=()=>{
    return({
        type:PATCH_SERVICE_REQUIEST
    })
}
const patchServiceSuccess=(data)=>{
    return({
        type:PATCH_SERVICE_SUCCESS,
        payload:data
    })
}
const patchServiceFailure=()=>{
    return({
        type:PATCH_SERVICE_FAILURE
    })
}

const getServiceRequiest=()=>{
    return({
        type:GET_SERVICE_REQUIEST
    })
}
const getServiceSuccess=(data)=>{
    return({
        type:GET_SERVICE_SUCCESS,
        payload:data
    })
}
const getServiceFailure=()=>{
    return({
        type:GET_SERVICE_FAILURE
    })
}

const postServiceRequiest=()=>{
    return({
        type:POST_SERVICE_REQUIEST
    })
}
const postServiceSuccess=(data)=>{
    return({
        type:POST_SERVICE_SUCCESS,
        payload:data
    })
}
const postServiceFailure=()=>{
    return({
        type:POST_SERVICE_FAILURE
    })
}

const deleteAssetsRequiest=()=>{
    return({
        type:DELETE_ASSETS_REQUIEST
    })
}
const deleteAssetsSuccess=(data)=>{
    return({
        type:DELETE_ASSETS_SUCCESS,
        payload:data
    })
}
const deleteAssetsFailure=()=>{
    return({
        type:DELETE_ASSETS_FAILURE
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
const deleteServiceRequiest=()=>{
    return({
        type:DELETE_SERVICE_REQUIEST
    })
}
const deleteServiceSuccess=(data)=>{
    return({
        type:DELETE_SERVICE_SUCCESS,
        payload:data
    })
}
const deleteServiceFailure=()=>{
    return({
        type:DELETE_SERVICE_FAILURE
    })
}

const getServiceDataRequiest=()=>{
    return({
        type:GET_SERVICEDATA_REQUIEST
    })
}
const getServiceDataSuccess=(data)=>{
    return({
        type:GET_SERVICEDATA_SUCCESS,
        payload:data
    })
}
const getServiceDataFailure=()=>{
    return({
        type:GET_SERVICEDATA_FAILURE
    })
}

const patchAssetRequiest=()=>{
    return({
        type:PATCH_ASSET_REQUIEST
    })
}
const patchAssetSuccess=(data)=>{
    return({
        type:PATCH_ASSET_SUCCESS,
        payload:data
    })
}
const patchAssetFailure=()=>{
    return({
        type:PATCH_ASSET_FAILURE
    })
}








export const postDepartment=(data)=>(dispatch)=>{
    console.log("data",data)
    dispatch(postDepartmentRequiest())
    return axios({
        // url:"https://fine-cyan-pelican-cuff.cyclic.app/department",
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

export const deleteDepartment=(id)=>(dispatch)=>{
    dispatch(deleteDepartmentRequiest())
    return axios({
        // url:`https://fine-cyan-pelican-cuff.cyclic.app/department/${id}`,
        method:"DELETE",
       
    })
    .then((res)=>{
        dispatch(deleteDepartmentSuccess(res.data))
        console.log("deleteDep",res.data)
    })
    .catch((error)=>{
        dispatch(deleteDepartmentFailure())
    })
}

export const getDetail=(id)=>(dispatch)=>{
  
    dispatch(getDetailRequiest())
    return axios({
        url:`https://fine-cyan-pelican-cuff.cyclic.app/asset/${id}`,
        method:"GET",
        
    })
    .then((res)=>{
        dispatch(getDetailSuccess(res.data))
        console.log("getDetail",res.data)
    })
    .catch((error)=>{
        dispatch(getDetailFailure())
    })
}

export const patchService=(id,data)=>(dispatch)=>{
    console.log("params,id",id,data)
    
    dispatch(patchServiceRequiest()) 
    return axios({
        url:`https://fine-cyan-pelican-cuff.cyclic.app/service/${id}`,
        method:"PATCH",
        data,
    })
    .then((res)=>{
        dispatch(patchServiceSuccess(res.data))
        console.log("patchServive",res.data)
    })
    .catch((error)=>{
        dispatch(patchServiceFailure())
    })
}

export const getService=()=>(dispatch)=>{
 
    dispatch(getServiceRequiest())
    return axios({
        url:"https://fine-cyan-pelican-cuff.cyclic.app/service",
        method:"GET",
    })
    .then((res)=>{
        dispatch(getServiceSuccess(res.data))
        console.log("getService",res.data)
    })
    .catch((error)=>{
        dispatch(getServiceFailure())
    })
}

export const postService=(data)=>(dispatch)=>{
    dispatch(postServiceRequiest())
    return axios({
        // url:"https://fine-cyan-pelican-cuff.cyclic.app/service",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postServiceSuccess(res.data))
        console.log("postService",res.data)
    })
    .catch((error)=>{
        dispatch(postServiceFailure())
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
        // url:"https://fine-cyan-pelican-cuff.cyclic.app/department",
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

export const deleteAssetes=(id)=>(dispatch)=>{
  
    dispatch(deleteAssetsRequiest())
    return axios({
        // url:`https://fine-cyan-pelican-cuff.cyclic.app/asset/${id}`,
        method:"DELETE",
        
    })
    .then((res)=>{
        dispatch(deleteAssetsSuccess(res.data))
        console.log("deleteAsset",res.data)
    })
    .catch((error)=>{
        dispatch(deleteAssetsFailure())
    })
}

export const deleteService=(id)=>(dispatch)=>{
   
    dispatch(deleteServiceRequiest())
    return axios({
        // url:`https://fine-cyan-pelican-cuff.cyclic.app/service/${id}`,
        method:"DELETE",
    })
    .then((res)=>{
        dispatch(deleteServiceSuccess(res.data))
        console.log("deleteService",res.data)
    })
    .catch((error)=>{
        dispatch(deleteServiceFailure())
    })
}

export const getServiceData=(id)=>(dispatch)=>{
    console.log("idididi",id)
    dispatch(getServiceDataRequiest())
    return axios({
        // url: `https://fine-cyan-pelican-cuff.cyclic.app/service/${id}`,
        method:"GET",

    })
    .then((res)=>{
        dispatch(getServiceDataSuccess(res.data))
        console.log("ServiceData.ress",res.data)
    })
    .catch((error)=>{
        dispatch(getServiceDataFailure())
    })
}

export const patchAsset=(id,data)=>(dispatch)=>{
    dispatch(patchAssetRequiest())
    return axios({
        // url:`https://fine-cyan-pelican-cuff.cyclic.app/asset/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchAssetSuccess(res.data))
        console.log("patchAsset.res",res.data)
    })
    .catch((error)=>{
        dispatch(patchAssetFailure())
    })
}
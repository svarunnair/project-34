import { DELETE_ASSETS_FAILURE, DELETE_ASSETS_REQUIEST, DELETE_ASSETS_SUCCESS, DELETE_DEPARTMENT_FAILURE, DELETE_DEPARTMENT_REQUIEST, DELETE_DEPARTMENT_SUCCESS, DELETE_SERVICE_FAILURE, DELETE_SERVICE_REQUIEST, DELETE_SERVICE_SUCCESS, GET_ASSETS_FAILURE, GET_ASSETS_REQUIEST, GET_ASSETS_SUCCESS, GET_DEPARTMENT_FAILURE, GET_DEPARTMENT_REQUIEST, GET_DEPARTMENT_SUCCESS, GET_DETAIL_FAILURE, GET_DETAIL_REQUIEST, GET_DETAIL_SUCCESS, GET_INCIDENT_FAILURE, GET_INCIDENT_REQUIEST, GET_INCIDENT_SUCCESS, GET_SERVICEDATA_FAILURE, GET_SERVICEDATA_REQUIEST, GET_SERVICEDATA_SUCCESS, GET_SERVICE_FAILURE, GET_SERVICE_REQUIEST, GET_SERVICE_SUCCESS, PATCH_ASSET_FAILURE, PATCH_ASSET_REQUIEST, PATCH_ASSET_SUCCESS, PATCH_SERVICE_FAILURE, PATCH_SERVICE_REQUIEST, PATCH_SERVICE_SUCCESS, POST_ASSETS_FAILURE, POST_ASSETS_REQUIEST, POST_ASSETS_SUCCESS, POST_DEPARTMENT_FAILURE, POST_DEPARTMENT_REQUIEST, POST_DEPARTMENT_SUCCESS, POST_INCIDENT_FAILURE, POST_INCIDENT_REQUIEST, POST_INCIDENT_SUCCESS, POST_SERVICE_FAILURE, POST_SERVICE_REQUIEST, POST_SERVICE_SUCCESS } from "./action"



const initState={
   isError:false,
   isLoading:false,
   dep:[],
   postDep:[],
   postAsset:[],
   getAsset:[],
   deleteAsset:[],
   postService:[],
   getService:[],
   patchService:[],
   deleteService:[],
   getDetail:[],
   deleteDep:[],
   getDataService:[],
   patchAssetData:[],
   getIncidentData:[],
   postIncidentData:[],
}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DEPARTMENT_REQUIEST:
            return({
                ...state,
                isLoading:true,
                isError:false
            })

            case GET_DEPARTMENT_SUCCESS:
            return({
                ...state,
                isLoading:false,
                isError:false,
                dep:action.payload
            })

            case GET_DEPARTMENT_FAILURE:
            return({
                ...state,
                isLoading:false,
                isError:true,           
            })


            case DELETE_DEPARTMENT_REQUIEST:
            return({
                ...state,
                isLoading:true,
                isError:false
            })

            case DELETE_DEPARTMENT_SUCCESS:
            return({
                ...state,
                isLoading:false,
                isError:false,
                deleteDep:action.payload
            })

            case DELETE_DEPARTMENT_FAILURE:
            return({
                ...state,
                isLoading:false,
                isError:true,           
            })


            case DELETE_ASSETS_REQUIEST:
                return({
                    ...state,
                    isLoading:true,
                    isError:false
                })
    
                case DELETE_ASSETS_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    deleteAsset:action.payload
                })
    
                case DELETE_ASSETS_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true,           
                })
    


            case POST_DEPARTMENT_REQUIEST:
            return({
                ...state,
                isLoading:true,
                isError:false
            })

            case POST_DEPARTMENT_SUCCESS:
            return({
                ...state,
                isLoading:false,
                isError:false,
                postDep:action.payload
            })

            case POST_DEPARTMENT_FAILURE:
            return({
                ...state,
                isLoading:false,
                isError:true,           
            })

            case POST_ASSETS_REQUIEST:
                return({
                    ...state,
                    isLoading:true,
                    isError:false
                })
    
                case POST_ASSETS_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    postAsset:action.payload
                })
    
                case POST_ASSETS_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true,           
                })


                case GET_ASSETS_REQUIEST:
                return({
                    ...state,
                    isLoading:true,
                    isError:false
                })
    
                case GET_ASSETS_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    getAsset:action.payload
                })
    
                case GET_ASSETS_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true,           
                })


                case GET_DETAIL_REQUIEST:
                return({
                    ...state,
                    isLoading:true,
                    isError:false
                })
    
                case GET_DETAIL_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    getDetail:action.payload
                })
    
                case GET_DETAIL_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true,           
                })


                case POST_SERVICE_REQUIEST:
                return({
                    ...state,
                    isLoading:true,
                    isError:false
                })
    
                case POST_SERVICE_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    postService:action.payload
                })
    
                case POST_SERVICE_FAILURE:
                return({
                    ...state,
                    isLoading:false,
                    isError:true,           
                })

                case GET_SERVICE_REQUIEST:
                    return({
                        ...state,
                        isLoading:true,
                        isError:false
                    })
        
                    case GET_SERVICE_SUCCESS:
                    return({
                        ...state,
                        isLoading:false,
                        isError:false,
                        getService:action.payload
                    })
        
                    case GET_SERVICE_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true,           
                    })


                    case PATCH_SERVICE_REQUIEST:
                        return({
                            ...state,
                            isLoading:true,
                            isError:false
                        })
            
                        case PATCH_SERVICE_SUCCESS:
                        return({
                            ...state,
                            isLoading:false,
                            isError:false,
                            patchService:action.payload
                        })
            
                        case PATCH_SERVICE_FAILURE:
                        return({
                            ...state,
                            isLoading:false,
                            isError:true,           
                        })


                        case DELETE_SERVICE_REQUIEST:
                            return({
                                ...state,
                                isLoading:true,
                                isError:false
                            })
                
                            case DELETE_SERVICE_SUCCESS:
                            return({
                                ...state,
                                isLoading:false,
                                isError:false,
                                deleteService:action.payload
                            })
                
                            case DELETE_SERVICE_FAILURE:
                            return({
                                ...state,
                                isLoading:false,
                                isError:true,           
                            })

                            case GET_SERVICEDATA_REQUIEST:
                                return({
                                    ...state,
                                    isLoading:true,
                                    isError:false
                                })
                    
                                case GET_SERVICEDATA_SUCCESS:
                                return({
                                    ...state,
                                    isLoading:false,
                                    isError:false,
                                    getDataService:action.payload
                                })
                    
                                case GET_SERVICEDATA_FAILURE:
                                return({
                                    ...state,
                                    isLoading:false,
                                    isError:true,           
                                })

                                case PATCH_ASSET_REQUIEST:
                                return({
                                    ...state,
                                    isLoading:true,
                                    isError:false
                                })
                    
                                case PATCH_ASSET_SUCCESS:
                                return({
                                    ...state,
                                    isLoading:false,
                                    isError:false,
                                    patchAssetData:action.payload
                                })
                    
                                case PATCH_ASSET_FAILURE:
                                return({
                                    ...state,
                                    isLoading:false,
                                    isError:true,           
                                })


                                case GET_INCIDENT_REQUIEST:
                                return({
                                    ...state,
                                    isLoading:true,
                                    isError:false
                                })
                    
                                case GET_INCIDENT_SUCCESS:
                                return({
                                    ...state,
                                    isLoading:false,
                                    isError:false,
                                    getIncidentData:action.payload
                                })
                    
                                case GET_INCIDENT_FAILURE:
                                return({
                                    ...state,
                                    isLoading:false,
                                    isError:true,           
                                })

                                case POST_INCIDENT_REQUIEST:
                                    return({
                                        ...state,
                                        isLoading:true,
                                        isError:false
                                    })
                        
                                    case POST_INCIDENT_SUCCESS:
                                    return({
                                        ...state,
                                        isLoading:false,
                                        isError:false,
                                        postIncidentData:action.payload
                                    })
                        
                                    case POST_INCIDENT_FAILURE:
                                    return({
                                        ...state,
                                        isLoading:false,
                                        isError:true,           
                                    })
    










            default:
                return({
                    ...state
                })
    }
}
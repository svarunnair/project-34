import { GET_ASSETS_FAILURE, GET_ASSETS_REQUIEST, GET_ASSETS_SUCCESS, GET_DEPARTMENT_FAILURE, GET_DEPARTMENT_REQUIEST, GET_DEPARTMENT_SUCCESS, POST_ASSETS_FAILURE, POST_ASSETS_REQUIEST, POST_ASSETS_SUCCESS, POST_DEPARTMENT_FAILURE, POST_DEPARTMENT_REQUIEST, POST_DEPARTMENT_SUCCESS } from "./action"



const initState={
   isError:false,
   isLoading:false,
   dep:[],
   postDep:[],
   postAsset:[],
   getAsset:[],
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











            default:
                return({
                    ...state
                })
    }
}
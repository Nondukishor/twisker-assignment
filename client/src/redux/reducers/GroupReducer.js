import * as Types from '../constants/GroupConstant';
const initialState ={
    fetch:false,
    data:null,
    error:null,
    success:null,
    group_post:null,
    ...JSON.parse(localStorage.getItem('state')).groups
}
const GroupReducer = (state=initialState,actions) => {
    const {type,payload} = actions
    switch(type){
        case Types.CREATE_GROUP:
            return{
                ...state,
                success:payload
            }
        case Types.FETCH_GROUPS:
            return{
                ...state,
                data:payload
            }
        case Types.ERROR:
            return{
                ...state,
                error:payload
            }
        case Types.GET_GROUP_POSTS:
            return{
                ...state,
                group_post:payload
            }
        default: 
           return state
    }
}

export default GroupReducer;
import * as Types from '../constants/GroupConstant';
const groups = JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')).groups : {}
const initialState ={
    fetch:false,
    data:null,
    error:null,
    success:null,
    single_group:null,
    ...groups
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
        case Types.FETCH_GROUPS_BY_ID:
            return{
                ...state,
                single_group:payload
            }
        default: 
           return state
    }
}

export default GroupReducer;
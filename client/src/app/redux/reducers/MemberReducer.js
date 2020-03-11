import * as Types from '../constants/MemberConstant';
const member =JSON.parse(localStorage.getItem('state'))? JSON.parse(localStorage.getItem('state')).member :{}
const initialState={
    ...member
}
const MemberReducer = (state=initialState, actions) => {
    const {type,payload} = actions;

    switch(type){
        case Types.MEMBERS:
            return{
               ...state,
               ...payload 
            }
        default :
         return state;
    }
}

export default MemberReducer;
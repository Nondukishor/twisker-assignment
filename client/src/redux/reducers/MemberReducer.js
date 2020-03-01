import * as Types from '../constants/MemberConstant';
const initialState={}
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
import * as Types from '../constants/MemberConstant';
const MemberReducer = (state={}, actions) => {
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
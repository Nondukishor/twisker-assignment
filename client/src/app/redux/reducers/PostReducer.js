import * as Types from '../constants/PostConstant';

const initialState={
    data:[],
    success:{},
    error:{},
}
const PostReducer = (state=initialState,actions) => {
    const {type, payload} = actions;
    switch(type){
        case Types.POSTS:
            return {
                ...state,
                data:[...payload]
            }
        case Types.POST_ERROR:
            return{
                ...state,
                error:payload
            }
        case Types.POST_SUCCESS:
            return{
                ...state,
                success:payload
            }
        default:
          return state;
    }
}

export default PostReducer;
import * as Types from '../constants/PostConstant';
const posts = JSON.parse(localStorage.getItem('state'))? JSON.parse(localStorage.getItem('state')).post: {}
const initialState={
    data:[],
    success:{},
    error:{},
    ...posts
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
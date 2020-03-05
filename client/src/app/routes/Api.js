class API{
    constructor(){
     this.api ='http://localhost:3333/api'
    }
    get LOGIN(){
        return `${this.api}/login` 
    }
    get REGISTRATION(){
        return `${this.api}/registration`
    }
    get MEMBERS(){
        return `${this.api}/members`
    }
    get POSTS(){
        return `${this.api}/posts`
    }
    get CREATE_POST(){
        return `${this.api}/posts`
    }
    get LOGOUT(){
        return `${this.api}/logout`
    }
    get GET_TOKEN_WITH_REFRESH_TOKEN(){
        return `${this.api}/refresh-token`
    }
    get CREATE_GROUP(){
        return `${this.api}/groups`
    }
    get FETCH_GROUPS(){
        return `${this.api}/groups`
    }
     GET_GROUP_POSTS(id){
        return `${this.api}/groups-post/${id}`
    }


}


const API_URL = new API()


export default API_URL;
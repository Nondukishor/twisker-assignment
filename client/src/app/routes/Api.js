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


}


const API_URL = new API()


export default API_URL;
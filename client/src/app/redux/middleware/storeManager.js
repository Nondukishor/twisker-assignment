import store from '../index'
const storageManager = state =>{
  try{
     if(JSON.stringify(localStorage.getItem('state'))){
        if(JSON.stringify(localStorage.getItem('state')) !== state){
          localStorage.removeItem('state')
          localStorage.setItem('state', JSON.stringify(state))
          store.setState(JSON.stringify(localStorage.getItem('state')))
        }
      }
      else if(!localStorage.getItem('state')){
        localStorage.setItem('state', JSON.stringify(state))
      }

      
    }
    catch(ex){
       console.log(ex)
   }
    
}

export default storageManager;

const storageManager = state =>{
  try{
      localStorage.setItem('state', JSON.stringify(state))
    }
    catch(ex){
       console.log(ex)
   }
    
}

export default storageManager;
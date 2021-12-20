//REDUCER
const loggedReducer  = (state = false, action) => {
    switch(action.type){
      case "SIGN_IN":
        return action.payload;
      case "SIGNE_OUT":
          return false; 
      default:
        return false;
    }
  }
  
  export default loggedReducer;
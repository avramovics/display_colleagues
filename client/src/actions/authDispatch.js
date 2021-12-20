export function authDispatch(dispatch){
    return {
      // dispatching plain actions
      signIn: (payload) => dispatch({ type: 'SIGN_IN', payload}),
      signOut: (payload) => dispatch({ type: 'SIGNE_OUT', payload }),
    }
  }

export function setUserLoggedIn(){
    return{
        type: 'SET_LOGGED_IN_TRUE',
        payload:''
    }
}
export function setUserLoggedOut(){
    return{
        type: 'SET_LOGGED_IN_FALSE',
        payload:''
    }
}
export function addUser(user){
    return{
        type: 'ADD_USER',
        payload: user
    }
}
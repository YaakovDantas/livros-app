import ApiService from './ApiService';


// export function getUserToken(e) {
    
//     const token = ApiService.loginUser()
//     .then(res => {
//         return res
        
//     })
//     return {
//         type: 'GET_TOKEN',
//         payload : token
//     }
// }

export function logoutUser(){
    return {  type:'RESET_TOKEN' }
}

export function loginUser(email,senha){
    
    return dispatch => {
        ApiService.loginUser(email, senha)
        .then(resp => {
            let token = resp.data.access_token;
            dispatch( {  type:'SET_TOKEN', payload: token  } )
           
        }).catch(function (error) {
            dispatch( logoutUser() )
        });
    }
}
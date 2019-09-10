import ApiService from './ApiService';


export function getUserToken(e) {
    
    const token = ApiService.loginUser()
    .then(res => {
        return res
        
    })
    return {
        type: 'GET_TOKEN',
        payload : token
    }
}
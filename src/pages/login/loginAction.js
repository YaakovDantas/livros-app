import ApiService from '../../utils/ApiService'


export function changeSenha(e) {
    
    return {
        type: 'CHANGE_PASSWORD',
        payload : e.target.value
    }
}

export function changeEmail(e) {
    
    return {
        type: 'CHANGE_EMAIL',
        payload : e.target.value
    }
}
export function cleanForm(){
    return {
        type:'CLEAN_FORM'
    }
}

export function loginUser(email,senha){

    return dispatch => {
        ApiService.loginUser(email, senha)
    }
}
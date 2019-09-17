import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/popUp';

export function getAuthors(token) {

    return dispatch => {
        ApiService.ListaAuthors(token)
            .then(res => dispatch({
                type: 'GET_AUTHORS',
                payload: res.data
            }))
    }
}

export function getAuthor(id, token) {
   
    return dispatch => {
        
        ApiService.ListaAuthor(id, token)
            .then(res => dispatch({
                type: 'GET_AUTHOR',
                payload: res.data
            }))
    }

}

export function createAuthor(name, token) {
    
    return dispatch => {
        ApiService.CriaAuthor(name, token)
            // .then(res => dispatch(getAuthors(token)))
            .then(res => {
                PopUp.exibeMensagem('success', "Author was created with success");


            })
            .then(res => dispatch({
                type: 'CLEAN_NAME'
            }))
    }
}

export function attAuthor(name, id, token) {
    
    return dispatch => {
        
        ApiService.UpdateAuthor(name, id, token)
            .then(res => {
                PopUp.exibeMensagem('success', "Author was updated with success");
                
            })
            .then(res => {
                
                dispatch({
                    type: 'CLEAN_NAME'
                })

            })
            .then(res => dispatch(getAuthors(token)))
    }

}

export function deleteAuthor(id,token) {
    return dispatch => {
       ApiService.DeleteAuthor(id, token)
       .then(res => dispatch(getAuthors(token)))
       .then(res => {
        PopUp.exibeMensagem('success', "Author was deleted with success");
       })
    }
}

export function changeNameForm(e) {
    return dispatch => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: e.target.value
        })
    }
}


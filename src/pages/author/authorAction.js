import ApiService from '../../utils/ApiService';


export function getAuthors(e) {
    
    const authorsList = ApiService.ListaAuthors()
    .then(res => {
        // console.log(res.data)
        return res
        
    })
    return {
        type: 'GET_AUTHORS',
        payload : authorsList
    }
}

export function getAuthor(id) {
    
    const author = ApiService.ListaAuthor(id)
    .then(res => {
        // console.log(res.data)
        return res
        
    })
    return {
        type: 'GET_AUTHOR',
        payload : author
    }
}
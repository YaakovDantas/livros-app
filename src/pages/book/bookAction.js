import ApiService from '../../utils/ApiService';


export function getBooks(token) {
    
    const bookList = ApiService.ListaBooks(token)
    .then(res => {
        // console.log(res.data)
        return res
        
    })
    return {
        type: 'GET_BOOKS',
        payload : bookList
    }
}
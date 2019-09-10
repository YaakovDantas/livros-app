const axios = require('axios');
const ApiService = {

    ListaAuthors : () =>{
        return fetch('http://localhost:8000/api/authors')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    ListaAuthor : (id) =>{
        return fetch(`http://localhost:8000/api/authors/${id}?include=books`)
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    CriaAuthor : author => {
        return fetch('http://localhost:8000/api/authors', {method: 'POST', headers: {'content-type': 'application/json'}, body: author})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    ListaNomes: () =>{
        return fetch('http://localhost:8000/api/authors/nome')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    ListaLivros: () => {
        return fetch('http://localhost:8000/api/authors')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    RemoveAuthor: id => {
        return fetch(`http://localhost:8000/api/authors/${id}`, {method: 'DELETE', headers: { 'content-type' : 'application/json'},})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    ListaBooks : (token) =>{
        // console.log(`Bearer ${token}`)
        return fetch('http://localhost:8000/api/books',{
            headers: new Headers({
                'Authorization': `Bearer ${token}`, 
                // 'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    loginUser:()=>{
        // FormData = new FormData();
        // FormData.append('email', 'teste@gmail.com');
        // FormData.append('password', 'senha');
        return axios.post('http://localhost:8000/api/login', {
            email: 'teste@gmail.com',
            password: 'senha'
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    TrataErros : res =>{
        if(!res.ok){

            throw Error(res.responseText);
        }
        return res;
    } 

   

}

export default ApiService;
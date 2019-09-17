const axios = require('axios');
const ApiService = {

    ListaAuthors: (token) => {
        return axios.get('http://localhost:8000/api/authors',
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
    },
    ListaAuthor: (id, token) => {

        return axios.get(`http://localhost:8000/api/authors/${id}?include=books`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
    },
    CriaAuthor: (name, token) => {

        return axios.post('http://localhost:8000/api/authors', { name }, {
            headers: {
                'Authorization': 'Bearer ' + token,
                // 'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

    },
    UpdateAuthor: (name, id, token) => {

        return axios.post(`http://localhost:8000/api/authors/${id}`, { name, _method: 'put' }, {
            headers: {
                'Authorization': 'Bearer ' + token,

            }
        })

    }, 
    DeleteAuthor: ( id, token) => {

        return axios.post(`http://localhost:8000/api/authors/${id}`,{  _method: 'delete' }, {
            headers: {
                'Authorization': 'Bearer ' + token,

            }
        })

    },
    ListaNomes: () => {
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
        return fetch(`http://localhost:8000/api/authors/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' }, })
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    ListaBooks: (token) => {
        // console.log(`Bearer ${token}`)
        return fetch('http://localhost:8000/api/books', {
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    loginUser: (email, password) => {
        // FormData = new FormData();
        // FormData.append('email', 'teste@gmail.com');
        // FormData.append('password', 'senha');
        return axios.post('http://localhost:8000/api/login', { email, password })

    },
    TrataErros: res => {
        if (!res.ok) {

            throw Error(res.responseText);
        }
        return res;
    }



}

export default ApiService;

// const authorsList = [
//     {'id':2,'name':'Thiago'},
//     {'id':12,'name':'Thiago2'},
//     {'id':22,'name':'Thiago3'},
// ]

const INITIAL_STATE = { list: [], author:{}, authorBooks: []   }


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_AUTHORS':
            return { ...state, list:action.payload.data }
        case 'GET_AUTHOR':
            return { ...state, author: action.payload.data, authorBooks:action.payload.data.books.data ||[] }
       
        default:
            return state
    }
}
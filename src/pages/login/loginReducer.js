const INITIAL_STATE = { email: 'teste@gmail.com', senha: 'senha' }


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_PASSWORD':
            return { ...state, senha: action.payload }

        case 'CHANGE_EMAIL':
            return { ...state, email: action.payload }
        case 'CLEAN_FORM':
            return INITIAL_STATE
        
        default:
            return state
    }
}



const INITIAL_STATE = { data: null   }


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            return { data:action.payload }
        
        case 'RESET_TOKEN':
            return INITIAL_STATE
        default:
            return state
    }
}
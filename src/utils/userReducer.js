const INITIAL_STATE = { data: ''   }


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_TOKEN':
            return { data:action.payload.data }
        default:
            return state
    }
}
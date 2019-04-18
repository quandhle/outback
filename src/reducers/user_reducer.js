const DEFAULT_STATE = {
    auth: false,
    username: ''
};

const example = {
    type: 'LOG_USER_IN',
    username: 'quandhle'
}

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'sign-in':
            return {...state, auth: true, username: action.username}
        default:
            return state;
    }
}

export default userReducer
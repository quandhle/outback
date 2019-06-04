const DEFAULT_STATE = {
    cartCount: 0
}

const cartReducer = function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case "CartCount":
            return {
                cartCount: action.cartCount
            };
        default:
            return state;
    }
}

export default cartReducer;

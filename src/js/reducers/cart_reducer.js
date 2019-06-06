const DEFAULT_STATE = {
    cartCount: 0,
    resp: {}
}

const cartReducer = function (state = DEFAULT_STATE, action) {
    debugger;
    switch (action.type) {
        case "CartCount":
            return {
                cartCount: action.cartCount,
            };
        case "Add":
            return {
                resp: action.resp
            }
        default:
            return state;
    }
}

export default cartReducer;

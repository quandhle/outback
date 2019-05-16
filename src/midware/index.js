const Midware = (store) => (next) => (action) => {
    if (typeof action != 'function') {
        return next(action);
    }

    return action(action.dispatch);
}

export default Midware;

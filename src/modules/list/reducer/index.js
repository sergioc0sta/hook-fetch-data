function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload };
        default:
            return state;
    }
}

export default reducer;

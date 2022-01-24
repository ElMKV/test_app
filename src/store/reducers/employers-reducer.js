const initialState = {
    employers: []
};

export const employersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMPLOYERS':
            return {
                ...state,
                employers: action.payload
            }
        default:
            return state
    }
}
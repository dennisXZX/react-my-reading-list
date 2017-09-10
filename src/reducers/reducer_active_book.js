// state argument is not application state
// only the state this reducer is responsible for
// gives the state argument a default value because it would 
// be set as 'undefined' on the first launch
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}
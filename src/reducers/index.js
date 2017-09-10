import { combineReducers } from 'redux';

// import reducers
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// reducer is a function that returns the application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

export function addBook(book) {
	return {
		type: 'BOOK_ADD',
		payload: book
	};
}


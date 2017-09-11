const initialState = [
	{
		title: 'Javascript',
		pages: 101
	},
	{
		title: 'Harry Potter',
		pages: 245
	},
	{
		title: 'The Dark Tower',
		pages: 121
	},
	{
		title: 'Eloquent JS',
		pages: 215
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "BOOK_ADD":
			return state.concat({
				title: action.payload,
				pages: ((Math.random() * 200) + 100).toFixed(0)
			});
		case "BOOK_DELETE":
			return state;
		default:
			return state;
	}
}
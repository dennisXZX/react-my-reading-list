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
		case "ADD":
			return state;
		case "DELETE":
			return state;
		default:
			return state;
	}
}
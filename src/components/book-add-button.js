import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookAddButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<button onClick={() => this.props.addBook('dennis')}>Add Book</button>
		)
	}
}

// mapStateToProps takes in the app state as an argument
function mapStateToProps(state) {
	// whatever is returned will show up as props inside of BookList
	// this.props.books: state.books
	return {
		books: state.books
	};
}

// anything returned form this function will end up as props
// on the BookAddButton container
function mapDispatchToProps(dispatch) {
	// whenever selectBook action is called, the result will be passed
	// to all the reducers
	return bindActionCreators({
		addBook: addBook
	}, dispatch);
}

// glue React with Redux
// promote BookAddButton from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookAddButton);
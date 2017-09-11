import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	renderList() {
		return (
			this.props.books.map((book, index) => {
				return (
					<li
						key={index}
						onClick={() => this.props.selectBook(book)}
						className="list-group-item book-item">
						{book.title}
						<button className='button-close'>X</button>
					</li>
				);
			})
		);
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
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
// on the Booklist container
function mapDispatchToProps(dispatch) {
	// whenever selectBook action is called, the result will be passed
	// to all the reducers
	return bindActionCreators({
		selectBook: selectBook
	}, dispatch);
}

// glue React with Redux
// promote Booklist from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
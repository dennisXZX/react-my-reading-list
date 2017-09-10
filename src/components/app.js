import React, { Component } from 'react';

import BookInput from './book-input';
import BookAddButton from './book-add-button';
import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

export default class App extends Component {
  render() {
    return (
      <div className="container">
	      <div className="row">
		      <div className="col-xs-12">
			      <h1 className="text-xs-center">My Reading List</h1>
		      </div>
		      <div className="col-xs-12 text-xs-center">
			      <BookInput />
			      <BookAddButton />
		      </div>
		      <div className="row">
			      <div className="col-xs-6">
				      <BookList />
			      </div>
			      <div className="col-xs-6">
				      <BookDetail />
			      </div>
		      </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Button from 'antd/lib/button'

class CommentForm extends Component {
	render() {
		return (
			<form onSubmit={this._handleSubmit.bind(this)} className="comment-form">
				<label>Join the discussion</label>
				<div className="comment-form-fields">
					<input placeholder="Name:" ref={(input) => this._author = input}></input>
					<textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>
				</div>
				<div className="comment-form-actions">
					<button type="submit">
						Post comment
					</button>
				</div>
			</form>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();

		let author = this._author;
		let body = this._body;

		this.props.addComment(author.value, body.value);
	}
}

export default CommentForm;

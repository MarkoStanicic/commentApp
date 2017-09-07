import React, { Component } from 'react';

class Comment extends Component {
	render() {
		return (
			<div className="comment">
				<p className="comment-header">{this.props.author}</p>
				<p className="comment-body">{this.props.body}</p>
				<div className="comment-footer">
					<a href="#" onClick={this._handleDelete.bind(this)} className="comment-footer-delete">
						Delete comment
					</a>
				</div>
			</div>
		);
	}

	_handleDelete(event) {
		event.preventDefault();
		this.props.onDelete(this.props.comment);
	}
}

export default Comment;

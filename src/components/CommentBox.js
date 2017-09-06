import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Button from 'antd/lib/button'

class CommentBox extends Component {
	constructor() {
		super();

		this.setState({showComments: true })

		this.state = {
			showComments: false,
			comments : [
				{
					"id": 0,
					"author": "Cooley Lucas",
					"body": "Non ad nulla cupidatat amet velit in mollit pariatur. Consectetur dolore velit et est aliquip aliquip anim qui aute eiusmod eiusmod aliquip fugiat. Reprehenderit Lorem ipsum non veniam pariatur exercitation Lorem velit esse pariatur ad deserunt anim.\r\n",
				},
				{
					"id": 1,
					"author": "Brock Britt",
					"body": "Minim ex duis reprehenderit esse voluptate deserunt quis deserunt enim duis tempor. Nulla nulla magna sint aute. Sunt pariatur labore laborum ea sit. Est aliquip minim voluptate consequat ullamco officia pariatur id. Eiusmod elit consectetur esse qui consectetur fugiat. Ad ad cupidatat sit dolore dolor quis proident excepteur. Ullamco ullamco voluptate nisi enim adipisicing ullamco Lorem in excepteur cillum deserunt occaecat nostrud.\r\n",

				},
				{
					"id": 2,
					"author": "Roberson Wolfe",
					"body": "Excepteur do sit amet laboris culpa velit adipisicing elit anim ut voluptate. Ut nulla ut cupidatat nostrud commodo mollit magna duis. Deserunt quis esse voluptate enim laborum ullamco cillum ullamco aute ipsum anim. Duis consequat anim dolore cupidatat eiusmod dolor anim.\r\n",

				},
				{
					"id": 3,
					"author": "Medina Stanley",
					"body": "Aliqua eu elit officia sit esse quis pariatur aute in amet cillum. Aliquip amet consequat id ut dolor cupidatat et nostrud aliquip Lorem ullamco. Sunt ullamco labore sunt adipisicing eu eiusmod magna cillum pariatur adipisicing.\r\n",

				}
				]
		};
	}
	render() {
		const comments = this._getComments();
		let commentNodes;
		let buttonText = 'Show comments';

		if (this.state.showComments) {
			commentNodes = <div className="comment-list">{comments}</div>;
		}

		if (this.state.showComments) {
			buttonText = 'Hide comments';
		}
		return (
			<div className="comment-box">
				<CommentForm addComment={this._addComment.bind(this)} />
				<h3>Comments</h3>
				<Button type="primary" onClick={this._handleClick.bind(this)}>{buttonText}</Button>
				<h4 className="comment-count">
					{this._getCommentsTitle(comments.length)}
				</h4>
				{commentNodes}
			</div>
		);
	}

	_handleClick() {
		this.setState({
			showComments: !this.state.showComments
		});
	}

	_getComments() {
		return this.state.comments.map((comment) => {
			return (
				<Comment
					author={comment.author}
					body={comment.body}
					key={comment.id} />
			);
		});
	}

	_getCommentsTitle(commentCount) {
		if  (commentCount === 0) {
			return 'No comments yet';
		} else if (commentCount === 1) {
			return '1 comment';
		} else {
			return `${commentCount} comments`;
		}
	}

	_addComment(author, body) {
		const comment = {
			id: this.state.comments.length + 1,
			author,
			body
		};
		this.setState({ comments: this.state.comments.concat([comment] ) });
	}
}

export default CommentBox;

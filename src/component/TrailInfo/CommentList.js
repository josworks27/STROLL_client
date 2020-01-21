import React from 'react';
import CommentListElement from './CommentListElement';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let comments = this.props.comments;
    return (
      <div id="id_trailinfo_commentlist">
        {comments.map((comment, i) => (
          <CommentListElement key={i} comment={comment.comment}>
            comment
          </CommentListElement>
        ))}
      </div>
    );
  }
}

export default CommentList;

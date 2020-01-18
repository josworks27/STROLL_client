import React from 'react';
import CommentListElement from './CommentListElement';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let fake_comment = this.props.comments;
    return (
      <div id="id_trailinfo_commentlist">
        {fake_comment.map((comment, i) => (
          <CommentListElement key={i} comment={comment}>
            comment
          </CommentListElement>
        ))}
      </div>
    );
  }
}

export default CommentList;

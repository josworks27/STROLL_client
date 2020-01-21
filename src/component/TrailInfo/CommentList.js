import React from 'react';
import CommentListElement from './CommentListElement';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let comments = this.props.comments;
    console.log('COMMENTS', comments)
    return (
      <div id="id_trailinfo_commentlist">
        {comments.map((element, i) => (
          <CommentListElement key={i} item={element}>
            comment
          </CommentListElement>
        ))}
      </div>
    );
  }
}

export default CommentList;

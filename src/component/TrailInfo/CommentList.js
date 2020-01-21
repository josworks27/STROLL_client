import React from 'react';
import CommentListElement from './CommentListElement';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="id_trailinfo_commentlist">
        {this.props.comments.map((item, i) => (
          <CommentListElement key={i} item={item}>
            comment
          </CommentListElement>
        ))}
      </div>
    );
  }
}

export default CommentList;

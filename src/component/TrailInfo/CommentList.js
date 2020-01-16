import React from 'react';
import CommentListElement from './CommentListElement'
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div id="id_trailinfo_commentlist">
        <CommentListElement></CommentListElement>
    </div>
    );
  }
}

export default CommentList;

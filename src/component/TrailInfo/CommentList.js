import React from 'react';
import CommentListElement from './CommentListElement'
let fake_comment = ['강아지랑 걷기 좋아요~', '코딩하기 좋은날씨', '꼭 그렇게 다 가져가야만 속이 후련했냐!']
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div id="id_trailinfo_commentlist">
      {
        fake_comment.map(comment => <CommentListElement comment={comment}> comment </CommentListElement>)
      }
        
    </div>
    );
  }
}

export default CommentList;

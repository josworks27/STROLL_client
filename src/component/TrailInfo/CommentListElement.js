import React from 'react';
import { Rate } from 'antd';

class CommentListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.comment}
        <Rate disabled defaultValue={2.5}></Rate>
      </div>
    );
  }
}

export default CommentListElement;

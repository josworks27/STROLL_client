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
        {this.props.item.comment}
        <Rate disabled defaultValue={this.props.item.rating}></Rate>
      </div>
    );
  }
}

export default CommentListElement;

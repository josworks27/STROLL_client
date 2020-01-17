import React from 'react';

class CommentListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.comment}</div>;
  }
}

export default CommentListElement;

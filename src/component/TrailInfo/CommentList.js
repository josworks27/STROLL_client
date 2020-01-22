import React from 'react';
import CommentListElement from './CommentListElement';
import { Comment, Tooltip, List, Rate, Avatar } from 'antd';
import moment from 'moment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.comments);
    const data = this.props.comments;
    // datetime = (
    //   <Tooltip
    //     title={moment()
    //       .subtract(2, 'days')
    //       .format('YYYY-MM-DD HH:mm:ss')}
    //   >
    //     <span>
    //       {moment()
    //         .subtract(2, 'days')
    //         .fromNow()}
    //     </span>
    //   </Tooltip>
    // );
    return (
      <div className="cl_comments">
        <List
          header={`${data.length} comments`}
          className="cl_comments_list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <li className="cl_comment_list">
              {/* <Avatar
                className="cl_avatar"
                style={{ backgroundColor: 'rgb(138, 188, 48)' }}
                icon="user"
              /> */}
              <Rate
                disabled
                defaultValue={item.rating}
                className="cl_comment_rate"
              ></Rate>
              <Comment
                className="cl_comment"
                author={item.user.username}
                avatar={<Avatar icon="user" />}
                content={item.comment}
                // datetime={item.updatedAt}
              />
            </li>
          )}
        />
      </div>
    );
  }
}

export default CommentList;

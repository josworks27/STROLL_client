/*
body:{
  "userId": 1,
  "locationId": 1,
  "categoryId": 1,
  "imageId": 1,
  "title": "my trail",
  "review": "so good",
  "adminDistrict": "Seoul",
}
*/

// POST요청 body
/*
body:{
  "newLocations": array(5),
  "tag": "night view",
  "imageId": 1,
  "title": "my trail",
  "review": "so good",
  "adminDistrict": "Seoul",
}
*/

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Upload, Rate, Alert, message } from 'antd';
import { Col, Layout } from 'antd';
import { Select } from 'antd';

const { Option } = Select;
const { Content } = Layout;
const { TextArea } = Input;
const { Dragger } = Upload;

class Info_Trail_Input extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      markerList: [],
      isSubmitted: false,
    };
  }

  handleSubmit = (e, markerList) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // console.log(111111111, this.props.markerList);
        var submitData = {
          newLocations: this.props.markerList,
          tag: values.category,
          imageId: 1,
          title: values.trailname,
          review: values.review
        }
        console.log(1111111, submitData)
        this.setState({
          isSubmitted: true,
        });
      }
    });
  };
  onChange(value) {
    console.log(`selected ${value}`);
  }

  onBlur() {
    console.log('blur');
  }

  onFocus() {
    console.log('focus');
  }

  onSearch(val) {
    console.log('search:', val);
  }

  render() {
    const { isSubmitted, markerList } = this.state;
    const { getFieldDecorator } = this.props.form;
    console.log('info_trail.js 에서의 markerList : ', markerList);
    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    if (!isSubmitted) {
      return (
        <Col span={10}>
          <Layout id="id_addTrail_Input">
            <Content>
              <Form
                onSubmit={e => {
                  this.handleSubmit(e, markerList);
                }}
                className="cl_addTrail_form"
              >
                {/* <div className="cl_addTRail_head">Create Your Trail !</div> */}
                <Form.Item className="cl_Trailname">
                  {getFieldDecorator('trailname', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Trail name!',
                      },
                    ],
                  })(<Input placeholder="Trail name" />)}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('category', {
                    rules: [
                      {
                        required: true,
                        message: 'Please select category!',
                      },
                    ],
                  })(
                    <Select
                      className="cl_tagSelector"
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select a tag"
                      optionFilterProp="children"
                      onChange={this.onChange}
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}
                      onSearch={this.onSearch}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="With pet">With pet</Option>
                      <Option value="Night View">Night View</Option>
                      <Option value="Calm">Calm</Option>
                      <Option value="Lake">Lake</Option>
                    </Select>,
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator('review', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input review!',
                      },
                    ],
                  })(
                    <TextArea
                      rows={6}
                      className="cl_addTrail_text"
                      placeholder="Write your review !"
                    />,
                  )}
                </Form.Item>
                <Form.Item className="cl_addTrail_upload">
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Dragger>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="cl_addTrail_btn"
                  >
                    Create!
                  </Button>
                </Form.Item>
              </Form>
            </Content>
          </Layout>
        </Col>
      );
    } else {
      return <Redirect to="/trailinfo"> </Redirect>;
    }
  }
}

export default Form.create({ name: 'normal_login' })(Info_Trail_Input);

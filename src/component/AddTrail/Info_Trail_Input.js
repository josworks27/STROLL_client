import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Upload, Rate, Alert } from 'antd';
import { Col, Layout } from 'antd';
import { Select } from 'antd';
const { Option } = Select;
const { Content } = Layout;
const { TextArea } = Input;

class Info_Trail_Input extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

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
    const { getFieldDecorator } = this.props.form;
    return (
      <Col span={10}>
        <Layout id="id_addTrail_Input">
          <Content>
            <Form onSubmit={this.handleSubmit} className="cl_addTrail_form">
              <Rate className="cl_addTrail_rate" />
              {/* <div className="cl_addTRail_head">Create Your Trail !</div> */}
              <Form.Item className="cl_Trailname">
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Trail name!',
                    },
                  ],
                })(<Input placeholder="Trail name" />)}
              </Form.Item>

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
              </Select>
              <div>
                <TextArea
                  rows={6}
                  className="cl_addTrail_text"
                  placeholder="Write your review !"
                />
              </div>
              <Form.Item className="cl_addTrail_upload">
                {getFieldDecorator('dragger', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>,
                )}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="cl_addTrail_btn"
                >
                  <Link to="/trailinfo">Create!</Link>
                </Button>
              </Form.Item>


            </Form>
          </Content>
        </Layout>
      </Col>
    );
  }
}

export default Form.create({ name: 'normal_login' })(Info_Trail_Input);

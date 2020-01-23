import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, message, Icon } from 'antd';
import { Col, Layout } from 'antd';
import { Select } from 'antd';
import axios from 'axios';
import FormData from 'form-data';
const URL = require('../../ngrokurl');
axios.defaults.withCredentials = true;

const { Option } = Select;
const { Content } = Layout;
const { TextArea } = Input;
const formData = new FormData();

class Info_Trail_Input extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // normal tag용
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);

    this.state = {
      markerList: [],
      isSubmitted: false,
      file: null,
    };
  }
  /////////////////////////////////////////////////
  onFormSubmit(e) {
    e.preventDefault();
    formData.append('img', this.state.file);
    console.log('이미지 추가', formData)
  }
  onChangeFile(e) {
    this.setState({ file: e.target.files[0] });
  }
  /////////////////////////////////////////////////
  handleSubmit = (e, markerList) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        formData.append('newLocations', JSON.stringify(this.props.markerList));
        formData.append('tag', values.category);
        formData.append('title', values.trailname);
        formData.append('review', values.review);
        console.log('폼데이터 확인', formData.title)
        let submitData = {
          newLocations: this.props.markerList,
          tag: values.category,
          title: values.trailname,
          review: values.review,
          img: this.state.file,
        };
        // console.log('전체 데이터 완성', formData)
        // // 1. 이미지 axios 포스팅
        // postDataWithData(submitData);

        // 2. 전체 포스팅
        // postDataWithoutData(submitData).bind(this);
        axios
          .post(`${URL}/trails`, formData, {
            headers: {
              'content-type': 'multipart/form-data',
              accept: 'application/json',
              // Authorization: `Bearer ${localStorage.token}`,
              // Authorization: `Bearer ${localStorage.cookie}`,
            },
          })
          .then(res => {
            if (res.status === 200) {
              this.props.handleSelectThemeBtn(null);
              this.setState({
                isSubmitted: true,
              });
            } else {
              console.log('??????????');
            }
          })
          .catch(err => {
            console.log(err);
          });
        /****************************전체 포스팅 */
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
                <div className="cl_addTRail_head"> Create Your Trail !</div>
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
                      <Option value="Night view">Night view</Option>
                      <Option value="Calm">Calm</Option>
                      <Option value="Lake view">Lake view</Option>
                      <Option value="Beach view">Beach view</Option>
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
                {/* 이미지 전송 부분 */}

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
              <form onSubmit={this.onFormSubmit} className="cl_addTrail_upload">
                <div className="filebox">
                  <label for="ex_file">
                    <Icon type="inbox" className="cl_inbox_icon" />
                  </label>

                  <input
                    type="file"
                    name="img"
                    onChange={this.onChangeFile}
                    id="ex_file"
                  />
                </div>

                <button type="submit" className="cl_upload_btn">
                  <Icon type="upload" />
                </button>
              </form>
            </Content>
          </Layout>
        </Col>
      );
    } else {
      // return setTimeout(() => <Redirect to="/main"> </Redirect>, 1000)
      return <Redirect to="/main"> </Redirect>;
    }
  }
}

export default Form.create({ name: 'normal_login' })(Info_Trail_Input);

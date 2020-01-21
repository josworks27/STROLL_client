import React, { Component } from 'react';
import ThemeList from '../component/Main/ThemeList';
import TrailList from '../component/Main/TrailList';
import { Button, Layout } from 'antd';
import '../component/Main/mypage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const NGROK_URL = require('../ngrokurl');

axios.defaults.withCredentials = true;

class mypage_page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wholetrails: [],
      location: this.props.location,
      isLogin: this.props.isLogin,
    };
  }
  // componentDidUpdate(prevProps, prevState, snapshot)
  componentDidUpdate() {}
  componentDidMount() {
    axios
      .get(`${NGROK_URL}/trails`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(res => {
        if (res.status === 200) {
          console.log('trails in mypage.js axios method', res.data.trails);
          this.setState({
            wholetrails: this.state.wholetrails.concat(res.data.trails),
          });
        }
      })
      .catch(err => {
        console.log('Invaild token');
        throw err;
      });
  }

  render() {
    const { location, wholetrails } = this.state;

    console.log('trails in mypage.js: ', this.props.filteredTrailList); //여기 고쳐야함
    return (
      <Layout className="cl_mypage">
        <div className="cl_mypage_header"> STROLL </div>
        <ThemeList
          currentTheme={this.props.currentTheme}
          wholetrails={wholetrails}
          handleSelectThemeBtn={this.props.handleSelectThemeBtn}
        ></ThemeList>
        <Layout>
          <div className="cl_temperary">
            <Button
              type="primary"
              className="cl_addTrailBtn"
              onClick={() => this.props.handleSelectThemeBtn(null)}
            >
              모든 trail 보기
            </Button>
            <Button type="primary" className="cl_addTrailBtn">
              <Link to="/addtrail">Add Trail</Link>
            </Button>
            <Button type="primary" className="cl_addTrailBtn">
              <Link to="/">로그아웃</Link>
            </Button>
          </div>

          <TrailList
            location={location}
            currentTheme={this.props.currentTheme}
            handleSelectTrail={this.props.handleSelectTrail}
            filteredTrailList={this.props.filteredTrailList}
          ></TrailList>
        </Layout>
      </Layout>
    );
  }
}

export default mypage_page;

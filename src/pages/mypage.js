import React, { Component } from 'react';
import ThemeList from '../component/Main/ThemeList';
import TrailList from '../component/Main/TrailList';
import { Button, Layout } from 'antd';
import '../component/Main/mypage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

class mypage_page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fiterdlist: null,
      trails: [],
      location: this.props.location,
      isLogin: this.props.isLogin,
    };
  }

  componentDidMount() {
    axios
      .get(`http://2c815448.ngrok.io/trails`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            trails: this.state.trails.concat(res.data.trails),
          });
        }
      })
      .catch(err => {
        console.log('Invaild token');
        throw err;
      });
  }

  render() {
    const { location, trails } = this.state;

    return (
      <Layout className="cl_mypage">
        <ThemeList
          currentTheme={this.props.currentTheme}
          trails={trails}
          handleSelectThemeBtn={this.props.handleSelectThemeBtn}
        ></ThemeList>
        <Layout>
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

          <TrailList
            location={location}
            currentTheme={this.props.currentTheme}
            handleSelectTrail={this.props.handleSelectTrail}
            trails={trails}
          ></TrailList>
        </Layout>
      </Layout>
    );
  }
}

export default mypage_page;

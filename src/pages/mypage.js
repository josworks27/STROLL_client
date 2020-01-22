import React, { Component } from 'react';
import ThemeList from '../component/Main/ThemeList';
import TrailList from '../component/Main/TrailList';
import { Layout, Icon } from 'antd';
import '../component/Main/Main.css';
import { Link, Redirect } from 'react-router-dom';
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

    if (this.props.isLogin) {
      return (
        <Layout className="cl_mypage">
          <div className="cl_mypage_header"> STROLL </div>
          <ThemeList
            currentTheme={this.props.currentTheme}
            wholetrails={wholetrails}
            handleSelectThemeBtn={this.props.handleSelectThemeBtn}
          ></ThemeList>
          <Layout>
            <div className="cl_temperary ">
              <div
                className="a"
                onClick={() => this.props.handleSelectThemeBtn(null)}
              >
                <Icon type="filter" className="cl_allTrail" />
                Every trail
              </div>
              <div className="b">
                <Link to="/addtrail">
                  <Icon type="plus-circle" className="cl_addTrailBtn" /> Add
                  trail
                </Link>
              </div>

              <div
                className="c"
                onClick={() => {
                  localStorage.clear();
                  this.props.handleLogOutBtn();
                }}
              >
                <Icon className="cl_logout_btn" type="logout" /> Logout
              </div>
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
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}

export default mypage_page;

/*
  요청: GET
  URL : /trails/:tag   선택한 카테고리의 산책로들 불러오기
  URL : /trails        모든 카테고리의 산책로들 불러오기
  응답 형태:
    res.status(200).json({
      trailId: 1,
      location1: (x, y),
      location2: (x, y),
      location3: (x, y),
      location4: (x, y),
      location5: (x, y),
      username: 'user1',
      title: 'good trail',
      tag: 'night view',// - 추후논의 - 선택한 리스트 제목 =>
      (rating: 5, 한 trail 의 정보창에 있는게 나을수도..) => 표시하면 좋을 것 같다.
    })
    res.status(404).json(forbidden)
*/
import React, { Component } from 'react';
import TrailListElement from './TrailListElement';
import Map from './Map';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';
// import trailinfo_page from '../../pages/trailinfo';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// 실제 서버에 요청할 때는 특정 카테고리의 산책로들만 불러오기 때문에
// tag 요소는 필요 없다.
let fake_trail = [
  {
    trailId: 1,
    location1: [37.384391, 127.122935],
    location2: [37.383875, 127.121857],
    location3: [37.38402, 127.122184],
    location4: [37.384591, 127.123616],
    location5: [37.385375, 127.12404],
    username: '이은지',
    title: 'good trail',
    tag: 'Night view', // - 추후논의 - 선택한 리스트 제목 =>
  },
  {
    trailId: 2,
    location1: [37.385816, 127.124534],
    location2: [37.385593, 127.12641],
    location3: [37.384306, 127.124318],
    location4: [37.382814, 127.122516],
    location5: [37.383735, 127.120274],
    username: '안준용',
    title: '반려동물과 함께하기 좋은 산책로',
    tag: 'With pet', // - 추후논의 - 선택한 리스트 제목 =>
  },
  {
    trailId: 3,
    location1: [37.383701, 127.116873],
    location2: [37.383875, 127.121857],
    location3: [37.383871, 127.118343],
    location4: [37.385265, 127.117603],
    location5: [37.384476, 127.117925],
    username: '코드스테이츠',
    title: '반려동물과 함께하기 좋은 산책로1',
    tag: 'With pet', // - 추후논의 - 선택한 리스트 제목 =>
  },
];
let trail = ['pet trail1', 'pet trail2', 'pet trail3', 'pet trail4'];
export default class TrailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      location: this.props.location,
      isLogin: this.props.isLogin,
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    // axios요청으로 리스트 받아오기
    const { location, isLogin } = this.state;
    let traillist;
    let currentTheme = this.props.currentTheme;
    console.log('Current Theme: ', currentTheme);
    if (!currentTheme) {
      traillist = fake_trail;
    } else {
      traillist = fake_trail.filter(trail => trail.tag === currentTheme);
    }
    return (
      <Content style={{ minHeight: '100vh' }} className="cl_mypage_info">
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '20px 0' }}>
              <Breadcrumb.Item className="cl_trailTag">
                {/* 선택한 테마의 이름이 와야함 */}
                With pet
              </Breadcrumb.Item>
            </Breadcrumb>
            <Row id="id_Mypage_main_row">
              <Col span={8} className="cl_Mypage_main_content">
                {traillist.map((trail, index) => (
                  <TrailListElement
                    key={'trail' + trail + index}
                    trail={trail}
                  />
                ))}
              </Col>
              <Col span={16} className="cl_Mypage_main_content">
                {/* 지도가 올 자리 */}
                {/* 위치 5개 프롭으로 내려주기 */}
                <Map location={location} traillist={traillist}></Map>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Content>
    );
  }
}

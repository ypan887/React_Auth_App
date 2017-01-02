import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/App.scss';

import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {

  constructor() {
    super();
    this.state = {
      signedIn: false,
      currentUser: {}
    }
  }

  componentDidMount() {
    //auth_token=1sdpyXlhuqhUCOuCiMCKdg&blank=true&client_id=VfvCADKQfddchy6UhyX2sA&config=&expiry=1484549980&oauth_registration=true&uid=807699804
    let query = this.props.location.query;
    let token = query.auth_token;
    if (!!token) {sessionStorage.setItem('token', token);}
    this.setState({
      signedIn: true,
      currentUser: { uid: query.uid }
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Sidebar />
            </Col>
            <Col xs={12} md={9}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppComponent;

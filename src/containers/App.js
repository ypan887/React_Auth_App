import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/App.scss';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { validateToken, handleToken, logout } from '../actions';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import setAuthorizationToken from '../utils/setAuthorizationToken';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let auth = localStorage.getItem('auth');
    if (auth && !this.props.isAuthenticated) {
      this.props.validateToken(auth);
    }
  }

  componentDidMount(){
    window.addEventListener("message",
      (e) => {
        if(e.origin == "http://localhost:3000" && e.data["auth_token"] && e.data["user_name"]){
          window.focus();
          this.props.handleToken(e.data)
        }
      }, false);
  }

  render(){
    return(
      <div>
        <Header isAuthenticated={this.props.isAuthenticated} logout={this.props.logout}/>
        <MainSection {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userName: state.auth.userName
})

const mapDispatchToProps = (dispatch) => ({
  validateToken: bindActionCreators(validateToken, dispatch),
  handleToken: bindActionCreators(handleToken, dispatch),
  logout: bindActionCreators(logout, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

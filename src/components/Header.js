import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';
import AuthWrapper from '../containers/AuthWrapper'
import Modal from 'boron/DropModal'

class HeaderComponent extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.refs.modal.show();
  }

  logout() {
  }

  hideModal(){
    this.refs.modal.hide();
  }

  render() {
    let modalStyle = {
      borderRadius: '6px',
      width: '250px'
    };
    let loginClassName= this.props.isAuthenticated ? 'hidden' : '';
    let logoutClassName= !this.props.isAuthenticated ? 'hidden' : '';

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <p>React Login</p>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={this.login} className={loginClassName}>
            login
            <Modal ref="modal" modalStyle={modalStyle}>
              <div className="auth-pane">
                <AuthWrapper />
              </div>
            </Modal>
          </NavItem>
          <NavItem
            onClick={this.logout}
            className={logoutClassName}
          >Logout</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderComponent;

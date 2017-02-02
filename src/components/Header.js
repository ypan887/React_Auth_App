import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import AuthWrapper from '../containers/AuthWrapper'
import Modal from 'boron/DropModal'

class HeaderComponent extends Component {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.refs.modal.show();
  }

  hideModal(){
    this.refs.modal.hide();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
      // since render method not called here, need to update state manaully
      this.refs.modal.state = { willHidden: true, hidden: true }
    }
  }

  render() {
    const modalStyle = {
      borderRadius: '6px'
    };
    const backdropStyle = {
      cursor: 'default'
    };
    const contentStyle = {
      outline:'none'
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
          <NavItem onClick={this.showModal} className={loginClassName}>
            login
            <Modal
              ref="modal"
              modalStyle={modalStyle}
              backdropStyle={backdropStyle}
              contentStyle={contentStyle}
              className='drop-modal'
            >
              <div className="auth-pane">
                <AuthWrapper />
              </div>
            </Modal>
          </NavItem>
          <NavItem
            onClick={this.props.logout}
            className={logoutClassName}
          >Logout</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderComponent;

import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'
import GuestView from '../components/GuestView';

export function requireAuthentication(Component) {
  const AuthenticatedComponent = ({userName, isAuthenticated}) => {
    return (
      <div>
        {isAuthenticated === true
          ? <Component userName={userName} />
          : <GuestView />
        }
      </div>
    )
  }

  const mapStateToProps = (state) => ({
      userName: state.auth.userName,
      isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}

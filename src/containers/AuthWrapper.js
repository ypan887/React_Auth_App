import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthTab from '../components/AuthTab';
import AuthContent from '../components/AuthContent';
import { toggleTab } from '../actions';

let AuthWrapper = ({currentTab, toggleTab}) => (
  <div>
    <AuthTab
      toggleTab = {toggleTab}
      currentTab = {currentTab}
    />
    <AuthContent currentTab = {currentTab} />
  </div>
)

const mapStateToProps = state => ({
  currentTab: state.toggleTab.currentTab
})

const mapDispatchToProps = dispatch => ({
  toggleTab: bindActionCreators(toggleTab, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWrapper)

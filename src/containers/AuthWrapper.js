import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthTab from '../components/AuthTab';
import AuthContent from '../components/AuthContent';
import { toggleTab, getInput, validateInput } from '../actions';

let AuthWrapper = (props) => {
  return(
    <div>
      <AuthTab
        toggleTab = {props.toggleTab}
        currentTab = {props.currentTab}
      />
      <AuthContent {...props} />
    </div>
  )
}


const mapStateToProps = state => ({
  currentTab: state.toggleTab.currentTab,
  isLoading: state.event.isLoading,
  input: state.input
})

const mapDispatchToProps = dispatch => ({
  toggleTab: bindActionCreators(toggleTab, dispatch),
  getInput: bindActionCreators(getInput, dispatch),
  validateInput: bindActionCreators(validateInput, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWrapper)

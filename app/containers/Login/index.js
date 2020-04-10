/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LoginR from '@redwallsolutions/login-component-module';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import { tryToLogin, register } from './actions';

let loginController;

export function Login({ dispatch }) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const getLoginController = controller => {
    loginController = controller;
  };

  const onFrontSubmit = credentials => {
    dispatch(tryToLogin(credentials));
  };

  const onBackSubmit = profile => {
    dispatch(register({ profile, loginController }));
  };
  return (
    <div>
      <Helmet>
        <title>Login </title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <LoginR
        getLoginController={getLoginController}
        onFrontSubmit={onFrontSubmit}
        onBackSubmit={onBackSubmit}
      />
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);

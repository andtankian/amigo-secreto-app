/**
 *
 * Home
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bootstrap-css-only/css/bootstrap.css';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { MdList, MdPerson } from 'react-icons/md';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Switch, Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import Navbar from '@redwallsolutions/vertical-navbar-component-module';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import Feed from '../Feed/Loadable';

export function Home({ dispatch }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  return (
    <Navbar
      items={[
        {
          name: 'Mural',
          icon: <MdList size="1.5em" />,
          handler: () => {
            dispatch(push('/home/feed'));
          },
        },
        {
          name: 'Perfil',
          icon: <MdPerson size="1.5em" />,
          handler: () => {
            dispatch(push('/home/profile'));
          },
        },
      ]}
    >
      <div>
        <HomeContent />
      </div>
    </Navbar>
  );
}

function HomeContent() {
  // const controller = useVerticalNavbarController();
  return (
    <Switch>
      <Route path="/home/feed" component={Feed} />
    </Switch>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
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
)(Home);

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
import { MdPerson, MdCardGiftcard } from 'react-icons/md';
import { FaDice } from 'react-icons/fa';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Switch, Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import Navbar from '@redwallsolutions/vertical-navbar-component-module';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import Feed from '../Feed/Loadable';
import Profile from '../Profile/Loadable';
import Lottery from '../Lottery/Loadable';

export function Home({ dispatch }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  return (
    <Navbar
      items={[
        {
          name: 'Sorteio',
          icon: <FaDice size="1.5em" />,
          handler: () => {
            dispatch(push('/home/lottery'));
          },
        },
        {
          name: 'Sugestões',
          icon: <MdCardGiftcard size="1.5em" />,
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
      <Route path="/home/lottery" component={Lottery} />
      <Route path="/home/feed" component={Feed} />
      <Route path="/home/profile" component={Profile} />
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

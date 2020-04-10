/**
 *
 * Lottery
 *
 */

import React, { memo, useEffect } from 'react';
import Countdown from 'react-countdown-now';
import PropTypes from 'prop-types';
import { useVerticalNavbarController } from '@redwallsolutions/vertical-navbar-component-module';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLottery } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFinalTime, timeout as actionTimeout } from './actions';
import Fluid from '../../components/List/Fluid';

export function Lottery({
  dispatch,
  lottery: { finalTime, timeout, profile },
}) {
  useInjectReducer({ key: 'lottery', reducer });
  useInjectSaga({ key: 'lottery', saga });

  const navbarController = useVerticalNavbarController();

  useEffect(() => {
    navbarController.startLoading();
    dispatch(loadFinalTime());
  }, []);

  useEffect(() => {
    if (finalTime) {
      navbarController.finishLoading();
    }
  }, [finalTime]);

  const getKrisKringer = () => {
    dispatch(actionTimeout());
  };

  return (
    <div>
      <Helmet>
        <title>Sorteio</title>
        <meta name="description" content="" />
      </Helmet>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '90vh' }}
      >
        {finalTime && !timeout && (
          <Countdown
            date={finalTime}
            renderer={({ formatted: { hours, minutes, seconds } }) => (
              <div className="text-center container">
                <h4>Tempo restante para o sorteio</h4>
                <h2 className="p-0 m-0">
                  <strong>{`${hours}:${minutes}:${seconds}`}</strong>
                </h2>
                <span role="img" aria-label="emoji">
                  😀
                </span>
              </div>
            )}
            onComplete={getKrisKringer}
          />
        )}
        {timeout && profile && (
          <Fluid>
            <div className="text-center">
              <h2>
                Você tirou <br />
                <strong>
                  {profile.krissKringle && profile.krissKringle.fullName}
                </strong>
                <br />
                <span role="img" aria-label="emoji">
                  🎉
                </span>
              </h2>
              Veja a <Link to="/home/feed">lista de sugestões</Link> dos
              participantes.
            </div>
          </Fluid>
        )}
      </div>
    </div>
  );
}

Lottery.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lottery: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lottery: makeSelectLottery(),
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
)(Lottery);

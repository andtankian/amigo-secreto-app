/**
 *
 * Feed
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import List from 'components/List/Loadable';
import { makeSelectPeople } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFeed } from './actions';

export function Feed({ dispatch, people }) {
  useInjectReducer({ key: 'feed', reducer });
  useInjectSaga({ key: 'feed', saga });

  useEffect(() => {
    dispatch(loadFeed());
  }, []);
  return (
    <div>
      <Helmet>
        <title>Feed</title>
        <meta name="description" content="Description of Feed" />
      </Helmet>
      <List people={people} />
    </div>
  );
}

Feed.propTypes = {
  dispatch: PropTypes.func.isRequired,
  people: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  people: makeSelectPeople(),
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
)(Feed);

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the feed state domain
 */

const selectFeedDomain = state => state.feed || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Feed
 */

const makeSelectFeed = () =>
  createSelector(
    selectFeedDomain,
    substate => substate.people,
  );
const makeSelectPeople = () =>
  createSelector(
    makeSelectFeed(),
    people => people,
  );

export { makeSelectFeed, makeSelectPeople };

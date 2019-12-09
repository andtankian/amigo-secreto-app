import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profile state domain
 */

const selectProfileDomain = state => state.profile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Profile
 */

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );
export default makeSelectProfile;
export { selectProfileDomain };

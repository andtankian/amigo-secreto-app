import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lottery state domain
 */

const selectLotteryDomain = state => state.lottery || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Lottery
 */

const makeSelectLottery = () =>
  createSelector(
    selectLotteryDomain,
    substate => substate,
  );

const makeSelectFinalTime = () =>
  createSelector(
    makeSelectLottery(),
    lottery => lottery.finalTime,
  );

export { makeSelectLottery, makeSelectFinalTime };

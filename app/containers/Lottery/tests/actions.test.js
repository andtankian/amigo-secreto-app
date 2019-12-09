import { loadFinalTime } from '../actions';
import { LOAD_FINAL_TIME } from '../constants';

describe('Lottery actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOAD_FINAL_TIME,
      };
      expect(loadFinalTime()).toEqual(expected);
    });
  });
});

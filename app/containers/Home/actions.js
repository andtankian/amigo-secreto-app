/*
 *
 * Home actions
 *
 */

import { DEFAULT_ACTION, POWER_OFF } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function powerOff() {
  return {
    type: POWER_OFF,
  };
}

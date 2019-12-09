/**
 *
 * Asynchronously loads the component for Lottery
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

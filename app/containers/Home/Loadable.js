/**
 *
 * Asynchronously loads the component for Home
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

/**
 *
 * Asynchronously loads the component for Profile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

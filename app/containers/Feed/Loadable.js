/**
 *
 * Asynchronously loads the component for Feed
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

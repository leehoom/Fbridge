import {env} from '../../tools/tools.js';

import * as app from './app.js';
import * as m from './m.js';

let index = {};

switch (env.platform) {
case 'app':
    index = app;
    break;
case 'm':
case 'wx':
    index = m;
    break;
}

export default index;

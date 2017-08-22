import {env} from '../../tools/tools.js';

import * as app from './app.js';
import * as wx from './wx.js';
import * as m from './m.js';

let index = {};
switch (env.platform) {
case 'app':
    index = app;
    break;
case 'm':
    index = m;
    break;
case 'wx':
    index = wx;
    break;
}

export default index;

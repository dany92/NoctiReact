import path from 'path';

import devConfig from './development';
import productionConfig from './production';

let exportConfig = {};
if (process.env.NODE_ENV === 'production') {
   exportConfig = productionConfig;
} else {
   exportConfig = devConfig;
}

export default exportConfig;
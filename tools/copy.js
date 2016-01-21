//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import task from './lib/task';
import cp from './lib/copy';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
export default task(async function copy() {
  await cp('static', 'build');
});

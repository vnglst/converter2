//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import del from 'del';
import task from './lib/task';
import fs from './lib/fs';

export default task(async function clean() {
  await del(['build/*', '!build/.git'], { dot: true });
  await fs.mkdir('build');
});

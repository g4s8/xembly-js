import {AddDir, SetDir} from './directives.js';

export default class Xembler {
  constructor(text) {
    this.dirs = split(text)
  }

  apply(doc, node=null) {
    if (node == null) {
      node = doc;
    }
    let cursor = [node];
    const stack = [];
    for (var pos = 0; pos < this.dirs.length; pos++) {
      const dir = this.dirs[pos];
      console.debug(`applying directive: ${dir} (doc: ${doc}, cur: ${cursor}, stack: ${stack})`);
      cursor = dir.apply(doc, cursor, stack);
    }
    return doc;
  }
}

function split(dirs) {
  return dirs.split(";")
    .filter(x => x.length > 0)
    .map(x => directive(x));
}

function directive(str) {
  const cmd = str.split(' ')
  if (cmd[0] == 'ADD') {
    return new AddDir(cmd[1]);
  }
  if (cmd[0] == 'SET') {
    return new SetDir(cmd[1]);
  }
  throw `Unsupported directive (yet): '${cmd[0]}'"`;
}

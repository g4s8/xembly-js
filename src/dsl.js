import {AddDir, SetDir} from './directives.js';

export class Directives {
  constructor(dirs) {
    if (arguments.length == 0) {
      dirs = new Array(0);
    } else if (typeof dirs === 'string') {
      dirs = parseDirs(dirs);
    } else if (Array.isArray(dirs)) {
      dirs = dirs.slice(0);
    } else {
      throw `IllegalArgumentException: ${dirs}`
    }
    this.dirs = dirs;
  }

  push(dir) {
    const copy = this.dirs.slice(0);
    copy.push(dir);
    return new Directives(copy);
  }

  add(tag) {
    return this.push(new AddDir(tag));
  }

  set(text) {
    return this.push(new SetDir(text));
  }

  asArray() {
    return this.dirs.slice(0);
  }

  toString() {
    return this.dirs
      .map(dir => dir.toString())
      .join(';');
  }
}

function parseDirs() {
  return [];
}

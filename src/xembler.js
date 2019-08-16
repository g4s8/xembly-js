/**
 * Xembly engine which can apply directives
 * to DOM.
 * Use directives package to construct directives.
 */
export default class Xembler {
  constructor(dirs) {
    this.dirs = dirs.asArray();
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


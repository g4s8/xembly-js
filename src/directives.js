/*
 * @todo #1:30min Continue implementing
 *  directives. Right now only ADD and SET
 *  directives are implemented. See full list
 *  here: https://github.com/yegor256/xembly#directives
 */

/**
 * ADD tag-name; directive.
 * Creates new child element and appending
 * to current nodes.
 * @todo #1:30min Validate directive arguments.
 *  It should be valid XML entity, let's check how
 *  it was implemented in origin xembly project.
 */
export class AddDir {
  constructor(tag) {
    this.tag = tag;
  }

  apply(doc, cur) {
    const size = cur.length;
    const out = new Array(size);
    for (var pos = 0; pos < size; pos++) {
      const node = cur[pos];
      const el = doc.createElement(this.tag);
      console.debug(`AddDir: appending child ${el} to ${node}`);
      node.appendChild(el);
      out[pos] = el;
    }
    return out;
  }

  toString() {
    return `ADD '${this.tag}'`;
  }
}

/**
 * SET text; directive.
 * Creates text element and attaching to
 * current nodes.
 */
export class SetDir {
  constructor(text) {
    this.text = text;
  }

  apply(doc, cur) {
    for (var pos = 0; pos < cur.length; pos++) {
      const tn = doc.createTextNode(this.text);
      cur[pos].appendChild(tn);
    }
    return cur;
  }

  toString() {
    return `SET '${this.text}'`;
  }
}

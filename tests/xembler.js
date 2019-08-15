import {default as Xembler} from '../src/xembler.js';

const expect = require('chai').expect;
const assert = require('assert');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)).window;

describe('xembler tests', function() {
  it('add element', function() {
    var xml = document.implementation.createDocument(null, null);
    new Xembler('ADD foo;SET bar;').apply(xml);
    assert.equal(xml.firstChild.outerHTML, '<foo>bar</foo>');
  });
});

import {Directives, Xembler} from '../index.js';
import test from 'ava';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)).window;

test('xembler tests', t => {
    var xml = document.implementation.createDocument(null, null);
    new Xembler(new Directives().add('foo').set('bar')).apply(xml);
    t.is(xml.firstChild.outerHTML, '<foo>bar</foo>');
});

test('directives DSL', t => {
  t.is(new Directives().add('foo')
    .set('bar')
    .toString(), "ADD 'foo';SET 'bar'");
});


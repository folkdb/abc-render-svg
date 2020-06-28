import test from 'ava';
import render from '../lib/index.js';


test('Renders some notes', async (t) => {
  const result = await render(`
    X:1
    T:Notes
    M:C
    L:1/4
    K:C
    c d e f|g a b c'|]
  `);
  
  t.true(result.startsWith('<svg'));
});


test('Renders Cooley\'s', async (t) => {
  const result = await render(`
    X: 1
    T: Cooley's
    M: 4/4
    L: 1/8
    K: Emin
    |:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|
    EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|
    |:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|
    eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|
  `);
  
  t.true(result.startsWith('<svg'));
});

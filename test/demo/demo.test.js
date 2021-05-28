const LazyQuery = require('../../src/demo/demo');


test('a demo test', () => {

  let res = new LazyQuery(["name", "age", "gender"])
    .map( item => `[[${ item }]]` )
    .map( item => `==${ item }==`)
    .all();

  expect( res ).toEqual(["==[[name]]==", "==[[age]]==", "==[[gender]]=="]);

});
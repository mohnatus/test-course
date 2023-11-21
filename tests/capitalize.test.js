import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';


// assert(capitalize('') === '');
// assert(capitalize('hello') === 'Hello');

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');
assert.deepEqual({ key: 'value' }, { key: 'value' });


/* 1
if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}
*/

console.log('Все тесты пройдены!');
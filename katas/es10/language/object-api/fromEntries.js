// 1: Object - fromEntries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.fromEntries()` converts key-value pairs into an object', () => {
  it('is a function defined on `Object`', () => {
    //// const expectedType = '???';
    const expectedType = 'function';
    assert.equal(typeof Object.fromEntries, expectedType);
  });
  describe('requires an argument that can be converted to an object', () => {
    it('`undefined` throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(undefined); }, TypeError);
    });
    it('`null` throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(undefined); }, TypeError);
    });
    it('a boolean throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(true); }, TypeError);
    });
    it('a Symbol throws a TypeError', () => {
      assert.throws(() => { Object.fromEntries(Symbol.for('some')); }, TypeError);
    });
    it('an empty string does NOT throw', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
    });
    it('an non-empty string does throw', () => {
      assert.throws(() => { Object.fromEntries(' '); });
    });
  });

  describe('works', () => {
    it('empty string', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
      assert.deepEqual(Object.fromEntries([]), {});
    });
    it('empty array', () => {
      assert.doesNotThrow(() => { Object.fromEntries([]); });
      assert.deepEqual(Object.fromEntries([]), {});
    });
    it('array of arrays', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[]]); });
      assert.deepEqual(Object.fromEntries([[], []]), {undefined: undefined});
    });
    it('array of arrays #2', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[], []]); });
      assert.deepEqual(Object.fromEntries([[], []]), {undefined: undefined});
    });
    it('array of arrays #3', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[], []]); });
      assert.deepEqual(Object.fromEntries([[1,2], [3,4]]), {1:2, 3:4});
    });
    it('toString-ables can be keys', () => {
      const s = new class { toString() { return 'key'; }  };
      assert.deepEqual(Object.fromEntries([[s, 42]]), {key: 42});
    });
    it('keys 0 and 1 must be given', () => {
      assert.deepEqual(Object.fromEntries([{1: null}]), {[undefined]: null});
      assert.deepEqual(Object.fromEntries([{0: 0, 1: 1}]), {0: 1});
      assert.deepEqual(Object.fromEntries([{10: 0, 20: 1}]), {[undefined]: undefined});
      assert.deepEqual(Object.fromEntries([[0, 1]]), {0: 1});
      assert.deepEqual(Object.fromEntries([Object('')]), {[undefined]: undefined});
      assert.deepEqual(Object.fromEntries([Object('12')]), {1: '2'});
      assert.throws(() => Object.fromEntries(['12']));

      // when each item is an iterable, they are not iterated over!!!!
      const map = new Map([['key', 'value']]);
      assert.deepEqual(Object.fromEntries([map]), {[undefined]: undefined});
      map[0] = 1;
      assert.deepEqual(Object.fromEntries([map]), {1: undefined});
    });
  });

  describe('use cases', () => {
    it('from JSON to object', () => {
      // the
    });
    it('mapping data', () => {
      const people = [{name: 'Alex', age: 21}, {name: 'Anna', age: 21}];
      const peoplesAge = Object.fromEntries(people.map(({name, age}) => [name, age]));
      assert.deepEqual({Alex: 21, Anna:21}, peoplesAge);
    });
  });
  describe('not symetric to `Object.entries()`', () => {
    it('is almost the reverse of Object.entries()', () => {

    });
    it('allows Symbols as keys, while `Object.entries()` does not report them', () => {
      const sym = Symbol();
      const fromEntries = Object.fromEntries([[sym, 42]]);
      assert.deepEqual(fromEntries, {[sym]: 42});
      // while
      assert.deepEqual(Object.entries(fromEntries), []);
    });
  });
});

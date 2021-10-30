import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('lastOrDefault Tests', () => {
    it('should work', () => {
        const array = Enumerable.from([1, 2, 3]).lastOrDefault();
        expect(array).eq(3);

    });
    it('should work with predicate', () => {
        const array = Enumerable.from([1, 2, 3]).lastOrDefault(x => x >= 2);
        expect(array).eq(3);

    });

    it('should work when empty', () => {
        const array = Enumerable.from<number>([]).lastOrDefault();
        expect(array).eq(undefined);
    });

    it('should work when empty with default value', () => {
        const array = Enumerable.from<number>([]).lastOrDefault(null, '999');
        expect(array).eq('999');
    });
});

describe('last Tests', () => {

    it('should work', () => {
        const array = Enumerable.from([1, 2, 3]).last();
        expect(array).eq(3);
    });

    it('should throw exception when empty', () => {
        assert.throws(() => {
            Enumerable.from([]).last();
        })
    });
});
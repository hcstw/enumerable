import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('firstOrDefault Tests', () => {
    it('should work', () => {
        const array = Enumerable.from([1, 2, 3]).firstOrDefault();
        expect(array).eq(1);

    });
    it('should work with predicate', () => {
        const array = Enumerable.from([1, 2, 3]).firstOrDefault(x => x >= 2);
        expect(array).eq(2);

    });

    it('should work when empty', () => {
        const array = Enumerable.from<number>([]).firstOrDefault();
        expect(array).eq(undefined);
    });

    it('should work when empty with default value', () => {
        const array = Enumerable.from<number>([]).firstOrDefault(null, '999');
        expect(array).eq('999');
    });
});

describe('first Tests', () => {

    it('should work', () => {
        const array = Enumerable.from([1, 2, 3]).first();
        expect(array).eq(1);
    });

    it('should throw exception when empty', () => {
        assert.throws(() => {
            Enumerable.from([]).first();
        })
    });
});
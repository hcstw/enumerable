import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('singleOrDefault Tests', () => {
    it('should work', () => {
        const array = Enumerable.from([3]).singleOrDefault();
        expect(array).eq(3);

    });
    it('should throw when not exactly one element', () => {
        assert.throw(() => Enumerable.from([3, 2]).singleOrDefault());

    });
    it('should work with predicate', () => {
        const array = Enumerable.from([1, 2, 3]).singleOrDefault(x => x > 2);
        expect(array).eq(3);

    });
    it('should throw when not exactly one element with predicate', () => {
        assert.throw(() => Enumerable.from([1, 2, 3]).singleOrDefault(x => x >= 2));

    });

    it('should work when empty', () => {
        const array = Enumerable.from<number>([]).singleOrDefault();
        expect(array).eq(undefined);
    });

    it('should work when empty with default value', () => {
        const array = Enumerable.from<number>([]).singleOrDefault(null, '999');
        expect(array).eq('999');
    });
});

describe('single Tests', () => {

    it('should work', () => {
        const array = Enumerable.from([3]).single();
        expect(array).eq(3);
    });
    it('should throw when not exactly one element', () => {
        assert.throw(() => Enumerable.from([3, 2]).single());

    });
    it('should throw exception when empty', () => {
        assert.throws(() => {
            Enumerable.from([]).single();
        })
    });
});
import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('count Tests', () => {
    it('should work', () => {
        const n = Enumerable.from([1, 2, 3, 4]).count()
        expect(4).eq(n);
    });
    it('should work with predicate', () => {
        const n = Enumerable.from([1, 2, 3, 4]).count(x => x > 2);
        expect(2).eq(n);
    });
});
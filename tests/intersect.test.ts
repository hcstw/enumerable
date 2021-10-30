import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('intersect Tests', () => {
    it('should work', () => {
        const result = Enumerable.from([1, 2, 3])
            .intersect([3, 4, 5])
            .toArray();
        expect([3]).deep.eq(result);
    });

    it('should work with comparer', () => {
        const result = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }])
            .intersect([{ n: 3 }, { n: 4 }, { n: 5 }], (x, y) => x.n === y.n)
            .toArray();
        expect([{ n: 3 }]).deep.eq(result);
    });
});
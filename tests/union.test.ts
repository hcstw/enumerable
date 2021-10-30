import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('union Tests', () => {
    it('should work', () => {
        const result = Enumerable.from([1, 2, 3])
            .union([5, 3])
            .toArray();

        expect([1, 2, 3, 5]).deep.eq(result);
    });
    it('should work with comparer', () => {
        const result = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }])
            .union([{ n: 5 }, { n: 3 }], (x, y) => x.n === y.n)
            .toArray();

        expect([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 5 }]).deep.eq(result);
    });
});
import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('distinct Tests', () => {
    it('should work', () => {
        const a = Enumerable.from([1, 1, 55, 1, 3, 5, 6, 8, 5, 3]).distinct().toArray();
        expect([1, 55, 3, 5, 6, 8]).deep.eq(a);
    });

    it('should work with comparer', () => {
        const a = Enumerable.from([{ n: 1 }, { n: 1 }, { n: 55 }, { n: 1 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 8 }, { n: 5 }, { n: 3 }])
            .distinct((x, y) => x.n === y.n).toArray();
        expect([{ n: 1 }, { n: 55 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 8 }]).deep.eq(a);
    });
});
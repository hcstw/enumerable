import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('contains Tests', () => {
    it('should work', () => {
        const e = Enumerable.from([1, 2, 3, 4, 5, 6]);
        const t = e.contains(5);
        const f = e.contains(10);

        expect(true).eq(t);
        expect(false).eq(f);
    });
    it('should work with comparer', () => {
        const e = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }]);
        const t = e.contains({ n: 2 }, (a, b) => a.n === b.n);
        const f = e.contains({ n: 8 }, (a, b) => a.n === b.n);

        expect(true).eq(t);
        expect(false).eq(f);
    });
});
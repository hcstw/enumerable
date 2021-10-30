import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('groupBy Tests', () => {
    it('should work', () => {
        const data = [1, 2, 1, 3, 1, 4]
            .map((x, i) => ({ n: x, name: `n-${i}` }));

        const d = Enumerable.from(data).groupBy(x => x.n, d => ({ key: d.key, items: d.toArray().map(x => x.name) })).toArray();
        expect([
            { key: 1, items: ['n-0', 'n-2', 'n-4'] },
            { key: 2, items: ['n-1'] },
            { key: 3, items: ['n-3'] },
            { key: 4, items: ['n-5'] }
        ]).deep.eq(d);
    });

    it('should work with comparer', () => {
        const data = [1, 2, 1, 3, 1, 4]
            .map((x, i) => ({ n: x, name: `n-${i}` }));

        const d = Enumerable.from(data).groupBy(x => x, d => ({ key: d.key, items: d.toArray().map(x => x.name) }), (x, y) => x.n === y.n).toArray();
        expect([
            { key: { n: 1, name: `n-0` }, items: ['n-0', 'n-2', 'n-4'] },
            { key: { n: 2, name: `n-1` }, items: ['n-1'] },
            { key: { n: 3, name: `n-3` }, items: ['n-3'] },
            { key: { n: 4, name: `n-5` }, items: ['n-5'] }
        ]).deep.eq(d);
    });
});
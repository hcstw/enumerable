import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('groupJoin Tests', () => {
    it('should work', () => {
        const keys = [1, 2, 3];
        const data2 = [1, 2, 1, 3, 1, 4]
            .map((x, i) => ({ n: x, data: `data-${i}` }));

        const result = Enumerable.from(keys).groupJoin(data2, x => x, x => x.n, g => ({ key: g.key, items: g.toArray().map(x => x.data) })).toArray();

        expect([
            { key: 1, items: ['data-0', 'data-2', 'data-4'] },
            { key: 2, items: ['data-1'] },
            { key: 3, items: ['data-3'] }
        ]).deep.eq(result);
    });
});
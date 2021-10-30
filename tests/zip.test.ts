import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('zip Tests', () => {
    it('should work', () => {
        const result = Enumerable.from([1, 2, 3])
            .zip(['a', 'b', 'c', 'd'], (l, r) => ({ n: l, t: r }))
            .toArray();

        expect([{ n: 1, t: 'a' }, { n: 2, t: 'b' }, { n: 3, t: 'c' }])
            .deep.eq(result);
    });

    it('should work short right', () => {
        const result = Enumerable.from([1, 2, 3, 4, 5])
            .zip(['a', 'b', 'c', 'd'], (l, r) => ({ n: l, t: r }))
            .toArray();

        expect([{ n: 1, t: 'a' }, { n: 2, t: 'b' }, { n: 3, t: 'c' }, { n: 4, t: 'd' }])
            .deep.eq(result);
    });
});
import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('orderByDescending Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 2 }, { n: 4 }, { n: 5 }, { n: 8 }])
            .orderByDescending(x => x.n)
            .toArray();
        expect([{ n: 8 }, { n: 5 }, { n: 4 }, { n: 3 }, { n: 2 }, { n: 2 }, { n: 1 }]).deep.eq(r);
    });

    it('should work with thenBy', () => {
        const r = Enumerable.from([{ n: 3, n2: 1 }, { n: 2, n2: 2 }, { n: 1, n2: 4 }, { n: 1, n2: 3 }])
            .orderByDescending(x => x.n)
            .thenBy(x => x.n2)
            .toArray();
        expect([{ n: 3, n2: 1 }, { n: 2, n2: 2 }, { n: 1, n2: 3 }, { n: 1, n2: 4 }]).deep.eq(r);
    });

    it('should work with thenByDesc', () => {
        const r = Enumerable.from([{ n: 3, n2: 1 }, { n: 2, n2: 2 }, { n: 1, n2: 3 }, { n: 1, n2: 4 }])
            .orderByDescending(x => x.n)
            .thenByDescending(x => x.n2)
            .toArray();
        expect([{ n: 3, n2: 1 }, { n: 2, n2: 2 }, { n: 1, n2: 4 }, { n: 1, n2: 3 }]).deep.eq(r);
    });
});
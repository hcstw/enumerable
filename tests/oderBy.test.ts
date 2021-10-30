import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('oderBy Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 2 }, { n: 4 }, { n: 5 }, { n: 8 }])
            .oderBy(x => x.n)
            .toArray();
        expect([{ n: 1 }, { n: 2 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }, { n: 8 }]).deep.eq(r);
    });

    it('should work with thenBy', () => {
        const r = Enumerable.from([{ n: 3, n2: 1 }, { n: 2, n2: 2 }, { n: 1, n2: 4 }, { n: 1, n2: 3 }])
            .oderBy(x => x.n)
            .thenBy(x => x.n2)
            .toArray();
        expect([{ n: 1, n2: 3 }, { n: 1, n2: 4 }, { n: 2, n2: 2 }, { n: 3, n2: 1 }]).deep.eq(r);
    });

    it('should work with thenByDesc', () => {
        const r = Enumerable.from([{ n: 3, n2: 1 }, { n: 2, n2: 2 }, { n: 1, n2: 3 }, { n: 1, n2: 4 }])
            .oderBy(x => x.n)
            .thenByDescending(x => x.n2)
            .toArray();
        expect([{ n: 1, n2: 4 }, { n: 1, n2: 3 }, { n: 2, n2: 2 }, { n: 3, n2: 1 }]).deep.eq(r);
    });
});
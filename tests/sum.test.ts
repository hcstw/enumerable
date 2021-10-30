import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('sum Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 2, 3, 4, 5]).sum();

        expect(1 + 2 + 3 + 4 + 5).deep.eq(r);
    });

    it('should work with selector', () => {
        const r = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }]).sum(x => x.n);

        expect(1 + 2 + 3 + 4 + 5).deep.eq(r);
    });

    it('should throw when select non number', () => {
        assert.throw(() => Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }]).sum())
    });
});
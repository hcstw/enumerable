import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('takeLast Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 2, 3, 4, 5]).takeLast(2).toArray();

        expect([4, 5]).deep.eq(r);
    });
});
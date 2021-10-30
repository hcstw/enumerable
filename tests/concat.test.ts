import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('concat Tests', () => {
    it('should work', () => {
        const e = Enumerable.from([1, 2, 3]).concat([4, 5, 6]).toArray()
        expect([1, 2, 3, 4, 5, 6]).deep.eq(e);
    });
});